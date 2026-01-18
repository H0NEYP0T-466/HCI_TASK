(function () {
  // Simple auth guard
  const isAuth = localStorage.getItem('isAuthenticated') === 'true';
  const onLoginPage = location.pathname.endsWith('login.html') || location.pathname === '/' || location.pathname === '';
  if (!isAuth && !onLoginPage) { location.href = 'login.html'; return; }

  // Utility: loader feedback
  function showLoader(ms = 600) {
    const el = document.getElementById('globalLoader');
    if (!el) return;
    el.classList.remove('d-none');
    setTimeout(() => el.classList.add('d-none'), ms);
  }

  // Sidebar toggle
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      showLoader(300);
    });
  }

  // Topbar brand click -> dashboard
  const homeBrand = document.getElementById('homeBrand');
  if (homeBrand) {
    homeBrand.addEventListener('click', (e) => {
      e.preventDefault();
      showView('dashboard');
    });
  }

  // Student badge
  const studentInfo = document.getElementById('studentInfo');
  if (studentInfo && window.SampleData) {
    const s = window.SampleData.student;
    studentInfo.textContent = `${s.session}/${s.roll}`;
  }

  // Notifications
  const notifCount = document.getElementById('notifCount');
  const notifBtn = document.getElementById('notifBtn');
  let notifCounter = window.SampleData?.notifications?.length || 0;
  if (notifCount) notifCount.textContent = String(notifCounter);
  if (notifBtn) {
    notifBtn.addEventListener('click', () => {
      showLoader(400);
      const list = (window.SampleData?.notifications || []).map(n => `• ${n.text} (${n.date})`).join('\n');
      alert(list || 'No notifications.');
    });
  }

  // Logout flow
  const logoutBtn = document.getElementById('logoutBtn');
  const logoutLink = document.getElementById('logoutLink');
  const confirmModalEl = document.getElementById('confirmLogoutModal');
  const confirmModal = confirmModalEl ? new bootstrap.Modal(confirmModalEl) : null;
  const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');

  function promptLogout() { if (confirmModal) confirmModal.show(); }
  if (logoutBtn) logoutBtn.addEventListener('click', promptLogout);
  if (logoutLink) logoutLink.addEventListener('click', (e) => { e.preventDefault(); promptLogout(); });
  if (confirmLogoutBtn) {
    confirmLogoutBtn.addEventListener('click', () => {
      localStorage.removeItem('isAuthenticated');
      showLoader(300);
      if (confirmModal) confirmModal.hide();
      setTimeout(() => location.href = 'login.html', 300);
    });
  }

  // Routing
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
    const items = document.querySelectorAll('.sidebar .list-group-item');
    items.forEach(i => {
      if (i.dataset.route === route) i.classList.add('active'); else i.classList.remove('active');
    });
  }
  function showView(route) {
    Object.keys(views).forEach(k => views[k]?.classList.toggle('d-none', k !== route));
    setActiveNav(route);
    showLoader(250);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.dataset.route;
      if (!route) return;
      showView(route);
      if (route === 'attendance') renderAttendance();
      if (route === 'fee') renderChallans();
      if (route === 'courses') renderCourses();
      if (route === 'calendar') renderCalendar();
      if (route === 'dashboard') renderDashboard();
      if (route === 'profile') renderProfile();
    });
  });

  // Dashboard render
  function renderDashboard() {
    const s = window.SampleData.student;
    document.getElementById('enrolledSemester').textContent = s.session;
    document.getElementById('outstandingFee').textContent = s.outstanding.toLocaleString();
    document.getElementById('cgpa').textContent = s.cgpa.toFixed(2);
    document.getElementById('classSection').textContent = s.section;

    // Attendance mini chart - only green/red
    const ctx = document.getElementById('dashboardAttendanceChart');
    if (ctx) {
      const subjects = window.SampleData.attendance.subjects;
      const labels = subjects.map(x => x.code);
      const data = subjects.map(x => x.percent);
      const colors = subjects.map(x => x.percent >= 75 ? '#20c997' : '#dc3545'); // green if >=75%, else red

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{ label: 'Attendance in %', data, backgroundColor: colors }]
        },
        options: { responsive: true, plugins: { legend: { display: true }, tooltip: { enabled: true } }, scales: { y: { beginAtZero: true, max: 100 } } }
      });
    }

    // Recent Challans
    const recentBody = document.getElementById('recentChallansBody');
    if (recentBody) {
      recentBody.innerHTML = '';
      window.SampleData.challans.slice(0, 6).forEach(ch => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${ch.session}</td>
          <td>${ch.type}</td>
          <td>${ch.issueDate}</td>
          <td>${ch.dueDate}</td>
          <td><span class="badge ${ch.status === 'Paid' ? 'bg-success' : 'bg-warning text-dark'}">${ch.status}</span></td>
        `;
        recentBody.appendChild(tr);
      });
    }

    // Calendar
    const calBody = document.getElementById('dashboardCalendarBody');
    if (calBody) {
      calBody.innerHTML = '';
      window.SampleData.calendar.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.activity}</td><td>${row.date}</td>`;
        calBody.appendChild(tr);
      });
    }

    // Courses
    const coursesBody = document.getElementById('dashboardCoursesBody');
    if (coursesBody) {
      coursesBody.innerHTML = '';
      window.SampleData.courses.forEach(c => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${c.name}</td><td>${c.teacher}</td>`;
        coursesBody.appendChild(tr);
      });
    }
  }

  // Attendance
  let attendanceChartInstance = null;
  function renderAttendance() {
    const subjectSelect = document.getElementById('subjectSelect');
    const summary = document.getElementById('attendanceSummary');

    subjectSelect.innerHTML = '';
    window.SampleData.attendance.subjects.forEach((s, idx) => {
      const opt = document.createElement('option');
      opt.value = idx; opt.textContent = `${s.code} — ${s.name}`;
      subjectSelect.appendChild(opt);
    });

    const ctx = document.getElementById('attendanceChart');
    const subjects = window.SampleData.attendance.subjects;
    const labels = subjects.map(x => x.code);
    const data = subjects.map(x => x.percent);
    const baseColors = subjects.map(x => x.percent >= 75 ? '#20c997' : '#dc3545'); // green/red only

    if (ctx) {
      if (attendanceChartInstance) attendanceChartInstance.destroy();
      attendanceChartInstance = new Chart(ctx, {
        type: 'bar',
        data: { labels, datasets: [{ label: 'Attendance in %', data, backgroundColor: baseColors }] },
        options: { responsive: true, plugins: { legend: { display: true }, tooltip: { enabled: true } }, scales: { y: { beginAtZero: true, max: 100 } } }
      });
    }

    summary.innerHTML = '';
    subjects.forEach(s => {
      const color = s.percent >= 75 ? 'bg-success' : 'bg-danger'; // green/red progress bar
      const wrapper = document.createElement('div');
      wrapper.className = 'mb-2';
      wrapper.innerHTML = `
        <div class="d-flex justify-content-between small mb-1"><span>${s.code}</span><span>${s.percent}%</span></div>
        <div class="progress" role="progressbar" aria-valuenow="${s.percent}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar ${color}" style="width: ${s.percent}%"></div>
        </div>
      `;
      summary.appendChild(wrapper);
    });

    // Highlight selected subject using green/red only
    subjectSelect.addEventListener('change', () => {
      const idx = parseInt(subjectSelect.value, 10);
      showLoader(250);
      if (!isNaN(idx)) {
        const highlightColors = subjects.map((x, i) => {
          const base = x.percent >= 75 ? '#20c997' : '#dc3545';
          return i === idx ? base : base; // keep two-color scheme; no other colors
        });
        attendanceChartInstance.data.datasets[0].backgroundColor = highlightColors;
        attendanceChartInstance.update();
      }
    });

    document.getElementById('refreshAttendance').addEventListener('click', () => {
      showLoader(600);
      window.SampleData.attendance.subjects = window.SampleData.attendance.subjects.map(s => {
        const delta = Math.round((Math.random() * 4 - 2) * 10) / 10; // -2..+2
        const next = Math.min(100, Math.max(60, s.percent + delta));
        return { ...s, percent: next };
      });
      renderAttendance();
    });
  }

  // Challans
  function renderChallans() {
    const tbody = document.getElementById('challanTableBody');
    const printSelectedBtn = document.getElementById('printSelectedChallan');
    tbody.innerHTML = '';
    let selectedChallan = null;

    window.SampleData.challans.forEach(ch => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${ch.challanNo}</td>
        <td>${ch.type}</td>
        <td><span class="badge ${ch.status === 'Paid' ? 'bg-success' : 'bg-warning text-dark'}">${ch.status}</span></td>
        <td>${ch.issueDate}</td>
        <td>${ch.dueDate}</td>
        <td>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-outline-primary print-btn"><i class="fa-solid fa-print me-1"></i> Print</button>
            <button class="btn btn-sm btn-outline-secondary select-btn">Select</button>
          </div>
        </td>
      `;
      const printBtn = tr.querySelector('.print-btn');
      const selectBtn = tr.querySelector('.select-btn');

      printBtn.addEventListener('click', () => { showLoader(400); openPrintModal(ch); });
      selectBtn.addEventListener('click', () => {
        selectedChallan = ch; printSelectedBtn.disabled = false; showLoader(200);
        alert(`Selected Challan #${ch.challanNo} (${ch.type}).`);
      });

      tbody.appendChild(tr);
    });

    printSelectedBtn.addEventListener('click', () => { if (!selectedChallan) return; showLoader(400); openPrintModal(selectedChallan); });
  }

  function openPrintModal(ch) {
    const container = document.getElementById('printableArea');
    const student = window.SampleData.student;
    const total = ch.breakdown.reduce((sum, i) => sum + i.amount, 0);
    const amountPayNow = Math.max(0, total - ch.alreadyPaid);

    function copyHtml(copyLabel) {
      return `
      <div class="challan-copy">
        <div class="challan-header">
          <img src="assets/lgu.png" alt="LGU Logo" class="lgu-logo" />
          <div class="title-block">
            <div class="title">Lahore Garrison University</div>
            <div class="subtitle">Student Portal</div>
          </div>
        </div>
        <div class="challan-meta">
          <div><strong>HBL Challan ID:</strong> 3314547 (for HBL Users only)</div>
          <div><strong>1Bill Invoice ID:</strong> 10162051783314547 (for other bank users)</div>
          <div><strong>Issue Date:</strong> ${ch.issueDate} &nbsp; <strong>Challan #</strong> ${ch.challanNo}</div>
          <div><strong>Due Date:</strong> ${ch.dueDate} &nbsp; <strong>Semester:</strong> ${ch.session}</div>
          <div><strong>Roll No.:</strong> ${student.roll} &nbsp; <strong>Category:</strong> 2-SF</div>
          <div><strong>Name:</strong> ${student.name}</div>
          <div><strong>Challan Type:</strong> ${ch.type}</div>
        </div>
        <table class="challan-table">
          <thead><tr><th>#</th><th>Particulars</th><th>Amount</th></tr></thead>
          <tbody>
            ${ch.breakdown.map((i, idx) => `<tr><td>${idx + 1}</td><td>${i.name}</td><td>${i.amount.toLocaleString()}</td></tr>`).join('')}
            <tr><td colspan="2"><strong>Gross Payable</strong></td><td><strong>${total.toLocaleString()}</strong></td></tr>
          </tbody>
        </table>
        <div class="mt-2">
          <div>Already Paid: ${ch.alreadyPaid.toLocaleString()}</div>
          <div>Pre.Outstanding: 0.0000</div>
          <div>Scholarship: ${ch.scholarship.toLocaleString()}</div>
          <div class="challan-total">Amount Paid Now: ${amountPayNow.toLocaleString()}</div>
        </div>
        <div class="challan-footer">Rs. 20/- per day to be charged after due date<br/>${new Date().toLocaleString()}</div>
        <div class="copy-title">${copyLabel} Copy</div>
      </div>`;
    }

    container.innerHTML = `
      <div class="print-layout">
        <div class="challan-grid">
          ${copyHtml('Bank')}
          ${copyHtml('Accounts')}
          ${copyHtml('Student')}
        </div>
      </div>
    `;
    const modalEl = document.getElementById('printModal');
    const modal = new bootstrap.Modal(modalEl); modal.show();
    const printBtn = document.getElementById('printBtn');
    printBtn.onclick = () => { showLoader(300); setTimeout(() => window.print(), 200); };
  }

  // Courses
  function renderCourses() {
    const tbody = document.getElementById('coursesTableBody');
    tbody.innerHTML = '';
    window.SampleData.courses.forEach(c => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${c.code}</td><td>${c.name}</td><td>${c.teacher}</td><td>${c.section}</td>`;
      tbody.appendChild(tr);
    });
  }

  // Calendar
  function renderCalendar() {
    const tbody = document.getElementById('calendarTableBody');
    tbody.innerHTML = '';
    window.SampleData.calendar.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${row.activity}</td><td>${row.date}</td>`;
      tbody.appendChild(tr);
    });
  }

  // Profile
  function renderProfile() {
    document.getElementById('profileName').textContent = window.SampleData.student.name;
    document.getElementById('profileRoll').textContent = window.SampleData.student.roll;
    const editBtn = document.getElementById('profileEditBtn');
    editBtn.onclick = () => { showLoader(300); alert('Profile editing is mocked in this demo.'); };
  }

  // Initialize
  window.addEventListener('DOMContentLoaded', () => {
    renderDashboard(); renderProfile();
  });
})();