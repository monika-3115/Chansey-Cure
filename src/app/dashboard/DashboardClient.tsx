"use client";

import { useEffect, useState } from "react";

interface Conversation {
  id: number;
  user_input: string;
  bot_response: string;
  timestamp: string;
}

interface Feedback {
  id: number;
  name: string;
  feedback: string;
  rating: number;
  createdAt: string;
}

interface DashboardData {
  loggedInUsers: number;
  conversations: Conversation[];
  feedbacks: Feedback[];
}

export default function DashboardClient({ userEmail }: { userEmail: string }) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch("/api/dashboard");
        if (!res.ok) throw new Error("Failed to fetch dashboard data");
        const dashboardData: DashboardData = await res.json();
        setData(dashboardData);
      } catch (err) {
        setError("Error loading dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📊 Dashboard</h1>
      <p><span className="font-semibold text-pink-600">Welcome </span>{userEmail} ,</p>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="h-40 bg-white p-6 rounded-xl shadow-md hover:shadow-pink-200">
              <h2 className="text-xl font-semibold text-gray-800">👥 Logged-in Users</h2>
              <p className="text-2xl text-center pt-5 font-bold text-pink-600">{data.loggedInUsers}</p>
            </div>
            <div className="h-40 bg-white p-6 rounded-xl shadow-md hover:shadow-pink-200">
              <h2 className="text-xl font-semibold text-gray-800">💰 Current revenue</h2>
              <p className="text-2xl text-center pt-5 font-bold text-pink-600">Rs. 1,25,345</p>
            </div>

            <div className="h-40 bg-white p-6 rounded-xl shadow-md hover:shadow-pink-200">
              <h2 className="text-xl font-semibold text-gray-800">📄 No. of Feedbacks</h2>
              <p className="text-2xl text-center pt-5 font-bold text-pink-600">{data.feedbacks?.length ?? 0}</p>
            </div>
          </div>

          {/* Conversations */}
          <div className="bg-white p-6 rounded-xl shadow-md col-span-2 w-fit hover:shadow-pink-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">💬 Recent Conversations</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {data.conversations?.length > 0 ? (
                data.conversations.map((conv) => (
                  <div key={conv.id} className="p-4 bg-gray-50 rounded-md shadow-sm">
                    <p className="text-sm text-gray-500">{new Date(conv.timestamp).toLocaleString()}</p>
                    <p className="font-semibold text-pink-600">User: {conv.user_input}</p>
                    <p className="text-gray-700">Bot: {conv.bot_response}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No conversations yet.</p>
              )}
            </div>
          </div>

          {/* Feedbacks */}
          <div className="bg-white p-6 rounded-xl shadow-md col-span-3 hover:shadow-pink-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">📢 User Feedback</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {data.feedbacks?.length > 0 ? (
                data.feedbacks.map((fb, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-md shadow-sm">
                    <p className="text-sm text-gray-500">{new Date(fb.createdAt).toLocaleString()}</p>
                    <p className="font-semibold text-pink-600">{fb.name} (⭐ {fb.rating})</p>
                    <p className="text-gray-700">{fb.feedback}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No feedback submitted yet.</p>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md col-span-3 hover:shadow-pink-200">
            <h2 className="text-xl font-semibold text-gray-800">📈 Statistics</h2>
            <p className="text-gray-600">More insights coming soon...</p>
          </div>
        </div>
      )}
    </div>
  );
}
