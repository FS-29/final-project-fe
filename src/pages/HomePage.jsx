import React, { useState, useEffect } from 'react'
import FloatingBtn from "../component/floatingbtn/FloatingBtn";
import Header from "../component/header/header";
import HeroSection from "../component/heroSection/HeroSection";
import HeroSubSection from "../component/heroSection/HeroSubSection";
import Poster from "../component/heroSection/Poster";
import Poster2 from "../component/heroSection/Poster2";
import CeritaPage from "./CeritaPage";
import API from '../Sevices/API';


function HomePage() {

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
      <>
        <Header></Header>
        <FloatingBtn></FloatingBtn>
        <HeroSection></HeroSection>
        <Poster></Poster>
        <HeroSubSection></HeroSubSection>
        <Poster2></Poster2>
        {post.length>0? <CeritaPage posts={post} />:null }
        
      </>
    );
  }

  
  export default HomePage;