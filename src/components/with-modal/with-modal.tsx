import type { ComponentType } from "react"
import type { ModalProps } from "./modal"
import { Modal } from "./modal"

export const withModal = <BaseProps extends ModalProps>(Component: ComponentType<BaseProps>) => (
    (props: BaseProps) => (
        <Modal close={props.close}>
            <Component {...props}/>
        </Modal>
    )
)