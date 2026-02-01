let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction() {
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;
    let type = document.getElementById("type").value;

    if (desc === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    let transaction = {
        id: Date.now(),
        desc: desc,
        amount: Number(amount),
        type: type
    };

    transactions.push(transaction);
    saveData();
    showTransactions();
}

function deleteTransaction(id) {
    transactions = transactions.filter(function(t) {
        return t.id !== id;
    });

    saveData();
    showTransactions();
}

function showTransactions() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    let filter = document.getElementById("filter").value;

    transactions.forEach(function(t) {
        if (filter !== "all" && t.type !== filter) {
            return;
        }

        let li = document.createElement("li");
        li.className = t.type;

        li.innerHTML =
            t.desc + " - " + t.amount +
            " <span class='delete' onclick='deleteTransaction(" + t.id + ")'>X</span>";

        list.appendChild(li);
    });

    calculateTotals();
}

function calculateTotals() {
    let income = 0;
    let expense = 0;

    transactions.forEach(function(t) {
        if (t.type === "income") {
            income += t.amount;
        } else {
            expense += t.amount;
        }
    });

    document.getElementById("income").innerText = income;
    document.getElementById("expense").innerText = expense;
    document.getElementById("balance").innerText = income - expense;
}

function saveData() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

showTransactions();
