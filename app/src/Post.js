import React, { useState } from "react";
import request from "./services/api.request";
import { useGlobalState } from "./context/GlobalState";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    uploadBytes,
    } from "firebase/storage";    

export default function Post() {
    const [state, dispatch] = useGlobalState();
    const[post_Data, setPost_Data] = useState([]);
    const [display, setDisplay] = useState();
    const [file, setFile] = useState();
    const [imageURL, setImageURL] = useState();
    const [text, setText] = useState("");
    const [title, setTitle] = useState('')
    const storage = getStorage();
    // const imagesListRef = ref(storage, "images/");
    const storageRef = ref(storage, "image.jpg");
    const imagesListRef = ref(storage, "images/");
    const uploadTask = uploadBytesResumable(storageRef, file);
    let Myself = state.currentUser.user_id;


    function handleChangeFile(e) {
        setFile(e.target.files[0]);
        setDisplay(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files[0]);
    }

    function handleChangeText(e) {
        setText(e.target.value)
        setTitle(file.name)
        console.log(title)
    }

    const uploadImage = (e) => {
        e.preventDefault()
        const imageRef = ref(storage, `image/${file.name}`);
        if (file == null) return;
        else{
            uploadBytesResumable(imageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageURL((prev) => [prev, url]);
                console.log(imageURL);
            });
        });
    }};

    // useEffect(() => {
    //     listAll(imagesListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageUrls((prev) => [...prev, url]);
    //             });
    //         });
    //     });
    // }, []);
    

    // const uploadImage = () => {
    //     if (file === null) {
    //         return;
    //     } else {
    //         // 'file' comes from the Blob or File API
    //         uploadTask.on(
    //             "state_changed",
    //             (X) => {
    //                 // Observe state change events such as progress, pause, and resume
    //                 // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //                 const progress =
    //                     (X.bytesTransferred / X.totalBytes) * 100;
    //                 console.log("Upload is " + progress + "% done");
    //                 switch (X.state) {
    //                     case "paused":
    //                         console.log("Upload is paused");
    //                         break;
    //                     case "running":
    //                         console.log("Upload is running");
    //                         break;
    //                     default:
    //                         break;
    //                 }
    //             },
    //             (error) => {
    //                 console.log('error uploading file');
    //             },
    //             () => {
    //                 getDownloadURL(uploadTask.X.ref).then((downloadURL) => {
    //                     setImageURL(downloadURL);
    //                 });
    //             });
    //     }
    // }

    async function Send(e) {
        console.log(file);
        e.preventDefault()

        if (file === null) {
            return;
        } else {
            // let goodURL = await uploadImage();

            let post = {
                url: 'posts/',
                method: "POST",
                body: "body",
                headers: {
                    'Content-Type': 'multipart/form-data, application/json, text/plain, */*'
                }, data :{
                poster: Myself,
                title: title,
                description: text,
                picture: display,
                }
                };
        try{
            let resp = await request(post);
            setPost_Data([...post_Data, resp.data ]);
            } catch (error) {
                console.log(error);
        }};
    }

    return (
                <div className="container justify-content-center">
                    <div className="card justify-content-center post-card">
                        <form onSubmit={uploadImage} >
                            <h2 className="text-align-center"> This is changing!</h2>
                            <input type="file" accept="image/jpeg,image/png,image/gif"  onChange={handleChangeFile} />
                            <input type="text" name="description" onChange={handleChangeText} />
                            <input type="submit" disabled={(
                                file !== null &&
                                text !== null
                            ) ? false : true} />
                            <img src={display} alt="Image holder"/>
                        </form>
                    </div>
                </div>
            );
};




        // let form_data = new FormData();
        // if (data.image_url)
        //     form_data.append("image_url", data.image_url, data.image_url.name);
        //     form_data.append("title", data.title);


        // function handleChangeFile(e) {
    // setFile(e.target.files[0]);
    // setDisplay(URL.createObjectURL(e.target.files[0]));
    // console.log(e.target.files[0]);
    // console.log()
    // }

    // const handleChangeFile = (e) => {
    //     setDisplay(URL.createObjectURL(e.target.files[0]));
    //     let newData = { ...data };
    //     newData["image_url"] = e.target.files[0];
    //     setData(newData);


    //     async function Send_Post(file) {
    //         console.log(file);
    //         let form_data = new FormData();
    //         if (data.image_url)
    //             form_data.append("image_url", data.image_url, data.image_url.name);
    //             form_data.append("title", data.title);


    //             function handleChangeText(e) {
    //                 setText(e.target.value)
    //             }


        // const [data, setData] = useState({
    //     title: "",
    //     description: "",
    //     image_url: "",
    // });
    // const [errors, setErrors] = useState({
    //     title: "",
    //     description: "",
    //     image_url: "",
    // });