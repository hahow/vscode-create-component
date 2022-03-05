const UTIL_TEMPLATE = `import type { {{capitalizedName}}Type } from './{{name}}.type';

const {{name}}: {{capitalizedName}}Type = (args) => {
  return args;
};

export default {{name}};
`;

export default UTIL_TEMPLATE;
