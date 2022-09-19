import "./Header.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
width:100%;
color: black;
text-shadow: 0 0 2px;
text-decoration: none;
font-weight: 600;
background-image: linear-gradient(to left, blue, blueviolet, white, blueviolet);;
color: transparent;
background-clip: text;
-webkit-background-clip: text;  

&:hover{
    font-weight: bold;
    &::after{
        content: "";
        display: block;
        width:40%;
        padding-top: 3px;
        border-bottom: 1px solid #f9dd94;
    }
}
&:visited{
    color: yellow;
}

`
const MainArea = styled.div`
display: grid;
box-shadow: -0.2px -0.2px, 0.2px 0.2px white;
`

const Links = styled.div`
display:grid;
width: 70%;
grid-template-columns: repeat(4,1fr);
`


function Header() {
    return(
        <MainArea>
            <Links>
                <StyledLink to="/  ">Главная</StyledLink>
                <StyledLink to="/hello ">Мои навыки</StyledLink>
                <StyledLink to="/about  ">Что я люблю?</StyledLink>
                <StyledLink to="/CSS  ">Примеры CSS</StyledLink>
            </Links>
        </MainArea>
    );
}

export default Header;