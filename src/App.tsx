import { RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import router from "./Router";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";

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
  const [isLoading, setIsLoading]= useState(true);

  const init = async() => {
    setTimeout(()=> {
      setIsLoading(false);
    }, 2000)
  }
  useEffect(()=>{
    init();
  });

  return (<>
    <GlobalStyles/>
    {isLoading? <LoadingScreen/> :<RouterProvider router={router}/> }
    </>)
}

export default App;