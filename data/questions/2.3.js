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
    }
  ]
};
