import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LayoutUl({data}) {
    const navigate = useNavigate();
    return (
        <ul className="m-14 mt-64 sm:mt-20 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center">

            {data.data.results.map(item => {
                return (
                    <li className='w-52 h-80 m-5'
                        key={item.id}
                        onClick={() => navigate(`/details/${item.id}`)}>
                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                        alt="image" 
                        className=' m-0 hover:cursor-pointer rounded-xl shadow-lg shadow-blue-400 hover:shadow-xl hover:shadow-purple-400'
                    
                        />
                    </li>
                )
            })}
    </ul>    

    )
}
