import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingProps {
  color?: string;
}

const Wrapper = styled.div`
  text-align: center;
  padding: 15px 0;
`;

const LdsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const WrapperLoading = styled.div<LoadingProps>`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid ${props => props.color || '#f8b6bb'};
    border-radius: 50%;
    animation: ${LdsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.color || '#f8b6bb'} transparent transparent
      transparent;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

export const Loading: React.FC<LoadingProps> = props => (
  <Wrapper>
    <WrapperLoading {...props}>
      <div />
      <div />
      <div />
      <div />
    </WrapperLoading>
  </Wrapper>
);

export default Loading;
