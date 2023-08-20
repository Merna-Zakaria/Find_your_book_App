import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Login from "../pages/login";
import Profile from "../pages/profile";
import NoMatch from "../sharedComponents/noMatch";
import BooksList from "../sharedComponents/booksList";
import BookDetails from "../pages/bookDetails";
import ProtectedRoute from "./protectedRoutes";
import AuthLayout from "../layout/authLayout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} exact />
          <Route path="/" element={<Home />}>
            <Route index element={<BooksList />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/:bookId"
              element={<BookDetails />}
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );

  //another way: using useRoutes() hooks t handle routes
  // const element = useRoutes([
  //   { path: "/login", element: <Login /> },
  //   {
  //     path: "/",
  //     element: <Home />,
  //     children: [
  //       { index: true, element: <BooksList /> },
  //       { path: ":bookId", element: <BookDetails /> },
  //       { path: "/favorite", element: <Favorite /> },
  //     ],
  //   },
  //   { path: "*", element: <NoMatch /> },
  // ]);

  // return element
};

export default AppRoutes;
