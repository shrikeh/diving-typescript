import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<Appy />', () => {
  test(
    'should display a blank login form, with remember me checked by default',
    async () => {
      const app = shallow(<App />);
      expect(app.text()).toContain('src/App.tsx');
    },
  );
});
