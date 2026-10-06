// Éléments du DOM
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalMuted = modal.querySelector('.muted');
const dateDisplay = document.getElementById('date-display');
const btnAdd = document.getElementById('btn-add');
const btnClose = document.getElementById('btn-close');
const btnSave = document.getElementById('btn-save');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnCurrent = document.getElementById('btn-current');
const searchInput = document.getElementById('search');
const navLinks = document.querySelectorAll('.nav a');

// Settings Modal Elements
const settingsModal = document.getElementById('settings-modal');
const btnSettingsClose = document.getElementById('btn-settings-close');
const btnSettingsCancel = document.getElementById('btn-settings-cancel');
const btnSettingsSave = document.getElementById('btn-settings-save');
const settingsTabs = document.querySelectorAll('.settings-tab');
const settingsPanels = document.querySelectorAll('.settings-panel');
const grid = document.querySelector('.grid');

// Notification Elements
const notificationBtn = document.getElementById('notification-btn');
const notificationPanel = document.getElementById('notification-panel');
const notificationBadge = document.getElementById('notification-badge');
const notificationList = document.getElementById('notification-list');
let notificationsReady = false;
const markAllReadBtn = document.getElementById('mark-all-read');
const clearAllNotificationsBtn = document.getElementById('clear-all-notifications');
const viewAllNotificationsBtn = document.getElementById('view-all-notifications');
const filterBtns = document.querySelectorAll('.filter-btn');

// Groups Elements
const groupsModal = document.getElementById('groups-modal');
const btnGroupsClose = document.getElementById('btn-groups-close');
const groupsTabs = document.querySelectorAll('.groups-tab');
const groupsPanels = document.querySelectorAll('.groups-panel');
const btnCreateGroup = document.getElementById('btn-create-group');
const createGroupForm = document.getElementById('create-group-form');
const btnCancelCreate = document.getElementById('btn-cancel-create');
const groupSearch = document.getElementById('group-search');
const filterGroupBtns = document.querySelectorAll('.filter-group-btn');
const colorOptions = document.querySelectorAll('.color-option');

// Group Details Elements
const groupDetailsModal = document.getElementById('group-details-modal');
const btnGroupDetailsClose = document.getElementById('btn-group-details-close');
const groupDetailsTabs = document.querySelectorAll('.group-details-tab');
const groupDetailsPanels = document.querySelectorAll('.group-details-panel');
const btnInviteMember = document.getElementById('btn-invite-member');
const btnAddGroupEvent = document.getElementById('btn-add-group-event');
const btnUploadFile = document.getElementById('btn-upload-file');
const btnLeaveGroup = document.getElementById('btn-leave-group');
const btnDeleteGroup = document.getElementById('btn-delete-group');
const btnCancelSettings = document.getElementById('btn-cancel-settings');
const btnSaveSettings = document.getElementById('btn-save-settings');

// Supabase authentication and shared-group controls
const authModal = document.getElementById('auth-modal');
const authOpenBtn = document.getElementById('auth-open-btn');
const authCloseBtn = document.getElementById('auth-close-btn');
const authForm = document.getElementById('auth-form');
const authSignupBtn = document.getElementById('auth-signup-btn');
const authGoogleBtn = document.getElementById('auth-google-btn');
const authSignoutBtn = document.getElementById('auth-signout-btn');
const authMessage = document.getElementById('auth-message');
const authUserLabel = document.getElementById('auth-user-label');
const groupCloudStatus = document.getElementById('group-cloud-status');
const groupInvitationsList = document.getElementById('group-invitations-list');
let planifyUser = null;

// Courses Elements
const coursesModal = document.getElementById('courses-modal');
const btnCoursesClose = document.getElementById('btn-courses-close');
const coursesTabs = document.querySelectorAll('.courses-tab');
const coursesPanels = document.querySelectorAll('.courses-panel');
const courseSearch = document.getElementById('course-search');
const browseCourseSearch = document.getElementById('browse-course-search');
const filterCourseBtns = document.querySelectorAll('.filter-course-btn');

// Course Details Elements
const courseDetailsModal = document.getElementById('course-details-modal');
const btnCourseDetailsClose = document.getElementById('btn-course-details-close');
const courseDetailsTabs = document.querySelectorAll('.course-details-tab');
const courseDetailsPanels = document.querySelectorAll('.course-details-panel');
const btnContactProfessor = document.getElementById('btn-contact-professor');
const btnDropCourse = document.getElementById('btn-drop-course');
const btnUploadMaterial = document.getElementById('btn-upload-material');
const btnAddAssignment = document.getElementById('btn-add-assignment');
const btnEditCourse = document.getElementById('btn-edit-course');
const courseEditForm = document.getElementById('course-edit-form');

// Scheduling Elements
const btnAddEvent = document.getElementById('btn-add-event');
const btnCalendarViews = document.getElementById('btn-calendar-views');
const eventModal = document.getElementById('event-modal');
const btnEventClose = document.getElementById('btn-event-close');
const eventForm = document.getElementById('event-form');
const btnCancelEvent = document.getElementById('btn-cancel-event');
const calendarViewsModal = document.getElementById('calendar-views-modal');
const btnCalendarViewsClose = document.getElementById('btn-calendar-views-close');
const viewBtns = document.querySelectorAll('.view-btn');
const templateBtns = document.querySelectorAll('.template-btn');
const eventColorOptions = document.querySelectorAll('.color-option.event-color');
const btnCalendarExportIcal = document.getElementById('btn-calendar-export-ical');
const btnTestSound = document.getElementById('btn-test-sound');
const btnSyncGoogle = document.getElementById('btn-sync-google');

// Gestion de la modale
function openModal() {
  modal.classList.add('show');
}

function closeModal() {
  modal.classList.remove('show');
}

function showCourse(name, time, room, teacher) {
  modalTitle.innerText = name;
  modalMuted.innerText = `${time} · ${room} · ${teacher}`;
  openModal();
}

// Événements modale
btnAdd.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
btnSave.addEventListener('click', closeModal);

// Fermer la modale si on clique à l'extérieur
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Données des semaines
let weeks = [
  {
    id: 0,
    dateRange: '28 sept. — 2 oct. 2026',
    days: ['Lundi 28 sept.', 'Mardi 29 sept.', 'Mercredi 30 sept.', 'Jeudi 1 oct.', 'Vendredi 2 oct.'],
    courses: [
      // Time slot 08:00
      { day: 0, time: '08:00', name: 'Thermodynamique', timeRange: '08:00–10:00', room: 'B204', teacher: 'M. Dupont', color: 'blue' },
      { day: 1, time: '08:00', name: 'Mathématiques', timeRange: '08:00–10:00', room: 'B201', color: 'cyan' },
      { day: 2, time: '08:00', name: 'Automatique', timeRange: '08:00–10:00', room: 'B204', color: 'purple' },
      { day: 3, time: '08:00', name: 'Programmation', timeRange: '08:00–10:00', room: 'C102', color: 'purple' },
      { day: 4, time: '08:00', name: 'Mathématiques', timeRange: '08:00–10:00', room: 'B201', color: 'cyan' },
      // Time slot 10:15
      { day: 0, time: '10:15', name: 'Programmation', timeRange: '10:15–12:15', room: 'C102', color: 'purple' },
      { day: 1, time: '10:15', name: 'Anglais ingénieurs', timeRange: '10:15–12:15', room: 'C203', color: 'green' },
      { day: 2, time: '10:15', name: 'Anglais ingénieurs', timeRange: '10:15–12:15', room: 'C203', color: 'green' },
      { day: 3, time: '10:15', name: 'Mécanique', timeRange: '10:15–12:15', room: 'B105', color: 'orange' },
      { day: 4, time: '10:15', name: 'Projet tutoré', timeRange: '10:15–12:15', room: 'C104', color: 'pink' },
      // Time slot 14:00
      { day: 0, time: '14:00', name: 'Mécanique des solides', timeRange: '14:00–16:00', room: 'B105', color: 'orange' },
      { day: 1, time: '14:00', name: 'TP Électronique', timeRange: '14:00–16:00', room: 'A201', color: 'cyan' },
      { day: 2, time: '14:00', name: 'Thermodynamique', timeRange: '14:00–16:00', room: 'B204', color: 'blue' },
      { day: 3, time: '14:00', name: 'Électrotechnique', timeRange: '14:00–16:00', room: 'A203', color: 'pink' },
      { day: 4, time: '14:00', name: 'Anglais ingénieurs', timeRange: '14:00–16:00', room: 'C203', color: 'green' },
      // Time slot 16:15
      { day: 0, time: '16:15', name: 'Anglais ingénieurs', timeRange: '16:15–18:15', room: 'C203', color: 'green' },
      { day: 1, time: '16:15', name: 'Projet tutoré', timeRange: '16:15–18:15', room: 'C104', color: 'purple' },
      { day: 2, time: '16:15', name: 'Sport / Option', timeRange: '16:15–18:15', room: 'Gymnase', color: 'pink' },
      { day: 3, time: '16:15', name: 'TP Automatique', timeRange: '16:15–18:15', room: 'Lab 1', color: 'cyan' },
    ]
  },
  {
    id: 1,
    dateRange: '5 oct. — 9 oct. 2026',
    days: ['Lundi 5 oct.', 'Mardi 6 oct.', 'Mercredi 7 oct.', 'Jeudi 8 oct.', 'Vendredi 9 oct.'],
    courses: [
      // Week 2 courses - example data
      { day: 0, time: '08:00', name: 'Physique quantique', timeRange: '08:00–10:00', room: 'A301', teacher: 'Mme. Martin', color: 'blue' },
      { day: 1, time: '08:00', name: 'Algorithmique', timeRange: '08:00–10:00', room: 'C101', color: 'purple' },
      { day: 2, time: '08:00', name: 'Chimie organique', timeRange: '08:00–10:00', room: 'B301', color: 'green' },
      { day: 3, time: '08:00', name: 'Statistiques', timeRange: '08:00–10:00', room: 'B202', color: 'cyan' },
      { day: 4, time: '08:00', name: 'Électronique', timeRange: '08:00–10:00', room: 'A102', color: 'orange' },
      // Time slot 10:15
      { day: 0, time: '10:15', name: 'Laboratoire physique', timeRange: '10:15–12:15', room: 'Lab 2', color: 'blue' },
      { day: 1, time: '10:15', name: 'Structures de données', timeRange: '10:15–12:15', room: 'C103', color: 'purple' },
      { day: 2, time: '10:15', name: 'Thermochimie', timeRange: '10:15–12:15', room: 'B302', color: 'green' },
      { day: 3, time: '10:15', name: 'Probabilités', timeRange: '10:15–12:15', room: 'B203', color: 'cyan' },
      { day: 4, time: '10:15', name: 'Circuits logiques', timeRange: '10:15–12:15', room: 'A103', color: 'orange' },
      // Time slot 14:00
      { day: 0, time: '14:00', name: 'Mécanique analytique', timeRange: '14:00–16:00', room: 'B106', color: 'orange' },
      { day: 1, time: '14:00', name: 'Programmation avancée', timeRange: '14:00–16:00', room: 'C104', color: 'purple' },
      { day: 2, time: '14:00', name: 'Spectroscopie', timeRange: '14:00–16:00', room: 'Lab 3', color: 'green' },
      { day: 3, time: '14:00', name: 'Analyse numérique', timeRange: '14:00–16:00', room: 'B204', color: 'cyan' },
      { day: 4, time: '14:00', name: 'Automatique linéaire', timeRange: '14:00–16:00', room: 'A204', color: 'pink' },
      // Time slot 16:15
      { day: 0, time: '16:15', name: 'TD Physique', timeRange: '16:15–18:15', room: 'A302', color: 'blue' },
      { day: 1, time: '16:15', name: 'Projet informatique', timeRange: '16:15–18:15', room: 'C105', color: 'purple' },
      { day: 2, time: '16:15', name: 'TD Chimie', timeRange: '16:15–18:15', room: 'B303', color: 'green' },
      { day: 3, time: '16:15', name: 'Sport', timeRange: '16:15–18:15', room: 'Gymnase', color: 'pink' },
    ]
  }
];

const calendarSlotConfigs = {
  standard: [
    { label: '08:00', start: 480, end: 615 },
    { label: '10:15', start: 615, end: 840 },
    { label: '14:00', start: 840, end: 975 },
    { label: '16:15', start: 975, end: 1200 }
  ],
  extended: [
    { label: '08:00', start: 480, end: 600 },
    { label: '10:00', start: 600, end: 720 },
    { label: '12:00', start: 720, end: 840 },
    { label: '14:00', start: 840, end: 960 },
    { label: '16:00', start: 960, end: 1080 },
    { label: '18:00', start: 1080, end: 1200 }
  ],
  compact: [
    { label: 'Matin · 08:00–10:15', start: 480, end: 615 },
    { label: 'Midi · 10:15–14:00', start: 615, end: 840 },
    { label: 'Après-midi · 14:00–20:00', start: 840, end: 1200 }
  ]
};
let timeSlots = calendarSlotConfigs.standard;
let currentWeekIndex = 0;
let calendarReady = false;
let calendarDayOrder = [0, 1, 2, 3, 4]; // Monday-based weekday indexes; 6 represents Sunday.

function getVisibleCalendarDays() {
  const startsOnSunday = currentSettings?.weekStart === 'sunday';
  const showWeekends = currentSettings?.showWeekends !== false;

  if (startsOnSunday) {
    // Keep Sunday visible when it is explicitly selected as the first day,
    // even if Saturday is hidden by the weekends preference.
    return showWeekends ? [6, 0, 1, 2, 3, 4, 5] : [6, 0, 1, 2, 3, 4];
  }

  return showWeekends ? [0, 1, 2, 3, 4, 5, 6] : [0, 1, 2, 3, 4];
}

function getWeekMonday(week) {
  const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  const firstDay = week.days[0].split(' ').slice(1).join(' ');
  const monthIndex = months.findIndex(month => firstDay.includes(month));
  const day = parseInt(firstDay.replace(/\D/g, ''), 10);
  return new Date(2026, monthIndex, day);
}

function getCalendarDateForDay(monday, weekdayIndex) {
  const offset = weekdayIndex === 6
    ? (currentSettings?.weekStart === 'sunday' ? -1 : 6)
    : weekdayIndex;
  const date = new Date(monday);
  date.setDate(date.getDate() + offset);
  return date;
}

function formatCalendarDate(date, options = {}) {
  const locale = currentSettings?.language === 'en' ? 'en-US' : 'fr-FR';
  if (options.weekday) {
    return new Intl.DateTimeFormat(locale, { weekday: options.weekday }).format(date);
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  const format = currentSettings?.dateFormat || 'DD/MM/YYYY';
  if (format === 'MM/DD/YYYY') return options.year ? `${month}/${day}/${year}` : `${month}/${day}`;
  if (format === 'YYYY-MM-DD') return options.year ? `${year}-${month}-${day}` : `${year}-${month}-${day}`;
  return options.year ? `${day}/${month}/${year}` : `${day}/${month}`;
}

function formatCalendarRange(dates) {
  if (!dates.length) return '';
  const first = dates[0];
  const last = dates[dates.length - 1];
  const startLabel = formatCalendarDate(first);
  const endLabel = formatCalendarDate(last, { year: true });
  return `${startLabel} — ${endLabel}`;
}

function formatClock(value) {
  const match = String(value).match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return value;
  const hours = Number(match[1]);
  const minutes = match[2];
  if (currentSettings?.timeFormat !== '12h') {
    return `${String(hours).padStart(2, '0')}:${minutes}`;
  }
  const suffix = hours < 12 ? 'AM' : 'PM';
  const displayHour = hours % 12 || 12;
  return `${displayHour}:${minutes} ${suffix}`;
}

function formatTimeText(value) {
  return String(value).replace(/\b(\d{1,2}:\d{2})\b/g, formatClock);
}

function formatLocalDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function calendarTimeToMinutes(value) {
  const [hours, minutes] = value.slice(0, 5).split(':').map(Number);
  return hours * 60 + minutes;
}

function slotIndexForTime(value) {
  const minutes = calendarTimeToMinutes(value);
  return timeSlots.findIndex((slot, index) =>
    minutes >= slot.start && (minutes < slot.end || index === timeSlots.length - 1)
  );
}

function buildCalendarGrid() {
  grid.replaceChildren();
  calendarDayOrder = getVisibleCalendarDays();
  grid.style.gridTemplateColumns = `72px repeat(${calendarDayOrder.length}, minmax(110px, 1fr))`;
  grid.style.minWidth = `${72 + calendarDayOrder.length * 130}px`;
  const headerTime = document.createElement('div');
  headerTime.className = 'cell head';
  grid.appendChild(headerTime);
  calendarDayOrder.forEach((weekdayIndex, columnIndex) => {
    const header = document.createElement('div');
    header.className = 'cell head day';
    header.id = `day-${columnIndex}`;
    grid.appendChild(header);
  });
  timeSlots.forEach((slot, row) => {
    const timeCell = document.createElement('div');
    timeCell.className = 'cell time';
    timeCell.textContent = formatTimeText(slot.label);
    grid.appendChild(timeCell);
    calendarDayOrder.forEach((weekdayIndex, columnIndex) => {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.slot = String(row);
      cell.dataset.day = String(columnIndex);
      grid.appendChild(cell);
    });
  });
}

// Fonction pour mettre à jour les statistiques
function updateStats(courses) {
  const courseCount = courses.length;
  const totalHours = courses.length * 2; // Assuming each course is 2 hours
  const rooms = new Set(courses.map(c => c.room));
  const roomCount = rooms.size;
  
  // Find next course (simplified - just first course of first day)
  const nextCourse = courses.find(c => c.day === 0);
  const nextTime = nextCourse ? nextCourse.time : '—';
  
  document.getElementById('stat-count').textContent = courseCount;
  document.getElementById('stat-hours').textContent = `${totalHours} h`;
  document.getElementById('stat-rooms').textContent = roomCount;
  document.getElementById('stat-next').textContent = formatClock(nextTime);
}

// Fonction pour afficher une semaine
function renderWeek(weekIndex) {
  const week = weeks[weekIndex];
  if (!week) return;
  buildCalendarGrid();
  
  const monday = getWeekMonday(week);
  const visibleDates = calendarDayOrder.map(weekdayIndex => getCalendarDateForDay(monday, weekdayIndex));
  dateDisplay.textContent = formatCalendarRange(visibleDates);

  // Update header days in the selected order, including weekends when enabled.
  for (let i = 0; i < calendarDayOrder.length; i++) {
    const dayHeader = document.getElementById(`day-${i}`);
    if (dayHeader) {
      const date = visibleDates[i];
      const dayName = formatCalendarDate(date, { weekday: 'long' });
      const dayDate = formatCalendarDate(date, { day: 'numeric', month: 'short' });
      dayHeader.innerHTML = `${dayName}<small>${dayDate}</small>`;
    }
  }
  
  // Clear existing courses (keep headers and time cells)
  const existingCourses = grid.querySelectorAll('.course');
  existingCourses.forEach(course => course.remove());
  
  // Add courses for this week
  week.courses.forEach(course => {
    const timeSlotIndex = slotIndexForTime(course.time);
    if (timeSlotIndex === -1) return;
    const calendarColumn = calendarDayOrder.indexOf(course.day);
    if (calendarColumn === -1) return;
    
    const targetCell = grid.querySelector(`[data-slot="${timeSlotIndex}"][data-day="${calendarColumn}"]`);
    
    if (targetCell) {
      const courseDiv = document.createElement('div');
      courseDiv.className = `course ${course.color}`;
      courseDiv.dataset.name = course.name;
      courseDiv.dataset.time = course.timeRange;
      courseDiv.dataset.room = course.room;
      if (course.teacher) {
        courseDiv.dataset.teacher = course.teacher;
      }
      const courseTitle = document.createElement('strong');
      courseTitle.textContent = course.name;
      const courseTime = document.createElement('small');
      courseTime.textContent = `${formatTimeText(course.timeRange)} · ${course.room}`;
      courseDiv.append(courseTitle, courseTime);
      targetCell.appendChild(courseDiv);
    }
  });
  
  // Add personal events for this week
  addPersonalEventsToCalendar(week);
  
  // Update current week button
  btnCurrent.textContent = weekIndex === 0 ? 'Cette semaine ✓' : 'Cette semaine';
  
  // Update stats
  updateStats(week.courses);
  
  // Reattach event listeners to new courses
  attachCourseListeners();
}

// Add personal events to calendar
function addPersonalEventsToCalendar(week) {
  const monday = getWeekMonday(week);
  const visibleDates = calendarDayOrder.map(weekdayIndex => getCalendarDateForDay(monday, weekdayIndex));
  
  personalEvents.forEach(event => {
    const eventDate = new Date(event.date);
    const columnIndex = visibleDates.findIndex(visibleDate =>
      visibleDate.toDateString() === eventDate.toDateString()
    );
    
    if (columnIndex !== -1) {
      const timeSlotIndex = slotIndexForTime(event.startTime);
      if (timeSlotIndex === -1) return;
      
      const targetCell = grid.querySelector(`[data-slot="${timeSlotIndex}"][data-day="${columnIndex}"]`);
      
      if (targetCell) {
        const eventDiv = document.createElement('div');
        eventDiv.className = `course ${event.color}`;
        eventDiv.dataset.name = event.title;
        eventDiv.dataset.time = `${event.startTime} – ${event.endTime}`;
        eventDiv.dataset.room = event.location;
        eventDiv.dataset.isEvent = 'true';
        eventDiv.innerHTML = `<strong>${event.title}</strong><small>${formatClock(event.startTime)}–${formatClock(event.endTime)} · ${event.location}</small>`;
        targetCell.appendChild(eventDiv);
      }
    }
  });
}

// Navigation semaine
btnPrev.addEventListener('click', () => {
  if (currentWeekIndex > 0) {
    currentWeekIndex--;
    resetSearch();
    renderWeek(currentWeekIndex);
  }
});

btnNext.addEventListener('click', () => {
  if (currentWeekIndex < weeks.length - 1) {
    currentWeekIndex++;
    resetSearch();
    renderWeek(currentWeekIndex);
  }
});

btnCurrent.addEventListener('click', () => {
  currentWeekIndex = 0;
  resetSearch();
  renderWeek(currentWeekIndex);
});

// Recherche dynamique dans le planning
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.course').forEach((course) => {
    const text = course.innerText.toLowerCase();
    course.style.display = text.includes(query) ? 'block' : 'none';
  });
});

// Réinitialiser la recherche lors du changement de semaine
function resetSearch() {
  searchInput.value = '';
  document.querySelectorAll('.course').forEach((course) => {
    course.style.display = 'block';
  });
}

// Fonction pour attacher les écouteurs d'événements aux cours
function attachCourseListeners() {
  document.querySelectorAll('.course').forEach((course) => {
    course.addEventListener('click', () => {
      const name = course.dataset.name || course.querySelector('strong')?.innerText;
      const details = course.dataset.time ? 
        `${course.dataset.time} · ${course.dataset.room} · ${course.dataset.teacher || ''}` : 
        course.querySelector('small')?.innerText;
      
      // Check if it's a personal event
      if (course.dataset.isEvent === 'true') {
        // For events, show in a different way or navigate to event details
        alert(`Événement: ${name}\n${details}`);
      } else {
        modalTitle.innerText = name;
        modalMuted.innerText = details;
        openModal();
      }
    });
  });
}

// Navigation de la barre latérale
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add active class to clicked link
    link.classList.add('active');
    
    // Handle navigation based on page
    switch(page) {
      case 'home':
        // Show home/planning view (current view)
        document.querySelector('.main').style.display = 'block';
        break;
      case 'planning':
        openCalendarViewsModal();
        break;
      case 'courses':
        openCoursesModal();
        break;
      case 'groups':
        openGroupsModal();
        break;
      case 'notifications':
        e.stopPropagation();
        toggleNotificationPanel();
        renderNotifications();
        break;
      case 'settings':
        openSettingsModal();
        break;
      default:
        document.querySelector('.main').style.display = 'block';
    }
  });
});

// ==================== SETTINGS FUNCTIONALITY ====================

// Default settings
const defaultSettings = {
  // User Profile
  name: 'Nicolas Obara',
  level: 'B2',
  group: 'B2 Génie généraliste',
  
  // Display Preferences
  theme: 'light',
  language: 'fr',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: '24h',
  
  // Calendar Settings
  weekStart: 'monday',
  showWeekends: true,
  timeSlots: 'standard',
  colorScheme: 'default',
  
  // Notification Settings
  courseReminders: true,
  remindTime: '15',
  scheduleChanges: true,
  groupNotifications: true,
  
  // Data & Privacy
  groupSharing: 'private',
  
  // App Settings
  startupGroup: 'last',
  autoRefresh: true,
  sounds: false
};

// Load settings from localStorage
function loadSettings() {
  const saved = localStorage.getItem('planifySettings');
  return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
}

// Save settings to localStorage
function saveSettings(settings) {
  localStorage.setItem('planifySettings', JSON.stringify(settings));
}

// Current settings
let currentSettings = loadSettings();

const englishTranslations = {
  'PLANIFY — Planning collaboratif': 'PLANIFY — Collaborative planner',
  'Accueil': 'Home',
  'Planning': 'Schedule',
  '⌂   Accueil': '⌂   Home',
  '📅   Planning': '📅   Schedule',
  '📚   Cours': '📚   Courses',
  '👥   Groupes': '👥   Groups',
  '🔔   Notifications': '🔔   Notifications',
  '⚙️   Paramètres': '⚙️   Settings',
  'Rechercher un cours, une salle, un enseignant...': 'Search for a course, room, or instructor...',
  'Bonjour Nicolas 👋': 'Hello Nicolas 👋',
  'Voici le planning complet de ton groupe.': 'Here is your group’s full schedule.',
  'Cours cette semaine': 'Courses this week',
  'Heures de cours': 'Class hours',
  'Salles utilisées': 'Rooms used',
  'Prochain cours': 'Next class',
  'Cette semaine ✓': 'This week ✓',
  'Cette semaine': 'This week',
  'Étudiant': 'Student',
  '＋ Ajouter un cours': '＋ Add a course',
  '＋ Ajouter un événement': '＋ Add an event',
  'Ajouter un événement': 'Add an event',
  '＋ Créer un groupe': '＋ Create a group',
  '＋ Événement': '＋ Event',
  '📅 Vues': '📅 Views',
  'Sciences': 'Science',
  'Informatique': 'Computer science',
  'Langues': 'Languages',
  'Mécanique': 'Mechanical engineering',
  'Ajouter un cours': 'Add a course',
  'Prototype V1 — le formulaire sera relié à la base de données dans la version backend.': 'Prototype V1 — this form will be connected to the database in the backend version.',
  'Jour et horaire': 'Day and time',
  'Lundi · 08:00–10:00': 'Monday · 08:00–10:00',
  'Paramètres': 'Settings',
  'Profil utilisateur': 'User profile',
  'Préférences d’affichage': 'Display preferences',
  'Affichage': 'Display',
  'Calendrier': 'Calendar',
  'Emploi du temps': 'Schedule',
  'Paramètres du calendrier': 'Calendar settings',
  'Paramètres de notification': 'Notification settings',
  'Notifications de changements d’horaire': 'Schedule change notifications',
  'Notifications de groupe': 'Group notifications',
  'Paramètres de l’application': 'Application settings',
  'Données et confidentialité': 'Data and privacy',
  'Premier jour de la semaine': 'First day of the week',
  'Afficher les week-ends': 'Show weekends',
  'Créneaux par défaut': 'Default time slots',
  'Standard (4 créneaux)': 'Standard (4 time slots)',
  'Étendu (6 créneaux)': 'Extended (6 time slots)',
  'Compact (3 créneaux)': 'Compact (3 time slots)',
  'Schéma de couleurs': 'Color scheme',
  'Format de date': 'Date format',
  'Format de l’heure': 'Time format',
  'Temps avant le rappel': 'Reminder time',
  'Rappels de cours': 'Class reminders',
  'Groupe par défaut au démarrage': 'Default group at startup',
  'Actualisation automatique': 'Automatic refresh',
  'Effets sonores': 'Sound effects',
  'Partage de groupe': 'Group sharing',
  'Confidentialité par défaut des nouveaux groupes': 'Default privacy for new groups',
  "Ce choix s'applique aux nouveaux groupes créés sur cet appareil. Le partage entre comptes n'est pas encore activé.": 'This applies to new groups created on this device. Sharing between accounts is not enabled yet.',
  'Autorise le son après un clic dans cette page. Vérifie que le volume de l’appareil est activé.': 'Sound is enabled after a click on this page. Check that your device volume is on.',
  'Tester le son': 'Test sound',
  'Effacer les données locales': 'Clear local data',
  'Effacer toutes les données': 'Clear all data',
  'Effacer tout': 'Clear all',
  'Tout marquer comme lu': 'Mark all as read',
  'Voir toutes les notifications': 'View all notifications',
  'Tous les jours': 'Every day',
  'Toutes les semaines': 'Every week',
  'Toutes les 2 semaines': 'Every 2 weeks',
  'Tous les mois': 'Every month',
  'Ne pas répéter': 'Does not repeat',
  'Options de calendrier': 'Calendar options',
  'Vue du calendrier': 'Calendar view',
  '📅 Hebdomadaire': '📅 Weekly',
  '📆 Mensuel': '📆 Monthly',
  '📋 Quotidien': '📋 Daily',
  'Exporter l’emploi du temps': 'Export schedule',
  "Exporter l'emploi du temps": 'Export schedule',
  'Exporter en PDF': 'Export PDF',
  'Exporter iCal': 'Export iCal',
  'Export du calendrier': 'Calendar export',
  'Synchroniser Google Calendar': 'Sync Google Calendar',
  'Modèles d’événements': 'Event templates',
  'Créer l’événement': 'Create event',
  '＋ Ajouter': '＋ Add',
  'Annuler': 'Cancel',
  'Enregistrer': 'Save',
  'Créer': 'Create',
  'Paramètres enregistrés avec succès !': 'Settings saved successfully!',
  'Langue': 'Language',
  'Français': 'French',
  'English': 'English',
  'Clair': 'Light',
  'Sombre': 'Dark',
  'Lundi': 'Monday',
  'Matin': 'Morning',
  'Midi': 'Midday',
  'Après-midi': 'Afternoon',
  'Mardi': 'Tuesday',
  'Mercredi': 'Wednesday',
  'Jeudi': 'Thursday',
  'Vendredi': 'Friday',
  'Samedi': 'Saturday',
  'Dimanche': 'Sunday',
  'Notifications': 'Notifications',
  'Tous': 'All',
  'Cours': 'Courses',
  'Groupes': 'Groups',
  'Académique': 'Academic',
  'Système': 'System',
  'Aucun': 'None',
  'Aucun événement de groupe programmé': 'No group events scheduled',
  'Aucun fichier partagé': 'No shared files',
  'Aucun rappel': 'No reminders',
  'Mes Cours': 'My Courses',
  'Mes Groupes': 'My Groups',
  'B2 Génie généraliste': 'B2 General Engineering',
  'B3 Génie généraliste': 'B3 General Engineering',
  'Événements personnels': 'Personal events',
  'Thème': 'Theme',
  'Mathématiques': 'Mathematics',
  'Génie': 'Engineering',
  'Prérequis': 'Prerequisites',
  'Parcourir': 'Browse',
  'Parcourir les cours': 'Browse courses',
  'Parcourir les groupes': 'Browse groups',
  'Créer un nouveau groupe': 'Create a new group',
  'Créer le groupe': 'Create group',
  'Type de groupe *': 'Group type *',
  'Nom du groupe *': 'Group name *',
  'Nom du groupe': 'Group name',
  'Description du groupe': 'Group description',
  'Description du groupe...': 'Group description...',
  'Confidentialité *': 'Privacy *',
  'Inviter des membres': 'Invite members',
  'Quitter le groupe': 'Leave group',
  'Supprimer le groupe': 'Delete group',
  'Membres': 'Members',
  'Fichiers': 'Files',
  'Fichiers partagés': 'Shared files',
  'Modifier le nom': 'Edit name',
  'Modifier la description': 'Edit description',
  'Téléverser un fichier': 'Upload a file',
  'Calendrier du groupe': 'Group calendar',
  'Paramètres du groupe': 'Group settings',
  'Cours inscrits': 'Enrolled courses',
  'Parcourir les cours': 'Browse courses',
  'Inscription aux cours': 'Course registration',
  'Nom du cours': 'Course name',
  'Modifier ce cours': 'Edit this course',
  'Modifier le cours': 'Edit course',
  'Code du cours': 'Course code',
  'Enseignant': 'Instructor',
  'Salle': 'Room',
  'Horaires (un par ligne, ex. Lundi 08:00-10:00)': 'Schedule (one per line, e.g. Monday 08:00-10:00)',
  'Annuler': 'Cancel',
  'Enregistrer les modifications': 'Save changes',
  'Code: PHY101': 'Code: PHY101',
  'Description du cours': 'Course description',
  'Description du cours...': 'Course description...',
  'Emploi du temps du cours': 'Course schedule',
  'Matériaux de cours': 'Course materials',
  'Matériaux': 'Materials',
  'Notes et performances': 'Grades and performance',
  'Devoirs et examens': 'Assignments and exams',
  'Vue d’ensemble': 'Overview',
  'Contacter le professeur': 'Contact professor',
  'Abandonner le cours': 'Drop course',
  'Téléverser': 'Upload',
  'Ajouter un devoir': 'Add an assignment',
  'Aucun cours trouvé.': 'No courses found.',
  'Aucun cours disponible pour l’inscription.': 'No courses available for registration.',
  'Aucun matériel disponible.': 'No materials available.',
  'Aucun devoir programmé.': 'No assignments scheduled.',
  'Aucune décomposition de note disponible.': 'No grade breakdown available.',
  'Vous n’avez pas encore de groupes.': 'You have no groups yet.',
  'Aucun groupe trouvé.': 'No groups found.',
  'Fonctionnalité de parcours à venir.': 'Course browsing coming soon.',
  'Contact du professeur - Fonctionnalité à venir': 'Contact professor — coming soon',
  'Abandon du cours - Fonctionnalité à venir': 'Drop course — coming soon',
  'Téléversement de matériel - Fonctionnalité à venir': 'Upload materials — coming soon',
  'Ajout de devoir - Fonctionnalité à venir': 'Add assignment — coming soon',
  'Invitation de membres - Fonctionnalité à venir': 'Member invitations — coming soon',
  'Ajout d’événement - Fonctionnalité à venir': 'Add event — coming soon',
  'Téléversement de fichiers - Fonctionnalité à venir': 'File uploads — coming soon',
  'Vue quotidienne - Fonctionnalité à venir': 'Daily view — coming soon',
  'Vue mensuelle - Fonctionnalité à venir': 'Monthly view — coming soon',
  'Synchronisation Google Calendar - Fonctionnalité à venir (nécessite OAuth)': 'Google Calendar sync — coming soon (OAuth required)',
  '1 heure avant': '1 hour before',
  '1 heure': '1 hour',
  '30 minutes avant': '30 minutes before',
  '15 minutes avant': '15 minutes before',
  '5 minutes avant': '5 minutes before',
  'Dernier utilisé': 'Last used',
  'Confidentialité': 'Privacy',
  'Conflits détectés': 'Conflicts detected',
  'Actions dangereuses': 'Dangerous actions',
  'Type d’événement *': 'Event type *',
  'Heure de début *': 'Start time *',
  'Heure de fin': 'End time',
  'Date *': 'Date *',
  'Date limite': 'Due date',
  'Titre *': 'Title *',
  'Lieu': 'Location',
  'Récurrence': 'Repeat',
  'Réunion': 'Meeting',
  'Réunion de groupe': 'Group meeting',
  'Session d’étude': 'Study session',
  'Préparation examen': 'Exam preparation',
  'Rendez-vous': 'Appointment',
  'Examen': 'Exam',
  'Étude': 'Study',
  'Sport': 'Sports',
  'Projet': 'Project',
  'Personnel': 'Personal',
  'Social': 'Social',
  'Autre': 'Other',
  'Public': 'Public',
  'Privé': 'Private',
  'Restreint': 'Restricted',
  'Sur invitation': 'By invitation',
  'Bleu': 'Blue',
  'Vert': 'Green',
  'Orange': 'Orange',
  'Rose': 'Pink',
  'Violet': 'Purple',
  'Cyan': 'Cyan',
  'Pastel': 'Pastel',
  'Vibrant': 'Vibrant',
  'Monochrome': 'Monochrome',
  'Défaut': 'Default',
  'Format de date': 'Date format',
  'Niveau d’études': 'Study level',
  'Nom complet': 'Full name',
  'Groupe par défaut': 'Default group',
  'Export PDF': 'Export PDF',
  'PDF': 'PDF',
  'iCal': 'iCal',
  'Crédits': 'Credits',
  'membres': 'members',
  'crédits': 'credits',
  'Paramètres enregistrés avec succès !': 'Settings saved successfully!',
  'Export iCal - Fonctionnalité à venir': 'iCal export — coming soon',
  'Événement:': 'Event:',
  'Données effacées. Redémarrage de l’application...': 'Data cleared. Restarting the application...',
  'Aucun groupe': 'No groups',
  'Aucun cours': 'No courses',
  'moyenne': 'average',
  'Notes': 'Grades',
  'Note actuelle': 'Current grade',
  'Note finale': 'Final grade',
  'Moyenne': 'Average',
  'Devoirs': 'Assignments',
  'Données': 'Data',
  'Inscription': 'Registration',
  'Matière': 'Subject',
  'Emploi du temps': 'Schedule',
  'Pourcentage': 'Percentage',
  'Rang': 'Rank',
  'Rappel': 'Reminder',
  'Salle': 'Room',
  'Semestre': 'Semester',
  "Temps d'étude cette semaine": 'Study time this week',
  "Vue d'ensemble": 'Overview',
  "Période d'inscription: 1-15 Septembre 2026": 'Registration period: 1–15 September 2026',
  'Export iCal - Fonctionnalité à venir': 'iCal export — coming soon',
  "Vous n'avez pas encore de groupes.": 'You have no groups yet.',
  "Aucun cours disponible pour l'inscription.": 'No courses available for registration.',
  "Données effacées. Redémarrage de l'application...": 'Data cleared. Restarting the application...',
  'Inscription réussie': 'Registration successful',
  'Rappel de cours': 'Class reminder',
  'Rappel d’événement': 'Event reminder',
  'Aucun matériel disponible.': 'No materials available.',
  'Aucun devoir programmé.': 'No assignments scheduled.',
  'Aucune décomposition de note disponible.': 'No grade breakdown available.'
};

const orderedEnglishTranslations = Object.entries(englishTranslations)
  .map(([french, english]) => [french.replace(/[’‘]/g, "'"), english])
  .sort(([left], [right]) => right.length - left.length);
const englishTranslationLookup = new Map(orderedEnglishTranslations);
const englishTranslationPattern = new RegExp(
  orderedEnglishTranslations
    .map(([french]) => french.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|'),
  'g'
);

const sourceTextByNode = new WeakMap();
const lastTranslatedTextByNode = new WeakMap();
const sourceAttributesByElement = new WeakMap();
let translationUpdateQueued = false;

function translateFrenchText(text, language) {
  if (language !== 'en') return text;
  return text.replace(/[’‘]/g, "'").replace(
    englishTranslationPattern,
    french => englishTranslationLookup.get(french) || french
  );
}

function applyLanguage(language) {
  document.documentElement.lang = language === 'en' ? 'en' : 'fr';
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  let textNode;

  while ((textNode = walker.nextNode())) {
    const previousSource = sourceTextByNode.get(textNode);
    const previousTranslation = lastTranslatedTextByNode.get(textNode);
    if (previousSource === undefined || textNode.nodeValue !== previousTranslation) {
      sourceTextByNode.set(textNode, textNode.nodeValue);
    }
    const source = sourceTextByNode.get(textNode);
    const translated = translateFrenchText(source, language);
    if (textNode.nodeValue !== translated) textNode.nodeValue = translated;
    lastTranslatedTextByNode.set(textNode, translated);
  }

  document.querySelectorAll('[placeholder], [aria-label], [title]').forEach(element => {
    let sources = sourceAttributesByElement.get(element);
    if (!sources) {
      sources = {};
      sourceAttributesByElement.set(element, sources);
    }
    ['placeholder', 'aria-label', 'title'].forEach(attribute => {
      const current = element.getAttribute(attribute);
      if (current === null) return;
      const state = sources[attribute];
      if (!state || current !== state.translated) {
        sources[attribute] = { original: current, translated: current };
      }
      const entry = sources[attribute];
      entry.translated = translateFrenchText(entry.original, language);
      if (current !== entry.translated) element.setAttribute(attribute, entry.translated);
    });
  });
}

const translationObserver = new MutationObserver(() => {
  if (translationUpdateQueued) return;
  translationUpdateQueued = true;
  queueMicrotask(() => {
    translationUpdateQueued = false;
    applyLanguage(currentSettings.language);
  });
});
translationObserver.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
const originalAlert = window.alert.bind(window);
window.alert = message => originalAlert(translateFrenchText(String(message), currentSettings.language));

// Open settings modal
function openSettingsModal() {
  settingsModal.classList.add('show');
  populateSettingsForm();
}

// Close settings modal
function closeSettingsModal() {
  settingsModal.classList.remove('show');
}

// Populate settings form with current values
function populateSettingsForm() {
  // User Profile
  document.getElementById('setting-name').value = currentSettings.name;
  document.getElementById('setting-level').value = currentSettings.level;
  document.getElementById('setting-group').value = currentSettings.group;
  
  // Display Preferences
  document.querySelector(`input[name="theme"][value="${currentSettings.theme}"]`).checked = true;
  document.getElementById('setting-language').value = currentSettings.language;
  document.getElementById('setting-dateformat').value = currentSettings.dateFormat;
  document.querySelector(`input[name="timeformat"][value="${currentSettings.timeFormat}"]`).checked = true;
  
  // Calendar Settings
  document.querySelector(`input[name="weekstart"][value="${currentSettings.weekStart}"]`).checked = true;
  document.getElementById('setting-showweekends').checked = currentSettings.showWeekends;
  document.getElementById('setting-timeslots').value = currentSettings.timeSlots;
  document.getElementById('setting-colorscheme').value = currentSettings.colorScheme;
  
  // Notification Settings
  document.getElementById('setting-coursereminders').checked = currentSettings.courseReminders;
  document.getElementById('setting-remindertime').value = currentSettings.remindTime;
  document.getElementById('setting-schedulechanges').checked = currentSettings.scheduleChanges;
  document.getElementById('setting-groupnotifications').checked = currentSettings.groupNotifications;
  
  // Data & Privacy
  document.getElementById('setting-groupsharing').value = currentSettings.groupSharing;
  
  // App Settings
  document.getElementById('setting-startupgroup').value = currentSettings.startupGroup;
  document.getElementById('setting-autorefresh').checked = currentSettings.autoRefresh;
  document.getElementById('setting-sounds').checked = currentSettings.sounds;
}

// Get settings from form
function getSettingsFromForm() {
  return {
    // User Profile
    name: document.getElementById('setting-name').value,
    level: document.getElementById('setting-level').value,
    group: document.getElementById('setting-group').value,
    
    // Display Preferences
    theme: document.querySelector('input[name="theme"]:checked').value,
    language: document.getElementById('setting-language').value,
    dateFormat: document.getElementById('setting-dateformat').value,
    timeFormat: document.querySelector('input[name="timeformat"]:checked').value,
    
    // Calendar Settings
    weekStart: document.querySelector('input[name="weekstart"]:checked').value,
    showWeekends: document.getElementById('setting-showweekends').checked,
    timeSlots: document.getElementById('setting-timeslots').value,
    colorScheme: document.getElementById('setting-colorscheme').value,
    
    // Notification Settings
    courseReminders: document.getElementById('setting-coursereminders').checked,
    remindTime: document.getElementById('setting-remindertime').value,
    scheduleChanges: document.getElementById('setting-schedulechanges').checked,
    groupNotifications: document.getElementById('setting-groupnotifications').checked,
    
    // Data & Privacy
    groupSharing: document.getElementById('setting-groupsharing').value,
    
    // App Settings
    startupGroup: document.getElementById('setting-startupgroup').value,
    autoRefresh: document.getElementById('setting-autorefresh').checked,
    sounds: document.getElementById('setting-sounds').checked
  };
}

// Apply settings to the application
function applySettings(settings) {
  applyLanguage(settings.language);

  // Apply theme
  if (settings.theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  
  // Update user profile display
  const bottomDiv = document.querySelector('.bottom');
  const nameParts = settings.name.split(' ');
  const firstName = nameParts.slice(0, -1).join(' ') || settings.name;
  bottomDiv.innerHTML = `${settings.name}<br><span>Étudiant · ${settings.level}</span>`;
  document.querySelector('.user b').textContent = firstName;
  document.querySelector('.avatar').textContent = nameParts
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join('') || 'NO';
  document.querySelector('.hero h1').textContent = settings.language === 'en'
    ? `Hello ${firstName} 👋`
    : `Bonjour ${firstName} 👋`;
  
  // Update group selector
  const groupSelect = document.getElementById('group');
  if (groupSelect) {
    const lastGroup = settings.startupGroup === 'last' ? localStorage.getItem('planifyLastGroup') : null;
    const startupGroup = settings.startupGroup !== 'last' ? settings.startupGroup : (lastGroup || settings.group);
    groupSelect.value = [...groupSelect.options].some(option => option.value === startupGroup)
      ? startupGroup
      : settings.group;
  }
  
  // Apply color scheme
  applyColorScheme(settings.colorScheme);
  
  // Apply time slots
  applyTimeSlots(settings.timeSlots, false);
  applyCalendarPreferences(false);
  if (calendarReady) {
    renderWeek(currentWeekIndex);
    applyColorScheme(settings.colorScheme);
  }
}

document.getElementById('group').addEventListener('change', event => {
  const selectedGroup = event.target.value;
  localStorage.setItem('planifyLastGroup', selectedGroup);
  currentSettings = { ...currentSettings, group: selectedGroup };
  saveSettings(currentSettings);
});

// Apply color scheme
function applyColorScheme(scheme) {
  const colorSchemes = {
    default: {
      blue: '#4f46e5',
      purple: '#8b5cf6',
      green: '#059669',
      orange: '#ea8a18',
      pink: '#db2777',
      cyan: '#0891b2'
    },
    pastel: {
      blue: '#a5b4fc',
      purple: '#c4b5fd',
      green: '#86efac',
      orange: '#fdba74',
      pink: '#f9a8d4',
      cyan: '#67e8f9'
    },
    vibrant: {
      blue: '#3b82f6',
      purple: '#a855f7',
      green: '#22c55e',
      orange: '#f97316',
      pink: '#ec4899',
      cyan: '#06b6d4'
    },
    monochrome: {
      blue: '#64748b',
      purple: '#64748b',
      green: '#64748b',
      orange: '#64748b',
      pink: '#64748b',
      cyan: '#64748b'
    }
  };
  
  const colors = colorSchemes[scheme] || colorSchemes.default;
  
  // We can't directly modify CSS variables from JS easily, 
  // so we'll update the classes that use these colors
  document.querySelectorAll('.course.blue').forEach(el => el.style.backgroundColor = colors.blue);
  document.querySelectorAll('.course.purple').forEach(el => el.style.backgroundColor = colors.purple);
  document.querySelectorAll('.course.green').forEach(el => el.style.backgroundColor = colors.green);
  document.querySelectorAll('.course.orange').forEach(el => el.style.backgroundColor = colors.orange);
  document.querySelectorAll('.course.pink').forEach(el => el.style.backgroundColor = colors.pink);
  document.querySelectorAll('.course.cyan').forEach(el => el.style.backgroundColor = colors.cyan);
  
  // Update legend dots
  document.querySelectorAll('.dot.blue').forEach(el => el.style.backgroundColor = colors.blue);
  document.querySelectorAll('.dot.purple').forEach(el => el.style.backgroundColor = colors.purple);
  document.querySelectorAll('.dot.green').forEach(el => el.style.backgroundColor = colors.green);
  document.querySelectorAll('.dot.orange').forEach(el => el.style.backgroundColor = colors.orange);
  document.querySelectorAll('.dot.pink').forEach(el => el.style.backgroundColor = colors.pink);
  document.querySelectorAll('.dot.cyan').forEach(el => el.style.backgroundColor = colors.cyan);
}

// Apply time slots configuration
function applyTimeSlots(config, shouldRender = true) {
  timeSlots = calendarSlotConfigs[config] || calendarSlotConfigs.standard;
  if (shouldRender && calendarReady) {
    renderWeek(currentWeekIndex);
  }
}

function applyCalendarPreferences(shouldRender = true) {
  calendarDayOrder = getVisibleCalendarDays();
  if (shouldRender && calendarReady) renderWeek(currentWeekIndex);
}

// Settings modal event listeners
btnSettingsClose.addEventListener('click', closeSettingsModal);
btnSettingsCancel.addEventListener('click', closeSettingsModal);

btnSettingsSave.addEventListener('click', () => {
  const newSettings = getSettingsFromForm();
  currentSettings = newSettings;
  saveSettings(newSettings);
  applySettings(newSettings);
  if (notificationsReady) renderNotifications();
  refreshEventReminders();
  closeSettingsModal();
  
  // Show confirmation
  alert('Paramètres enregistrés avec succès !');
});

// Close settings modal if clicking outside
window.addEventListener('click', (e) => {
  if (e.target === settingsModal) closeSettingsModal();
});

// Tab switching
settingsTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.dataset.tab;
    
    // Update tab active states
    settingsTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    // Update panel visibility
    settingsPanels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === `panel-${targetTab}`) {
        panel.classList.add('active');
      }
    });
  });
});

