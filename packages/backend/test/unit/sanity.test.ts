import { describe, it, expect } from 'vitest';

describe('Sanity Check', () => {
  it('should add two numbers correctly', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle strings', () => {
    const greeting = 'Hello, KNB!';
    expect(greeting).toContain('KNB');
  });
});
