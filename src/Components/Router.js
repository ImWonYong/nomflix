import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Header from "Components/Header";

export default () => (
  <Router>
    {/* Router는, 모든 Route들에게 props 줌. */}
    <>
      <Header />
      {/* //withRouter 컴포넌트를 가지고 꾸며줬기 때문에 우리의 라우터의 위치를 알 수 있음 */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        {/* //Header 같은 작업 해주지 않아도 리엑트 Router가 모든 정보 Route들에게 줌 */}
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
