import { useState,useEffect } from "react"


const DetailsUser = ({idUser, user, setUser, setEditionMode, setShowSingleUser}) => {

    const url = `https://reqres.in/api/users/${idUser}`

    const [userDetail, setUserDetail] = useState({})

    const getUsers = () => {
        const url = `https://reqres.in/api/users/${idUser}`
        fetch(url)
            .then( res => res.json())
            .catch(error => console.log('Error:', error))
            .then(res => {
                console.log(res)
                setUserDetail(res.data)})
                        
    }

    useEffect( () => {

    getUsers()

    }, [] )

    const handleDelete = (e) => {
        e.preventDefault()
        
        fetch(url, {
            method: 'DELETE', 
             }).then(res => {
            if(res.status === 204) {
                alert(`El usario con id: ${idUser} ha sido eliminado correctamente`);
                setUser({
                    name : '',
                    job : ''
                });
                setEditionMode(false)
                setShowSingleUser(false)
                navigate('/dashboard');
            }
            
            res.json()})
            .catch(error => console.error('Error:', error))
            .then(response => {
               
                console.log('Success:', response)
            }
            )
                
    }

    return (
        <div className=" flex justify-center flex-col mt-10 font-extrabold md:mt-0">
            <h2 className="text-center text-4xl text-indigo-700">Detalles del Usuario</h2>
            <h4 className="text-center mt-10 md:mt-2 font-extrabold text-indigo-400 text-4xl">
                <strong>{userDetail.first_name} {userDetail.last_name}</strong>
            </h4>
            
            <p className="text-center mt-4 mb-4"><strong>Email: </strong>{user.email}</p>
            <img className="  self-center" key={userDetail.avatar} src={userDetail.avatar} />
            <div className="flex justify-center gap-4 mt-4">
                <button 
                    className="border rounded-md px-5 py-2 bg-blue-600 text-white"
                    onClick={ e => {
                        setUser({...user, ['name'] : `${userDetail.first_name} ${userDetail.last_name}`});
                        setEditionMode(true)
                    }}
                    > Editar
                    </button>
                <button 
                    className="border rounded-md px-5 py-2 bg-red-500 text-white"
                    onClick={handleDelete}
                    > Eliminar
                </button>
            </div>
        </div>
    )
}

export default DetailsUser
