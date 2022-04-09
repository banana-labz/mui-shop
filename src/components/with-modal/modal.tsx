import "./modal.css"
import type { FC, ReactElement } from "react"

export interface ModalProps {
    close: () => void,
    children?: ReactElement
}

export const Modal: FC<ModalProps> = ({ close, children }) => (
    <div className="modal" onClick={close}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
)