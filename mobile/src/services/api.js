import axios from "axios";

// Run adb reverse tcp:3333 tcp:3333 to continue using localhost as api
// address
const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;
