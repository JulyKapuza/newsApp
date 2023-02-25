import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";

export default function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
      <footer>2023</footer>
    </>
  );
}