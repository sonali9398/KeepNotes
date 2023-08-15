import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
// import { AiFillAudio } from 'react-icons/md';
import {AiFillPushpin} from 'react-icons/ai'

const Area = ({onAdd}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState({
        title:'',
        content:'',
    });

    function handleChange(e){
        const {name, value} = e.target
        setNote((preValue) =>{
            return{
                ...preValue,
                [name]:value,

            }
        })
    }

    function handleExpanded(){
        setIsExpanded(true);
    }

    function submitBtn(event){
        onAdd(note);
        setNote({
            title:'',
            content:'',
        });
        event.preventDefault();
    }
  return (
    <div className='area'>
        <form >
            {isExpanded && (
                <><input
                      value={note.title}
                      type='text'
                      placeholder='Enter Title'
                      name='title'
                      onChange={handleChange} /></>
            )}
            
            <p>
                <textarea
                    value={note.content}
                    onClick={handleExpanded}
                    name='content'
                    placeholder='Take a Note..'
                    onChange={handleChange}
                    rows={isExpanded ? 3:1}
                />
                
            </p>
            <button onClick={submitBtn}><MdAdd size={25} color='white'/></button>
        </form>
        

    </div>
  )
}

export default Area