// Imports
import { describe, test, expect } from 'vitest';
import { getPokemonImageUrl, getPokemonListItems } from '../utils';


describe('test utils helper functions', () => {
  describe('test getPokemonImageUrl', () => {
    test('returns string', () => {
    const url = getPokemonImageUrl(1);
    expect(typeof url).toBe('string');
    })
  })
    describe('test getPokemonListItem', () => {
    test('fetches pokemon list and get an array back', async () => {
      const data = await getPokemonListItems(0, 10);
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
    });
  })
})
