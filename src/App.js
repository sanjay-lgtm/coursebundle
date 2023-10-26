import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './component/Layout/Header/Header';
import Courses from './component/Courses/Courses';
import Footer from './component/Layout/Footer/Footer';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import ForgetPassword from './component/Auth/ForgetPassword';
import ResetPassword from './component/Auth/ResetPassword';
import Contact from './component/Contact/Contact';
import Request from './component/Request/Request';
import About from './component/About/About';
import Subscribe from './component/Payment/Subscribe';
import PaymentFail from './component/Payment/PaymentFail';
import PaymentSuccess from './component/Payment/PaymentSuccess';
import NotFound from './component/Layout/NotFound/NotFound';
import CoursePage from './component/CoursePage/CoursePage';
import Profile from './component/Profile/Profile';
import ChangePassword from './component/Profile/ChangePassword';
import UpdateProfile from './component/Profile/UpdateProfile';
import Dashboard from './component/Admin/Dashboard/Dashboard';
import CreateCourse from './component/Admin/CreateCourse/CreateCourse';
import AdminCourses from './component/Admin/AdminCourses/AdminCourses';
import Users from './component/Admin/Users/Users';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';
function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const { isAuthenticated, user, error, message } = useSelector(
    state => state.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.error(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <Router>
        <Header isAuthenticated={isAuthenticated} user={user} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/courses" exact element={<Courses />} />
          <Route path="/courses/:id" exact element={<CoursePage />} />
          <Route
            path="/profile"
            exact
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            exact
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <Login />
              </ProtectedRoute>
            }
          />
          <Route path="/register" exact element={<Register />} />

          <Route path="/changepassword" exact element={<ChangePassword />} />
          <Route path="/updateprofile" exact element={<UpdateProfile />} />
          <Route path="/forgetpassword" exact element={<ForgetPassword />} />
          <Route
            path="/resetpassword/:token"
            exact
            element={<ResetPassword />}
          />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/request" exact element={<Request />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/subscribe" exact element={<Subscribe />} />
          <Route path="/paymentfail" exact element={<PaymentFail />} />
          <Route path="/paymentSuccess" exact element={<PaymentSuccess />} />
          <Route path="*" exact element={<NotFound />} />

          {/* {admin routes} */}

          <Route path="/admin/dashboard" exact element={<Dashboard />} />
          <Route path="/admin/createcourse" exact element={<CreateCourse />} />
          <Route path="/admin/courses" exact element={<AdminCourses />} />
          <Route path="/admin/users" exact element={<Users />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </ChakraProvider>
  );
}

export default App;
