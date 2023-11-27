let currentYear, currentMonth;

function createCalendar(year, month) {
    const calendar = document.getElementById('calendar');

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const monthNames = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    let html = `<h2>${monthNames[month]} ${year}</h2><table>`;
    html += '<tr><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th><th>Dim</th></tr><tr>';

    let dayCount = 1;

    // Fill in the days of the previous month if necessary
    for (let i = 0; i < firstDayOfMonth; i++) {
        html += '<td></td>';
    }

    // Fill in the days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
        html += `<td onclick="alert('Clicked on ${i} ${monthNames[month]} ${year}');"`;
        if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            html += ' class="today"';
        }
        html += `>${i}</td>`;

        if ((i + firstDayOfMonth) % 7 === 0) {
            html += '</tr><tr>';
        }

        dayCount++;
    }

    // Fill in the remaining cells
    for (let i = dayCount; i <= 7; i++) {
        html += '<td></td>';
    }

    html += '</tr></table>';
    calendar.innerHTML = html;
    currentYear = year;
    currentMonth = month;
}

function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    createCalendar(currentYear, currentMonth);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    createCalendar(currentYear, currentMonth);
}

// Initial display for the current month
const currentDate = new Date();
createCalendar(currentDate.getFullYear(), currentDate.getMonth());