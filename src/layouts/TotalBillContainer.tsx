import { ReactNode } from "react"

interface TotalBillContainer {
    children: ReactNode;
}

export default function TotalBillContainer({children}: TotalBillContainer) {
    return (
        <div className="">
            {children}
        </div>
    )
}