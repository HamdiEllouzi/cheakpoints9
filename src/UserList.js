import { useSelector } from "react-redux"
import { useState } from "react";
import './App.css';
export const UserList = () => {
    const [toggle, setToggle] = useState(false);
    const [info, setInfo] = useState('');
    const user = useSelector((state) => state.listeofuser.user)
    const toggleButton = (e) => {
        return((toggle) &&
        <div className='cardInfo'>
            <h1>{info.name}</h1>
            <h1>{info.email}</h1>
            <h1>{info.phone}</h1>
            <h1>{info.website}</h1>
            <button onClick={()=>setToggle(false)}>Close</button>
        </div>)
    }    
    return (
    <div>
        {toggleButton()}
        <ul>{user.map(v => <li key={v.id} ><button onClick={()=>{setInfo(v);setToggle(!toggle)}}>{v.name}</button></li>)}</ul>
    </div>
)
}
