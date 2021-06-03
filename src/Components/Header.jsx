import React from 'react'

function Header(){
    return (
        <div id='main'>
            <div className='header-heading'>
                <h3>It's grate time for a good taste of burger</h3>
                <h1><span>BURGER</span> FOR<br/> WEEK</h1>
                <p className='details'> Fresh and never frozen, handcrafted and cooked to perfection</p>
                <div className='header-btns'>
                    <a href='/#' className='header-btn'>Order</a>
                </div>
            </div>
        </div>
    )
}

export default Header
