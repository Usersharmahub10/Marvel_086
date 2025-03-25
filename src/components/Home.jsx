import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import Newmarvel from './Newmarvel';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import db from '../firebase';
import {setMovies} from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import { original } from '@reduxjs/toolkit';
import { collection, onSnapshot } from 'firebase/firestore';


const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  let recommends = [];
  let newMarvel= [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const moviesCollection = collection(db, 'movies');
    const unsubscribe = onSnapshot(moviesCollection, (snapshot) => {
      let recommends = [];
      let newMarvel = []; // Ensure this matches the Redux state key
      let originals = []; // Ensure this matches the Redux state key
      let trending = [];
  
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case 'new':
            newMarvel = [...newMarvel, { id: doc.id, ...doc.data() }]; // Fix variable name here
            break;
          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case 'trending':
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
  
      dispatch(
        setMovies({
          recommend: recommends,
          newMarvel: newMarvel, // Ensure this matches the Redux state key
          original: originals, // Ensure this matches the Redux state key
          trending: trending,
        })
      );
    });
  
    return () => unsubscribe();
  }, [username]);

  return (

    <Container >
    <ImgSlider />
    <Viewers />
    <Recommends />
    <Newmarvel />
    <Originals />
    <Trending />
    </Container>
  );
  
  
   
  
};
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  margin-top: 70px; /* Add this line */

  &:after {
    background: url('./images/home-background.png') center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
    top: -70px; /* Add this line */
  }
`;
export default Home
