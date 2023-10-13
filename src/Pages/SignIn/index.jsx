import Layout from '../../Components/Layout'
import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ShoppingCartContext} from "../../Context/index.jsx";

function SignIn() {
  const context = useContext(ShoppingCartContext)

  const [isLogin, setIsLogin] = useState(false)
  const [isSignUpBtnClicked, setIsSignUpBtnClicked] = useState(false)
  const [newName, setNewName] = useState(null)
  const [newEmail, setNewEmail] = useState(null)
  const [newPassword, setNewPassword] = useState(null)

  const account = JSON.parse(localStorage.getItem('account'))
  const isSignIn = JSON.parse(localStorage.getItem('isSignIn'))

  useEffect(() => {
    if (account){
      setIsLogin(true)
    }
    if (isSignIn){
      localStorage.setItem('isSignIn', 'false')
      context.setSign()
    }
  }, []);

  function CreateAccount(){
    const newAccount = {
      name: newName,
      email: newEmail,
      password: newPassword
    }

    localStorage.setItem('account', JSON.stringify(newAccount))
    localStorage.setItem('isSignIn', 'true')
    context.setSign()
  }

  function RenderContent(){
    if (!isSignUpBtnClicked){
      return(
        <div>
          <h2 className={'text-xl font-medium text-center'}>Welcome</h2>
          <div className="mt-6 flex flex-col w-72">
            <p className={'text-sm'}>Email: <span id={'email-span'} className={'font-bold'}>{account ? account.email : ''}</span></p>
            <p className={'text-sm'}>Password: <span id={'password-span'} className={'font-bold'}>{account ? account.password : ''}</span></p>

            <Link to={'/'}>
              <button className={`${isLogin ? 'bg-black' : 'bg-gray-300 cursor-not-allowed'} w-full h-10 mt-3 text-white rounded-lg`}
                      onClick={() => {
                        localStorage.setItem('isSignIn', 'true')
                        context.setSign()
                      }}>Log in</button>
            </Link>

            <p className={'text-sm text-center underline underline-offset-4 mt-2'}>Forgot my password</p>

            <button className={`${isLogin ? 'border-gray-400 text-gray-400 cursor-not-allowed' : 'border-gray-800 text-gray-800'}  bg-white border w-full h-10 mt-3 rounded-lg`}
            onClick={() => setIsSignUpBtnClicked(true)}>Sign up</button>
          </div>
        </div>
      )
    }else{
      return (
        <form className="mt-6 flex flex-col w-72">
          <label htmlFor="name" className={'text-sm'}>Your name:</label>
          <input type={'text'} className={'border border-black rounded-lg h-10 p-3 mt-1'} placeholder={'Gabriel Mayorga'}
                 onChange={(event) => setNewName(event.target.value)}/>

          <label htmlFor="name" className={'text-sm mt-5'}>Your email:</label>
          <input type={'text'} className={'border border-black rounded-lg h-10 p-3 mt-1'} placeholder={'gabrielmayorga@gmail.com'}
                 onChange={(event) => setNewEmail(event.target.value)}/>

          <label htmlFor="name" className={'text-sm mt-5'}>Your password:</label>
          <input type={'password'} className={'border border-black rounded-lg h-10 p-3 mt-1'} placeholder={'•••••••••••'}
                 onChange={(event) => setNewPassword(event.target.value)
                 }/>

          <Link to={'/'}>
            <button className={'bg-black w-full h-10 mt-3 text-white rounded-lg'} onClick={(event) => {
              CreateAccount()
            }}>Create</button>
          </Link>
        </form>
      )
    }
  }

  return (
    <Layout>
      {RenderContent()}
    </Layout>
  )
}

export default SignIn