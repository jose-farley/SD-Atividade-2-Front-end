import style from './Book.module.css'
import bookSample from '../assets/book.png'
import { useNavigate } from 'react-router-dom'

interface props {
    id:string
    src?:any
    title:string
    description:string
}

export function Book({src, title, description, id}:props){
    const navigate = useNavigate()

    function handleClick(){
        navigate(`/detalhes?id=${id}`)
    }
    
    if(!src){
        return (
        
            <div className={style.bookContainer}>
                <img className={style.image} src={bookSample} />
                <span className={style.title}>{title}</span>
            </div>
        )
    }else{
        return (

            <div className={style.bookContainer} >
                <img className={style.image} src={src} onClick={handleClick}/>
                <span className={style.title} >{title}</span>
            </div>
        )
     
    }
    
   
}