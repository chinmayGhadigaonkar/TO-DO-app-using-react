
import React, { useState } from "react";
import ToDo from "./Todo";






const Demo = () => {
  const [inputlist, setinputList] = useState("");

  const [item, setItem] = useState([]);
  const inputData = (event) => {
    setinputList(event.target.value);
  }

  const listofitem = () => {
    setItem((oldItem) => {
      return [...oldItem, inputlist];
    })
  };
  const deleteItem = (id) => {
    console.log("deleted");


    setItem((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;

      })
    })
  }




  return (
    <>
      <div className="main-class">
        <h1 >To-Do App  </h1>
        <div className="to-do">
          <h2> Enter your To do </h2>
          <input type="text" onChange={inputData} />
          <button onClick={listofitem}>+</button><br></br>
          <div className="list">
          <ol>
            {item.map((itemval, index) => {
              return (
                <ToDo key={index} id={index} text={itemval}
                  onSelect={deleteItem} > </ToDo>
              )

            })}
          </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;