function account(iban, owner, balance) {
    this.iban = iban;
    this.owner = owner;
    this.balance = balance;
    this.getBalance = function(){return this.balance};
    this.deposit = function(amount){
        if (typeof amount !== 'number' || amount <= 0) {
            return false;
        } else {
            this.balance += amount;
            return true;
        }
  
        }
    
    this.withdraw = function(amount){
        if (typeof amount !== 'number' || amount <= 0 || amount > this.balance) {
            return false;
        } else {
            this.balance -= amount;
            return true;
        }
    }
}

function transfer(fromAccount, toAccount, amount) {
    if (fromAccount.withdraw(amount)) {
        if (toAccount.deposit(amount)) {
            return new Transaction(fromAccount, toAccount, amount);
        } else {
            fromAccount.deposit(amount);
            return false;
        }
    } else {
        return false;
    }
}
