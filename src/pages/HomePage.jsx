import React, { useState, useEffect } from "react";
import FloatingBtn from "../component/floatingbtn/FloatingBtn";
import HeroSection from "../component/heroSection/HeroSection";
import HeroSubSection from "../component/heroSection/HeroSubSection";
import Poster from "../component/heroSection/Poster";
import Poster2 from "../component/heroSection/Poster2";
import API from "../Sevices/API";
<<<<<<< HEAD
<<<<<<< HEAD
import CeritaComp from "../component/ceritaComp/ceritaComp";
import BeritaComp from "../component/beritaComp/BeritaComp";
import EventComp from "../component/eventComp/EventComp";

function HomePage() {
=======
import CeritaComp from "../component/ceritaComp/CeritaComp";
import BeritaComp from "../component/beritaComp/BeritaComp";
import {useDispatch } from "react-redux";
import { getProfil } from "../redux/reducers/profil-reducer";

function HomePage() {
  const dispatch = useDispatch()
>>>>>>> dev
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
<<<<<<< HEAD
=======
    dispatch(getProfil())
  
>>>>>>> dev
=======
import CeritaComp from "../component/ceritaComp/CeritaComp";
import BeritaComp from "../component/beritaComp/BeritaComp";
import {useDispatch } from "react-redux";
import { getProfil } from "../redux/reducers/profil-reducer";

function HomePage() {
  const dispatch = useDispatch()
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
    dispatch(getProfil())
  
>>>>>>> dev
  }, []);

  const getPost = () => {
    API.getPost.then((resp) => {
      const result = resp.data.map((item) => ({
        id: item.id,
        title: item.title, // Ubah sesuai dengan struktur data yang benar
        content: item.content, // Ubah sesuai dengan struktur data yang benar
        image: item.image,
      }));
      setPost(result);
    });
  };

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <Header></Header> */}
=======
>>>>>>> dev
=======
>>>>>>> dev
      <FloatingBtn></FloatingBtn>
      <HeroSection></HeroSection>
      <Poster></Poster>
      <HeroSubSection></HeroSubSection>
      <Poster2></Poster2>
      {post.length > 0 ? <CeritaComp posts={post} /> : null}
      {post.length > 0 ? <BeritaComp posts={post} /> : null}
<<<<<<< HEAD
<<<<<<< HEAD
      {post.length > 0 ? <EventComp posts={post} /> : null}
=======
      
>>>>>>> dev
=======
      
>>>>>>> dev
    </>
  );
}

export default HomePage;
