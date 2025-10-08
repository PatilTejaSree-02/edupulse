import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./lib/auth";
import Layout from "./components/Layout.jsx";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Courses from "./pages/Courses.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import SignIn from "./pages/SignIn.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Quiz from "./pages/Quiz.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/courses" element={<Layout><Courses /></Layout>} />
          <Route path="/quizzes" element={<Layout><Quizzes /></Layout>} />
          <Route path="/quiz" element={<Layout><RequireAuth><Quiz /></RequireAuth></Layout>} />
          <Route path="/signin" element={<Layout><SignIn /></Layout>} />
          <Route path="/get-started" element={<Layout><GetStarted /></Layout>} />
          <Route path="/dashboard" element={<Layout><RequireAuth><Dashboard /></RequireAuth></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
