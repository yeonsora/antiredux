import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {

  constructor(props){
    super(props);

    // 반드시 constructor안에 있어야 한다. bind하면 안되나?
    this._changeMessage = this._changeMessage.bind(this)

    this.state = {
      message : "Hello",
      changeMessage : this._changeMessage // 메서드를 state에 넣어서 전달한다.
    }
  }

  _changeMessage = () => {
    if(this.state.message === "Hello"){
      this.setState({
        message: "Bye bye"
      });
    }else {
      this.setState({
        message : "Hello"
      });
    }
  }

  //state를 변경할 수 있는 함수를 만들어서 전달하쟈 -> notification에서 부르기위해!! 체크를 누르면 메세지가 바뀌기 위해
  //반드시 constructor()에 state를 변경하는 함수를 넣어야한다. 안그러면 동작을 하지 않는다.
  //그 이유는
  //class가 생성 되었을 때, 스토어가 value를 얻기 때문? ==> 찾아봐야할듯
  //따라서, provider에 포함시키고 싶은 함수는 constructor에 있어야 한다.


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
