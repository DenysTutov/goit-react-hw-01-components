import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 250px;

  background-color: #fff;
  border-radius: 5px;
  margin: 30px auto 50px;
  overflow: hidden;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 30px;
  background-color: #212121;
`;

export const Name = styled.p`
  font-size: 19px;
  font-weight: 700;
  color: #212121;
  margin-bottom: 15px;
`;

export const Tag = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  color: #b6b6b6;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #b6b6b6;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  height: 75px;

  background-color: #f3f6f9;
  border-top: 2px solid #edf1f5;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  height: 100%;

  :not(:last-child) {
    border-right: 2px solid #edf1f5;
  }
`;

export const StatsLabel = styled.span`
  color: #b6b6b6;
  font-size: 12px;
  margin-bottom: 4px;
`;

export const StatsQuantity = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
