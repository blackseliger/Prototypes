import Character from '../app';

describe('check character.prototype.damage', () => {
  test('the value of health should decrease', () => {
    const expected = 76;
    const test1 = new Character('gleb', 'sword');
    test1.damage(40);
    const received = test1.health;
    expect(received).toEqual(expected);
  });
  test('the value of health should be 0 ', () => {
    const expected = 0;
    const test1 = new Character('gleb', 'sword');
    test1.damage(9999);
    const received = test1.health;
    expect(received).toEqual(expected);
  });
});
