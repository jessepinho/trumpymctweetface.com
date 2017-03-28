import { intensity } from './intensity';

describe('intensity', () => {
  it('returns a 0 for a tweet with no capital letters or exclamation marks', () => {
    expect(intensity('make america great again i guess')).toBe(0);
  });

  it('returns a 1 for a tweet with all capital letters and exclamation marks', () => {
    expect(intensity('MAKEAMERICAGREATAGAINOMG!')).toBe(1);
  });

  it('returns 0.5 for a tweet that is half capital letters', () => {
    expect(intensity('omgOMG')).toBe(0.5);
  });

  it('returns 0.5 for a tweet that is half exclamation marks', () => {
    expect(intensity('omg!!!')).toBe(0.5);
  });

  it('returns 0.5 for a tweet with half capital letters and half other punctuation', () => {
    expect(intensity('OMG???')).toBe(0.5);
  });

  it('ignores spaces', () => {
    expect(intensity('MAKE AMERICA GREAT AGAIN OMG!')).toBe(1);
  });
});
