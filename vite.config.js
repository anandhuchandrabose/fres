import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        work: resolve(__dirname, "work.html"),
        project: resolve(__dirname, "project.html"),
        contact: resolve(__dirname, "contact.html"),
        privacypolicy: resolve(__dirname, "privacypolicy.html"),
        blog: resolve(__dirname, "blogs.html"),
        accountDeletion: resolve(__dirname, "accountDeletion.html"),
        careers: resolve(__dirname, "careers.html"),
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
