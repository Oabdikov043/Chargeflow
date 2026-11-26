
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import React from "react";

function Page({ title }) {
  return (
    <main style={{ padding: "40px" }}>
      <h1>{title}</h1>
      <p>ChargeFlow – {title} page</p>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Page title="Dashboard" />} />
        <Route path="/chargers" element={<Page title="Chargers" />} />
        <Route path="/requests" element={<Page title="Requests" />} />
        <Route path="/sessions" element={<Page title="Sessions" />} />
        <Route path="/simulation" element={<Page title="Simulation" />} />
        <Route path="/reports" element={<Page title="Reports" />} />
      </Routes>
    </>
  );
}
