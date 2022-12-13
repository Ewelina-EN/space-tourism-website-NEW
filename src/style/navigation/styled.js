import styled from "styled-components";

export const Navigation = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
`;

export const ImgLogo = styled.img`
  display: block;
  width: 40px;
  margin: 24px 0 0 24px;
  

  @media (min-width: 768px) {
        margin: 24px 0 0 39px;
        width: 48px;
    }
@media (min-width: 1028px) {
        margin: 64px 0 0 55px;
    }
`;