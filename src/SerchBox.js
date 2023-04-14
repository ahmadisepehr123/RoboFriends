import React from "react";


const SerchBox = ({serchChange}) => {
    return (
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="serch" 
            placeholder="Serch for robots" 
            onChange={serchChange}
            />        
        </div>

         )
       }

export default SerchBox;