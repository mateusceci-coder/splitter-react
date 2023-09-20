import { ReactNode } from "react"

interface PercentageComponentProps {
    children: ReactNode,
    value: number
    onClick?: React.MouseEventHandler,
    tip: number
}


export default function PercentageItem({children, value, onClick, tip}: PercentageComponentProps) {
    
    return(
        <li value={value} onClick={onClick} className={`text-center w-5/6 text-white text-xl p-1 font-extrabold rounded-md ${value === tip ? "bg-gray-500" : "bg-gray-700"} hover:bg-gray-500  cursor-pointer`}>{children}
        </li>
    )
}