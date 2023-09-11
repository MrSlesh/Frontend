const bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 1000,
    deposit: function (amount) {
        amount > 60000
            ? console.log("Требуется подтверждения легальности дохода")
            : (this.balance += amount);
    },
    withdraw(amount) {
        amount <= this.balance && amount > 0
            ? (this.balance -= amount)
            : console.log("Недостаточно средств на вашем балансе или вы ввели отрицательно число");
    },
    checkBalance() {
        console.log(`Балансе вашего счета равен: ${this.balance}`)
    }
}



bankAccount.checkBalance();
bankAccount.deposit(500);
bankAccount.checkBalance();
bankAccount.withdraw(700);
bankAccount.checkBalance();
bankAccount.withdraw(1000);
bankAccount.checkBalance();