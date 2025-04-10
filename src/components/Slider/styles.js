import styled from 'styled-components'

export const Body = styled.div`
  width:100%;
  max-width: 1310px;
  margin: 2rem auto;
  margin-bottom: 6rem;

  @media(max-width: 970px){
    display:none;
  }

  .slick-dots li button:before {
    color: #F46D1B;
    font-size: 15px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Singleimg = styled.img`
  width: 90%;
  height: 30vh;
  margin-bottom: -3px;
  margin-left: 5em;
  cursor: pointer;
  object-fit: cover;
  border-top: 12px solid #34AC40;
`

export const Text = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: white;;
  height: 3rem;
  width: 90.1%;
  margin-left: 6.1%;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  justify-content: center;
  font-weight: 400;
  position: relative;
  bottom: 45px;
  span{
    text-transform: uppercase;
    color: #F46D1B;
    font-weight: 700;
  }

  @media(max-width: 1115px){
    width: 90%;
    margin-left: 7.3%;
    font-size: 0.8rem;
  }

  @media(max-width: 1070px){
    width: 90%;
    margin-left: 7.7%;
    font-size: 0.8rem;
  }

  @media(max-width: 1040px){
    width: 90%;
    margin-left: 7.9%;
    font-size: 0.8rem;
  }

  @media(max-width: 995px){
    width: 90%;
    margin-left: 8.2%;
    font-size: 0.7rem;
  }
`