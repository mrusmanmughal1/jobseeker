import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./UI/Header";
import LoginPage from "./pages/LoginPage";
import Footer from "./UI/Footer";
import ProtectedRoutes from "./UI/ProtectedRoutes";
import "./styles/styles.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Register from "./pages/Register";
import MyAccount from "./Feature/Accounts/MyAccount";
import JobsBasket from "./Feature/Accounts/JobsBasket";
import "./styles/styles.css";
import Dashboard from "./pages/Dashboard";
import ApplicationHistory from "./Feature/Accounts/ApplicationHistory";
import Manageprofile from "./Feature/Accounts/Manageprofile";
import { useUserinfo } from "./Context/Userinfo";
import Candidate from "./Feature/Candidate/Candidate";
import NotFound from "./pages/NotFound";
import NewPost from "./UI/NewPost";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Protected Routes  Nested Routing  */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        >
          <Route index element={<MyAccount />} />
          <Route path="jobs-basket" element={<JobsBasket />} />
          <Route path="myaccount" element={<MyAccount />} />
          <Route path="applied" element={<ApplicationHistory />} />
          <Route path="profile" element={<Manageprofile />} />
          <Route path="new-post" element={<NewPost />} />
        </Route>
        {/* Public Routes */}
        <Route path="/candidate" element={<Candidate />} />

        <Route path="/" index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register" index element={<Register />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
