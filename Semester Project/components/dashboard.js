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
    notificationModal: document.getElementById('notificationModal'),
    notificationModalBody: document.getElementById('notificationModalBody'),
    closeNotificationModal: document.getElementById('closeNotificationModal'),
    notificationBackdrop: document.getElementById('notificationBackdrop'),
    logoutBtn: document.getElementById('logoutBtn'),
    logoutLink: document.getElementById('logoutLink'),
    logoutModal: document.getElementById('logoutModal'),
    closeLogoutModal: document.getElementById('closeLogoutModal'),
    cancelLogout: document.getElementById('cancelLogout'),
    confirmLogout: document.getElementById('confirmLogout'),
    homeBrand: document.getElementById('homeBrand'),
    loader: document.getElementById('loader'),
    sidebar: document.getElementById('sidebar'),
    sidebarBackdrop: document.getElementById('sidebarBackdrop'),
    hamburgerBtn: document.getElementById('hamburgerBtn'),
    mainContent: document.querySelector('.main-content')
  };

  // Sidebar dimensions
  const SIDEBAR_COLLAPSED_WIDTH = '72px';
  const SIDEBAR_EXPANDED_WIDTH = '260px';

  // Sidebar state management
  let sidebarToggled = false;
  let isDesktop = window.matchMedia('(min-width: 769px)').matches;

  // Debounce helper function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Update isDesktop on resize (debounced)
  const handleResize = debounce(() => {
    isDesktop = window.matchMedia('(min-width: 769px)').matches;
    
    // Reset sidebar state on resize
    if (isDesktop) {
      elements.sidebar.classList.remove('open');
      elements.sidebarBackdrop.classList.remove('show');
      sidebarToggled = false;
      collapseSidebar();
    } else {
      elements.mainContent.style.marginLeft = '0';
    }
  }, 150);

  window.addEventListener('resize', handleResize);

  // Helper function to collapse sidebar
  function collapseSidebar() {
    if (isDesktop && elements.mainContent) {
      elements.mainContent.style.marginLeft = SIDEBAR_COLLAPSED_WIDTH;
    }
  }

  // Helper function to expand sidebar
  function expandSidebar() {
    if (isDesktop && elements.mainContent) {
      elements.mainContent.style.marginLeft = SIDEBAR_EXPANDED_WIDTH;
    }
  }

  // Toggle sidebar
  function toggleSidebar() {
    sidebarToggled = !sidebarToggled;
    
    if (sidebarToggled) {
      elements.sidebar.classList.add('open');
      if (!isDesktop) {
        elements.sidebarBackdrop.classList.add('show');
      } else {
        expandSidebar();
      }
    } else {
      elements.sidebar.classList.remove('open');
      elements.sidebarBackdrop.classList.remove('show');
      if (isDesktop) {
        collapseSidebar();
      }
    }
  }

  // Hamburger button click
  if (elements.hamburgerBtn) {
    elements.hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSidebar();
    });
  }

  // Sidebar backdrop click
  if (elements.sidebarBackdrop) {
    elements.sidebarBackdrop.addEventListener('click', () => {
      sidebarToggled = false;
      elements.sidebar.classList.remove('open');
      elements.sidebarBackdrop.classList.remove('show');
    });
  }

  // Sidebar hover effect for content shift (desktop only with hover capability)
  if (elements.sidebar && elements.mainContent) {
    elements.sidebar.addEventListener('mouseenter', () => {
      // Check hover capability dynamically
      const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      if (hasHover && isDesktop && !sidebarToggled) {
        expandSidebar();
      }
    });
    
    elements.sidebar.addEventListener('mouseleave', () => {
      // Check hover capability dynamically
      const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      if (hasHover && isDesktop && !sidebarToggled) {
        collapseSidebar();
      }
    });
  }

  // Initialize sidebar state
  if (isDesktop) {
    collapseSidebar();
  }

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

  // Render notifications in modal
  function renderNotificationsModal() {
    const notifications = window.SampleData?.notifications || [];
    elements.notificationModalBody.innerHTML = '';

    if (notifications.length === 0) {
      elements.notificationModalBody.innerHTML = `
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
      
      // Check if notification relates to a specific route
      let route = null;
      if (notif.text.toLowerCase().includes('attendance')) route = 'attendance';
      else if (notif.text.toLowerCase().includes('fee') || notif.text.toLowerCase().includes('challan')) route = 'fee';
      else if (notif.text.toLowerCase().includes('course')) route = 'courses';
      else if (notif.text.toLowerCase().includes('calendar')) route = 'calendar';
      
      item.innerHTML = `
        <div class="notification-text">${notif.text}</div>
        <div class="notification-date">${notif.date}</div>
      `;
      
      // Add click handler if route exists
      if (route && views[route]) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
          hideNotificationModal();
          
          // Close sidebar if toggled open
          if (sidebarToggled) {
            sidebarToggled = false;
            elements.sidebar.classList.remove('open');
            elements.sidebarBackdrop.classList.remove('show');
          }
          
          collapseSidebar();
          showView(route);
          
          // Render specific views
          if (route === 'attendance') renderAttendance();
          if (route === 'courses') renderCourses();
          if (route === 'fee') renderChallans();
          if (route === 'calendar') renderCalendar();
        });
      }
      
      elements.notificationModalBody.appendChild(item);
    });
  }

  // Show/hide notification modal
  function showNotificationModal() {
    renderNotificationsModal();
    elements.notificationModal.classList.add('show');
  }

  function hideNotificationModal() {
    elements.notificationModal.classList.remove('show');
  }

  // Close notification modal handlers
  if (elements.closeNotificationModal) {
    elements.closeNotificationModal.addEventListener('click', hideNotificationModal);
  }

  if (elements.notificationBackdrop) {
    elements.notificationBackdrop.addEventListener('click', hideNotificationModal);
  }

  // Auto-show notification modal once per session
  const notificationsShown = sessionStorage.getItem('notificationsShown');
  const NOTIFICATION_DELAY = 500; // Delay before showing notification modal
  if (!notificationsShown) {
    // Show modal after a brief delay
    setTimeout(() => {
      showNotificationModal();
      sessionStorage.setItem('notificationsShown', 'true');
    }, NOTIFICATION_DELAY);
  }

  // Keyboard accessibility - Escape key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      if (elements.notificationModal.classList.contains('show')) {
        hideNotificationModal();
      }
      if (elements.logoutModal.classList.contains('show')) {
        hideLogoutModal();
      }
      if (elements.notificationCard.classList.contains('show')) {
        elements.notificationCard.classList.remove('show');
      }
    }
  });

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

      // Close sidebar if toggled open
      if (sidebarToggled) {
        sidebarToggled = false;
        elements.sidebar.classList.remove('open');
        elements.sidebarBackdrop.classList.remove('show');
      }
      
      collapseSidebar();
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

  // Stat card click handlers
  const statCards = document.querySelectorAll('.stat-card[data-route]');
  statCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const route = card.dataset.route;
      if (!route) return;

      // Close sidebar if toggled open
      if (sidebarToggled) {
        sidebarToggled = false;
        elements.sidebar.classList.remove('open');
        elements.sidebarBackdrop.classList.remove('show');
      }

      collapseSidebar();

      // Only navigate if the route view exists
      if (views[route]) {
        showView(route);
        
        // Render specific views
        if (route === 'dashboard') renderDashboard();
        if (route === 'attendance') renderAttendance();
        if (route === 'courses') renderCourses();
        if (route === 'fee') renderChallans();
        if (route === 'calendar') renderCalendar();
        if (route === 'profile') renderProfile();
      }
    });
  });

  // Home brand click
  if (elements.homeBrand) {
    elements.homeBrand.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Close sidebar if toggled open
      if (sidebarToggled) {
        sidebarToggled = false;
        elements.sidebar.classList.remove('open');
        elements.sidebarBackdrop.classList.remove('show');
      }
      
      collapseSidebar();
      showView('dashboard');
      renderDashboard();
    });
  }

  // Dashboard render
  function renderDashboard() {
    const s = window.SampleData.student;
    document.getElementById('enrolledSemester').textContent = s.session;
    document.getElementById('outstandingFee').textContent = s.outstanding;
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
