import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Phone = ({imgSrc, className, dark = false, ...props} : PhoneProps) => {
    return (
        <div className={cn("h-fit w-fit relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
            <img src={
                    dark ? "/home-chat.png"
                         : "/home-chat.png"
                } 
                className="h-100 w-500 pointer-events-none z-50 select-none"
            />
            <div className="absolute -z-10 inset-0">
                <img src={imgSrc} className="object-cover" alt="overlaying phone image" />
            </div>
        </div>
    )
}

export default Phone