import React, { useState } from "react"
import "./App.css"
import MyButton from "./components/MyButton/MyButton.jsx"
import MyInput from "./components/MyInput/MyInput"
import MyModal from "./components/Modal/MyModal.jsx"

function App() {
    const [modal, setModal] = useState(false)
    const [fuel, setfuel] = useState(0)
    const [mph, setMph] = useState(0)
    const [startMiliage, setStartMiliage] = useState("")
    const [endMiliage, setEndMiliage] = useState("")

    const fuelUsage = 11.35
    const fuelTrack = 3.68
    const track = 40

    const handleClick = () => {
        setfuel(
            ((endMiliage - startMiliage - track) * fuelUsage) / 100 + fuelTrack)
        setMph(endMiliage - startMiliage)
        setModal(true)
    }

    return (
        <div className="App">
            <MyModal visible={modal} setVisible={setModal}>
                <h1>{fuel} л</h1>
                <br />
                <h1>
                    Пробег:
                    <br />
                    {mph} км
                </h1>
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
