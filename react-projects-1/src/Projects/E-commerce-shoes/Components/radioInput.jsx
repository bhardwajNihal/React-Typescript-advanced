import React from "react";

export const RadioLabel = ({name,title}) => {

    return(
        <label>
            <input type="radio" name={name} />
            <span>{title}</span>
        </label>
    )
}