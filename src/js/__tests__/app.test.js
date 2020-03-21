import Character from '../app';

test('levelUp при health = 0', () => {
  const hero = new Character('Peter', 0);

  const received = () => hero.levelUp();
  expect(received).toThrow();
});

test('levelUp', () => {
  const hero = new Character('Peter', 10);

  const expected = {
    name: 'Peter',
    level: 2,
    health: 100,
    defence: 12,
    attack: 48,
  };

  hero.levelUp();
  expect(hero).toEqual(expected);
});
