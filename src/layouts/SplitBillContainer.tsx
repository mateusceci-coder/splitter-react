import { ReactNode } from "react"

interface SplitBillContainer {
    children: ReactNode;
}

export default function SplitBillContainer ({children} : SplitBillContainer) {
    return <div className="sm:grid-cols-1 sm:mx-2 max-w-screen-lg bg-white md:mx-auto grid gap-10 md:grid-cols-2 p-7 rounded-3xl my-10">
        {children}
    </div>
}