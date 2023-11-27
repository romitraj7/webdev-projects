const score = {
    wins :0,
    losses:0,
    ties:0
};

if (result==='You win.') {
    score.wins +=1;
}
if (result==='You lose.') {
    score.losses +=1;
}
if (result==='tie.') {
    score.ties +=1;
}

