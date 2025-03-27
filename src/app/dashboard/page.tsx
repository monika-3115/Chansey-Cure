import WidthWrapper from "@/components/WidthWrapper"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { notFound } from "next/navigation"

const Page = async () => {

    const {getUser} = getKindeServerSession()
    const user = await getUser()

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL
    if(!user || user.email !== ADMIN_EMAIL){
        return notFound()
    }
    // const users = await db.order.findMany({
    //     where: {
    //         createdAt: {
    //             gte: new Date(new Date().setDate(new Date().getDate()-7)),
    //         },
    //     },
    // })

    return (
        <div className="flex min-h-screen w-full bg-muted/40">
            <WidthWrapper>
            <div className="mb-12 px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                        Dashboard!
                    </h2>
                </div>
          </div>
            </WidthWrapper>
        </div>
    )

   
}

export default Page