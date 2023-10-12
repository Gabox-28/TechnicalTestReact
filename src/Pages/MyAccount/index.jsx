import Layout from '../../Components/Layout'

function MyAccount() {
  return (
    <Layout>
      <h1 className={'text-xl font-medium'}>My account</h1>
      <div className="mt-6 flex flex-col w-72">
        <p className={'text-sm'}>Name: <span id={'email-span'} className={'font-bold'}>Gabriel Mayorga</span></p>
        <p className={'text-sm'}>Email: <span id={'password-span'} className={'font-bold'}>gabrielmayorga@gmail.com</span></p>

        <button className={'bg-white border border-black w-full h-10 mt-3 text-black rounded-lg'}>Edit</button>
      </div>

     {/* <form className="mt-6 flex flex-col w-72">
        <label htmlFor="name" className={'text-sm'}>Your name:</label>
        <input type={'text'} className={'border border-black rounded-lg h-10 p-3 mt-1'} placeholder={'Gabriel Mayorga'} />

        <label htmlFor="name" className={'text-sm mt-5'}>Your email:</label>
        <input type={'text'} className={'border border-black rounded-lg h-10 p-3 mt-1'} placeholder={'gabrielmayorga@gmail.com'} />

        <label htmlFor="name" className={'text-sm mt-5'}>Your password:</label>
        <input type={'password'} className={'border border-black rounded-lg h-10 p-3 mt-1'} placeholder={'•••••••••••'} />

        <button className={'bg-black w-full h-10 mt-3 text-white rounded-lg'}>Save</button>
      </form>*/}
    </Layout>
  )
}

export default MyAccount