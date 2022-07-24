import type { NextPage } from 'next'
import {  registerUser } from "../services/userService"
import { useState } from 'react'
import axios from "axios";


import styles from '../styles/Home.module.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


 const Home:NextPage=()=> {

  const [isActive, setIsActive] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [fullname, setFullname] = useState<string>("")
  const [password, setPassword] = useState<any>("")





  const reset = () => {
    setFullname(""),
      setEmail(""),
      setPassword("")
  }

  const handlerAddPerson = async () => {
    let person = {
      fullname,
      email,
      password
    }

    try {
      const { status } = await registerUser(person);
      console.log(status)
      if (status === 200) {
        toast.success("کاربر با موفقیت ساخته شد.", {
          position: "top-right",
          closeOnClick: true
        });
        reset();
      }
    } catch (ex) {
      toast.error("مشکلی پیش آمده.", {
        position: "top-right",
        closeOnClick: true
      });
      console.log(ex);
    }
  }

  return (
    <>
      <section className={styles.forms_section}>
        <h1 className={styles.section_title}>Mojtaba Hassanzadeh</h1>
        <div className={styles.forms}>
          <div className={`${styles.form_wrapper} ${isActive ? "" : styles.is_active}`}>
            <button type="button" className={`${styles.switcher} ${styles.switcher_login}`} onClick={() => setIsActive(false)}>
              List
              <span className={styles.underline}></span>
            </button>
            <form className={`${styles.form} ${styles.form_login}`}>
              <fieldset>
                <div id={styles.wrap_users}>
              <legend>Please, enter your email and password htmlFor login.</legend>
            <div className={styles.input_block}>
              <label htmlFor={styles.login_email}>E-mail</label>
              <input id={styles.login_email} type="email" required/>
            </div>
            <div className={styles.input_block}>
              <label htmlFor={styles.login_password}>Password</label>
              <input id={styles.login_password} type="password" required/>
            </div>
                </div>
                <button type="button" className={styles.btn_signup} >List</button>

              </fieldset>
         
            </form>
          </div>
          <div className={`${styles.form_wrapper} ${isActive ? styles.is_active : ""} `}>
            <button type="button" className={`${styles.switcher} ${styles.switcher_signup}`} onClick={() => setIsActive(true)}>
              Sign Up
              <span className={styles.underline}></span>
            </button>
            <form className={`${styles.form} ${styles.form_signup}`} onSubmit={e => e.preventDefault()}>
              <fieldset>
                <legend>Please, enter your email, password and password confirmation htmlFor sign up.</legend>
                <div className={styles.input_block}>
                  <label htmlFor={styles.signup_email}>E-mail</label>
                  <input id={styles.signup_email} type="email" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className={styles.input_block}>
                  <label htmlFor={styles.signup_password}>Fullname</label>
                  <input id={styles.signup_password} type="text" required value={fullname} onChange={e => setFullname(e.target.value)} />
                </div>
                <div className={styles.input_block}>
                  <label htmlFor={styles.signup_password_confirm}> password</label>
                  <input id={styles.signup_password_confirm} type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
              </fieldset>
              <button type="button" className={styles.btn_signup} onClick={handlerAddPerson}>Continue</button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
  
}


export default Home


