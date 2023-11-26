import { IComment } from "../../screens/details/DetailsScreen";
import style from './Comment.module.css'

export function Comment ({id, name, content, bookId, email, createdAt}:IComment){

    return (
        <div className={style.commentContainer}>
            <span>
                <span className={style.data}>
                    {new Date(createdAt).toLocaleDateString("pt-br")} -
                </span>
                <span className={style.name}>
                    {' '}{name}
                </span>:
                <span className={style.content}>
                    {" "}{content}
                </span>
            </span>
        </div>
    )

}