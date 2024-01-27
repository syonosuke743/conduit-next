import React from 'react'

const Loginpage = () => {
  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
    <h2 className='text-2xl font-bold mb-4'>ログイン</h2>

    <form className='bg-slate-200 p-6 rounded shadow-lg'>
      <div className='mb-4'>
        <label className='text-gray-700 text-sm font-bold mb-2'>Email</label>
        <input type='text' className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
        />
      </div>

      <div className='mb-4'>
        <label className='text-gray-700 text-sm font-bold mb-2'>Password</label>
        <input type='text' className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'/>
      </div>

      <button type='submit' 
      className=' text-green-500 py-2 px4 border rounded-md' >ログイン</button>

    </form>
  </div>
  )
}

export default Loginpage