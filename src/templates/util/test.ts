const TEST_TEMPLATE = `/* eslint-env jest */
import {{name}} from './{{name}}';

describe('{{name}}', () => {
  test('should return correct value', () => {
    expect({{name}}()).toMatch(null);
  });
});
`;

export default TEST_TEMPLATE;
