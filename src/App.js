import './App.css';
import { UserList } from './UserList';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import axios from 'axios';
import { getListOfUser } from './Reducers/reducers ';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((e) => {
      //e.data.map(e => dispatch(getListOfUser(e)))
      dispatch(getListOfUser(e.data))
    })
}, [dispatch]);
  return (
    <div className="App">
      <UserList/>
    </div>
  );
}

export default App;
