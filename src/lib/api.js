export const API_BASE = 'http://localhost:8081';

export async function api(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  const ct = res.headers.get('content-type') || '';
  return ct.includes('application/json') ? res.json() : res.text();
}

export async function login(username, password) {
  const body = new URLSearchParams({ username, password });
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!res.ok) throw new Error('Login failed');
  return true;
}

export const CoursesAPI = {
  list: () => api('/api/v1/courses'),
  create: (course) => api('/api/v1/courses', { method: 'POST', body: JSON.stringify(course) }),
};

export const EnrollmentAPI = {
  enroll: (userId, courseId) => api('/api/v1/enrollments', { method: 'POST', body: JSON.stringify({ userId, courseId }) }),
  byUser: (userId) => api(`/api/v1/enrollments/by-user/${userId}`),
};

export const QuizAPI = {
  byCourse: (courseId) => api(`/api/v1/quizzes/by-course/${courseId}`),
  submitAttempt: (userId, quizId, score) => api('/api/v1/quizzes/attempts', { method: 'POST', body: JSON.stringify({ userId, quizId, score }) }),
};

export const ProgressAPI = {
  get: (userId, courseId) => api(`/api/v1/progress?userId=${userId}&courseId=${courseId}`),
  upsert: (payload) => api('/api/v1/progress', { method: 'POST', body: JSON.stringify(payload) }),
};


