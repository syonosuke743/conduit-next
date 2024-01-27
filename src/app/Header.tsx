import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='py-5 px10 border-b flex justify-between items-center'>
      <div>
        <h1 className='text-2xl font-extrabold'>
          <Link href="/">Conduit</Link>
        </h1>
      </div>
      <div>
        <nav className='text-sm font-medium'>
          <Link href='/login' className=' bg-orange-300 px-3 rounded-md'>
            ログイン</Link>
        </nav>
      </div>
      <div>
        <nav className='text-sm font-medium'>
          <Link href='/register' className=' bg-orange-300 px-3 rounded-md'>
            ユーザー登録</Link>
        </nav>
      </div>
      <div>
        <nav className='text-sm font-medium'>
          <Link href='/articles/new' className='bg-orange-300 px-3 rounded-md'>
            記事を書く</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header