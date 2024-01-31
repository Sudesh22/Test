import './Settings.css';
import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as LuIcons from "react-icons/lu";

export default function Settings({ onRouteChange, baseUrl }) {

    function changePass(e) {
        fetch(`${baseUrl}/changePass`, {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                access_token: localStorage.getItem("userProfile")
            }),
        })
            .then((response) => response.json())
            .then((user) => {
                onRouteChange("verify");
            });
    }

    function addRecovery(e) {
        onRouteChange("recovery");
    }

    return (
        <div className='setting-container'>
            <p>Settings</p>
            <div className='holder'>
                <div className="option" onClick={changePass}>
                    <div className='title'>
                        <div className='icon'>
                            <FaIcons.FaUserLock />
                            <span > Change Password</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='holder'>
                <div className="option" onClick={addRecovery}>
                    <div className='title'>
                        <div className='icon'>
                            <LuIcons.LuMail />
                            <span > Recovery Email</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}