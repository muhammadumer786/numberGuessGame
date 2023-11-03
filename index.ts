#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

interface guessNumberGame{
    numberGuess:number
}

let game:guessNumberGame = await inquirer.prompt(
    {
        type:"input",
        name:"numberGuess",
        message:chalk.blue("enter here your guess number from 0 to 5:")
    }
)

let systemGeneratedNumber:number = Math.floor(Math.random()*6);
// console.log(systemGeneratedNumber);

let answer:number=game.numberGuess;


console.log(chalk.green(`\nyou selected number: ${answer}`));
console.log(chalk.green(`system generated number is : ${systemGeneratedNumber}\n`));

if(answer==systemGeneratedNumber){
    console.log(chalk.yellow("Congratulation! you guess correct number. you win the game."));
    }else{
console.log(chalk.red("try again! not match."));
}
