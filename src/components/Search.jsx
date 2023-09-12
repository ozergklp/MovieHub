import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    return (
        <aside className='m-0 h-9 bg-slate-200 pl-3 pr-1 rounded-2xl flex items-center w-full sm:w-40 justify-between'>
            <input  type="text" 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='bg-transparent font-medium focus:outline-none w-3/4 text-slate-400'
                    />
            <button onClick={() => navigate(`/${searchTerm}`)}
                    className='focus:outline-none'    >
                <BiSearch className='mr-1 text-slate-400 font-bold'/> 
            </button>
        </aside>
    )
}
