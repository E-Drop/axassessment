import styled from  'styled-components/macro';
interface StyledProps {
  active: string
}

export const PaginationButton = styled.button<StyledProps>`
  background: ${props => props.active ? '#118cdc' : '#d3d3d3' };
  color: ${props => props.active ? '#fff' : '#000' };
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  font-size: 1rem;
`;

export const PaginationContainer = styled.div`
margin: 20px auto 30px auto;
text-align: center;
`;