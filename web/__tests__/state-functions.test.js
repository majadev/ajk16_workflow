import App from '../src/App';
import React from 'react';
import { mount } from 'enzyme';

test('Search test', () => {
    const search = { value: 'Milk' };
    const wrapper = mount(
      <App value={search} />
    );
    const p = wrapper.find('.search');
    expect(p.value()).toBe('Milk');
  });