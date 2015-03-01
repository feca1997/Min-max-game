var assert = require("assert")
    , game = require('../game')

var arr = [ [1, 2, 3],
            [4, 5, 6],
            [3, 1, 3]];

var arr1 = [[11, 8, 6],
            [10, 6, 6],
            [1, 1, 0]];

var arr2 = [[9, 8, 6],
            [5, 6, 6],
            [1, 1, 0]];

var Game = new game.Game();

describe("Game's function", function(){
    describe('getCell', function() {
        it('must be return 0 outside', function() {
            assert.equal(Game.getCell(arr, 0, -1, 0), 0);
            assert.equal(Game.getCell(arr, -1, 0, 0), 0);
            assert.equal(Game.getCell(arr, -1, -1, 0), 0);
            assert.equal(Game.getCell(arr, 3, 0, 0), 0);
            assert.equal(Game.getCell(arr, 0, 3, 0), 0);
            assert.equal(Game.getCell(arr, 3, 3, 0), 0);
        })
        it('must be return non 0 inside', function() {
            assert.equal(Game.getCell(arr, 0, 0), 1);
            assert.equal(Game.getCell(arr, 0, 1), 2);
            assert.equal(Game.getCell(arr, 1, 0), 4);
            assert.equal(Game.getCell(arr, 1, 1), 5);
            assert.equal(Game.getCell(arr, 2, 0), 3);
            assert.equal(Game.getCell(arr, 2, 2), 3);
        })
    })
    describe('applyFnOnCells', function() {
        it('must be return good values', function() {
            assert.equal(Game.applyFnOnCells(arr, 0, 0, Math.max, 0), 4);
            assert.equal(Game.applyFnOnCells(arr, 0, 2, Math.max, 0), 6);
            assert.equal(Game.applyFnOnCells(arr, 2, 0, Math.max, 0), 1);
            assert.equal(Game.applyFnOnCells(arr, 2, 1, Math.max, 0), 3);
            assert.equal(Game.applyFnOnCells(arr, 2, 2, Math.max, 0), 0);
        })
    })
    describe('getModes', function() {
        it('must be exists', function() {
            assert.equal(typeof Game.getModes, "function");
        })
    })
})

describe("Game's", function(){
    var result;
    var MODE;

    before(function() {
        result = Game.start(1, 1, arr);
        MODE = Game.getModes(arr);
    })

    describe('result', function() {
        it('must be 6', function() {
            assert.equal(result, 6);
        })
    })

    describe('MODE[0]', function() {
        it('should contains the arr values', function() {
            assert.deepEqual(arr, MODE[0]);
        })
    })

    describe('MODE[1]', function() {
        it('should contains the arr1 values', function() {
            assert.deepEqual(arr1, MODE[1]);
        })
    })

    describe('MODE[2]', function() {
        it('should contains the arr2 values', function() {
            assert.deepEqual(arr2, MODE[2]);
        })
    })
})