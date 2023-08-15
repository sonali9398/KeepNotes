import React from 'react'

function Header(props){
    const logo = (<img src='https://img.icons8.com/color/48/google-keep.png' alt='keep'/>);
    return (
        <div className='header'>
            {logo}
            <h3>Keep Notes</h3>
    
        </div>
      )
} 



export default Header