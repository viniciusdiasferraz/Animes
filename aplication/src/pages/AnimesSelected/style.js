import styled from "styled-components";

export const ContainerSideBar = styled.div`
    height: 100%;
    background-color: #F46D1B;
    position: fixed;
    width: 5.2%;
    display: flex;
    justify-content: center;
    padding: 1.4%;
    z-index: 2;
`
export const ImgCover = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: 100% 60%;
    height: 53vh;
`

export const Container = styled.div`
    display: flex;
    width: 74%;
    align-items: center;
    margin-left: 26%;
    margin-bottom: 30%;

    @media(max-width: 1115px){
        margin-left: 35%;
        width: 65%;
    }

    @media(max-width: 918px){
        margin-left: 40%;
        width: 58%;
    }

    @media(max-width: 745px){
        margin-left: 44%;
        width: 50%;
    }

    @media(max-width: 660px){
        margin-left: 47%;
    }

    @media(max-width: 595px){
        margin-left: 42%;
    }

    @media(max-width: 475px){
        margin-top: 38%;
    }

    @media(max-width: 405px){
        margin-top: 43%;
    }
`

export const SpaceImgButton = styled.div`

`

export const Img = styled.img`
    top: 40%;
    left: 10%;
    height: 50vh;
    position: absolute;

    @media(max-width: 595px){
        height: 37vh;
        width: 30%;
    }

    @media(max-width: 475px){
        height: 36vh;
        width: 38%;
        top: 41%;
        left: 33%;
    }

    @media(max-width: 395px){
        width: 45%;
        left: 28%;
    }
`

export const SpaceDescription = styled.div`
    width: 68%;
    display: flex;
    flex-direction: column;
    margin-left: 3%;
    margin-top: 1vh;
`

export const TextTitle = styled.text`
    margin-bottom: 2%;
    font-weight: 700;
    color: #3C3C3C;
    font-size: 1.8em;
`

export const Text = styled.text`
`


export const AnimeVideo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
    margin-top: 4%;
    margin-left: 10%;
    position: absolute;
    top: 86vh;

    @media(max-width: 1115px){
        margin-left: 12%;
    }

    @media(max-width: 915px){
        top: 90vh;
    }

    @media(max-width: 595px){
        top: 80vh;
    }

`
export const Button = styled.button`
    width: 55%;
    height: 8vh;
    background-color: #F46D1B;
    border: none;
    border-radius: 10px;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1em;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 915px){
        display: flex;
        width: 67%;
    }

    @media(max-width: 745px){
        width: 80%;
    }

    @media(max-width: 660px){
        width: 90%;
    }

    @media(max-width: 540px){
        flex-direction: column
    }

    @media(max-width: 440px){
        height: 10vh;
    }

    @media(max-width: 405px){
        height: 12vh;
        width: 95%;
    }

`

export const TextRating = styled.text`
    width: 45%;
    margin-top: 4vh;
    margin-bottom: 3vh;
    color: #16A085;
    font-weight: 500;
    span{
        color: #16A085;
        font-size: 1.3em;
    }

    @media(max-width: 595px){
        width: 55%; 
    }
`
export const Textpopularity = styled.text`
    margin-bottom: 3vh;
    font-weight: 500;
    color: #3D3D3D;
`
export const TextRank = styled.text`
    margin-bottom: 3vh;
    font-weight: 500;
    color: #3D3D3D;

    @media(max-width: 985px){
        width: 65%;
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