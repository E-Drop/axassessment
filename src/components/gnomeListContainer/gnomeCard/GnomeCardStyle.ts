import styled from  'styled-components/macro';

interface StyledProps {
  image: string
}

export const ImageDiv = styled.div<StyledProps>`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  background-size: cover;
  border: 1px solid black;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center 15%;
`;