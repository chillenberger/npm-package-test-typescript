import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { within, userEvent, waitFor } from '@storybook/testing-library';

import Auth_Button from './Auth_Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Auth_Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    myaction: { action: true },
  },
  parameters: {
    notes: 'some notes about auth button.',
  },
} as ComponentMeta<typeof Auth_Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Auth_Button> = (args) => (
  <Auth_Button {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Button',
};
Primary.parameters = {
  notes:
    'testing ault notes more data and more data and more data adn more data. hhhhhhhhgjhgkgkhgjgkjgkjgkgkjh',
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/MSg1gCImx5qR9r8EHuFHtE/Untitled?node-id=0%3A1',
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Other Button',
};

export const Demo = Template.bind({});
Demo.args = {
  title: 'Demo',
};
Demo.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await waitFor(() => expect(args.myaction).toHaveBeenCalled());
};
