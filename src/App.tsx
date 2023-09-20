import SplitBillContainer from "./layouts/SplitBillContainer"
import TotalBillContainer from "./layouts/TotalBillContainer"
import BillPerPersonContainer from "./layouts/BillPerPersonContainer"
import TipPerPerson from "./components/TipPerPerson"
import TotalPerPerson from "./components/TotalPerPerson"
import PeopleComponent from "./components/PeopleComponent"

import { ChangeEvent, useState } from "react"
import BillComponent from "./components/BillComponent"
import PercentageComponent from "./components/percentage/PercentageComponent"


export default function App() {
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(1)
  const [tip, setTip] = useState<number>(0)

  function handleReset() {
    setBill(0)
    setPeople(1)
    setTip(0)
  }

  function handleTip (percentage: number) {
    setTip(percentage)
  }

  function handlePeople(e: ChangeEvent<HTMLInputElement>) {
    setPeople(+e.target.value)
  }

  function handleBill(e: ChangeEvent<HTMLInputElement>) {
    setBill(+e.target.value)
  }

  
  return (
    <div className="bg-sky-200 h-screen">
      <h1 className="text-center text-slate-500 py-10 mb-10 text-6xl">SPLITTER</h1>
      <SplitBillContainer>
          <TotalBillContainer>
            <BillComponent bill={bill} onChangeBill={handleBill}/>

            <PercentageComponent tip={tip} onChangeTip={handleTip} />

            <PeopleComponent people={people} onChangePeople={handlePeople} />

          </TotalBillContainer>
          <BillPerPersonContainer>
            <TipPerPerson tip={tip} bill={bill} people={people}/>
            <TotalPerPerson  tip={tip} bill={bill} people={people}/>
            <button onClick={handleReset} className="bg-gray-500 w-5/6 p-1 rounded-xl hover:bg-gray-400">Reset</button>
          </BillPerPersonContainer>

      </SplitBillContainer>
    </div>
  )
}