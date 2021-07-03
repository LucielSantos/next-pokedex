import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 54px;
    margin: 4rem auto;
  }
`;

export const Body = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  position: relative;

  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 2px 2px 3px 1px white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: ' ';
    position: absolute;
    width: 50%;
    height: 2px;
    border-radius: 1rem;
    top: 0.8rem;
    background-color: rgba(255, 255, 255, 0.5);
  }

  p {
    margin-top: 1rem;
    text-transform: capitalize;
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  padding: 0.8rem;
  width: 10%;
  height: 12rem;

  @media (max-width: 1400px) {
    width: 20%;
  }

  @media (max-width: 750px) {
    width: 50%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;
