import React, { memo } from 'react';
import { FiPlus } from 'react-icons/fi';
import {
  Container,
  CoverBG,
  CardFooter,
  BackDrop,
  AddToCartBTN,
} from './styles';
import { IFruitCard } from './types';

const FruitCard: React.FC<IFruitCard> = ({
  name,
  unityPrice,
  image,
  addItemToCart,
}) => {
  return (
    <Container>
      <BackDrop />
      <AddToCartBTN onClick={addItemToCart} title="Adicionar no carrinho">
        <FiPlus size={30} />
      </AddToCartBTN>
      <CoverBG src={image} alt={name} />
      <CardFooter>
        <strong>{name}</strong>
        <span>R$ {unityPrice}</span>
      </CardFooter>
    </Container>
  );
};

export default memo(FruitCard);
