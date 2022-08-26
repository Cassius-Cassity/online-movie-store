import React, { useState } from "react";


function Header(){
    const [searchTerm, setSearchTerm ] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return(
        <div className="header-container">
            <div className="header">
                <form onSubmit={handleSubmit}>
                    <input
                        className="search"
                        type="text"
                        placeholder="Search Movies"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </form>
            </div>
        </div>
    )
};

export default Header;