// Export functionality
document.getElementById('btn-export-pdf').addEventListener('click', () => {
  exportScheduleToPdf();
});

document.getElementById('btn-settings-export-ical').addEventListener('click', exportToIcal);
btnTestSound.addEventListener('click', () => {
  playNotificationSound().then(available => {
    if (!available) alert('Le navigateur ne prend pas en charge les effets sonores.');
  });
});
document.getElementById('setting-sounds').addEventListener('change', event => {
  if (event.target.checked) void playNotificationSound();
});

// Clear data functionality
document.getElementById('btn-clear-data').addEventListener('click', () => {
  if (confirm('Êtes-vous sûr de vouloir effacer toutes les données locales ? Cette action est irréversible.')) {
    localStorage.removeItem('planifySettings');
    localStorage.removeItem('planifyEvents');
    localStorage.removeItem('planifyLastGroup');
    localStorage.removeItem('planifyCourses');
    localStorage.removeItem('planifyWeeks');
    localStorage.removeItem('planifyNotifications');
    currentSettings = defaultSettings;
    applySettings(defaultSettings);
    alert('Données effacées. Redémarrage de l\'application...');
    location.reload();
  }
});

// Initialize settings on page load
applySettings(currentSettings);

// ==================== NOTIFICATION SYSTEM ====================

// Notification data structure
const notificationTypes = {
  courses: { icon: '📚', label: 'Cours' },
  groups: { icon: '👥', label: 'Groupes' },
  academic: { icon: '🎓', label: 'Académique' },
  system: { icon: '⚙️', label: 'Système' }
};

// Start empty: only notifications caused by actual app actions are shown.
let notifications = [];

try {
  const storedNotifications = JSON.parse(localStorage.getItem('planifyNotifications') || 'null');
  if (Array.isArray(storedNotifications)) {
    notifications = storedNotifications
      .filter(notification => notification && Number.isFinite(Number(notification.id)) && notification.type)
      .map(notification => ({ ...notification, time: new Date(notification.time) }))
      .filter(notification => !Number.isNaN(notification.time.getTime()));
  }
} catch (error) {
  localStorage.removeItem('planifyNotifications');
}

function saveNotifications() {
  localStorage.setItem('planifyNotifications', JSON.stringify(notifications));
}

let currentFilter = 'all';

function isNotificationEnabled(notification) {
  if (notification.preference) return currentSettings[notification.preference] !== false;
  return notification.type !== 'groups' || currentSettings.groupNotifications;
}

// Format time relative to now
function formatTime(date) {
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  const english = currentSettings.language === 'en';

  if (minutes < 1) return english ? 'Just now' : 'À l\'instant';
  if (minutes < 60) return english ? `${minutes} min ago` : `Il y a ${minutes} min`;
  if (hours < 24) return english ? `${hours} hr ago` : `Il y a ${hours} h`;
  if (days < 7) return english ? `${days} days ago` : `Il y a ${days} j`;
  return date.toLocaleDateString(english ? 'en-US' : 'fr-FR');
}

// Render notifications
function renderNotifications() {
  notificationList.innerHTML = '';

  const filteredNotifications = notifications.filter(notification => {
    return isNotificationEnabled(notification)
      && (currentFilter === 'all' || notification.type === currentFilter);
  });

  if (filteredNotifications.length === 0) {
    notificationList.innerHTML = `
      <div class="notification-empty">
        <div class="notification-empty-icon">🔔</div>
        <p>Aucune notification</p>
      </div>
    `;
    updateBadge();
    return;
  }

  // Sort by time (newest first)
  filteredNotifications.sort((a, b) => b.time - a.time);

  filteredNotifications.forEach(notification => {
    const notificationEl = document.createElement('div');
    notificationEl.className = `notification-item type-${notification.type} ${notification.read ? '' : 'unread'}`;
    notificationEl.dataset.id = notification.id;

    const actionsHtml = notification.actions
      ? `<div class="notification-actions-item">
          ${notification.actions.map(action =>
            `<button type="button" class="notification-action-item-btn">${action}</button>`
          ).join('')}
          <button type="button" class="notification-action-item-btn notification-delete-btn" data-id="${notification.id}">Supprimer</button>
        </div>`
      : '';

    notificationEl.innerHTML = `
      <div class="notification-content">
        <div class="notification-icon">${notification.icon}</div>
        <div class="notification-text">
          <div class="notification-title">${notification.title}</div>
          <div class="notification-message">${notification.message}</div>
          <div class="notification-time">${formatTime(notification.time)}</div>
          ${actionsHtml}
        </div>
      </div>
    `;

    // Mark as read on click
    notificationEl.addEventListener('click', (e) => {
      if (!e.target.classList.contains('notification-delete-btn')) {
        markAsRead(notification.id);
      }
    });

    notificationList.appendChild(notificationEl);
  });

  // Add delete button listeners
  document.querySelectorAll('.notification-delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteNotification(parseInt(btn.dataset.id));
    });
  });

  updateBadge();
}

// Update notification badge
function updateBadge() {
  const unreadCount = notifications.filter(n => !n.read && isNotificationEnabled(n)).length;
  notificationBadge.textContent = unreadCount;

  if (unreadCount === 0) {
    notificationBadge.classList.add('hidden');
  } else {
    notificationBadge.classList.remove('hidden');
  }
}

// Mark notification as read
function markAsRead(id) {
  const notification = notifications.find(n => n.id === id);
  if (notification && !notification.read) {
    notification.read = true;
    saveNotifications();
    renderNotifications();
  }
}

// Mark all notifications as read
function markAllAsRead() {
  notifications.forEach(n => n.read = true);
  saveNotifications();
  renderNotifications();
}

// Delete notification
function deleteNotification(id) {
  notifications = notifications.filter(n => n.id !== id);
  saveNotifications();
  renderNotifications();
}

// Clear all notifications
function clearAllNotifications() {
  if (confirm('Êtes-vous sûr de vouloir effacer toutes les notifications ?')) {
    notifications = [];
    saveNotifications();
    renderNotifications();
  }
}

// Toggle notification panel
function toggleNotificationPanel() {
  const isOpen = notificationPanel.classList.toggle('show');
  notificationBtn.setAttribute('aria-expanded', String(isOpen));
}

// Close notification panel when clicking outside
function closeNotificationPanel(e) {
  if (!notificationPanel.contains(e.target) && !notificationBtn.contains(e.target)) {
    notificationPanel.classList.remove('show');
    notificationBtn.setAttribute('aria-expanded', 'false');
  }
}

// Filter notifications
function filterNotifications(filter) {
  currentFilter = filter;
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderNotifications();
}

// Add notifications only when a real action in the app triggers them.
function addNotification(notification) {
  const preference = notification.preference || (notification.type === 'groups' ? 'groupNotifications' : null);
  if (preference && currentSettings[preference] === false) return;
  if (preference) notification.preference = preference;

  notification.id = Date.now();
  notification.time = new Date();
  notification.read = false;
  notifications.unshift(notification);
  saveNotifications();
  renderNotifications();

  showNotificationToast(notification);
}

