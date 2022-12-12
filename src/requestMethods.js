import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjdlZDllOGZkM2IwY2Y0M2JmY2YyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDg3NzMwOSwiZXhwIjoxNjcxMTM2NTA5fQ.hSfo8Ri2chGnEBKLviz-LY0Mbt-mY3yGMCSr2-cK7Bg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
