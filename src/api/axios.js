import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_MAIN_SERVER,
  withCredentials: true,
});

export const SignAPI = {
  kakaoSign: (code) =>
    client.post(
      `/auth/login/kakao?code=${code}&redirect-uri=${process.env.REACT_APP_REDIRECT}kakao`
    ),
  deleteInfo: (code) =>
    client.post(
      `/auth/unregister/kakao?code=${code}&redirect-uri=${process.env.REACT_APP_REDIRECT}kakaodel`
    ),
  myinfo: () => client.get("/users/me"),
  updateInfo: (formData) =>
    client.put("/users/me", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  logout: () => client.post("/auth/logout"),
  auth: () => client.get("/auth/check"),
};
export const RoomAPI = {
  postRoom: (roomData) => client.post("/rooms", roomData),
};
