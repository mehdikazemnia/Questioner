class ScoreComputer{
    static compute(answer, correctAnswer, score){
        if(answer == correctAnswer){
            score += 2;
        }else if(answer != 0 && answer != correctAnswer){
            score -= 1;
        }
        return score;
    }
    static checkAnswer(answer, correctAnswer){
        if(answer == correctAnswer){
            return 1;
        }else if(answer != 0 && answer != correctAnswer){
            return -1;
        }
        return 0;
    }
}


module.exports = ScoreComputer;