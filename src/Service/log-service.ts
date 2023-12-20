import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

interface CursorLog {   
  group: string;
  message: string;
}

export const postLogService = (log: CursorLog) => {
  const apiUrl = `${API_BASE_URL}/logs`;
  return axios.post(apiUrl, log);
};

export const getLogService = async (group: string, date: string, from?: string, to?: string) => {
  const apiUrl = `${API_BASE_URL}/logs/${group}?date=${date}&from=${from || ''}&to=${to || ''}`;
  const response = await axios.get(apiUrl);
  return response.data; // Assuming the response contains relevant data
};