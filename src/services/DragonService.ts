// src/services/DragonService.ts
import axios from "axios";
import { Dragon } from "../pages/Home/interfaces";

const API_URL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

const DragonService = {
  getAllDragons: async (): Promise<Dragon[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getDragonById: async (dragonId: string): Promise<Dragon> => {
    const response = await axios.get(`${API_URL}/${dragonId}`);
    return response.data;
  },
};

export default DragonService;
