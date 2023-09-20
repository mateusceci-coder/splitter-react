import { ReactNode } from "react";

interface BillPerPersonContainer {
    children: ReactNode;
}

export default function BillPerPersonContainer({children}: BillPerPersonContainer) {
   return <div className="bg-gray-700 rounded-3xl p-5 text-white">{children}</div>
}