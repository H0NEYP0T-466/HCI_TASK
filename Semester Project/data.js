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
      { code: 'AI-TH', name: 'Artificial Intelligence Theory', percent: 96 },
      { code: 'AI-Lab', name: 'Artificial Intelligence Lab', percent: 92 },
      { code: 'CA-TH', name: 'Computer Architecture Theory', percent: 88 },
      { code: 'DIP-TH', name: 'Digital Image Processing Theory', percent: 91 },
      { code: 'H&CG-Lab', name: 'HCI & Computer Graphics Lab', percent: 85 },
      { code: 'OS-TH', name: 'Operating Systems Theory', percent: 87 },
      { code: 'SE-TH', name: 'Software Engineering Theory', percent: 89 }
    ]
  },
  courses: [
    { code: 'AI', name: 'Artificial Intelligence Sec 12', teacher: 'Mr. Muhammad Sadat Amir Khan', section: 'L' },
    { code: 'AI-Lab', name: 'Artificial Intelligence Sec 12', teacher: 'Zainab Zafar', section: 'L' },
    { code: 'CA', name: 'Computer Architecture Sec 12', teacher: 'Mr. Husnain Ali', section: 'L' },
    { code: 'CA2', name: 'Computer Architecture Sec 12', teacher: 'Ahsan Raza', section: 'L' },
    { code: 'DIP', name: 'Digital Image Processing Sec 2', teacher: 'Aisha Riaz', section: 'L' },
    { code: 'DIP2', name: 'Digital Image Processing Sec 2', teacher: 'Aisha Riaz', section: 'L' },
    { code: 'HCG', name: 'HCI & Computer Graphics Sec 12', teacher: 'Mr. Husnain Ali', section: 'L' }
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
    { id: 1, text: 'New attendance updated for AI-TH', date: '2025-12-12' },
    { id: 2, text: 'Fee challan generated for Fa-2025', date: '2025-12-09' }
  ]
};