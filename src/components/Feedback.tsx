"use client";

import { Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Feedback = () => {
    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const formRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const handleSubmit = async () => {
        if (!name || !feedback || rating === 0) {
            alert("Please fill out all fields!");
            return;
        }
        try {
            const response = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, feedback, rating }),
            });
            if (response.ok) {
                alert("Feedback submitted successfully!");
                setName("");
                setFeedback("");
                setRating(0);
                setIsOpen(false);
            } else {
                alert("Failed to submit feedback!");
            }
        } catch (error) {
            console.error("Error in submitting feedback: ", error);
        }
    };

    return (
        <div>
            {/* feedback button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-25 right-10 w-12 h-12 flex items-center justify-center rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-700"
            >
                💬
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex justify-end">
                    <div
                        ref={formRef}
                        className="h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out p-6 border-l"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                        >
                            ✖
                        </button>

                        <h2 className="text-xl font-bold mb-4">Give Feedback</h2>

                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                            />

                            <textarea
                                placeholder="Your feedback..."
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                            />

                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600">Rate:</span>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={24}
                                        className={`cursor-pointer ${
                                            rating >= star ? "text-pink-500 fill-pink-600" : "text-gray-400"
                                        }`}
                                        onClick={() => setRating(star)}
                                    />
                                ))}
                            </div>

                            <button
                                className="w-full px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
                                onClick={handleSubmit}
                            >
                                Submit Feedback
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Feedback;
