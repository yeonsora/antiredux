import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {

  constructor(props){
    super(props);

    // 반드시 constructor안에 있어야 한다. bind하면 안되나?
    // this._changeMessage = this._changeMessage.bind(this)
    this._deleteNotification = this._deleteNotification.bind(this);
    this._seeNotification = this._seeNotification.bind(this);
    this.state = {
      notifications: {
        "1": {
          id : 1,
          text : "Something",
          seen : false
        },
        "2": {
          id : 2,
          text : "Something else",
          seen : false
        },
        "3": {
          id : 3,
          text : "Something else but different",
          seen : false
        }
      },
      // state로 함수를 내려준다.
      deleteNotification : this._deleteNotification,
      seeNotification : this._seeNotification
    }
  }

  _deleteNotification = (id) => {
    this.setState(currentState => {
      // javascript delete연산.
      // object에서 객체의 속성을 제거한다. notifications에서 "id"값으로 object 속성을 제거.
      const newState = delete currentState.notifications[id];
      return newState; // return true..를 반환함
    })
  }

  _seeNotification = (id) => {
    this.setState(currentState => {
      return {
        ...currentState,
        notifications: {
          ...currentState.notifications,
          [id]: {
            ...currentState.notifications[id],
            seen: !currentState.notifications[id].seen
          }
        }
      }
    })
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
