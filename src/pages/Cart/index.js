import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import {
  MdRemoveCircle,
  MdAddCircle,
  MdRemoveShoppingCart,
} from 'react-icons/md';

import { AiOutlineLoading } from 'react-icons/ai';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  ProductTable,
  Total,
  EmptyCart,
  LoadingContainer,
} from './styles';

export default function Cart() {
  const [loadingProducts, setLoadingProducts] = useState(false);
  const history = useHistory();
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function handleHome() {
    history.push('/');
  }
  useEffect(() => {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    async function loadProducts() {
      setLoadingProducts(true);
      await delay(3000);
      setLoadingProducts(false);
    }
    loadProducts();
  }, []);

  if (loadingProducts) {
    return (
      <LoadingContainer loadingProducts={loadingProducts}>
        <AiOutlineLoading size={80} color="#FFF" />
      </LoadingContainer>
    );
  }

  if (cart.length === 0) {
    return (
      <Container>
        <EmptyCart>
          <MdRemoveShoppingCart size={48} color="#333" />
          <h1>Seu carrinho está vazio</h1>
          <button onClick={handleHome} type="button">
            {' '}
            Voltar para Home
          </button>
        </EmptyCart>
      </Container>
    );
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title} </strong>{' '}
                <h3>{product.description} </h3>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircle size={25} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircle size={25} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <FaTrashAlt syze={20} color="#9159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
