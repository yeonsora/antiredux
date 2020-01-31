import React from "react";
const Store = React.createContext(null); // default context
export default Store;


// redux : store, provider가 존재
// context API : store, provider가 존재. provider의 children에게 데이터를 준다. application > application container