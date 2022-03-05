const STORIES_TEMPLATE = `import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

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
  // TODO: 如果希望 Percy screenshot，請取消註解；否則請移除程式碼
  // percy: { skip: false },
};
Basic.storyName = '{{name}}';
`;

export default STORIES_TEMPLATE;
