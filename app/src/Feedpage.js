import {BsFillHeartFill, BsHeart} from 'react-icons/fa';
import request from './services/api.request';
import react from 'react'
import { useState, useEffect } from 'react';

export default function Feed() {
    const [posts, setPosts] = useState([]);
    let posts2 = [];
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
    return(
        <div className='container'>
            {/* <div class="col-sm-4">
                <div class="card">
                    <div class="image">
                        <img src={display} />
                    </div>
                    <div class="card-inner">
                        <div class="header">
                            <h2>{user}</h2>
                            <h3>{title}</h3>
                        </div>
                        <div class="content">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}


{/* <img src='gs://danstagram-ad70a.appspot.com/posts/Anon.png' alt='pic' /> */}
