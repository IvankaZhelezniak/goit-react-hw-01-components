import styled from '@emotion/styled';
import getRandomColor from '../Statistics/randomColor';

export const Item = styled.li`
  min-width: 240px;
  display: grid;
  padding: 10px 4px;

  :not(:last-child) {
  border-right: 1px solid #d4d7da;
}

 background-color: ${getRandomColor};
`;

export const Label = styled.span`
  margin-bottom: 8px;
  font-size: 16px;
  color: ${p => p.theme.colors.black};
`;

export const Percentage = styled.span`
  font-size: 24px;
  color: ${p => p.theme.colors.black};
`;