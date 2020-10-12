import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaShoppingBag } from 'react-icons/fa';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <FaShoppingBag size={40} color="#fff" />
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
      </Cart>
    </Container>
  );
}
