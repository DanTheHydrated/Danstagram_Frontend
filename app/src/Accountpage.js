import {useState, useEffect} from 'react'
import logo from './Images/Danstagram_logo.png'
import {BsFillHeartFill, FaCommentDots, AiFillPicture} from 'react-icons/fa'

// function CallAccount(){
//     const [account, setAccount] = useState('Anon')

//     useEffect(() => {
//         async function getAccount(){
//             await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
//             .then((response)=> {
//                 setAccount(response.data);
//             });
//         }
//         getAccount();  
//     }, []);
// }


export default function Account() {
    return (
        <div className='container-fluid justify-content-center'>
            <div className='row'>
                <div className='col-9'>
                    <img ></img>
                </div>
                
            </div>
        </div>
    )
}

