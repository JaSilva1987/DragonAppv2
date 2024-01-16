// src/services/DragonService.ts
import axios from "axios";
import { Dragon } from "../pages/Home/interfaces";

const API_URL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

const getAllDragons = async (): Promise<Dragon[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getDragonById = async (id: string): Promise<Dragon> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const deleteDragon = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

const removeDragon = async (id: string): Promise<Dragon[]> => {
  await axios.delete(`${API_URL}/${id}`);
  return getAllDragons();
};

const createDragon = async (
  dragonData: Omit<Dragon, "id">
): Promise<Dragon> => {
  const response = await axios.post(API_URL, dragonData);
  return response.data;
};

const updateDragon = async (id: string, dragon: Dragon): Promise<Dragon> => {
  const response = await axios.put(`${API_URL}/${id}`, dragon);
  return response.data;
};

export default {
  getAllDragons,
  getDragonById,
  deleteDragon,
  removeDragon,
  createDragon,
  updateDragon,
};
