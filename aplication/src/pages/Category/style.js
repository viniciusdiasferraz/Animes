import styled from "styled-components";

export const Text = styled.text`
margin-left: 9%;
    font-weight: 600;
    color: #F46D1B;
    font-size: 1.5em
`


export const Content = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin-top: 2em;
`

export const Container = styled.div`
cursor:pointer;
&:hover {
    opacity:40%;
}
`

export const Img = styled.img`

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