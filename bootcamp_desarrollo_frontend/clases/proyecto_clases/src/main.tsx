import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HomePage } from "./page/HomePage.tsx";
import { PostPage } from "./page/PostPage.tsx";
import { Provider } from "react-redux";
import { store } from "./states/store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsersPage } from "./page/UsersPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <HomePage /> */}
          <Route path="users" element={<UsersPage />} />
        </Routes>
        {/* <PostPage /> */}
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
