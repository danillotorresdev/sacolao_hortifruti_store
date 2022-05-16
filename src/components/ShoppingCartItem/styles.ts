import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: #eee;
  border-radius: 4px;
  margin-right: 10px;
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 10px 0;
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const Quantity = styled.div`
  font-size: 12px;
  color: #666;
`;

export const UnityPrice = styled.div`
  font-size: 12px;
  color: #666;
`;
