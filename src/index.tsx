<<<<<<< HEAD
=======
import "./index.css"
>>>>>>> e27aefed1ede6b09838ceafc1c4d430ae609a035
import data from "./data.json"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { App } from "./components/app"
import { store } from "./store"

if (!localStorage.getItem("items"))
    localStorage.setItem("items", JSON.stringify(data))

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)