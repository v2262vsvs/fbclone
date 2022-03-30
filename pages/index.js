import Head from 'next/head'
import Header from "../components/Header"
import Login from "../components/Login"
import {getSession} from "next-auth/react"
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import  Widgets  from "../components/Widgets"
import { db } from '../firebase'




export async function getServerSideProps (context){
  const session = await getSession(context);
  //console.log(session)
  //console.log(session.user.email)
  const posts = await db.collection("posts").orderBy("timestamp","desc").get()
  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp : null
  }))
  return{ 
    props : {
      data : session ,
      posts : docs
    }
  } 
}

export default function Home({data,posts}) {
  if(!data){
    return <Login/>;
  }
  return (
    <div className="bg-slate-100" >
      <Head>
        <title>Facebook</title>
      </Head>

      {/*HEADER*/}
      <Header data={data}/>

      {/*MAIN*/}
      <main  className="flex  ">
        {/*Sidebar*/}
        <div className="flex-auto">
        <Sidebar data={data}/>
        </div>
        {/*Feed*/}
        
        <div className="flex-initial">
        <Feed posts={posts} data={data}/>
        </div>
        {/*Widgets*/}
        <div className="flex-1">
          <Widgets/>
        </div>
        
        
      </main>

      {/*FOOTER*/}
      <footer>

      </footer>
    </div>
  )
}
/*
<div >
          <main >
          <h1 >This is the welcome page.</h1>
          <h2>You're currently {email!="" ? 'logged in.' : 'logged out.'}</h2>
          {email!=""? (
            <button onClick={signOut}>Log out.</button>
          ) : (
            <button onClick={signIn}>Log in.</button>
            
          )}
          </main>
        </div>
*/