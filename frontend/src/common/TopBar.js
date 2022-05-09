import React from 'react';

function TopBar(){

    const logout = () =>{
        localStorage.clear();
        window.location.assign("/");
    }

    return(
        <div className='topBar'>
            <div className='leftTopBar'></div>
            <div className='rightTopBar'>
                <div onClick={() => logout}>Logout</div>
            </div>
        </div>
    );
}

export default TopBar;