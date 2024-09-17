import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // host: "142.93.201.200",
    host: "192.168.10.195",
    port: 3001,
  },
}); 

// 142.93.201.200 