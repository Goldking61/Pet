import styled from "styled-components";

const AboutArea = styled.div`
height: 100%;
width: 100%;
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 3vw;
`

const AboutMe = styled.div`
display: grid;
height: 100%;
width: 100%;
place-items: center;
box-shadow: 0 0 2px;
background-color: orange;
&:hover{
  box-shadow: 0 0 10px;
}
`
const Main = styled.h1`
color:blueviolet
`

const Photo = styled.img`
width: 70%;
height: 100%;
`
const AboutText = styled.div`
font-size: 0.5em;
font-weight: bold;

`

const About = () => {
    return (
      <AboutArea>
        <Main>Обо мне</Main>
        <Grid>
      <AboutMe>Вкусная еда<AboutText>Люблю вкусно и разнообразно поесть. А также иногда готовить.</AboutText><Photo src="/images/еда.jpg"></Photo></AboutMe>
      <AboutMe>Компьютерные игры<AboutText>Люблю играть в различные игры, как онлайн, так и оффлайн.</AboutText><Photo src="/images/игры.jpg"></Photo></AboutMe>
      <AboutMe>Путешествовать<AboutText>Люблю путешествовать, преимущественно по России(Байкал, Ергаки)</AboutText><Photo src="/images/путешествия.jpg"></Photo></AboutMe>
        </Grid>
      </AboutArea>
    );
  }
  
  export {About};