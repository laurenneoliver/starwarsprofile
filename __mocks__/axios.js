const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: {} })), // Default mock response
};

module.exports = mockAxios;
