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