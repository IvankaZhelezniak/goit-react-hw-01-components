import styled from '@emotion/styled';

export const TdTbody = styled.td`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid #757575;

    text-transform: capitalize;
  color: ${p => p.theme.colors.primaryText};
`;

export const TrTbody = styled.tr`
:nth-of-type(2n) {
  background-color: ${p => p.theme.colors.teal};
}
`;