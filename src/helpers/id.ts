import { customAlphabet } from 'nanoid';

export const DEFAULT_ID_LENGTH = 8;

const nanoid = customAlphabet(
  '1234567890abcdefghijklmnopqrstuvwxyz',
  DEFAULT_ID_LENGTH,
);

export function generateId(size?: number) {
  return nanoid(size);
}
