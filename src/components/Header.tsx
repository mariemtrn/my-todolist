import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { resetTasks } from '@store/actions.store';
import { TypedComponent } from '@utils/enums.utils';
import { useNavigate } from 'react-router-dom';
import StyledText from '@utils/style.utils';
import { useTranslation } from 'react-i18next';
import { LanguageKey } from '@languages/enum';
import { MyButton, LanguagesSelector } from '@src/components';

const HeaderContainer = styled.div`
    width: 95%;
    margin: 1rem 0;
`;

const HeaderButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    flex-direction: row;
`;

function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleResetTasks = () => {
    dispatch(resetTasks());
    localStorage.removeItem('reduxState');
  };

  return (
    <HeaderContainer>
      <StyledText type={TypedComponent.TITLE}>{t(LanguageKey.Title)}</StyledText>
      <HeaderButtonContainer>
        <MyButton type={TypedComponent.HEADER} text={t(LanguageKey.Reset)} onClick={handleResetTasks} />
        <MyButton type={TypedComponent.HEADER} text={t(LanguageKey.Trash)} onClick={() => { navigate('/trash'); }} />
        <LanguagesSelector />
      </HeaderButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
