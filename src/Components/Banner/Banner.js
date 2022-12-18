import React ,{useEffect, useState} from 'react'
import axios from '../../Axios/Axios'
import { API_KEY } from '../../Constants/Constants'
import { imageUrl } from '../../Constants/Constants'
import './Banner.css'
function Banner() {
    const [movie,setMovie]=useState()
    const [index,setIndex]=useState()

    useEffect(()=>{
        setInterval(() => {
            let num = Math.floor(Math.random() * 20)
            setIndex(num)
        }, 10000);
    },[])

    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[index])
        })
    }, [index])
    
    return (
        <div 
        style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
         className='banner'>
            <div className='content'>
                <h1 className='title'>{movie?movie.title||movie.name:''}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie?movie.overview:''}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner