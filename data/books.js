// Code books used in the lookup drills. "groups" are the chapters (NFPA 72), articles (NEC)
// or sections (IBC) a trainee picks from in the "which chapter?" drill.
export const BOOKS = {
  nfpa72: {
    name: 'NFPA 72', edition: '2022', full: 'National Fire Alarm and Signaling Code', levels: ['l1', 'l2'],
    groups: {
      '1': 'Ch 1 Administration', '3': 'Ch 3 Definitions', '7': 'Ch 7 Documentation', '10': 'Ch 10 Fundamentals',
      '12': 'Ch 12 Circuits and Pathways', '14': 'Ch 14 Inspection, Testing, and Maintenance', '17': 'Ch 17 Initiating Devices',
      '18': 'Ch 18 Notification Appliances', '21': 'Ch 21 Emergency Control Function Interfaces',
      '23': 'Ch 23 Protected Premises Alarm and Signaling Systems', '24': 'Ch 24 Emergency Communications Systems',
      '26': 'Ch 26 Supervising Station Alarm Systems', '27': 'Ch 27 Public Emergency Alarm Reporting Systems',
      '29': 'Ch 29 Single- and Multiple-Station Alarms and Household Signaling Systems'
    },
    groupWord: 'chapter'
  },
  nec: {
    name: 'NFPA 70 (NEC)', edition: '2020', full: 'National Electrical Code', levels: ['l1', 'l2'],
    groups: {
      '90': 'Art 90 Introduction', '100': 'Art 100 Definitions', '110': 'Art 110 Requirements for Electrical Installations',
      '250': 'Art 250 Grounding and Bonding', '300': 'Art 300 General Requirements for Wiring Methods',
      '310': 'Art 310 Conductors for General Wiring', '725': 'Art 725 Class 1, 2 and 3 Circuits',
      '760': 'Art 760 Fire Alarm Systems', '770': 'Art 770 Optical Fiber Cables', 'ch9': 'Chapter 9 Tables'
    },
    groupWord: 'article'
  },
  ibc: {
    name: 'IBC', edition: '2021', full: 'International Building Code', levels: ['l2'],
    groups: {
      'ch3': 'Ch 3 Occupancy Classification', '901': '901 General (Fire Protection Systems)', '903': '903 Automatic Sprinkler Systems',
      '911': '911 Fire Command Center', '913': '913 Fire Pumps', '917': '917 Mass Notification Systems',
      '918': '918 Emergency Responder Communication Coverage', '907.1': '907.1 General', '907.2': '907.2 Where Required (new buildings)',
      '907.3': '907.3 Fire Safety Functions', '907.4': '907.4 Initiating Devices', '907.5': '907.5 Occupant Notification',
      '907.6': '907.6 Installation and Monitoring', '907.7': '907.7 Acceptance Tests and Completion',
      '907.8': '907.8 Inspection, Testing and Maintenance', '915': '915 Carbon Monoxide Detection'
    },
    groupWord: 'section'
  }
};
