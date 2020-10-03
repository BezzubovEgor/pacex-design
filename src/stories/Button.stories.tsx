import React, { PropsWithChildren } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../components/Button';
import { ButtonVariants } from '../components/Button/Button';
import { centered } from './decorators/centered';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [centered],
} as Meta;

const Template: Story<PropsWithChildren<ButtonProps>> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary Button',
    variant: ButtonVariants.primary,
};

export const Default = Template.bind({});
Default.args = {
    children: 'Default Button',
    variant: ButtonVariants.default,
};

export const Link = Template.bind({});
Link.args = {
    children: 'Link Button',
    variant: ButtonVariants.link,
};
