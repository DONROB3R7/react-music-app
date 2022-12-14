import React from 'react'
// UseState React
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


export default function LoginExample() {

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    let navigate = useNavigate();
    
    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(user, password);
       
        if(user) {
            navigate('/tracks');
            
        } 
    } 

    
    
    

  return (
    <div className="container flex items-center justify-center h-screen ">
            <form onSubmit ={handleSubmit} className="bg-black text-center w-1/3 text-white mx-auto rounded p-10">
                <h2 className='pb-5 text-4xl font-bold text-left'>Log In</h2>
                <input type="text" onChange={(e) => setUser(e.target.value)}  placeholder="Username" className="block w-full mx-auto text-sm py-2 px-3 rounded text-black" required />
                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block w-full mx-auto text-sm py-2 px-3 rounded my-3 text-black" required />
                <button className="bg-blue text-white font-bold py-2 px-4 rounded border block mx-auto w-full">
                Login
                </button>
            </form>
    </div>
  )
}
