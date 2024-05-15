import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./UI/Header";
import LoginPage from "./pages/LoginPage";
import Footer from "./UI/Footer";
import ProtectedRoutes from "./Feature/Authentication/ProtectedRoutes";
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
import Candidate from "./Feature/Candidate/Candidate";
import NotFound from "./pages/NotFound";
import NewPost from "./UI/NewPost";
import Jobtitle from "./UI/Jobtitle";
import CandidateDetails from "./Feature/Candidate/CandidateDetails";
import PrivacyLopicy from "./pages/PrivacyLopicy";
import AdminPrivate from "./Feature/Admin/AdminPrivate";
import AdminProtected from "./Feature/Authentication/AdminProtected";
import Admin from "./Feature/Admin/Admin";
import AdminCandidateList from "./Feature/Admin/AdminCandidateList";
import AdminJobsLIst from "./Feature/Admin/AdminJobsLIst";
import AdminEmployeerList from "./Feature/Admin/AdminEmployeerList";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="admin" element={<AdminPrivate />}>
          {/* <Route path="/admin" element={<AdminPrivate />} /> */}
          <Route path="dashboard" element={<Admin />} />
          <Route path="candidates" element={<AdminCandidateList />} />

          <Route path="/admin/Jobs" element={<AdminJobsLIst />} />

          <Route path="/admin/employeers" element={<AdminEmployeerList />} />
        </Route>

        {/* Protected   Nested Routing  for Candidate   */}
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

        {/* Admin routes   */}
        {/* <Route
          path="admin"
          element={
            <AdminProtected>
              <AdminDashboard />
            </AdminProtected>
          }
        >
          <Route index element={<Admin />} />

          <Route path="ok" exact element={<AdminPrivate />} />
        </Route> */}

        {/* Public Routes */}
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/Details" element={<CandidateDetails />} />

        <Route path="/" index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register" index element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/job-Details" element={<Jobtitle />} />
        <Route path="/privacy-policy" element={<PrivacyLopicy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
