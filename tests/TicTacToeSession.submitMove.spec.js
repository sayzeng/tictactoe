import { expect, test, expectTypeOf, vi } from 'vitest'
import { TicTacToeSession, TicTacToeMove} from '../javascript/index.js'

test('submitMove is a function', () => {
    const submitMoveSpy = vi.spyOn(TicTacToeSession.prototype, 'submitMove');
    expectTypeOf(submitMoveSpy).toBeFunction();
})

test('submitMove calls getCoordinates', () => {
    const mockSlug = 'a1';
    const mockSession = new TicTacToeSession();
    mockSession.makeMove = vi.fn();

    const getCoordinatesSpy = vi.spyOn(TicTacToeMove.prototype, 'getCoordinates');
    mockSession.submitMove(mockSlug);
    expect(getCoordinatesSpy).toHaveBeenCalled();
})

test('submitMove calls isValidMove once', () => {
    const mockSlug = 'a1';
    const mockSession = new TicTacToeSession();
    mockSession.makeMove = vi.fn();

    const isValidMoveSpy = vi.spyOn(TicTacToeMove.prototype, 'isValidMove');
    mockSession.submitMove(mockSlug);
    expect(isValidMoveSpy).toHaveBeenCalledTimes(1);
})

test('submitMove calls makeMove if move is valid', () => {
    const mockSlug = 'a1';
    const mockSession = new TicTacToeSession(); 
    const isValidMoveMock = vi.spyOn(TicTacToeMove.prototype, 'isValidMove').mockReturnValue(true);

    mockSession.makeMove = vi.fn();

    const makeMoveSpy = vi.spyOn(mockSession, 'makeMove');
    mockSession.submitMove(mockSlug);
    expect(makeMoveSpy).toHaveBeenCalledTimes(1);
})

test('submitMove does NOT call makeMove if move is invalid', () => {
    const mockSlug = 'a1';
    const mockSession = new TicTacToeSession();    
    const isValidMoveMock = vi.spyOn(TicTacToeMove.prototype, 'isValidMove').mockReturnValue(false);
    
    mockSession.makeMove = vi.fn();

    const makeMoveSpy = vi.spyOn(mockSession, 'makeMove');
    mockSession.submitMove(mockSlug);
    expect(makeMoveSpy).toHaveBeenCalledTimes(0);
})