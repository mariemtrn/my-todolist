import styled, { css } from 'styled-components';
import { TypedComponent } from '@utils/enums.utils';

interface StyledTextProps {
  type: TypedComponent
}

const StyledText = styled.span<StyledTextProps>`
  ${({ type }) => {
    switch (type) {
        case TypedComponent.SUBTITLE:
            return css`
                font-size: 18px;
                font-weight: 500;
                color: #7e57c2;
          `;
        case TypedComponent.HEADER:
            return css`
                font-size: 14px;
                color: black;
          `;
        case TypedComponent.TITLE:
            return css`
                font-size: 24px;
                font-weight: bold;
                color: #512da8;
            `;
        case TypedComponent.CARD:
            return css`
                font-size: 14px;
                color: black;
          `;
        case TypedComponent.BUTTON:
            return css`
                font-size: 14px;
                color: white;
            `;
        default:
            return css`
                font-size: 16px;
                color: #673ab7;
                `;
    }
  }}
`;

export default StyledText;
