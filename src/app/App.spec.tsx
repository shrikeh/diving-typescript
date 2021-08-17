import { describe, test, expect } from '@jest/globals';
import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<App />', () => {
  test(
    'should display a blank login form, with remember me checked by default',
    async () => {
      const app = shallow(<App />);
      expect(app.text()).toContain('src/App.tsx');
    },
  );
});
