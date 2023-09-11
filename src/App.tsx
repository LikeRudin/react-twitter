import { RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import router from "./Router";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const App = () => {
  return (<>
    <GlobalStyles/>
    <RouterProvider router={router}/>
    </>)
}

export default App;