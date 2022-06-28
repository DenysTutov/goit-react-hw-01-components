import styled from 'styled-components';
import { getRandomHexColor } from './GetRandomColor';

export const StatisticsContainer = styled.section`
  width: 250px;
  margin: 0 auto 50px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 65px;

  font-size: 14px;
  text-transform: uppercase;
  color: #6b727b;
  background-color: #fff;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding-top: 10px;
  padding-bottom: 15px;
  color: #fff;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 11px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 16px;
`;
