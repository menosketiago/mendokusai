import React from 'react';
import { action } from '@storybook/addon-actions';
import Menu from './Menu';

export default {
  component: Menu,
  title: 'Menu',
};

export const basic = () => <Menu>Hello Menu</Menu>;