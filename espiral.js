//Funcion para ingresar tamaño de matriz
var espiral = function (dimension) {
    //crear arreglo con elementos diagonales
    var diagonalOne = [1, 3];
    var diagonalTwo = [1];

    //elementos que llevaran la suma total del arreglo
    var sumOne = 0;
    var sumTwo = 0;
    var sum = 0;
    

    //diagonal principal (para dimension 5: 1, 3, 7, 13, 21)
    var prevElement = 1; //comenzando por el numero 3
    var paso = 4; //paso min a partir de 3
    var counter = 0;
    while (counter < dimension - 2) {
        //agregar el elemento al arreglo
        diagonalOne.push(diagonalOne[prevElement] + paso);
        paso = paso + 2;
        prevElement++; 
        counter++;
    }

    //diagonal secundaria (para dimension 5: 1, 5, 9, 17, 25)
    var pasoSec = 4;
    var prevElementTwo = 0; //comenzamos por 1 en diagonalTwo
    var count = 0
    while (count < dimension - 2) {
        
        //agregar elementos al arreglo
        if (count % 2 == 0) {
            //inserta primer elemento
            diagonalTwo.push(diagonalTwo[prevElementTwo] + pasoSec);
            prevElementTwo++;
            diagonalTwo.push(diagonalTwo[prevElementTwo] + pasoSec);
            prevElementTwo++;
            //aumenta el paso
            pasoSec = pasoSec + 4;
        }

        count++;
    }

    diagonalOne.forEach(function (element) {
        sumOne = sumOne + element;
        return sumOne;
    });
    console.log(diagonalOne);

    diagonalTwo.forEach(function (element) {
        sumTwo = sumTwo + element;
        return sumTwo;
    });
    console.log(diagonalTwo);
    
    sum = sumOne + sumTwo - 1;

    //Retornar suma diagonal
    return sum;
}



console.log(espiral(1001));