import styled from "styled-components";

export const Content = styled.div`
display: flex;
width: 100%;
justify-content: center;
margin-top: 2.8vh;
margin-bottom: 5em;
`
export const InsideTooltip = styled.div`
background-color:#262626;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items;
`

export const TitleTooltip = styled.text`
font-size: 1.5em;
font-weight: 600;
margin-bottom: 4%;
`

export const PercentageTooltip = styled.text`
color:#16A085;
font-size: 1.5em;
font-weight: 500;
margin-bottom: 3%;
`

export const PopularityTooltip = styled.text`
margin-bottom: 3%;
font-size: 1.4em;
font-weight: 400;
`

export const RankTooltip = styled.text`
font-size: 1.4em;
font-weight: 400;
margin-bottom: 5%;

`
export const SynopsisTooltip = styled.text`
font-weight: 400;

`

export const InsideContent = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media(min-width: 1021px){
    margin-left: 6rem;
  }

    @media(max-width: 1020px){
        display: flex;
        justify-content: center;
        margin-left: 8%;
    }

    @media(max-width: 650px){
        display: flex;
        justify-content: center;
    }

`

export const Img = styled.img`
    height: 50vh;
    cursor:pointer;
    object-fit: cover;
    object-position: 80% 0%;

    @media(max-width: 1020px){
        width: 40%;
    }

    @media(max-width: 650px){
        padding: 0 3rem;
        width: 100%;
    }

`
