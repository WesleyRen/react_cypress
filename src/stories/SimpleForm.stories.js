import React from 'react';

import { SimpleForm } from '../pages/SimpleForm';

export default {
  title: 'Example/SimpleForm',
  component: SimpleForm,
};

const Template = (args) => <SimpleForm {...args} />;

export const Name = Template.bind({});
Name.args = {
  label: 'Name',
  actionText: 'Save Name'
};

export const NickName = Template.bind({});
NickName.args = {
  label: 'Nick Name',
  actionText: 'Save Nick Name'
};