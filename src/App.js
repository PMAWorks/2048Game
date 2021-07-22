import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var [Blocks, setBlocks] = useState([{
    gamepoint: 6,
    blockNum: 0,
    Col: 2,
  },
  {
    gamepoint: null,
    blockNum: 1,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 2,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 3,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 4,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 5,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 6,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 7,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 8,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 9,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 10,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 11,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 12,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 13,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 14,
    Col: null,
  },
  {
    gamepoint: null,
    blockNum: 15,
    Col: null,
  }])

  var [FirstX, setFirstX] = useState(0)
  var [FirstY, setFirstY] = useState(0)
  var [Nap, setNap] = useState(0)
  var [Update, setUpdate] = useState(1)
  var [GameScore, setGameScore] = useState(0)
  var [EndGame, setEndGame] = useState(false)

  if(EndGame){
    setBlocks([{
      gamepoint: 6,
      blockNum: 0,
      Col: 2,
    },
    {
      gamepoint: null,
      blockNum: 1,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 2,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 3,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 4,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 32,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 6,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 7,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 8,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 9,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 10,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 11,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 12,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 13,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 14,
      Col: null,
    },
    {
      gamepoint: null,
      blockNum: 15,
      Col: null,
    }])
    setGameScore(0)
    setEndGame(false)
  }

  var start = (e) => {
    console.log(e)
    e.persist()
    if(e.touches){
      setFirstX(e.touches[0].clientX)
    setFirstY(e.touches[0].clientY)
    }
    else{
      setFirstX(e.nativeEvent.clientX)
      setFirstY(e.nativeEvent.clientY)
    }
  }

  var move = (e) => {
    e.persist()
    if (e.touches){
      var x2 = e.touches[0].clientX
    var y2 = e.touches[0].clientY
    }
    else{
      var x2 = e.nativeEvent.clientX
    var y2 = e.nativeEvent.clientY
    }
    var DiffX = FirstX - x2
    var DiffY = FirstY - y2
    if (DiffX ** 2 > DiffY ** 2) {
      if (DiffX > 0) {
        setNap('left')
      }
      else {
        setNap('right')
      }
    }
    else {
      if (DiffY > 0) {
        setNap('top')
      }
      else {
        setNap('bottom')
      }
    }
  }

  var end = () => {
    console.log(Nap)
    switch (Nap) {
      case 'right': {
        var Rows = [[{}, {}, {}, {}],
        [{}, {}, {}, {}],
        [{}, {}, {}, {}],
        [{}, {}, {}, {}],]
        for (let i = 0; i < 16; i++) {
          switch (Blocks[i].gamepoint) {
            case 1: {
              Rows[0][0] = Blocks[i]
              break
            }
            case 2: {
              Rows[0][1] = Blocks[i]
              break
            }
            case 3: {
              Rows[0][2] = Blocks[i]
              break
            }
            case 4: {
              Rows[0][3] = Blocks[i]
              break
            }
            case 5: {
              Rows[1][0] = Blocks[i]
              break
            }
            case 6: {
              Rows[1][1] = Blocks[i]
              break
            }
            case 7: {
              Rows[1][2] = Blocks[i]
              break
            }
            case 8: {
              Rows[1][3] = Blocks[i]
              break
            }
            case 9: {
              Rows[2][0] = Blocks[i]
              break
            }
            case 10: {
              Rows[2][1] = Blocks[i]
              break
            }
            case 11: {
              Rows[2][2] = Blocks[i]
              break
            }
            case 12: {
              Rows[2][3] = Blocks[i]
              break
            }
            case 13: {
              Rows[3][0] = Blocks[i]
              break
            }
            case 14: {
              Rows[3][1] = Blocks[i]
              break
            }
            case 15: {
              Rows[3][2] = Blocks[i]
              break
            }
            case 16: {
              Rows[3][3] = Blocks[i]
              break
            }
            default: {
              break
            }
          }
        }

        //Сложение ближайших элементов
        for (let j = 0; j < 4; j++) {
          for (let i = 3; i > 0; i--) {
            if (Rows[j][i].Col) {
              for(let r = 1; r<4; r++){
                if(i-r >=0){
                  if(Rows[j][i-r].Col){
                    if (Rows[j][i].Col == Rows[j][i-r].Col) {
                      Rows[j][i-r].Col = null
                      Rows[j][i-r].gamepoint = null
                      Rows[j][i].Col = Rows[j][i].Col * 2
                      setGameScore(GameScore+Rows[j][i].Col/2)
                    }
                    break
                  }
                }
              }
            }
          }
        }

        var Rows2 = [[{},{},{},{}],
        [{},{},{},{}],
        [{},{},{},{}],
        [{},{},{},{}],]

        //Сортировка элментов внутри массива
        for (let i=3; i>=0; i--){
          for (let j=3; j>=0; j--){
            for (let g=j;g>=0; g--){
              if(Rows[i][g].Col && Rows[i][g].Col != null){
                Rows2[i][j].gamepoint = Rows[i][g].gamepoint
                Rows2[i][j].Col = Rows[i][g].Col
                Rows2[i][j].blockNum = Rows[i][g].blockNum
                Rows[i][g].Col = null
                Rows[i][g].gamepoint = null
                break
              }
            }
          }
        }

        var Schet = 1
        
        for(let i =0; i<4; i++){
          for(let j=0;j<4; j++){
            if(Rows2[i][j].gamepoint){
              Rows2[i][j].gamepoint =  Schet
            }
            Schet = Schet + 1
          }
        }


        var Blocks2 = Blocks

        for (let i = 0; i < 16; i++) {
          for (let j = 0; j < 4; j++) {
            for (let d = 0; d < 4; d++) {
              if (Blocks[i].blockNum == Rows2[j][d].blockNum) {
                Blocks2[i].Col = Rows2[j][d].Col
                Blocks2[i].gamepoint = Rows2[j][d].gamepoint
              }
            }
          }
        }
     

        setBlocks(Blocks2)
        setTimeout(() => setUpdate(Update + 1), 10)
        break
      }
      case 'left': {
        var Rows = [[{}, {}, {}, {}],
        [{}, {}, {}, {}],
        [{}, {}, {}, {}],
        [{}, {}, {}, {}],]
        for (let i = 0; i < 16; i++) {
          switch (Blocks[i].gamepoint) {
            case 1: {
              Rows[0][0] = Blocks[i]
              break
            }
            case 2: {
              Rows[0][1] = Blocks[i]
              break
            }
            case 3: {
              Rows[0][2] = Blocks[i]
              break
            }
            case 4: {
              Rows[0][3] = Blocks[i]
              break
            }
            case 5: {
              Rows[1][0] = Blocks[i]
              break
            }
            case 6: {
              Rows[1][1] = Blocks[i]
              break
            }
            case 7: {
              Rows[1][2] = Blocks[i]
              break
            }
            case 8: {
              Rows[1][3] = Blocks[i]
              break
            }
            case 9: {
              Rows[2][0] = Blocks[i]
              break
            }
            case 10: {
              Rows[2][1] = Blocks[i]
              break
            }
            case 11: {
              Rows[2][2] = Blocks[i]
              break
            }
            case 12: {
              Rows[2][3] = Blocks[i]
              break
            }
            case 13: {
              Rows[3][0] = Blocks[i]
              break
            }
            case 14: {
              Rows[3][1] = Blocks[i]
              break
            }
            case 15: {
              Rows[3][2] = Blocks[i]
              break
            }
            case 16: {
              Rows[3][3] = Blocks[i]
              break
            }
            default: {
              break
            }
          }
        }
        for (let j = 3; j > -1; j--) {
          for (let i = 0; i < 3; i++) {
            if (Rows[j][i].Col) {
              for(let r = 1; r<4; r++){
                if(i+r <= 3){
                  if(Rows[j][i+r].Col){
                    if (Rows[j][i].Col == Rows[j][i+r].Col) {
                      Rows[j][i+r].Col = null
                      Rows[j][i+r].gamepoint = null
                      Rows[j][i].Col = Rows[j][i].Col * 2
                      setGameScore(GameScore+Rows[j][i].Col/2)
                    }
                    break
                  }
                }
              }
            }
          }
        }

        var Rows2 = [[{},{},{},{}],
        [{},{},{},{}],
        [{},{},{},{}],
        [{},{},{},{}],]

        for (let i=0; i<4; i++){
          for (let j=0; j<4; j++){
            for (let g=j;g<4; g++){
              if(Rows[i][g].Col && Rows[i][g].Col != null){
                Rows2[i][j].gamepoint = Rows[i][g].gamepoint
                Rows2[i][j].Col = Rows[i][g].Col
                Rows2[i][j].blockNum = Rows[i][g].blockNum
                Rows[i][g].Col = null
                Rows[i][g].gamepoint = null
                break
              }
            }
          }
        }


        var Schet = 1

        for(let i =0; i<4; i++){
          for(let j=0;j<4; j++){
            if(Rows2[i][j].gamepoint){
              Rows2[i][j].gamepoint =  Schet
            }
            Schet = Schet + 1
          }
        }



        var Blocks2 = Blocks

        for (let i = 0; i < 16; i++) {
          for (let j = 0; j < 4; j++) {
            for (let d = 0; d < 4; d++) {
              if (Blocks[i].blockNum == Rows2[j][d].blockNum) {
                Blocks2[i].Col = Rows2[j][d].Col
                Blocks2[i].gamepoint = Rows2[j][d].gamepoint
              }
            }
          }
        }

        
        setBlocks(Blocks2)
        setTimeout(() => setUpdate(Update + 1), 10)
        break
      }
      case 'top': {
        var Colums = 
        [[{}, {}, {}, {}],
         [{}, {}, {}, {}],
         [{}, {}, {}, {}],
         [{}, {}, {}, {}],]
        for (let i =0; i<16; i++){
          switch(Blocks[i].gamepoint){
            case 1:{
              Colums[0][0] = Blocks[i]
              break
            }
            case 5:{
              Colums[0][1] = Blocks[i]
              break
            }
            case 9:{
              Colums[0][2] = Blocks[i]
              break
            }
            case 13:{
              Colums[0][3] = Blocks[i]
              break
            }
            case 2:{
              Colums[1][0] = Blocks[i]
              break
            }
            case 6:{
              Colums[1][1] = Blocks[i]
              break
            }
            case 10:{
              Colums[1][2] = Blocks[i]
              break
            }
            case 14:{
              Colums[1][3] = Blocks[i]
              break
            }
            case 3:{
              Colums[2][0] = Blocks[i]
              break
            }
            case 7:{
              Colums[2][1] = Blocks[i]
              break
            }
            case 11:{
              Colums[2][2] = Blocks[i]
              break
            }
            case 15:{
              Colums[2][3] = Blocks[i]
              break
            }
            case 4:{
              Colums[3][0] = Blocks[i]
              break
            }
            case 8:{
              Colums[3][1] = Blocks[i]
              break
            }
            case 12:{
              Colums[3][2] = Blocks[i]
              break
            }
            case 16:{
              Colums[3][3] = Blocks[i]
              break
            }
          }
        }




        for (let j = 3; j >= 0; j--) {
          for (let i = 0; i < 3; i++) {
            if (Colums[j][i].Col) {
              for(let r = 1; r<4; r++){
                if(i+r <= 3){
                  if(Colums[j][i+r].Col){
                    if (Colums[j][i].Col == Colums[j][i+r].Col) {
                      Colums[j][i+r].Col = null
                      Colums[j][i+r].gamepoint = null
                      Colums[j][i].Col = Colums[j][i].Col * 2
                      setGameScore(GameScore+Colums[j][i].Col/2)
                    }
                    break
                  }
                }
              }
            }
          }
        }
        

        var Rows2 = [[{},{},{},{}],
        [{},{},{},{}],
        [{},{},{},{}],
        [{},{},{},{}],]

        for (let i=0; i<4; i++){
          for (let j=0; j<4; j++){
            for (let g=j;g<4; g++){
              if(Colums[i][g].Col && Colums[i][g].Col != null){
                Rows2[i][j].gamepoint = Colums[i][g].gamepoint
                Rows2[i][j].Col = Colums[i][g].Col
                Rows2[i][j].blockNum = Colums[i][g].blockNum
                Colums[i][g].Col = null
                Colums[i][g].gamepoint = null
                break
              }
            }
          }
        }


        var Schet = 1

        for(let i =0; i<4; i++){
          for(let j=0;j<4; j++){
            if(Rows2[i][j].gamepoint){
              Rows2[i][j].gamepoint =  Schet
            }
            Schet = Schet + 4
            if(Schet == 17){
              Schet = 2
            }
            if(Schet == 18){
              Schet = 3
            }
            if(Schet == 19){
              Schet = 4
            }
          }
        }


        var Blocks2 = Blocks

        for (let i = 0; i < 16; i++) {
          for (let j = 0; j < 4; j++) {
            for (let d = 0; d < 4; d++) {
              if (Blocks[i].blockNum == Rows2[j][d].blockNum) {
                Blocks2[i].Col = Rows2[j][d].Col
                Blocks2[i].gamepoint = Rows2[j][d].gamepoint
              }
            }
          }
        }

        
        setBlocks(Blocks2)
        setTimeout(() => setUpdate(Update + 1), 10)
        break
      }
      case 'bottom': {
        var Colums = 
        [[{}, {}, {}, {}],
         [{}, {}, {}, {}],
         [{}, {}, {}, {}],
         [{}, {}, {}, {}],]
        for (let i =0; i<16; i++){
          switch(Blocks[i].gamepoint){
            case 1:{
              Colums[0][0] = Blocks[i]
              break
            }
            case 5:{
              Colums[0][1] = Blocks[i]
              break
            }
            case 9:{
              Colums[0][2] = Blocks[i]
              break
            }
            case 13:{
              Colums[0][3] = Blocks[i]
              break
            }
            case 2:{
              Colums[1][0] = Blocks[i]
              break
            }
            case 6:{
              Colums[1][1] = Blocks[i]
              break
            }
            case 10:{
              Colums[1][2] = Blocks[i]
              break
            }
            case 14:{
              Colums[1][3] = Blocks[i]
              break
            }
            case 3:{
              Colums[2][0] = Blocks[i]
              break
            }
            case 7:{
              Colums[2][1] = Blocks[i]
              break
            }
            case 11:{
              Colums[2][2] = Blocks[i]
              break
            }
            case 15:{
              Colums[2][3] = Blocks[i]
              break
            }
            case 4:{
              Colums[3][0] = Blocks[i]
              break
            }
            case 8:{
              Colums[3][1] = Blocks[i]
              break
            }
            case 12:{
              Colums[3][2] = Blocks[i]
              break
            }
            case 16:{
              Colums[3][3] = Blocks[i]
              break
            }
          }
        }


        for (let j = 3; j > -1; j--) {
          for (let i = 3; i > 0; i--) {
            if (Colums[j][i].Col) {
              for(let r = 1; r<4; r++){
                if(i-r >=0){
                  if(Colums[j][i-r].Col){
                    if (Colums[j][i].Col == Colums[j][i-r].Col) {
                      Colums[j][i-r].Col = null
                      Colums[j][i-r].gamepoint = null
                      Colums[j][i].Col = Colums[j][i].Col * 2
                      setGameScore(GameScore+Colums[j][i].Col/2)
                    }
                    break
                  }
                }
              }
            }
          }
        }
        

        var Rows2 = [[{},{},{},{}],
        [{},{},{},{}],
        [{},{},{},{}],
        [{},{},{},{}],]

        for (let i=0; i<4; i++){
          for (let j=3; j>0; j--){
            for (let g=j;g>=0; g--){
              if(Colums[i][g].Col && Colums[i][g].Col != null){
                Rows2[i][j].gamepoint = Colums[i][g].gamepoint
                Rows2[i][j].Col = Colums[i][g].Col
                Rows2[i][j].blockNum = Colums[i][g].blockNum
                Colums[i][g].Col = null
                Colums[i][g].gamepoint = null
                break
              }
            }
          }
        }


        var Schet = 1

        for(let i =0; i<4; i++){
          for(let j=0;j<4; j++){
            if(Rows2[i][j].gamepoint){
              Rows2[i][j].gamepoint =  Schet
            }
            Schet = Schet + 4
            if(Schet == 17){
              Schet = 2
            }
            if(Schet == 18){
              Schet = 3
            }
            if(Schet == 19){
              Schet = 4
            }
          }
        }


        var Blocks2 = Blocks

        for (let i = 0; i < 16; i++) {
          for (let j = 0; j < 4; j++) {
            for (let d = 0; d < 4; d++) {
              if (Blocks[i].blockNum == Rows2[j][d].blockNum) {
                Blocks2[i].Col = Rows2[j][d].Col
                Blocks2[i].gamepoint = Rows2[j][d].gamepoint
              }
            }
          }
        }

        
        setBlocks(Blocks2)
        setTimeout(() => setUpdate(Update + 1), 10)
        break
      }
    }


    var Stop = true
    var EndGame = true
    while (Stop){
    var min = Math.ceil(1);
    var max = Math.floor(16);
    var Num = Math.floor(Math.random() * (max - min + 1)) + min;
    var Flag = true
    for (let i=0; i<16; i++){
      if(Blocks[i].gamepoint == Num){
        Flag = false
      }
    }
    for (let i=0; i<16; i++){
        if(!Blocks[i].gamepoint && !Blocks[i].Col){
          EndGame = false
        }
    }

    if(Flag){
      for (let i=0; i<16; i++){
        if(!Blocks[i].gamepoint && !Blocks[i].Col){
          Blocks[i].gamepoint = Num
          Blocks[i].Col = 2
          Stop=false
          break
        }
      }
    }
    if(EndGame){
      Stop=false
      alert('Игра закончена')
      setEndGame(true)
    }
    }
  }

  



  return (
    <div className="App" testid="app">
      <div className="GameField" data-testid="GameField" id="GameField" onTouchStart={start} onTouchMove={move} onTouchEnd={end} onMouseDown={start} onMouseMove={move} onMouseUp={end}>
        {Blocks.map((Block) => (
          <GamePoint Block={Block}></GamePoint>
        ))}
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div className="SetkaPoint"></div>
        <div>
        </div>
      </div>
      <div className='Score'>Счёт: {GameScore}</div>
    </div>
  );
}

