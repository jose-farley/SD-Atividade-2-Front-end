import { useEffect, useState } from 'react'
import style from './HomeScreen.module.css'
import {MagnifyingGlass} from '@phosphor-icons/react'
import { api } from '../../api'
import axios from 'axios'
import { Book } from '../../components/Book'
import lupa from '../../assets/magnifying-glass.svg'
interface ImageLinks {
    smallThumbnail:string
}

interface VolumeInfo {
    title:string
    description:string
    imageLinks?:ImageLinks
}
interface BookProps {
    id:string
    volumeInfo:VolumeInfo
}

export function HomeScreen(){

    const [search, setSearch] = useState("")
    const [books, setBooks] = useState<Array<BookProps>>([])
    const [image, setImage] = useState('')

    useEffect(()=>{
        if(localStorage.getItem("user.image")){
            setImage(localStorage.getItem("user.image")!)
        }
        
    }, [])

    function handleChangeSearch(event:any){
        setSearch(event.target.value)
    }
    async function handleSearch(){
        let response = await axios.get(`http://localhost:3000/livros?q=${search}`)
        setBooks(response.data.data.items)
    }
    
    return (
        <div className={style.container}>
            <nav className={style.menu}>

                <div className={style.containerUserInfo}>

                    <img className={style.perfilImage} src={image} />

                    <span className={style.name} >
                        {localStorage.getItem("user.name")}
                    </span>
                </div>
               
                <div className={style.containerSeach}>
                    <input 
                        className={style.input} 
                        value={search}
                        type="text"
                        onChange={handleChangeSearch} 
                    />

                    <button
                        onClick={handleSearch}
                        className={style.button}
                    > 
                        <img src={lupa}  />
                    </button>
                </div>
               
            </nav>

            <div className={style.booksContainer}>
                {
                    
                    books.map(book => {
                      
                        if(book.volumeInfo.imageLinks){
                            return (
                                <Book 
                                    src={book.volumeInfo.imageLinks.smallThumbnail} 
                                    title={book.volumeInfo.title}
                                    description = {book.volumeInfo.description}
                                    id={book.id}
                                />
                            )
                           
                        }

                    })
                }
            </div>
        </div>
    )
}