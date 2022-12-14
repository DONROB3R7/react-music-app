import React from 'react'


//Login Page
import LoginExample from '../components/LoginExample';
import NavBar from '../components/NavBar';

export default function HomePage(props) {
   
    console.log(props);
  return (
    <>
        <NavBar buttons={props.NavBar} />
        <LoginExample />
    </>
  )
}
