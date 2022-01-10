import { useEffect, useState } from "react"

const UsersList = ({setShowSingleUser, setIdUser}) => {
    
    const [users, setUsers] = useState([]);

    
    
    const getUsers = () => {
        const url = 'https://reqres.in/api/users?page=1'
        fetch(url)
            .then( res => res.json())
            .catch(error => console.log('Error:', error))
            .then(res => {
                console.log(res)
                setUsers(res.data)})
                        
    }

    useEffect( () => {

    getUsers()

    }, [] )

    return (
            <div>
                <h2 className="text-center mt-10 font-extrabold text-indigo-700 text-4xl">USERS LIST</h2>

                <div className="flex flex-wrap gap-8 mt-10 justify-center">
                    {users.length &&
                        users.map((user) => {
                            return (
                            <div key={user.id} 
                                onMouseOver={e => e.target.style.cursor = 'pointer'}
                                onClick={e => {setShowSingleUser(true); setIdUser(user.id)} }
                                >
                                <p>
                                <strong>{user.first_name}</strong>
                                </p>
                                <p>{user.email}</p>
                                <img key={user.avatar} src={user.avatar} />
                            </div>
                            );
                        })}
                </div>
            </div>
        
    )
}

export default UsersList
