import styled from "styled-components";
import {Tooltip} from '@mui/material';

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
  
`

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
  width: 85%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const Img = styled.img`
height: 50vh;
cursor:pointer;

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

export const Tooltiptest = styled(Tooltip)`
background-color: red !important;
`
