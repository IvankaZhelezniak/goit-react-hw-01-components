import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0px auto;
  margin-top: 50px;
`;

export const ThHead = styled.th`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid #ede5e2;

    text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
`;