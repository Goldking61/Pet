

import styled from "styled-components";

const AreaCss = styled.div`
display: -webkit-flex; 
display: flex; 
margin: 1em;
flex-direction: row;
`

const CssCard = styled.div`
border: solid 1px blue;
box-shadow: 1px 1px, -1px -1px;
margin: 0.5em;
`

const Css = () => {
    return(
        <AreaCss>
        <CssCard>
        <h1>Card 1</h1>
        <text>Описание</text>
        </CssCard>
        <CssCard>
        <h1>Card 2</h1>
        <text>Описание</text>
        </CssCard>
        <CssCard>
        <h1>Card 3</h1>
        <text>Описание</text>
        </CssCard>
        </AreaCss>
        
    );
}

export  {Css};