import styled from "styled-components";
import { theme } from "../../theme";

export const InfoSec = styled.div`
  color: ${({ lightText }) => (lightText ? theme.LightPrimary : theme.primaryDark)};
  padding: 160px 0;
  border: 2px solid red;
  background: ${({ lightBg }) => (lightBg ? theme.LightPrimary : theme.primaryDark )};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0px -15px -15px -15px;
  padding: 5px;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid green;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  padding: 10px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  border: 2px solid blue;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    display: flex;
    justif-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 15px;
  border: 2px solid orange;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  border: 2px dashed violet;
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start': 'flex-end' )};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 600px;
`;


export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? theme.LightPrimary : theme.primaryDark)};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  padding:2px;
  border: 2px solid purple;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    border: 2px solid violet;
    color: ${({ lightText }) => (lightText ? theme.LightPrimary : theme.primaryDark)};
    `;


export const Subtitle = styled.p`
  max-width: 480px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  border: 2px solid cornflowerblue;
  color: ${({ lightTextDesc }) => (lightTextDesc ? theme.LightPrimary : theme.primaryDark)};
`;
