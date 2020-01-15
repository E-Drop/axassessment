import styled from  'styled-components/macro';
interface StyledProps {
  active: string
}

export const PaginationButton = styled.button<StyledProps>`
  background: ${props => props.active ? '#118cdc' : '#d3d3d3' };
  padding: 10px 5px;
`;