import "./app.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { ListPage } from "../list"

export const App = () => {
    return (
        <div className="main-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/list"/>}/>
                    <Route path="/list" element={<ListPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

/*

export const App = () => {
    const [modalState, setModalState] = useState(false)
    const open = () => setModalState(true) 
    const close = () => setModalState(false)
    return (
        <div className="main-container">
            <button onClick={open}>OPEN MODAL</button>
            {modalState && <ItemAdd close={close} save={data => { }}/>}
            {lorem}
        </div>
    )
}

*/