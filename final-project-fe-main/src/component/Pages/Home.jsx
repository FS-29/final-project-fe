import React, { useState, useEffect } from 'react'
import CeritaKorban from '../Components/CeritaKorban'
import API from '../Services/API';


function Home() {
  
  const [post, setPost] = useState([])

  useEffect(()=>{
    getPost();
},[])

const getPost=()=>{
    API.getPost.then(resp=>{
        const result=resp.data.map(item=>({
          id: item.id,
          title: item.title, // Ubah sesuai dengan struktur data yang benar
          content: item.content, // Ubah sesuai dengan struktur data yang benar
          image: item.image,
        }));
        setPost(result);
        
    })
}
  
  return (
    <div className='p-[20px]'>
       {post.length>0? <CeritaKorban posts={post} />:null }
    </div>
  )
}

export default Home