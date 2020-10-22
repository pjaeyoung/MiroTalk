import { FlattenSimpleInterpolation } from 'styled-components';
import * as S from './style';

interface ModalProps {
  gridTemplate: FlattenSimpleInterpolation;
  children: JSX.Element[];
}

export default function Modal({ children, gridTemplate }: ModalProps): JSX.Element {
  return (
    <S.ModalContainer>
      <S.ModalInner gridTemplate={gridTemplate}>{children}</S.ModalInner>
    </S.ModalContainer>
  );
}
