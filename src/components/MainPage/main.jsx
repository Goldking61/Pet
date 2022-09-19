import styled from "styled-components";
import WorkPlaces from '../data/WorkPlaces.json';
import { useState } from "react";

const MainArea = styled.div`
width: 90%;
height: 100%;
display: -webkit-flex; 
display: flex; 
margin: 1em;
flex-direction: row;
`
const DivArea = styled.div`
height: 100%;

`

const Profile = styled.div`
flex-direction: column;
width: 50%;
height: 50%;
`

const MyPhoto = styled.img`
width: 60%;
height: 120%;
`
const WorkPlace = styled.div`
width: 60%;
box-shadow: 0 0 5px;
`
const Name = styled.div`
color: blueviolet;
font-size: 8vh;
text-align: center;
`

const Name2 = styled.div`
color: blueviolet;
font-size: 6vh;
`

const WorkPlaceName = styled.div`
color: blueviolet;
font-size: 100%;
font-weight: bold;
text-align: center;
`

const MainPage = () => {
  const [auth, isAuth] = useState('none')
    return (
      <DivArea>
      <Name>Это я</Name>
      <MainArea >
      <Profile>
      <Name2>Кукуев Леонид Олегович</Name2>
      <MyPhoto src="/images/фото.jpg"></MyPhoto>
      </Profile>
      <WorkPlace>
      {WorkPlaces.map(item=>
        <>
        <WorkPlaceName>{item.title}</WorkPlaceName>
        <text>{item.body}</text>
        </>)}
      </WorkPlace>
      </MainArea>
      </DivArea>
      
    );
  }
  
  export {MainPage};