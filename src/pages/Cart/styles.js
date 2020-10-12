import styled, { css, keyframes } from 'styled-components';

// import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;

  ${props =>
    props.loadingProducts &&
    css`
      svg {
        animation: ${rotate} 0.8s linear infinite;
      }
    `}
`;

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #541d4d;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        opacity: 0.75;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #333;
    text-align: left;
    padding: 12px;
    font-size: 16px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    font-size: 20px;
    line-height: 20px;
    color: #00072d;
    margin-top: 5px;
    padding: 8px 0 8px 0;
  }
  h3 {
    font-family: 'Poppins', sans-serif;
    color: #001c55;
    padding: 3px 0 8px 0;
    font-size: 16px;
    font-weight: 400;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 8px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
    font-size: 23px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin-top: 40px;
    background: #541d4d;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 15px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover {
      opacity: 0.75;
    }
  }
`;
