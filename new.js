function getRandomDate(startYear=2020, endYear=2025) {
    const start = new Date(startYear, 0, 1).getTime();
    const end = new Date(endYear, 11, 31).getTime();
    const randomTime = start + Math.random() * (end - start);
    const date = new Date(randomTime);
    
    // Format date as "1-Jan-2022"
    const day = date.getDate();
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    // Format time as "22:22:22"
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    
    return {dateStr: `${day}-${month}-${year}`, timeStr: `${hours}:${minutes}:${seconds}`, timestamp: date.getTime()};
}

let dates = [];
function generateDates(num=10) {
    dates = [];
    for(let i=0;i<num;i++){
        dates.push(getRandomDate());
    }
    renderDates();
}

function renderDates() {
    const list = document.getElementById("dateList");
    list.innerHTML = "";
    dates.forEach(d => {
        const li = document.createElement("li");
        li.textContent = `${d.dateStr} ${d.timeStr}`;
        list.appendChild(li);
    });
}

function sortAscending() {
    dates.sort((a,b) => a.timestamp - b.timestamp);
    renderDates();
}

function sortDescending() {
    dates.sort((a,b) => b.timestamp - a.timestamp);
    renderDates();
}

