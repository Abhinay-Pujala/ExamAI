import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
  windowMs: 1000 * 60 * 15,
  max: 5,
  message: {
    success: false,
    message: "Too many authentication attempts. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const generateLimiter = rateLimit({
  windowMs: 1000 * 60,
  max: 5,
  message: {
    success: false,
    message: "Generation limit exceeded. Please wait a minute and try again",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const apiLimiter = rateLimit({
  windowMs: 1000 * 60 * 15,
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
