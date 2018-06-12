var i = 0, n = 0, win = 0, max = 0,
	w = [], 
	winer = [], 
	g1=0, g2=0, g=0,
	winCombinations_3x3 = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
	],
	winCombinations_5x5 = [
    [0 , 1 , 2 , 3 ],
    [5 , 6 , 7 , 8 ],
    [10, 11, 12, 13],
    [15, 16, 17, 18],
    [20, 21, 22, 23],
    [1 , 2 , 3 , 4 ],
    [6 , 7 , 8 , 9 ],
    [11, 12, 13, 14],
    [16, 17, 18, 19],
    [21, 22, 23, 24],
    [0 , 5 , 10, 15],
    [1 , 6 , 11, 16],
    [2 , 7 , 12, 17],
    [3 , 8 , 13, 18],
    [4 , 9 , 14, 19],
    [5 , 10, 15, 20],
    [6 , 11, 16, 21],
    [7 , 12, 17, 22],
    [8 , 13, 18, 23],
    [9 , 14, 19, 24],
    [0 , 6 , 12, 18],
    [6 , 12, 18, 24],
    [5 , 11, 17, 23],
    [1 , 7 , 13, 19],
	],
	
    square = document.getElementsByClassName("square"),
	game = document.getElementsByClassName("game"),
	game1 = document.getElementsByClassName("game1"),
	game2 = document.getElementsByClassName("game2");
	baseTable = document.getElementsByClassName("baseTable");
	
function var1(Number) {							// основаная рабочая функция, ставит Х и О при нажатии на ячейку

    if (win == 0 && n < max && w[Number] != 1) {  // если никто не победил, если число ходов не больше 9, если в ячейке не стоит знак.
        if (i == 0) { 							// если ходит первый игрок
            i = 1;
            n++;
            w[Number] = 1;
            winer[Number] = 1;
			square[Number].style.color = "red";
            square[Number].innerHTML = "X";
            game[0].innerHTML = "Ходит второй игрок";
        } else {								// если ходит второй игрок
            i = 0;
            n++;
            w[Number] = 1;
            winer[Number] = 2;
            square[Number].style.color = "black";
            square[Number].innerHTML = "O";
            game[0].innerHTML = "Ходит первый игрок";
        }
    };
	
	if (max == (3 * 3)) {
		winCombinations_3x3.forEach(function(item) {findWiner_3x3(item);} );
	} else {
		winCombinations_5x5.forEach(function(item) {findWiner_5x5(item);} );
	};
	
	function findWiner_3x3(item) {
	
		if ((winer[item[0]] == winer[item[1]]) && ( winer[item[1]] == winer[item[2]]) && (winer[item[2]]  == 1)) {
			game[0].innerHTML = "Победил первый игрок, снова выберите режим";
			if (g == 0) {
				g1++;
				g=1;
				game1[0].innerHTML = g1; 
			};
			win = 1;
		};
		if ((winer[item[0]] == winer[item[1]]) && ( winer[item[1]] == winer[item[2]]) && (winer[item[2]] == 2)) {
			game[0].innerHTML = "Победил второй игрок, снова выберите режим";
			if (g == 0) {
				g2++;
				g=1;
				game2[0].innerHTML = g2; 
			};
			win = 2;
		};
	};
	
	function findWiner_5x5(item) {
	
		if ((winer[item[0]] == winer[item[1]]) && ( winer[item[1]] == winer[item[2]]) && ( winer[item[2]] == winer[item[3]]) && (winer[item[3]]  == 1)) {
			game[0].innerHTML = "Победил первый игрок";
			if (g == 0) {
				g1++;
				g=1;
				game1[0].innerHTML = g1; 
			};
			win = 1;
		};
		if ((winer[item[0]] == winer[item[1]]) && ( winer[item[1]] == winer[item[2]]) && ( winer[item[2]] == winer[item[3]]) && (winer[item[3]] == 2)) {
			game[0].innerHTML = "Победил второй игрок";
			if (g == 0) {
				g2++;
				g=1;
				game2[0].innerHTML = g2; 
			};
			win = 2;
		};
	};
	
    if (win == 0 && n == max) {
        game[0].innerHTML = "Ничья";
    }
}

function var2(Number) {  						// ставит временный зеленый знак для удобства

	 if (win == 0 && n < max && w[Number] != 1) {  // если никто не победил, если число ходов не больше 9, если в ячейке не стоит знак.
        if (i == 0) { 							// если ходит первый игрок
			square[Number].style.color = "green";
            square[Number].innerHTML = "X";
        } else {								// если ходит второй игрок

            square[Number].style.color = "green";
            square[Number].innerHTML = "O";
        }
    }
}

