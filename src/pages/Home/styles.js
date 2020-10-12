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

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    img {
      align-self: center;
      max-width: 200px;
    }
    > strong {
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
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    main {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    div {
      display: flex;
      align-items: center;
      padding: 7px;

      /*  background: rgba(0, 0, 0, 0.1); */
      svg {
        margin-right: 5px;
      }
      span {
        font-size: 20px;
        span {
          flex: 1;
          text-align: center;
          font-weight: bold;
        }
      }
    }

    button {
      background: #541d4d;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.3s;
      padding: 15px 30px;

      &:hover {
        background-color: white;
        color: #00bd56;
        border: 1px solid #4caf50;
      }

      /*    div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }
      svg {
        margin-right: 5px;

      } */
    }
    /*     span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    } */
  }
`;
