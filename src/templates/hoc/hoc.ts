const HOC_TEMPLATE = `import type { ComponentType } from 'react';

import type { {{capitalizedName}}Props } from './{{name}}.type';

const {{name}} = <T extends {{capitalizedName}}Props = {{capitalizedName}}Props>(WrappedComponent: ComponentType<T>) => {
  // Try to create a nice displayName for React Dev Tools.
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const Component{{capitalizedName}} = (props: Omit<T, keyof {{capitalizedName}}Props>) => {
    // Fetch the props you want to inject. This could be done with context instead.
    // TODO: const {{trimmedLowerFirstName}}Props = use{{trimmedName}}();

    return (
      <WrappedComponent
        // TODO: {...{{trimmedLowerFirstName}}Props}
        {...(props as T)}
      />
    );
  };

  Component{{capitalizedName}}.displayName = \`{{name}}(\${displayName})\`;

  return Component{{capitalizedName}};
};

export default {{name}};
`;

export default HOC_TEMPLATE;
