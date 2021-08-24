import { testing } from './index'
describe('messing around', () => {
  test('does this load', async() => {
    const encoded = await testing();
    expect(encoded).toBe('foo');
  })
});
