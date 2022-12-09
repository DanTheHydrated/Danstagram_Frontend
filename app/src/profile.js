import React from "react";
import { useGlobalState } from "./context/GlobalState";
import request from './services/api.request';
import { useEffect, useState } from 'react';
import Anon from './Images/Anon.png'
import {CgProfile} from 'react-icons'

const Profile = () => {
    const [state, dispatch] = useGlobalState();
    const Myself = state.currentUser.user_id;
    let PFP = Anon;
    const [user, setUser] = useState([]);
    console.log(user)
    useEffect(() => {
        async function getUser() {
            let options = {
                url: `users/${Myself}/`,
                method: "GET"
            };
            let resp = await request(options);
            setUser(resp.data);
        }
        getUser();
        if (user.pfp !== null) {
            PFP = user.pfp
        }
        // let followers = {user.followers}
    },[])




    return (
    <div>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-md-9 col-lg-7 col-xl-5">
                    <div className="card">
                        <div className="card-body p-4">
                            <div className="d-flex text-black">
                                <div className="flex-shrink-0">
                                    <img src={PFP} alt="Profile Picture" className="profile-pic" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="mb-1"> {user.username} </h5>
                                    {/* <p className="mb-2 pb-1"></p> */}
                                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                                        <div>
                                            <p className="small text-muted mb-1"> Post's </p>
                                            <p className="mb-0">41</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="small text-muted mb-1"> Followers </p>
                                            <p className="mb-0"> {user.followers} </p>
                                        </div>
                                        <div>
                                            <p className="small text-muted mb-1"> Following </p>
                                            <p className="mb-0"> {user.following} </p>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-1">
                                        <button type="button" className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                                        <button type="button" className="btn btn-primary flex-grow-1">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Profile

// style="border-radius: 15px;"

// style="width: 180px; border-radius: 10px;"

// style="background-color: #efefef;

