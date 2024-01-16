import { Dragon } from "./interfaces";

const API_URL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

const DragonService = {
  getAllDragons: async (): Promise<Dragon[]> => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch dragons");
      }

      const data = await response.json();
      return data as Dragon[];
    } catch (error) {
      console.error("Error fetching dragons:", error);
      throw error;
    }
  },
};

export default DragonService;
