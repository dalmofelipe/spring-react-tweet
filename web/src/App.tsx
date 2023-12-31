import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Feed from "./pages/Feed";
import Contato from "./pages/Contato";
import Page404 from "./pages/Page404";
import Layout from "./layout/default";
import MessagesProvider from "./context/MessagesProvider";


export default function App() {
  return (
    <MessagesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="feed" element={<Feed />} />
            <Route path="contato" element={<Contato />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MessagesProvider>
  );
}
