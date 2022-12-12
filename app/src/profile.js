import React from "react";
import { useGlobalState } from "./context/GlobalState";
import request from './services/api.request';
import { useEffect, useState } from 'react';
import Anon from './Images/Anon.png'
import {CgProfile} from 'react-icons'
import AuthService from "./services/auth.service";
import { Navigate } from "react-router-dom";

const Profile = () => {
    const [state, dispatch] = useGlobalState();
    const Myself = state.currentUser.user_id;
    let PFP = Anon;
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    let posts2 = [];

    const logout = () => {
        AuthService.logout();
        dispatch({
            currentUserToken: null,
            currentUser: null,
        });
        Navigate("/login");
    };

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

    useEffect(() => {
        async function getPosts() {
            let options = {
                url: `posts/`,
                method: "GET"
            };
            let resp = await request(options);
            setPosts(resp.data);
        }
        getPosts();
    },[])

    console.log(posts2)

    posts.forEach((posts) => {
        let id = posts.id;
        let image = posts.picture.replace('http://localhost:8000', 'https://8000-danthehydra-workingfina-hfb2p5jdcyp.ws-us78.gitpod.io');
        let description = posts.description;
        let title = posts.title;
        posts2.push({id, image, description, title});
    })

    return (
    <div>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-md-9 col-lg-7 col-xl-5">
                    <div className="card">
                        <div className="card-body p-4">
                            <div className="d-flex text-black mb-15">
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
                                        <button type="button" className="btn btn-outline-primary me-1 flex-grow-1" onClick={() => logout()}>Logout</button>
                                        <button type="button" className="btn btn-primary flex-grow-1">Follow</button>
                                    </div>
                                </div>
                            </div>
                            {posts2.map((x) => (
                                        <div className="card">
                                            <h1 key='x.title'>{x.title}</h1>
                                            <img src={x.image} key='x.image' />
                                            <p key='x.description'>{x.description}</p>
                                        </div>
                                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


// {posts.map((P) => {
//     <h1>{P}</h1>
// // <img src={P.Picture} />
// <p>{P.Description}</p>
// })};


export default Profile

// style="border-radius: 15px;"

// style="width: 180px; border-radius: 10px;"

// style="background-color: #efefef;

