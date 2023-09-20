import { ChangeEvent } from "react"

interface InputSplitProps {
    value?: number
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    min: string
}


export default function InputSplit({value, onChange, min}: InputSplitProps) {
    return (
    <input value={value} min={min} onChange={onChange} type="number" placeholder="0" className="bg-gray-200 p-1 text-right rounded-lg w-full mb-5"/>
    )
    
}