import { MutableRefObject, forwardRef } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import * as S from './style';

interface ModalProps {
  gridTemplate: FlattenSimpleInterpolation;
  children: JSX.Element[];
}

const Modal = forwardRef(
  (props: ModalProps, ref: MutableRefObject<HTMLDivElement>): JSX.Element => {
    return (
      <S.ModalContainer className='modal' ref={ref}>
        <S.ModalInner gridTemplate={props.gridTemplate}>{props.children}</S.ModalInner>
      </S.ModalContainer>
    );
  },
);

export default Modal;
