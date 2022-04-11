import "./modal.css"
import type { FC, ReactElement } from "react"
import { useNavigate } from "react-router"

export interface ModalProps {
    children?: ReactElement
}

export const Modal = ({ children }: ModalProps) => {
    const navigate = useNavigate()

    return (
        <div className="modal" onClick={() => navigate("../")}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}