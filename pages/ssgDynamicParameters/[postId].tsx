import React from 'react'
import { GetStaticPaths,GetStaticProps } from 'next'

const PostDetails = (data:any) => {
  // console.log(data.data)
  return (
    <div>
      <strong>{data.data?.title}</strong>
      <p>{data.data?.body}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=15`)
  const data = await res.json()
  // const paths = data.map((d:any)=> ({params:{postId:d.id.toString()}}))
  
   return {
      paths:[],
      fallback: true
   }
}
export  const getStaticProps:GetStaticProps = async(context)=>{
  
  const param  = context.params?.postId;
  // console.log("Hellloooo ",context.params?.postId)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${param}`)
  const data = await res.json()
  // console.log(data)

  return{
      props:{
          data
      }
  }
}

export default PostDetails