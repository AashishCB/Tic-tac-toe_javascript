var count = 0;
var restart = document.querySelector("#b");
var squares = document.querySelectorAll('td');
function clearBoard(){
    count = 0;
    for (var i = 0; i< squares.length; i++){
        squares[i].textContent = '';
    }
}

restart.addEventListener('click', clearBoard);

function checkWinner(){
    if (squares[0].textContent == squares[1].textContent && squares[1].textContent == squares[2].textContent && squares[2].textContent != ''){
        return 1;
    }
    else if (squares[3].textContent == squares[4].textContent && squares[4].textContent == squares[5].textContent && squares[5].textContent != ''){
        return 1;
    }
    else if (squares[6].textContent == squares[7].textContent && squares[7].textContent == squares[8].textContent && squares[8].textContent != ''){
        return 1;
    }
    else if (squares[0].textContent == squares[3].textContent && squares[3].textContent == squares[6].textContent && squares[6].textContent != ''){
        return 1;
    }
    else if (squares[1].textContent == squares[4].textContent && squares[4].textContent == squares[7].textContent && squares[7].textContent != ''){
        return 1;
    }
    else if (squares[2].textContent == squares[5].textContent && squares[5].textContent == squares[8].textContent && squares[8].textContent != ''){
        return 1;
    }
    else if (squares[0].textContent == squares[4].textContent && squares[4].textContent == squares[8].textContent && squares[8].textContent != ''){
        return 1;
    }
    else if (squares[2].textContent == squares[4].textContent && squares[4].textContent == squares[6].textContent && squares[6].textContent != ''){
        return 1;
    }else{
        return 0;
    }
}

function changeMarker(){
    if(this.textContent === ''){
        count += 1;
        if (count%2===0){
            this.textContent = 'X';
            if (count>4){
                if (checkWinner()){
                    setTimeout(function(){
                        confirm('X-Wins!');
                        setTimeout(function(){clearBoard();},10);
                    },10);
                }
            }
        }else{
            this.textContent = 'O';
            if (count>4){
                if (checkWinner()){
                    setTimeout(function(){
                        confirm('O-Wins!');
                        setTimeout(function(){clearBoard();},10);
                    },10);
                }
            }
        }
        if(count === 9){
            if (!checkWinner()){
                setTimeout(function(){
                    confirm('Draw!');
                    setTimeout(function(){clearBoard();},10);
                },10);
            }
        }
    }
}
for (var i = 0; i<squares.length;i++){
    squares[i].addEventListener('click', changeMarker);
}