"use client";
import React from 'react';
import { useRouter } from "next/navigation";


type EditButtonProps = {
  id:string;
};

const EditButton = ({id}: EditButtonProps) => {

  const router = useRouter();

  const handleEdit =async () => {
    
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${API_URL}/articles/${id}`, {
    method: "PUT",
    headers:{
      "Content-Type": "json",
    },
    body: JSON.stringify({title: newText, content: newContent})
    });

    router.push("/articles/new");
    router.refresh();
  }

  return (
    <div className='bg-green-500 hover:bg-green-600 rounded-md py2 px5 inline cursor-pointer'
    onClick={handleEdit}>
      Edit</div>
  );
}

export default EditButton