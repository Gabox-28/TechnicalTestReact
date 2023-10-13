import Layout from '../../Components/Layout'
import {useEffect, useState} from "react";

function MyAccount() {
  const [isEdit, setIsEdit] = useState(false)

  const [newName, setNewName] = useState(null)
  const [newEmail, setNewEmail] = useState(null)
  const [newPassword, setNewPassword] = useState(null)
  const account = JSON.parse(localStorage.getItem('account'))

  useEffect(() => {
    if(account){
      setNewName(account.name)
      setNewEmail(account.email)
      setNewPassword(account.password)
    }
  }, []);

  function UpdateAccount(){
    const newAccount = {
      name: newName,
      email: newEmail,
      password: newPassword
    }

    localStorage.setItem('account', JSON.stringify(newAccount))
    setIsEdit(false)
  }

  function RenderContent(){
    if(isEdit){
      return (
        <div>
          <form className="mt-6 flex flex-col w-72">
            <label htmlFor="name" className={'text-sm'}>Your name:</label>
            <input type={'text'} className={'border border-black rounded-lg h-10 p-3 mt-1'}  value={newName}
                   onChange={(event) => setNewName(event.target.value)}/>

            <label htmlFor="name" className={'text-sm mt-5'}>Your email:</label>
            <input type={'text'} className={'border border-black rounded-lg h-10 p-3 mt-1'} value={newEmail}
                   onChange={(event) => setNewEmail(event.target.value)}/>

            <label htmlFor="name" className={'text-sm mt-5'}>Your password:</label>
            <input type={'password'} className={'border border-black rounded-lg h-10 p-3 mt-1'} value={newPassword}
                   onChange={(event) => setNewPassword(event.target.value)}/>

            <button className={'bg-black w-full h-10 mt-3 text-white rounded-lg'} onClick={(event) => {
              event.preventDefault()
              UpdateAccount()
            }}>Save</button>
          </form>
        </div>
      )
    }else{
      return(
        <div>
          <h1 className={'text-xl font-medium'}>My account</h1>
          <div className="mt-6 flex flex-col w-72">
            <p className={'text-sm'}>Name: <span id={'email-span'} className={'font-bold'}>Gabriel Mayorga</span></p>
            <p className={'text-sm'}>Email: <span id={'password-span'} className={'font-bold'}>gabrielmayorga@gmail.com</span></p>

            <button className={'bg-white border border-black w-full h-10 mt-3 text-black rounded-lg'} onClick={() => setIsEdit(true)}>Edit</button>
          </div>
        </div>
      )
    }
  }

  return (
    <Layout>
      {RenderContent()}
    </Layout>
  )
}

export default MyAccount