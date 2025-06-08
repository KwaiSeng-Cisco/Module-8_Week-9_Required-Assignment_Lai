import React, { useState } from 'react';

function ListInput() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
      const newItems = items.filter((_, i) => i !== index);
      setItems(newItems);
  };


  const default_todo_list = ["Complete Assignment (default)","Submit Assignment(default)","Take a Coffee(default)"]

  return (
    <div>
    <div className="grid-container" >

        <input className="grid-item1"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter New Todo List"
        />
        <button className="grid-item2"
        class="Add" 
        onClick={handleAddItem}>Add To Do</button>
      </div>

          To do list can be added and deleted  in a dynamic manner. Try!

            {default_todo_list.map((item, index) => (
              <div className='grid-container'>
                
                <div className='grid-item1'>
                <ul >
                  <li>
                      Task  {index + 1} : {item}
                  </li>
                </ul>
                </div>
              </div>

            ))}

            {items.map((item, index) => (
              <div className='grid-container'>
                
                <div className='grid-item1'>
                <ul >
                  <li>
                      Task  {index + 4} : {item}
                  </li>
                </ul>
                </div>

                <div className='grid-item2'> 
                <button  class="Delete" onClick={() => handleDeleteItem(index)}>Delete Task {index + 4 } </button>
                 </div>
              </div>

            ))}

        
    
   
    </div>
  );
}

export default ListInput;