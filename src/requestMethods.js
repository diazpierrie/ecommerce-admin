import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjdlZDllOGZkM2IwY2Y0M2JmY2YyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODM5OTYxNiwiZXhwIjoxNjY4NjU4ODE2fQ.uL7yheSGBBz_Mp6IMzs3GONJJ2xNccjMZYJ2yFOGRYE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
