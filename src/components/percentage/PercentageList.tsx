import PercentageItem from "./PercentageItem"
import { Dispatch, SetStateAction } from "react"

interface PercentageListProps {
    onChangeTip: Dispatch<SetStateAction<any>>,
    tip: number
}

export default function PercentageList({onChangeTip, tip}: PercentageListProps) {

    const percentages = [{percentage: "5%", value: 0.05}, {percentage: "10%", value: 0.1}, {percentage: "15%", value: 0.15}, {percentage: "25%", value: 0.25}, {percentage: "50%", value: 0.5}, {percentage: "100%", value: 1}]

    return (
        <ul className="grid gap-4 grid-cols-3 grid-row-3 mb-10">
            {percentages.map((percentage,index) => <PercentageItem key={index} tip={tip} onClick={() => onChangeTip(percentage.value)}  value={percentage.value}>{percentage.percentage}</PercentageItem>)}
        </ul>
    )
}