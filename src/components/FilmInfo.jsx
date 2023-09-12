import React from 'react'

export default function FilmInfo({data}) {
    return (
        <article className=' grid grid-cols-3 items-center '>

        <aside className='text-4xl font-medium text-slate-800 mb-2 col-span-3 flex items-center justify-between'> 
            <p className='pr-24'>{data.data.original_title}</p> 
            <p className='text-right  text-2xl mt-3 font-medium shadow-xl shadow-blue-200  border-2 rounded-full l self-start p-2 '> 
            {data.data.vote_average.toFixed(1)} 
            </p>
        </aside>

        <p  className='col-span-3 text-2xl font-medium mb-3 text-slate-800 '> 
            {data.data.tagline} 
            </p>
        <p  className='col-span-3  w-full text-xl mb-10 text-slate-800 font-medium leading-8 box-border  '>
            {data.data.overview}
            </p>
        <aside className='text-slate-800 flex flex-col sm:flex-row col-span-3 sm:items-center font-medium'>
            {data.data.genres.map(item => (
                    <p key={item.id}
                        className='rounded-xl p-2 mr-10 md:mr-5 text-lg shadow-xl shadow-blue-200 border-2'> 
                        {item.name} 
                    </p>
                
            ))}
            
            
            <p className='text-lg mr-10 rounded-xl p-2 shadow-xl shadow-blue-200 border-2 ' > {new Date(data.data.release_date).getFullYear()} </p>
        </aside>
    </article>

    )
}
