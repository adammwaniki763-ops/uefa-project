const API_BASE_URL = '/api';

const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    ...options
  };

  try {
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Authentication
export const authAPI = {
  login: (email, password) => 
    apiCall('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    }),
  
  signup: (username, email, password) => 
    apiCall('/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password })
    }),
  
  logout: () => 
    apiCall('/logout', { method: 'DELETE' }),
  
  checkSession: () => 
    apiCall('/check_session')
};

// Tournaments
export const tournamentAPI = {
  getAll: () => 
    apiCall('/tournaments'),
  
  getById: (id) => 
    apiCall(`/tournaments/${id}`),
  
  create: (data) => 
    apiCall('/tournaments', {
      method: 'POST',
      body: JSON.stringify(data)
    }),
  
  update: (id, data) => 
    apiCall(`/tournaments/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    }),
  
  delete: (id) => 
    apiCall(`/tournaments/${id}`, { method: 'DELETE' })
};

// Clubs
export const clubAPI = {
  getAll: () => 
    apiCall('/clubs'),
  
  getById: (id) => 
    apiCall(`/clubs/${id}`),
  
  create: (data) => 
    apiCall('/clubs', {
      method: 'POST',
      body: JSON.stringify(data)
    }),
  
  update: (id, data) => 
    apiCall(`/clubs/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    }),
  
  delete: (id) => 
    apiCall(`/clubs/${id}`, { method: 'DELETE' })
};

// Groups
export const groupAPI = {
  getAll: () => 
    apiCall('/groups'),
  
  getById: (id) => 
    apiCall(`/groups/${id}`),
  
  create: (data) => 
    apiCall('/groups', {
      method: 'POST',
      body: JSON.stringify(data)
    }),
  
  update: (id, data) => 
    apiCall(`/groups/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    }),
  
  delete: (id) => 
    apiCall(`/groups/${id}`, { method: 'DELETE' })
};

// Matches
export const matchAPI = {
  getAll: () => 
    apiCall('/matches'),
  
  getById: (id) => 
    apiCall(`/matches/${id}`),
  
  create: (data) => 
    apiCall('/matches', {
      method: 'POST',
      body: JSON.stringify(data)
    }),
  
  update: (id, data) => 
    apiCall(`/matches/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    }),
  
  delete: (id) => 
    apiCall(`/matches/${id}`, { method: 'DELETE' })
};

// Standings
export const standingsAPI = {
  getAll: () => 
    apiCall('/standings'),
  
  getByGroup: (groupId) => 
    apiCall(`/standings/${groupId}`)
};
