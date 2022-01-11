import {useState, useContext, useEffect} from 'react'
import { useNavigate} from 'react-router-dom';


import AuthContext from '../Context/authentication';

const Login = () => {

    
    const navigate = useNavigate()
    
    const { setIsAuth, setToken, token} = useContext(AuthContext) 
    
    useEffect( () => {
                        
        const tokenLS = JSON.parse(localStorage.getItem( 'tokenLinkUser' )) ?? {};
        if(tokenLS.token === 'QpwL5tke4Pnpja7X4') {
            setIsAuth(true)
            navigate('/dashboard')
        } else {
            console.log('esta vacio')
        }
       
    }, [] )

    
    

    const [userLogin, setUserLogin] = useState({
        email : '',
        password : ''

    });



    const handleSubmit = () => {
        const url = 'https://reqres.in/api/login'
        
        
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(userLogin), 
            headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
               
                if('token' in response) {
                    setToken(response.token);
                    localStorage.setItem('tokenLinkUser',  JSON.stringify( response ));
                    setIsAuth(true);
                    navigate('/dashboard')
                } else {
                    setToken({});
                }
                console.log('Success:', response)
            }
            )
                
    }
    return (
        <div className='grid place-content-center h-screen'>
            <div className='bg-indigo-100 rounded-md px-20 py-10 '>
                <h1 className=' text-4xl m-5 text-center font-semibold text-indigo-900'>Bienvenidos a <span className='text-indigo-600'>Link</span>-Users</h1>
                <form onSubmit={e => {
                    e.preventDefault()
                    handleSubmit()
                }}>
                    
                    <label 
                    className='m-5 font-semibold'
                        htmlFor="email"
                            >Email:
                    </label>
                    <input 
                        className='rounded-md p-2 bg-white '
                        id='email'
                        type="email" 
                        placeholder='Ingrese un correo válido'
                        onChange={ e => setUserLogin({...userLogin, [e.target.id] : e.target.value})}
                    />

                    <label 
                        className='m-5 font-semibold'
                        htmlFor="email"
                        id='password'
                            >Password:
                    </label>
                    <input 
                        className='rounded-md p-2 bg-white'
                        id='password'
                        type="password" 
                        placeholder='Ingrese su Contraseña'
                        onChange={ e => setUserLogin({...userLogin, [e.target.id] : e.target.value})}
                    />
                    <button 
                        disabled={userLogin.email === '' || userLogin.password === ''}
                        className='m-5 bg-indigo-400 hover:bg-indigo-500 p-2 rounded-md text-white'>Enviar</button>
                </form>
            </div>
        </div>
    )
};

export default Login;