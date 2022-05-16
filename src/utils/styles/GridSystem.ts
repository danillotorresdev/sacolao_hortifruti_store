import styled from 'styled-components';

interface GridProps {
  hasPadding?: boolean;
}

export const Container = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 5px'};
  max-width: 1199px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 1199px) {
    display: flex;
  }
`;

export const Col1 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 5px'};
`;
export const Col2 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 5px'};
`;
export const Col3 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 5px'};
  @media (min-width: 1199px) {
    width: 29%;
  }
`;
export const Col4 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 5px'};
  @media (min-width: 1199px) {
    width: 39%;
  }
`;
export const Col5 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 5px'};
  @media (min-width: 1199px) {
    width: 49%;
  }
`;
export const Col6 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 5px'};
  @media (min-width: 1199px) {
    width: 59%;
  }
`;
export const Col7 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 5px'};
  @media (min-width: 1199px) {
    width: 69%;
  }
`;
export const Col8 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 5px'};
  @media (min-width: 1199px) {
    width: 79%;
  }
`;
export const Col9 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 5px'};
  @media (min-width: 1199px) {
    width: 89%;
  }
`;
export const Col10 = styled.div<GridProps>`
  padding: ${({ hasPadding }) => hasPadding && '0 5px'};
  @media (min-width: 1199px) {
    width: 99%;
  }
`;
