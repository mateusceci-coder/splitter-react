import LabelSplit from "../../layouts/LabelSplit"
import PercentageList from "./PercentageList"

interface PercentageComponentProps {
    onChangeTip: (value: number) => void,
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