var GamePoint = (props) => {

  var style = {
  }


  switch (props.Block.Col) {
    case 2: {
      style = {
        background: 'rgb(238, 255, 0)',
        border: '1px solid gray',
      }
      break
    }
    case 4: {
      style = {
        background: 'rgb(255, 200, 0)',
        border: '1px solid gray',
      }
      break
    }
    case 8: {
      style = {
        background: 'rgb(255, 150, 0)',
        border: '1px solid gray',
      }
      break
    }
    case 16: {
      style = {
        background: 'rgb(255, 100, 0)',
        border: '1px solid gray',
      }
      break
    }
    case 32: {
      style = {
        background: 'rgb(255, 50, 0)',
        border: '1px solid gray',
      }
      break
    }
    case 64: {
      style = {
        background: 'rgb(255, 0, 0)',
        border: '1px solid gray',
      }
      break
    }
    case 128: {
      style = {
        background: 'rgb(143, 15, 0)',
        border: '1px solid gray',
      }
      break
    }
    case 256: {
      style = {
        background: 'rgb(100, 17, 0)',
        border: '1px solid gray',
      }
      break
    }
    case 512: {
      style = {
        background: 'rgb(60, 17, 0)',
        border: '1px solid gray',
      }
      break
    }
    case 1024: {
      style = {
        background: 'rgb(20, 17, 0)',
        border: '1px solid gray',
      }
      break
    }
    case 2048: {
      style = {
        background: 'rgb(20, 17, 40)',
        border: '1px solid gray',
      }
      break
    }
    case 4096: {
      style = {
        background: 'rgb(20, 17, 80)',
        border: '1px solid gray',
      }
      break
    }
    case 8096: {
      style = {
        background: 'rgb(20, 17, 120)',
        border: '1px solid gray',
      }
      break
    }
    case 16192: {
      style = {
        background: 'rgb(20, 17, 160)',
        border: '1px solid gray',
      }
      break
    }
    case 32384: {
      style = {
        background: 'rgb(20, 40, 40)',
        border: '1px solid gray',
      }
      break
    }
    case 64768: {
      style = {
        background: 'rgb(80, 80, 80)',
        border: '1px solid gray',
      }
      break
    }
  }

  switch (props.Block.gamepoint) {
    case 1: {
      style.left = '0%'
      style.top = '0%'
      break
    }
    case 2: {
      style.left = '25%'
      style.top = '0%'
      break
    }
    case 3: {
      style.left = '50%'
      style.top = '0%'
      break
    }
    case 4: {
      style.left = '75%'
      style.top = '0%'
      break
    }
    case 5: {
      style.left = '0%'
      style.top = '25%'
      break
    }
    case 6: {
      style.left = '25%'
      style.top = '25%'
      break
    }
    case 7: {
      style.left = '50%'
      style.top = '25%'
      break
    }
    case 8: {
      style.left = '75%'
      style.top = '25%'
      break
    }
    case 9: {
      style.left = '0%'
      style.top = '50%'
      break
    }
    case 10: {
      style.left = '25%'
      style.top = '50%'
      break
    }
    case 11: {
      style.left = '50%'
      style.top = '50%'
      break
    }
    case 12: {
      style.left = '75%'
      style.top = '50%'
      break
    }
    case 13: {
      style.left = '0%'
      style.top = '75%'
      break
    }
    case 14: {
      style.left = '25%'
      style.top = '75%'
      break
    }
    case 15: {
      style.left = '50%'
      style.top = '75%'
      break
    }
    case 16: {
      style.left = '75%'
      style.top = '75%'
      break
    }
  }


  return (
    <div className='Block' data-testid={`GamePoint${props.Block.blockNum}`} style={style}>
      {props.Block.Col}
    </div>
  );
}

export default App;
