import { useState } from 'react'
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect (() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsers(res.data));
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => getUsers(res.data));
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }


  const deselectUser = () => setUserSelected(null);

  return (
    <div className="App">  
     
     <UsersForm userSelected={userSelected} getUsers={getUsers} deselectUser={deselectUser}/>
     <UsersList getUsers= {getUsers} selectUser={selectUser} users={users}/>
    
    </div>
  )
}

export default App
