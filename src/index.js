import './fonts/NeueHaasDisplay/NeueHaasDisplayBold.ttf';
import './fonts/NeueHaasDisplay/NeueHaasDisplayLight.ttf';
import './fonts/NeueHaasDisplay/NeueHaasDisplayMediu.ttf';
import './fonts/Thunder/Thunder-BoldLC.ttf';



import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);


reportWebVitals();
