import React from 'react';
import { action } from '@storybook/addon-actions';

import Icon from '../Icon/Icon';
import MenuTrigger from './MenuTrigger';

export default {
	component: MenuTrigger,
	title: 'MenuTrigger',
};

export const icon = () =>
	<Icon iconName='FiMoreHorizontal' />
;