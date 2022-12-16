import React from 'react'
import {GetServerSideProps,GetStaticPaths,GetStaticProps} from 'next'
interface Idata{

}
const StaticSiteGeneration = (props:any) => {
  return (
    <div>
       {props.data.length && props.data.map((d:any)=>(
        <>
            <p>Name: {d.name}</p>
            <p>Email: {d.email}</p>
            <p>Phone: {d.phone}</p>
            <hr />
            <br />
        </>
       ))}
    </div>
  )
}
export  const getStaticProps:GetStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)

    return{
        props:{
            data
        }
    }
}
export default StaticSiteGeneration