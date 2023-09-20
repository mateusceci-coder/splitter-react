import LabelSplit from "../layouts/LabelSplit"
import InputSplit from "../layouts/InputSplit"
import { ChangeEvent } from "react"

interface PeopleComponentProps {
    people: number,
    onChangePeople: (event: ChangeEvent<HTMLInputElement>) => void
 }

export default function peopleComponent({people, onChangePeople}:PeopleComponentProps){
    return (
        <>
            <LabelSplit>Number of People</LabelSplit>
            <InputSplit min="1" value={people} onChange={onChangePeople} />
        </>
    )
}