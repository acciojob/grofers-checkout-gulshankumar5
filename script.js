
const getSumBtn = document.createElement("button");

getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    // Select all prices
    const price = document.querySelectorAll(".price");

    // Calculate total
    let total = 0;

    price.forEach((p) => {
        total += Number(p.textContent);
    });

    // Create new row
    const row = document.createElement("tr");

    // Create new cell
    const cell = document.createElement("td");

    // Make cell cover two columns
    cell.colSpan = 2;

    // Display total
    cell.textContent = "Total Price: " + total;

    // Add cell to row
    row.appendChild(cell);

    // Add row to table
    document.querySelector("table").appendChild(row);

};

// Button click event
getSumBtn.addEventListener("click", getSum);
