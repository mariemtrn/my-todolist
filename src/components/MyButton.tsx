import React from 'react';
import styled, { css } from 'styled-components';
import StyledText from '@utils/style.utils';
import { TypedComponent } from '@utils/enums.utils';
import { useTranslation } from 'react-i18next';

interface MyButtonProps {
  type: TypedComponent;
  text: string;
  onClick: () => void
}

interface StyledButtonProps {
  type: TypedComponent
}

const Button = styled.button<StyledButtonProps>`
    ${({ type }) => {
        switch (type) {
            case TypedComponent.HEADER:
                return css`
                    background: var(--background-color);
                    border: none;
                    margin-right: 1rem;
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;
          `;
            default:
                return css`
                    background-color: var(--button-background-color);
                    border: none;
                    height: 3rem;
                    border-radius: var(--border-radius);
                    width: 5rem;
                    cursor: pointer;

                    &:hover {
                        background-color: #9575cd;
                `;
        }
    }}
}`;

function MyButton({ type, text, onClick }: MyButtonProps) {
  const { t } = useTranslation();

  return (<Button onClick={onClick} type={type}>
    <StyledText type={type}>
      {t(text)}
    </StyledText>
  </Button>);
};

export default MyButton;
