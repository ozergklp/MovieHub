import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

export default function List({url, headline}) {
    const [films, setFilms] = useState([]);
    

    useEffect(() => {  
        let ignore = false;

        const fetchData = async () => {
                console.log(2)
                let data = await useFetch(url);
        
                let imgPromises = data.results.map(async item => {
                    return await useFetch(`https://api.themoviedb.org/3/movie/${item.id}/images?include_image_language=en`)
                });
                let imgData = await Promise.all(imgPromises);
        
                if (!ignore) {
                    setFilms(imgData);
                }
            
        };
        console.log(1)
        fetchData();
        console.log(3)
    
        return () => {
            ignore = true;
        };
    }, [url])

    useEffect(() => {
        console.log(films)
    }, [films])
    
    

    return (
        <>
        <h2 className=' ml-20 mt-20 '>{headline}</h2>
        <ul className='m-10 mt-5 grid xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 place-items-center'>
        {films.map((item, index) => {
            if (item.posters.length > 0) {
                const imageUrl = `https://image.tmdb.org/t/p/original${item.posters[0].file_path}`;
                //console.log(index ,imageUrl, item);

                return (
                    <li key={item.id}
                        className='m-5'>
                        <img className='w-44' src={imageUrl} />
                    </li>
                );
            }
            return null;
        })}
        </ul></>





    )
}