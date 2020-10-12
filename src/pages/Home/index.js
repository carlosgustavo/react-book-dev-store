import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImCart } from 'react-icons/im';
import { AiOutlineLoading } from 'react-icons/ai';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList, LoadingContainer } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    async function loadProducts() {
      setLoadingProducts(true);
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      await delay(1000);
      setProducts(data);

      setLoadingProducts(false);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
    /* dispatch(CartActions.addToCartRequest(id)); */
  }

  if (loadingProducts) {
    return (
      <LoadingContainer loadingProducts={loadingProducts}>
        <AiOutlineLoading size={80} color="#FFF" />
      </LoadingContainer>
    );
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <h3> {product.description}</h3>
          <span>{product.priceFormatted}</span>
          <main>
            <button type="button" onClick={() => handleAddProduct(product.id)}>
              <span> Adicionar ao Carrinho</span>
            </button>
            <div>
              <ImCart size={35} color="#00BD56" />{' '}
              <span>{amount[product.id] || 0}</span>
            </div>
          </main>
        </li>
      ))}
    </ProductList>
  );
}
