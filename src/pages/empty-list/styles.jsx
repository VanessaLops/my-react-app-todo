import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: 340px;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    margin-bottom: 24px;
  }

  button {
    padding: 20px 28px;
    font-size: 18px;

    background: var(--purpleLight);
    color: var(--white);
    border-radius: 14px;
  }

  @media (max-width: 884px) {
    flex-direction: column;
    font-size: 12px;

    img {
      width: 60px;
      margin-bottom: 4px;
    }
    button {
      width: 80x;
      height: 20px;
      text-align: center;
      font-size: 12px;
    }
    p {
      font-size: 12px;
    }
  }
`;
