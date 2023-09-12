import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import FilmInfo from './FilmInfo'


export default function Film() {
    const { id } = useParams()
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    
    const { isLoading, isError, data, error} = useQuery({queryKey: [`${id}`], queryFn:  () => {
        return  axios.get(url, {headers: headers,})
    }})


    if(isLoading){
        return <BeatLoader
        className='text-center mt-52'
        loading={isLoading}
        color='#3b82f6'
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
    }
    if(isError){
        return <h2 className='scroll-mt-44'>{error.message}</h2>
    }

    return (
        <section className=' mt-64 md:mt-32 flex mx-24  md:mx-12 lg:mx-40 flex-col shadow-lg  md:flex-row shadow-blue-300 border-2  p-7 rounded-lg'>
            <img src={`https://image.tmdb.org/t/p/original/${data.data.poster_path}`} 
                className='  w-44 md:w-72 md:mr-7 rounded-xl flex'
            />
            <FilmInfo data={data} />
        </section>
    )
}

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGE5YzdiOTMxZDExNmZkOGU5NTQ3ZmY3OWI1Nzk2YSIsInN1YiI6IjY0Y2E5MGE2NGZkMTQxMDEyNzA5MjRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hpsmBZxPNjV3qdvurfpmq_W6Jc5RrEoZ7j7rUenCmiA',
}
