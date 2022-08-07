import styled from '@emotion/styled';

export const ContainerProfile = styled.div`
max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  border: 1px solid #ede5e2;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div`
  margin-top: 0;
  text-align: center;
  margin-bottom: 40px;
`;

export const ImgAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 20px;
  padding-top: 20px;
`;

export const Name = styled.p`
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.5px;
  font-weight: 700;
`;

export const Tag = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: ${props => props.theme.colors.secondaryText};
`;

export const Location = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: ${props => props.theme.colors.secondaryText};
`;

export const StatsProfile = styled.ul`
  list-style: none;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
  background-color: #f4f4f4;
`;

export const StatsItem = styled.li`
  text-align: center;
  display: grid;
  /* border: 1px solid #ede5e2; */
  padding: 15px 18px;
`;

export const Label = styled.span`
font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: ${props => props.theme.colors.secondaryText};
`;

export const Quantity = styled.span`
  font-weight: 700;
  margin-top: 8px;
`;