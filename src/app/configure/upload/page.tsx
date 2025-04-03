import ChatBox from "@/components/ChatBot";
import WidthWrapper from "@/components/WidthWrapper";

const Page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-200">
            <ChatBox />
        </div>
    )
}

export default Page

// export default function Page() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <ChatBox />
//     </div>
//   );
// }
