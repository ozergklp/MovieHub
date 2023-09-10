import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <input  type="text" 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='border-rose-800 border-2'
                    />
            <button onClick={() => navigate(`/${searchTerm}`)}>search</button>
        </>
    )
}
