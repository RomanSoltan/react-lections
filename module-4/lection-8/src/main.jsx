import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./components/App";
import { AuthProvider } from "./providers/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./providers/ThemeProvider/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
    <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
  </>
);
