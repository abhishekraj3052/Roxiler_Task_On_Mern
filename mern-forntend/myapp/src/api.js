import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const initializeDatabase = async () => axios.get(`${API_URL}/initialize`);
export const getTransactions = async (params) => axios.get(`${API_URL}/transactions`, { params });
export const getStatistics = async (month) => axios.get(`${API_URL}/statistics`, { params: { month } });
export const getBarChart = async (month) => axios.get(`${API_URL}/bar-chart`, { params: { month } });
export const getPieChart = async (month) => axios.get(`${API_URL}/pie-chart`, { params: { month } });
