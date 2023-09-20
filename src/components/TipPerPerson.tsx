
interface tipPerPersonProps {
    bill: number
    people: number
    tip: number
}

export default function TipPerPerson({bill, people, tip}: tipPerPersonProps) {

    const tipPerPerson = ((bill*tip)/people).toFixed(2)

    return <div className="flex justify-between mb-5">
        <p>Tip Amount <span className="block text-slate-400">/person</span></p>
        <p className="text-slate-400 text-3xl mb-10">${people > 0 && tipPerPerson}</p>
    </div>
}