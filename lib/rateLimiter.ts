// lib/rateLimiter.ts
type RateLimitStore = {
  [key: string]: { requests: number; lastRequest: number };
};

const RATE_LIMIT = 100;
const TIME_FRAME = 60 * 1000;

const requestStore: RateLimitStore = {};

export const rateLimiter = (ip: string): boolean => {
  const currentTime = Date.now();

  if (!requestStore[ip]) {
    requestStore[ip] = { requests: 1, lastRequest: currentTime };
    return true;
  } else {
    const { requests, lastRequest } = requestStore[ip];

    if (currentTime - lastRequest < TIME_FRAME) {
      if (requests >= RATE_LIMIT) {
        return false;
      }
      requestStore[ip].requests += 1;
    } else {
      requestStore[ip] = { requests: 1, lastRequest: currentTime };
    }
  }

  return true;
};
