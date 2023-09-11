import { RouterProvider } from "react-router-dom";
import { createGlobalStyle, styled } from "styled-components";
import router from "./Router";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import {auth} from "./firebase.config.ts";

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

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;


const App = () => {
  const [isLoading, setIsLoading]= useState(true);

  const init = async() => {
    await auth.authStateReady()
    setIsLoading(false);
  }
  useEffect(()=>{
    init();
  });

  return (
  <Wrapper>
    <GlobalStyles/>
    {isLoading? <LoadingScreen/> :<RouterProvider router={router}/> }
  </Wrapper>
  )
}

export default App;