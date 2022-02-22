const STORIES_TEMPLATE = `import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import {{name}} from './{{name}}';
import type { {{name}}Props } from './{{name}}.type';

export default {
  component: {{name}},
  decorators: [],
  parameters: {},
  title: '{{name}}',
} as Meta<{{name}}Props>;

const Template: Story<{{name}}Props> = (args) => <{{name}} {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
  percy: { skip: true },
};
Basic.storyName = '{{name}}';
`;

export default STORIES_TEMPLATE;
