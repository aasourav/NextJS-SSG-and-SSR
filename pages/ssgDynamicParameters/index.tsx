import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link';
const SSG_Dynamic = (props:any) => {
    const {data} = props;
    // console.log(data)


  return (
    <div>
        <p>SSG Dynamic</p>
        <br />
        {data.map((d:any)=><div key={d.id}><Link href={`/ssgDynamicParameters/${d.id}`}>{d.title}</Link> <hr /></div>)}
    </div>
  )
}

export  const getStaticProps:GetStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=15')
    const data = await res.json()
    // console.log(data)

    return{
        props:{
            data
        }
    }
}

export default SSG_Dynamic