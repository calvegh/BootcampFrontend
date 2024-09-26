import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HomePage } from "./page/HomePage.tsx";
import { PostPage } from "./page/PostPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      {/* <HomePage /> */}
      <PostPage />
    </>
  </StrictMode>
);
