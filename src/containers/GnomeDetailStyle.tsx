import styled from 'styled-components/macro';

interface ImageProps {
  image: string
}

interface HairColorProp {
  color: string
}

export const GnomeDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 50px);
  h4 {
    text-decoration: underline;
    padding: 20px;
  }
  h2 {
    padding: 20px;
  }
  @media (max-width: 600px) {
    h4 {
      padding: 0px;
    }
    h2 {
      padding: 0px;
    }
  }
`;
  
export const GnomeDetailContent = styled.div`
  max-width: 800px;
  width: 100%;
  box-shadow: 0px 0px 5px black;
  @media (max-width: 600px) {
    box-shadow: none;
  }
`;
  
export const Thumbnail = styled.div<ImageProps>`
  background-size: cover;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center 20%;
  width: 100%;
  height: 400px;
  @media (max-width: 600px) {
    height: 300px;
  }
`;
  
export const GnomeMainInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  h4 {
    margin-top: 0;
  }
  flex-direction: column;
  @media (max-width: 600px) {
    flex-direction: row;
  }
`;

export const GnomeWorksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px;
`;

export const HairColor = styled.div<HairColorProp>`
  height: 20px;
  width: 20px;
  background: ${props => props.color};
  border-radius: 50%;
`;

export const KeyValueDisplay = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: flex-start;
  align-items: center;
  > * {
    margin-right: 20px;
  }
`;