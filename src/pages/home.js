import React from "react";
import Header from "../sharedComponents/header";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { searchResult: state.searchResult };
};

export default connect(mapStateToProps)(Home);
