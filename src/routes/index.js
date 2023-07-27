import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Favorite from "../pages/favourite";
import NoMatch from "../sharedComponents/noMatch";
import BooksList from "../sharedComponents/booksList";
import BookDetails from "../pages/bookDetails";
import ProtectedRoute from "./protectedRoutes"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/" element={<Home />}>
          <Route index element={<BooksList />} />
          <Route path=":bookId" element={<BookDetails />} />
          <Route path="/favorite" element={<Favorite />} />

          {/* <Route path="/:bookId" element={<ProtectedRoute><BookDetails/></ProtectedRoute>} />
          <Route path="/favorite" element={<ProtectedRoute><Favorite/></ProtectedRoute>} /> */}

        </Route>
        <Route path="*" element={<NoMatch />} />
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