// Show notification toast
function showNotificationToast(notification) {
  if (currentSettings.sounds) playNotificationSound();
  const toast = document.createElement('div');
  toast.className = 'notification-toast';
  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-icon">${notification.icon}</div>
      <div class="toast-text">
        <div class="toast-title">${notification.title}</div>
        <div class="toast-message">${notification.message}</div>
      </div>
      <button type="button" class="toast-close">×</button>
    </div>
  `;
  document.body.appendChild(toast);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 5000);

  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });
}

let notificationAudioContext = null;

async function playNotificationSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return false;
    notificationAudioContext ||= new AudioContextClass();
    const context = notificationAudioContext;
    if (context.state === 'suspended') await context.resume();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = 660;
    gain.gain.setValueAtTime(0.12, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.24);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.24);
    return true;
  } catch (error) {
    // Sound is optional; browser audio restrictions should not affect notifications.
    return false;
  }
}

// Notification event listeners
notificationBtn.addEventListener('click', toggleNotificationPanel);
document.addEventListener('click', closeNotificationPanel);
markAllReadBtn.addEventListener('click', markAllAsRead);
clearAllNotificationsBtn.addEventListener('click', clearAllNotifications);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterNotifications(btn.dataset.filter);
  });
});

viewAllNotificationsBtn.addEventListener('click', () => {
  const expanded = notificationPanel.classList.toggle('expanded');
  viewAllNotificationsBtn.textContent = currentSettings.language === 'en'
    ? (expanded ? 'Show less' : 'View all notifications')
    : (expanded ? 'Réduire' : 'Voir toutes les notifications');
});

// Initialize notification system
renderNotifications();
notificationsReady = true;

// ==================== GROUPS SYSTEM ====================

// Group data structure
const groupTypes = {
  academic: { icon: '🎓', label: 'Académique', color: 'blue' },
  study: { icon: '📚', label: 'Étude', color: 'green' },
  project: { icon: '🔧', label: 'Projet', color: 'orange' },
  social: { icon: '🎉', label: 'Social', color: 'pink' }
};

const groupColors = {
  blue: '#4f46e5',
  purple: '#8b5cf6',
  green: '#059669',
  orange: '#ea8a18',
  pink: '#db2777',
  cyan: '#0891b2'
};

// Sample group data
let myGroups = [
  {
    id: 1,
    name: 'B2 Génie généraliste',
    description: 'Groupe principal pour les cours de génie généraliste',
    type: 'academic',
    privacy: 'public',
    color: 'blue',
    members: [
      { id: 1, name: 'Nicolas Obara', role: 'admin', status: 'online' },
      { id: 2, name: 'Marie Dupont', role: 'member', status: 'online' },
      { id: 3, name: 'Pierre Martin', role: 'member', status: 'offline' },
      { id: 4, name: 'Sophie Bernard', role: 'member', status: 'online' }
    ],
    createdAt: new Date('2026-09-01')
  },
  {
    id: 2,
    name: 'Groupe d\'étude Physique',
    description: 'Préparation aux examens de physique',
    type: 'study',
    privacy: 'private',
    color: 'green',
    members: [
      { id: 1, name: 'Nicolas Obara', role: 'admin', status: 'online' },
      { id: 5, name: 'Lucas Petit', role: 'member', status: 'offline' },
      { id: 6, name: 'Emma Leroy', role: 'member', status: 'online' }
    ],
    createdAt: new Date('2026-09-15')
  },
  {
    id: 3,
    name: 'Projet Thermodynamique',
    description: 'Équipe de projet pour le cours de thermodynamique',
    type: 'project',
    privacy: 'private',
    color: 'orange',
    members: [
      { id: 1, name: 'Nicolas Obara', role: 'admin', status: 'online' },
      { id: 2, name: 'Marie Dupont', role: 'member', status: 'online' },
      { id: 7, name: 'Thomas Moreau', role: 'member', status: 'offline' }
    ],
    createdAt: new Date('2026-09-20')
  }
];

let browseGroups = [
  {
    id: 4,
    name: 'Basketball Universitaire',
    description: 'Équipe de basketball de l\'université',
    type: 'social',
    privacy: 'public',
    color: 'pink',
    members: 15,
    createdAt: new Date('2026-08-15')
  },
  {
    id: 5,
    name: 'Chimie Organique Study',
    description: 'Groupe d\'étude pour chimie organique',
    type: 'study',
    privacy: 'public',
    color: 'green',
    members: 8,
    createdAt: new Date('2026-09-10')
  },
  {
    id: 6,
    name: 'Mathématiques Avancées',
    description: 'Pour les étudiants avancés en mathématiques',
    type: 'academic',
    privacy: 'invite-only',
    color: 'purple',
    members: 12,
    createdAt: new Date('2026-09-05')
  }
];

const localDemoMyGroups = JSON.parse(JSON.stringify(myGroups));
const localDemoBrowseGroups = JSON.parse(JSON.stringify(browseGroups));

let currentGroupFilter = 'all';
let selectedGroupId = null;

// Open groups modal
function openGroupsModal() {
  groupsModal.classList.add('show');
  renderMyGroups();
  renderBrowseGroups();
  if (planifyUser) {
    refreshCloudGroups().catch(showCloudError);
    refreshPendingGroupInvitations().catch(showCloudError);
  }
}

// Close groups modal
function closeGroupsModal() {
  groupsModal.classList.remove('show');
}

// Open group details modal
function openGroupDetailsModal(groupId) {
  selectedGroupId = groupId;
  const group = myGroups.find(g => g.id === groupId);
  if (!group) return;

  // Populate group details
  document.getElementById('detail-group-name').textContent = group.name;
  document.getElementById('detail-group-description').textContent = group.description;
  document.getElementById('detail-group-type').textContent = groupTypes[group.type]?.label || 'Groupe';
  document.getElementById('detail-group-members').textContent = `${group.members.length} membres`;
  document.getElementById('detail-group-privacy').textContent = getPrivacyLabel(group.privacy);

  const groupIcon = document.getElementById('detail-group-icon');
  groupIcon.textContent = groupTypes[group.type]?.icon || '👥';
  groupIcon.style.background = groupColors[group.color] || groupColors.blue;

  // Populate members list
  if (planifyUser) {
    group.members = [];
    document.getElementById('group-members-list').innerHTML = '<p class="muted">Chargement des membres…</p>';
    loadCloudGroupMembers(group).then(() => {
      if (selectedGroupId === group.id) {
        renderGroupMembers(group);
        document.getElementById('detail-group-members').textContent = `${group.members.length} membres`;
      }
    }).catch(showCloudError);
  } else renderGroupMembers(group);

  // Show first tab
  showGroupDetailsTab('members');

  groupDetailsModal.classList.add('show');
}

// Close group details modal
function closeGroupDetailsModal() {
  groupDetailsModal.classList.remove('show');
  selectedGroupId = null;
}

// Get privacy label
function getPrivacyLabel(privacy) {
  const labels = {
    public: 'Public',
    private: 'Privé',
    'invite-only': 'Sur invitation'
  };
  return labels[privacy] || privacy;
}

// Render my groups
function renderMyGroups() {
  const myGroupsList = document.getElementById('my-groups-list');
  myGroupsList.innerHTML = '';

  if (myGroups.length === 0) {
    myGroupsList.innerHTML = '<p class="muted">Vous n\'avez pas encore de groupes.</p>';
    return;
  }

  myGroups.forEach(group => {
    const groupCard = createGroupCard(group, true);
    myGroupsList.appendChild(groupCard);
  });
}

// Render browse groups
function renderBrowseGroups() {
  const browseGroupsList = document.getElementById('browse-groups-list');
  browseGroupsList.innerHTML = '';

  const filteredGroups = currentGroupFilter === 'all'
    ? browseGroups
    : browseGroups.filter(g => g.type === currentGroupFilter);

  if (filteredGroups.length === 0) {
    browseGroupsList.innerHTML = '<p class="muted">Aucun groupe trouvé.</p>';
    return;
  }

  filteredGroups.forEach(group => {
    const groupCard = createGroupCard(group, false);
    browseGroupsList.appendChild(groupCard);
  });
}

// Create group card element
function createGroupCard(group, isMyGroup) {
  const card = document.createElement('div');
  card.className = 'group-card';
  card.dataset.groupId = group.id;

  const typeInfo = groupTypes[group.type] || groupTypes.academic;
  const memberCount = isMyGroup ? group.members.length : group.members;
  const icon = document.createElement('div');
  icon.className = 'group-icon';
  icon.textContent = typeInfo.icon;
  icon.style.background = `${groupColors[group.color] || groupColors.blue}20`;
  icon.style.color = groupColors[group.color] || groupColors.blue;
  const info = document.createElement('div');
  info.className = 'group-info';
  const name = document.createElement('div');
  name.className = 'group-name';
  name.textContent = group.name;
  const description = document.createElement('div');
  description.className = 'group-description';
  description.textContent = group.description || '';
  const meta = document.createElement('div');
  meta.className = 'group-meta';
  const type = document.createElement('span');
  type.className = `group-badge ${group.type || 'academic'}`;
  type.textContent = typeInfo.label;
  const count = document.createElement('span');
  count.textContent = memberCount === null ? 'Membres' : `${memberCount} membres`;
  const privacy = document.createElement('span');
  privacy.textContent = getPrivacyLabel(group.privacy);
  meta.append(type, count, privacy);
  info.append(name, description, meta);
  card.append(icon, info);

  card.addEventListener('click', () => {
    if (isMyGroup) {
      openGroupDetailsModal(group.id);
    } else {
      joinGroup(group.id);
    }
  });

  return card;
}

// Render group members
function renderGroupMembers(group) {
  const membersList = document.getElementById('group-members-list');
  membersList.innerHTML = '';

  if (!group.members.length) {
    membersList.innerHTML = '<p class="muted">Aucun membre à afficher.</p>';
    return;
  }
  group.members.forEach(member => {
    const memberItem = document.createElement('div');
    memberItem.className = 'member-item';

    const initials = member.name.split(' ').map(n => n[0]).join('');

    const avatar = document.createElement('div');
    avatar.className = 'member-avatar';
    avatar.textContent = initials;
    const info = document.createElement('div');
    info.className = 'member-info';
    const name = document.createElement('div');
    name.className = 'member-name';
    name.textContent = member.name;
    const role = document.createElement('div');
    role.className = 'member-role';
    role.textContent = ['admin', 'owner'].includes(member.role) ? 'Administrateur' : 'Membre';
    info.append(name, role);
    memberItem.append(avatar, info);

    membersList.appendChild(memberItem);
  });
}

// Join group
function joinGroup(groupId) {
  const group = browseGroups.find(g => g.id === groupId);
  if (!group) return;

  if (planifyUser) {
    if (group.privacy !== 'public') {
      alert('Ce groupe est privé. Demande une invitation à un administrateur.');
      return;
    }
    if (!confirm(`Voulez-vous rejoindre le groupe « ${group.name} » ?`)) return;
    joinCloudGroup(groupId).catch(showCloudError);
    return;
  }

  if (confirm(`Voulez-vous rejoindre le groupe "${group.name}" ?`)) {
    // Add to my groups
    const newGroup = {
      ...group,
      members: [
        { id: 1, name: 'Nicolas Obara', role: 'member', status: 'online' }
      ]
    };
    myGroups.push(newGroup);

    // Remove from browse groups
    browseGroups = browseGroups.filter(g => g.id !== groupId);

    // Add notification
    addNotification({
      type: 'groups',
      icon: '👥',
      title: 'Groupe rejoint',
      message: `Vous avez rejoint le groupe "${group.name}"`,
      actions: ['Voir le groupe']
    });

    renderMyGroups();
    renderBrowseGroups();
    alert(`Vous avez rejoint le groupe "${group.name}" !`);
  }
}

// Create group
function createGroup(event) {
  event.preventDefault();

  if (planifyUser) {
    createCloudGroup().catch(showCloudError);
    return;
  }

  const name = document.getElementById('group-name').value;
  const description = document.getElementById('group-description').value;
  const type = document.getElementById('group-type').value;
  const privacy = document.querySelector('input[name="group-privacy"]:checked').value;
  const color = document.getElementById('group-color').value;

  const newGroup = {
    id: Date.now(),
    name,
    description,
    type,
    privacy,
    color,
    members: [
      { id: 1, name: 'Nicolas Obara', role: 'admin', status: 'online' }
    ],
    createdAt: new Date()
  };

  myGroups.push(newGroup);

  // Add notification
  addNotification({
    type: 'groups',
    icon: '👥',
    title: 'Groupe créé',
    message: `Vous avez créé le groupe "${name}"`,
    actions: ['Voir le groupe']
  });

  // Reset form and show my groups
  createGroupForm.reset();
  document.getElementById('group-color').value = 'blue';
  colorOptions.forEach(opt => opt.classList.remove('selected'));
  document.querySelector('.color-option[data-color="blue"]').classList.add('selected');

  showGroupsTab('my-groups');
  renderMyGroups();

  alert(`Le groupe "${name}" a été créé avec succès !`);
}

// Show groups tab
function showGroupsTab(tabName) {
  if (tabName === 'create') {
    const privacyValue = currentSettings.groupSharing === 'restricted'
      ? 'invite-only'
      : currentSettings.groupSharing;
    const privacyOption = document.querySelector(`input[name="group-privacy"][value="${privacyValue}"]`);
    if (privacyOption) privacyOption.checked = true;
  }

  groupsTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });

  groupsPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === `panel-${tabName}`);
  });
}

// Show group details tab
function showGroupDetailsTab(tabName) {
  groupDetailsTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });

  groupDetailsPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === `group-detail-panel-${tabName}`);
  });
}

// Filter browse groups
function filterBrowseGroups(filter) {
  currentGroupFilter = filter;
  filterGroupBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderBrowseGroups();
}

// Cloud collaboration: authenticated accounts use Supabase; local demo data stays device-only.
function showCloudError(error) {
  console.error('Planify cloud operation failed:', error);
  const message = error?.message || 'Une erreur est survenue. Vérifie la configuration Supabase.';
  if (groupCloudStatus) groupCloudStatus.textContent = `Connexion cloud : ${message}`;
  alert(message);
}

function normalizeCloudGroup(row) {
  const memberRows = row.group_members || [];
  return {
    id: row.id,
    name: row.name,
    description: row.description || '',
    type: row.group_type || 'academic',
    privacy: row.privacy || 'private',
    color: ({ academic: 'blue', study: 'green', project: 'orange', social: 'pink' })[row.group_type] || 'blue',
    members: memberRows.map(member => ({ id: member.user_id, name: member.name || member.user_id, role: member.role })),
    createdAt: new Date(row.created_at)
  };
}

async function refreshCloudGroups() {
  if (!planifyUser || !window.planifySupabase) return;
  const client = window.planifySupabase;
  const { data, error } = await client.from('groups')
    .select('id,name,description,group_type,privacy,created_at,group_members(user_id,role)')
    .order('created_at', { ascending: false });
  if (error) throw error;
  myGroups = (data || []).map(normalizeCloudGroup);
  const memberGroupIds = new Set(myGroups.map(group => group.id));
  const { data: publicRows, error: browseError } = await client.from('groups')
    .select('id,name,description,group_type,privacy,created_at,group_members(user_id)')
    .eq('privacy', 'public')
    .order('created_at', { ascending: false });
  if (browseError) throw browseError;
  browseGroups = (publicRows || []).filter(row => !memberGroupIds.has(row.id)).map(row => ({
    ...normalizeCloudGroup(row),
    members: null
  }));
  if (groupCloudStatus) groupCloudStatus.textContent = `Connecté : les groupes sont partagés avec ${planifyUser.email}.`;
  renderMyGroups();
  renderBrowseGroups();
}

async function loadCloudGroupMembers(group) {
  const client = window.planifySupabase;
  const { data: rows, error } = await client.from('group_members')
    .select('user_id,role').eq('group_id', group.id);
  if (error) throw error;
  const ids = (rows || []).map(row => row.user_id);
  let profiles = [];
  if (ids.length) {
    const { data, error: profileError } = await client.from('profiles')
      .select('user_id,email,display_name').in('user_id', ids);
    if (profileError) throw profileError;
    profiles = data || [];
  }
  const byId = new Map(profiles.map(profile => [profile.user_id, profile]));
  group.members = (rows || []).map(member => {
    const profile = byId.get(member.user_id);
    return {
      id: member.user_id,
      name: profile?.display_name || profile?.email || 'Membre',
      role: member.role
    };
  });
}

async function createCloudGroup() {
  const client = window.planifySupabase;
  const name = document.getElementById('group-name').value.trim();
  const description = document.getElementById('group-description').value.trim();
  const group_type = document.getElementById('group-type').value;
  const privacy = document.querySelector('input[name="group-privacy"]:checked').value;
  if (!name || name.length > 120) throw new Error('Le nom du groupe doit contenir entre 1 et 120 caractères.');
  const { error } = await client.from('groups').insert({
    name, description, group_type, privacy, owner_id: planifyUser.id
  });
  if (error) throw error;
  createGroupForm.reset();
  document.getElementById('group-color').value = 'blue';
  showGroupsTab('my-groups');
  await refreshCloudGroups();
  addNotification({ type: 'groups', icon: '👥', title: 'Groupe créé', message: `Le groupe « ${name} » est partagé dans Planify.`, actions: [] });
}

async function joinCloudGroup(groupId) {
  const { error } = await window.planifySupabase.rpc('join_public_group', { target_group: groupId });
  if (error) throw error;
  await refreshCloudGroups();
  addNotification({ type: 'groups', icon: '👥', title: 'Groupe rejoint', message: 'Tu as rejoint le groupe partagé.', actions: [] });
}

async function refreshPendingGroupInvitations() {
  if (!planifyUser || !groupInvitationsList) return;
  const { data, error } = await window.planifySupabase.rpc('list_my_group_invitations');
  if (error) throw error;
  groupInvitationsList.replaceChildren();
  if (!data?.length) {
    groupInvitationsList.hidden = true;
    return;
  }
  groupInvitationsList.hidden = false;
  const heading = document.createElement('strong');
  heading.textContent = 'Invitations reçues';
  groupInvitationsList.appendChild(heading);
  data.forEach(invitation => {
    const row = document.createElement('div');
    row.className = 'group-invitation-row';
    const label = document.createElement('span');
    label.textContent = invitation.group_name;
    const accept = document.createElement('button');
    accept.type = 'button';
    accept.className = 'btn primary';
    accept.textContent = 'Accepter';
    accept.addEventListener('click', async () => {
      accept.disabled = true;
      const { error: acceptError } = await window.planifySupabase.rpc('accept_group_invitation', { target_invitation: invitation.invitation_id });
      if (acceptError) {
        accept.disabled = false;
        showCloudError(acceptError);
        return;
      }
      await refreshPendingGroupInvitations();
      await refreshCloudGroups();
    });
    row.append(label, accept);
    groupInvitationsList.appendChild(row);
  });
}

async function inviteCloudMember() {
  if (!planifyUser) {
    alert('Connecte-toi pour inviter une personne dans un groupe partagé.');
    authModal.classList.add('show');
    return;
  }
  const group = myGroups.find(item => item.id === selectedGroupId);
  if (!group) return;
  const email = prompt('Adresse e-mail de la personne à inviter :');
  if (!email) return;
  const normalizedEmail = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    alert('Saisis une adresse e-mail valide.');
    return;
  }
  const { data, error } = await window.planifySupabase.functions.invoke('invite-group-member', {
    body: { groupId: group.id, email: normalizedEmail }
  });
  if (error) throw error;
  alert(data?.emailSent
    ? `Invitation envoyée à ${normalizedEmail}.`
    : `Invitation enregistrée pour ${normalizedEmail}. Si cette adresse possède déjà un compte, la personne la verra dans Planify à sa prochaine connexion.`);
}

function setAuthState(user) {
  planifyUser = user || null;
  authOpenBtn.textContent = planifyUser ? 'Compte' : 'Connexion';
  authUserLabel.textContent = planifyUser ? (planifyUser.email || 'Connecté') : 'Local';
  document.getElementById('auth-modal-title').textContent = planifyUser ? 'Compte Planify' : 'Connexion à Planify';
  authForm.hidden = Boolean(planifyUser);
  authGoogleBtn.hidden = Boolean(planifyUser);
  authSignoutBtn.hidden = !planifyUser;
  if (groupCloudStatus) {
    groupCloudStatus.textContent = planifyUser
      ? `Connecté : ${planifyUser.email}. Les groupes sont synchronisés avec Supabase.`
      : 'Mode local : les groupes affichés sur cet appareil ne sont pas partagés.';
  }
}

function initializePlanifyAuth() {
  const client = window.planifySupabase;
  if (!client) {
    authOpenBtn.disabled = true;
    authOpenBtn.title = 'La bibliothèque Supabase ne s’est pas chargée.';
    return;
  }
  authOpenBtn.addEventListener('click', () => {
    authMessage.textContent = '';
    authModal.classList.add('show');
  });
  authCloseBtn.addEventListener('click', () => authModal.classList.remove('show'));
  authModal.addEventListener('click', event => {
    if (event.target === authModal) authModal.classList.remove('show');
  });
  authForm.addEventListener('submit', async event => {
    event.preventDefault();
    const submit = document.getElementById('auth-submit-btn');
    submit.disabled = true;
    authMessage.textContent = 'Connexion en cours…';
    const { error } = await client.auth.signInWithPassword({
      email: document.getElementById('auth-email').value.trim(),
      password: document.getElementById('auth-password').value
    });
    submit.disabled = false;
    authMessage.textContent = error ? error.message : 'Connexion réussie.';
  });
  authSignupBtn.addEventListener('click', async () => {
    authSignupBtn.disabled = true;
    authMessage.textContent = 'Création du compte…';
    const emailInput = document.getElementById('auth-email');
    const passwordInput = document.getElementById('auth-password');
    if (!emailInput.reportValidity() || !passwordInput.reportValidity()) {
      authSignupBtn.disabled = false;
      authMessage.textContent = '';
      return;
    }
    const { data, error } = await client.auth.signUp({
      email: emailInput.value.trim(),
      password: passwordInput.value,
      options: { emailRedirectTo: window.location.href }
    });
    authSignupBtn.disabled = false;
    authMessage.textContent = error
      ? error.message
      : (data.session ? 'Compte créé et connecté.' : 'Compte créé. Vérifie ta boîte e-mail pour confirmer l’adresse.');
  });
  authGoogleBtn.addEventListener('click', async () => {
    authMessage.textContent = 'Ouverture de Google…';
    const { error } = await client.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.href }
    });
    if (error) authMessage.textContent = error.message;
  });
  authSignoutBtn.addEventListener('click', async () => {
    const { error } = await client.auth.signOut();
    authMessage.textContent = error ? error.message : 'Déconnexion effectuée.';
    if (!error) authModal.classList.remove('show');
  });
  client.auth.onAuthStateChange((_event, session) => {
    setAuthState(session?.user || null);
    if (session?.user) {
      window.setTimeout(() => {
        refreshCloudGroups().catch(showCloudError);
        refreshPendingGroupInvitations().catch(showCloudError);
      }, 0);
    } else {
      myGroups = JSON.parse(JSON.stringify(localDemoMyGroups));
      browseGroups = JSON.parse(JSON.stringify(localDemoBrowseGroups));
      renderMyGroups();
      renderBrowseGroups();
    }
  });
}

initializePlanifyAuth();

// Groups event listeners
btnGroupsClose.addEventListener('click', closeGroupsModal);
btnGroupDetailsClose.addEventListener('click', closeGroupDetailsModal);

groupsTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    showGroupsTab(tab.dataset.tab);
  });
});

groupDetailsTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    showGroupDetailsTab(tab.dataset.tab);
  });
});

btnCreateGroup.addEventListener('click', () => {
  showGroupsTab('create');
});

createGroupForm.addEventListener('submit', createGroup);

btnCancelCreate.addEventListener('click', () => {
  createGroupForm.reset();
  showGroupsTab('my-groups');
});

filterGroupBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBrowseGroups(btn.dataset.filter);
  });
});

colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    colorOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    document.getElementById('group-color').value = option.dataset.color;
  });
});

// Initialize color selection
const groupColorOptions = document.querySelectorAll('#create-group-form .color-option');
if (groupColorOptions.length > 0) {
  groupColorOptions.forEach(opt => opt.classList.remove('selected'));
  document.querySelector('#create-group-form .color-option[data-color="blue"]').classList.add('selected');
}

// Group invitations are sent through a server-side Supabase Edge Function.
btnInviteMember.addEventListener('click', () => {
  inviteCloudMember().catch(showCloudError);
});

btnAddGroupEvent.addEventListener('click', () => {
  alert('Ajout d\'événement - Fonctionnalité à venir');
});

btnUploadFile.addEventListener('click', () => {
  alert('Téléversement de fichiers - Fonctionnalité à venir');
});

btnLeaveGroup.addEventListener('click', () => {
  if (confirm('Êtes-vous sûr de vouloir quitter ce groupe ?')) {
    alert('Quitter le groupe - Fonctionnalité à venir');
  }
});

btnDeleteGroup.addEventListener('click', () => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce groupe ? Cette action est irréversible.')) {
    alert('Suppression du groupe - Fonctionnalité à venir');
  }
});

btnCancelSettings.addEventListener('click', () => {
  alert('Annulation des modifications - Fonctionnalité à venir');
});

btnSaveSettings.addEventListener('click', () => {
  alert('Enregistrement des paramètres - Fonctionnalité à venir');
});

groupSearch.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  // Simple search implementation
  if (query) {
    const filtered = browseGroups.filter(g =>
      g.name.toLowerCase().includes(query) ||
      g.description.toLowerCase().includes(query)
    );
    // Temporary render for search
    const browseGroupsList = document.getElementById('browse-groups-list');
    browseGroupsList.innerHTML = '';
    filtered.forEach(group => {
      const groupCard = createGroupCard(group, false);
      browseGroupsList.appendChild(groupCard);
    });
  } else {
    renderBrowseGroups();
  }
});

// ==================== COURSES SYSTEM ====================

// Course data structure
const courseCategories = {
  sciences: { icon: '🔬', label: 'Sciences', color: 'blue' },
  math: { icon: '📐', label: 'Mathématiques', color: 'cyan' },
  languages: { icon: '🌍', label: 'Langues', color: 'green' },
  engineering: { icon: '⚙️', label: 'Génie', color: 'orange' }
};

const gradeScale = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'D-': 0.7,
  'F': 0.0
};

// Sample course data based on existing calendar
let myCourses = [
  {
    id: 1,
    code: 'PHY201',
    name: 'Thermodynamique',
    instructor: 'M. Dupont',
    credits: 3,
    category: 'sciences',
    room: 'B204',
    schedule: [
      { day: 'Lundi', time: '08:00-10:00' },
      { day: 'Mercredi', time: '14:00-16:00' }
    ],
    grade: 'B+',
    gradePercentage: 82,
    description: 'Étude des principes de la thermodynamique, des lois de la thermodynamique et de leurs applications aux systèmes physiques.',
    prerequisites: 'PHY101',
    semester: 'Automne 2026',
    materials: [
      { name: 'Syllabus.pdf', size: '245 KB' },
      { name: 'Chapitre1.pdf', size: '1.2 MB' }
    ],
    assignments: [
      { name: 'Devoir 1', due: '2026-10-15', status: 'pending', grade: null },
      { name: 'Examen mi-semestre', due: '2026-10-20', status: 'pending', grade: null }
    ],
    gradeBreakdown: [
      { name: 'Devoirs', weight: 30, score: 85 },
      { name: 'Examens', weight: 50, score: 80 },
      { name: 'Participation', weight: 20, score: 82 }
    ]
  },
  {
    id: 2,
    code: 'MAT202',
    name: 'Mathématiques',
    instructor: 'Mme. Martin',
    credits: 4,
    category: 'math',
    room: 'B201',
    schedule: [
      { day: 'Lundi', time: '08:00-10:00' },
      { day: 'Mardi', time: '08:00-10:00' },
      { day: 'Vendredi', time: '08:00-10:00' }
    ],
    grade: 'A-',
    gradePercentage: 90,
    description: 'Mathématiques avancées incluant le calcul différentiel et intégral, les équations différentielles et l\'algèbre linéaire.',
    prerequisites: 'MAT101',
    semester: 'Automne 2026',
    materials: [
      { name: 'Formulaire.pdf', size: '180 KB' },
      { name: 'Exercices.pdf', size: '2.5 MB' }
    ],
    assignments: [
      { name: 'Problème set 1', due: '2026-10-01', status: 'completed', grade: 95 },
      { name: 'Problème set 2', due: '2026-10-08', status: 'completed', grade: 88 }
    ],
    gradeBreakdown: [
      { name: 'Devoirs', weight: 40, score: 92 },
      { name: 'Examens', weight: 40, score: 88 },
      { name: 'Quiz', weight: 20, score: 90 }
    ]
  },
  {
    id: 3,
    code: 'AUT201',
    name: 'Automatique',
    instructor: 'M. Bernard',
    credits: 3,
    category: 'engineering',
    room: 'B204',
    schedule: [
      { day: 'Mardi', time: '08:00-10:00' }
    ],
    grade: 'B',
    gradePercentage: 78,
    description: 'Introduction aux systèmes de contrôle, aux boucles de rétroaction et à la théorie de la commande automatique.',
    prerequisites: 'PHY101, MAT101',
    semester: 'Automne 2026',
    materials: [
      { name: 'Notes de cours.pdf', size: '3.1 MB' }
    ],
    assignments: [
      { name: 'Lab 1', due: '2026-10-05', status: 'completed', grade: 82 },
      { name: 'Lab 2', due: '2026-10-12', status: 'pending', grade: null }
    ],
    gradeBreakdown: [
      { name: 'Laboratoires', weight: 50, score: 75 },
      { name: 'Examen final', weight: 50, score: 81 }
    ]
  },
  {
    id: 4,
    code: 'INF201',
    name: 'Programmation',
    instructor: 'Mme. Leroy',
    credits: 4,
    category: 'engineering',
    room: 'C102',
    schedule: [
      { day: 'Mercredi', time: '08:00-10:00' },
      { day: 'Mardi', time: '10:15-12:15' }
    ],
    grade: 'A',
    gradePercentage: 95,
    description: 'Programmation avancée en Python et C++, structures de données, algorithmes et conception de logiciels.',
    prerequisites: 'INF101',
    semester: 'Automne 2026',
    materials: [
      { name: 'Python_guide.pdf', size: '1.8 MB' },
      { name: 'C++_basics.pdf', size: '2.2 MB' }
    ],
    assignments: [
      { name: 'Projet 1', due: '2026-09-25', status: 'completed', grade: 98 },
      { name: 'Projet 2', due: '2026-10-10', status: 'pending', grade: null }
    ],
    gradeBreakdown: [
      { name: 'Projets', weight: 60, score: 96 },
      { name: 'Examens', weight: 40, score: 94 }
    ]
  },
  {
    id: 5,
    code: 'ANG201',
    name: 'Anglais ingénieurs',
    instructor: 'M. Smith',
    credits: 2,
    category: 'languages',
    room: 'C203',
    schedule: [
      { day: 'Mardi', time: '10:15-12:15' },
      { day: 'Mercredi', time: '10:15-12:15' },
      { day: 'Jeudi', time: '14:00-16:00' },
      { day: 'Vendredi', time: '14:00-16:00' }
    ],
    grade: 'A-',
    gradePercentage: 88,
    description: 'Anglais technique pour ingénieurs, communication scientifique et présentations professionnelles.',
    prerequisites: 'Aucun',
    semester: 'Automne 2026',
    materials: [
      { name: 'Technical_Writing.pdf', size: '890 KB' }
    ],
    assignments: [
      { name: 'Présentation orale', due: '2026-10-18', status: 'pending', grade: null }
    ],
    gradeBreakdown: [
      { name: 'Oral', weight: 50, score: 85 },
      { name: 'Écrit', weight: 50, score: 91 }
    ]
  },
  {
    id: 6,
    code: 'MEC201',
    name: 'Mécanique',
    instructor: 'M. Petit',
    credits: 3,
    category: 'engineering',
    room: 'B105',
    schedule: [
      { day: 'Jeudi', time: '10:15-12:15' },
      { day: 'Lundi', time: '14:00-16:00' }
    ],
    grade: 'B+',
    gradePercentage: 85,
    description: 'Mécanique classique, cinématique, dynamique et statique des solides et des fluides.',
    prerequisites: 'PHY101, MAT101',
    semester: 'Automne 2026',
    materials: [
      { name: 'Mécanique_basics.pdf', size: '2.1 MB' }
    ],
    assignments: [
      { name: 'Devoir 1', due: '2026-10-02', status: 'completed', grade: 87 }
    ],
    gradeBreakdown: [
      { name: 'Devoirs', weight: 30, score: 82 },
      { name: 'Examens', weight: 70, score: 86 }
    ]
  },
  {
    id: 7,
    code: 'ELE201',
    name: 'TP Électronique',
    instructor: 'Mme. Dubois',
    credits: 2,
    category: 'engineering',
    room: 'A201',
    schedule: [
      { day: 'Mardi', time: '14:00-16:00' }
    ],
    grade: 'A',
    gradePercentage: 92,
    description: 'Travaux pratiques en électronique analogique et numérique, circuits et composants.',
    prerequisites: 'PHY101',
    semester: 'Automne 2026',
    materials: [
      { name: 'Lab_Manual.pdf', size: '1.5 MB' }
    ],
    assignments: [
      { name: 'Lab 1', due: '2026-09-20', status: 'completed', grade: 95 },
      { name: 'Lab 2', due: '2026-09-27', status: 'completed', grade: 90 }
    ],
    gradeBreakdown: [
      { name: 'Laboratoires', weight: 100, score: 92 }
    ]
  },
  {
    id: 8,
    code: 'PRO201',
    name: 'Projet tutoré',
    instructor: 'M. Moreau',
    credits: 3,
    category: 'engineering',
    room: 'C104',
    schedule: [
      { day: 'Jeudi', time: '10:15-12:15' },
      { day: 'Mardi', time: '16:15-18:15' }
    ],
    grade: 'B',
    gradePercentage: 80,
    description: 'Projet tutoré en équipe, application des connaissances théoriques à un projet pratique.',
    prerequisites: 'Aucun',
    semester: 'Automne 2026',
    materials: [
      { name: 'Project_Guidelines.pdf', size: '1.1 MB' }
    ],
    assignments: [
      { name: 'Rapport intermédiaire', due: '2026-10-12', status: 'pending', grade: null },
      { name: 'Présentation finale', due: '2026-11-30', status: 'pending', grade: null }
    ],
    gradeBreakdown: [
      { name: 'Rapports', weight: 40, score: 78 },
      { name: 'Présentation', weight: 30, score: 82 },
      { name: 'Participation', weight: 30, score: 80 }
    ]
  }
];

let availableCourses = [
  {
    id: 9,
    code: 'CHM201',
    name: 'Chimie organique',
    instructor: 'Mme. Rousseau',
    credits: 3,
    category: 'sciences',
    description: 'Introduction à la chimie organique, structure des molécules et réactions organiques.',
    prerequisites: 'CHM101',
    schedule: [{ day: 'Vendredi', time: '10:00-12:00' }]
  },
  {
    id: 10,
    code: 'PHY301',
    name: 'Physique quantique',
    instructor: 'M. Laurent',
    credits: 3,
    category: 'sciences',
    description: 'Fondamentaux de la mécanique quantique et de la physique atomique.',
    prerequisites: 'PHY201, MAT202',
    schedule: [{ day: 'Lundi', time: '14:00-16:00' }]
  }
];

try {
  const storedCourses = JSON.parse(localStorage.getItem('planifyCourses') || 'null');
  if (Array.isArray(storedCourses) && storedCourses.every(course =>
    course && Number.isFinite(Number(course.id)) && typeof course.name === 'string'
    && typeof course.code === 'string' && typeof course.instructor === 'string'
    && typeof course.room === 'string' && Array.isArray(course.schedule)
  )) {
    myCourses = storedCourses;
  }

  const storedWeeks = JSON.parse(localStorage.getItem('planifyWeeks') || 'null');
  if (Array.isArray(storedWeeks) && storedWeeks.length === weeks.length
    && storedWeeks.every(week => week && Array.isArray(week.courses))) {
    weeks = storedWeeks;
  }
} catch (error) {
  localStorage.removeItem('planifyCourses');
  localStorage.removeItem('planifyWeeks');
}

availableCourses = availableCourses.filter(course => !myCourses.some(enrolled => enrolled.id === course.id));

function saveCourseData() {
  localStorage.setItem('planifyCourses', JSON.stringify(myCourses));
  localStorage.setItem('planifyWeeks', JSON.stringify(weeks));
}

let currentCourseFilter = 'all';
let selectedCourseId = null;

// Open courses modal
function openCoursesModal() {
  coursesModal.classList.add('show');
  renderMyCourses();
  renderBrowseCourses();
  renderAvailableCourses();
  updateCourseStats();
}

// Close courses modal
function closeCoursesModal() {
  coursesModal.classList.remove('show');
}

// Open course details modal
function openCourseDetailsModal(courseId) {
  selectedCourseId = courseId;
  const course = myCourses.find(c => c.id === courseId);
  if (!course) return;
  courseEditForm.hidden = true;

  // Populate course details
  document.getElementById('detail-course-name').textContent = course.name;
  document.getElementById('detail-course-code').textContent = `Code: ${course.code}`;
  document.getElementById('detail-course-instructor').textContent = course.instructor;
  document.getElementById('detail-course-credits').textContent = `${course.credits} crédits`;
  document.getElementById('detail-course-category').textContent = courseCategories[course.category].label;
  document.getElementById('detail-course-grade').textContent = course.grade;
  document.getElementById('detail-course-description').textContent = course.description;
  document.getElementById('detail-course-room').textContent = course.room;
  document.getElementById('detail-course-time').textContent = formatCourseSchedule(course.schedule);
  document.getElementById('detail-course-prerequisites').textContent = course.prerequisites;
  document.getElementById('detail-course-semester').textContent = course.semester;

  const courseIcon = document.getElementById('detail-course-icon');
  courseIcon.textContent = courseCategories[course.category].icon;
  courseIcon.style.background = groupColors[course.category === 'engineering' ? 'orange' : course.category];

  // Update grade summary
  document.getElementById('detail-final-grade').textContent = course.grade;
  document.getElementById('detail-grade-percentage').textContent = `${course.gradePercentage}%`;
  document.getElementById('detail-grade-rank').textContent = `${Math.floor(Math.random() * 10) + 1}/${myCourses.length + 5}`;

  // Render course schedule
  renderCourseSchedule(course);

  // Render materials
  renderCourseMaterials(course);

  // Render assignments
  renderCourseAssignments(course);

  // Render grade breakdown
  renderGradeBreakdown(course);

  // Show first tab
  showCourseDetailsTab('overview');

  courseDetailsModal.classList.add('show');
}

// Close course details modal
function closeCourseDetailsModal() {
  courseDetailsModal.classList.remove('show');
  selectedCourseId = null;
  courseEditForm.hidden = true;
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

function getCourseScheduleFromForm() {
  const dayNames = {
    lundi: 'Lundi', monday: 'Lundi', mardi: 'Mardi', tuesday: 'Mardi',
    mercredi: 'Mercredi', wednesday: 'Mercredi', jeudi: 'Jeudi', thursday: 'Jeudi',
    vendredi: 'Vendredi', friday: 'Vendredi', samedi: 'Samedi', saturday: 'Samedi',
    dimanche: 'Dimanche', sunday: 'Dimanche'
  };
  const lines = document.getElementById('edit-course-schedule').value
    .split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  if (!lines.length) return { error: currentSettings.language === 'en' ? 'Add at least one class time.' : 'Ajoute au moins un horaire.' };

  const schedule = [];
  for (const line of lines) {
    const match = line.match(/^(Lundi|Mardi|Mercredi|Jeudi|Vendredi|Samedi|Dimanche|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\s+(\d{2}:\d{2})\s*[-–]\s*(\d{2}:\d{2})$/i);
    if (!match) return { error: currentSettings.language === 'en'
      ? `Invalid format: "${line}". Use for example "Monday 08:00-10:00".`
      : `Format invalide : « ${line} ». Exemple : « Lundi 08:00-10:00 ».` };
    const day = dayNames[match[1].toLocaleLowerCase('fr')];
    const start = match[2];
    const end = match[3];
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);
    if (startHour > 23 || endHour > 23 || startMinute > 59 || endMinute > 59) {
      return { error: currentSettings.language === 'en' ? `Invalid time in "${line}".` : `Heure invalide dans « ${line} ».` };
    }
    const startValue = startHour * 60 + startMinute;
    const endValue = endHour * 60 + endMinute;
    if (startValue >= endValue) return { error: currentSettings.language === 'en'
      ? `The end time must be later than the start time: "${line}".`
      : `L'heure de fin doit être après l'heure de début : « ${line} ».` };
    if (schedule.some(item => item.day === day && startValue < item.endMinutes && endValue > item.startMinutes)) {
      const englishDays = { Lundi: 'Monday', Mardi: 'Tuesday', Mercredi: 'Wednesday', Jeudi: 'Thursday', Vendredi: 'Friday', Samedi: 'Saturday', Dimanche: 'Sunday' };
      const dayLabel = currentSettings.language === 'en'
        ? englishDays[day]
        : day.toLocaleLowerCase('fr');
      return { error: currentSettings.language === 'en' ? `Two classes overlap on ${dayLabel}.` : `Deux cours se chevauchent le ${dayLabel}.` };
    }
    schedule.push({ day, time: `${start}-${end}`, startMinutes: startValue, endMinutes: endValue });
  }

  return { schedule: schedule.map(({ day, time }) => ({ day, time })) };
}

function syncCourseToCalendar(previousCourse, updatedCourse) {
  const dayIndexes = { lundi: 0, mardi: 1, mercredi: 2, jeudi: 3, vendredi: 4, samedi: 5, dimanche: 6 };
  const previousName = previousCourse.name.trim().toLocaleLowerCase('fr');
  weeks.forEach(week => {
    week.courses = week.courses.filter(item => item.name.trim().toLocaleLowerCase('fr') !== previousName);
    updatedCourse.schedule.forEach(item => {
      const [day, start, end] = [item.day, ...item.time.split('-')];
      const dayIndex = dayIndexes[day.toLocaleLowerCase('fr')];
      if (dayIndex === undefined) return;
      week.courses.push({
        day: dayIndex,
        time: start,
        timeRange: `${start}–${end}`,
        name: updatedCourse.name,
        room: updatedCourse.room,
        teacher: updatedCourse.instructor,
        color: courseCategories[updatedCourse.category]?.color || 'blue'
      });
    });
  });
}

function showCourseEditError(message) {
  const error = document.getElementById('course-edit-error');
  error.textContent = message;
  error.hidden = !message;
}

function startCourseEdit() {
  const course = myCourses.find(item => item.id === selectedCourseId);
  if (!course) return;
  document.getElementById('edit-course-name').value = course.name;
  document.getElementById('edit-course-code').value = course.code;
  document.getElementById('edit-course-instructor').value = course.instructor;
  document.getElementById('edit-course-room').value = course.room;
  document.getElementById('edit-course-schedule').value = course.schedule
    .map(item => `${item.day} ${item.time}`)
    .join('\n');
  showCourseEditError('');
  courseEditForm.hidden = false;
  courseEditForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function saveEditedCourse(event) {
  event.preventDefault();
  const course = myCourses.find(item => item.id === selectedCourseId);
  if (!course || !courseEditForm.reportValidity()) return;

  const name = document.getElementById('edit-course-name').value.trim();
  const code = document.getElementById('edit-course-code').value.trim().toUpperCase();
  const instructor = document.getElementById('edit-course-instructor').value.trim();
  const room = document.getElementById('edit-course-room').value.trim();
  if (!name || !code || !instructor || !room) {
    showCourseEditError(currentSettings.language === 'en' ? 'All fields are required.' : 'Tous les champs sont obligatoires.');
    return;
  }
  if (myCourses.some(item => item.id !== course.id && item.code.toLocaleLowerCase() === code.toLocaleLowerCase())) {
    showCourseEditError(currentSettings.language === 'en' ? 'This course code is already in use.' : 'Ce code de cours est déjà utilisé.');
    return;
  }

  const parsedSchedule = getCourseScheduleFromForm();
  if (parsedSchedule.error) {
    showCourseEditError(parsedSchedule.error);
    return;
  }

  const previousCourse = { ...course, schedule: course.schedule.map(item => ({ ...item })) };
  Object.assign(course, { name, code, instructor, room, schedule: parsedSchedule.schedule });
  syncCourseToCalendar(previousCourse, course);
  saveCourseData();
  addNotification({
    type: 'courses',
    preference: 'scheduleChanges',
    icon: '📚',
    title: currentSettings.language === 'en' ? 'Course updated' : 'Cours modifié',
    message: currentSettings.language === 'en'
      ? `${course.name} (${course.code}) schedule was updated.`
      : `Le cours ${course.name} (${course.code}) a été modifié.`,
    actions: ['Voir le planning']
  });
  renderMyCourses();
  updateCourseStats();
  if (calendarReady) renderWeek(currentWeekIndex);
  openCourseDetailsModal(course.id);
  alert(currentSettings.language === 'en' ? 'Course changes saved on this device.' : 'Les modifications du cours ont été enregistrées sur cet appareil.');
}

// Format course schedule
function formatCourseSchedule(schedule) {
  return schedule.map(s => `${s.day} ${formatTimeText(s.time)}`).join(', ');
}

// Update course statistics
function updateCourseStats() {
  const totalCourses = myCourses.length;
  const totalCredits = myCourses.reduce((sum, course) => sum + course.credits, 0);
  
  // Calculate GPA
  let totalPoints = 0;
  let totalCreditsForGPA = 0;
  
  myCourses.forEach(course => {
    const gradePoints = gradeScale[course.grade] || 0;
    totalPoints += gradePoints * course.credits;
    totalCreditsForGPA += course.credits;
  });
  
  const gpa = totalCreditsForGPA > 0 ? (totalPoints / totalCreditsForGPA).toFixed(1) : '0.0';
  
  document.getElementById('total-courses').textContent = totalCourses;
  document.getElementById('total-credits').textContent = totalCredits;
  document.getElementById('current-gpa').textContent = gpa;
}

// Render my courses
function renderMyCourses() {
  const myCoursesList = document.getElementById('my-courses-list');
  myCoursesList.innerHTML = '';

  const filteredCourses = currentCourseFilter === 'all'
    ? myCourses
    : myCourses.filter(c => c.category === currentCourseFilter);

  if (filteredCourses.length === 0) {
    myCoursesList.innerHTML = '<p class="muted">Aucun cours trouvé.</p>';
    return;
  }

  filteredCourses.forEach(course => {
    const courseCard = createCourseCard(course, true);
    myCoursesList.appendChild(courseCard);
  });
}

// Render browse courses
function renderBrowseCourses() {
  const browseCoursesList = document.getElementById('browse-courses-list');
  browseCoursesList.innerHTML = '<p class="muted">Fonctionnalité de parcours à venir.</p>';
}

// Render available courses for registration
function renderAvailableCourses() {
  const availableCoursesList = document.getElementById('available-courses-list');
  availableCoursesList.innerHTML = '';

  if (availableCourses.length === 0) {
    availableCoursesList.innerHTML = '<p class="muted">Aucun cours disponible pour l\'inscription.</p>';
    return;
  }

  availableCourses.forEach(course => {
    const courseCard = createCourseCard(course, false);
    availableCoursesList.appendChild(courseCard);
  });
}

// Create course card element
function createCourseCard(course, isMyCourse) {
  const card = document.createElement('div');
  card.className = 'course-card';
  card.dataset.courseId = course.id;

  const categoryInfo = courseCategories[course.category];
  const gradeBadge = isMyCourse && course.grade ? `<span class="course-grade-badge ${escapeHTML(course.grade[0].toLowerCase())}">${escapeHTML(course.grade)}</span>` : '';

  card.innerHTML = `
    <div class="course-icon" style="background: ${groupColors[course.category === 'engineering' ? 'orange' : course.category]}20; color: ${groupColors[course.category === 'engineering' ? 'orange' : course.category]}">
      ${categoryInfo.icon}
    </div>
    <div class="course-info">
      <div class="course-name">${escapeHTML(course.name)}</div>
      <div class="course-code">${escapeHTML(course.code)} • ${escapeHTML(course.instructor)}</div>
      <div class="course-meta">
        <span>${escapeHTML(course.credits)} crédits</span>
        <span>${escapeHTML(categoryInfo.label)}</span>
        <span>${escapeHTML(course.room)}</span>
        ${gradeBadge}
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    if (isMyCourse) {
      openCourseDetailsModal(course.id);
    } else {
      registerForCourse(course.id);
    }
  });

  return card;
}

