
import { notFound } from "next/navigation";
import { Article } from "./types";

//TOPページですべてのデータの取得
export const getAllArticls =async () :Promise<Article[]>=> {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store"});//SSR

  if(!res.ok){
  throw new Error("エラーが発生しました。")
  }

  await new Promise((resolve) => setTimeout(resolve,1500));

  const articles = await res.json(); //データを文字列化
  return articles;
}

//詳細ページを取得
export const getDetailArticle =async (id: string) :Promise<Article>=> {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: {revalidate:60}});  //ISR 最初はSSRで取得してそれ以降はSSGで取得
  
    //エンドポイントがない場合のページ
  if(res.status === 404) {
    notFound();
  }

  if(!res.ok){
  throw new Error("エラーが発生しました。")
  }

  await new Promise((resolve) => setTimeout(resolve,1000)); //  少し遅延させたい

  const article = await res.json(); //データを文字列化
  return article;
}

//記事を作るAPI
export const createArticle =async (
  id: string, 
  title: string, 
  content: string
  ) :Promise<Article>=> {

  const currentDatetime = new Date().toDateString();//createAtを表示させる

  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    //json形式なのでheaderを付ける
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id,title,content,createAt: currentDatetime}), //リクエストして保存するデータはurlの情報、タイトル、本文,投稿日時
  });
  
  if(!res.ok){
  throw new Error("エラーが発生しました。")
  }

  await new Promise((resolve) => setTimeout(resolve,1000)); //  ローディングの挙動を見たいので少し遅延させたい

  const newArticle = await res.json(); //データを文字列化
  return newArticle;
}

//記事を削除するAPI
export const deleteArticle =async (
  id: string
  ) :Promise<Article>=> {

  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  })
  
  if(!res.ok){
  throw new Error("エラーが発生しました。")
  }

  await new Promise((resolve) => setTimeout(resolve,1000)); //  ローディングの挙動を見たいので少し遅延させたい

  const deleteArticle = await res.json(); //データを文字列化
  return deleteArticle;
}

