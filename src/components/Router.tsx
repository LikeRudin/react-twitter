import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@/routers/Home";
import Auth from "@/routers/Auth";

const AppRouter = ({isLoggedIn = false}) => {
    
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
          <Routes>
            {isLoggedIn ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route path="/" element={<Auth />} />
            )}
          </Routes>
        </BrowserRouter>
      );
}

export default AppRouter;