import styled from "styled-components";

const MainAreaForNotFound = styled.div`
height: 75vh;
`

const Name = styled.div`
font-color: blueviolet;
font-size: 8vh;
text-align: center;
`

const NotFound = () => {
    return (
      <>
      <MainAreaForNotFound>
      <Name>Страница не найдена</Name>
      </MainAreaForNotFound>
      </>
      
    );
  }
  
  export {NotFound};