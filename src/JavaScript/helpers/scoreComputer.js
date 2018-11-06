module.exports = (answer, correctAnswer, score)=>{
    if(answer == correctAnswer){
        score += 2;
    }else if(answer != 0 && answer != correctAnswer){
        score -= 1;
    }
    return score;
}