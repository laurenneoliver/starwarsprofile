import React, {useState} from "react";
import '../styles/Searchbar.css';
import { FaSearch } from "react-icons/fa";

function Searchbar({onSearch}){ {/*passes API function from App.js as prop*/}
    const [input, setInput] = useState(""); 

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && input.trim()) {
             
            onSearch(input); {/*Calls `onSearch` an API function from App.js and passed the input from search*/}
        }
    };

    return(
        <div className="input-wrapper">
            <FaSearch id='search-icon' style={{color: 'black'}}/>
            <input 
                placeholder="Search for characters..." 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown} 
            />
        </div>
    );
};

export default Searchbar;