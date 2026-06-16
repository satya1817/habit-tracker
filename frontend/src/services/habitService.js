import axios from "axios";

const API_URL = "http://localhost:5000/api/habits";

const getToken = () => {
  return localStorage.getItem("token");
};

export const createHabit = async (habitData) => {
  const response = await axios.post(
    API_URL,
    habitData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};

export const getHabits = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
export const deleteHabit = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};
  return response.data;
};