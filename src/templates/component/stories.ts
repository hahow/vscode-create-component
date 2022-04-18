const STORIES_TEMPLATE = `// TODO: 如果沒用到 action，可以直接移除程式碼
// import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import {{name}} from './{{name}}';
import type { {{name}}Props } from './{{name}}.type';

export default {
  component: {{name}},
  // TODO: 如果沒用到 decorators，可以直接移除程式碼
  // decorators: [],
  // TODO: 如果沒用到 parameters，可以直接移除程式碼
  // parameters: {},
  title: '{{name}}',
} as Meta<{{name}}Props>;

const Template: Story<{{name}}Props> = (args) => <{{name}} {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  // TODO: 如果沒用到 figma url，可以直接移除程式碼
  // design: {
  //   type: 'figma',
  //   url: '',
  // },
  // TODO: 預設 screenshot all stories，如果不想 screenshot，請取消註解；否則請移除程式碼
  // percy: { skip: true },
};
Basic.storyName = '{{name}}';
`;

export default STORIES_TEMPLATE;
