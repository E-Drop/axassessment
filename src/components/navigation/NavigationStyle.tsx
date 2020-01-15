import styled from  'styled-components/macro';
interface StyledProps {
  image: string
}

export const NavContainer = styled.div<StyledProps>`
  background: #118cdc;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  div {
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & div:first-child {
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 321%;
    background-position: center;
  }
`;