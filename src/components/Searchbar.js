import React, { useState } from "react";

import "./Searchbar.scss"
import Button from "./Button/Button";

const Searchbar = (props) => {

    const {onSearch} = props

    const [search, setSearch] = useState();
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar-container-searchinput">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-container-button">
                <Button to={onButtonClickHandler} >Buscar</Button>
            </div>
        </div>
    );
};

export default Searchbar;
