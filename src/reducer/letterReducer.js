const initialState = {
    gameDiffs: {
        easy: {
            length: 5,
            number: 7,
            words: ['HOUSE','QUART','PLAIN','TRICK','LOOPY','DRUID','TOKEN','ALIBI','VERSE','FRUIT']
        },
        med: {
            length: 6,
            number: 6,
            words: ['TRENCH','GOLDEN','MORGUE','WIRING','CACTUS','YELLOW','CANDLE','PRETTY','TRAINS','ROBUST']
        },
        hard: {
            length: 7,
            number: 5,
            words: ['BUFFALO','WRESTLE','PORTEND','LIONIZE','CAPITAL','DIVIDED','PROPOSE','GORILLA','ALIMONY','BEHOOVE']
        },
    },
    prevWordIndex: 0
}

export function letterReducer(state = initialState, action) {

    if (action.type === 'newGame') {
        let index = Math.floor(Math.random() * state.gameDiffs[action.diff].words.length);
        while(index === state.prevWordIndex) {
            index = Math.floor(Math.random() * state.gameDiffs[action.diff].words.length);
        }
        let selectedWord = state.gameDiffs[action.diff].words[index];
        console.log(selectedWord);
        return {
            ...state,
            word: selectedWord,
            prevWordIndex: index,
            curDiff: action.diff,
            curRow: 0,
            curCol: 0,
            prevGuesses: [],
            prevColors : [],
            guess: '',
        };
    }

    if (action.type === 'letterSelected') {
        if (state.curCol < state.gameDiffs[state.curDiff].length) {
            return {
                ...state,
                guess: state.guess += action.letter,
                curCol: state.curCol + 1,
            }
        }
        return state;
    }

    if (action.type === 'enterKey') {
        if (state.curCol === state.gameDiffs[state.curDiff].length) {
            let colors = Array(state.gameDiffs[state.curDiff].length).fill('Default');
            for(let i=0; i < state.guess.length; i++) {
                if (state.word[i] === state.guess[i]) {
                    colors[i] = 'Correct';
                } else {
                    colors[i] = 'Wrong';
                }
            }
            for(let i=0; i < state.guess.length; i++) {
                if(colors[i] === 'Wrong') {
                    for (let k=0; k < state.guess.length; k++) {
                        if (state.guess[i] === state.word[k] && colors[k] !== 'Correct') {
                            colors[i] = 'Spot';
                            break;
                        }
                    }
                }
            }
            state.prevGuesses.push(state.guess);
            state.prevColors.push(colors);
            return {
                ...state,
                guess: '',
                curCol: 0,
                curRow: state.curRow + 1,
            }
        }
        return state;
    }

    if (action.type === 'deleteKey') {
        return {
            ...state,
            guess: state.guess.slice(0, -1),
            curCol: state.curCol - 1,
        };
    }

    return state;
}