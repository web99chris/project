// 2002-tw-alliance
import React from 'react';
import styled from 'styled-components';

import { qs, copyDataToClipboard } from '@vmo/share/utils';

const ButtonCopy = styled.button<{ count: number }>`
  display: block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 6px;
  padding: 6px 16px;
  border: 2px solid rgb(90, 90, 90);
  transition: all 0.2s ease 0s;
  margin: 0 auto;
  outline: none;
  margin-bottom: 10px;
  :active {
    ::before {
      content: 'Copy Complete';
    }
  }
  ::before {
    content: 'Copy ${props => props.count} Rows';
  }
`;

export const CopyButton = ({ data }) => {
  const queryString = qs<{
    copy: string;
    count: string;
  }>();

  const filterDataCopy = () => {
    const count = Number(queryString.count);
    return count > 0 && count < data.length
      ? data.filter((_, index) => index < count)
      : data;
  };

  if (queryString.copy) {
    const counterForCopy = filterDataCopy();
    if (counterForCopy.length) {
      return (
        <ButtonCopy
          count={counterForCopy.length}
          onClick={() => copyDataToClipboard(counterForCopy)}
        />
      );
    }
  }

  return null;
};
