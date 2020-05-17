import React,{ useRef } from 'react'
import error from '../images/icon-error.svg'
import '../Styles/SignUp.style.scss'

function SignUp() {

  const inputRef = useRef(null)
  
  const clickHandler = ()=>{

    const regx = /^[\w.]+@\w+\.(com|net|org|oi)$/;
    const errorTest = document.querySelector('.error-text')
    const errorImg = document.querySelector('.error')
    const t = inputRef.current.value
    
    if(regx.test(t)){
      console.log(inputRef.current.value)
    }else{
      inputRef.current.setAttribute('class', 'inputError')
      errorTest.style.display = 'block'
      errorImg.style.display = 'block'
    }
  } 

  return (

    <div className="signUp-wrapper">

      <p className="small">35,000+ already joined</p>
      <p className="update">Stay up-to-date with what we’re doing</p>

      <div className="contact">
        <div className="input-container">
          <input ref={inputRef} type="email" placeholder="Enter your email address"/>
          <img src={error} alt="error-icon" className="error"/>
          <p className="error-text">Whoops make sure it's an email</p>
        </div>

        <div className="btn-contact"> 
          <button onClick={clickHandler}>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
