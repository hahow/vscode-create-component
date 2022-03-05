const TEST_TEMPLATE = `/* eslint-env jest */
import {{name}} from './{{name}}';

describe('{{name}}', () => {
  test('should return correct value', () => {
    expect({{name}}('foobar')).toMatch('FOOBAR');
  });
});
`;

export default TEST_TEMPLATE;
