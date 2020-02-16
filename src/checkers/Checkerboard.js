import React from 'react';
import './Checkerboard.css';
import './Checkerboard_JS.js';

let checkerPositionStartPosition = [
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0],
    [0,2,0,2,0,2,0,2],

];
function getChecker(white,checkerPositionX,checkerPositionY) {
    let checker = '';
        if(checkerPositionStartPosition[checkerPositionX][checkerPositionY] !== 0){
            let style = {height: '100%',width:'100%',display: 'inline-block'};
            if(checkerPositionStartPosition[checkerPositionX][checkerPositionY] === 1){
                style['background'] = '#000';
            } else if(checkerPositionStartPosition[checkerPositionX][checkerPositionY] === 2){
                style['background'] = '#fff';
            }
            white =!white;
            checker = (<div className="wrapper"
                            data-checker_board_x={checkerPositionX}
                            data-checker_board_y={checkerPositionY}>
                <div className="item1 checker_here" style={style}>
            </div></div>);
        }


    return checker;
}
function getCheckerCells(even,row) {
    let whiteCell = even;
    let checkerCells =[];
    for (let i = 0; i < 8; i++) {
        let style = {display: 'inline-block'};
        whiteCell =!whiteCell;
        if(whiteCell){
            style['background'] = '#aaaaaa';

        }
        checkerCells.push(<div key={i} style={style}>{getChecker(whiteCell,row, i)}</div>);

    }
    return checkerCells;
}

class  GetCheckerRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        if(e.target.firstChild!==null){
            e.target.firstChild.classList.toggle('selected');
            if(e.target.firstChild.classList.contains('checker_here')!==null){
            console.log('Да здсь есть шашка осталось добавить возможность походить');
            }
        } else {
            console.log('А здсь нет шашки. Но даже если б была ты бы не смог походить');

        }
        return '';
    }
    render() {
        let even = false;
        let checkerRows = [];
        for (let i = 0; i < 8; i++) {
            even = !even;
            //let background = {display: 'grid'};
            checkerRows.push(<div className="row" onClick={this.handleClick} key={i}>
                <div className="row_div">
                    {getCheckerCells(even, i)}
                </div>
            </div>);

        }
        return checkerRows;
    }
}
function Checkerboard() {

    return (
        <div className="Checkerboard">
            <div className="Checkerboard_view">
                <GetCheckerRows />


            </div>
        </div>
    );                // ещё какие-то выражения

}



export default Checkerboard;