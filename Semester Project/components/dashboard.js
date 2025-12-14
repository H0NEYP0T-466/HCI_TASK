// Dashboard JavaScript - Main Application Logic

(function () {
  'use strict';

  // Auth guard
  const isAuth = localStorage.getItem('isAuthenticated') === 'true';
  if (!isAuth) {
    window.location.href = '../pages/login.html';
    return;
  }

  // DOM Elements
  const elements = {
    studentInfo: document.getElementById('studentInfo'),
    notifBtn: document.getElementById('notifBtn'),
    notifCount: document.getElementById('notifCount'),
    notificationCard: document.getElementById('notificationCard'),
    closeNotifications: document.getElementById('closeNotifications'),
    notificationBody: document.getElementById('notificationBody'),
    logoutBtn: document.getElementById('logoutBtn'),
    logoutLink: document.getElementById('logoutLink'),
    logoutModal: document.getElementById('logoutModal'),
    closeLogoutModal: document.getElementById('closeLogoutModal'),
    cancelLogout: document.getElementById('cancelLogout'),
    confirmLogout: document.getElementById('confirmLogout'),
    homeBrand: document.getElementById('homeBrand'),
    loader: document.getElementById('loader'),
    sidebar: document.getElementById('sidebar')
  };

  // Utility: Show loader
  function showLoader(ms = 500) {
    elements.loader.classList.add('show');
    setTimeout(() => elements.loader.classList.remove('show'), ms);
  }

  // Initialize student info
  if (elements.studentInfo && window.SampleData) {
    const s = window.SampleData.student;
    elements.studentInfo.textContent = `${s.session}/${s.roll}`;
  }

  // Notification system
  let notifCounter = window.SampleData?.notifications?.length || 0;
  if (elements.notifCount) {
    elements.notifCount.textContent = String(notifCounter);
  }

  // Toggle notification card
  if (elements.notifBtn) {
    elements.notifBtn.addEventListener('click', () => {
      const isVisible = elements.notificationCard.classList.contains('show');
      if (isVisible) {
        elements.notificationCard.classList.remove('show');
      } else {
        renderNotifications();
        elements.notificationCard.classList.add('show');
      }
    });
  }

  // Close notification card
  if (elements.closeNotifications) {
    elements.closeNotifications.addEventListener('click', () => {
      elements.notificationCard.classList.remove('show');
    });
  }

  // Close notification card when clicking outside
  document.addEventListener('click', (e) => {
    if (!elements.notificationCard.contains(e.target) && 
        !elements.notifBtn.contains(e.target) &&
        elements.notificationCard.classList.contains('show')) {
      elements.notificationCard.classList.remove('show');
    }
  });

  // Render notifications
  function renderNotifications() {
    const notifications = window.SampleData?.notifications || [];
    elements.notificationBody.innerHTML = '';

    if (notifications.length === 0) {
      elements.notificationBody.innerHTML = `
        <div class="notification-empty">
          <i class="fa-regular fa-bell-slash" style="font-size: 48px; color: #ccc; margin-bottom: 16px;"></i>
          <p>No notifications</p>
        </div>
      `;
      return;
    }

    notifications.forEach(notif => {
      const item = document.createElement('div');
      item.className = 'notification-item';
      item.innerHTML = `
        <div class="notification-text">${notif.text}</div>
        <div class="notification-date">${notif.date}</div>
      `;
      elements.notificationBody.appendChild(item);
    });
  }

  // Logout functionality
  function showLogoutModal() {
    elements.logoutModal.classList.add('show');
  }

  function hideLogoutModal() {
    elements.logoutModal.classList.remove('show');
  }

  if (elements.logoutBtn) {
    elements.logoutBtn.addEventListener('click', showLogoutModal);
  }

  if (elements.logoutLink) {
    elements.logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      showLogoutModal();
    });
  }

  if (elements.closeLogoutModal) {
    elements.closeLogoutModal.addEventListener('click', hideLogoutModal);
  }

  if (elements.cancelLogout) {
    elements.cancelLogout.addEventListener('click', hideLogoutModal);
  }

  if (elements.confirmLogout) {
    elements.confirmLogout.addEventListener('click', () => {
      localStorage.removeItem('isAuthenticated');
      showLoader(300);
      setTimeout(() => {
        window.location.href = '../pages/login.html';
      }, 300);
    });
  }

  // Close modal when clicking outside
  elements.logoutModal.addEventListener('click', (e) => {
    if (e.target === elements.logoutModal) {
      hideLogoutModal();
    }
  });

  // Navigation
  const navLinks = document.querySelectorAll('[data-route]');
  const views = {
    dashboard: document.getElementById('dashboardView'),
    attendance: document.getElementById('attendanceView'),
    courses: document.getElementById('coursesView'),
    fee: document.getElementById('feeView'),
    calendar: document.getElementById('calendarView'),
    profile: document.getElementById('profileView')
  };

  function setActiveNav(route) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      if (item.dataset.route === route) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  function showView(route) {
    Object.keys(views).forEach(key => {
      if (views[key]) {
        if (key === route) {
          views[key].classList.add('active');
        } else {
          views[key].classList.remove('active');
        }
      }
    });
    setActiveNav(route);
    showLoader(250);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.dataset.route;
      if (!route) return;

      showView(route);

      // Render specific views
      if (route === 'dashboard') renderDashboard();
      if (route === 'attendance') renderAttendance();
      if (route === 'courses') renderCourses();
      if (route === 'fee') renderChallans();
      if (route === 'calendar') renderCalendar();
      if (route === 'profile') renderProfile();
    });
  });

  // Home brand click
  if (elements.homeBrand) {
    elements.homeBrand.addEventListener('click', (e) => {
      e.preventDefault();
      showView('dashboard');
      renderDashboard();
    });
  }

  // Dashboard render
  function renderDashboard() {
    const s = window.SampleData.student;
    document.getElementById('enrolledSemester').textContent = s.session;
    document.getElementById('outstandingFee').textContent = s.outstanding.toLocaleString();
    document.getElementById('cgpa').textContent = s.cgpa.toFixed(2);
    document.getElementById('classSection').textContent = s.section;

    // Attendance chart
    const ctx = document.getElementById('dashboardAttendanceChart');
    if (ctx) {
      const subjects = window.SampleData.attendance.subjects;
      const labels = subjects.map(x => x.code);
      const data = subjects.map(x => x.percent);
      const colors = subjects.map(x => x.percent >= 75 ? '#2E7D32' : '#dc3545');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Attendance %',
            data,
            backgroundColor: colors
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { beginAtZero: true, max: 100 }
          }
        }
      });
    }

    // Recent challans
    const challansBody = document.getElementById('recentChallansBody');
    if (challansBody) {
      challansBody.innerHTML = '';
      window.SampleData.challans.slice(0, 4).forEach(ch => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${ch.session}</td>
          <td>${ch.type}</td>
          <td><span class="badge ${ch.status === 'Paid' ? 'badge-success' : 'badge-warning'}">${ch.status}</span></td>
          <td>${ch.dueDate}</td>
        `;
        challansBody.appendChild(tr);
      });
    }

    // Calendar
    const calBody = document.getElementById('dashboardCalendarBody');
    if (calBody) {
      calBody.innerHTML = '';
      window.SampleData.calendar.slice(0, 4).forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.activity}</td><td>${row.date}</td>`;
        calBody.appendChild(tr);
      });
    }

    // Courses
    const coursesBody = document.getElementById('dashboardCoursesBody');
    if (coursesBody) {
      coursesBody.innerHTML = '';
      window.SampleData.courses.slice(0, 4).forEach(c => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${c.name}</td><td>${c.teacher}</td>`;
        coursesBody.appendChild(tr);
      });
    }
  }

  // Attendance render
  let attendanceChartInstance = null;
  function renderAttendance() {
    const subjectSelect = document.getElementById('subjectSelect');
    const summary = document.getElementById('attendanceSummary');

    subjectSelect.innerHTML = '';
    window.SampleData.attendance.subjects.forEach((s, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `${s.code} — ${s.name}`;
      subjectSelect.appendChild(opt);
    });

    const ctx = document.getElementById('attendanceChart');
    const subjects = window.SampleData.attendance.subjects;
    const labels = subjects.map(x => x.code);
    const data = subjects.map(x => x.percent);
    const colors = subjects.map(x => x.percent >= 75 ? '#2E7D32' : '#dc3545');

    if (ctx) {
      if (attendanceChartInstance) attendanceChartInstance.destroy();
      attendanceChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Attendance %',
            data,
            backgroundColor: colors
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true, max: 100 } }
        }
      });
    }

    // Summary
    summary.innerHTML = '';
    subjects.forEach(s => {
      const color = s.percent >= 75 ? '#2E7D32' : '#dc3545';
      const wrapper = document.createElement('div');
      wrapper.style.marginBottom = '16px';
      wrapper.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px;">
          <span style="font-weight: 500;">${s.code}</span>
          <span style="font-weight: 600;">${s.percent}%</span>
        </div>
        <div style="background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden;">
          <div style="background: ${color}; height: 100%; width: ${s.percent}%; transition: width 0.3s;"></div>
        </div>
      `;
      summary.appendChild(wrapper);
    });

    // Refresh button
    const refreshBtn = document.getElementById('refreshAttendance');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        showLoader(600);
        // Simulate refresh
        setTimeout(() => {
          renderAttendance();
        }, 600);
      });
    }
  }

  // Courses render
  function renderCourses() {
    const tbody = document.getElementById('coursesTableBody');
    tbody.innerHTML = '';
    window.SampleData.courses.forEach(c => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${c.code}</td>
        <td>${c.name}</td>
        <td>${c.teacher}</td>
        <td>${c.section}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Challans render
  function renderChallans() {
    const tbody = document.getElementById('challanTableBody');
    tbody.innerHTML = '';
    window.SampleData.challans.forEach(ch => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${ch.challanNo}</td>
        <td>${ch.type}</td>
        <td><span class="badge ${ch.status === 'Paid' ? 'badge-success' : 'badge-warning'}">${ch.status}</span></td>
        <td>${ch.issueDate}</td>
        <td>${ch.dueDate}</td>
        <td>
          <button class="btn-primary" style="padding: 6px 12px; font-size: 13px;">
            <i class="fa-solid fa-print"></i> Print
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Calendar render
  function renderCalendar() {
    const tbody = document.getElementById('calendarTableBody');
    tbody.innerHTML = '';
    window.SampleData.calendar.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${row.activity}</td><td>${row.date}</td>`;
      tbody.appendChild(tr);
    });
  }

  // Profile render
  function renderProfile() {
    const s = window.SampleData.student;
    document.getElementById('profileName').textContent = s.name;
    document.getElementById('profileRoll').textContent = s.roll;
  }

  // Initial render
  renderDashboard();
})();
