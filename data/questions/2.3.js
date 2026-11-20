// NICET FAS Level II · 2.3 Submittal preparation and system layout. Questions keyed by task id.
// Never reuse or renumber an id: progress is saved by id. See README for the format.
export default {
  "2.3.1": [
    {
      id: "2.3.1-01",
      type: "mc",
      q: "Under IBC 2021, when must fire alarm shop drawings be approved?",
      opts: ["Within 30 days after the acceptance test","Before the certificate of occupancy, at any point during the job","Before the system is installed","Only when the building official asks for them in writing"],
      a: 2,
      ex: "IBC 907.1.2 calls for shop drawings prepared to NFPA 72 and submitted for review and approval before installation starts. The trap is treating them like record drawings, which come at the end of the job. Pulling wire ahead of approval puts the rework risk on the contractor.",
      ref: "IBC 2021 907.1.2"
    },
    {
      id: "2.3.1-02",
      type: "multi",
      q: "IBC 2021 907.1.2 has no item list of its own. It sends you to NFPA 72 for shop drawing content. Which THREE of these items are on the NFPA 72-2022 minimum documentation list in 7.2.1?",
      opts: ["Locations of notification appliances, with candela ratings for the visual appliances","The installing contractor's labor rates","The minimum sound pressure levels the audible appliances must produce","Sprinkler hydraulic calculations","Mounting height elevations for wall-mounted devices and appliances"],
      a: [0,2,4],
      ex: "The 2021 IBC only says shop drawings are prepared to NFPA 72 and approved before installation. The itemized list that older IBC editions carried is gone, so the checklist comes from NFPA 72 7.2.1 and 7.4: appliance locations with candela ratings, required sound pressure levels, mounting height elevations, battery and voltage drop calculations, a riser diagram and more. Labor rates are a contract matter. Hydraulic calculations belong to the sprinkler submittal.",
      ref: "NFPA 72-2022 7.2.1; IBC 2021 907.1.2"
    },
    {
      id: "2.3.1-03",
      type: "mc",
      q: "You need to check what NFPA 72-2022 expects on shop drawings (floor plans, riser diagrams, control unit diagrams, calculations). Where do you turn?",
      opts: ["Section 7.3","Section 7.4","Section 7.5","Section 7.7"],
      a: 1,
      ex: "Section 7.4 covers shop drawings (installation documentation). Section 7.3 is design (layout) documentation, 7.5 is completion documentation such as record drawings and the record of completion, and 7.7 is records retention and the documentation cabinet. On an open-book exam, knowing which section to open saves minutes.",
      ref: "NFPA 72-2022 7.4"
    },
    {
      id: "2.3.1-04",
      type: "num",
      q: "A single-story building measures 200 ft by 250 ft. IBC 907.6.4 limits a fire alarm zone to 22,500 sq ft and 300 ft in any direction. Based on area alone, what is the minimum number of zones for this floor? (Whole number.)",
      unit: "zones",
      a: 3,
      tol: 0,
      ex: "Area = 200 x 250 = 50,000 sq ft. 50,000 / 22,500 = 2.22, and you always round up, so 3 zones. Both dimensions are under 300 ft, so the length limit does not add any. The trap is rounding 2.22 down to 2, which leaves zones over the limit.",
      ref: "IBC 2021 907.6.4"
    },
    {
      id: "2.3.1-05",
      type: "multi",
      q: "Which TWO calculations does NFPA 72-2022 Chapter 7 list as part of the minimum documentation for a new fire alarm system?",
      opts: ["Battery capacity calculations","Available fault current at the fire alarm breaker","Conduit fill for every raceway","Voltage drop calculations for notification appliance circuits","Sprinkler system water demand"],
      a: [0,3],
      ex: "The minimum documentation list includes battery calculations and NAC voltage drop calculations. They prove the system will still run the appliances at the end of the standby period. Conduit fill is a real NEC requirement, but it is not one of the calculations Chapter 7 lists for the submittal.",
      ref: "NFPA 72-2022 7.2.1; 7.4"
    },
    {
      id: "2.3.1-06",
      type: "mc",
      q: "A two-story Group B office building has a total occupant load of 350, with 120 of those occupants on the second floor. The first floor is the level of exit discharge. Does IBC 907.2.2 require a manual fire alarm system?",
      opts: ["No. Group B needs 500 or more occupants","Yes. More than 100 occupants are above the lowest level of exit discharge","Yes. Every Group B building over 300 occupants needs one","No. Group B buildings never require a fire alarm system"],
      a: 1,
      ex: "Group B has three triggers: 500 or more occupants in total, more than 100 above or below the lowest level of exit discharge, or a fire area with an ambulatory care facility. Here the 120 people upstairs trip the second one. The trap is stopping at the 500 number. The 300 figure belongs to Group A.",
      ref: "IBC 2021 907.2.2"
    },
    {
      id: "2.3.1-07",
      type: "mc",
      q: "A one-story restaurant at grade has an occupant load of 180. How is it classified, and does IBC 907.2.1 by itself require a manual fire alarm system?",
      opts: ["Group A-2. Required, because the occupant load is over 100","Group B. Not required","Group A-2. Not required by 907.2.1, because the occupant load is under 300","Group M. Required at 500 occupants"],
      a: 2,
      ex: "Restaurants are Group A-2 (food and drink). The Group A trigger is an occupant load of 300 or more, or more than 100 above or below the lowest level of exit discharge. This one is at grade with 180, so 907.2.1 does not call for a system. The 100 figure only applies to occupants above or below the exit discharge level.",
      ref: "IBC 2021 Chapter 3 (Group A); 907.2.1"
    },
    {
      id: "2.3.1-08",
      type: "mc",
      q: "You are gathering project information for a new K-8 school with an occupant load of 400. What does IBC 907.2.3 call for?",
      opts: ["Nothing. Group E needs 500 or more occupants","Smoke alarms in each classroom only","A manual system with horns. Voice is only needed at 1,000 occupants","A manual fire alarm system that notifies occupants with an emergency voice/alarm communication system"],
      a: 3,
      ex: "Group E requires a manual fire alarm system that uses emergency voice/alarm communication. The exceptions are small: no system at an occupant load of 50 or less, and no voice at 100 or less. At 400 occupants this job needs voice, which changes the panel, the power calculations (15 minutes of alarm) and the speaker layout. The 1,000 figure is the Group A voice trigger.",
      ref: "IBC 2021 907.2.3"
    },
    {
      id: "2.3.1-09",
      type: "mc",
      q: "The project is a college classroom building. Which IBC occupancy group do you use to look up the fire alarm requirement?",
      opts: ["Group B (Business)","Group E (Educational)","Group A-3 (Assembly)","Group I-4 (Institutional)"],
      a: 0,
      ex: "IBC Chapter 3 puts education above the 12th grade in Group B. Group E stops at the 12th grade. The trap is the word classroom: picking Group E would send you to 907.2.3 and a voice system the code does not ask for here. Always confirm the occupancy group on the architect's code sheet before you open Section 907.2.",
      ref: "IBC 2021 Chapter 3 (Group B, Group E)"
    },
    {
      id: "2.3.1-10",
      type: "multi",
      q: "Which TWO conditions each trigger a manual fire alarm system in a Group R-2 apartment building under IBC 907.2.9.1?",
      opts: ["A dwelling unit is three or more stories above the lowest level of exit discharge","The building has more than 100 occupants","The building contains more than 16 dwelling units","The building is over 22,500 sq ft","The building contains more than 6 dwelling units"],
      a: [0,2],
      ex: "The R-2 triggers are about unit location and unit count: units three or more stories above the lowest level of exit discharge, units more than one story below the highest level of exit discharge, or more than 16 units. Occupant load is not the R-2 test. The 22,500 sq ft figure is the zone size limit from 907.6.4, a different rule.",
      ref: "IBC 2021 907.2.9.1"
    },
    {
      id: "2.3.1-11",
      type: "mc",
      q: "A fully sprinklered office building qualifies for the exception that omits manual fire alarm boxes because notification activates on sprinkler waterflow. The draft drawings show no manual boxes at all. What do you tell the designer?",
      opts: ["The drawings are correct as shown","Add a manual box at every exit anyway","Manual boxes can be omitted only if smoke detectors cover the whole building","At least one manual box is still required, in an approved location"],
      a: 3,
      ex: "IBC 907.2 requires not fewer than one manual fire alarm box for any system that uses automatic detectors or waterflow devices. The sprinkler exception removes the boxes at the exits, not this one. It gives a person a way to start the alarm, and it is commonly placed at the control unit or another spot the AHJ approves.",
      ref: "IBC 2021 907.2"
    },
    {
      id: "2.3.1-12",
      type: "mc",
      q: "You are assembling shop drawings and the architect's backgrounds do not show ceiling heights or ceiling construction in the areas that get smoke detection. What is the right move?",
      opts: ["Request the information (RFI) or field-verify it, because the shop drawings must show ceiling height and construction","Assume 10 ft smooth ceilings and note it in small print","Leave it off. Ceiling data only matters for sprinkler drawings","Submit as is and fix the spacing during the acceptance test"],
      a: 0,
      ex: "NFPA 72 Chapter 7 expects the shop drawing floor plans to identify ceilings over 10 ft and to show ceiling details such as beams and solid joists wherever automatic detection is proposed. IBC 907.1.2 sends you to NFPA 72 for that content. Beams, joists, slopes and height all change detector spacing, so the reviewer cannot check the layout without them. Guessing a smooth 10 ft ceiling is how layouts fail in the field.",
      ref: "NFPA 72-2022 7.4; IBC 2021 907.1.2"
    },
    {
      id: "2.3.1-13",
      type: "mc",
      q: "You are gathering code information for a new two-story Group F-1 factory. The total occupant load is 650, with 180 of those on the second floor. The first floor is the level of exit discharge and there is no basement. Does the IBC occupancy rule for Group F require a manual fire alarm system?",
      opts: ["Yes. The total occupant load is 500 or more","Yes. More than 100 occupants are above the level of exit discharge","No. Group F needs two or more stories and 500 or more occupants above or below the level of exit discharge, and only 180 are","No. Group F occupancies are never required to have a fire alarm system"],
      a: 2,
      ex: "Group F has a two-part test and both parts must be met: the occupancy is two or more stories, and the combined occupant load above or below the lowest level of exit discharge is 500 or more. This building is two stories, but only 180 people are upstairs. The trap is carrying over the Group B and Group M triggers (500 total, or more than 100 above or below). Those do not apply to factories.",
      ref: "IBC 2021 907.2.4"
    },
    {
      id: "2.3.1-14",
      type: "mc",
      q: "A new hotel (Group R-1) has 40 sleeping units. Using the IBC table for visible alarms in Group R-1 and I-1 sleeping units, how many units must be shown on the drawings with visible notification appliances?",
      opts: ["2 units","4 units","All 40 units","None until a guest asks for one"],
      a: 1,
      ex: "The table steps up with the size of the hotel: 6 to 25 sleeping units need 2, and 26 to 50 need 4. Forty units falls in the second row, so 4 units get strobes that operate from both the in-room smoke alarm and the building system. The trap is reading the first row (2). These rooms also need the higher sleeping-area candela, so mark them clearly on the plans and in the NAC calculations.",
      ref: "IBC 2021 907.5.2.3.2; Table 907.5.2.3.2"
    },
    {
      id: "2.3.1-15",
      type: "num",
      q: "A notification appliance circuit rated 2.0 A serves an employee work area that has audible coverage only. The IBC requires that circuit to be designed with at least 20 percent spare capacity so strobes can be added later. If 20 percent of the circuit rating is left spare, what is the largest load you can put on it today, in amps?",
      unit: "A",
      a: 1.6,
      tol: 0.01,
      ex: "20 percent of 2.0 A is 0.4 A held in reserve. 2.0 - 0.4 = 1.6 A available now. Employee work areas with audible coverage do not need strobes on day one, but the circuits must be ready for them if a hearing-impaired employee is hired. The trap is loading the circuit to its full 2.0 A rating, which leaves nothing for the future strobes. Show the spare capacity in the NAC calculations so the reviewer can see it.",
      ref: "IBC 2021 907.5.2.3.1"
    },
    {
      id: "2.3.1-16",
      type: "mc",
      q: "The architect's code sheet lists a new banquet and event hall as Group A-2 with an occupant load of 1,100. The draft fire alarm layout shows horn strobes. What do you flag?",
      opts: ["Nothing. Horn strobes meet the code for any assembly occupancy","Voice is only required in high-rise buildings","Voice is required in every Group A occupancy of 300 or more","At 1,000 or more occupants the alarm must use an emergency voice/alarm communication system"],
      a: 3,
      ex: "A Group A occupancy with an occupant load of 1,000 or more must signal through an emergency voice/alarm communication system. The 300 figure is the point where a manual fire alarm system is required at all, and it does not bring in voice. Catching this at the information stage matters, because voice changes the control equipment, the appliances (loudspeakers), the wiring and the battery calculation (15 minutes of alarm load).",
      ref: "IBC 2021 907.2.1.1"
    },
    {
      id: "2.3.1-17",
      type: "mc",
      q: "A small private school (Group E) has a total occupant load of 90. What does the IBC call for?",
      opts: ["A manual fire alarm system. Emergency voice/alarm communication is not required at an occupant load of 100 or less","No fire alarm system. Group E starts at 100 occupants","A manual fire alarm system with emergency voice/alarm communication","Smoke alarms in the classrooms only"],
      a: 0,
      ex: "Group E has two small-building exceptions. At an occupant load of 50 or less, no manual fire alarm system is required. At 100 or less, the system is still required but the voice requirement drops out, as long as the manual system starts an approved occupant notification signal. Ninety occupants lands between the two, so the job is a manual system with standard notification. The trap is treating 100 as the point where the whole system starts.",
      ref: "IBC 2021 907.2.3"
    },
    {
      id: "2.3.1-18",
      type: "num",
      q: "A three-story building has floors that each measure 100 ft by 320 ft. Under the IBC zoning rule (each floor zoned separately, no zone over 22,500 sq ft, no zone longer than 300 ft in any direction), what is the minimum number of fire alarm zones for the whole building? (Whole number.)",
      unit: "zones",
      a: 6,
      tol: 0,
      ex: "Work one floor at a time. Each floor is 100 x 320 = 32,000 sq ft. 32,000 / 22,500 = 1.42, so 2 zones by area. The floor is also 320 ft long, which is over 300 ft, so one zone could not run the full length anyway. Two zones of 160 ft each solve both. 3 floors x 2 = 6 zones. The trap is dividing the whole building's 96,000 sq ft by 22,500 and getting 5. A zone can never span two floors.",
      ref: "IBC 2021 907.6.4"
    },
    {
      id: "2.3.1-19",
      type: "mc",
      q: "A designer proposes a conventional zoned control unit for a new single-story retail building of 18,000 sq ft. A coworker says the IBC requires every initiating device to be identified individually at the panel. Who is right?",
      opts: ["The coworker. Every new system must identify each device","The designer. Single-story buildings under 22,500 sq ft are an exception to the device identification rule","The coworker. The exception only applies under 5,000 sq ft","The designer. Device identification is only required in high-rise buildings"],
      a: 1,
      ex: "The IBC's general rule is that the system identifies the specific initiating device: its address, location, type and status. Fire alarm systems in single-story buildings of less than 22,500 sq ft are one of the listed exceptions, so a zoned panel is permitted here. Put the building area and story count on your information sheet, because they decide this. An owner or specification can still ask for an addressable system.",
      ref: "IBC 2021 907.6.3"
    },
    {
      id: "2.3.1-20",
      type: "mc",
      q: "The IBC requires a fire alarm system in a new office building. The draft shop drawings show a local system with no connection to a supervising station. What do you tell the designer?",
      opts: ["That is fine. Monitoring is the owner's choice","Monitoring is only required when the building has sprinklers","Monitoring is only required for Group I and Group R occupancies","A fire alarm system required by the IBC must be monitored by an approved supervising station"],
      a: 3,
      ex: "Fire alarm systems required by the IBC are monitored by an approved supervising station in accordance with NFPA 72. The exceptions are narrow: single- and multiple-station smoke alarms, smoke detectors in Group I-3, and sprinkler systems in one- and two-family dwellings. The shop drawings need to show the transmitter and its communication pathway, and the riser and sequence of operation need to show what is sent off site.",
      ref: "IBC 2021 907.6.6"
    },
    {
      id: "2.3.1-21",
      type: "mc",
      q: "You are filling in the input/output matrix. The building fire alarm system is monitored at a constantly attended location. Following the IBC's main rule for duct smoke detectors, which signal does a duct smoke detector start, along with shutting down its air handler?",
      opts: ["A supervisory signal","A general evacuation alarm","A trouble signal","No signal. It only shuts down the fan"],
      a: 0,
      ex: "The IBC's main rule is that a duct smoke detector starts a visible and audible supervisory signal at a constantly attended location and performs its fire safety function, such as fan shutdown. Where the system must be monitored by a supervising station, duct detectors report only as supervisory and not as a fire alarm. Duct detectors pick up dust and dirty air easily, so the code keeps them from emptying the building. One exception drops the supervisory signal at the attended location where the duct detectors operate the building's notification appliances, so check what the designer and AHJ want. A duct detector is never a substitute for required area detection.",
      ref: "IBC 2021 907.3.1; NFPA 72-2022 Ch 21 (HVAC systems)"
    },
    {
      id: "2.3.1-22",
      type: "multi",
      q: "Which THREE items does NFPA 72-2022 Chapter 7 require in the general information on shop drawings?",
      opts: ["Name of the protected premises, the owner and, where it applies, the occupant","The plan reviewer's approval stamp","Name of the installer or contractor","The total contract price","Date of issue and any revision dates"],
      a: [0,2,4],
      ex: "The shop drawing information list calls for the name of the protected premises, owner and occupant, the installer or contractor, the location of the premises, a device legend with symbols, and the date of issue with revision dates. Revision dates matter in the field: they tell everyone which set is current. An approval stamp is added by the AHJ after review, and contract price is a business matter.",
      ref: "NFPA 72-2022 7.4.4"
    },
    {
      id: "2.3.1-23",
      type: "multi",
      q: "NFPA 72-2022 calls for control unit diagrams for control equipment, power supplies, battery chargers and annunciators. Which TWO items must those diagrams show?",
      opts: ["Smoke detector spacing dimensions","All field wiring terminals and their terminal identifications","Ceiling heights in each room","All indicators and manual controls","Candela settings for each strobe"],
      a: [1,3],
      ex: "A control unit diagram identifies the equipment and its location, every field wiring terminal and its label, the circuits landed on those terminals, all indicators and manual controls, and the field connections to supervising station equipment, releasing equipment and emergency control interfaces. It is the sheet the installer terminates from. Detector spacing, ceiling heights and candela ratings belong on the floor plans.",
      ref: "NFPA 72-2022 7.4.7"
    },
    {
      id: "2.3.1-24",
      type: "mc",
      q: "You are checking a draft sequence of operation matrix before it goes on the shop drawings. The system is monitored off site. Which row is marked wrong?",
      opts: ["Sprinkler waterflow switch: alarm signal, with occupant notification","Loss of AC power at a NAC booster power supply: trouble signal","Dry-pipe sprinkler low air pressure switch: trouble signal","Sprinkler control valve tamper switch: supervisory signal"],
      a: 2,
      ex: "Low air pressure on a dry-pipe system is an off-normal condition of the sprinkler system. It is not a fire, and it is not a fault in the fire alarm system's own wiring or power, so it is a supervisory signal, the same as a closed valve. Trouble is for faults in the fire alarm system itself, such as lost AC power or an open circuit. The IBC requires sprinkler alarm, supervisory and trouble signals to be distinct and sent to the supervising station. Marking low air as trouble hides a dry valve that is about to trip among wiring faults. The matrix (or a narrative) is where the reviewer checks this.",
      ref: "NFPA 72-2022 7.4.9; 17.17 (supervisory signal-initiating devices); IBC 2021 903.4.1"
    },
    {
      id: "2.3.1-25",
      type: "mc",
      q: "A plan reviewer asks where the shop drawings show the location of the fire alarm system's primary power disconnecting means (the branch-circuit breaker). In the NFPA 72-2022 Chapter 7 lists, which part of the shop drawing set carries that information?",
      opts: ["The floor plan drawings","The riser diagram","The input/output matrix","The voltage drop calculations"],
      a: 0,
      ex: "The floor plan list in the shop drawing section includes the locations of the primary power disconnecting means, along with device locations, riser locations, room names, a graphic scale and a north arrow. A riser is a cross-section view of circuits and floors, and it does not locate equipment in a room. Do not forget the breakers for booster power supplies. The NEC separately requires the breaker location to be marked at the control unit itself.",
      ref: "NFPA 72-2022 7.4 (floor plan drawings); NEC 2020 760.121(B)"
    },
    {
      id: "2.3.1-26",
      type: "mc",
      q: "A three-story hotel (Group R-1) has interior corridors serving the sleeping units. The draft drawings show a manual fire alarm system and smoke alarms in the guest rooms, and nothing else. What is missing under the IBC?",
      opts: ["Heat detectors in every guest room","Nothing. The drawings are complete","Duct smoke detectors on every bathroom exhaust fan","Automatic smoke detection in the interior corridors that serve the sleeping units"],
      a: 3,
      ex: "Group R-1 has three pieces: a manual fire alarm system, an automatic smoke detection system in interior corridors serving sleeping units, and smoke alarms in the sleeping units. The corridor detectors are system detectors connected to the control unit. They are left off drawings more often than the other two. The corridor rule does not apply where there are no interior corridors and each unit's egress door opens directly to an exit, as in an exterior-entry motel.",
      ref: "IBC 2021 907.2.8; 907.2.8.2"
    },
    {
      id: "2.3.1-27",
      type: "mc",
      q: "A new 40-bed nursing home is classified Group I-2. A coworker wants to know the occupant load before deciding if a manual fire alarm system is needed. What do you tell them?",
      opts: ["A system is needed only at 300 or more occupants","Group I occupancies require a manual fire alarm system no matter what the occupant load is","A system is needed only where more than 100 occupants are above the level of exit discharge","Group I-2 needs smoke alarms only"],
      a: 1,
      ex: "A manual fire alarm system is required in all Group I occupancies. There is no occupant load threshold, because the occupants cannot get themselves out. The subsections then add automatic smoke detection that depends on the group (I-1, I-2 or I-3). The trap is hunting for a number like the 300 for Group A or the 500 for Group B. The occupancy group on the architect's code sheet answers this one by itself.",
      ref: "IBC 2021 907.2.6"
    },
    {
      id: "2.3.1-28",
      type: "multi",
      q: "An office building has an occupied floor 90 ft above the lowest level of fire department vehicle access, which makes it a high-rise. Which THREE systems does the IBC high-rise fire alarm section call for?",
      opts: ["An automatic smoke detection system","A manual fire alarm box every 100 ft on each floor","A fire department communication system","An emergency voice/alarm communication system","Horns in place of loudspeakers on floors below the alarm floor"],
      a: [0,2,3],
      ex: "A high-rise has an occupied floor more than 75 ft above the lowest level of fire department vehicle access. The IBC high-rise section calls for automatic smoke detection, a fire department communication system and an emergency voice/alarm communication system. It does not matter that a Group B building under 500 occupants would not otherwise need a system. The 100 ft figure is the corridor strobe spacing from NFPA 72. It is not a manual box rule.",
      ref: "IBC 2021 907.2.13 (high-rise buildings; the 75 ft definition is in Chapter 2)"
    },
    {
      id: "2.3.1-29",
      type: "mc",
      q: "A three-story Group B office building has a total occupant load of 240, with 40 occupants on each upper floor. The first floor is the level of exit discharge. An atrium connects all three stories. Is a fire alarm system required?",
      opts: ["No. Group B needs 500 or more occupants","No. Only 80 occupants are above the level of exit discharge, and Group B needs more than 100","Yes. An atrium that connects more than two stories requires a fire alarm system","Yes. Every building of three stories or more requires one"],
      a: 2,
      ex: "The occupancy rules are only part of IBC Section 907.2. Special building features have their own triggers, and an atrium connecting more than two stories is one of them. So the atrium decides this job. Both \"No\" answers read the Group B rule correctly (240 is under 500, and 40 + 40 = 80 above the level of exit discharge is not more than 100), but they stop reading too soon. Read the whole 907.2 list against the architect's code sheet before you say no system is required.",
      ref: "IBC 2021 907.2.14"
    },
    {
      id: "2.3.1-30",
      type: "mc",
      q: "A new four-story self-storage building has interior corridors. A coworker says storage occupancies never need a fire alarm system. What does IBC 2021 say?",
      opts: ["The coworker is right. Group S has no fire alarm requirement","A system is required only above 500 occupants","Smoke detectors are required inside every storage unit","Public and self-storage occupancies three stories or more need a manual fire alarm system for the interior corridors and interior common areas"],
      a: 3,
      ex: "The 2021 IBC added a Group S rule: public and self-storage occupancies three or more stories in height need a manual fire alarm system that covers the interior corridors and interior common areas. It was new in 2021 and it pushed the later subsections down by one number, so an older book will lead you to the wrong place. The rule covers corridors and common areas. It does not call for detectors inside the individual units.",
      ref: "IBC 2021 907.2.10"
    }
  ],
  "2.3.2": [
    {
      id: "2.3.2-01",
      type: "mc",
      q: "The design shows one ceiling-mounted strobe centered in a 30 ft x 30 ft room. Your site survey finds the lens will sit at 12 ft above the floor, not 10 ft. Using Table 18.5.5.7.1(b), what is the minimum candela?",
      opts: ["30 cd","45 cd","60 cd","75 cd"],
      a: 1,
      ex: "The height column in the ceiling table is a maximum lens height. A lens at 12 ft is above the 10 ft rows, so you use the 20 ft rows: 30 x 30 at 20 ft needs 45 cd. The trap is reading the 10 ft row (30 cd) because 12 ft is close to 10. The 75 cd figure is the 30 ft row.",
      ref: "NFPA 72-2022 Table 18.5.5.7.1(b)"
    },
    {
      id: "2.3.2-02",
      type: "num",
      q: "The layout shows a 180 ft corridor, 10 ft wide, with strobes placed by the corridor method (within 15 ft of each end, no more than 100 ft apart). On site you find a pair of fire doors at the midpoint, which splits it into two 90 ft corridors. What is the minimum total number of strobes now?",
      unit: "strobes",
      a: 4,
      tol: 0,
      ex: "A fire door interrupts the viewing path, so each side is treated as its own corridor. Each 90 ft corridor needs a strobe within 15 ft of both ends: 2 strobes, about 60 ft apart. Two corridors x 2 = 4. Without the doors, the 180 ft corridor needed only 3 (15 ft from each end leaves 150 ft, which needs one more in the middle).",
      ref: "NFPA 72-2022 18.5.5.8; 18.5.5.8.5"
    },
    {
      id: "2.3.2-03",
      type: "mc",
      q: "A 40 ft x 60 ft room has a level 12 ft ceiling with beams 18 in. deep, spaced 6 ft on center. The drawings show spot smoke detectors at smooth-ceiling spacing. What does your survey tell you?",
      opts: ["The layout is fine. Beams under 24 in. are ignored","Mount the detectors on the beam bottoms at 30 ft spacing","A detector is needed on the ceiling in each beam pocket","Use half spacing in both directions"],
      a: 2,
      ex: "Compare the beams with the ceiling height H = 12 ft. Beam depth of 18 in. is more than 10 percent of H (14.4 in.), so the beams count. Beam spacing of 6 ft is more than 40 percent of H (4.8 ft), so each pocket acts like its own small room and gets a detector on the ceiling. If the beams were closer than 0.4H, you would use smooth spacing along the beams and half spacing across them.",
      ref: "NFPA 72-2022 17.7.4.2.4.2"
    },
    {
      id: "2.3.2-04",
      type: "num",
      q: "Heat detectors with a listed spacing of 50 ft are shown in a warehouse. Your survey finds a smooth, level ceiling 15 ft high. Table 17.6.3.5.1 gives a multiplier of 0.77 for ceilings above 14 ft and up to 16 ft. What is the maximum spacing between detectors, in feet?",
      unit: "ft",
      a: 38.5,
      tol: 0.1,
      ex: "50 ft x 0.77 = 38.5 ft. Heat detectors on ceilings above 10 ft (up to 30 ft) must have their listed spacing reduced, because the heat plume cools and spreads as it rises. The trap is using the full listed 50 ft because the ceiling is smooth. This table is for heat detectors. Spot smoke detectors have no matching reduction table.",
      ref: "NFPA 72-2022 17.6.3.5.1; Table 17.6.3.5.1"
    },
    {
      id: "2.3.2-05",
      type: "num",
      q: "A corridor is 10 ft wide with a smooth ceiling. Spot smoke detectors go on the corridor centerline. Using the rule that every point on the ceiling must be within 0.7 x 30 ft = 21 ft of a detector, what is the maximum spacing between detectors? Method: half-spacing = square root of (21<sup>2</sup> - 5<sup>2</sup>), then double it. Answer in feet to one decimal.",
      unit: "ft",
      a: 40.8,
      tol: 0.25,
      ex: "The farthest point is the corner of each detector's coverage, 5 ft off the centerline. Half-spacing = square root of (441 - 25) = 20.4 ft, so the spacing is 40.8 ft (often quoted as 41 ft). This is why narrow corridors can stretch past 30 ft. The end detectors must still be within 20.4 ft of the end walls.",
      ref: "NFPA 72-2022 17.7.4.2.3.1"
    },
    {
      id: "2.3.2-06",
      type: "mc",
      q: "An open office has a 10 ft ceiling. On site you find the tenant has built partitions that stop 15 in. below the ceiling. The smoke detector layout was drawn for one open room. What is the effect?",
      opts: ["The partitions are treated as walls, so the layout must be rechecked for each enclosed area","None. Only full-height walls affect detector spacing","None, as long as the gap at the top is at least 12 in.","The detectors must be changed to heat detectors"],
      a: 0,
      ex: "Partitions that reach within the top 15 percent of the ceiling height are treated as walls for detector spacing. Here 15 percent of 120 in. is 18 in., and the gap is only 15 in., so smoke will bank up behind them. Each enclosed area needs coverage and the spacing is measured from the partitions. This is a classic change that never makes it back to the drawings.",
      ref: "NFPA 72-2022 Ch 17 (partitions near the ceiling); 17.7.4.2.3.1"
    },
    {
      id: "2.3.2-07",
      type: "mc",
      q: "The reflected ceiling plan was revised after the fire alarm layout was drawn. A spot smoke detector now lands 18 in. from a supply air diffuser. What do you do?",
      opts: ["Leave it. Moving air helps carry smoke to the detector","Swap it for a higher-sensitivity detector in the same spot","Add a second detector on the other side of the diffuser","Relocate it out of the direct airflow, at least 3 ft from the diffuser"],
      a: 3,
      ex: "Supply air can push smoke away from the detector or dilute it, and it also blows dust into the chamber. The rule in 17.7.5 is that a detector may not sit where airflow prevents it from operating. The annex to that section gives the working number: out of the direct air stream and no closer than 36 in. to a supply diffuser or return air opening, and farther for large or high-velocity outlets. Raising the sensitivity makes nuisance alarms more likely and does not fix the airflow.",
      ref: "NFPA 72-2022 17.7.5 and its annex"
    },
    {
      id: "2.3.2-08",
      type: "mc",
      q: "A staff area is designed for private mode signaling. Your sound survey measures an average ambient level of 52 dBA and a maximum level of 60 dBA lasting at least 60 seconds. What is the minimum level the audible signal must produce there?",
      opts: ["62 dBA","65 dBA","67 dBA","75 dBA"],
      a: 1,
      ex: "Private mode needs 10 dB above the average ambient or 5 dB above the 60-second maximum, whichever is greater. 52 + 10 = 62 and 60 + 5 = 65, so 65 dBA governs. The 67 dBA answer uses the public mode 15 dB. The 75 dBA figure is the sleeping area minimum. Always work both numbers and take the larger.",
      ref: "NFPA 72-2022 Ch 18 (private mode audible requirements)"
    },
    {
      id: "2.3.2-09",
      type: "multi",
      q: "You are surveying hotel guest rooms against the notification design. Which TWO requirements apply to the audible signal that is meant to wake a sleeping guest?",
      opts: ["At least 75 dBA, measured at the pillow","A standard 3,100 Hz piezo sounder is acceptable in the room","Measured 5 ft above the floor with the room door open","A low-frequency signal of 520 Hz from equipment listed for it","A corridor horn that delivers 15 dB over ambient at the room door is enough"],
      a: [0,3],
      ex: "Sleeping areas need the greatest of 15 dB over average ambient, 5 dB over the 60-second maximum, or 75 dBA, measured at the pillow with doors and other barriers in place. Appliances provided to wake occupants must also produce the 520 Hz low-frequency tone. A closed door can cost 10 to 24 dB or more, so corridor horns rarely reach the pillow at 75 dBA.",
      ref: "NFPA 72-2022 18.4.6.1; 18.4.6.3; IBC 2021 907.5.2.1.3"
    },
    {
      id: "2.3.2-10",
      type: "multi",
      q: "Your sound survey of a stamping plant shows an average ambient level of 107 dBA on the production floor. The design shows horns only. Which TWO statements are correct?",
      opts: ["Visual notification appliances are required in that area","The horns must be sized to deliver 122 dBA (ambient plus 15 dB)","The total sound level, ambient plus appliances, may not exceed 110 dBA","The visual requirement starts at 95 dBA","Private mode levels may be used instead, with no other change"],
      a: [0,2],
      ex: "Above 105 dBA average ambient, visual appliances are required, and the total sound level is capped at 110 dBA. You cannot meet 15 dB over a 107 dBA ambient without breaking that cap, which is exactly why the code turns to strobes. Neither NFPA 72-2022 nor IBC 2021 has a 95 dBA trigger. Report the finding so the design can be revised before installation.",
      ref: "IBC 2021 907.5.2.1.2; NFPA 72-2022 Ch 18 (audible limits)"
    },
    {
      id: "2.3.2-11",
      type: "mc",
      q: "The drawings call for exposed Type FPL cable above the corridor ceiling. On your survey you find that the space above the ceiling is used as a return air plenum. What does the NEC require?",
      opts: ["Type FPLP cable, or the cable installed in a permitted raceway","Nothing. FPL is good for any space inside a building","Type FPLR cable, because air moves vertically","The cable derated to 80 percent"],
      a: 0,
      ex: "Other spaces used for environmental air fall under NEC 300.22(C), which Article 760 points to. Table 760.154 allows plenum-rated FPLP there. General-purpose FPL is not permitted exposed in a plenum. FPLR is the riser rating for vertical runs between floors, and it does not cover plenums. Catching this before the cable is ordered saves a full re-pull.",
      ref: "NEC 2020 760.3(B); 300.22(C); Table 760.154"
    },
    {
      id: "2.3.2-12",
      type: "mc",
      q: "The layout places a NAC power extender (booster) in a storage closet that is not continuously occupied. On site you see no detection in the closet, and the drawings show none. What does IBC 907.4.1 call for?",
      opts: ["Nothing. Only the main control unit needs protection","A manual fire alarm box next to the booster","A smoke detector at the booster location (a heat detector if conditions rule out smoke)","A sprinkler head above the booster"],
      a: 2,
      ex: "In areas that are not continuously occupied, the IBC requires a single smoke detector at each fire alarm control unit, NAC power extender and supervising station transmitter. The idea is to catch a fire that threatens the equipment before it takes the system down. People remember the main panel and forget the boosters and the communicator. A heat detector is allowed where the environment rules out a smoke detector.",
      ref: "IBC 2021 907.4.1"
    },
    {
      id: "2.3.2-13",
      type: "mc",
      q: "The design shows one wall-mounted strobe rated 34 cd for a room drawn as 30 ft x 30 ft. Your survey finds the room is really 30 ft x 50 ft, and the strobe is centered on one of the 50 ft walls. The wall-mount table lists 30 x 30 = 34 cd, 40 x 40 = 60 cd, 50 x 50 = 94 cd and 60 x 60 = 135 cd. What is the minimum rating for a single strobe?",
      opts: ["34 cd","60 cd","94 cd","135 cd"],
      a: 2,
      ex: "For one wall strobe in a room that is not square, the room size is the larger of two numbers: the distance to the opposite wall (30 ft), or double the distance to the farthest side wall (2 x 25 = 50 ft). That makes it a 50 x 50 room, which needs 94 cd. The trap is keeping 34 cd because the strobe still faces a wall 30 ft away. The light also has to reach the corners 25 ft to each side. Two smaller strobes covering two squares is the other way to solve it.",
      ref: "NFPA 72-2022 18.5.5.7.4; Table 18.5.5.7.1(a)"
    },
    {
      id: "2.3.2-14",
      type: "mc",
      q: "The drawings show ceiling-mounted strobes on the ceiling of a lobby. Your survey finds the finished ceiling is 36 ft above the floor. What does NFPA 72 allow?",
      opts: ["Suspend the appliances at or below 30 ft, or use wall-mounted appliances from the wall table, or a performance-based design","Mount them at 36 ft and use the 30 ft rows of the ceiling table","Mount them at 36 ft and double the candela rating","Mount them at 36 ft and add 15 cd for the extra height"],
      a: 0,
      ex: "The ceiling table stops at a lens height of 30 ft. Above that there are three choices: hang the appliance so the lens is at or below 30 ft, switch to wall-mounted appliances sized from the wall table, or have the designer do a performance-based layout. Reading the 30 ft rows for a 36 ft ceiling is the trap. The table has no data past 30 ft, and there is no rule of thumb for adding candela. This goes back to the designer before any boxes are set.",
      ref: "NFPA 72-2022 18.5.5.7.6; Table 18.5.5.7.1(b)"
    },
    {
      id: "2.3.2-15",
      type: "num",
      q: "A ceiling-mounted strobe was designed at the center of a 30 ft x 30 ft room with a 10 ft ceiling. On site, a light fixture forces it to a spot 10 ft from one wall and 20 ft from the opposite wall. It stays centered in the other direction. The 10 ft rows of the ceiling table list 20 x 20 = 15 cd, 30 x 30 = 30 cd, 40 x 40 = 60 cd and 44 x 44 = 75 cd. What is the minimum candela rating now?",
      unit: "cd",
      a: 60,
      tol: 0,
      ex: "The ceiling table assumes the strobe is in the center of the room. When it is off center, the room size becomes twice the distance to the farthest wall: 2 x 20 ft = 40 ft, so read the 40 x 40 row. At a 10 ft lens height that is 60 cd. The trap is leaving it at 30 cd because the room itself did not change. Moving a strobe 5 ft off center doubled the candela here, and that changes the NAC current and the voltage drop calculation too.",
      ref: "NFPA 72-2022 18.5.5.7 (ceiling appliance not centered); Table 18.5.5.7.1(b)"
    },
    {
      id: "2.3.2-16",
      type: "num",
      q: "The drawings show a storage room as 30 ft x 60 ft with two spot smoke detectors. Your survey measures it at 45 ft x 75 ft, with a smooth, level 10 ft ceiling. Using the grid method (no more than 30 ft between detectors and no more than 15 ft from any wall), what is the minimum number of detectors? (Whole number.)",
      unit: "detectors",
      a: 6,
      tol: 0,
      ex: "Work each direction. Across the 45 ft width, one row could only reach 15 ft to each wall (30 ft), so you need 2 rows. Along the 75 ft length, 75 / 30 = 2.5, so round up to 3 detectors per row. 2 x 3 = 6. A 2 x 2 layout fails the other test as well: each detector would cover a 22.5 ft x 37.5 ft area, and its far corner would be 21.9 ft away, which is over the 21 ft (0.7 x 30) limit. A room that grew by 15 ft each way tripled the detector count.",
      ref: "NFPA 72-2022 17.7.4.2.3.1"
    },
    {
      id: "2.3.2-17",
      type: "num",
      q: "Heat detectors with a listed spacing of 30 ft were laid out for a 60 ft x 96 ft shop, assuming a 10 ft ceiling. Your survey finds a smooth, level ceiling 19 ft high. The high-ceiling table gives a multiplier of 0.64 for ceilings above 18 ft and up to 20 ft. Using the grid method (reduced spacing between detectors, half that spacing to the walls), what is the minimum number of detectors? (Whole number.)",
      unit: "detectors",
      a: 20,
      tol: 0,
      ex: "Reduced spacing = 30 x 0.64 = 19.2 ft. Across the 60 ft width: 60 / 19.2 = 3.1, round up to 4 rows. Along the 96 ft length: 96 / 19.2 = 5 detectors. 4 x 5 = 20. At a 10 ft ceiling the same room needed 2 x 4 = 8. The trap is keeping the listed 30 ft spacing because the ceiling is smooth. Heat detectors on ceilings above 10 ft and up to 30 ft must be spaced closer, because the heat plume cools and spreads on the way up.",
      ref: "NFPA 72-2022 17.6.3.5.1; Table 17.6.3.5.1; 17.6.3.1.1"
    },
    {
      id: "2.3.2-18",
      type: "mc",
      q: "A horn rated 88 dBA at 10 ft covers an open work area in public mode. The design assumed an average ambient of 54 dBA from the annex table. Your sound survey measures an average ambient of 62 dBA with no louder sustained source, and the farthest occupied point is 40 ft from the horn. Using the 6 dB per doubling rule, what do you report?",
      opts: ["It passes. The horn's 88 dBA rating is more than the 77 dBA required","It passes. 76 dBA arrives and the annex table only requires 69 dBA","It is short. About 76 dBA arrives and the measured ambient requires 77 dBA","It fails. The signal must reach 110 dBA everywhere"],
      a: 2,
      ex: "From 10 ft to 40 ft is two doublings, so the level drops 12 dB: 88 - 12 = 76 dBA. Public mode needs 15 dB over the average ambient: 62 + 15 = 77 dBA. The layout is 1 dB short at the far point. The annex ambient table is design guidance, and a measured level replaces it. The 88 dBA rating only applies 10 ft from the horn. The 110 dBA figure is the maximum allowed, not a target. Report it so an appliance can be added or moved before rough-in.",
      ref: "NFPA 72-2022 18.4.4.1; Table A.18.4.4"
    },
    {
      id: "2.3.2-19",
      type: "mc",
      q: "The design shows one 177 cd wall-mounted strobe in a hotel sleeping room drawn as 12 ft x 15 ft. Your survey finds the room was built as a 12 ft x 26 ft suite. The strobe is on the wall at the entry end, and the head of the bed is at the far end, about 22 ft from the strobe. What do you report?",
      opts: ["Nothing. 177 cd is the highest sleeping-area rating, so it covers any sleeping room","Change the strobe to the wall-table rating for a 26 ft room","Nothing, as long as the top of the lens is at least 24 in. below the ceiling","The strobe is too far from the bed. It must be within 16 ft of the pillow, so move it or add one"],
      a: 3,
      ex: "Sleeping-area strobes have their own rules. The rating depends on how far the top of the lens is below the ceiling: 110 cd at 24 in. or more, and 177 cd at less than 24 in. Then there is a distance rule: in a room with any dimension over 16 ft, the strobe must be within 16 ft of the pillow. At 22 ft this one fails, whatever its rating. The trap is thinking the bigger 177 cd strobe covers a bigger room. The room-size table is for people who are awake, and it does not apply to waking a sleeper. Measure from the strobe to the head of the bed on the survey.",
      ref: "NFPA 72-2022 18.5.5.10"
    },
    {
      id: "2.3.2-20",
      type: "multi",
      q: "On a level ceiling, your survey finds beams deeper than 10 percent of the ceiling height. Which TWO conditions still allow smooth-ceiling spacing for spot smoke detectors?",
      opts: ["The room is 900 sq ft or less","The beams are steel, not wood","It is a corridor 15 ft wide or less, with the beams running across the corridor","The detectors are photoelectric","The ceiling is higher than 20 ft"],
      a: [0,2],
      ex: "Deep beams normally bring in the beam-pocket rules. The level-ceiling section gives two reliefs: rooms of 900 sq ft or less, and corridors 15 ft wide or less with beams or solid joists running perpendicular to the corridor length. In both, smooth-ceiling spacing is permitted, because the small space fills with smoke quickly. In those corridors the detectors may go on the ceiling, the sidewalls or the bottoms of the beams. Beam material and detector type do not change the spacing.",
      ref: "NFPA 72-2022 17.7.4.2.4.2"
    },
    {
      id: "2.3.2-21",
      type: "mc",
      q: "A large open room has a level ceiling 14 ft high. Your survey finds beams 20 in. deep, spaced 4 ft on center. What spacing applies to spot smoke detectors?",
      opts: ["30 ft in both directions. The beams can be ignored","30 ft along the beams and 15 ft across them","15 ft in both directions","One detector on the ceiling in every beam pocket"],
      a: 1,
      ex: "Compare the beams with the ceiling height H = 14 ft. Ten percent of H is 16.8 in., and the beams are 20 in. deep, so they count. Forty percent of H is 5.6 ft, and the beams are only 4 ft apart, which is closer than that. For deep beams spaced closer than 0.4 H, use smooth-ceiling spacing parallel to the beams and half spacing perpendicular to them. Detectors may go on the ceiling or on the beam bottoms. A detector in every pocket is the rule when the beams are 0.4 H or more apart.",
      ref: "NFPA 72-2022 17.7.4.2.4.2"
    },
    {
      id: "2.3.2-22",
      type: "mc",
      q: "The drawings show spot smoke detectors in a space labeled Storage. Your survey finds it is an enclosed loading dock where diesel trucks idle with the doors down. What do you recommend to the designer?",
      opts: ["Change to heat detectors, because the conditions there rule out smoke detectors","Install the smoke detectors as drawn and lower their sensitivity later","Delete detection from the dock completely","Install the smoke detectors and leave them bypassed during deliveries"],
      a: 0,
      ex: "Where an automatic smoke detection system is required, the IBC calls for smoke detectors unless ambient conditions prohibit them. Then approved heat detectors are permitted. Engine exhaust, dust and temperature swings on a dock will cause nuisance alarms and shorten detector life. Deleting the coverage or leaving devices bypassed both leave required protection out of service. Actual room use is one of the main things a site survey is there to check.",
      ref: "IBC 2021 907.4.3; NFPA 72-2022 Ch 17 (smoke detector environmental limits)"
    },
    {
      id: "2.3.2-23",
      type: "mc",
      q: "A building that is not sprinklered has a manual fire alarm box at each exit. Your survey finds a new tenant wall that lengthens the walking path, so the farthest point on the floor is now 230 ft of travel from the nearest box. What does this change?",
      opts: ["Nothing. Boxes are only required at the exits","Nothing. The limit is 300 ft, the same as the zone length","The existing boxes must be moved closer together, with no boxes added","An additional manual fire alarm box is needed so travel to the nearest box is no more than 200 ft"],
      a: 3,
      ex: "Manual boxes go within 5 ft of the entrance to each exit. In a building that is not sprinklered, more boxes are added wherever the travel distance to the nearest box would be over 200 ft. Travel distance is the path a person walks, so a new wall can break a layout that scaled fine on the old plan. Moving an exit box away from its exit breaks the 5 ft rule. The 300 ft figure is the zone length limit, a different rule.",
      ref: "IBC 2021 907.4.2.1; NFPA 72-2022 17.15 (manual fire alarm boxes)"
    },
    {
      id: "2.3.2-24",
      type: "mc",
      q: "A one-story banquet hall at grade was priced with no fire alarm system, based on a Group A-2 occupant load of 250. Your survey finds a wall was removed to enlarge the hall, and the architect's revised code sheet lists 310 occupants. What do you report?",
      opts: ["Nothing changes until the occupant load reaches 500","At 300 or more occupants, a manual fire alarm system is now required","Nothing changes, because the hall is at the level of exit discharge","Only smoke alarms need to be added"],
      a: 1,
      ex: "Group A needs a manual fire alarm system at an occupant load of 300 or more, or with more than 100 occupants above or below the level of exit discharge. Removing the wall moved this hall from 250 to 310, over the line. Being at grade only matters for the 100 trigger. The 500 figure belongs to Groups B and M. Room size and use drive occupant load, so a change found on a survey can change what the code requires. If the building is fully sprinklered, the manual boxes may be reduced, but the system is still required.",
      ref: "IBC 2021 907.2.1"
    },
    {
      id: "2.3.2-25",
      type: "mc",
      q: "The drawings place 15 cd strobes along a concourse by the corridor method: within 15 ft of each end and no more than 100 ft apart. Your survey measures the concourse at 24 ft wide. What does that change?",
      opts: ["The corridor method does not apply to corridors more than 20 ft wide, so the strobes must be laid out by the room spacing rules","Nothing. The corridor method works for any width","The strobes can stay where they are if each one is changed to 30 cd","The corridor method still applies, with the strobes no more than 50 ft apart"],
      a: 0,
      ex: "The corridor method is for corridors 20 ft wide or less, where people see the strobes directly as they walk. A space wider than 20 ft is treated as a room, and the strobes are sized and placed from the room spacing tables. That usually means higher candela and a different layout. There is no rule that fixes a wide corridor by changing to 30 cd or halving the spacing. Measure corridor widths on the survey and do not trust the word corridor on the plan.",
      ref: "NFPA 72-2022 18.5.5.8"
    },
    {
      id: "2.3.2-26",
      type: "num",
      q: "Your sound survey of a shop (public mode) finds an average ambient level of 60 dBA. An air compressor cycles on at 74 dBA for about 3 minutes at a time. A paging chime reaches 85 dBA for about 5 seconds. What is the minimum level the audible signal must produce, in dBA?",
      unit: "dBA",
      a: 79,
      tol: 0.5,
      ex: "Work both tests and keep the larger. Average ambient plus 15 dB: 60 + 15 = 75 dBA. Maximum level lasting at least 60 seconds plus 5 dB: 74 + 5 = 79 dBA. So 79 dBA governs. The 5 second chime does not last 60 seconds, so it is not the maximum for this test. Using it gives 90 dBA and an oversized design. Record how long each loud source runs when you take readings, because the 60 second cutoff decides which ones count.",
      ref: "NFPA 72-2022 18.4.4.1"
    },
    {
      id: "2.3.2-27",
      type: "mc",
      q: "The design covers a conference room with a corridor horn rated 90 dBA at 10 ft. The horn is 20 ft from the room's door. Your survey finds the room's average ambient is 60 dBA and the door is kept closed during meetings. NFPA 72's annex says a closed door can cost about 10 to 24 dB or more. What do you report?",
      opts: ["It passes. 90 dBA is well above the 75 dBA required","It passes. 84 dBA reaches the door, and doors are ignored outside sleeping areas","It fails only if the room is used for sleeping","It cannot be counted on. After the door, 74 dBA or less gets in and 75 dBA is required, so plan an appliance in the room"],
      a: 3,
      ex: "From 10 ft to 20 ft is one doubling: 90 - 6 = 84 dBA at the door. Take off 10 to 24 dB for the closed door and 74 to 60 dBA gets inside, before any more loss across the room. Public mode needs 60 + 15 = 75 dBA. Even the best case is short. The IBC requires the audible level in every occupiable space, so a room that is used with its door closed has to be checked that way. The 90 dBA rating only applies 10 ft from the horn in open air.",
      ref: "IBC 2021 907.5.2.1.1; NFPA 72-2022 18.4.4.1"
    },
    {
      id: "2.3.2-28",
      type: "mc",
      q: "The plans show a flat ceiling in a meeting hall. Your survey finds a peaked ceiling that slopes up to a ridge. How does that change the spot smoke detector layout?",
      opts: ["It does not. Spacing is measured the same way as on a flat ceiling","A row of detectors goes within 36 in. of the peak, measured horizontally, and the rest are spaced using the horizontal projection of the ceiling","Detectors go only at the low eaves, where they are easy to reach","Detectors must be mounted on the walls, 12 in. below the peak"],
      a: 1,
      ex: "Smoke rises to the highest point, so a peaked ceiling gets its first row of detectors within 36 in. of the peak, measured horizontally. Any other detectors are then spaced from that row using the horizontal projection of the ceiling, which is the distance measured on the floor plan and not along the slope. The trap is a flat-ceiling grid that happens to leave the ridge empty. The eaves are the last place smoke will reach. Note the slope and ridge location on the survey so the designer can redo the layout.",
      ref: "NFPA 72-2022 Ch 17 (peaked and sloping ceilings)"
    },
    {
      id: "2.3.2-29",
      type: "multi",
      q: "You are writing up survey findings for the designer. Which THREE field conditions change the allowed spacing of spot-type detectors and must be reported?",
      opts: ["A ceiling 16 ft high where heat detectors were laid out for 10 ft","The floor finish is carpet where tile was shown","Beams 18 in. deep on a 12 ft ceiling where a smooth ceiling was shown","The walls are painted a dark color","Partitions that stop 12 in. below a 10 ft ceiling where an open room was shown"],
      a: [0,2,4],
      ex: "Heat detector spacing is reduced on ceilings above 10 ft. Beams deeper than 10 percent of the ceiling height (14.4 in. on a 12 ft ceiling) bring in the beam rules for smoke detectors. Partitions that reach into the top 15 percent of the ceiling height (18 in. on a 10 ft ceiling) are treated as walls, and spacing is measured from them. Carpet changes the room's acoustics, which matters for audibility, but it does not change detector spacing. Wall color affects neither.",
      ref: "NFPA 72-2022 17.6.3.5.1; 17.7.4.2.4.2; 17.7.4.2.3.1"
    },
    {
      id: "2.3.2-30",
      type: "mc",
      q: "The drawings show a standard indoor horn strobe on a wall labeled Receiving. Your survey finds that wall is on an open exterior loading dock, exposed to rain. What is the right call?",
      opts: ["Install the indoor appliance and seal around it with caulk","Install the indoor appliance. Fire alarm appliances are low voltage, so the location does not matter","Report it. The appliance and its back box must be identified or listed for a wet location","Delete the appliance, because exterior areas never need notification"],
      a: 2,
      ex: "Fire alarm equipment has to be listed for the purpose and suited to where it is installed. Article 760 sends you to the NEC rule that equipment in damp, wet or corrosive locations must be identified for that environment. An indoor horn strobe will corrode and fail on a dock, and field-applied caulk does not make it a listed outdoor assembly. Low voltage does not waive the rule. An outdoor model may also draw different current, so the NAC calculation needs a second look.",
      ref: "NEC 2020 760.3(D); NFPA 72-2022 10.3.1"
    }
  ],
  "2.3.3": [
    {
      id: "2.3.3-01",
      type: "num",
      q: "A floor plan is drawn at 1/8 in. = 1 ft. You scale a corridor at 5.5 in. on the sheet. How long is the corridor, in feet?",
      unit: "ft",
      a: 44,
      tol: 0.1,
      ex: "At 1/8 in. = 1 ft, each inch on paper is 8 ft. 5.5 x 8 = 44 ft. The trap is using 4 ft per inch (the 1/4 in. scale), which gives 22 ft. Check the scale in the title block of every sheet, and be careful with reduced-size prints, where only a graphic scale bar stays true.",
      ref: "General drafting practice (architectural scales)"
    },
    {
      id: "2.3.3-02",
      type: "num",
      q: "You are drawing a 34 ft long wall on a plan at 1/4 in. = 1 ft. How long is the line on the sheet, in inches?",
      unit: "in.",
      a: 8.5,
      tol: 0.01,
      ex: "At 1/4 in. = 1 ft, each foot is a quarter inch. 34 x 0.25 = 8.5 in. The common slip is using 1/8 in. per foot and drawing 4.25 in., which makes every device spacing on the sheet wrong by a factor of two.",
      ref: "General drafting practice (architectural scales)"
    },
    {
      id: "2.3.3-03",
      type: "mc",
      q: "Which symbols should you use for devices and appliances on fire alarm shop drawings, according to NFPA 72 Chapter 7?",
      opts: ["NFPA 170 symbols, or other symbols acceptable to the AHJ, shown in a legend","The symbols in NEC Article 760","Whatever symbols the drafting software supplies. No legend is needed","The equipment manufacturer's catalog icons only"],
      a: 0,
      ex: "Chapter 7 points to NFPA 170 for symbols, or others the AHJ accepts, and the drawings carry a legend that defines every symbol used. The NEC has no fire alarm symbol list. A reviewer or a service tech ten years from now must be able to read the sheet without guessing.",
      ref: "NFPA 72-2022 7.4"
    },
    {
      id: "2.3.3-04",
      type: "multi",
      q: "Which THREE items belong on a fire alarm riser diagram?",
      opts: ["The type and number of circuits in each riser","Room dimensions drawn to scale","The type and number of devices on each circuit, floor by floor","Ceiling construction details","The number of conductors for each circuit"],
      a: [0,2,4],
      ex: "A riser diagram shows the building in cross section: how many risers, what circuits run in each, what is connected on every floor, and how many conductors each circuit has. It is normally not to scale. Room dimensions and ceiling details belong on the floor plans.",
      ref: "NFPA 72-2022 7.4"
    },
    {
      id: "2.3.3-05",
      type: "mc",
      q: "A technician needs to know the order of the devices on a circuit and which terminal each conductor lands on. Which drawing gives that?",
      opts: ["The riser diagram","The point-to-point wiring diagram","The floor plan","The input/output matrix"],
      a: 1,
      ex: "A point-to-point diagram follows each conductor from terminal to terminal, device by device, including the end-of-line device. A riser shows what is on each floor but not the device order or terminals. A floor plan shows where devices are located. The matrix shows what the system does, not how it is wired.",
      ref: "NFPA 72-2022 7.4"
    },
    {
      id: "2.3.3-06",
      type: "mc",
      q: "What is a record (as-built) drawing under NFPA 72?",
      opts: ["The engineer's original design drawing, unchanged","The shop drawing as first approved by the AHJ","The current, updated shop drawings showing the system as it was actually installed","A sketch of the control unit location for the fire department"],
      a: 2,
      ex: "Record drawings are the design and shop drawings brought up to date to show the actual installation: equipment, device locations and wiring. Field crews mark changes on a working set as they go, and those marks are drafted into the final set. Handing over the approved shop drawings unchanged is the trap, because almost every job changes in the field.",
      ref: "NFPA 72-2022 7.5.5"
    },
    {
      id: "2.3.3-07",
      type: "multi",
      q: "Besides the updated drawings, which TWO items are part of the record drawing package under NFPA 72 Chapter 7?",
      opts: ["A sequence of operation (matrix or narrative) that matches the final programming","The contractor's bid estimate","Revised calculations where installation conditions changed the design","The installers' time sheets","The manufacturer's price list"],
      a: [0,2],
      ex: "The record set must describe the system as it really works. That means a sequence of operation that reflects the programming at completion, and calculations redone where the installation changed them, such as longer NAC runs or added appliances. Cost and labor records are business documents, not system records.",
      ref: "NFPA 72-2022 7.5.5"
    },
    {
      id: "2.3.3-08",
      type: "mc",
      q: "A draft wiring diagram shows a Class B notification appliance circuit with a branch (T-tap) feeding three strobes, and one end-of-line resistor on the main run. What is wrong?",
      opts: ["Nothing. T-taps are fine on any Class B circuit","The branch needs a larger wire size","The T-tap needs a red junction box","A break in the branch would not be detected, so the circuit must be drawn in and out of each appliance to the end-of-line device"],
      a: 3,
      ex: "A conventional NAC is supervised by a small current through the end-of-line device. A T-tap creates a branch with no end-of-line device, so an open there goes unseen and those strobes fail silently. Draw the circuit as one path, in and out of every appliance. T-taps are a feature of some Class B addressable SLCs, where the panel polls each device, and only where the manufacturer allows them.",
      ref: "NFPA 72-2022 12.6 (monitoring for integrity)"
    },
    {
      id: "2.3.3-09",
      type: "mc",
      q: "On a shop drawing set, what is an input/output matrix?",
      opts: ["A table of wire sizes and conduit fill","A chart of battery standby and alarm currents","A grid listing initiating inputs against the system outputs each one causes","A schedule of device addresses and candela settings"],
      a: 2,
      ex: "The matrix is the sequence of operation in table form. Inputs such as smoke detectors, waterflow and duct detectors go down one side, outputs such as notification, elevator recall, fan shutdown and off-site signals go across, and a mark shows what each input triggers. NFPA 72 accepts a matrix or a written narrative. It is also the script for acceptance testing.",
      ref: "NFPA 72-2022 7.4"
    },
    {
      id: "2.3.3-10",
      type: "mc",
      q: "At closeout, what happens to the record drawings?",
      opts: ["They are folded and stored inside the control unit cabinet","They go to the owner, with a copy in the documentation cabinet","The contractor keeps the only copy for warranty work","They are sent to the AHJ, and the owner can request a copy later"],
      a: 1,
      ex: "Record drawings are turned over to the owner and a copy goes in the system's documentation cabinet. NFPA 72 says the records are kept in that cabinet, not inside the control unit, where paper sits next to live terminals and batteries. The next technician should find the drawings on site without calling the installer.",
      ref: "NFPA 72-2022 7.5.5; 7.7.2.3"
    },
    {
      id: "2.3.3-11",
      type: "multi",
      q: "You are drawing the typical wall-mounting elevation detail. Which TWO dimensions are correct?",
      opts: ["Manual fire alarm box: operable part 42 in. to 48 in. above the floor","Manual fire alarm box: 54 in. to the top of the box","Wall-mounted strobe: entire lens between 80 in. and 96 in. above the floor","Wall-mounted strobe: centered 66 in. above the floor","Wall-mounted strobe: top at least 90 in. above the floor"],
      a: [0,2],
      ex: "The manual box is dimensioned to its handle or lever: 42 in. minimum, 48 in. maximum. A wall strobe is dimensioned to its lens, and the whole lens must fall between 80 in. and 96 in. The 90 in. figure is the rule for the top of an audible-only wall appliance. Where a horn and strobe are combined, the strobe rule sets the height.",
      ref: "IBC 2021 907.4.2.2; NFPA 72-2022 18.5.5.1"
    },
    {
      id: "2.3.3-12",
      type: "mc",
      q: "Which drawing view shows a building as if it were cut vertically, so you can see floor-to-floor heights and the space above ceilings?",
      opts: ["Plan view","Reflected ceiling plan","Exterior elevation","Section"],
      a: 3,
      ex: "A section is a vertical cut through the building. A plan is a horizontal cut looking down, an elevation is a flat view of one face, and a reflected ceiling plan shows the ceiling layout as if mirrored on the floor. For fire alarm layout, sections tell you the ceiling heights and plenum depths, and the reflected ceiling plan shows diffusers, lights and ceiling types.",
      ref: "General drafting practice (plan, elevation and section views)"
    },
    {
      id: "2.3.3-13",
      type: "num",
      q: "A floor plan is drawn at 3/32 in. = 1 ft. You scale the distance from the control unit to the far stair at 7.5 in. on the sheet. How far is it, in feet?",
      unit: "ft",
      a: 80,
      tol: 0.5,
      ex: "At 3/32 in. = 1 ft, one inch on paper is 32 / 3 = 10.67 ft. 7.5 x 10.67 = 80 ft. Or divide: 7.5 / (3/32) = 7.5 x 32 / 3 = 80. The trap is treating it like the 1/8 in. scale (8 ft per inch), which gives 60 ft and leaves every cable run 25 percent short.",
      ref: "General drafting practice (architectural scales)"
    },
    {
      id: "2.3.3-14",
      type: "mc",
      q: "The title block says 1/8 in. = 1 ft, but the set you were handed is a half-size print. With your 1/8 scale you read a corridor as 24 ft. What is the real length?",
      opts: ["12 ft","24 ft","48 ft","96 ft"],
      a: 2,
      ex: "On a half-size print every line is half as long as the title block scale assumes, so the true scale is 1/16 in. = 1 ft. A reading of 24 ft on the 1/8 scale is really 48 ft. The trap is trusting the written scale on a reduced print. The graphic scale bar shrinks with the sheet, which is why NFPA 72 asks for one on each floor plan.",
      ref: "NFPA 72-2022 7.2.1 (graphic scale on each floor plan sheet)"
    },
    {
      id: "2.3.3-15",
      type: "num",
      q: "A site plan is drawn at 1 in. = 40 ft (engineer's scale). The underground conduit between the main building and an outbuilding scales 3.25 in. Add 12 ft at each end for the rise into each panel. How many feet of circuit run do you plan for, one way?",
      unit: "ft",
      a: 154,
      tol: 0.5,
      ex: "Horizontal run: 3.25 x 40 = 130 ft. Rises: 2 x 12 = 24 ft. Total = 154 ft one way. Site plans use engineer's scales (1 in. = 10, 20, 40 ft and so on), not the fractional architect's scales used on floor plans. Reading 3.25 in. with a 1/8 scale would give 26 ft. A plan only shows horizontal distance, so the vertical runs always have to be added.",
      ref: "General drafting practice (engineer's scales)"
    },
    {
      id: "2.3.3-16",
      type: "num",
      q: "On a floor plan at 1/8 in. = 1 ft, an open office scales 5 in. by 7.5 in. What is the floor area of the room, in square feet?",
      unit: "sq ft",
      a: 2400,
      tol: 1,
      ex: "Convert each side to feet first: 5 x 8 = 40 ft and 7.5 x 8 = 60 ft. Area = 40 x 60 = 2,400 sq ft. The trap is multiplying the inches first (37.5 sq in.) and then multiplying by 8, which gives 300 sq ft. Scale applies to each dimension, so area changes by the scale factor squared (8 x 8 = 64 sq ft per square inch).",
      ref: "General drafting practice (architectural scales)"
    },
    {
      id: "2.3.3-17",
      type: "multi",
      q: "Under the NFPA 72-2022 minimum documentation list, which THREE items must each floor plan sheet show?",
      opts: ["A north arrow (point of compass)","A graphic representation of the scale","The cable manufacturer's part numbers","What each room is used for","The installing technician's certification number"],
      a: [0,1,3],
      ex: "The list calls for a floor plan layout with a north arrow, a graphic scale, room use identification and the building features that affect device and appliance placement. Room use matters because it drives detector type and audibility. Cable part numbers belong in the data sheets, and personnel qualifications are handled elsewhere in the code.",
      ref: "NFPA 72-2022 7.2.1"
    },
    {
      id: "2.3.3-18",
      type: "multi",
      q: "You are setting up the title block and general notes for a shop drawing set. Which THREE items does NFPA 72-2022 require the shop drawings to include?",
      opts: ["The name of the installer or contractor","The contract price","The date of issue and any revision dates","The location of the protected premises","The manufacturer's warranty terms"],
      a: [0,2,3],
      ex: "Shop drawings carry the name of the protected premises, owner and occupant, the installer or contractor, the location of the premises, a device legend with symbols, and the date of issue with any revision dates. Revision dates let the AHJ and the field crew confirm they hold the same set. Price and warranty are contract documents and do not go on the drawings.",
      ref: "NFPA 72-2022 7.4.4"
    },
    {
      id: "2.3.3-19",
      type: "mc",
      q: "A job has a main fire alarm control unit, two NAC booster power supplies and a remote annunciator. For which of these must the shop drawings include a control unit diagram showing field wiring terminals and the circuits landed on them?",
      opts: ["The main control unit only","The main control unit and the annunciator","Only equipment that has more than ten field circuits","The main control unit, both boosters and the annunciator"],
      a: 3,
      ex: "Control unit diagrams are required for all control equipment, power supplies, battery chargers and annunciators. Each one shows the equipment's identity and location, every field wiring terminal with its label, the circuits connected, and the indicators and manual controls. Boosters are the ones that get left off, and they are where a service tech most needs to know which terminal feeds which circuit.",
      ref: "NFPA 72-2022 7.4.7"
    },
    {
      id: "2.3.3-20",
      type: "num",
      q: "A riser diagram shows one signaling line circuit serving three floors. Floor 1: 14 smoke detectors, 3 addressable manual boxes, 2 monitor modules. Floor 2: 18 smoke detectors, 2 manual boxes, 1 control module. Floor 3: 18 smoke detectors, 2 manual boxes, 3 monitor modules. The panel's loop holds 99 detectors and 99 modules, and on this panel manual boxes count as modules. How many module addresses are still spare?",
      unit: "addresses",
      a: 86,
      tol: 0,
      ex: "Count only the module-type devices, floor by floor. Floor 1: 3 + 2 = 5. Floor 2: 2 + 1 = 3. Floor 3: 2 + 3 = 5. Total 13 modules, so 99 - 13 = 86 spare. The detectors (14 + 18 + 18 = 50) use the other address range. The trap is adding all 63 devices against one limit and answering 36. The riser is the quickest sheet for this kind of count because it lists the type and number of devices on each circuit, floor by floor.",
      ref: "Field practice (reading a riser diagram); NFPA 72-2022 7.4 (shop drawings, riser diagrams)"
    },
    {
      id: "2.3.3-21",
      type: "mc",
      q: "You are drawing the point-to-point wiring for a Class A notification appliance circuit. After the last appliance, where do the conductors go?",
      opts: ["To an end-of-line resistor mounted at the last appliance","Back to the Class A return terminals at the control unit, so the circuit is a complete loop","To a T-tap on the first appliance","To the outgoing terminals of the next NAC"],
      a: 1,
      ex: "A Class A pathway has a redundant path: the circuit leaves the control unit, runs in and out of every appliance, and returns to a second set of terminals. If one conductor opens, the control unit feeds the circuit from both ends and every appliance still works. An end-of-line resistor at the last appliance is how a Class B circuit is drawn. Show the return path on the diagram so the installer pulls it.",
      ref: "NFPA 72-2022 12.3 (pathway class designations)"
    },
    {
      id: "2.3.3-22",
      type: "mc",
      q: "You are checking a draft floor plan. A Class A signaling line circuit is shown with its outgoing and return conductors in the same conduit for the full 200 ft length of a corridor. What do you do?",
      opts: ["Flag it. Outgoing and return conductors must be routed separately, apart from short allowed cases such as the last 10 ft into an enclosure or a drop to a single device","Accept it. Sharing a conduit is fine as long as the conduit is metal","Accept it. Separation only applies to Class B circuits","Flag it. Class A circuits may never be installed in conduit"],
      a: 0,
      ex: "The point of Class A is that one cut or one fire does not take out both paths. If both run in one conduit, a single event opens both and the redundancy is lost. The code allows shared routing only in limited cases: up to 10 ft where the conductors enter or leave a device, appliance or control unit enclosure, a single raceway drop to one device or appliance, or a raceway drop to several devices in one room of 1,000 sq ft or less. Metal conduit does not change that.",
      ref: "NFPA 72-2022 12.3.8"
    },
    {
      id: "2.3.3-23",
      type: "mc",
      q: "A resubmitted shop drawing has an irregular cloud drawn around four strobes, with a small triangle beside it containing the number 2. What does that tell you?",
      opts: ["Those four strobes are outside the contract","Something inside the cloud changed in revision 2. Check the revision block for the date and description","Two strobes are required at each of those locations","An enlarged view of that area is on detail 2"],
      a: 1,
      ex: "A revision cloud marks what changed, and the triangle (delta) carries the revision number that matches a line in the revision block. Compare the clouded area with the earlier set before you build from it: a candela change here also changes the NAC load and voltage drop. NFPA 72 requires the date of issue and any revision dates on the shop drawings for this reason.",
      ref: "General drafting practice (revision clouds and deltas); NFPA 72-2022 7.4.4"
    },
    {
      id: "2.3.3-24",
      type: "multi",
      q: "Which TWO items does NFPA 72-2022 Chapter 7 expect to see on the shop drawing floor plans?",
      opts: ["The location of the fire alarm primary power disconnecting means","The furniture layout","Partitions that extend to within 15 percent of the ceiling height","The plumbing fixture schedule","The interior finish schedule"],
      a: [0,2],
      ex: "The floor plans show where the fire alarm breaker or disconnect is, so anyone can find primary power. They also show partitions that reach within 15 percent of the ceiling height, because those are treated as walls for detector spacing. Walls, doors, room descriptions, device locations and riser locations are on the same list. Furniture and finishes do not affect the fire alarm layout.",
      ref: "NFPA 72-2022 7.4 (shop drawings, floor plans)"
    },
    {
      id: "2.3.3-25",
      type: "mc",
      q: "A typical wiring detail shows four-wire smoke detectors on a conventional initiating device circuit, with a separate 24 V power pair feeding the detectors. What must the detail show at the end of the power run?",
      opts: ["Nothing. The power pair needs no supervision","A second end-of-line resistor across the power pair","An end-of-line power supervision relay, with its contact wired in series with the circuit's end-of-line resistor","A fuse sized to the detector current"],
      a: 2,
      ex: "If the 24 V pair opens, the detectors are dead but the initiating circuit still looks normal. A power supervision relay at the end of the power run stays energized while power is present. When power is lost its contact opens the initiating circuit ahead of the end-of-line resistor, and the panel shows trouble. A resistor across the power pair only wastes current. NFPA 72 lists end-of-line and power supervisory devices among the typical wiring diagrams to provide.",
      ref: "NFPA 72-2022 7.4 (shop drawings, typical wiring diagrams); NFPA 72-2022 12.6 (monitoring for integrity)"
    },
    {
      id: "2.3.3-26",
      type: "mc",
      q: "You are preparing the floor plan for a storage room where spot-type smoke detectors are proposed. The room has a 16 ft ceiling with exposed solid joists. Besides the detector locations, what does the NFPA 72-2022 shop drawing list expect the floor plan to show for this room?",
      opts: ["That the ceiling is over 10 ft high, and the ceiling details, including the joists","Only the room name. Ceiling information belongs to the architect's drawings","The paint color and finish of the ceiling","The sprinkler head temperature ratings"],
      a: 0,
      ex: "Where automatic detection is proposed, the floor plans identify any ceiling over 10 ft high and give the ceiling geometry, including beams and solid joists. The reviewer needs both to check the layout: ceiling height and joists change how detectors are located and spaced under Chapter 17. Pointing to the architect's sheets is the trap. The fire alarm shop drawings have to carry what the detector layout depends on.",
      ref: "NFPA 72-2022 7.4 (shop drawings, floor plans)"
    },
    {
      id: "2.3.3-27",
      type: "num",
      q: "You are taking off cable for one NAC from a floor plan at 1/8 in. = 1 ft. The run scales as three segments: 6.5 in., 4 in. and 9.25 in. Add 10 ft for each of 3 vertical drops, then add 10 percent to the total for waste. How many feet of cable do you order for this circuit? Round to one decimal.",
      unit: "ft",
      a: 206.8,
      tol: 0.5,
      ex: "Plan length: 6.5 + 4 + 9.25 = 19.75 in. x 8 ft per inch = 158 ft. Drops: 3 x 10 = 30 ft, for 188 ft. Waste: 188 x 1.10 = 206.8 ft. Common slips are using 4 ft per inch (the 1/4 scale), leaving out the drops, and adding the 10 percent before the drops. For the voltage drop calculation, use the 188 ft installed length, one way.",
      ref: "General drafting practice (scaling and material takeoff)"
    },
    {
      id: "2.3.3-28",
      type: "mc",
      q: "While planning the third floor rough-in, you see that the riser diagram shows 6 strobes on NAC 2 but the floor plan shows 8 strobes on that circuit. What is the right move?",
      opts: ["Install 6, because the riser governs","Install 8, because the floor plan governs","Install 7 and note it on the record drawings","Get it resolved with the designer before installing, because the load and voltage drop calculations depend on the count"],
      a: 3,
      ex: "Neither sheet wins by default. Two more strobes can push the circuit past its current rating or drop the end voltage below the appliance minimum, and the battery calculation moves too. Send an RFI, get the sheets and the calculations corrected, and then build. Picking one and fixing it later is how a NAC fails at the acceptance test.",
      ref: "Field practice (drawing coordination); NFPA 72-2022 7.4 (shop drawings, riser diagrams and floor plans)"
    },
    {
      id: "2.3.3-29",
      type: "mc",
      q: "Next to a manual fire alarm box on the floor plan there is a small circle split by a horizontal line. The top half reads 4 and the bottom half reads FA-501. What does it mean?",
      opts: ["Four devices of type FA-501 go at this location","See detail 4 on sheet FA-501","This device is on circuit 4 of panel FA-501","Mount the device 4 ft above the floor per specification FA-501"],
      a: 1,
      ex: "That is a detail callout: the top number is the detail and the bottom is the sheet it is drawn on. Detail 4 on sheet FA-501 will show how this device is mounted or wired. Circuit and address tags are written differently and are defined in the legend. When a symbol or tag is not in the legend, ask. Do not guess.",
      ref: "General drafting practice (detail callouts)"
    },
    {
      id: "2.3.3-30",
      type: "mc",
      q: "The approved input/output matrix has a row for the AHU-1 duct smoke detector. That row is marked under 'supervisory signal at control unit' and 'AHU-1 shutdown' and is blank under 'general alarm notification'. During testing the detector shuts the fan down and shows supervisory, and the horns stay silent. A helper writes it up as a failure. What do you tell him?",
      opts: ["It passed. The system did what the approved matrix shows for that input","It failed. Every smoke detector must sound the general alarm","Reprogram it on the spot so the horns sound","Replace the duct detector, because it is reporting the wrong signal type"],
      a: 0,
      ex: "Read across the row: a mark means that input causes that output, and a blank means it does not. This row calls for supervisory and fan shutdown only, and that is what happened. Duct smoke detectors commonly report as supervisory. Programming changes need an approved revision to the sequence of operation. They are not a field decision during a test.",
      ref: "NFPA 72-2022 7.4.9; NFPA 72-2022 Ch 21 (duct smoke detectors)"
    }
  ],
  "2.3.4": [
    {
      id: "2.3.4-01",
      type: "num",
      q: "A fire alarm control unit draws 0.65 A in standby and 3.2 A in alarm. It needs 24 hours of standby followed by 5 minutes of alarm. Using the NFPA 72-2022 method (multiply the total by 1.25), what battery capacity is required, in amp-hours? Round to two decimals.",
      unit: "Ah",
      a: 19.83,
      tol: 0.1,
      ex: "Standby: 0.65 A x 24 h = 15.6 Ah. Alarm: 3.2 A x (5 / 60) h = 0.267 Ah. Total 15.867 Ah x 1.25 = 19.83 Ah. The traps are forgetting to turn 5 minutes into hours (which adds 16 Ah instead of 0.267) and using the older 1.20 margin, which gives 19.04 Ah.",
      ref: "NFPA 72-2022 Ch 10 (secondary power capacity); 10.6.7.2.14"
    },
    {
      id: "2.3.4-02",
      type: "num",
      q: "An emergency voice/alarm system draws 1.1 A in standby and 6.0 A in alarm. It needs 24 hours of standby followed by 15 minutes of alarm. Using the 1.25 factor from NFPA 72-2022, what battery capacity is required, in amp-hours? Round to two decimals.",
      unit: "Ah",
      a: 34.88,
      tol: 0.1,
      ex: "Standby: 1.1 x 24 = 26.4 Ah. Alarm: 6.0 x (15 / 60) = 1.5 Ah. Total 27.9 x 1.25 = 34.88 Ah. Voice systems carry 15 minutes of alarm load, not 5. Using 5 minutes gives 33.63 Ah, which looks close but is short, and the next standard battery size could end up too small.",
      ref: "NFPA 72-2022 Ch 10 (secondary power capacity); 10.6.7.2.14"
    },
    {
      id: "2.3.4-03",
      type: "num",
      q: "A NAC is wired in 14 AWG solid copper (3.07 ohms per 1,000 ft). The last appliance is 300 ft from the panel, one way, and the total alarm load is 1.2 A. Treat the whole load as sitting at the end of the circuit. With a worst-case supply of 20.4 V, what is the voltage at the last appliance? Round to two decimals.",
      unit: "V",
      a: 18.19,
      tol: 0.05,
      ex: "Wire length is out and back: 2 x 300 = 600 ft. Resistance = 600 / 1,000 x 3.07 = 1.842 ohms. Drop = 1.2 A x 1.842 = 2.21 V. End voltage = 20.4 - 2.21 = 18.19 V, which is above a 16 V appliance minimum. Forgetting the return conductor gives 19.29 V and hides half the drop. Starting from 24 V instead of 20.4 V hides even more.",
      ref: "NEC 2020 Chapter 9 Table 8; Ugly's (voltage drop); NFPA 72-2022 7.4"
    },
    {
      id: "2.3.4-04",
      type: "num",
      q: "A NAC carries 1.5 A on 16 AWG solid copper (4.89 ohms per 1,000 ft). The supply is 20.4 V worst case and the appliances need at least 16 V. Treating the whole load as sitting at the end, what is the longest one-way circuit length that works? Answer in feet, to the nearest foot.",
      unit: "ft",
      a: 300,
      tol: 1,
      ex: "Allowed drop = 20.4 - 16 = 4.4 V. Maximum resistance = 4.4 / 1.5 = 2.933 ohms. That is 2.933 / 4.89 x 1,000 = 600 ft of wire, and the circuit uses two conductors, so the one-way length is 300 ft. The trap is answering 600 ft, which is the total conductor length and would leave the last appliance near 11.6 V.",
      ref: "NEC 2020 Chapter 9 Table 8; Ugly's (Ohm's law, voltage drop)"
    },
    {
      id: "2.3.4-05",
      type: "num",
      q: "A NAC has 6 strobes set to 15 cd, 4 set to 75 cd and 2 set to 110 cd. The data sheet lists the maximum operating current as 0.066 A at 15 cd, 0.158 A at 75 cd and 0.202 A at 110 cd. What is the total circuit load, in amps? Round to three decimals.",
      unit: "A",
      a: 1.432,
      tol: 0.005,
      ex: "6 x 0.066 = 0.396 A. 4 x 0.158 = 0.632 A. 2 x 0.202 = 0.404 A. Total = 1.432 A. Candela setting drives current: the same strobe draws about three times as much at 110 cd as at 15 cd. If a setting is raised in the field, the NAC load, the voltage drop and the battery calculation all have to be redone.",
      ref: "NFPA 72-2022 7.4 (system calculations); manufacturer's data sheet"
    },
    {
      id: "2.3.4-06",
      type: "num",
      q: "Add up the standby current for this system: control unit 0.150 A, remote annunciator 0.040 A, 120 addressable smoke detectors at 300 microamps each, and 20 monitor modules at 0.5 mA each. What is the total standby current, in amps? Round to three decimals.",
      unit: "A",
      a: 0.236,
      tol: 0.001,
      ex: "Convert everything to amps first. Detectors: 120 x 0.000300 A = 0.036 A. Modules: 20 x 0.0005 A = 0.010 A. Total = 0.150 + 0.040 + 0.036 + 0.010 = 0.236 A. The trap is the units: reading 300 microamps as 300 mA gives 36 A, and treating it as 0.003 A gives ten times the real detector load.",
      ref: "NFPA 72-2022 7.4 (system calculations); Ugly's (unit prefixes)"
    },
    {
      id: "2.3.4-07",
      type: "mc",
      q: "A coworker reuses a battery worksheet from a job done under the 2019 edition. It shows 24.0 Ah before margin, adds 20 percent, and selects 28.8 Ah. The new job is under NFPA 72-2022. What is the required capacity?",
      opts: ["28.8 Ah. The 20 percent margin is unchanged","30.0 Ah. The 2022 edition multiplies by 1.25","24.0 Ah. The margin is optional for sealed lead-acid batteries","36.0 Ah. The 2022 edition multiplies by 1.5"],
      a: 1,
      ex: "NFPA 72-2022 uses a correction factor of 1.25: 24.0 x 1.25 = 30.0 Ah. Editions from 2010 to 2019 used a 20 percent safety margin (x 1.20), which gives 28.8 Ah. The gap looks small, but it can move you to the next battery size. Check the edition on every inherited worksheet.",
      ref: "NFPA 72-2022 10.6.7.2.14"
    },
    {
      id: "2.3.4-08",
      type: "mc",
      q: "When you load a NAC with strobes, which current value from the data sheet belongs in the calculation?",
      opts: ["The lowest current listed, at the highest voltage in the range","The nominal 24 V current at the lowest candela setting","The average of the 16 V and 33 V currents","The maximum operating current for the candela setting actually used"],
      a: 3,
      ex: "A strobe draws roughly constant power, so its current goes up as the voltage goes down. The worst case is at the low end of the operating range, which is exactly when the system is on tired batteries. Use the listed maximum current at the candela setting you will install. Also check the panel or booster instructions for limits on the number of strobes per circuit, since startup inrush is higher than running current.",
      ref: "NFPA 72-2022 7.4 (system calculations); manufacturer's data sheet"
    },
    {
      id: "2.3.4-09",
      type: "mc",
      q: "A NAC carries 2.0 A and the last appliance is 400 ft from the panel, one way. Supply is 20.4 V worst case and the appliances need 16 V. Using solid copper (16 AWG 4.89, 14 AWG 3.07, 12 AWG 1.93, 10 AWG 1.21 ohms per 1,000 ft) and the whole load at the end, what is the smallest conductor that works?",
      opts: ["16 AWG","14 AWG","12 AWG","10 AWG"],
      a: 2,
      ex: "The allowed drop is 4.4 V over 800 ft of wire. 14 AWG: 0.8 x 3.07 x 2.0 A = 4.91 V, too much. 12 AWG: 0.8 x 1.93 x 2.0 = 3.09 V, which leaves 17.31 V at the end. 14 AWG only passes if you forget the return conductor (2.46 V). 10 AWG works but is larger than needed and may not fit the appliance terminals.",
      ref: "NEC 2020 Chapter 9 Table 8; Ugly's (voltage drop)"
    },
    {
      id: "2.3.4-10",
      type: "mc",
      q: "A common voltage drop formula for a two-wire circuit is VD = 2 x K x I x L / CM, where L is the one-way length. What is the 2 for?",
      opts: ["Current travels out and back, so the conductor is twice the one-way length","A safety factor of 2 required by NFPA 72","Two appliances are assumed on every circuit","It converts DC resistance to AC impedance"],
      a: 0,
      ex: "A two-wire circuit has a supply conductor and a return conductor, and both drop voltage. K is the resistivity constant for the metal (about 12.9 for copper), I is the current, and CM is the conductor area in circular mils. If you work from Table 8 ohms per 1,000 ft instead, the same doubling applies to the length. The two methods land a few percent apart (K gives about 3.14 ohms per 1,000 ft for 14 AWG, and Table 8 solid is 3.07), so use the one the question gives you. Ugly's is study-only at Level II, so learn this formula before test day.",
      ref: "Ugly's Electrical References (2020), voltage drop formulas"
    },
    {
      id: "2.3.4-11",
      type: "multi",
      q: "Which THREE apply to the 120 V branch circuit that supplies a power-limited fire alarm control unit under NEC 2020?",
      opts: ["It is a dedicated (individual) branch circuit with no other loads","It must be GFCI protected","The disconnecting means has red identification and is marked FIRE ALARM CIRCUIT","The location of the breaker is permanently identified at the control unit","It must be a 30 A circuit"],
      a: [0,2,3],
      ex: "NEC 760.121(B) calls for an individual branch circuit, a disconnect identified in red and marked as the fire alarm circuit, accessible only to qualified persons, with the breaker location noted at the control unit. The circuit must not be supplied through a GFCI or AFCI, because a nuisance trip would drop primary power. Each booster power supply needs the same treatment, so show every one on the drawings.",
      ref: "NEC 2020 760.121(B); NFPA 72-2022 10.6.5.1"
    },
    {
      id: "2.3.4-12",
      type: "multi",
      q: "A change order adds six 75 cd strobes to an existing NAC fed by a booster power supply. Which THREE checks must you redo before installing them?",
      opts: ["Total NAC current against the circuit and power supply ratings","The signaling line circuit loop resistance","Voltage at the last appliance on that NAC","The booster's battery calculation","The pull station mounting height"],
      a: [0,2,3],
      ex: "More strobes mean more current. That can exceed the circuit or supply rating, it raises the voltage drop, and it adds alarm load to the booster's own batteries. A booster carries its own standby and alarm calculation, separate from the main panel. The SLC only sees the booster's trigger or module, so its loop resistance does not change.",
      ref: "NFPA 72-2022 7.4 (system calculations); Ch 10 (secondary power)"
    },
    {
      id: "2.3.4-13",
      type: "num",
      q: "Build the battery calculation from this equipment list. Control unit: 0.120 A standby, 0.250 A alarm. Annunciator: 0.035 A standby, 0.060 A alarm. 85 addressable detectors at 350 microamps each, the same in standby and alarm. 14 horn-strobes at 0.095 A each, alarm only. The system needs 24 hours of standby, then 5 minutes of alarm. Using the NFPA 72-2022 factor of 1.25, what capacity is required, in amp-hours? Round to two decimals.",
      unit: "Ah",
      a: 5.72,
      tol: 0.05,
      ex: "Detectors: 85 x 0.00035 A = 0.02975 A. Standby current: 0.120 + 0.035 + 0.02975 = 0.18475 A. Standby: 0.18475 x 24 h = 4.434 Ah. Alarm current: 0.250 + 0.060 + 0.02975 + (14 x 0.095 = 1.330) = 1.66975 A. Alarm: 1.66975 x (5 / 60) h = 0.139 Ah. Total: 4.434 + 0.139 = 4.573 Ah. x 1.25 = 5.72 Ah. The older 1.20 margin gives 5.49 Ah. Leaving the detectors out of the alarm column is a small error here but a real one on a large loop.",
      ref: "NFPA 72-2022 10.6.7.2.14; NFPA 72-2022 Ch 10 (secondary power capacity)"
    },
    {
      id: "2.3.4-14",
      type: "mc",
      q: "Your battery calculation comes to 21.4 Ah. Standard sizes are 18, 26 and 33 Ah. The control unit's instructions say its charger is rated for batteries up to 26 Ah, and its cabinet holds batteries up to 18 Ah. What do you specify?",
      opts: ["18 Ah, because it is the largest that fits in the cabinet","Two sets of 18 Ah wired in parallel (36 Ah) to be safe","33 Ah in a separate battery cabinet, for extra margin","26 Ah in a listed separate battery cabinet"],
      a: 3,
      ex: "Round up to the next standard size: 26 Ah covers 21.4 Ah, and 18 Ah does not. Then check two limits in the instructions. The charger tops out at 26 Ah, so 33 Ah or 36 Ah could not be recharged properly by this panel. The cabinet only fits 18 Ah, so the 26 Ah set goes in a listed battery cabinet. A bigger battery is not automatically a safer one. If the load ever needs more than 26 Ah, the answer is a listed external charger or moving load to a booster.",
      ref: "NFPA 72-2022 10.6.10 (storage batteries); manufacturer's published instructions"
    },
    {
      id: "2.3.4-15",
      type: "num",
      q: "An existing control unit has 26 Ah batteries and draws 4.8 A in alarm. It needs 24 hours of standby, then 5 minutes of alarm, with the NFPA 72-2022 factor of 1.25. A change order will add standby load. What is the most total standby current these batteries can support, in amps? Round to two decimals.",
      unit: "A",
      a: 0.85,
      tol: 0.005,
      ex: "Work the battery formula backward. Capacity before the factor: 26 / 1.25 = 20.8 Ah. Alarm: 4.8 A x (5 / 60) h = 0.4 Ah. That leaves 20.8 - 0.4 = 20.4 Ah for standby. 20.4 Ah / 24 h = 0.85 A. The trap is dividing the full 26 Ah by 24 h (1.08 A), which ignores both the 1.25 factor and the alarm load. Compare 0.85 A with the present standby current to see how much room the change order has.",
      ref: "NFPA 72-2022 10.6.7.2.14; NFPA 72-2022 Ch 10 (secondary power capacity)"
    },
    {
      id: "2.3.4-16",
      type: "num",
      q: "A NAC serving an employee work area is rated 2.5 A. IBC 2021 requires notification appliance circuits in employee work areas to be designed with at least 20 percent spare capacity. Each strobe draws 0.158 A maximum at its 75 cd setting. Based on current alone, what is the greatest number of these strobes you can show on the circuit? (Whole number.)",
      unit: "strobes",
      a: 12,
      tol: 0,
      ex: "Keep 20 percent in reserve: 2.5 A x 0.80 = 2.0 A available for the design. 2.0 / 0.158 = 12.66, and you round down, so 12 strobes (1.896 A). Loading to the full rating would give 15 and leave nothing for the strobes a tenant may need to add for a hearing-impaired employee. This is the current check only. The voltage drop still has to pass at the last appliance.",
      ref: "IBC 2021 907.5.2.3.1"
    },
    {
      id: "2.3.4-17",
      type: "num",
      q: "A NAC in 14 AWG solid copper (3.07 ohms per 1,000 ft) has three groups of appliances. Group A draws 0.45 A in total and sits 120 ft from the panel. Group B draws 0.35 A and sits 150 ft past group A. Group C draws 0.30 A and sits 180 ft past group B. The worst-case supply is 20.4 V. Work it segment by segment (point-to-point). What is the voltage at group C? Round to two decimals.",
      unit: "V",
      a: 18.66,
      tol: 0.05,
      ex: "Each segment carries the current of everything beyond it. Segment 1, panel to A: 1.10 A. R = 2 x 120 x 3.07 / 1,000 = 0.737 ohms. Drop = 1.10 x 0.737 = 0.810 V. Segment 2, A to B: 0.65 A. R = 2 x 150 x 3.07 / 1,000 = 0.921 ohms. Drop = 0.65 x 0.921 = 0.599 V. Segment 3, B to C: 0.30 A. R = 2 x 180 x 3.07 / 1,000 = 1.105 ohms. Drop = 0.30 x 1.105 = 0.332 V. Voltage at C = 20.4 - 0.810 - 0.599 - 0.332 = 18.66 V. Lumping all 1.10 A at 450 ft gives 17.36 V. The lump-sum method is always the more conservative of the two, so a circuit that passes it also passes point-to-point.",
      ref: "Field practice (point-to-point voltage drop); NEC 2020 Chapter 9 Table 8"
    },
    {
      id: "2.3.4-18",
      type: "num",
      q: "Rearrange the formula VD = 2 x K x I x L / CM to size a conductor. A NAC carries 1.8 A over a one-way length of 350 ft. The worst-case supply is 20.4 V and the appliances need 16 V. K = 12.9 for copper. What is the smallest conductor area that works, in circular mils? Round to the nearest whole number.",
      unit: "circular mils",
      a: 3694,
      tol: 5,
      ex: "Allowed drop: 20.4 - 16 = 4.4 V. CM = 2 x K x I x L / VD = 2 x 12.9 x 1.8 x 350 / 4.4. Top line: 2 x 12.9 = 25.8, x 1.8 = 46.44, x 350 = 16,254. 16,254 / 4.4 = 3,694 circular mils. Then pick the next size up in the conductor table: 16 AWG is 2,580 circular mils, which is too small, and 14 AWG is 4,110, which works (3.95 V drop, 16.45 V at the end). Leaving out the 2 gives 1,847 circular mils and points you to 16 AWG, which would leave about 14.1 V.",
      ref: "Ugly's Electrical References (2020), voltage drop formulas; NEC 2020 Chapter 9 Table 8"
    },
    {
      id: "2.3.4-19",
      type: "mc",
      q: "A NAC output is rated 2.0 A. The circuit is 16 AWG solid copper (4.89 ohms per 1,000 ft) and the last appliance is 250 ft from the panel, one way. Each horn-strobe draws 0.125 A. Supply is 20.4 V worst case and the appliances need 16 V. Treating the whole load as sitting at the end, how many horn-strobes can the circuit carry?",
      opts: ["12","14","16","28"],
      a: 1,
      ex: "Wire resistance: 2 x 250 x 4.89 / 1,000 = 2.445 ohms. Allowed drop: 20.4 - 16 = 4.4 V. Maximum current: 4.4 / 2.445 = 1.80 A. 1.80 / 0.125 = 14.4, so 14. Check: 14 x 0.125 = 1.75 A, drop 4.28 V, 16.12 V at the end. The 2.0 A rating alone would allow 16, but 16 appliances would leave 15.51 V. Forgetting the return conductor gives 28. Here voltage drop is the limit, not the output rating, and you have to check both.",
      ref: "NEC 2020 Chapter 9 Table 8"
    },
    {
      id: "2.3.4-20",
      type: "mc",
      q: "A voltage drop calculation was done with solid 16 AWG (4.89 ohms per 1,000 ft): 1.4 A, 320 ft one way, 20.4 V supply, 16 V appliance minimum, load at the end. It showed 16.02 V. The cable delivered to the job is stranded 16 AWG (4.99 ohms per 1,000 ft). What does the calculation show now?",
      opts: ["16.02 V. Stranding does not change resistance","18.16 V. It passes with room to spare","15.93 V. It no longer passes","19.53 V. It passes easily"],
      a: 2,
      ex: "Stranded: R = 2 x 320 x 4.99 / 1,000 = 3.194 ohms. Drop = 1.4 x 3.194 = 4.47 V. 20.4 - 4.47 = 15.93 V, below 16 V. With solid it was 3.130 ohms, a 4.38 V drop and 16.02 V. Stranded wire of the same gauge has slightly more resistance, and a design with no margin cannot absorb that. 18.16 V forgets the return conductor and 19.53 V starts from 24 V. The fix is 14 AWG, a shorter run or a split circuit.",
      ref: "NEC 2020 Chapter 9 Table 8"
    },
    {
      id: "2.3.4-21",
      type: "mc",
      q: "Voltage drop calculations for a 24 V NAC normally start from 20.4 V. Where does that number come from?",
      opts: ["It is 85 percent of 24 V, which stands for the supply near the end of battery standby. Use the manufacturer's figure if the instructions give one","It is the battery charger's float voltage","It is the lowest voltage the appliances are listed to operate at","It is 24 V less a fixed 15 percent allowance for the wire"],
      a: 0,
      ex: "The calculation has to prove the last appliance works when the system is weakest: after a long power failure, on tired batteries. NFPA 72 Chapter 10 expects equipment to perform at 85 percent of its nameplate voltage, control units are tested that way, and 0.85 x 24 = 20.4 V. Some instructions publish a specific worst-case NAC voltage, and then you use that. The 15 percent is not a wire allowance: the wire drop is what you calculate and subtract. The appliance minimum, often 16 V, is the number you compare the result with.",
      ref: "Field practice (worst-case NAC supply voltage); NFPA 72-2022 Ch 10 (equipment operating voltage range)"
    },
    {
      id: "2.3.4-22",
      type: "multi",
      q: "You are filling in the STANDBY column of a battery calculation for a system in its normal, non-alarm condition. Which THREE loads belong there?",
      opts: ["The control unit's quiescent current","Strobe current at the installed candela settings","The normal current of every addressable detector and module","Horn current","The 24 V power drawn by four-wire duct detectors in their normal state"],
      a: [0,2,4],
      ex: "Standby is everything the batteries must feed for 24 hours with no alarm: the control unit, annunciators, every detector and module on the loop, and any devices that take 24 V power all the time, such as four-wire duct detectors. Horns and strobes draw nothing until alarm, so they go in the alarm column only. The standby items also stay in the alarm column, at their alarm currents.",
      ref: "NFPA 72-2022 Ch 10 (secondary power capacity)"
    },
    {
      id: "2.3.4-23",
      type: "mc",
      q: "A booster power supply is rated 6.0 A total, with four NAC outputs rated 3.0 A each. NAC 1 carries 2.4 A, NAC 2 carries 1.9 A and NAC 3 carries 1.5 A. You want to put 15 cd strobes at 0.066 A each on the unused NAC 4. How many can it take?",
      opts: ["45, because NAC 4 is rated 3.0 A","3, because only 0.2 A of the 6.0 A total is left","90, because the supply is rated 6.0 A","None. All four outputs must carry equal loads"],
      a: 1,
      ex: "There are two limits and both apply. Per output: 3.0 A. Whole supply: 6.0 A. The first three circuits already use 2.4 + 1.9 + 1.5 = 5.8 A, so 6.0 - 5.8 = 0.2 A is left. 0.2 / 0.066 = 3.03, so 3 strobes. The trap is looking only at the 3.0 A output rating (45 strobes). The output ratings add up to 12 A, but the supply can only deliver 6. More load than that needs another booster, with its own battery calculation.",
      ref: "Field practice (power supply output ratings); manufacturer's published instructions"
    },
    {
      id: "2.3.4-24",
      type: "mc",
      q: "An existing system draws 0.300 A in standby and 2.10 A in alarm, on 12 Ah batteries (24 hours standby, 5 minutes alarm). A change order adds 4 horn-strobes at 0.135 A each, and one annunciator at 0.050 A standby and 0.065 A alarm. Under NFPA 72-2022, are the 12 Ah batteries still large enough?",
      opts: ["Yes. The new requirement is 10.78 Ah","Yes. The new requirement is 9.28 Ah","No. The new requirement is 27.41 Ah","No. The new requirement is 12.94 Ah"],
      a: 0,
      ex: "New standby: 0.300 + 0.050 = 0.350 A. x 24 h = 8.4 Ah. New alarm: 2.10 + (4 x 0.135 = 0.54) + 0.065 = 2.705 A. x (5 / 60) h = 0.225 Ah. Total 8.625 Ah x 1.25 = 10.78 Ah, so 12 Ah still works. The small annunciator adds more than the four horn-strobes, because it draws for 24 hours. 9.28 Ah leaves the annunciator's standby current out. 27.41 Ah treats 5 minutes as 5 hours. 12.94 Ah applies a margin twice (1.25, then another 20 percent). Put the revised calculation in the record documents.",
      ref: "NFPA 72-2022 10.6.7.2.14; NFPA 72-2022 Ch 10 (secondary power capacity)"
    },
    {
      id: "2.3.4-25",
      type: "mc",
      q: "On the exam you need the DC resistance of 12 AWG copper for a voltage drop problem. Where in the 2020 NEC do you look?",
      opts: ["Table 310.16","Chapter 9, Table 9","Table 760.154","Chapter 9, Table 8"],
      a: 3,
      ex: "Chapter 9, Table 8 lists conductor properties: circular mil area and DC resistance in ohms per 1,000 ft, for solid and stranded, coated and uncoated copper. Fire alarm circuits are DC, so this is the table to use. Table 9 is the trap: it gives AC resistance and reactance for larger cables in conduit. Table 310.16 is ampacity. Table 760.154 is where each fire alarm cable type may be installed.",
      ref: "NEC 2020 Chapter 9 Table 8"
    },
    {
      id: "2.3.4-26",
      type: "mc",
      q: "At acceptance, with the system on AC power and the NAC in alarm, you read 26.4 V at the panel's NAC terminals and 22.9 V at the last strobe. The strobes need 16 V. A coworker says 22.9 V proves the circuit is fine. What is the right reading of those numbers?",
      opts: ["He is right. 22.9 V is well above 16 V","The circuit fails, because any drop over 10 percent is a code violation","The wire is dropping 3.5 V. From a 20.4 V worst-case supply that leaves about 16.9 V at best, and likely less, so compare it with the calculation","The readings mean nothing. Voltage drop cannot be measured in the field"],
      a: 2,
      ex: "The useful number is the drop: 26.4 - 22.9 = 3.5 V. On a worst-case supply of 20.4 V the same drop leaves 16.9 V. Strobes draw more current as the voltage falls, so the real drop on low batteries will be larger than 3.5 V and the margin is thinner than it looks. A high reading on AC power proves little. NFPA 72 sets no 10 percent limit: the test is the appliance's listed minimum voltage under worst-case supply.",
      ref: "Field practice (NAC voltage measurements)"
    },
    {
      id: "2.3.4-27",
      type: "num",
      q: "A NAC in 14 AWG solid copper (3.07 ohms per 1,000 ft) runs 280 ft one way and was designed for 1.10 A. In the field, 8 of its strobes are changed from 30 cd (0.094 A each) to 75 cd (0.158 A each). Supply is 20.4 V worst case. Treating the whole load as sitting at the end, what is the new voltage at the last appliance? Round to two decimals.",
      unit: "V",
      a: 17.63,
      tol: 0.05,
      ex: "Added current: 8 x (0.158 - 0.094) = 8 x 0.064 = 0.512 A. New load: 1.10 + 0.512 = 1.612 A. Wire: 2 x 280 x 3.07 / 1,000 = 1.719 ohms. Drop: 1.612 x 1.719 = 2.77 V. End voltage: 20.4 - 2.77 = 17.63 V. It was 18.51 V before the change. It still clears 16 V here, but the load went up almost half, so also check the NAC output rating and redo the battery calculation.",
      ref: "NEC 2020 Chapter 9 Table 8"
    },
    {
      id: "2.3.4-28",
      type: "multi",
      q: "You are reviewing a trainee's NAC voltage drop calculation. Which TWO shortcuts make a circuit look better than it really is?",
      opts: ["Starting from 24 V nominal","Using each appliance's maximum operating current","Placing the whole load at the end of the circuit","Using only the one-way length of the run","Using the stranded resistance figure when the wire is solid"],
      a: [0,3],
      ex: "Starting at 24 V hides 3.6 V that the system will not have at the end of battery standby. Using one-way length leaves out the return conductor and halves the drop. The other three choices err on the safe side: maximum current, load at the end, and the slightly higher stranded resistance all make the answer worse than reality. When you check someone's work, look for the optimistic errors first.",
      ref: "Field practice (voltage drop calculations)"
    },
    {
      id: "2.3.4-29",
      type: "num",
      q: "A voice system amplifier is rated 50 W, and the designer limits loading to 80 percent of the rating. The speaker circuit has 22 speakers tapped at 1/2 W, 9 tapped at 1 W and 6 tapped at 2 W. How many more speakers tapped at 1 W can be added before the design limit is reached? (Whole number.)",
      unit: "speakers",
      a: 8,
      tol: 0,
      ex: "Present load: 22 x 0.5 = 11 W, 9 x 1 = 9 W, 6 x 2 = 12 W. Total 32 W. Design limit: 50 x 0.80 = 40 W. 40 - 32 = 8 W, which is 8 speakers at 1 W. Speaker circuits are loaded in watts, by adding the tap settings, not in amps. Raising a tap in the field to get more volume uses up this spare just as adding speakers does, and it raises the amplifier's alarm current in the battery calculation.",
      ref: "Field practice (speaker circuit loading); manufacturer's published instructions"
    },
    {
      id: "2.3.4-30",
      type: "num",
      q: "A control unit draws 0.300 A in alarm. Its signaling line circuit devices draw 0.045 A. NAC 1 feeds appliances totaling 1.2 A. NAC 2 only triggers two booster power supplies, and each booster's trigger input draws 0.010 A. The boosters feed appliances totaling 7.5 A from their own outputs and have their own batteries. What alarm current goes in the control unit's battery calculation, in amps? Round to three decimals.",
      unit: "A",
      a: 1.565,
      tol: 0.002,
      ex: "Include only what the control unit's batteries feed: 0.300 + 0.045 + 1.2 + (2 x 0.010 = 0.020) = 1.565 A. The 7.5 A of appliances on the boosters comes from the boosters' batteries, and each booster gets its own standby and alarm calculation. Adding the 7.5 A here gives 9.065 A and a main battery several sizes too large. Leaving out the trigger currents is the opposite slip, small but still wrong.",
      ref: "NFPA 72-2022 Ch 10 (secondary power capacity); manufacturer's published instructions"
    }
  ]
};
