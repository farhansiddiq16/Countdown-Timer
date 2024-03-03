import inquirer from "inquirer";
let num = await inquirer.prompt({
    type: "number",
    name: "user",
    message: "Please enter the amount of seconds"
});
const countdown = (second) => {
    const interval = setInterval(() => {
        console.log(`${second} seconds remaining`);
        second--;
        if (second < 0) {
            clearInterval(interval);
            console.log("Countdown is finished");
        }
    }, 1000);
};
countdown(num.user);
