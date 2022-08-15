import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Auth_Button from './Auth_Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    component: Auth_Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Auth_Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Auth_Button> = (args) => <Auth_Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    title: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: 'Other Button',
};