// Render course schedule
function renderCourseSchedule(course) {
  const scheduleList = document.getElementById('course-schedule-list');
  scheduleList.innerHTML = '';

  course.schedule.forEach(schedule => {
    const scheduleItem = document.createElement('div');
    scheduleItem.className = 'schedule-item';
    scheduleItem.innerHTML = `
      <div class="schedule-icon">📅</div>
      <div class="schedule-info">
        <div class="schedule-name">${schedule.day}</div>
        <div class="schedule-time">${schedule.time}</div>
      </div>
    `;
    scheduleList.appendChild(scheduleItem);
  });
}

// Render course materials
function renderCourseMaterials(course) {
  const materialsList = document.getElementById('course-materials-list');
  materialsList.innerHTML = '';

  if (!course.materials || course.materials.length === 0) {
    materialsList.innerHTML = '<p class="muted">Aucun matériel disponible.</p>';
    return;
  }

  course.materials.forEach(material => {
    const materialItem = document.createElement('div');
    materialItem.className = 'material-item';
    materialItem.innerHTML = `
      <div class="material-icon">📄</div>
      <div class="material-info">
        <div class="material-name">${material.name}</div>
        <div class="material-size">${material.size}</div>
      </div>
    `;
    materialsList.appendChild(materialItem);
  });
}

