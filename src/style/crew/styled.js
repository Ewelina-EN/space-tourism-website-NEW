import styled from "styled-components";
import CDesktop from "../../assets/crew/background-crew-desktop.jpg";
import CTablet from "../../assets/crew/background-crew-tablet.jpg";
import CMobile from "../../assets/crew/background-crew-mobile.jpg";
import { NavLink } from "react-router-dom";

export const Container = styled.main`
    background-image: url("${CMobile}");
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
        background-image: url(${CTablet});
      }
      
    @media (min-width: 1280px) {
        background-image: url(${CDesktop});
        justify-content: flex-end;
    }

    @media (min-width: 1990px) {
        align-items: center;
        justify-content: center;
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
        letter-spacing: 3.38px;
        margin: 0 0 0 -475px;
    }

    @media(min-width: 1280px) {
        font-weight: 400;
        font-size: 28px;
        letter-spacing: 4.725px;
        margin: 0 0 0 -800px;
    }
`;

export const HeaderSpan = styled.span`
    padding-right: 15px;
    opacity: 0.25;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 2.7px; 

    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.38px;
    }

    @media(min-width: 1280px) {
        font-size: 28px;
        letter-spacing: 4.725px;
    }
`;

export const Section = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 29px 30px;
    /* padding: 29px 0 58px 0; */

    @media (min-width: 768px) {
        flex-direction: column-reverse;
        width: 458px;
        margin: 40px 30px 0 30px;
    }

     @media(min-width: 1280px) {
        flex-direction: row-reverse;
        justify-content: space-evenly;
        align-items: flex-end;
        width: 1200px;
    }
`;

export const Image = styled.img`
        width: 177px;
        height: 222px;
        border-bottom: 2px solid #383B4B;
        
    @media (min-width: 768px) {
        width: 456px;
        height: 572px;
        margin: 40px 0;
        border-bottom: none;
    }

    @media (min-width: 1280px) {
        max-width:568px;
        max-height: 712px;
        border-bottom: none;
        margin: 0;
    }
`;

export const SectionCrew = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        flex-direction: column-reverse;
        margin-top: 10px;
    }

    @media (min-width: 1280px) {
       align-items: flex-start;
       margin: 20px 0 0 50px;
    }
`;

export const CrewNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    list-style: none;
    padding: 0;
    &:nth-child(3) {
        margin-right: 0;
        }

    @media (min-width: 768px) {
        align-items: center;
        margin-top: 10px;
        }

    @media (min-width: 1280px) {
        align-items: center;
        margin: 50px 0 50px 0;
        } 
`;

export const MenuList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    list-style: none;
    text-decoration: none;

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 18px;
        text-align: center;
    }
`;

export const Link = styled(NavLink)`
    color: #d0d6f9;
    text-decoration: none;

     &.active{
        color: white;
    }
`;

export const Span = styled.span`
    display: flex;
    margin-right: 15px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #FFFFFF;
    opacity: 0.17;

    @media (min-width: 768px) {
        width: 15px;
        height: 15px;
    }
`;

export const PersonInfo = styled.section`
    display: flex;
    flex-direction: column;

    @media (min-width: 1280px) {
            align-items: flex-start;
            justify-content: flex-start;
            width: 700px;
        }
`;

export const Role = styled.p`
    font-family: 'Bellefair';
    font-style: normal;
    font-size: 16px;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.5;
    line-height: 18px;
    text-align: center;
    margin: 15px 0 0 0;

    @media (min-width: 768px) {
        font-size: 24px;
        line-height: 27px;
        margin-bottom: 8px;
    }

     @media (min-width: 1280px) {
        font-size: 32px;
        line-height: 36px;
    }
`;

export const Name = styled.p`
    font-family: 'Bellefair';
    text-transform: uppercase;
    color: #FFFFFF;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin: 5px 0 10px 0;

    @media (min-width: 768px) {
        font-size: 40px;
        line-height: 45px;
    }

     @media (min-width: 1280px) {
        font-size: 56px;
        line-height: 64px;
    }
`;

export const Info = styled.p`
    font-family: 'Barlow';
    color: #D0D6F9;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    width: 100%;
    margin-top: 10px;

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 28px;
    }

     @media (min-width: 1280px) {
       font-size: 18px;
       line-height: 32px;
       text-align: left; 
       padding-right: 278px; 
    }
`;