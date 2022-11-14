import styled from 'styled-components';
import { StyledMenuCardsType } from './types';

export const StyledMenuCards = styled.div<StyledMenuCardsType>`
  width: 24rem;
  height: 70vh;
  background-color: ${({ backgroundColor }) => backgroundColor || 'none'};
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #d9d9d9;
    border-radius: 1rem;
  }
  gap: 0.5rem;
`;

export const MenuCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  gap: 0.5rem;
`;

export const MenuCardWrapper = styled.div`
  width: 20rem;
`;
