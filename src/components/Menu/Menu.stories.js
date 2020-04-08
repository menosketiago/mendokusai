import React from 'react';
import { action } from '@storybook/addon-actions';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Separator from '../Separator/Separator';

export default {
	component: Menu,
	title: 'Menu',
};

export const basic = () =>
	<Menu openState='true'>
		<MenuItem iconName='FiShare2' label='Share' />
		<MenuItem iconName='FiEdit2' label='Edit' />
		<MenuItem iconName='FiTrash2' label='Delete' />
	</Menu>
;

export const groups = () =>
	<Menu openState='true'>
		<MenuItem iconName='FiPlay' label='Present' />
		<MenuItem iconName='FiSmartphone' label='Open Mentimote' />
		<MenuItem iconName='FiDownload' label='Export results' />
		<Separator />
		<MenuItem iconName='FiUsers' label='Share with organization' />
		<MenuItem iconName='FiShare' label='Share voting link' />
		<Separator />
		<MenuItem iconName='FiEdit2' label='Rename' />
		<MenuItem iconName='FiFolder' label='Move to folder' />
		<MenuItem iconName='FiCopy' label='Duplicate' />
		<MenuItem iconName='FiTrash2' label='Delete' />
	</Menu>
;