import styled from "styled-components"

const Body = styled.div`
background-color: black;
display: grid;
grid-template-rows: 10vh 70vh 20vh;
background-image:
      -webkit-gradient(radial, 50% 50%, 2, 50% 50%, 40, from(white), color-stop(0.1, rgba(248,255,128,.5)), to(transparent)),
      -webkit-gradient(radial, 50% 50%, 1, 50% 50%, 30, from(white), color-stop(0.1, rgba(255,186,170,.4)), to(transparent)),
      -webkit-gradient(radial, 50% 50%, 1, 50% 50%, 40, from(rgba(255,255,255,.9)), color-stop(0.05, rgba(251,255,186,.3)), to(transparent)),
      -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 30, from(rgba(255,255,255,.4)), color-stop(0.03, rgba(253,255,219,.2)), to(transparent));
   /* Firefox */
   background-image:
      -moz-radial-gradient(circle, #FFFFFF 2px, rgba(248,255,128,.5) 4px, transparent 40px),
      -moz-radial-gradient(circle, #FFFFFF 1px, rgba(255,186,170,.4) 3px, transparent 30px),
      -moz-radial-gradient(circle, rgba(255,255,255,.9) 1px, rgba(251,255,186,.3) 2px, transparent 40px),
      -moz-radial-gradient(circle, rgba(255,255,255,.4), rgba(253,255,219,.2) 1px, transparent 30px);
   /* Background images size */
   background-size: 550px 550px, 350px 350px, 250px 270px, 220px 200px;
   /* Background images position*/
   background-position: 0 0, 30px 60px, 130px 270px, 70px 150px;
   
   animation-name: movement;
   animation-duration: 5s;
   animation-timing-function: linear;
   animation-iteration-count: infinite;
   /* Firefox */
   -moz-animation-name: movement;
   -moz-animation-duration: 5s;
   -moz-animation-timing-function: linear;
   -moz-animation-iteration-count: infinite;
   /* Webkit */
   -webkit-animation-name: movement;
   -webkit-animation-duration: 5s;
   -webkit-animation-timing-function: linear;
   -webkit-animation-iteration-count: infinite;
}
@keyframes movement
{
   from {
         background-position: 0 0, 30px 60px, 130px 270px, 70px 150px;
   }
   to {
         background-position: -550px 0, -320px 60px, -120px 270px, -150px 150px;
   }
}
@-moz-keyframes movement
{
   from {
         background-position: 0 0, 30px 60px, 130px 270px, 70px 150px;
   }
   to {
         background-position: -550px 0, -320px 60px, -120px 270px, -150px 150px;
   }
}
@-webkit-keyframes movement
{
   from {
         background-position: 0 0, 30px 60px, 130px 270px, 70px 150px;
   }
   to {
         background-position: -550px 0, -320px 60px, -120px 270px, -150px 150px;
   }
}
height: 100vh;
margin:-0.21em;
`

export default Body;