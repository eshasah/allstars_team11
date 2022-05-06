import React from "react";
import Registration from "../login/Register"

export default function NewRegistration(props){


    return(
        <div>
            <div>
                <div>
                    <h1 className="page-hearder">Get an account by filling few details.</h1>
                </div>
                <div className="popup-content">
                    <Registration></Registration>
                </div>
            </div>
        </div>
    );
}