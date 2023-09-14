jest.mock('neo4j-driver', () => ({
  driver: jest.fn().mockReturnValue({
    // Mock implementation of the driver
  }),
  auth: {
    basic: jest.fn(),
  },
}));

process.env.WHITELISTED_GITHUB = 'lumpenspace';

import { signIn } from './[...nextauth]';
import { jwt } from './[...nextauth]';

describe('signIn', () => {
  it('should return an error URL if the user is not allowed to sign in', async () => {
    const user = { id: 'not-allowed' };
    const result = await signIn({ user });

    expect(result).toBe('/auth/error?error=You are not allowed to sign in. Ask the administrator to add you to the whitelist.');
  });
});

describe('jwt', () => {
  it('should add apiKey to the token if user has apiKey', async () => {
    const user = { apiKey: 'testKey', id: 'lumpenspace'  };
    const token = {};
    const result = await jwt({ token, user });

    expect(result).toEqual({ apiKey: 'testKey' });
  });

  it('should return the token unchanged if user does not have apiKey', async () => {
    const user = { apiKey: undefined, token: 'testKey', id: 'lumpenspace' };
    const token = {};
    const result = await jwt({ token, user });

    expect(result).toEqual({});
  });

  // Add more tests here...
});