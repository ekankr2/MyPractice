/* eslint-disable */
import React, { useState } from "react";
import './App.css';

function App() {

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '재미있는 이야기']);
    let [따봉, 따봉변경] = useState([0,0,0]);

    let[modal, modal변경] = useState(false);


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
        <button onClick={ 제목바꾸기 }>
            버튼</button>
        <div className="list">
            <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3> { 글제목[1] }</h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3 onClick={ ()=>{ modal변경(true)}}> { 글제목[2] }</h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>

        {

            글제목.map(function(a){
                return (
                    <div className="list">
                    <h3> { a }<span onClick={ ()=>{ 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h3>
                    <p>2월 17일 발행</p>
                    <hr/>
                </div>
                )
            })

        }



        <button onClick={ ()=>{modal변경(!modal)} }>버튼</button>

        {
            modal === true
            ? <Modal 글제목={글제목}></Modal>
                : null
        }

    </div>
  );
}

function Modal(props) {
    return(
        <div className="modal">
            <h2>제목{ props.글제목[0] }</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
