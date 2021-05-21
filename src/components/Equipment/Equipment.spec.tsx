import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { Equipment } from '~/components/Equipment/index';

describe('<Equipment />', () => {
  test('It renders a div', async () => {
    const equipment = render(<Equipment />);
    console.log(equipment.findByTestId('ohai'));
  });
});
