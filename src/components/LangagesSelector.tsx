import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { LanguageKey } from '@languages/enum';

const Select = styled.select`
  margin: 0 10px;
`;

const LanguagesSelector: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select onChange={(e) => {
      changeLanguage(e.target.value);
    }} value={i18n.language}>
      <option value="en">{t(LanguageKey.EN)}</option>
      <option value="fr">{t(LanguageKey.FR)}</option>
    </Select>
  );
};

export default LanguagesSelector;
