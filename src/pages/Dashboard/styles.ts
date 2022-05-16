import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  padding: 32px;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  @media (min-width: 1199px) {
    flex-direction: row;
    align-items: center;
  }

  > img {
    height: 80px;
    width: 100px;
    margin: 0 auto;
    @media (min-width: 1199px) {
      margin: inherit;
    }
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
    cursor: pointer;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 14px 0;
  @media (min-width: 1199px) {
    justify-content: inherit;
    text-align: inherit;
    margin: inherit;
    margin-left: 80px;
    width: calc(100% - 100px - 80px - 200px);
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #ff9000;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
`;

export const SectionTitleSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 0 16px;
  @media (min-width: 1199px) {
    padding: inherit;
  }
`;

export const ContentTitle = styled.h3``;

export const Section = styled.section`
  margin-top: 48px;
  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  > p {
    color: #999591;
  }
`;

export const LogoutButton = styled.button`
  color: #fff;
  display: flex;
  align-items: center;
  svg {
    margin-left: 10px;
  }
`;

export const CartAndLogoutButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  margin: 0 auto;
  @media (min-width: 1199px) {
    width: 200px;
    margin: inherit;
    margin-left: auto;
  }
`;

export const ModalHeaderContent = styled.div`
  position: relative;
`;
export const CartItemsLenght = styled.span`
  color: #fff;
  font-size: 20px;
  line-height: 26px;
  height: 15px;
  font-size: 10px;
  position: absolute;
  top: 3px;
  right: 6px;
  background-color: #79b259;
  width: 15px;
  height: 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OpenModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
  width: 50px;
  height: 50px;
  text-align: center;
  position: relative;
  svg {
    color: #fff;
    margin: 0 auto;
  }
  &:hover {
    background: ${shade(0.2, '#494453')};
    border-radius: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
  button {
    color: #fff;
    background: #79b259;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: ${shade(0.2, '#79b259')};
    }

    & svg {
      margin-right: 10px;
    }
  }
`;

export const CheckoutModalButon = styled.button`
  color: #fff;
`;
