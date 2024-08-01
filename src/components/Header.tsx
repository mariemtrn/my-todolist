import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { resetTasks } from '@store/actions.store';
import { TypedComponent } from '@utils/enums.utils';
import { useNavigate } from 'react-router-dom';
import MyButton from '@components/MyButton';
import StyledText from '@utils/style.utils';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleResetTasks = () => {
    dispatch(resetTasks());
    localStorage.removeItem('reduxState');
  };

  return (
    <HeaderContainer>
      <StyledText type={TypedComponent.TITLE}>Liste des tâches</StyledText>
      <HeaderButtonContainer>
        <MyButton type={TypedComponent.HEADER} text={'Réinitialiser'} onClick={handleResetTasks} />
        <MyButton type={TypedComponent.HEADER} text={'Corbeille'} onClick={() => { navigate('/trash'); }} />
      </HeaderButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
