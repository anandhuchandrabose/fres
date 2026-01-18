import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        privacypolicy: resolve(__dirname, "privacypolicy.html"),
        blog: resolve(__dirname, "blogs.html"),
        accountDeletion: resolve(__dirname, "accountDeletion.html"),
        careers: resolve(__dirname, "careers.html"),
        support: resolve(__dirname, "support.html"),
        sustainability: resolve(__dirname, "sustainability.html"),
        deliveryPartner: resolve(__dirname, "delivery-partner.html"),
        vendorOnboarding: resolve(__dirname, "vendor-onboarding.html"),
      },
    },
    assetsInclude: [
      "**/*.jpeg",
      "**/*.jpg",
      "**/*.png",
      "**/*.svg",
      "**/*.gif",
    ],
    copyPublicDir: true,
  },
});
