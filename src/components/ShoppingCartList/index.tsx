import React, { useCallback } from 'react';
import { List, WithoutItem } from './styles';
import { ICart } from '../../pages/Dashboard/types';
import ShoppingCartListItem from '../ShoppingCartItem';
import { IShoppingCartList } from './types';

const ShoppingCartList: React.FC<IShoppingCartList> = ({ cartItems }) => {
  const handlePriceTotal = useCallback(
    (quantity: ICart['quantity'], unityPrice: ICart['unityPrice']) => {
      return unityPrice * quantity;
    },
    [],
  );

  if (cartItems.length === 0) {
    return <WithoutItem>Nenhum item adicionado</WithoutItem>;
  }

  return (
    <List>
      {cartItems.map((item: ICart) => (
        <ShoppingCartListItem
          key={item.id}
          fruit={item}
          priceTotal={handlePriceTotal(item.quantity, item.unityPrice)}
        />
      ))}
    </List>
  );
};

export default ShoppingCartList;
