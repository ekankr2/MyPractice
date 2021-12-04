import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {increment, RootState} from "./index";
import {Dispatch} from "redux";

let 박스 :JSX.IntrinsicElements['div'] = <div>hihiihi</div>

function App() {

  const 꺼내온거 = useSelector( (state :RootState) => state)
  const dispatch :Dispatch = useDispatch()
  let [user, setUser] = useState<string | number>('kim')

  return (
    <div className="App">
      {꺼내온거.counter1.count}
      <button onClick={()=>{dispatch(increment())}}>증가</button>
      {/*<Profile name="철수" age="20"></Profile>*/}
    </div>
  );
}

function Profile(props :{name:string, age:string}) :JSX.Element{
  return (
      <div>{props.name}입니다</div>
  )
}

export default App;
