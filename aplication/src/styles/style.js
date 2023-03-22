import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

`

export const Text = styled.text`
font-size: 1.6em;
color: #34AC40;
margin-left: 4em;
font-weight: 600;
span{
    color:#F46D1B;
  }
  
`

export const Content = styled.div`
display: flex;
width: 100%;
justify-content: center;
margin-top: 2em;
`
export const InsideContent = styled.div`
width: 85%;
display: flex;
justify-content: space-between;
gap: 1.7%;

`

export const Img = styled.img`
width: 225px;
height: 339px;
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
