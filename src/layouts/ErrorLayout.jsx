import { Outlet } from "react-router-dom";

export default function ErrorLayout() {
  return (
    <div
      id="app-container"
      className="bg-gray-100 min-h-screen flex items-center justify-center"
    >
      <Outlet />
    </div>
  );
}
