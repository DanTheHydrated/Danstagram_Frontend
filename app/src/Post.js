import React, { useState } from "react";
import request from "./services/api.request";
import { useGlobalState } from "./context/GlobalState";

export default function Post() {
    const [state, dispatch] = useGlobalState();
    const[post_Data, setPost_Data] = useState([])
    const [file, setFile] = useState();
    const [text, setText] = useState("");
    let Myself = state.currentUser.user_id;

    function handleChangeFile(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files));
        console.log(file.name);
    }

    function handleChangeText(e) {
        setText(e.target.value)
    }


    // function Test(){
    //     console.log(text);
    //     console.log(file);
    // }

    async function Send_Post(file) {
        let data = {
            url: "posts/",
            method: "POST",
            data: {
                title: file.name,
                picture: file,
                poster: Myself,
                description: text,
            },
        };
        let resp = await request(data);
        setPost_Data([
            ...post_Data,
            resp.data
        ])
    }

    return (
        <div className="container">
            <div className="card">
                <form onSubmit={Send_Post} >
                <h2 className="text-align-center"> What you you want to share? </h2>
                <input type="file" onChange={handleChangeFile} />
                <input type="text"  id="description" onChange={handleChangeText}/>
                <input type="submit" disabled={(
                    file !== null  &&
                    text !== null
                    ) ? false : true} />
                <img src={file} />
                </form>
            </div>
        </div>
    );
}

