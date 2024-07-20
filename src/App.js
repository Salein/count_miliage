import React, { useState } from "react"
import "./App.css"
import MyButton from "./components/MyButton/MyButton.jsx"
import MyInput from "./components/MyInput/MyInput"
import MyModal from "./components/Modal/MyModal.jsx"

function App() {

    const [modal, setModal] = useState(false)
    const [clear1, setClear1] = useState("")
    const [clear2, setClear2] = useState("")

    const handleClick = () => {
      
  
      setModal(true)
    }

    return (
        <div className="App">
            <MyModal visible={modal} setVisible={setModal}>
                <h1>drg</h1>
            </MyModal>
            <MyInput
                type="number"
                min="0"
                onChange={(e) => setClear1(e.target.value)}
                value={clear1}
                placeholder="Кол-во банок 1 рейс"
            />
            <MyInput
                type="number"
                min="0"
                onChange={(e) => setClear2(e.target.value)}
                value={clear2}
                placeholder="Кол-во банок 2 рейс"
            />
            <MyButton onClick={handleClick}>Посчитать</MyButton>
        </div>
    )
}

export default App
