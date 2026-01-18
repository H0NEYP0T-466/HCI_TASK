// Sample data for dashboard and modules
window.SampleData = {
  student: {
    name: localStorage.getItem('studentName') || 'Shoaib Rafiq',
    roll: localStorage.getItem('rollNumber') || 'Fa-2023/BSCS/479',
    session: 'Fa–2025',
    section: 'L',
    cgpa: 3.48,
    outstanding: 66528
  },
  attendance: {
    subjects: [
      { code: 'DIP-TH', name: 'DIP Theory', percent: 91 },
      { code: 'DIP-Lab', name: 'DIP Lab', percent: 88 },
      { code: 'HCI-TH', name: 'HCI Theory', percent: 85 },
      { code: 'HCI-Lab', name: 'HCI Lab', percent: 90 },
      { code: 'CA-TH', name: 'CA Theory', percent: 88 },
      { code: 'CA-Lab', name: 'CA Lab', percent: 86 },
      { code: 'AI-TH', name: 'AI Theory', percent: 96 },
      { code: 'AI-Lab', name: 'AI Lab', percent: 92 },
      { code: 'SE-TH', name: 'SE Theory', percent: 89 },
      { code: 'OS-Lab', name: 'OS Lab', percent: 84 },
      { code: 'OS-TH', name: 'OS Theory', percent: 87 }
    ]
  },
  courses: [
    { code: 'DIP-TH', name: 'DIP Theory', teacher: 'Dr. Aisha Riaz', section: 'L' },
    { code: 'DIP-Lab', name: 'DIP Lab', teacher: 'Ms. Zainab Zafar', section: 'L' },
    { code: 'HCI-TH', name: 'HCI Theory', teacher: 'Mr. Husnain Ali', section: 'L' },
    { code: 'HCI-Lab', name: 'HCI Lab', teacher: 'Mr. Husnain Ali', section: 'L' },
    { code: 'CA-TH', name: 'CA Theory', teacher: 'Dr. Muhammad Sadat Amir Khan', section: 'L' },
    { code: 'CA-Lab', name: 'CA Lab', teacher: 'Mr. Ahsan Raza', section: 'L' },
    { code: 'AI-TH', name: 'AI Theory', teacher: 'Dr. Muhammad Sadat Amir Khan', section: 'L' },
    { code: 'AI-Lab', name: 'AI Lab', teacher: 'Ms. Zainab Zafar', section: 'L' },
    { code: 'SE-TH', name: 'SE Theory', teacher: 'Dr. Usman Ahmed', section: 'L' },
    { code: 'OS-Lab', name: 'OS Lab', teacher: 'Mr. Hassan Malik', section: 'L' },
    { code: 'OS-TH', name: 'OS Theory', teacher: 'Dr. Fatima Noor', section: 'L' }
  ],
  calendar: [
    { activity: 'Enrollment Start', date: '08 Sep 2025' },
    { activity: 'Semester Start', date: '08 Sep 2025' },
    { activity: 'Enrollment End', date: '15 Sep 2025' },
    { activity: 'Semester Freeze', date: '13 Sep 2025' }
  ],
  challans: [
    {
      challanNo: '545920',
      type: 'INSTALLMENT-II',
      status: 'Unpaid',
      issueDate: '09 Dec 2025',
      dueDate: '25 Dec 2025',
      session: 'Fa-2025',
      breakdown: [
        { name: 'Tuition Fee', amount: 133056 },
        { name: 'Misc. Fee', amount: 6360 },
        { name: 'Admission Fee', amount: 0 },
        { name: 'Migration Fee', amount: 0 },
        { name: 'Registration', amount: 0 }
      ],
      alreadyPaid: 72888,
      scholarship: 0
    },
    {
      challanNo: '545920-1',
      type: 'REGISTRATION',
      status: 'Paid',
      issueDate: '03 Mar 2025',
      dueDate: '25 Mar 2025',
      session: 'Sp-2025',
      breakdown: [
        { name: 'Tuition Fee', amount: 130000 },
        { name: 'Misc. Fee', amount: 5400 },
        { name: 'Admission Fee', amount: 0 },
        { name: 'Migration Fee', amount: 0 },
        { name: 'Registration', amount: 1500 }
      ],
      alreadyPaid: 135900,
      scholarship: 0
    }
  ],
  notifications: [
    { id: 1, text: 'From: academics@lgu.edu.pk - Your attendance for AI-TH has been updated. Current: 96%', date: '2025-12-12' },
    { id: 2, text: 'From: finance@lgu.edu.pk - Fee challan for Fa-2025 installment-II is now available', date: '2025-12-09' },
    { id: 3, text: 'From: registrar@lgu.edu.pk - Final exam schedule will be announced on December 20th', date: '2025-12-08' },
    { id: 4, text: 'From: academics@lgu.edu.pk - Course evaluation forms are now open for all enrolled courses', date: '2025-12-05' }
  ]
};