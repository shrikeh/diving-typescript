import React from 'react';
import { render } from '@testing-library/react';
import { Equipment } from './Equipment';

describe('<Equipment />', () => {
  test('It renders a div', async () => {
    const equipment = render(<Equipment />);
    console.log(equipment.findByTestId('ohai'));
  });
});
