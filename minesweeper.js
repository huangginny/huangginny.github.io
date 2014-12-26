$(function () {

	var MINE_IMG = '<i class="fa fa-bomb"></i>';

	var GRIDS_PER_LINE = 16;
	
	function GridModel(x, y, parent) {

		var self = this;
		self.parent = parent;

		self.x_coord = x;
		self.y_coord = y;

		self.content = ko.observable();

		self.isMine = ko.computed(function(){
			return self.content() === MINE_IMG;
		});

		self.clickable = ko.observable(true);

		self.isClicked = ko.observable(false);
		self.isFlagged = ko.observable(false);

		self.show = function() {
			// if game hasn't started, start it
			if (!(self.parent.isPlaying())) {
				self.parent.startGame(self.x_coord, self.y_coord);
			}
			if (!self.clickable()) {
				return;
			}
			self.isClicked(true);
			self.clickable(false);
			if (self.isMine()) {
				// end the game and stuff...
			} else if (self.content() === 0) {
				for (var i = self.x_coord - 1; i <= self.x_coord + 1; i++) {
					for (var j = self.y_coord - 1; j <= self.y_coord + 1; j++) {
						if ((0 <= i && i < GRIDS_PER_LINE) &&
							(0 <= j && j < GRIDS_PER_LINE) &&
							(i != self.x_coord || j != self.y_coord)) {
							var grid = self.parent.board()[i]()[j];
							grid.show();
						}
					}
				}
			}
		};

		self.flag = function() {
			if (self.clickable()) {
				self.isFlagged(true);
				self.clickable(false);
			} else if (self.isFlagged()) {
				// if it is already flagged, unflag
				self.isFlagged(false);
				self.clickable(true);
			}
		};
	};

	function GameModel() {

		var self = this;

		self.board = ko.observableArray();

		self.canPlay = ko.observable(true);
		self.isPlaying = ko.observable(false);
		self.numOfMines = ko.observable(36);

		self.newBoard = function () {
			var clearBoard = ko.observableArray();
			for (var i = 0; i < GRIDS_PER_LINE; i++) {
				var newRow = ko.observableArray();
				for (var j = 0; j < GRIDS_PER_LINE; j++) {
					newRow.push(new GridModel(i, j, self));
				}
				clearBoard.push(newRow);
			}
			self.board(clearBoard());
		};

		/*
			Initialize mines and contents.
		 */
		self.startGame = function(x, y) {
			var count = 0;
			while (count < self.numOfMines()) {
				var x_mine = Math.floor(Math.random() * GRIDS_PER_LINE); 
				var y_mine = Math.floor(Math.random() * GRIDS_PER_LINE); 
				var grid = self.board()[x_mine]()[y_mine];
				if ((x != x_mine && y != y_mine) && (!grid.isMine())) {
					grid.content(MINE_IMG); // mine!
					count++;
				}
			}
			for (var i = 0; i < GRIDS_PER_LINE; i++) {
				for (var j = 0; j < GRIDS_PER_LINE; j++) {
					// check around and count mines
					var grid = self.board()[i]()[j];
					if (grid.isMine()) continue;
					var mines = 0;
					for (var p = i - 1; p <= i + 1; p++) {
						for (var q = j - 1; q <= j + 1; q++) {
							if ((0 <= p && p < GRIDS_PER_LINE) &&
							(0 <= q && q < GRIDS_PER_LINE) ) {
								if (self.board()[p]()[q].isMine()) {
									mines++;
								}
							}
						}
					}
					grid.content(mines);
				}
			}
			self.isPlaying(true);
		};

		self.hasWon = ko.computed(function() {
			if (self.board().length === 0) {
				return false;
			}
			for (var i = 0; i < GRIDS_PER_LINE; i++) {
				for (var j = 0; j < GRIDS_PER_LINE; j++) {
					// check around and count mines
					var grid = self.board()[i]()[j];
					if (grid.isMine()) continue;
					if (!grid.isClicked()) return false;
				}
			}
			self.canPlay(false);
			return true;
		});

		self.hasLost = ko.observable(false);

		self.reset = function() {
			self.newBoard();
			self.canPlay(true);
			self.isPlaying(false);
			self.hasLost(false);
		};

	};

	var game = new GameModel();
	game.reset();
	ko.applyBindings(game, document.getElementById('minesweeper'));

});