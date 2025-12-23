import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/banking"
});

export const getAccounts = (bankCode, token) =>
  api.get(`/${bankCode}/accounts`, {
    headers: { Authorization: `Bearer ${token}` }
  });
