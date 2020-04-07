import React from 'react';
import { action } from '@storybook/addon-actions';

import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuDivider from './MenuDivider';

export default {
	component: Menu,
	title: 'Menu',
};

export const basic = () =>
	<Menu>
		<MenuItem iconName='FiShare2' label='Share' />
		<MenuItem iconName='FiEdit2' label='Edit' />
		<MenuItem iconName='FiTrash2' label='Delete' />
	</Menu>
;

export const groups = () =>
	<Menu>
		<MenuItem iconName='FiPlay' label='Present' />
		<MenuItem iconName='FiSmartphone' label='Open Mentimote' />
		<MenuItem iconName='FiDownload' label='Export results' />
		<MenuDivider />
		<MenuItem iconName='FiUsers' label='Share with organization' />
		<MenuItem iconName='FiShare' label='Share voting link' />
		<MenuDivider />
		<MenuItem iconName='FiEdit2' label='Rename' />
		<MenuItem iconName='FiFolder' label='Move to folder' />
		<MenuItem iconName='FiCopy' label='Duplicate' />
		<MenuItem iconName='FiTrash2' label='Delete' />
	</Menu>
;