const COMPONENT_TEMPLATE = `import type { FC } from 'react';

import { Styled{{name}} } from './{{name}}.style';
import type { {{name}}Props } from './{{name}}.type';

const {{name}}: FC<{{name}}Props> = (props) => {
  return <Styled{{name}} />;
};

export default {{name}};
`;

export default COMPONENT_TEMPLATE;
