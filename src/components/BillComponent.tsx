import LabelSplit from "../layouts/LabelSplit"
import InputSplit from "../layouts/InputSplit"
import { ChangeEvent } from "react"

interface BillComponentProps {
    bill: number,
    onChangeBill: (event: ChangeEvent<HTMLInputElement>) => void,
 }

export default function BillComponent({bill, onChangeBill}:BillComponentProps){
    return (
        <>
            <LabelSplit>Bill</LabelSplit>
            <InputSplit min="0" value={bill} onChange={onChangeBill} />
        </>
    )
}