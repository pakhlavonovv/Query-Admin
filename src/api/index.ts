import axios from "axios";

const https = axios.create({
   baseURL: "https://texnoark.ilyosbekdev.uz",
});

https.interceptors.request.use((config) => {
   const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJpYXQiOjE3Mjk0MTY0NzMsImV4cCI6MTcyOTUwMjg3M30.B8NdjsIlHCNfsBnBn9819rpOTRco2RXVgDkMYxYQuMo"
   if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
   }
   return config;
});

export default https;
