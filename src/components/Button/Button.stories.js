import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
	component: Button,
	title: 'Button',
};

export const icon = () => (
	<Button iconOnly iconName='FiMoreHorizontal'></Button>
);