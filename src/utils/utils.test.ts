import { describe, expect, test } from '@jest/globals';
import rupiahFormat from './string';

describe('String utils test', () => {
  test('Convert rupiah format', () => {
    expect(rupiahFormat(15500000)).toBe('Rp 15.500.000')
  });
});
