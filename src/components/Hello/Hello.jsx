import "./Main.css";
import technologies from '../data/technologies';
import styled from "styled-components";

const MainArea = styled.div`
display: grid;
height: 100%;
grid-template-columns: auto auto;
padding: 2%;
margin: 1%;
`
const DivArea = styled.div`
height: 100%;
overflow: auto;
`
const Section = styled.div`
border: 1px solid blue;
margin: 10px;
padding: 10px;
background-color: #fdeaa8;
box-shadow: 0 0 5px;
`
const Head = styled.div`
color: blueviolet;
text-align: center;
font-size: 1.4em;
font-weight: bold;
font-family: cursive;
`
const SectionHead = styled.div`
color: blueviolet;
font-size: 100%;
font-weight: bold;
text-align: center;

`

const Hello = () => {
    return(
        <DivArea>
        <Head>Добрый день, меня зовут Леонид</Head>
        <Head>Вот какие технологии я изучал</Head>
        <MainArea>
        {technologies.map(item=>
        <Section>
        <SectionHead>{item.title}</SectionHead>
        <text>{item.body}</text>
        </Section>)}
        </MainArea>
        </DivArea>
        
    );
}

export  {Hello};