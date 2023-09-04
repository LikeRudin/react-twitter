import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "@/routers/Home";
import Auth from "@/routers/Auth";

const AppRouter = () => {
    const isLoggedIn = false;
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
          <Routes>
            {isLoggedIn ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route path="/" element={<Auth />} />
            )}
          </Routes>
        </Router>
      );
}

export default AppRouter;