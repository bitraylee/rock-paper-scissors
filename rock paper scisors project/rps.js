function getMove(player){
    //let player=Number(prompt("Enter:\n1: Rock\n2: Paper\n3: Scissors"));
    let compMove=Math.floor((Math.random()*3)+1);
    let adv=1,nameMove;
    switch(compMove){
        case 1:
            nameMove="Rock";
            if(player==1)
            adv=-1;
            if(player==3)
            adv=0;
            break;
        case 2:
            nameMove="Paper";
            if(player==1)
            adv=0;
            else if(player==2)
            adv=-1;
            break;
        case 3:
            nameMove="Scissors";
            if(player==3)
            adv=-1;
            else if(player==2)
            adv=0;
            break;
    }
    if(adv==1)
    alert("You win, computer chose "+nameMove);
    else if(adv==-1)
    alert("Its a Draw, computer chose "+nameMove);
    else if(adv==0)
    alert("You lose, computer chose "+nameMove);
    
}