import axios from "axios"
import { useEffect,useState } from 'react';

export const UserList = () => {
    const [listOfUSer, setListOfUSer] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((e) => {
            setListOfUSer(e.data)
        })
    }, []);
    return <ul>{listOfUSer.map(v=><li key={v.id}>{v.name}</li>)}</ul>
}
