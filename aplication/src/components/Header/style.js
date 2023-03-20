import styled from "styled-components";


export const Logo = styled.img`
`

export const Container = styled.div`
background-image:  url("./banner.png") ;
background-repeat: no-repeat;
background-size: auto;
height: 30rem;
padding: 0.5em;
> svg {
    position: absolute;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`

export const Containerimput = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 1em;
 `

export const Imput = styled.input`
     height: 2.4em;
     border: 1px solid #FFFFFF;
     outline:none;
     filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
     border-radius: 10px;
     background-color: transparent;
     color: white;
     &:hover {
         ::placeholder{
             color: white;
         }
     }
     &::placeholder{
         color: white;
         font-weight: 300;
     }`


export const Textcontainer = styled.div`
    color: white;
    font-size: 4em;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 3em;
    justify-content: flex-end;
`

export const paragraphone = styled.div`
span{
    color: #F46D1B;
}
`

export const paragraphtwo = styled.div`
span{
    color: #34AC40;
}
`






