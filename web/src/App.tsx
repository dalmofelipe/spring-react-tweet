import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PostContainer from "./pages/PostContainer";
import Contato from "./pages/Contato";
import Page404 from "./pages/Page404";
import Layout from "./layout/default";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<PostContainer />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
