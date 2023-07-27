import React from "react";
import Header from "../sharedComponents/header";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";

class Home extends React.Component {
  // renderBooks=()=>{
  //     if(this.props.searchResult.searchResult){
  //         console.log("render list",this.props.searchResult.searchResult)
  //         return this.props.searchResult.searchResult.map( bookData => {
  //             console.log(bookData)
  //             return(
  //                 <div key={bookData.id} className='mb-5'>
  //                     <ShowBook bookData={bookData}/>
  //                     </div>
  //                 )
  //             })
  //     }
  // }

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
