import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        navigate('/search')
    };

    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" fontSize="small" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon fontSize="medium" />
            </div>

            <div className="search_buttons">
                <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search