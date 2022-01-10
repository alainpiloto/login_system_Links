import { useEffect,useState } from "react"
import DetailsUser from "../components/DetailsUser";
import CreateUser from "../components/CreateUser"
import UsersList from "../components/UsersList";
import EditUser from "../components/EditUser";

const Dashboard = () => {
    
    const [showSignleUser, setShowSingleUser] = useState(false)

    const [editionMode, setEditionMode] = useState(false)

    const [idUser, setIdUser] = useState('');
 
    const [user, setUser] = useState({
        name: '',
        job : ''
    })
    return (
        <div className="grid md:grid-cols-2 ">
            {!showSignleUser 
                ? <UsersList setShowSingleUser={setShowSingleUser} setIdUser={setIdUser}/> 
                : <DetailsUser idUser={idUser} user={user} setUser={setUser} setEditionMode={setEditionMode} setShowSingleUser={setShowSingleUser}/>}
            
            {!editionMode 
                ? <CreateUser setEditionMode={setEditionMode}/> 
                : <EditUser idUser={idUser} user={user} setUser={setUser} setEditionMode={setEditionMode} setShowSingleUser={setShowSingleUser}/>}
        </div>
    )

    
}

export default Dashboard;