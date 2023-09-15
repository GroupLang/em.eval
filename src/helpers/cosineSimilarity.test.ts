import { OpenAI } from 'openai';
import { getCosineSimilarities } from './cosineSimilarity';

const resultMock = [
  [1, 2, 3],
  [1, 2, 3],
  [7, 8, 9],
];

let currentMockIndex = 0;

jest.mock('openai', () => {
  return {
    OpenAI: jest.fn().mockImplementation(() => {
      return {
        embeddings: {
          create: jest.fn().mockResolvedValue({ data: [{ embedding: resultMock[currentMockIndex++] }] }),
        },
      };
    }),
  };
});

describe('getCosineSimilarities', () => {
  it('should calculate cosine similarities correctly', async () => {
    const evaluationData = {
      question: 'What is the capital of France?',
      originalAnswer: 'Paris',
      emsAnswers: {
        'em1': 'Paris',
        'em2': 'London',
      },
    };

    const result = await getCosineSimilarities(evaluationData);


    // Check if the result object has the correct keys
    expect(result).toHaveProperty('em1');
    expect(result).toHaveProperty('em2');

    // Check if the similarity and points are numbers
    expect(typeof result.em1.similarity).toBe('number');
    expect(typeof result.em1.points).toBe('number');
    expect(typeof result.em2.similarity).toBe('number');
    expect(typeof result.em2.points).toBe('number');

    // Check if the points are between 0 and 100
    expect(result.em1.points).toBeGreaterThanOrEqual(0);
    expect(result.em1.points).toBeLessThanOrEqual(100);
    expect(result.em2.points).toBeGreaterThanOrEqual(0);
    expect(result.em2.points).toBeLessThanOrEqual(100);

    // Check if the similarity is between -1 and 1
    expect(result.em1.similarity).toBeGreaterThanOrEqual(-1);
    expect(result.em1.similarity).toBeLessThanOrEqual(1);
    expect(result.em2.similarity).toBeGreaterThanOrEqual(-1);
    expect(result.em2.similarity).toBeLessThanOrEqual(1);
  });
});