import React, { useCallback, useMemo, useState } from 'react';
import { FiPower, FiShoppingCart } from 'react-icons/fi';
import {
  Header,
  HeaderContent,
  Profile,
  Content,
  ContentTitle,
  LogoutButton,
  SectionTitleSearch,
  CartAndLogoutButton,
  ModalHeaderContent,
  CartItemsLenght,
  OpenModalButton,
  ButtonWrapper,
  CheckoutModalButon,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import fruits from '../../utils/fruitsData.json';
import FruitCard from '../../components/FruitCard';
import { Col3, Container } from '../../utils/styles/GridSystem';
import Input from '../../components/Input/DefaultInput';
import { useToast } from '../../hooks/toast';
import Modal from '../../components/Modal';
import { Fruit, ICart } from './types';
import ShoppingCartList from '../../components/ShoppingCartList';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from '../../components/PDFFile';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const [availableFruits, setAvailableFruits] = useState<Fruit[]>(
    fruits.availableFruits,
  );
  const { addToast } = useToast();
  const [selectedFruits, setSelectedFruits] = useState<ICart[]>([]);
  const ref = React.createRef<HTMLDivElement>();

  const searchList = (search: string): void => {
    const filteredFruits = fruits.availableFruits.filter((fruit: Fruit) =>
      fruit.name.toLowerCase().includes(search),
    );
    setAvailableFruits(filteredFruits);
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const addItemToCart = useCallback(
    (fruit: Fruit): void => {
      const fruitInCart = selectedFruits.find(
        (item: ICart) => item.id === fruit.id,
      );

      if (fruitInCart) {
        fruitInCart.quantity += 1;

        setSelectedFruits([...selectedFruits]);
      } else {
        setSelectedFruits([
          ...selectedFruits,
          {
            ...fruit,
            quantity: 1,
          },
        ]);
      }

      addToast({
        type: 'success',
        title: 'Item adicionado ao carrinho com sucesso',
        description: 'Acesse o carrinho para ver os itens',
      });
    },
    [selectedFruits, setSelectedFruits, addToast],
  );

  const handleSelectedFruits = useMemo(() => {
    return Array.from(new Set(selectedFruits));
  }, [selectedFruits]);

  const totalItems = useMemo(() => {
    return handleSelectedFruits.reduce((accumulator, item) => {
      return accumulator + item.quantity;
    }, 0);
  }, [handleSelectedFruits]);

  const totalPrice = useMemo(() => {
    return handleSelectedFruits.reduce((accumulator, item) => {
      return accumulator + item.unityPrice * item.quantity;
    }, 0);
  }, [handleSelectedFruits]);

  return (
    <>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="E-Commerce" />

          <Profile>
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <CartAndLogoutButton>
            <OpenModalButton onClick={handleShowModal}>
              <CartItemsLenght> {totalItems}</CartItemsLenght>
              <FiShoppingCart size={20} />
            </OpenModalButton>
            <Modal
              ref={ref}
              title="Carrinho de compras"
              icon={FiShoppingCart}
              showModal={showModal}
              handleShowModal={handleShowModal}
              headerContent={
                <ModalHeaderContent>
                  <FiShoppingCart size={20} />
                  <strong> Carrinho de compras </strong>
                </ModalHeaderContent>
              }
              footerContent={
                <>
                  <span>Total: R$ {Number(totalPrice.toFixed(2))}</span>
                  <PDFDownloadLink
                    document={
                      <PDFFile
                        cartItems={selectedFruits}
                        quantityItems={totalItems}
                        totalPrice={Number(totalPrice.toFixed(2))}
                      />
                    }
                  >
                    <CheckoutModalButon
                      type="button"
                      disabled={selectedFruits.length === 0}
                      onClick={() => {
                        addToast({
                          type: 'success',
                          title: 'PDF gerado com sucesso',
                        });
                      }}
                    >
                      Checkout
                    </CheckoutModalButon>
                  </PDFDownloadLink>
                </>
              }
            >
              <ShoppingCartList cartItems={selectedFruits} />
            </Modal>
            <LogoutButton type="button" onClick={signOut}>
              Logout <FiPower />
            </LogoutButton>
          </CartAndLogoutButton>
        </HeaderContent>
      </Header>
      <Content>
        <SectionTitleSearch>
          <ContentTitle>Frutas disponíveis</ContentTitle>
          <Input
            name="Search Input"
            onChange={(e) => searchList(e.target.value)}
            placeholder="Pesquisar fruta"
          />
        </SectionTitleSearch>
        <Container>
          {availableFruits.map((fruit) => (
            <Col3 hasPadding key={fruit.id}>
              <FruitCard
                key={fruit.id}
                addItemToCart={() => addItemToCart(fruit)}
                {...fruit}
              />
            </Col3>
          ))}
        </Container>
        <ButtonWrapper>
          <Button onClick={handleShowModal}>
            <FiShoppingCart size={20} />
            <span> Conferir carrinho</span>
          </Button>
        </ButtonWrapper>
      </Content>
    </>
  );
};

export default Dashboard;
