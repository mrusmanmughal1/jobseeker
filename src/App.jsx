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
import JobsBasket from "./Feature/Candidate/JobsBasket";
import "./styles/styles.css";
import Dashboard from "./pages/Dashboard";
import ApplicationHistory from "./Feature/Employer/ApplicationHistory";
import Manageprofile from "./Feature/Accounts/Manageprofile";
import Candidate from "./Feature/Candidate/Candidate";
import NotFound from "./pages/NotFound";
import NewPost from "./Feature/Employer/NewJobPost";
import CandidateDetails from "./Feature/Candidate/CandidateDetails";
import PrivacyLopicy from "./pages/PrivacyLopicy";
import AdminPrivate from "./Feature/Admin/AdminPrivate";
import AdminProtected from "./Feature/Authentication/AdminProtected";
import Admin from "./Feature/Admin/Admin";
import AdminCandidateList from "./Feature/Admin/AdminCandidateList";
import AdminJobsLIst from "./Feature/Admin/AdminJobsLIst";
import AdminEmployeerList from "./Feature/Admin/AdminEmployeerList";
import JobsBySector from "./UI/JobsBySector";
import AdminSettings from "./Feature/Admin/AdminSettings";
import AdminViewJobs from "./UI/AdminViewJobs";
import EmployerViewProfile from "./UI/EmployerViewProfile";
import ForGetPassword from "./UI/ForGetPassword";
import CandidateViewProfile from "./UI/CandidateViewprofile";
import JobDetails from "./UI/JobDetails";
import PendingJobs from "./Feature/Admin/PendingJobs";
import CandidateAppliedJob from "./Feature/Candidate/CandidateAppliedJob";
import AdminRejectedList from "./Feature/Admin/AdminRejectedList";
import ChatMain from "./Feature/Chat/ChatMain";
import { useUserinfo } from "./Context/AuthContext";
import EmpInterviewList from "./Feature/Employer/EmpInterviewList";
import UpdateJob from "./Feature/Employer/UpdateJob";
import EmployeersProtecetedRoute from "./UI/Layouts/EmployeersProtecetedRoute";

const App = () => {
  const { user_type } = useUserinfo();
  return (
    <BrowserRouter>
      <Header />
      {user_type && <ChatMain />}

      <Routes>
        {/* admin  */}
        <Route
          path="admin"
          element={
            <AdminProtected>
              <AdminPrivate />
            </AdminProtected>
          }
        >
          <Route path="dashboard" index element={<Admin />} />
          <Route path="candidates" element={<AdminCandidateList />} />
          <Route path="/admin/Jobs" element={<AdminJobsLIst />} />
          <Route path="/admin/rejected" element={<AdminRejectedList />} />

          <Route path="/admin/employeers" element={<AdminEmployeerList />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/view-jobs" element={<AdminViewJobs />} />
          <Route path="/admin/pending-jobs" element={<PendingJobs />} />

          <Route
            path="/admin/view-employeer-profile"
            element={<EmployerViewProfile />}
          />
          <Route
            path="/admin/view-candidate-profile"
            element={<CandidateViewProfile />}
          />
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
          <Route path="scheduled-interviews" element={<EmpInterviewList />} />
          <Route path="update-job/:id" element={<UpdateJob />} />

          <Route
            path="candidate-applied-job"
            element={<CandidateAppliedJob />}
          />

          <Route path="profile" element={<Manageprofile />} />
          <Route path="new-post" element={<NewPost />} />
        </Route>
        {/* Public Routes */}
        <Route
          path="candidates"
          element={
            <EmployeersProtecetedRoute>
              <Candidate />
            </EmployeersProtecetedRoute>
          }
        />
        <Route
          path="Candidate-Details/:id"
          element={
            <EmployeersProtecetedRoute>
              <CandidateDetails />
            </EmployeersProtecetedRoute>
          }
        />

        <Route path="/" index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/forget-password" element={<ForGetPassword />} />

        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register" index element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/job-Details/:id" element={<JobDetails />} />
        <Route path="/privacy-policy" element={<PrivacyLopicy />} />
        <Route path="/jobs-by-sector" element={<JobsBySector />} />
        {/* olol */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
