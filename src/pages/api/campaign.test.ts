import { createMocks } from 'node-mocks-http';
import { describe, expect, test } from '@jest/globals';
import handler from './campaign';

describe('Get campaign data', () => {
  test('Should return response code success', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });
    await handler(req, res);
    expect(res.statusCode).toBe(200);
  });
});
