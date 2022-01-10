import { useState } from "react"
const CreateUser = () => {

    

    const [user, setUser] = useState({
        name : '',
        job : ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = 'https://reqres.in/api/users'
        
        
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(user), // data can be `string` or {object}!
            headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => {
            if(res.status === 201) {
                alert('El usuario ha sido agregado correctamente')
                setUser({
                    name : '',
                    job : ''
                })
            }
            console.log(res)
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
            >Agregue un Nuevo Usuario
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
                    className="border bg-blue-500 p-1 mt-2"
                 >Agregar usuario
                 </button>        
            </form>            
        </div>
    )
}

export default CreateUser;
