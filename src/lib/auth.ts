let authenticated = false;

export function loginDemo() {
  authenticated = true;
}

export function logoutDemo() {
  authenticated = false;
}

export function isAuthenticated() {
  return authenticated;
}

// Expose for debugging in development only
if (typeof window !== 'undefined') {
  (window as any).__demoAuth = { isAuthenticated };
}
