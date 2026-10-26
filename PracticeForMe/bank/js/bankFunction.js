export {BankAccount, SavingsAccount}
 class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            return false;
        }

        this.balance += amount;
        return true;
    }
    withdraw(amount) {
        if(!Number.isFinite(amount) || amount <= 0 || amount > this.balance){
            return false;
        }
        this.balance -= amount;
        return true;    
    }
}

class SavingsAccount extends BankAccount {
    constructor(owner, balance, interestRate) {
        super(owner, balance);
        this.interestRate = interestRate;
    }
            applyInterest() {
            let percent = (this.interestRate / 100) * this.balance;
            let result = this.balance + percent;
            this.balance = result
            return {added : percent, balance : result}
            
        }
}
