export const AURAL_UPDATE = 'AURAL_UPDATE';
export const setAURAL_UPDATE = () => ({
    type: AURAL_UPDATE
    
});


export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
    type: RESTART_GAME,
    correctAnswer
});


export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
});
