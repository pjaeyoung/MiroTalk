import styled, { FlattenSimpleInterpolation } from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

interface ModalProps {
  gridTemplate: FlattenSimpleInterpolation;
}

export const ModalInner = styled.div<ModalProps>`
  display: grid;
  ${(props) => props.gridTemplate};
  justify-items: center;
  align-items: center;
  height: 60vh;
  width: 30vw;
  min-width: 35rem;
  min-height: 35rem;
  padding: 1rem;
  background: white;
`;
