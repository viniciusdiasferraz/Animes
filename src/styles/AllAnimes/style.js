import styled from "styled-components";

export const ContainerSideBar = styled.div`
    height: 100%;
    background-color: #F46D1B;
    position: fixed;
    width: 5.2%;
    display: flex;
    justify-content: center;
    padding: 1.4%;
    z-index: 1;
`

export const Title = styled.div`
    margin-top: 8vh;
    margin-left: 8%;
`

export const Text = styled.text`
    margin-left: 3%;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #F46D1B;
    font-size: 1.5em;

    
    @media(max-width: 900px) {
        margin-left: 6%;
    }

    @media(max-width: 500px) {
        margin-left: 10%;
    }
`

export const Content = styled.div`
    width: 93%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 3vh;
    margin-left: 6%;
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


export const Img = styled.img`
    width: 18.5%;
    cursor: pointer;
    margin-bottom: 4vh;

    @media(max-width: 900px){
        width: 20.5%;
    }

    @media(max-width: 695px){
        width: 25.5%;
    }

    @media(max-width: 560px){
        width: 33.5%;
    }

    @media(max-width: 440px){
        width: 65.5%;
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
    z-index: 3;
`


