import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {

  state = {
    message : "Hello"
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        message : "Bye"
      })
    }, 2000)
    // Redux에서는 store를 바꾸기가 고통스러운데, Context API에서는 깔끔하게 바꿀 수 있다.
  }

  render() {
    return (
      // Store의 provider설정. <Apppresenter/>가 store에 접근할 수 있도록 한다.
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
