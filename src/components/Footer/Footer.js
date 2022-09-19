import "styled-components";
import styled from "styled-components";

const Area = styled.div`
text-align: center;
`
const FooterText = styled.div`
font-size: 5vh;
color: blueviolet;
`

function Footer() {
    return(
            <Area>
            <FooterText>С наилучшими пожеланиями. <br/>Создатель сайта Кукуев Леонид Олегович</FooterText>
            </Area>
    );
}

export default Footer;