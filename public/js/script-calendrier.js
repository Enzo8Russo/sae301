let currentYear, currentMonth;

const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

function createCalendar(year, month) {
    const calendar = document.getElementById('calendar');

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    let html = `<div class="calendar-header"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onclick="previousMonth()" class="arrow"><path d="M19 12H5M12 19l-7-7 7-7"/></svg><h2>${monthNames[month]} ${year}</h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onclick="nextMonth()" class="arrow"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div><table>`;
    html += '<tr><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th><th>Dim</th></tr><tr>';

    let dayCount = 1;

    // Fill in the days of the previous month if necessary
    for (let i = 0; i < firstDayOfMonth; i++) {
        html += '<td></td>';
    }

    // Fill in the days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
        const cellId = `day-${i}-${month}-${year}`;
        html += `<td id="${cellId}" onclick="handleDayClick(${i}, ${month}, ${year})"`;

        if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            html += ' class="today"';
        }

        const existingCell = document.getElementById(cellId);

        if (existingCell && existingCell.classList.contains('reminder')) {
            html += ` onclick="handleReminderClick(${i}, ${month}, ${year})"`;
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

function handleDayClick(day, month, year) {
    const confirmation = window.confirm(`Voulez-vous mettre un rappel pour ce jour : ${day} ${monthNames[month]} ${year}?`);

    if (confirmation) {
        const reminderTitle = prompt(`Quel est le titre de ce rappel pour le ${day} ${monthNames[month]} ${year}?`);
        if (reminderTitle !== null) {
            const selectedDay = document.getElementById(`day-${day}-${month}-${year}`);
            selectedDay.classList.add('reminder');
            selectedDay.setAttribute('data-title', reminderTitle);
            selectedDay.setAttribute('onclick', `handleReminderClick(${day}, ${month}, ${year})`);
        }
    }
}

function handleReminderClick(day, month, year) {
    const selectedDay = document.getElementById(`day-${day}-${month}-${year}`);
    const reminderTitle = selectedDay.getAttribute('data-title');

    const confirmation = window.confirm(`Rappel : ${reminderTitle}\n \n Souhaitez-vous supprimer ce rappel pour le jour : ${day} ${monthNames[month]} ${year}?`);

    if (confirmation) {
        selectedDay.classList.remove('reminder');
        selectedDay.removeAttribute('data-title');
        selectedDay.removeAttribute('onclick');
    }
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
