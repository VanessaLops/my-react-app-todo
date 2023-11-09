import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 884px) {
    font-size: 10px;
  }
`;

export const Table = styled.div`
  padding: 0px 14px 0px 0px;
  margin-bottom: 24px;

  h3 {
    margin-bottom: 14px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: var(--purpleLight);
      color: var(--white);
      border-radius: 8px;

      margin-bottom: 8px;
      padding: 10px 30px;

      &:hover {
        filter: brightness(85%);
        transition: 0.35s ease-out;
      }
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    min-width: 320px;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: white;

    thead tr {
      width: 500px;
      text-align: center;
      padding: 14px;
      font-weight: bold;
      background: var(--primary);
      color: white;
    }

    tr:first-child,
    th:first-child {
      border-top-left-radius: 7px;
    }

    tr:first-child,
    th:last-child {
      border-top-right-radius: 7px;
    }

    th,
    td {
      padding: 14px 18px;
      border-bottom: 1px solid #c5c5c5;
    }

    tbody tr td {
      background: #f4f3ff;
    }
  }

  @media (max-width: 884px) {
    table {
      font-size: 10px;
      width: 200px;
    }
  }
`;
