import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Auth_Button from './Auth_Button';

describe('Auth_Button', () => {
  test('renders the Auth_Button component', () => {
    render(
      <div data-testid="button">
        <Auth_Button title="test button" action={() => void(0)} />
      </div>,
    );
  });

  test('verify button title prop', () => {
    const { getByTestId } = render(
      <div data-testid="button">
        <Auth_Button title="test button" action={() => void(0)} />
      </div>,
    );
    expect(getByTestId('button')).toHaveTextContent('test button');
  });
});
