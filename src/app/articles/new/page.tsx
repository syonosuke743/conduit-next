"use client";
import { createArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const createBlogPage = () => {
  const router = useRouter();

  //import属性の文字列を取得してくるためにuseStateを用意する。input欄に打ち込む
  const [id,setId] = useState<string>("");
  const [title,setTitle] = useState<string>("");
  const [content,setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);


//eventを受け取るときにtypeの型を付ける↓
  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    //await createArticle(id,title,content);//文字列をここの引数に埋め込む
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${API_URL}/api/create`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id,title,content }),
    });


    setLoading(false);
    router.push("/");
    router.refresh();
  };


  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>ブログ新規作成</h2>

      <form className='bg-slate-200 p-6 rounded shadow-lg' 
      onSubmit={handleSubmit}>
        
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>URL</label>
          <input type='text' className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
          onChange={(e) => setId(e.target.value)}/>
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>タイトル</label>
          <input type='text' className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>本文</label>
          <textarea className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
          onChange={(e) => setContent(e.target.value)}/>
        </div>

        <button type='submit' 
        className={`py-2 px4 border rounded-md ${loading 
        ? "bg-orange-300 cursor-not-allowed"
        :"bg-orange-400 hover:bg-orange-500 "}`}
        disabled={loading}
        >投稿</button>
      </form>
    </div>
  )
}

export default createBlogPage