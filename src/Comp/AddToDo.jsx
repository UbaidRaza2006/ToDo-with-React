import React, { useState } from 'react'
import './AddToDo.css'





function AddToDo() {
    const [inputdata, setinputdata] = useState('')
    const [items, setitems] = useState([]) 


    const additem = () => {
        if (!inputdata) {

        } else {
            setitems([...items, inputdata])
            setinputdata('')
        }

    }

    const handleDelete = (id) => {
        console.log(id);

        const updateditems = items.filter((elem, ind) => {
            return ind !== id;
        })
        console.log("UPDATED", updateditems)
        setitems(updateditems)
    }
    const removeall = () => {
        setitems([]);
    }

    return (
        <div>
            <div className='div'>
                <input className='inp' value={inputdata} onChange={(e) => setinputdata(e.target.value)} placeholder='Enter Text...' />
                <div className="butt-div">
                    <button className='butt' onClick={additem}>Add</button>
                    <button className='butt' onClick={removeall}>Delete All</button>
                </div>

                <div >
                    {
                        items.map((elem, ind) => {
                            return (
                                <div className='li-div' key={ind}> <h3>{elem} </h3><button className='butt123' onClick={() => handleDelete(ind)}>Delete</button>  </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )

}



export default AddToDo