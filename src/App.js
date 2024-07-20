import React, { useState } from "react"
import "./App.css"
import MyButton from "./components/MyButton/MyButton.jsx"
import MyInput from "./components/MyInput/MyInput"
import MyModal from "./components/Modal/MyModal.jsx"

function App() {

    const [modal, setModal] = useState(false)
    const [mph, setMph] = useState(0)
    const [startMiliage, setStartMiliage] = useState("")
    const [endMiliage, setEndMiliage] = useState("")

    const handleClick = () => {
      setMph(endMiliage - startMiliage)
  
      setModal(true)
    }

    return (
        <div className="App">
            <MyModal visible={modal} setVisible={setModal}>
                <h1>{mph}</h1>
            </MyModal>
            <MyInput
                type="number"
                min="0"
                onChange={(e) => setStartMiliage(e.target.value)}
                value={startMiliage}
                placeholder="Введите пробег выезда"
            />
            <MyInput
                type="number"
                min="0"
                onChange={(e) => setEndMiliage(e.target.value)}
                value={endMiliage}
                placeholder="Введите пробег вьезда"
            />
            <MyButton onClick={handleClick}>Посчитать</MyButton>
        </div>
    )
}

export default App
