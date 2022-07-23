import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [isActive, setIsActive] = useState<boolean>(false)
  const [email,setEmail]=useState<string>("")
  const [fullname,setFullname]=useState<string>("")
  const [password,setPassword]=useState<any>("")
  

  const handlerAddPerson=async ()=>{
    let person={
      fullname,
      email,
      password
    }
    
  }
  console.log(isActive)
  return (
    <>
      <section className={styles.forms_section}>
        <h1 className={styles.section_title}>Animated Forms</h1>
        <div className={styles.forms}>
          <div className={`${styles.form_wrapper} ${isActive ? "" : styles.is_active}`}>
            <button type="button" className={`${styles.switcher} ${styles.switcher_login}`} onClick={() => setIsActive(false)}>
              Login
              <span className={styles.underline}></span>
            </button>
            <form className={`${styles.form} ${styles.form_login}`}>
              <div id="wrap-users">

              </div>
              {/* <fieldset>
            <legend>Please, enter your email and password htmlFor login.</legend>
            <div className={styles.input_block}>
              <label htmlFor={styles.login_email}>E-mail</label>
              <input id={styles.login_email} type="email" required/>
            </div>
            <div className={styles.input_block}>
              <label htmlFor={styles.login_password}>Password</label>
              <input id={styles.login_password} type="password" required/>
            </div>
          </fieldset>
          <button type="submit" className={styles.btn_login}>Login</button> */}
            </form>
          </div>
          <div className={`${styles.form_wrapper} ${isActive ? styles.is_active : ""} `}>
            <button type="button" className={`${styles.switcher} ${styles.switcher_signup}`} onClick={() => setIsActive(true)}>
              Sign Up
              <span className={styles.underline}></span>
            </button>
            <form className={`${styles.form} ${styles.form_signup}`} onSubmit={e=>e.preventDefault()}>
              <fieldset>
                <legend>Please, enter your email, password and password confirmation htmlFor sign up.</legend>
                <div className={styles.input_block}>
                  <label htmlFor={styles.signup_email}>E-mail</label>
                  <input id={styles.signup_email} type="email" required value={email} onChange={e=>setEmail(e.target.value)} />
                </div>
                <div className={styles.input_block}>
                  <label htmlFor={styles.signup_password}>Fullname</label>
                  <input id={styles.signup_password} type="text" required value={fullname} onChange={e=>setFullname(e.target.value)}/>
                </div>
                <div className={styles.input_block}>
                  <label htmlFor={styles.signup_password_confirm}> password</label>
                  <input id={styles.signup_password_confirm} type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
                </div>
              </fieldset>
              <button type="submit" className={styles.btn_signup}>Continue</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
