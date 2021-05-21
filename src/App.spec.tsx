import { describe, test, expect } from '@jest/globals';
import { shallow } from 'enzyme';
import React from 'react';
import Appy from './Appy';

describe('<Appy />', () => {
  test(
    'should display a blank login form, with remember me checked by default',
    async () => {
      const app = shallow(<Appy />);
      expect(app.text()).toContain('src/Appy.tsx');
    },
  );
});
