import api from './config';

// Serviços de Pessoa
export const pessoaService = {
    getAll: () => api.get('/pessoas'),
    getById: (id) => api.get(`/pessoas/${id}`),
    create: (data) => api.post('/pessoas', data),
    update: (id, data) => api.put(`/pessoas/${id}`, data),
    delete: (id) => api.delete(`/pessoas/completo/${id}`),
};

// Serviços de Hóspede
export const hospedeService = {
    getAll: () => api.get('/hospedes'),
    getById: (id) => api.get(`/hospedes/${id}`),
    create: (idPessoa) => api.post('/hospedes', { idPessoa }),
    update: (id, data) => api.put(`/hospedes/${id}`, data),
    delete: (id) => api.delete(`/hospedes/${id}`),
};

// Serviços de Funcionário
export const funcionarioService = {
    getAll: () => api.get('/funcionarios'),
    getById: (id) => api.get(`/funcionarios/${id}`),
    create: (idPessoa) => api.post('/funcionarios', { idPessoa }),
    update: (id, data) => api.put(`/funcionarios/${id}`, data),
    delete: (id) => api.delete(`/funcionarios/${id}`),
};

// Serviços de Quarto
export const quartoService = {
    getAll: () => api.get('/quartos'),
    getById: (id) => api.get(`/quartos/${id}`),
    create: (data) => api.post('/quartos', data),
    update: (id, data) => api.put(`/quartos/${id}`, data),
    delete: (id) => api.delete(`/quartos/${id}`),
};

// Serviços de Reserva
export const reservaService = {
    getAll: () => api.get('/reservas'),
    getById: (id) => api.get(`/reservas/${id}`),
    create: (data) => api.post('/reservas', data),
    update: (id, data) => api.put(`/reservas/${id}`, data),
    delete: (id) => api.delete(`/reservas/${id}`),
};

// Serviços de Pagamento
export const pagamentoService = {
    getAll: () => api.get('/pagamentos'),
    getById: (id) => api.get(`/pagamentos/${id}`),
    create: (data) => api.post('/pagamentos', data),
    update: (id, data) => api.put(`/pagamentos/${id}`, data),
    delete: (id) => api.delete(`/pagamentos/${id}`),
};

// Serviços de Manutenção
export const manutencaoService = {
    getAll: () => api.get('/manutencoes'),
    getById: (id) => api.get(`/manutencoes/${id}`),
    create: (data) => api.post('/manutencoes', data),
    update: (id, data) => api.put(`/manutencoes/${id}`, data),
    delete: (id) => api.delete(`/manutencoes/${id}`),
};

// Serviço de Autenticação
export const authService = {
    login: (credentials) => api.post('/auth/login', credentials),
    logout: () => {
        localStorage.removeItem('token');
    },
}; 
