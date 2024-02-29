import { Analytics } from '@vercel/analytics/react';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HackathonThankYouPage from "./components/thankyou";
import Error from "./error";
import "./index.css";


import ReactGA from "react-ga";
ReactGA.initialize("K6F7N5MR4K");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics />
    <BrowserRouter>
      {/* <Routes>
        <Route
          path="*"
          element={
            <div className="bg-error">
              <Navbar /> <Error />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="bg">
              <Navbar />
              <Hero />
            </div>
          }
        />
        <Route
          path="/events"
          element={
            <div className="events-bg">
              <Navbar />
              <Events />
            </div>
          }
        />
        <Route
          path="/guidelines"
          element={
            <div className="guidelines-bg">
              <Navbar />
              <Guildelines />
            </div>
          }
        />
        <Route
          path="/set2"
          element={
            <div className="set2-bg">
              <Navbar />
              <Set2 />
            </div>
          }
        />
        <Route
          path="/set1"
          element={
            <div className="set1-bg">
              <Navbar />
              <Set1 />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Navbar />
              <About />
            </div>
          }
        />
        <Route
          path="/judges"
          element={
            <div>
              <Navbar />
              <Judges />
            </div>
          }
        />
        <Route path="/qr/verify/:id" element={<Verify />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
      {/* Make a  */}
      <Routes>
        <Route
          path="*"
          element={
            <div className="bg-error">
              <Error />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="bg">
              <HackathonThankYouPage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
