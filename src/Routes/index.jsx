import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../views/Login';
import Dashboard  from '../views/Dashboard'
import { useContext } from 'react';
import AuthContext from '../Context/authentication';
const Routing = () => {
    
    const {isAuth} = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Login/>} />
                <Route exact path='/dashboard' element={isAuth ? <Dashboard/> : <Navigate to='/'/>} />
            </Routes>
        </Router>
    )
}

export default Routing;