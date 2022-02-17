const HOC_TEMPLATE = `import { FC, memo } from 'react';

import type { PropsAreEqual } from './{{name}}.type';

const {{name}} = <P extends {}>(
  Component: FC<P>,
  propsAreEqual?: PropsAreEqual<P> | false,
  componentName = Component.displayName ?? Component.name
): FC<P> => {
  const Component{{capitalizedName}}: FC<P> = (props) => {
    return <Component {...props} />;
  };

  Component{{capitalizedName}}.displayName = \`{{name}}(\${componentName})\`;

  const WrappedComponent = propsAreEqual === false ? Component{{capitalizedName}} : memo(Component{{capitalizedName}}, propsAreEqual);

  // copyStaticProperties(Component,  WrappedComponent);

  return WrappedComponent as typeof Component{{capitalizedName}};
};

export default {{name}};
`;

export default HOC_TEMPLATE;
