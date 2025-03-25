import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {auth, provider} from "../firebase";
import { signInWithPopup } from 'firebase/auth';
import {useSelector , useDispatch} from 'react-redux';
import { selectUserEmail, selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice';

const Header = (props) => {
  const dispatch = useDispatch();
 const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(()=> {
    auth.onAuthStateChanged(async (user)=> {
      if(user){
        setUser(user)
        navigate('/home')
      }
    })

  },[userName]);
  const handleAuth = () => {
    if(!userName){
      signInWithPopup(auth,provider)
      .then((result)=> {
       setUser(result.user);
      }).catch((error)=> {
        alert(error.message);
      })   ; 
    } else if (userName){
    auth.signOut().then(() => {
      dispatch(setSignOutState())
      navigate('/');
    }).catch((err)=> {
      alert(err.message);
    })
    }
                   
  };
  const setUser = (user)=> {
    dispatch(setUserLoginDetails({
      name : user.displayName,
      email : user.email,
      photo: user.photoURL,
    })
  );
    
  };
  return (
    <>
      <Nav>
        <Logo>
          <img src='/images/ml.png' alt="Logo" />
        </Logo>
        {
          !userName ?
          <Login onClick={handleAuth}>LOGIN</Login>
          : 
          <>
           <NavMenu>
          <a href='/home'>
            <img src='/images/home-icon.svg' alt='HOME' />
            <span>HOME</span>
          </a>
          <a href='/search'>
            <img src='/images/search-icon.svg' alt='SEARCH' />
            <span>SEARCH</span>
          </a>
          <a href='favourites'>
            <img src='/images/watchlist-icon.svg' alt='FAVOURITES' />
            <span>FAVOURITES</span>
          </a>
          <a href='/orignals'>
            <img src='/images/original-icon.svg' alt='ORIGNALS' />
            <span>THE'OG'S</span>
          </a>
          <a href='/movies'>
            <img src='/images/movie-icon.svg' alt='MOVIES' />
            <span>MOVIES</span>
          </a>
          <a href='/series'>
            <img src='/images/series-icon.svg' alt='SERIES' />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <Signout >
        <UserImage src={userPhoto}  alt={userName}/>
        <Dropdown >
          <span onClick={handleAuth}>Sign out</span>
        </Dropdown>
        </Signout>
       
          </>
         
        }
        

      </Nav>
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  border-bottom: 4px solid #333; /* Add this line */
`;
const Logo = styled.a`
  padding: 0;
  width: 120px;
  margin-top: 4px;
  max-height: 100px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  margin-bottom: -4px; /* Add this line */

  

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      transition: text-shadow 0.2s ease-in-out;

      &:hover {
        text-shadow: 0px 0px 10px #fff, 0px 0px 20px #fff;
      }
    }
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const UserImage = styled.img`
height : 100%;

`;
const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

const Signout = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImage} {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default Header;