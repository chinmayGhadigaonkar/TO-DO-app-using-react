import React from "react";


const ToDo = (props) => {
   
    return (
        <>       
 <li>  <i className="bi bi-x-circle-fill"  onClick={()=>{
    props.onSelect(props.id);
 }} ></i>
                         {props.text}</li>
                 

        </>
    );
}


export default ToDo;
