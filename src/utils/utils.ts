export const testUsername = (username: string) => /^[^<>\%\\;]{0,49}$/.test(username);
export const testEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
export const testPassword = (password: string) => /^[^<>\%\\;]{8,14}$/.test(password);
