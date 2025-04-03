// import WidthWrapper from "@/components/WidthWrapper"
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
// import { notFound } from "next/navigation"

// const Page = async () => {

//     const {getUser} = getKindeServerSession()
//     const user = await getUser()

//     const ADMIN_EMAIL = process.env.ADMIN_EMAIL
//     if(!user || user.email !== ADMIN_EMAIL){
//         return notFound()
//     }
    
//     // const users = await db.order.findMany({
//     //     where: {
//     //         createdAt: {
//     //             gte: new Date(new Date().setDate(new Date().getDate()-7)),
//     //         },
//     //     },
//     // })

//     return (
//         <div className="flex min-h-screen w-full bg-muted/40">
//             <WidthWrapper>
//             <div className="mb-12 px-6 lg:px-8">
//                 <div className="mx-auto max-w-2xl sm:text-center">
//                     <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
//                         Dashboard!
//                     </h2>
//                 </div>
//           </div>
//             </WidthWrapper>
//         </div>
//     )

   
// }

// export default Page


"use client";

import { useEffect, useState } from "react";

interface Conversation {
  id: number;
  user_input: string;
  bot_response: string;
  timestamp: string;
}

interface DashboardData {
  loggedInUsers: number;
  conversations: Conversation[];
}

export default function Dashboard() {
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

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Logged-in Users Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">👥 Logged-in Users</h2>
            <p className="text-2xl font-bold text-blue-600">{data.loggedInUsers}</p>
          </div>

          {/* Conversations List */}
          <div className="bg-white p-6 rounded-xl shadow-md col-span-2">
            <h2 className="text-xl font-semibold mb-4">💬 Recent Conversations</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {data.conversations.length > 0 ? (
                data.conversations.map((conv) => (
                  <div key={conv.id} className="p-4 bg-gray-50 rounded-md shadow-sm">
                    <p className="text-sm text-gray-500">{new Date(conv.timestamp).toLocaleString()}</p>
                    <p className="font-semibold text-gray-800">User: {conv.user_input}</p>
                    <p className="text-gray-700">Bot: {conv.bot_response}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No conversations yet.</p>
              )}
            </div>
          </div>

          {/* Placeholder for future statistics */}
          <div className="bg-white p-6 rounded-xl shadow-md col-span-3">
            <h2 className="text-xl font-semibold">📈 Statistics</h2>
            <p className="text-gray-600">More insights coming soon...</p>
          </div>
        </div>
      )}
    </div>
  );
}
