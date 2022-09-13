import styled from "styled-components";

const AboutArea = styled.div`
height: 100%;
width: 100%;
`
const PlanetSpin = styled.div`
position: fixed;
animation: rotation 40s infinite linear;
background-image: url("/images/firstPlanet-PhotoRoom.png");
background-size: 100% 100%;
width: 10vw;
height: 20vh;
@keyframes rotation {
  0% {
      transform:rotate(0deg);
   }
  100% {
      transform:rotate(360deg);
    }
  }
`
const AboutMeV2 = styled.div`
position: fixed;
cursor: pointer;
line-height: 10vw;
margin-top: ${(props)=> props.randt};
margin-left: ${(props)=> props.randl};
width: 10vw;
height: 15vh;
opacity: 0;
animation: ani 2.5s forwards;
@keyframes ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

&:hover{
font-size: 1.2em;
width: 10vw;
}
`

const AboutText = styled.div`
position: fixed;
font-size: 0.4em;
width: 8%;
background-image: linear-gradient(to left, blue, blueviolet, yellow, grey);
white-space: normal;
color: transparent;
background-clip: text;
-webkit-background-clip: text;
display: inline-block;
font-weight: bold;
line-height: normal;
text-align: center;
margin-top: 8vh;
margin-left: 1vw;
vertical-align: middle;
z-index: 99; 
`
/*
<AboutText>Люблю вкусно и разнообразно поесть. А также иногда готовить.</AboutText><Photo src="/images/еда.jpg"></Photo>
<AboutText>Люблю играть в различные игры, как онлайн, так и оффлайн.</AboutText><Photo src="/images/игры.jpg"></Photo>
<AboutText>Люблю путешествовать, преимущественно по России(Байкал, Ергаки)</AboutText><Photo src="/images/путешествия.jpg"></Photo>
*/

const About = () => {
  let rand1 = Math.floor(Math.random()*(30-15)+15);
  let rand2 = Math.floor(Math.random()*(15-5)+5);
  let rand3 = Math.floor(Math.random()*(30-15)+15);
  let rand4 = Math.floor(Math.random()*(15-5)+5);
  let rand5 = Math.floor(Math.random()*(30-15)+15);
  let rand6 = Math.floor(Math.random()*(15-5)+5);
    return (
      <AboutArea>
        <AboutMeV2 onClick = {() => window.location.href="/about/:{rand1}"} randl={(rand1+"vw")} randt={(rand2+"vh")}><PlanetSpin/><AboutText>Вкусная еда</AboutText></AboutMeV2>
        <AboutMeV2 randl={(rand3+rand1+"vw")} randt={(rand4+rand2+"vh")}><PlanetSpin/><AboutText>Компьютерные игры</AboutText></AboutMeV2>
        <AboutMeV2 randl={(rand5+rand3+rand1+"vw")} randt={(rand6+rand4+rand2+"vh")}><PlanetSpin/><AboutText>Путешествовать</AboutText></AboutMeV2>
      </AboutArea>
    );
  }
  
  export {About};