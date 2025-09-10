/**
 * @file Environment configuration
 * @description This file contains environment variables that are used
 * across the application.
 */

export const environment = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
} as const;
