import styled from 'styled-components';

export const OverLay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  display: ${(props: any) => (!props.hidden ? 'none' : 'initial')};
`;

export const ModalWrap = styled.div`
  background: white;
  border: 1px solid #666;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  position: relative;
  flex-direction: column;
  height: 400px;
  position: relative;
  overflow: hidden;
  @media (min-width: 1199px) {
    width: 500px;
  }
`;

export const Header = styled.h2`
  color: #333;
  padding: 9px 0px 0px 18px;
  height: 50px;
  box-shadow: -5px -7px 15px #394a40;
  z-index: 1;
  svg {
    margin-right: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  overflow-y: auto;
  padding: 20px;
  height: calc(100% - 110px);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
  svg {
    color: #fff;
    margin: 0 auto;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 60px;
  background-color: #729581;
  padding: 0px 20px;
`;
