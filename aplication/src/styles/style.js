import styled from "styled-components";

export const ContainerSideBar = styled.div`
  height: 305vh;
  background-color: #F46D1B;
  position: absolute;
  width: 5.2%;
  display: flex;
  justify-content: center;
  padding: 1.4%;
`

export const Container = styled.div`


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

    @media(max-width: 637px){
      display: flex;
      flex-direction: column;
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
  z-index: 2;
`