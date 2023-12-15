
import { getHeroHealthStatus } from '../get_hero_status.js'

test.each([
    [{name: 'Маг', health: 100}, 'healthy'],
    [{name: 'Воин', health: 51}, 'healthy'],
    [{name: 'Лучник', health: 50}, 'wounded'],
    [{name: 'Лучник', health: 15}, 'wounded'],
    [{name: 'Лучник', health: 14}, 'critical'],
    [{name: 'Лучник', health: 0}, undefined],
    [{name: 'Лучник', health: -5}, undefined]
])('test getHeroHealthStatus with character %s', (character, expected) => {
    const result = getHeroHealthStatus(character);
    expect(result).toBe(expected);
});
