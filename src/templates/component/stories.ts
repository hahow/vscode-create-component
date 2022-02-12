const STORIES_TEMPLATE = `import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {{name}} from './{{name}}';

export default {
  component: {{name}},
  decorators: [],
  parameters: {},
  title: '{{name}}',
} as ComponentMeta<typeof {{name}}>;

const Template: ComponentStory<typeof {{name}}> = (args) => <{{name}} {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
  percy: { skip: true },
};
Basic.storyName = 'Give me a new name';
`;

export default STORIES_TEMPLATE;
