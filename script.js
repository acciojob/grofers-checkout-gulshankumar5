const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const prices = document.querySelectorAll(".price")
            let total = 0;
            prices.forEach((p) => {
                total += Number(p.textContent)
            });

        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 2;
        cell.id = "ans"
        cell.textContent =  "Total Price: " + total;
        row.appendChild(cell);
	    document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

