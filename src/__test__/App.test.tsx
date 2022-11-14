import { getFullYear } from '../helper/dateTimeHelper';
describe('Current Year', () => {
  it('is 2022?', () => {
    const currentYear = getFullYear();
    expect(currentYear).toEqual(2022);
  });
});
