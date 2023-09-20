import LabelSplit from "../../layouts/LabelSplit"
import PercentageList from "./PercentageList"
import { Dispatch, SetStateAction } from "react"

interface PercentageComponentProps {
    onChangeTip: Dispatch<SetStateAction<any>>,
    tip: number
}

export default function PercentageComponent({onChangeTip, tip}: PercentageComponentProps) {
    return (
        <>
            <LabelSplit>Select tip %</LabelSplit>
            <PercentageList tip={tip} onChangeTip={onChangeTip} />
        </>
    )
}