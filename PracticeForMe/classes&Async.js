class Counter {
    constructor(start) {
        this.value = start;
    }

    increment() {
        this.value++;
        return this.value;
    }
    decrement() {
        this.value--;
        return this.value;
    }
}

class bankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        if(amount > 0 && isFinite(amount)) {
            this.balance += amount;
            return { success: true };
        }
        return { success: false };
    }
    withdraw(amount) {
        if(amount > 0 && amount <= this.balance && isFinite(amount)) {
            this.balance -= amount;
            return { success: true };
        }
        return { success: false };
    }
}


let status = 'Waiting...'

function updateStatus() {
    status = 'Ready';
    console.log(status);
}

setTimeout(updateStatus, 2000);
console.log(status);