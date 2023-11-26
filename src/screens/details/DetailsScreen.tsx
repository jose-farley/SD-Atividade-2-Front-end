import { useEffect, useState } from 'react';
import style from './DetailsScreen.module.css'
import { useNavigate, useSearchParams} from 'react-router-dom'
import axios from 'axios';
import {ArrowLeft} from '@phosphor-icons/react'
import { Comment } from '../../components/Comment/Comment';
export interface IComment {
    bookId:string
    content:string
    email:string
    name:string
    id:string
    createdAt:string
}

export function DetailsScreen(){
    
    const [searchParams, setSearchParams] = useSearchParams();
    const [img, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [bookId, setBookId] = useState('')
    const [comments, setComments] = useState<Array<IComment>>()

    async function getData(){
        let response = await axios.get(`http://localhost:3000/detalhes?id=${searchParams.get("id")}`)
        setComments(response.data.data.comments.data)
        setImage(response.data.data.data.volumeInfo.imageLinks.smallThumbnail)
        setTitle(response.data.data.data.volumeInfo.title)
       setDescription(response.data.data.data.volumeInfo.description)
       setBookId(response.data.data.data.id)
    }
    useEffect(()=>{
        getData()
        
    }, [])

    const navigate = useNavigate()
    const [comment, setComment] = useState('')
    function handleCommentChange(event:any){
        setComment(event.target.value   ) 
    }
    function handleComeBackClick(){
        navigate("/inicio")
    }
    async function handlePublishComment(){
        let result = await axios.post("http://localhost:3000/comment", {
            content:comment,
            email:localStorage.getItem('user.email'),
            name:localStorage.getItem('user.name'),
            bookId:bookId
        }) 
        if(result.data.has_error) alert("Houve um problema ao salvar seu comentário")
        await getData()
    }
   
    return(
        <div className={style.detailContainer}>

            <button 
                className={style.backButton}
                onClick={handleComeBackClick}
            >
                <ArrowLeft size={32} />
            </button>

            <div className={style.bookContainer}>
                <img className={style.img} src={img} />
                <div>
                    <strong>{title}</strong>
                    <div className={style.text} dangerouslySetInnerHTML={{ __html: description }} />    
                </div>
               
            </div>

            <div className={style.containerComment}>
                <textarea 
                    value={comment}
                    onChange={handleCommentChange}
                    className={style.textArea}
                    name="comment" 
                />
                <button 
                    onClick={handlePublishComment}
                    disabled={!comment}
                    className={style.btnPublish}
                >
                    Publicar
                </button>
            </div >
            <h1 className={style.title}>Comentários</h1>
            <div className={style.containerForum}>
             
               {
                 comments?.map(element => {
                    return (
                        <Comment  
                           {...element}
                        />
                    )
                 })
               }
            </div>
            
            
        </div>
    
       
    )
}