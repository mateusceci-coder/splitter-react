import { ReactNode } from "react";

interface LabelSplit {
    children: ReactNode
}

export default function LabelSplit ({children}: LabelSplit) {
    return (
        <label className="block text-slate-500" htmlFor="bill">{children}</label>
    )
}