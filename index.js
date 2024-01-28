let win = 0
let lose = 0
let nome = ""

if(win){
  i = 0; i <= 1; 
  i++
  console.log("Você venceu" + i)
}else{
  console.log("você perdeu")
}

let status = level (22, 65)

function level(lutas){
  let resultado = pointPlayer + pointCpu
  return resultado
  
  switch(lutas){
    case "101":
      console.log("Seu nível é: imortal")
      break;
      
      case "91":
        console.log("Seu nível é: lendário")
        break;
        
        case "81":
          console.log("Seu nível é: diamante")
          break;
          
          case "51":
            console.log("Seu nível é: ouro")
              break;
              
          case "21":
              console.log("Seu nível é: prata")
              break;
              
              case "11":
                console.log("Seu nível é: bronze")
                break;
                
                default:
                  console.log("Seu nível é: ferro)
                }
              }
                
                
                
                console.log(`Seu herói chamado ${nome} tem o nível ${level} tenha uma boa aventura.`)
                
                
                