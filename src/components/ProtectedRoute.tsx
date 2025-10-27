import { Navigate } from "react-router-dom";
import { isAuthenticated } from "@/lib/auth";

type Props = { children: JSX.Element };

const ProtectedRoute = ({ children }: Props) => {
  // Use in-memory auth flag (no persistent storage) per user request
  if (!isAuthenticated()) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