// Render course assignments
function renderCourseAssignments(course) {
  const assignmentsList = document.getElementById('course-assignments-list');
  assignmentsList.innerHTML = '';

  if (!course.assignments || course.assignments.length === 0) {
    assignmentsList.innerHTML = '<p class="muted">Aucun devoir programmé.</p>';
    return;
  }

  course.assignments.forEach(assignment => {
    const assignmentItem = document.createElement('div');
    assignmentItem.className = 'assignment-item';
    const statusClass = assignment.status === 'completed' ? 'completed' : 
                        assignment.status === 'overdue' ? 'overdue' : 'pending';
    const statusLabel = assignment.status === 'completed' ? 'Complété' : 
                        assignment.status === 'overdue' ? 'En retard' : 'En attente';
    const gradeDisplay = assignment.grade ? `Note: ${assignment.grade}%` : '';

    assignmentItem.innerHTML = `
      <div class="assignment-icon">📝</div>
      <div class="assignment-info">
        <div class="assignment-name">${assignment.name}</div>
        <div class="assignment-due">Échéance: ${assignment.due} ${gradeDisplay}</div>
      </div>
      <span class="assignment-status ${statusClass}">${statusLabel}</span>
    `;
    assignmentsList.appendChild(assignmentItem);
  });
}

// Render grade breakdown
function renderGradeBreakdown(course) {
  const breakdownList = document.getElementById('grade-breakdown-list');
  breakdownList.innerHTML = '';

  if (!course.gradeBreakdown || course.gradeBreakdown.length === 0) {
    breakdownList.innerHTML = '<p class="muted">Aucune décomposition de note disponible.</p>';
    return;
  }

  course.gradeBreakdown.forEach(item => {
    const breakdownItem = document.createElement('div');
    breakdownItem.className = 'grade-breakdown-item';
    breakdownItem.innerHTML = `
      <span class="grade-breakdown-name">${item.name} (${item.weight}%)</span>
      <span class="grade-breakdown-score">${item.score}%</span>
    `;
    breakdownList.appendChild(breakdownItem);
  });
}

// Register for course
function registerForCourse(courseId) {
  const course = availableCourses.find(c => c.id === courseId);
  if (!course) return;

  const currentCredits = myCourses.reduce((sum, c) => sum + c.credits, 0);
  if (currentCredits + course.credits > 30) {
    alert('Vous avez atteint la limite de 30 crédits pour ce semestre.');
    return;
  }

  if (confirm(`Voulez-vous vous inscrire au cours "${course.name}" (${course.code}) ?`)) {
    // Add to my courses
    const newCourse = {
      ...course,
      grade: null,
      gradePercentage: 0,
      materials: [],
      assignments: [],
      gradeBreakdown: []
    };
    myCourses.push(newCourse);
    saveCourseData();

    // Remove from available courses
    availableCourses = availableCourses.filter(c => c.id !== courseId);

    // Add notification
    addNotification({
      type: 'courses',
      icon: '📚',
      title: 'Inscription réussie',
      message: `Vous êtes inscrit au cours "${course.name}"`,
      actions: ['Voir le cours']
    });

    renderMyCourses();
    renderAvailableCourses();
    updateCourseStats();
    alert(`Inscription réussie au cours "${course.name}" !`);
  }
}

// Show courses tab
function showCoursesTab(tabName) {
  coursesTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });

  coursesPanels.forEach(panel => {
    const panelId = tabName === 'browse' ? 'panel-browse-courses' : `panel-${tabName}`;
    panel.classList.toggle('active', panel.id === panelId);
  });
}

// Show course details tab
function showCourseDetailsTab(tabName) {
  courseDetailsTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });

  courseDetailsPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === `detail-panel-${tabName}`);
  });
}

// Filter courses
function filterCourses(filter) {
  currentCourseFilter = filter;
  filterCourseBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderMyCourses();
}

// Courses event listeners
btnCoursesClose.addEventListener('click', closeCoursesModal);
btnCourseDetailsClose.addEventListener('click', closeCourseDetailsModal);
btnEditCourse.addEventListener('click', startCourseEdit);
courseEditForm.addEventListener('submit', saveEditedCourse);
document.getElementById('btn-cancel-course-edit').addEventListener('click', () => {
  courseEditForm.hidden = true;
  showCourseEditError('');
});

coursesTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    showCoursesTab(tab.dataset.tab);
  });
});

courseDetailsTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    showCourseDetailsTab(tab.dataset.tab);
  });
});

filterCourseBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterCourses(btn.dataset.filter);
  });
});

courseSearch.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  if (query) {
    const filtered = myCourses.filter(c =>
      c.name.toLowerCase().includes(query) ||
      c.code.toLowerCase().includes(query) ||
      c.instructor.toLowerCase().includes(query)
    );
    const myCoursesList = document.getElementById('my-courses-list');
    myCoursesList.innerHTML = '';
    filtered.forEach(course => {
      const courseCard = createCourseCard(course, true);
      myCoursesList.appendChild(courseCard);
    });
  } else {
    renderMyCourses();
  }
});

// Placeholder functions for course features
btnContactProfessor.addEventListener('click', () => {
  alert('Contact du professeur - Fonctionnalité à venir');
});

btnDropCourse.addEventListener('click', () => {
  if (confirm('Êtes-vous sûr de vouloir abandonner ce cours ?')) {
    alert('Abandon du cours - Fonctionnalité à venir');
  }
});

btnUploadMaterial.addEventListener('click', () => {
  alert('Téléversement de matériel - Fonctionnalité à venir');
});

btnAddAssignment.addEventListener('click', () => {
  alert('Ajout de devoir - Fonctionnalité à venir');
});

// ==================== ENHANCED SCHEDULING SYSTEM ====================

// Event data structure
const eventTypes = {
  study: { icon: '📚', label: 'Session d\'étude', color: 'blue' },
  personal: { icon: '👤', label: 'Personnel', color: 'purple' },
  exam: { icon: '📝', label: 'Examen', color: 'orange' },
  deadline: { icon: '⏰', label: 'Date limite', color: 'red' },
  meeting: { icon: '👥', label: 'Réunion', color: 'green' },
  other: { icon: '📌', label: 'Autre', color: 'cyan' }
};

// Personal events storage
let personalEvents = [
  {
    id: 1,
    type: 'study',
    title: 'Révision Physique',
    description: 'Préparation pour l\'examen de thermodynamique',
    date: '2026-10-05',
    startTime: '14:00',
    endTime: '16:00',
    location: 'Bibliothèque',
    reminder: 30,
    recurrence: 'none',
    color: 'blue'
  },
  {
    id: 2,
    type: 'personal',
    title: 'Sport',
    description: 'Séance de basket',
    date: '2026-10-02',
    startTime: '18:00',
    endTime: '20:00',
    location: 'Gymnase',
    reminder: 60,
    recurrence: 'weekly',
    color: 'green'
  },
  {
    id: 3,
    type: 'exam',
    title: 'Examen Mathématiques',
    description: 'Examen mi-semestre',
    date: '2026-10-20',
    startTime: '09:00',
    endTime: '11:00',
    location: 'B201',
    reminder: 1440,
    recurrence: 'none',
    color: 'orange'
  }
];

try {
  const savedEvents = localStorage.getItem('planifyEvents');
  if (savedEvents) {
    const parsedEvents = JSON.parse(savedEvents);
    if (Array.isArray(parsedEvents)) personalEvents = parsedEvents;
  }
} catch (error) {
  localStorage.removeItem('planifyEvents');
}

function savePersonalEvents() {
  localStorage.setItem('planifyEvents', JSON.stringify(personalEvents));
}

let currentCalendarView = 'weekly';

// Open event modal
function openEventModal() {
  eventModal.classList.add('show');
  document.getElementById('event-date').value = formatLocalDateInput(new Date());
  const reminderSelect = document.getElementById('event-reminder');
  reminderSelect.value = currentSettings.courseReminders ? currentSettings.remindTime : 'none';
  if (!reminderSelect.value) reminderSelect.value = 'none';
}

// Close event modal
function closeEventModal() {
  eventModal.classList.remove('show');
  eventForm.reset();
}

// Open calendar views modal
function openCalendarViewsModal() {
  calendarViewsModal.classList.add('show');
  updateAnalytics();
}

// Close calendar views modal
function closeCalendarViewsModal() {
  calendarViewsModal.classList.remove('show');
}

