import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null, //기본적으로 show를 찾을 때 ID가지고 감 그 ID를 가지고 그걸로 검색하고 결과 보여줄 것
    error: null,
    loading: true
  };

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
