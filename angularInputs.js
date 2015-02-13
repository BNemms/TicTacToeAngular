var app = angular.module('angularInputsApp', []);


app.controller('angularInputsCtrl', function($scope){



	$scope.game = {turnNum: 0, board: [["", "", ""], ["", "", ""], ["", "", ""]], p1: "X", p2: "O"};

	// $scope.squareClick = function(row, col){
	// 	$scope.board[row][col] = "I got clicked!!!";
	// };

	function winConditions(piece){
		for(var i = 0; i < 3; i++){
			if($scope.game.board[i][0] == $scope.game.board[i][1] && $scope.game.board[i][0] == $scope.game.board[i][2] && $scope.game.board[i][0] != ""){
				alert(piece + " wins in the row " + i);
			}
			else if($scope.game.board[0][i] == $scope.game.board[1][i] && $scope.game.board[0][i] == $scope.game.board[2][i] && $scope.game.board[0][i] != ""){
				alert(piece + " wins in the row " + i);
			}
		}
		if($scope.game.board[0][i] == $scope.game.board[1][i + 1] && $scope.game.board[0][i] == $scope.game.board[2][i + 2] && $scope.game.board[0][i] != ""){
				alert(piece + " wins in the row " + i);
			}
	}

	$scope.makeMove = function(row, col){
		if($scope.game.board[row][col] == ""){
			var piece = ($scope.game.turnNum % 2) == 0 ? "X" : "O";
			$scope.game.board[row][col] = piece;
			$scope.game.turnNum++;
			winConditions(piece);
		}
	};

	// $scope.squareClick = function(index){
	// 	$scope.board[Math.floor(index / 3)][index % 3] = "I got clicked!!!";
	// };

	console.log($scope);

});
