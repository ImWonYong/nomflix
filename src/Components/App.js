import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
// import Header from "Components/Header"; // 이런 형태는 기본적으로 해당 폴더로 가서 index 파일을 보게 해줌

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}

export default App;
