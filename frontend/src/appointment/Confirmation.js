import React from "react";

export default function Confirmation(){

    const handleClick = () =>{
        window.location.assign("/home");
    }

    return(
        <>
            <h2>
                Your booking is confirmed
            </h2>
            <span>Make another booking? <a href="#" onClick={handleClick}> Click here</a></span>
        </>
    );
}