import styled from "styled-components";

export const Body = styled.div`
height: 100%;;
background-color: #F46D1B;
position: absolute;
width: 5.2%;
display: flex;
justify-content: center;
padding: 1.4%;
`

export const Container = styled.div`
height: 100%;;

`

export const Text = styled.text`
font-size: 1.4em;
color: #34AC40;
margin-left: 7.5%;
font-weight: 600;
display: flex;
align-items: center;
span{
    color:#F46D1B;
    margin-right: 0.5%;
    margin-left: 0.3%;
  }
  
`

export const Content = styled.div`
display: flex;
width: 100%;
justify-content: center;
margin-top: 2.8vh;
margin-bottom: 5em;
`

export const InsideContent = styled.div`
width: 85%;
display: flex;
justify-content: space-between;
gap: 1.7%;

`

export const Img = styled.img`
height: 50vh;
cursor:pointer;
&:hover {
    opacity:40%;
}
`


export const ContentImg = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 4em;
`
export const ImgCat = styled.img`
margin-top: 2em;
position: absolute;

`
