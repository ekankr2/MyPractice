
var pants = 0;
var socks = 100;
해체분석기`바지${pants} 양말${socks}`

function 해체분석기(문자들, ...변수들){
    if(변수들[0] === 0){
        return console.log(`바지다팔렸어요`)
    }
    console.log(`${문자들[1]}${변수들[0]}${문자들[0]}${변수들[1]}`)
}

