import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Ye line Tanstack/Nitro ko batati hai ki hume cPanel wala Node server chahiye
process.env.NITRO_PRESET = "node-server";

export default defineConfig({
  // Ye sabse zaroori line hai: Ye Lovable plugin ko force karegi server build banane ke liye (Skip nahi karegi)
  nitro: true,
  tanstackStart: {
    server: { 
      preset: "node-server",
      entry: "server",
    },
  },
});