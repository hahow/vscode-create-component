const COMPONENT_TEMPLATE = `import { FC } from 'react';

import { Styled{{name}} } from './{{name}}.style';
import { {{name}}Props } from './{{name}}.type';

const {{name}}: FC<{{name}}Props> = (props) => {
  return <Styled{{name}} />;
};

export default {{name}};
`;

export default COMPONENT_TEMPLATE;
