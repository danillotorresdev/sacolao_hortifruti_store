import React from 'react';
import {
  ItemWrapper,
  Image,
  Name,
  Quantity,
  ImageWrapper,
  Content,
  UnityPrice,
} from './styles';
import { IShoppingCartListItem } from './types';

const ShoppingCartListItem: React.FC<IShoppingCartListItem> = ({
  fruit,
  priceTotal,
}) => {
  return (
    <ItemWrapper key={fruit.id}>
      <ImageWrapper>
        <Image src={fruit.image} alt={fruit.name} />
      </ImageWrapper>
      <Content>
        <Name>{fruit.name}</Name>
        <Quantity>
          Qtde: <span>{fruit.quantity}</span>
        </Quantity>

        <UnityPrice>Preco unit.: R$ {fruit.unityPrice}</UnityPrice>
        <UnityPrice>Total: R$ {priceTotal}</UnityPrice>
      </Content>
    </ItemWrapper>
  );
};

export default ShoppingCartListItem;
