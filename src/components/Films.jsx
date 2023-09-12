import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import LayoutUl from '../layouts/LayoutUl';
import { BeatLoader } from 'react-spinners'



export default function Films() {
    const { film } = useParams();
    const url = `https://api.themoviedb.org/3/search/movie?query=${film}&include_adult=false&language=en-US&page=1`
    const { isLoading, isError, data, error} = useQuery({queryKey: [`${film}`], queryFn:  () => {
        return  axios.get(url, {headers: headers,})
    }})

    if (isError) {
        return <h2 className='mt-44'>error</h2>
    }


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

    return (
        <LayoutUl data={data} />
    )      
}


const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGE5YzdiOTMxZDExNmZkOGU5NTQ3ZmY3OWI1Nzk2YSIsInN1YiI6IjY0Y2E5MGE2NGZkMTQxMDEyNzA5MjRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hpsmBZxPNjV3qdvurfpmq_W6Jc5RrEoZ7j7rUenCmiA',
}
