import styled from "styled-components";
import DDesktop from "../../assets/destination/background-destination-desktop.jpg";
import DTablet from "../../assets/destination/background-destination-tablet.jpg";
 import DMobile from "../../assets/destination/background-destination-mobile.jpg";

export const Container = styled.main`
    background-image: url("${DMobile}");
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;

    @media (min-width: 768px) {
        background-image: url(${DTablet});
      }
    @media (min-width: 1028px) {
        background-image: url(${DDesktop});
        flex-direction: row;
        justify-content: space-evenly;
        min-height: 760px;
    }
`;

export const Header = styled.div`
    font-family: 'Barlow Condensed';
    text-transform: uppercase;
    color: #FFFFFF;
    letter-spacing: 2.7px;
    font-size: 20px;
    font-weight: 200;

     @media (min-width: 768px) {
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 3.375px;
    }

    @media(min-width: 1028px) {
        font-weight: 400;
        font-size: 28px;
        letter-spacing: 4.725px;
    }
`;

export const Span = styled.span`
    padding-right: 15px;
    opacity: 0.25;
    font-size: 20px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 2.7px; 

    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
    }

    @media(min-width: 1028px) {
        font-size: 28px;
        letter-spacing: 4.725px;
    }
`;

export const Section = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 29px 0 58px 0;
`;

export const Image = styled.img`
        width: 170px;
        height: 170px;
        margin-bottom: 29px;
        
    @media (min-width: 768px) {
        width: 300px;
        height: 300px;
        margin-bottom: 53px;
    }
`;

export const Tab = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Planet = styled.section`
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;

export const Title = styled.p`
    text-transform: uppercase;
    font-family: 'Bellefair';
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    color: white;
    margin: 0;
`;

export const Info = styled.p`
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    color: #d0d6f9;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    width: 327px;
    margin: 0 0 20px 0;
    height: 125px;
`;

export const Data = styled.section`
    display: flex;
    flex-direction: column; 
    border-top: 1px solid #383B4B;
    margin: 20px 24px 0 24px;
    width: 80% 
`;

export const DataInfo = styled.div`
    margin: 32px 0 0 0;
    padding:0;
    text-align: center;  
`;

export const DataP = styled.p`
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    text-transform: uppercase;
    color: #D0D6F9; 
`;

export const DataSpan = styled.span`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;
    color: #FFFFFF;
`;


