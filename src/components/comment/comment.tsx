import type { CommentData } from "../../utils/comment"
import type { FC } from "react"

export const Comment: FC<CommentData> = ({ date, description }) => (
    <li>
        <h4>{description}</h4>
        <h5>{date}</h5>
    </li>
)