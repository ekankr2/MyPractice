/* eslint-disable */
import React, { useState } from "react";
import './App.css';

function App() {

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '재미있는 이야기']);
    let [따봉, 따봉변경] = useState([0,0,0]);
    let[modal, modal변경] = useState(false);
    let [누른제목, 누른제목변경] = useState(0);

    let [입력값, 입력값변경] = useState('');

    let posts = '강남 고기 맛집'

    function 제목바꾸기() {
        var newArray = [...글제목]
        newArray[0] = '여자 코트 추천'
        글제목변경(newArray)
    }

  return (
    <div className="App">
      <div className="black-nav">
          <div>개발 Blog</div>
      </div>

        {
            글제목.map(function(a, i){
                return (
                    <div className="list" key={i}>
                    <h3 onClick={()=>{누른제목변경(i)}}> { a }<span onClick=
                    { ()=>{ 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h3>
                    <p>2월 17일 발행</p>
                    <hr/>
                </div>
                )
            })
        }


        <div className="publish">
            <input onChange={(e)=>{입력값변경(e.target.value)}}/>
            <button onClick={ ()=>{
                var arrayCopy = [...글제목]
                arrayCopy.unshift(입력값);
                글제목변경(arrayCopy)
            } }>저장</button>
        </div>

        <button onClick={ ()=>{modal변경(!modal)} }>버튼</button>

        {
            modal === true
            ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
                : null
        }

        <Profile></Profile>

    </div>
  );
}

function Modal(props) {
    return(
        <div className="modal">
            <h2>{ props.글제목[props.누른제목] }</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

class Profile extends React.Component {
    constructor(){
        super();
        this.state = { name : 'Kim' }
    }

    changeName(){
        this.setState({name:'Park'})
    }
    render(){
        return (
            <div>
            <h3>프로필입니다.</h3>
            <p>저는 { this.state.name } 입니다.</p>
                <button onClick={ this.changeName.bind(this)}>버튼</button>
            </div>
        )
    }
}

export default App;
