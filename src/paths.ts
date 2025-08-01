// ABOUTME: Centralized route definitions for type-safe navigation
// ABOUTME: Single source of truth for all application routes

export const PATHS = {
  HOME: '/',
  
  // Auth routes
  AUTH: {
    SIGN_IN: '/auth/sign-in',
    SIGN_UP: '/auth/sign-up',
    SIGN_OUT: '/auth/sign-out',
    VERIFY_EMAIL: '/auth/verify-email',
    RESET_PASSWORD: '/auth/reset-password',
  },
  
  // Content routes
  ARTICLES: {
    LIST: '/articles',
    DETAIL: (slug: string) => `/articles/${slug}`,
  },
  
  // User routes
  PROFILE: '/profile',
  DASHBOARD: '/dashboard',
  
  // Admin routes
  ADMIN: {
    DASHBOARD: '/admin',
    ARTICLES: '/admin/articles',
    USERS: '/admin/users',
    NEWSLETTER: '/admin/newsletter',
    EVENTS: '/admin/events',
  },
} as const;