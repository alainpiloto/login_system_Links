import { useState } from 'react'
import { useNavigate} from 'react-router-dom';
const EditUser = ({idUser, user, setUser, setEditionMode, setShowSingleUser}) => {

    const url = `https://reqres.in/api/users/${idUser}`

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
                
        fetch(url, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(user), // data can be `string` or {object}!
            headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => {
            if(res.status === 200) {
                alert(`Los cambios se han guardado correctamente al usario con id: ${idUser}`);
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
        <div className=" grid place-content-center md:h-screen mt-5">
            <h2 
                className=" text-center font-extrabold text-indigo-700 text-2xl mb-10"
            >Editando Usuario
            </h2>
            <form onSubmit={ e => handleSubmit(e)} className="flex flex-col w-96 p-4">
                
                    <label
                        htmlFor="name"
                        className=" font-bold mb-2"
                    >Name</label>
                    <input 
                        className="mb-2 border-2 p-1 rounded-md w-full"
                        type="text"
                        id="name"
                        placeholder="Add User's Name"
                        onChange={e => setUser({...user, [e.target.id]: e.target.value})}
                        value={user.name}
                    />
                
                
                
                    <label
                        htmlFor="job"
                        className="font-bold mb-2"
                        >Job</label>
                    <input 
                        className="mb-2 border-2 p-1 rounded-md w-full"
                        type="text"
                        id="job"
                        placeholder="Add the Job title"
                        onChange={e => setUser({...user, [e.target.id]: e.target.value})}
                        value={user.job}
                    />
                
                 <button disabled={ user.name === '' || user.job === ''}
                    onClick={handleSubmit}
                    className="border bg-blue-500 p-1 mt-2"
                 >Guardar Cambios
                 </button>        
            </form>    
        </div>
    )
}

export default EditUser
