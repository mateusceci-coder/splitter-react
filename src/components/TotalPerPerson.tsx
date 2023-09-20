interface TotalPerPersonProps {
    bill: number
    people: number
    tip: number
}


export default function TotalPerPerson({bill, people, tip}: TotalPerPersonProps) {

    const totalPerPerson = ((bill*(1+tip))/people).toFixed(2)
    
    return <div className="flex justify-between mb-5">
        <p>Total <span className="block text-slate-400">/person</span></p>
        <p className="text-slate-400 text-3xl mb-10">${people > 0 && totalPerPerson}</p>
    </div>
}