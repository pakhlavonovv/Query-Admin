import axios from "axios";

const https = axios.create({
   baseURL: "https://texnoark.ilyosbekdev.uz",
});

https.interceptors.request.use((config) => {
   const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJpYXQiOjE3MjkwMTk0NzAsImV4cCI6MTcyOTEwNTg3MH0.B69zKi_5B1MTLEozVGr51xMhAE7Q_bm0WzFSv60GQ6I"
   if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
   }
   return config;
});

export default https;
