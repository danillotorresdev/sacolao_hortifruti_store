import styled from 'styled-components';

export const Container = styled.div`
  background-color: #729581;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  flex-direction: column;
  overflow: hidden;
  border: none;
  color: #fff;
  position: relative;
  margin-bottom: 15px;
  &:hover {
    span {
      &::before {
        content: '';
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        z-index: 1;
      }
    }
    button {
      display: block;
    }
  }
`;

export const BackDrop = styled.span``;

export const AddToCartBTN = styled.button`
  display: none;
  font-size: 12px;
  line-height: 1;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
  cursor: pointer;
`;

export const CoverBG = styled.img`
  object-fit: cover;
  width: 100%;
  height: 150px;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