function var3(Number) { 						// удаляет временный зеленый знак когда мышь покидает поле

	 if (win == 0 && n < max && w[Number] != 1) {  // если никто не победил, если число ходов не больше 9, если в ячейке не стоит знак.							// если ходит второй игрок
            square[Number].innerHTML = "";
    }
}

function reboot() {								// кнопка начинает новую игру, обнуляет все переменные

    i = 0;
    n = 0;
	g = 0;
    win = 0;
	game[0].innerHTML = " Ходит первый игрок ";
	w = [];
	winer = [];
    for (Number = 0; Number < max; Number++) {
        square[Number].innerHTML = "";			// стирает из всех ячеек Х и О
    }
}

function swap() {								// кнопка начинает новую игру, обнуляет все переменные

	let a = g1;
	g1 = g2;
	g2 = a;
	game1[0].innerHTML = g1; 
	game2[0].innerHTML = g2; 
}

function base3() {

	max = 3 * 3;
	baseTable[0].innerHTML = '<tr > <td onmouseout="var3(0)"; onmouseover="var2(0)"; onclick="var1(0)" style="width:200; height:200" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(1)"; onmouseover="var2(1)"; onclick="var1(1)" style="width:200; height:200" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(2)"; onmouseover="var2(2)"; onclick="var1(2)" style="width:200; height:200" align="center"><font class="square" size="40"> </font></td> </tr> <tr> <td onmouseout="var3(3)"; onmouseover="var2(3)"; onclick="var1(3)" style="width:200; height:200" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(4)"; onmouseover="var2(4)"; onclick="var1(4)" style="width:200; height:200" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(5)"; onmouseover="var2(5)"; onclick="var1(5)" style="width:200; height:200" align="center"><font class="square" size="40"> </font></td> </tr> <tr> <td onmouseout="var3(6)"; onmouseover="var2(6)"; onclick="var1(6)" style="width:200; height:200" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(7)"; onmouseover="var2(7)"; onclick="var1(7)" style="width:200; height:200" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(8)"; onmouseover="var2(8)"; onclick="var1(8)" style="width:200; height:200" align="center"><font class="square" size="40"> </font></td> </tr>';
	reboot();
}

function base5() {

	max = 5 * 5;
	baseTable[0].innerHTML = '<tr > <td onmouseout="var3(0)"; onmouseover="var2(0)"; onclick="var1(0)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(1)"; onmouseover="var2(1)"; onclick="var1(1)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(2)"; onmouseover="var2(2)"; onclick="var1(2)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(3)"; onmouseover="var2(3)"; onclick="var1(3)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(4)"; onmouseover="var2(4)"; onclick="var1(4)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> </tr> <tr > <td onmouseout="var3(5)"; onmouseover="var2(5)"; onclick="var1(5)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(6)"; onmouseover="var2(6)"; onclick="var1(6)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(7)"; onmouseover="var2(7)"; onclick="var1(7)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(8)"; onmouseover="var2(8)"; onclick="var1(8)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(9)"; onmouseover="var2(9)"; onclick="var1(9)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> </tr> <tr > <td onmouseout="var3(10)"; onmouseover="var2(10)"; onclick="var1(10)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(11)"; onmouseover="var2(11)"; onclick="var1(11)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(12)"; onmouseover="var2(12)"; onclick="var1(12)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(13)"; onmouseover="var2(13)"; onclick="var1(13)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(14)"; onmouseover="var2(14)"; onclick="var1(14)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> </tr> <tr > <td onmouseout="var3(15)"; onmouseover="var2(15)"; onclick="var1(15)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(16)"; onmouseover="var2(16)"; onclick="var1(16)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(17)"; onmouseover="var2(17)"; onclick="var1(17)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(18)"; onmouseover="var2(18)"; onclick="var1(18)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(19)"; onmouseover="var2(19)"; onclick="var1(19)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> </tr> <tr > <td onmouseout="var3(20)"; onmouseover="var2(20)"; onclick="var1(20)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(21)"; onmouseover="var2(21)"; onclick="var1(21)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(22)"; onmouseover="var2(22)"; onclick="var1(22)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(23)"; onmouseover="var2(23)"; onclick="var1(23)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> <td onmouseout="var3(24)"; onmouseover="var2(24)"; onclick="var1(24)" style="width:16%; height:16%" align="center"><font class="square" size="40"> </font></td> </tr>';
	reboot();
}

function restart() {

	g1 = 0;
	g2 = 0;
	game1[0].innerHTML = 0; 
	game2[0].innerHTML = 0; 
}	
