import Layout from '../../Components/Layout'
import {useEffect, useState} from "react";

function SignIn() {
  const [isLogin, setIsLogin] = useState(false)
  const [isSignUpBtnClicked, setIsSignUpBtnClicked] = useState(false)

  const account = localStorage.getItem('account')

  useEffect(() => {
    if (account){
      setIsLogin(true)
    }
  }, []);

  function RenderContent(){
    console.log(isSignUpBtnClicked)
    if (!isSignUpBtnClicked){
      return(
        <div>
          <h2 className={'text-xl font-medium text-center'}>Welcome</h2>
          <div className="mt-6 flex flex-col w-72">
            <p className={'text-sm'}>Email: <span id={'email-span'} className={'font-bold'}>gabrielmayorga@gmail.com</span></p>
            <p className={'text-sm'}>Password: <span id={'password-span'} className={'font-bold'}>•••••••••••</span></p>

            <button className={`${isLogin ? 'bg-black' : 'bg-gray-300 cursor-not-allowed'} w-full h-10 mt-3 text-white rounded-lg`}>Log in</button>

            <p className={'text-sm text-center underline underline-offset-4 mt-2'}>Forgot my password</p>

            <button className={`${isLogin ? 'border-gray-400 text-gray-400' : 'border-gray-800 text-gray-800'}  bg-white border w-full h-10 mt-3 rounded-lg`}
            onClick={() => setIsSignUpBtnClicked(true)}>Sing up</button>
          </div>
        </div>
      )
    }else{
      return (
        <form className="mt-6 flex flex-col w-72">
          <label htmlFor="name" className={'text-sm'}>Your name:</label>
          <input type={'text'} className={'border border-black rounded-lg h-10 p-3 mt-1'} placeholder={'Gabriel Mayorga'} />

          <label htmlFor="name" className={'text-sm mt-5'}>Your email:</label>
          <input type={'text'} className={'border border-black rounded-lg h-10 p-3 mt-1'} placeholder={'gabrielmayorga@gmail.com'} />

          <label htmlFor="name" className={'text-sm mt-5'}>Your password:</label>
          <input type={'password'} className={'border border-black rounded-lg h-10 p-3 mt-1'} placeholder={'•••••••••••'} />

          <button className={'bg-black w-full h-10 mt-3 text-white rounded-lg'} onClick={(event) => {
            event.preventDefault()
          }}>Create</button>
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