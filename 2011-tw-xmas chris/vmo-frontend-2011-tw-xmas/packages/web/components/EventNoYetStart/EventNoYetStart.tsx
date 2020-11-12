import React, { useContext } from 'react';
import styled from 'styled-components';

import { TranslationContext } from '@vmo/web/context/translationContext';

const EventNoYetStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  max-width: 800px;
  height: 15vw;
  text-align: center;
`;

const EventNoYetStartComponent = () => {
  const translation = useContext(TranslationContext);
  return (
    <EventNoYetStart>
      {translation.get('COUNTDOWN_HAS_NOT_BEGUN')}
    </EventNoYetStart>
  );
};

export default EventNoYetStartComponent;