// Create event
function createEvent(event) {
  event.preventDefault();

  const newEvent = {
    id: Date.now(),
    type: document.getElementById('event-type').value,
    title: document.getElementById('event-title').value,
    description: document.getElementById('event-description').value,
    date: document.getElementById('event-date').value,
    startTime: document.getElementById('event-start').value,
    endTime: document.getElementById('event-end').value,
    location: document.getElementById('event-location').value,
    reminder: document.getElementById('event-reminder').value === 'none'
      ? 0
      : parseInt(document.getElementById('event-reminder').value, 10),
    recurrence: document.getElementById('event-recurrence').value,
    color: document.getElementById('event-color').value
  };

  // Check for conflicts
  const hasConflict = checkForConflicts(newEvent);
  if (hasConflict) {
    if (!confirm('Conflit détecté avec un événement existant. Voulez-vous quand même créer cet événement ?')) {
      return;
    }
  }

  personalEvents.push(newEvent);
  savePersonalEvents();

  // Add notification based on reminder settings
  if (newEvent.reminder !== 0 && currentSettings.courseReminders) {
    scheduleEventReminder(newEvent);
  }

  // Add notification for event creation
  addNotification({
    type: 'courses',
    icon: eventTypes[newEvent.type].icon,
    title: 'Événement créé',
    message: `L'événement "${newEvent.title}" a été ajouté à votre calendrier`,
    actions: ['Voir le calendrier']
  });

  closeEventModal();
  updateAnalytics();
  alert(`L'événement "${newEvent.title}" a été créé avec succès !`);
}

// Check for conflicts
function checkForConflicts(newEvent) {
  return personalEvents.some(event => {
    if (event.date !== newEvent.date) return false;
    
    const newStart = timeToMinutes(newEvent.startTime);
    const newEnd = timeToMinutes(newEvent.endTime);
    const eventStart = timeToMinutes(event.startTime);
    const eventEnd = timeToMinutes(event.endTime);
    
    return (newStart < eventEnd && newEnd > eventStart);
  });
}

// Convert time string to minutes
function timeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

// Schedule event reminder
const eventReminderTimers = new Map();

function scheduleEventReminder(event) {
  const eventKey = String(event.id);
  if (eventReminderTimers.has(eventKey)) {
    clearTimeout(eventReminderTimers.get(eventKey));
    eventReminderTimers.delete(eventKey);
  }
  if (!currentSettings.courseReminders || Number(event.reminder) === 0) return;

  const reminderTime = event.reminder; // in minutes
  const eventDateTime = new Date(`${event.date}T${event.startTime}`);
  const reminderDateTime = new Date(eventDateTime.getTime() - reminderTime * 60000);
  
  const now = new Date();
  if (reminderDateTime > now) {
    const timer = setTimeout(() => {
      eventReminderTimers.delete(eventKey);
      addNotification({
        type: 'courses',
        preference: 'courseReminders',
        icon: eventTypes[event.type].icon,
        title: currentSettings.language === 'en' ? 'Event reminder' : 'Rappel d\'événement',
        message: currentSettings.language === 'en'
          ? `${event.title} starts in ${reminderTime} minutes`
          : `${event.title} commence dans ${reminderTime} minutes`,
        actions: ['Voir l\'événement']
      });
    }, reminderDateTime.getTime() - now.getTime());
    eventReminderTimers.set(eventKey, timer);
  }
}

function refreshEventReminders() {
  eventReminderTimers.forEach(timer => clearTimeout(timer));
  eventReminderTimers.clear();
  if (currentSettings.courseReminders) {
    personalEvents.forEach(event => scheduleEventReminder(event));
  }
}

// Update analytics
function updateAnalytics() {
  // Calculate study time this week
  const studyEvents = personalEvents.filter(e => e.type === 'study');
  const studyMinutes = studyEvents.reduce((total, event) => {
    if (event.startTime && event.endTime) {
      return total + (timeToMinutes(event.endTime) - timeToMinutes(event.startTime));
    }
    return total;
  }, 0);
  const studyHours = Math.floor(studyMinutes / 60);
  document.getElementById('study-time').textContent = `${studyHours}h`;
  
  // Count personal events
  const personalEventCount = personalEvents.filter(e => e.type === 'personal').length;
  document.getElementById('personal-events').textContent = personalEventCount;
  
  // Count conflicts
  let conflictCount = 0;
  personalEvents.forEach(event => {
    if (checkForConflicts(event)) conflictCount++;
  });
  document.getElementById('conflicts-count').textContent = conflictCount;
}

// Switch calendar view
function switchCalendarView(view) {
  currentCalendarView = view;
  viewBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
  
  // Update calendar display based on view
  if (view === 'daily') {
    renderDailyView();
  } else if (view === 'monthly') {
    renderMonthlyView();
  } else {
    renderWeeklyView(); // Default weekly view
  }
}

// Render daily view
function renderDailyView() {
  // For now, just show the current weekly view
  // This would be expanded to show a single day view
  alert('Vue quotidienne - Fonctionnalité à venir');
}

// Render monthly view
function renderMonthlyView() {
  // For now, just show the current weekly view
  // This would be expanded to show a full month calendar
  alert('Vue mensuelle - Fonctionnalité à venir');
}

// Render weekly view (current implementation)
function renderWeeklyView() {
  // Keep the current implementation
  renderWeek(currentWeekIndex);
}

// Apply event template
function applyEventTemplate(template) {
  const templates = {
    'study-session': {
      type: 'study',
      title: 'Session d\'étude',
      description: 'Révision des cours',
      startTime: '14:00',
      endTime: '16:00',
      location: 'Bibliothèque',
      reminder: 15,
      color: 'blue'
    },
    'exam-prep': {
      type: 'exam',
      title: 'Préparation examen',
      description: 'Révision intensive',
      startTime: '09:00',
      endTime: '12:00',
      location: 'Bibliothèque',
      reminder: 60,
      color: 'orange'
    },
    'homework': {
      type: 'study',
      title: 'Devoirs',
      description: 'Travail sur les devoirs',
      startTime: '16:00',
      endTime: '18:00',
      location: 'Domicile',
      reminder: 30,
      color: 'cyan'
    },
    'group-meeting': {
      type: 'meeting',
      title: 'Réunion de groupe',
      description: 'Discussion de projet',
      startTime: '10:00',
      endTime: '12:00',
      location: 'C104',
      reminder: 15,
      color: 'green'
    },
    'gym': {
      type: 'personal',
      title: 'Sport',
      description: 'Entraînement',
      startTime: '18:00',
      endTime: '20:00',
      location: 'Gymnase',
      reminder: 60,
      color: 'pink'
    },
    'appointment': {
      type: 'personal',
      title: 'Rendez-vous',
      description: 'Appointment',
      startTime: '14:00',
      endTime: '15:00',
      location: 'À déterminer',
      reminder: 1440,
      color: 'purple'
    }
  };
  
  const templateData = templates[template];
  if (templateData) {
    document.getElementById('event-type').value = templateData.type;
    document.getElementById('event-title').value = templateData.title;
    document.getElementById('event-description').value = templateData.description;
    document.getElementById('event-start').value = templateData.startTime;
    document.getElementById('event-end').value = templateData.endTime;
    document.getElementById('event-location').value = templateData.location;
    document.getElementById('event-reminder').value = String(templateData.reminder);
    document.getElementById('event-color').value = templateData.color;
    
    // Update color selection
    eventColorOptions.forEach(opt => {
      opt.classList.remove('selected');
      if (opt.dataset.color === templateData.color) {
        opt.classList.add('selected');
      }
    });
    
    openEventModal();
    document.getElementById('event-reminder').value = currentSettings.courseReminders
      ? String(templateData.reminder)
      : 'none';
  }
}

// Open a clean print layout so the browser can save the current schedule as a PDF.
function exportScheduleToPdf() {
  const week = weeks[currentWeekIndex];
  if (!week) {
    alert('Aucune semaine à exporter.');
    return;
  }

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Autorise les fenêtres pop-up pour exporter le PDF.');
    return;
  }

  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const monday = getWeekMonday(week);
  const visibleDates = calendarDayOrder.map(day => getCalendarDateForDay(monday, day));
  const weekStart = visibleDates[0];
  const weekEnd = visibleDates[visibleDates.length - 1];
  const weekCourses = week.courses.map(course => {
    const date = getCalendarDateForDay(monday, course.day);
    const weekday = new Intl.DateTimeFormat(currentSettings.language === 'en' ? 'en-US' : 'fr-FR', { weekday: 'long' }).format(date);
    return { date, dayLabel: weekday, time: course.timeRange, title: course.name, location: course.room, detail: course.teacher || '' };
  });
  const weekEvents = personalEvents
    .filter(event => {
      const date = new Date(`${event.date}T00:00:00`);
      return date >= weekStart && date <= weekEnd;
    })
    .map(event => ({
      date: new Date(`${event.date}T00:00:00`),
      dayLabel: new Intl.DateTimeFormat(currentSettings.language === 'en' ? 'en-US' : 'fr-FR', { weekday: 'long' }).format(new Date(`${event.date}T00:00:00`)),
      time: `${event.startTime}${event.endTime ? `–${event.endTime}` : ''}`,
      title: event.title,
      location: event.location || '',
      detail: currentSettings.language === 'en' ? 'Personal event' : 'Événement personnel'
    }));
  const rows = [...weekCourses, ...weekEvents]
    .sort((a, b) => a.date - b.date || a.time.localeCompare(b.time))
    .map(item => `<tr><td>${escapeHtml(item.dayLabel)} ${escapeHtml(formatCalendarDate(item.date, { year: true }))}</td><td>${escapeHtml(formatTimeText(item.time))}</td><td>${escapeHtml(item.title)}</td><td>${escapeHtml(item.location)}</td><td>${escapeHtml(item.detail)}</td></tr>`)
    .join('');
  const english = currentSettings.language === 'en';
  const title = english ? 'Planify weekly schedule' : 'Emploi du temps Planify';
  const generated = new Intl.DateTimeFormat(english ? 'en-US' : 'fr-FR', { dateStyle: 'long' }).format(new Date());

  printWindow.document.open();
  printWindow.document.write(`<!doctype html><html lang="${english ? 'en' : 'fr'}"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title><style>
    @page{size:A4 landscape;margin:14mm}*{box-sizing:border-box}body{font:12px Arial,sans-serif;color:#172033;margin:0}header{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2px solid #4f46e5;padding-bottom:12px;margin-bottom:18px}h1{font-size:22px;margin:0 0 5px;color:#312e81}p{margin:0;color:#64748b}.meta{text-align:right}table{width:100%;border-collapse:collapse}th{background:#eef2ff;color:#312e81;text-align:left}th,td{padding:8px 9px;border:1px solid #dbe1ea;vertical-align:top}tbody tr:nth-child(even){background:#f8fafc}.empty{padding:20px;text-align:center;color:#64748b}@media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}}
    </style></head><body><header><div><h1>${escapeHtml(title)}</h1><p>${escapeHtml(document.getElementById('group').selectedOptions[0]?.textContent || '')} · ${escapeHtml(formatCalendarRange(calendarDayOrder.map(day => getCalendarDateForDay(monday, day))))}</p></div><p class="meta">${english ? 'Generated' : 'Généré le'} ${escapeHtml(generated)}</p></header>${rows ? `<table><thead><tr><th>${english ? 'Day' : 'Jour'}</th><th>${english ? 'Time' : 'Horaire'}</th><th>${english ? 'Course / event' : 'Cours / événement'}</th><th>${english ? 'Room / place' : 'Salle / lieu'}</th><th>${english ? 'Details' : 'Détails'}</th></tr></thead><tbody>${rows}</tbody></table>` : `<div class="empty">${english ? 'No schedule items for this week.' : 'Aucun élément prévu cette semaine.'}</div>`}</body></html>`);
  printWindow.document.close();
  setTimeout(() => {
    printWindow.focus();
    printWindow.print();
  }, 300);
}

// Export calendar to iCal
function exportToIcal() {
  const escapeIcal = value => String(value || '')
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
  const toIcalDate = date => `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  const toIcalTime = time => `${time.slice(0, 2)}${time.slice(3, 5)}00`;
  const weekdayNumbers = { Dimanche: 0, Lundi: 1, Mardi: 2, Mercredi: 3, Jeudi: 4, Vendredi: 5, Samedi: 6 };
  const events = [];

  // Add recurring weekly course events using the actual day and time from each course.
  myCourses.forEach(course => {
    course.schedule.forEach(schedule => {
      const [start, end] = schedule.time.split('-');
      const weekday = weekdayNumbers[schedule.day];
      if (weekday === undefined || !start || !end) return;
      const firstDate = new Date();
      const delta = (weekday - firstDate.getDay() + 7) % 7;
      firstDate.setDate(firstDate.getDate() + delta);
      events.push([
        'BEGIN:VEVENT',
        `UID:course-${course.id}-${weekday}@planify.local`,
        `DTSTART:${toIcalDate(firstDate)}T${toIcalTime(start)}`,
        `DTEND:${toIcalDate(firstDate)}T${toIcalTime(end)}`,
        'RRULE:FREQ=WEEKLY;UNTIL=20261231T235959Z',
        `SUMMARY:${escapeIcal(course.name)}`,
        `LOCATION:${escapeIcal(course.room)}`,
        `DESCRIPTION:${escapeIcal(`Cours avec ${course.instructor}`)}`,
        'END:VEVENT'
      ].join('\r\n'));
    });
  });

  personalEvents.forEach(event => {
    const date = event.date.replace(/-/g, '');
    const fields = [
      'BEGIN:VEVENT',
      `UID:event-${event.id}@planify.local`,
      `DTSTART:${date}T${toIcalTime(event.startTime)}`
    ];
    if (event.endTime) fields.push(`DTEND:${date}T${toIcalTime(event.endTime)}`);
    fields.push(`SUMMARY:${escapeIcal(event.title)}`);
    if (event.location) fields.push(`LOCATION:${escapeIcal(event.location)}`);
    if (event.description) fields.push(`DESCRIPTION:${escapeIcal(event.description)}`);
    fields.push('END:VEVENT');
    events.push(fields.join('\r\n'));
  });

  const icalContent = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//PLANIFY//Calendar//FR', 'CALSCALE:GREGORIAN', ...events, 'END:VCALENDAR'].join('\r\n');
  const blob = new Blob([icalContent], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'planify_calendar.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  addNotification({
    type: 'system',
    icon: '📥',
    title: 'Export réussi',
    message: 'Votre calendrier a été exporté au format iCal',
    actions: []
  });
}

// Sync with Google Calendar
function syncWithGoogleCalendar() {
  alert('Synchronisation Google Calendar - Fonctionnalité à venir (nécessite OAuth)');
}

// Scheduling event listeners
btnAddEvent.addEventListener('click', openEventModal);
btnCalendarViews.addEventListener('click', openCalendarViewsModal);
btnEventClose.addEventListener('click', closeEventModal);
btnCalendarViewsClose.addEventListener('click', closeCalendarViewsModal);

eventForm.addEventListener('submit', createEvent);
btnCancelEvent.addEventListener('click', closeEventModal);

viewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    switchCalendarView(btn.dataset.view);
  });
});

templateBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    applyEventTemplate(btn.dataset.template);
  });
});

eventColorOptions.forEach(option => {
  option.addEventListener('click', () => {
    eventColorOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    document.getElementById('event-color').value = option.dataset.color;
  });
});

btnCalendarExportIcal.addEventListener('click', exportToIcal);
btnSyncGoogle.addEventListener('click', syncWithGoogleCalendar);

// Initialize event color selection

if (eventColorOptions.length > 0) {
  eventColorOptions.forEach(opt => opt.classList.remove('selected'));
  document.querySelector('.color-option.event-color[data-color="blue"]').classList.add('selected');
}

// Update analytics on page load
updateAnalytics();

// Initial render
renderWeek(currentWeekIndex);
calendarReady = true;
applyColorScheme(currentSettings.colorScheme);
refreshEventReminders();

// Keep open tabs on this device in sync through localStorage when enabled.
window.addEventListener('storage', event => {
  if (!currentSettings.autoRefresh) return;
  if (event.key === 'planifySettings') {
    currentSettings = loadSettings();
    applySettings(currentSettings);
    if (notificationsReady) renderNotifications();
  } else if (event.key === 'planifyEvents' && event.newValue) {
    try {
      const updatedEvents = JSON.parse(event.newValue);
      if (Array.isArray(updatedEvents)) {
        personalEvents = updatedEvents;
        renderWeek(currentWeekIndex);
        updateAnalytics();
      }
    } catch (error) {
      console.warn('Could not refresh saved calendar events from another tab.', error);
    }
  }
});
