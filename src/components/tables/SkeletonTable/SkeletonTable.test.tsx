import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SkeletonTable from './SkeletonTable';

describe('SkeletonTable', () => {
  test('renders the SkeletonTable component', () => {
    render(
      <div data-testid="table">
        <SkeletonTable />
      </div>,
    );
  });
});
