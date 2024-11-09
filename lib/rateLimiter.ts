// lib/rateLimiter.ts
type RateLimitStore = {
  [key: string]: { requests: number; lastRequest: number };
};

const RATE_LIMIT = 100; // Max requests per timeframe
const TIME_FRAME = 60 * 1000; // Timeframe in ms (1 minute)

const requestStore: RateLimitStore = {};

export const rateLimiter = (ip: string): boolean => {
  const currentTime = Date.now();

  if (!requestStore[ip]) {
    requestStore[ip] = { requests: 1, lastRequest: currentTime };
    return true; // Allow the first request
  } else {
    const { requests, lastRequest } = requestStore[ip];

    // If requests are within the allowed timeframe
    if (currentTime - lastRequest < TIME_FRAME) {
      if (requests >= RATE_LIMIT) {
        return false; // Exceeded the limit
      }
      // Increment the request count within the timeframe
      requestStore[ip].requests += 1;
    } else {
      // Reset the count if the timeframe has passed
      requestStore[ip] = { requests: 1, lastRequest: currentTime };
    }
  }

  return true;
};
