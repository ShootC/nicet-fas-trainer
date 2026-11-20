// NICET FAS Level II · 2.1 Installation. Questions keyed by task id.
// Never reuse or renumber an id: progress is saved by id. See README for the format.
export default {
  "2.1.1": [
    {
      id: "2.1.1-01",
      type: "mc",
      q: "A new office building has no requirement for fire detection during construction. Your work plan has to say when the smoke detector heads go up. Under NFPA 72-2022, when is that?",
      opts: ["As soon as the ceiling grid is in, with the dust covers left on","After all other construction trades have finished their cleanup","At rough-in, so the bases and heads are done in one trip","Any time before the acceptance test, at the installer's choice"],
      a: 1,
      ex: "Where detection is not required during construction, detectors are not installed until the other trades have completed cleanup. Drywall dust and paint overspray ruin sensitivity. Dust covers are the tempting answer, but they are for detectors that had to go up early, not a licence to install early. Plan bases and wiring at trim, heads last.",
      ref: "NFPA 72-2022 17.7.2"
    },
    {
      id: "2.1.1-02",
      type: "mc",
      q: "On a phased renovation, the smoke detectors on floors 1 and 2 were kept in service to protect the building while construction went on around them. What must happen to those detectors before final commissioning?",
      opts: ["Nothing, as long as each one passes a functional smoke test","Blow them out with compressed air and re-test with a magnet","Leave them alone unless the panel shows a maintenance alert","Clean them and verify they are within their listed sensitivity range, or replace them"],
      a: 3,
      ex: "Detectors used for signal initiation during construction must be cleaned and verified to be operating within their listed sensitivity, or be replaced, before final commissioning. A functional go/no-go test is the trap: a dirty detector still alarms, it just alarms at the wrong sensitivity. Put the cleaning and sensitivity check, or a replacement allowance, in the plan and the takeoff.",
      ref: "NFPA 72-2022 17.7.2"
    },
    {
      id: "2.1.1-03",
      type: "mc",
      q: "The approved drawing shows a spot-type smoke detector in the middle of a room. On site, the HVAC contractor has put a supply air diffuser 12 in. from that spot. What is the right field response?",
      opts: ["Shift the detector so it is out of the direct airflow and at least 3 ft from the diffuser, keep it within the spacing rules, and mark the as-built","Install it as drawn, because the approved drawing governs","Swap it for a heat detector, since airflow does not affect heat detectors","Mount it on the wall 24 in. below the ceiling to get under the air stream"],
      a: 0,
      ex: "Supply air can dilute smoke or push it away from the detector. The Code says detectors must not go where airflow prevents them from operating, and the annex guidance is to keep them out of the direct airflow and at least 36 in. from a supply diffuser or return air opening. A small move that still meets spacing is a field adjustment, recorded on the as-builts. Changing the detector type is a design change you do not make on your own, and a sidewall smoke detector belongs within 12 in. of the ceiling.",
      ref: "NFPA 72-2022 17.7.5 (HVAC airflow) and its annex"
    },
    {
      id: "2.1.1-04",
      type: "num",
      q: "You are walking a level ceiling that is 15 ft high and has exposed beams. For spot-type smoke detectors, beams shallower than 10 percent of the ceiling height may be treated like a smooth ceiling. At what beam depth, in inches, does this ceiling stop qualifying for smooth-ceiling spacing?",
      unit: "in.",
      a: 18,
      tol: 0.1,
      ex: "10 percent of the ceiling height: 15 ft × 12 = 180 in., and 0.10 × 180 = 18 in. Beams less than 18 in. deep allow smooth-ceiling spacing, with detectors on the ceiling or on the bottoms of the beams. At 18 in. or more, the beam rules apply and the beam spacing has to be checked against 40 percent of the ceiling height. Measure both dimensions during the site walk.",
      ref: "NFPA 72-2022 17.7.4.2.4.2"
    },
    {
      id: "2.1.1-05",
      type: "mc",
      q: "The drawings show a 40 ft × 60 ft storage room with a smooth 12 ft ceiling and spot smoke detectors at 30 ft spacing. On site you find a level ceiling with solid beams 18 in. deep, spaced 8 ft on center. What should you do?",
      opts: ["Install per the drawings, mounting the detectors on the beam bottoms","Keep the count but cut the spacing in half across the beams","Stop and send it back to the designer: these beams call for a detector in each beam pocket","Change the detectors to heat detectors, which are not affected by beams"],
      a: 2,
      ex: "10 percent of 144 in. is 14.4 in., so 18 in. beams are deep beams. 40 percent of 12 ft is 4.8 ft, and the beams are 8 ft apart, so the spacing is at or above 0.4H. That combination needs a spot detector on the ceiling in every beam pocket. The half-spacing answer is the rule for deep beams spaced closer than 0.4H. The detector count changes, so this is a design change, not a field adjustment.",
      ref: "NFPA 72-2022 17.7.4.2.4.2"
    },
    {
      id: "2.1.1-06",
      type: "num",
      q: "The drawings space heat detectors at their listed spacing of 50 ft, assuming a 10 ft ceiling. You measure the smooth ceiling at 17 ft. Table 17.6.3.5.1 gives a multiplier of 0.71 for ceilings over 16 ft and up to 18 ft. What is the maximum detector spacing now, in feet?",
      unit: "ft",
      a: 35.5,
      tol: 0.1,
      ex: "50 ft × 0.71 = 35.5 ft. Heat detector spacing must be reduced for ceilings above 10 ft and up to 30 ft, because the heat plume spreads and cools on the way up. The trap is to leave the listed spacing alone because the ceiling is smooth. Going from 50 ft to 35.5 ft adds detectors, so the designer has to revise the layout.",
      ref: "NFPA 72-2022 17.6.3.5.1 and Table 17.6.3.5.1"
    },
    {
      id: "2.1.1-07",
      type: "num",
      q: "A NAC will be wired with one 2-conductor cable. You measure the route along the pathway at 420 ft, and add 15 ft at each end for the drop down to the panel and to the last appliance. Company practice is to add 10 percent for waste. How many feet of cable go on the takeoff?",
      unit: "ft",
      a: 495,
      tol: 1,
      ex: "420 + 15 + 15 = 450 ft of route. 450 × 1.10 = 495 ft. The trap is doubling to 990 ft. The times-two belongs in the voltage drop math, where current flows out and back on two conductors. A 2-conductor cable already has both conductors inside it, so the cable length is the one-way length.",
      ref: "Field practice (material takeoff)"
    },
    {
      id: "2.1.1-08",
      type: "multi",
      q: "You are planning a panel and device replacement in an existing building. Some old equipment and cable will no longer be used. Which TWO statements are correct?",
      opts: ["Abandoned fire alarm equipment must be removed or marked as not in service","The accessible portion of abandoned fire alarm cable must be removed unless it is tagged for future use","Abandoned cable may stay if it is cut flush at both ends","Old devices may stay on the wall unmarked once they are disconnected","Abandoned cable only has to come out of plenum ceilings"],
      a: [0,1],
      ex: "NFPA 72-2022 added a rule that abandoned fire alarm equipment is removed or marked not in service, so nobody trusts a dead pull station. NEC 760.25 requires the accessible portion of abandoned cable to be removed unless it is tagged for future use with a tag that suits the environment. Cutting cable flush and leaving it is the common shortcut, and it is a violation in any accessible space, not only plenums. Put the demolition labor in the plan.",
      ref: "NFPA 72-2022 10.4.7; NEC 2020 760.25"
    },
    {
      id: "2.1.1-09",
      type: "mc",
      q: "Your work plan for a control unit changeout shows the existing system out of service for two days. Beyond notifying the owner, at what point does NFPA 72-2022 require the service provider to report the out-of-service system to the AHJ?",
      opts: ["When it is out of service for more than 4 hours","When it is out of service for more than 8 hours","When it is out of service for more than 24 hours","Only if the outage runs past the planned two days"],
      a: 1,
      ex: "A system out of service for more than 8 hours is reported to the AHJ by the service provider. The owner or the owner's representative is notified of any impairment, and mitigating measures such as a fire watch are worked out for the outage. In the 2025 edition the 8-hour rule moves down one number to 10.21.5, so use the 2022 book for this exam.",
      ref: "NFPA 72-2022 10.21.1, 10.21.4, 10.21.5"
    },
    {
      id: "2.1.1-10",
      type: "mc",
      q: "Part of your plan involves work on equipment that could start up or release stored energy while your crew is servicing it. Which OSHA general industry standard is the control of hazardous energy (lockout/tagout) standard?",
      opts: ["29 CFR 1910.146","29 CFR 1910.165","29 CFR 1910.1200","29 CFR 1910.147"],
      a: 3,
      ex: "1910.147 is lockout/tagout. 1910.146 is permit-required confined spaces, 1910.165 is employee alarm systems, and 1910.1200 is hazard communication (labels and safety data sheets). For work on or near exposed energized electrical parts, the electrical safe work practices in Subpart S (1910.333) also apply. OSHA is a study-only reference, so these numbers have to be known without the book.",
      ref: "OSHA 29 CFR 1910.147"
    },
    {
      id: "2.1.1-11",
      type: "mc",
      q: "The fire alarm drawings show the fan shutdown relay module above the ceiling of the top floor. During your site walk you find the air handler's motor controller is on the roof, about 40 ft from that spot. What does the work plan need?",
      opts: ["Move the relay to within 3 ft of the controlled circuit and coordinate the location with the mechanical and electrical trades","Leave the relay where drawn and have the electrician run the control wiring down to it","Leave the relay where drawn and add an end-of-line resistor at the motor controller","Delete the relay and shut the fan down from the building automation system"],
      a: 0,
      ex: "A listed relay or other interface that controls an emergency control function must be within 3 ft of the controlled circuit or appliance. The fire alarm system monitors the wiring up to its relay. The wire from the relay contacts to the fan controller is not monitored, so the Code keeps it short. An end-of-line resistor at the controller does not make a dry-contact control circuit supervised.",
      ref: "NFPA 72-2022 21.2.4"
    },
    {
      id: "2.1.1-12",
      type: "multi",
      q: "Which TWO of these field conditions must go back to the designer as a design change, and are not simple field adjustments?",
      opts: ["A smoke detector has to move 2 ft to clear a light fixture and still meets its spacing","A full-height wall has been added that splits one room on the drawings into two rooms","The only available NAC route is 150 ft longer than the length used in the voltage drop calculation","A manual pull station has to move to the other side of the same exit door, still within 5 ft of the door and 42 in. to 48 in. high","A device back box of a different depth is needed to suit the wall"],
      a: [1,2],
      ex: "A new full-height wall creates a room with no detection and maybe no notification, so the layout changes. A longer NAC run changes the voltage drop, so the calculation and maybe the wire size or power supply change. Both alter the approved design. Small moves that still meet the Code rule are field adjustments, and you record them on the as-built drawings.",
      ref: "NFPA 72-2022 7.4 (shop drawings) and 7.5.5 (record drawings)"
    },
    {
      id: "2.1.1-13",
      type: "mc",
      q: "On a high-rise office job, a revised mechanical schedule raises the air-conditioning unit on each floor from 1,800 cfm to 2,400 cfm. The fire alarm drawings were done before the change and show no duct smoke detectors on these units. What does the IBC's high-rise rule call for?",
      opts: ["A duct smoke detector in the main return air and exhaust air plenum of each system over 2,000 cfm, so send an RFI and plan the detectors, modules and access","Nothing, because duct smoke detectors are needed only on systems over 15,000 cfm","Nothing, because the area smoke detectors on each floor take the place of duct detectors","A heat detector inside each unit in place of a duct smoke detector"],
      a: 0,
      ex: "In a high-rise, the IBC requires duct smoke detectors in the main return air and exhaust air plenum of each air-conditioning system with a capacity greater than 2,000 cfm, in a serviceable area downstream of the last duct inlet, and at each connection to a vertical duct or riser that serves two or more stories. At 1,800 cfm the units were under the line. At 2,400 cfm they are over it. The 15,000 cfm figure is the trap: it is not in this rule. Duct detectors do not replace area detection, and area detection does not replace them. A mechanical change like this is a design change, so it goes through an RFI before rough-in.",
      ref: "IBC 2021 907.2.13.1.2; 907.3.1"
    },
    {
      id: "2.1.1-14",
      type: "mc",
      q: "The job runs under the AIA A201-2017 general conditions. Before starting the third floor, you compare the drawings with the site and find the architectural ceiling plan shows a hard gypsum ceiling where the fire alarm drawings assume lay-in tile. What does A201 expect the contractor to do?",
      opts: ["Build to the fire alarm drawings, because they are the approved shop drawings","Pick whichever drawing is cheaper to build and note it on the as-builts","Promptly report the inconsistency to the Architect as a request for information","Stop all work on the project until the owner issues a change order"],
      a: 2,
      ex: "A201 has the contractor study and compare the contract documents, take field measurements and observe site conditions before starting each portion of the work, and promptly report any errors, inconsistencies or omissions found to the Architect as a request for information. As a subcontractor you send the RFI through the general contractor. Quietly building to one drawing is the trap: a contractor who skips this duty can end up paying the costs that reporting would have avoided.",
      ref: "AIA A201-2017 3.2.2 (review of contract documents and field conditions)"
    },
    {
      id: "2.1.1-15",
      type: "mc",
      q: "While opening an existing chase for the new riser, your crew finds a concealed concrete wall that is not shown on any contract drawing and blocks the route. Under AIA A201-2017, how soon must notice of this concealed condition be given to the Owner and Architect?",
      opts: ["Within 7 days of finishing the affected work","Promptly, before the condition is disturbed, and no later than 14 days after it is first observed","Within 21 days after it is first observed","With the next monthly application for payment"],
      a: 1,
      ex: "A201-2017 requires prompt notice before the conditions are disturbed, and in no event later than 14 days after first observance. The Architect then investigates and can recommend an adjustment to the contract sum or time. The 21 day answer is the limit from the older 2007 edition. Photograph the condition, stop work in that spot, and get the notice to the GC the same day so the clock is never an issue.",
      ref: "AIA A201-2017 3.7.4 (concealed or unknown conditions)"
    },
    {
      id: "2.1.1-16",
      type: "num",
      q: "Your install plan has these tasks, in working days:<br>A. Rough-in boxes and raceway: 6 days.<br>B. Pull cable: 4 days, after A.<br>C. Ceiling grid and tile by others: 5 days, after B.<br>D. Trim devices: 5 days, after C.<br>E. Panel terminations and programming: 3 days, after B. It can run while C and D are going on.<br>F. Pretest: 2 days, after both D and E.<br>Counting from day 1, on what working day does the pretest finish at the earliest?",
      unit: "days",
      a: 22,
      tol: 0,
      ex: "Follow the longest chain: A 6 + B 4 + C 5 + D 5 + F 2 = 22 days. That chain is the critical path. E finishes on day 13 (6 + 4 + 3) and D does not finish until day 20, so programming has 7 days of float and does not add to the total. The trap is adding every task to get 25 days. The plan also shows that the ceiling contractor, not your crew, controls 5 days of your critical path.",
      ref: "Field practice (scheduling, critical path)"
    },
    {
      id: "2.1.1-17",
      type: "num",
      q: "Three NACs will each be wired with one 2-conductor cable. The routes measured along the pathway are 290 ft, 260 ft and 380 ft. Add 12 ft at each end of each circuit for drops and makeup, then add 10 percent for waste. The cable comes in 500 ft boxes. How many boxes go on the order?",
      unit: "boxes",
      a: 3,
      tol: 0,
      ex: "Routes: 290 + 260 + 380 = 930 ft. End allowances: 3 circuits × 2 ends × 12 ft = 72 ft, so 1,002 ft. With waste: 1,002 × 1.10 = 1,102 ft. 1,102 ÷ 500 = 2.2, so order 3 boxes. The trap is dividing the 930 ft of scaled route by 500 and ordering 2. Running out of cable on a ceiling that closes tomorrow costs far more than a part box left over.",
      ref: "Field practice (material takeoff)"
    },
    {
      id: "2.1.1-18",
      type: "num",
      q: "The drawings show 4 heat detectors with a listed spacing of 50 ft in a 60 ft × 90 ft storage bay, laid out for a smooth 10 ft ceiling. On site the smooth ceiling measures 19 ft. The ceiling-height reduction table gives a multiplier of 0.64 for ceilings over 18 ft and up to 20 ft. Using a rectangular grid, with no detector farther from a wall than half the reduced spacing, how many heat detectors does the bay need now?",
      unit: "detectors",
      a: 6,
      tol: 0,
      ex: "Reduced spacing: 50 ft × 0.64 = 32 ft. Across the 60 ft width: 60 ÷ 32 = 1.9, so 2 rows. Along the 90 ft length: 90 ÷ 32 = 2.8, so 3 per row. 2 × 3 = 6 detectors, at 30 ft centers and 15 ft from the walls. The original 4 worked only at 50 ft spacing. Two more detectors is a design change, so it goes back to the designer, and the extra devices, wire and labor go into your plan.",
      ref: "NFPA 72-2022 17.6.3.5.1; Table 17.6.3.5.1; 17.6.3.1.1"
    },
    {
      id: "2.1.1-19",
      type: "num",
      q: "A tenant plans furniture partitions in an open office with a 12 ft (144 in.) ceiling. The spot smoke detector layout treats the floor as one open room. Partitions that reach to within 15 percent of the ceiling height, measured down from the ceiling, make the areas they separate count as separate rooms. What is the tallest partition, in whole inches above the floor, that stays below that band?",
      unit: "in.",
      a: 122,
      tol: 0.4,
      ex: "15 percent of 144 in. is 0.15 × 144 = 21.6 in. A partition top has to stay more than 21.6 in. below the ceiling, so the limit is 144 − 21.6 = 122.4 in., and the tallest whole-inch partition is 122 in. (10 ft 2 in.). Anything taller is treated like a wall: smoke banks up behind it, each area needs its own coverage, and the layout goes back to the designer. Answering 21.6 is the usual slip: that is the gap, not the partition height. Ask for partition heights before the furniture is ordered, not after it is installed.",
      ref: "NFPA 72-2022 Ch 17 (partitions treated as walls)"
    },
    {
      id: "2.1.1-20",
      type: "mc",
      q: "The drawings show spot-type heat detectors with a listed spacing of 30 ft, laid out for a smooth ceiling in a storage room. On site the 10 ft ceiling has beams that project 8 in. below it, spaced 6 ft on center. What is the greatest detector spacing allowed at right angles to the beams?",
      opts: ["30 ft, because beams this shallow are ignored","20 ft","15 ft","No spacing applies: a detector goes in every beam pocket"],
      a: 1,
      ex: "For heat detectors a ceiling counts as smooth only if the beams project 4 in. or less. Where they project more than 4 in., the spacing at right angles to the beams may not be more than two-thirds of the listed spacing: 30 × 2 ÷ 3 = 20 ft. Parallel to the beams the listed 30 ft still applies. Half the listed spacing (15 ft) is the rule for solid joists, which is the tempting mix-up. Each bay becomes a separate area only when the beams are more than 18 in. deep and more than 8 ft on center. Closer spacing means more detectors, so send it back to the designer and add the devices, wire and labor to your plan.",
      ref: "NFPA 72-2022 Ch 17 (heat detector spacing, beam construction)"
    },
    {
      id: "2.1.1-21",
      type: "mc",
      q: "The drawings show a standard spot-type smoke detector in an unheated loading dock vestibule. The building engineer tells you the space drops to about 20 °F in winter. What is the right response?",
      opts: ["Send an RFI: the space is below the 32 °F limit for smoke detectors unless the detector is specifically listed for it, so expect a heat detector or a listed device","Install it as drawn, because the low temperature limit applies only to heat detectors","Install it as drawn and add a dust cover for the winter months","Install it as drawn but program the point as supervisory"],
      a: 0,
      ex: "Unless specifically listed for the conditions, smoke detectors are not installed where the temperature is below 32 °F or above 100 °F, the relative humidity is above 93 percent, or the air velocity is over 300 ft/min. The building code backs this up: where ambient conditions prohibit smoke detectors, another type such as heat detection is used. A dust cover makes the detector blind, and reprogramming the point does not make it work in the cold.",
      ref: "NFPA 72-2022 Ch 17 (smoke detector environmental limits); IBC 2021 907.4.3"
    },
    {
      id: "2.1.1-22",
      type: "mc",
      q: "You are preparing for the coordination meeting with the elevator contractor on a building with one group of elevators. For Phase I emergency recall, how many separate outputs from the fire alarm system to the elevator controller should your plan provide?",
      opts: ["One: a general alarm contact","Two: recall to the designated level and recall to the alternate level","Three: designated level recall, alternate level recall, and the visual warning signal for the car","One for each elevator lobby smoke detector"],
      a: 2,
      ex: "NFPA 72 calls for three separate outputs: recall to the designated level, recall to the alternate level (used when the fire is at the designated level), and the signal that flashes the firefighter's hat in the car when a machine room, control space or hoistway detector operates. Planning only the two recall outputs is the usual miss. Agree with the elevator contractor where the relays land, and remember the interface has to be within 3 ft of the controller.",
      ref: "NFPA 72-2022 21.3.14"
    },
    {
      id: "2.1.1-23",
      type: "mc",
      q: "A lobby serves a bank of four elevators in a row under a flat, smooth 9 ft ceiling. The drawings show one lobby smoke detector for recall. You scale it at 26 ft from the centerline of the farthest elevator door. What does the plan need?",
      opts: ["Nothing, because one detector per elevator lobby always satisfies recall","Nothing, because the detector is within the 30 ft smoke detector spacing","Move the detector onto the wall directly above the farthest door","An RFI to relocate or add a detector so every door centerline in the bank is within 21 ft of a lobby detector"],
      a: 3,
      ex: "A lobby smoke detector used for recall must be on the ceiling within 21 ft of the centerline of each elevator door in the bank it controls. At 26 ft the far door is not covered. The 30 ft spacing figure is the trap: 21 ft is 0.7 × 30, the same farthest-point distance used for area coverage. Catching this on the walk is cheaper than failing the recall test with the elevator inspector watching.",
      ref: "NFPA 72-2022 21.3.5"
    },
    {
      id: "2.1.1-24",
      type: "mc",
      q: "Ductwork changes have put a duct smoke detector and its monitor module above a gypsum board ceiling with no hatch. The detector reports to the control unit, and the mechanical contractor says nobody ever needs to get to it. What does the work plan need?",
      opts: ["Nothing, because the detector is monitored by the control unit","An access panel coordinated with the general contractor, because access is required to every device for inspection, testing and maintenance","A second duct detector in an accessible spot as a backup","A note on the as-builts that the detector is exempt from testing"],
      a: 1,
      ex: "The IBC requires access to each fire alarm device and notification appliance for periodic inspection, maintenance and testing. A duct detector needs its housing opened, its sampling tubes checked and its sensitivity verified for the life of the system. No device is exempt because it is hard to reach. Raise it before the ceiling is finished, while an access panel is a small coordination item and not a patch-and-paint job.",
      ref: "IBC 2021 907.6.5"
    },
    {
      id: "2.1.1-25",
      type: "mc",
      q: "The fire alarm drawings show monitor modules for one waterflow switch and two control valves. Walking the riser room with the sprinkler fitter, you find two more indicating control valves on the backflow preventer in the main water supply. They have tamper switches, and they are not on your drawings. What do you do?",
      opts: ["Send an RFI and plan supervisory points for them, because valves that control the sprinkler water supply are electrically supervised","Leave them off, because the fire alarm contractor monitors only what the fire alarm drawings show","Wire the two extra tamper switches in parallel on the waterflow module","Ask the sprinkler fitter to remove the tamper switches"],
      a: 0,
      ex: "The IBC requires valves controlling the water supply for automatic sprinkler systems to be electrically supervised by a listed fire alarm control unit. A closed backflow preventer valve shuts off the whole system, so it needs a supervisory point. Putting tamper switches on the waterflow module is the trap: it turns a closed valve into a fire alarm, and alarm and supervisory signals must stay distinct. Field counts of flow and tamper switches rarely match the drawings, so walk every riser.",
      ref: "IBC 2021 903.4; NFPA 72-2022 17.17 (supervisory signal-initiating devices)"
    },
    {
      id: "2.1.1-26",
      type: "mc",
      q: "To hold the schedule, you want to send two first-year helpers with no training or certification to wire and mount devices on the third floor by themselves all week. What does NFPA 72 require of installation personnel?",
      opts: ["Nothing, because qualifications apply only to the system designer","Each installer must hold NICET Level II or higher","Only the person who programs the control unit has to be qualified","They must be qualified, or be supervised by people who are qualified in installing, inspecting and testing the systems"],
      a: 3,
      ex: "Installation personnel must be qualified or work under the supervision of persons qualified in the installation, inspection and testing of the systems. Qualification is shown by state or local licensing or registration, a certification the AHJ accepts, or manufacturer certification for the equipment. NFPA 72 does not name a NICET level, which is the tempting answer. Crew the floor so a qualified lead is actually supervising the helpers.",
      ref: "NFPA 72-2022 10.5.2"
    },
    {
      id: "2.1.1-27",
      type: "mc",
      q: "For two weeks your crew will work on a raised equipment platform whose deck is 30 in. above the floor. There is no ramp, and the crew will go up and down all day. What does OSHA's construction standard require at the access point?",
      opts: ["Nothing, because access rules start at a 4 ft change in level","Nothing, because the platform is less than 6 ft high","A guardrail around the platform, but no particular means of access","A stairway or ladder, because the break in elevation is 19 in. or more"],
      a: 3,
      ex: "OSHA's construction rule requires a stairway or ladder at every point of personnel access where there is a break in elevation of 19 in. or more and no ramp, runway, sloped embankment or personnel hoist is provided. A 30 in. step is over that line. The 6 ft figure is the trap: it is the usual trigger for fall protection in construction, not for access. Climbing up on a bucket or a cable reel is how ankles get broken, so put the stairs or ladder in the plan and on the material list.",
      ref: "OSHA 29 CFR 1926.1051(a)"
    },
    {
      id: "2.1.1-28",
      type: "mc",
      q: "A rented boom-type aerial lift will be on site for three weeks so your crew can mount strobes high on an atrium wall. Under OSHA's construction rule for aerial lifts, how often must the lift controls be tested?",
      opts: ["Once, by the rental company, when the lift is delivered","Once a week, by a competent person","Each day before the lift is used","Only after the lift has been moved to a new work area"],
      a: 2,
      ex: "The rule says lift controls are tested each day prior to use, to confirm they are in safe working condition. Put it in the daily start-up routine. The same paragraph says only authorized persons may operate an aerial lift, and that the manufacturer's boom and basket load limits may not be exceeded, so the plan should name the operators and count the workers, tools and material going up. Relying on the rental company's delivery check is the trap: the machine gets knocked around on a site every day.",
      ref: "OSHA 29 CFR 1926.453(b)(2)(i)"
    },
    {
      id: "2.1.1-29",
      type: "multi",
      q: "Cable is pulled and the ceilings are about to close. Before the new field wiring is landed on the control unit and the devices are connected, which THREE checks of the conductors does the NFPA 72 test table call for?",
      opts: ["Stray voltage between conductors and from conductors to ground, normally no more than 1 V ac/dc","An insulation resistance test at 500 V with the detectors and modules connected","Isolation of the conductors from ground (ground faults)","Conductor-to-conductor isolation (short-circuit faults)","The sound level of each circuit's appliances"],
      a: [0,2,3],
      ex: "The metallic conductor tests are stray voltage (1 V ac/dc maximum unless the manufacturer gives a different figure), ground faults, short-circuit faults, and loop resistance measured with the far end of the pair shorted. Schedule them after the pull and before trim, while a damaged cable can still be reached. High-voltage testing with electronics connected destroys devices, and sound levels are a notification appliance test for later.",
      ref: "NFPA 72-2022 Table 14.4.3.2(15)"
    },
    {
      id: "2.1.1-30",
      type: "multi",
      q: "Your plan for a control unit cutover includes a two-day impairment of the existing system. Which TWO of these are NFPA 72-2022 requirements?",
      opts: ["The owner has to be told only if the outage lasts more than 8 hours","Where the AHJ requires them, mitigating measures such as a fire watch are in place for the whole time the system is impaired","The impairment record may be thrown away once the system is back in service","When the impairment ends, the owner or the owner's representative and the AHJ are notified","The AHJ needs a report only if the outage runs past 24 hours"],
      a: [1,3],
      ex: "Mitigating measures are implemented for the period of the impairment where the AHJ requires them, and when the impairment ends the owner or designated representative and the AHJ are both notified. The owner is notified of any impairment, not only long ones. The 8 hour figure is when the service provider must report an out-of-service system to the AHJ. The owner keeps the impairment record for 1 year after it is corrected. Write the notifications into the plan with names and phone numbers.",
      ref: "NFPA 72-2022 10.21.5; 10.21.6"
    }
  ],
  "2.1.2": [
    {
      id: "2.1.2-01",
      type: "mc",
      q: "A specification calls for signaling line circuit pathways that keep working past a single open <b>or</b> a single short circuit, with the fault reported as a trouble. Which pathway class is that?",
      opts: ["Class A","Class B","Class X","Class N"],
      a: 2,
      ex: "Class X has a redundant path and keeps operating past a single open or a single short circuit. Class A is the tempting answer: it also has a redundant path, but its definition only promises operation past a single open. In practice, Class X on an SLC means isolator modules or isolator bases so a short takes out only one segment.",
      ref: "NFPA 72-2022 12.3.7"
    },
    {
      id: "2.1.2-02",
      type: "multi",
      q: "Which TWO statements about NFPA 72-2022 pathway classes are correct?",
      opts: ["Class B has no redundant path, so devices beyond a single open stop working","Class C is the fail-safe class","Class E pathways are not monitored for integrity","Class A must keep operating past a short circuit","Class N applies only to wireless pathways"],
      a: [0,2],
      ex: "Class B has one path, so operation stops at an open and the panel shows trouble. Class E is not monitored at all. The fail-safe class is D: no fault is annunciated, but the intended action happens when the pathway fails, like a door holder that drops when power is lost. Class C is verified by end-to-end communication. Class N is for networks such as Ethernet with two or more pathways.",
      ref: "NFPA 72-2022 12.3 (pathway class designations)"
    },
    {
      id: "2.1.2-03",
      type: "mc",
      q: "On a Class A circuit, the outgoing and return conductors must be routed separately. Where they enter or leave the control unit enclosure, for what maximum distance may both run in the same raceway?",
      opts: ["10 ft","3 ft","20 ft","Any distance, if the raceway is metal"],
      a: 0,
      ex: "Outgoing and return conductors may share a cable, enclosure or raceway for up to 10 ft where they enter or exit a device, appliance or control unit enclosure. The point of Class A is that one cut or one fire cannot take out both paths. Single raceway drops to an individual device, and to multiple devices in one room of 1,000 sq ft or less, are also permitted.",
      ref: "NFPA 72-2022 12.3.8"
    },
    {
      id: "2.1.2-04",
      type: "mc",
      q: "A coworker says pathway survivability runs from Level 0 to Level 3. That was true in the 2019 edition. What does NFPA 72-2022 have?",
      opts: ["Levels 1 through 3","Levels A through E","Levels 0 through 3","Levels 0 through 4"],
      a: 3,
      ex: "The 2022 edition added Level 4, so Section 12.4 now has Levels 0 through 4. Level 0 means no survivability provisions are required. Do not mix these up with the pathway class letters in 12.3 or the shared pathway levels in 12.5. On an open book exam, knowing that Level 4 exists tells you where to look.",
      ref: "NFPA 72-2022 12.4"
    },
    {
      id: "2.1.2-05",
      type: "mc",
      q: "A voice evacuation riser is installed in listed 2-hour circuit integrity (CI) cable. The building is fully protected by an NFPA 13 sprinkler system. Which pathway survivability level does this describe?",
      opts: ["Level 1","Level 3","Level 2","Level 0"],
      a: 1,
      ex: "Level 3 is a 2-hour method (CI cable, a fire-rated cable system, or a 2-hour enclosure) in a fully sprinklered building. Level 2 is the same 2-hour methods without the sprinkler condition, which makes it the tempting answer. Level 1 is a fully sprinklered building with the wiring in metal raceway or metal-armored cable. In-building voice systems used for relocation or partial evacuation generally need Level 2 or Level 3 under Chapter 24.",
      ref: "NFPA 72-2022 12.4.3; 12.4.4; 24.3.14 (ECS pathway survivability)"
    },
    {
      id: "2.1.2-06",
      type: "mc",
      q: "Inside the control unit cabinet, the 120 V branch circuit conductors enter only to land on the power supply terminals. What minimum separation must be kept between them and the power-limited fire alarm (PLFA) wiring?",
      opts: ["0.25 in.","2 in.","6 in.","None, if all conductors have 300 V insulation"],
      a: 0,
      ex: "Where power conductors enter an enclosure only to connect to the fire alarm equipment, they must be routed to keep at least 0.25 in. from the PLFA conductors. The 2 in. figure is for other locations, where PLFA cable runs near power or Class 1 conductors that are not in a raceway or cable sheath. Apart from that allowance, PLFA and power conductors may not share a raceway, cable or enclosure unless a barrier separates them.",
      ref: "NEC 2020 760.136(D) and 760.136(G)"
    },
    {
      id: "2.1.2-07",
      type: "multi",
      q: "A PLFA circuit will run exposed, without raceway, through a ceiling space used as a return air plenum. Which TWO cable types are permitted?",
      opts: ["FPL","FPLR","FPLP","CMR","CMP"],
      a: [2,4],
      ex: "FPLP is the plenum-rated fire alarm cable, and CMP is the listed substitute for it. FPLR and CMR are riser cables: good for vertical shafts, not for plenums. FPL is general purpose only. Substitution goes down the ladder, never up: a plenum cable can be used in a riser, but not the other way around.",
      ref: "NEC 2020 760.154, Table 760.154 and 760.154(A)"
    },
    {
      id: "2.1.2-08",
      type: "num",
      q: "A 3/4 in. EMT has an internal area of 0.533 sq in. You are pulling identical round 2-conductor fire alarm cables with an outside diameter of 0.25 in. NEC Chapter 9 treats each multiconductor cable as one conductor, and allows 40 percent fill for more than two. Using area = π × d² ÷ 4, what is the largest number of these cables allowed?",
      unit: "cables",
      a: 4,
      tol: 0,
      ex: "Allowed fill: 0.533 × 0.40 = 0.213 sq in. Each cable: 3.1416 × 0.25² ÷ 4 = 0.0491 sq in. 0.213 ÷ 0.0491 = 4.34, so 4 cables (0.196 sq in.). Five cables would be 0.245 sq in., which is over the limit. For same-size cables the NEC lets you round up only when the decimal is 0.8 or more, and 0.34 is not. The trap is using 53 percent, which is the limit for a single conductor (31 percent is for two) and would wrongly allow 5.",
      ref: "NEC 2020 Chapter 9 (conduit fill tables and their notes); 760.3(J)"
    },
    {
      id: "2.1.2-09",
      type: "num",
      q: "One conduit carries three 120 V, 2-wire branch circuits feeding fire alarm power supplies: three hots, three neutrals, and one equipment grounding conductor, all 12 AWG THHN copper. The 90 °C ampacity of 12 AWG is 30 A. The adjustment factor is 80 percent for 4 to 6 current-carrying conductors and 70 percent for 7 to 9. What is the adjusted ampacity, in amps?",
      unit: "A",
      a: 24,
      tol: 0.1,
      ex: "Count the current-carrying conductors: 3 hots + 3 neutrals = 6. The equipment grounding conductor is not counted. Six falls in the 4 to 6 band: 30 A × 0.80 = 24 A. The trap is counting the ground to get 7 and using 70 percent (21 A). The neutral of a 2-wire circuit carries the full load current, so it does count. The breaker for 12 AWG is still limited to 20 A; the 24 A figure only shows the wire is adequate after derating.",
      ref: "NEC 2020 Article 310 (ampacity adjustment factors)"
    },
    {
      id: "2.1.2-10",
      type: "mc",
      q: "You core a hole through a 2-hour fire-rated wall for a fire alarm conduit. What is required at the penetration?",
      opts: ["Pack the opening with mineral wool","Fill the gap with any red fire caulk","A listed through-penetration firestop system that matches the wall, the penetrating item and the required rating, installed per its listing","Nothing, because metal conduit does not burn"],
      a: 2,
      ex: "Fire alarm wiring must be installed so it does not help fire or smoke spread, and openings through rated assemblies must be firestopped by an approved method that maintains the rating. That means a tested, listed system for that wall type, that penetrant and that annular space. Red caulk by itself is the trap: the product is only one part of a listed system, and the wrong depth or backing voids it.",
      ref: "NEC 2020 760.3(A) and 300.21; IBC 2021 Ch 7 (penetrations)"
    },
    {
      id: "2.1.2-11",
      type: "mc",
      q: "To save time above a corridor ceiling, a helper has tie-wrapped the power-limited fire alarm cable to the outside of the electrician's EMT for 200 ft. What is the correct call?",
      opts: ["Acceptable, if the ties are no more than 18 in. apart","Not permitted: PLFA cable may not be strapped, taped or attached to the outside of a raceway for support","Acceptable, if the EMT carries only fire alarm power circuits","Not permitted only where the ceiling space is a plenum"],
      a: 1,
      ex: "The NEC does not allow PLFA cable to be attached by any means to the exterior of a conduit or other raceway as its support. Cable must be supported by the building structure with hangers, straps or similar fittings that do not damage it, and it must not rest on the ceiling grid or block ceiling tiles. Re-support it now, before the ceiling closes.",
      ref: "NEC 2020 760.143, 760.24(A), 760.21"
    },
    {
      id: "2.1.2-12",
      type: "mc",
      q: "Your planned EMT run between two junction boxes has four 90° bends and one offset made with two 30° bends. What does the NEC require?",
      opts: ["Nothing, because an offset does not count toward the bend total","Nothing, because the limit is four 90° bends plus one offset","Upsize the EMT one trade size","Add a pull point, because the run totals 420° and the limit is 360° between pull points"],
      a: 3,
      ex: "4 × 90° = 360°, plus 2 × 30° = 60°, gives 420°. The limit is 360° total between pull points, and every bend counts, including offsets and kicks. Forgetting the offsets is the usual mistake. Add a pull box or conduit body so each section is at or under 360°.",
      ref: "NEC 2020 Article 358 (EMT, number of bends in one run)"
    },
    {
      id: "2.1.2-13",
      type: "mc",
      q: "A Class N (Ethernet) design gives every network switch two pathways back to the control equipment. From each switch, a single cable runs to each individual networked loudspeaker. A reviewer says the single cables violate Class N. Who is right?",
      opts: ["The reviewer: every Class N segment needs two pathways","The designer: Class N requires a redundant pathway except to a single endpoint device","The designer, but only if each single cable is less than 20 ft long","The designer, because Class N pathways are not monitored"],
      a: 1,
      ex: "Class N needs two or more pathways, verified by end-to-end communication, to each device, but where only one endpoint device is served a single pathway is allowed. Losing that cable costs one device, and the loss of communication is still reported as a trouble. Anything that serves more than one device, such as the links between switches and control equipment, needs the redundant path. The 20 ft figure belongs to interconnections between control equipment enclosures.",
      ref: "NFPA 72-2022 12.3.6"
    },
    {
      id: "2.1.2-14",
      type: "mc",
      q: "On a Class A signaling line circuit, four devices in a 28 ft × 38 ft conference room are fed by one raceway drop from the corridor. The outgoing and return conductors are both in that raceway for its whole 45 ft length. Is this permitted?",
      opts: ["Yes, a single raceway drop to devices in one room is always allowed","Yes, because the shared raceway is under 50 ft","No, because Class A conductors may never share a raceway","No, the room is 1,064 sq ft, over the 1,000 sq ft limit for a shared drop to multiple devices"],
      a: 3,
      ex: "28 × 38 = 1,064 sq ft. Outgoing and return conductors may share a raceway in only three cases: for up to 10 ft where they enter or leave a device, appliance or control unit enclosure; a single drop to one individual device or appliance; or a drop to multiple devices in a single room of 1,000 sq ft or less, with no emergency control function interface devices on it. This room is too big for the third case and the run is too long for the first. Route the return leg separately.",
      ref: "NFPA 72-2022 12.3.8.1"
    },
    {
      id: "2.1.2-15",
      type: "mc",
      q: "A specification calls for pathway survivability Level 1 on the notification appliance circuits. The building is fully protected by an NFPA 13 sprinkler system. What wiring method does Level 1 take?",
      opts: ["Conductors or cables in metal raceway, or metal-armored cable","Listed 2-hour circuit integrity (CI) cable","Plenum-rated cable run exposed above the ceiling","Any listed fire alarm cable, because the sprinklers alone satisfy Level 1"],
      a: 0,
      ex: "Level 1 is a fully sprinklered building with the interconnecting conductors, cables or other physical pathways protected by metal raceways or metal-armored cable. Two-hour CI cable is a Level 2 or Level 3 method, which is more than Level 1 asks for. Sprinklers by themselves are the trap: with no wiring protection the pathway only meets Level 0. Price the raceway or armored cable into the job before the bid goes out.",
      ref: "NFPA 72-2022 12.4 (pathway survivability, Level 1)"
    },
    {
      id: "2.1.2-16",
      type: "mc",
      q: "A fire alarm network will run over the building's Ethernet backbone along with building automation traffic. The design documents call for shared pathway Level 1. What does that require?",
      opts: ["Life safety data must be kept on separate conductors or fibers from all other data","All equipment on the pathway must be dedicated to the life safety system","Life safety and other data may share the pathway, but all life safety data gets priority","Nothing: the data need not be separated or prioritized"],
      a: 2,
      ex: "Shared pathway Level 1 does not require life safety data to be segregated from non-life safety data, but it must prioritize all life safety data. Level 0 requires neither. Level 2 segregates the life safety data, and Level 3 uses equipment dedicated to the life safety system. Do not confuse these with the pathway survivability levels in the section before, which are about fire resistance, not data traffic.",
      ref: "NFPA 72-2022 12.5.2"
    },
    {
      id: "2.1.2-17",
      type: "mc",
      q: "During rough-in, one conductor of a copper signaling line circuit is pinched under a box cover and grounded to the conduit system. Under NFPA 72, what must the system do with this single ground fault?",
      opts: ["Report a trouble and keep operating normally","Report a trouble, and it is acceptable for the circuit to stop working","Go into alarm so the fault gets immediate attention","Nothing, if the circuit is Class B"],
      a: 0,
      ex: "On conductive pathways, operation must be maintained with a single ground connection, and monitoring for integrity reports the ground as a trouble within 200 seconds. That is why one ground is a service call and not a failure. The danger is the second ground: two grounds on different conductors act like a short. Treating a ground-fault trouble as harmless and leaving it is the field mistake.",
      ref: "NFPA 72-2022 12.2.4.3; 12.6 (monitoring for integrity)"
    },
    {
      id: "2.1.2-18",
      type: "mc",
      q: "A new amplifier cabinet will sit 35 ft from the fire alarm control unit, and the interconnecting wiring between the two enclosures will be in EMT. The installer says the interconnection does not need to be monitored for integrity because it is in conduit. Is that correct?",
      opts: ["Yes, wiring in metal conduit never needs monitoring","Yes, as long as both enclosures are in the same room","No, the allowance covers only control equipment enclosures within 20 ft of each other, so at 35 ft the wiring must be monitored","No, the allowance stops at 3 ft"],
      a: 2,
      ex: "Monitoring for integrity may be omitted for the interconnection between enclosures containing control equipment only where they are within 20 ft of each other and the conductors are in conduit or equivalently protected against mechanical injury. Both conditions must be met. At 35 ft, either move the cabinet inside 20 ft or use a monitored connection. The 3 ft figure is the distance from an emergency control function relay to the equipment it controls.",
      ref: "NFPA 72-2022 12.6.9"
    },
    {
      id: "2.1.2-19",
      type: "multi",
      q: "Ceiling work damages a Class B notification appliance circuit. Which TWO statements match the NFPA 72-2022 rules for monitoring pathways?",
      opts: ["A wire-to-wire short on the notification appliance circuit must result in a trouble signal","A wire-to-wire short on the notification appliance circuit is expected to sound the appliances","A single ground fault does not have to be indicated on a Class B circuit","A single open or a single ground fault must not cause an alarm signal","A single open must be indicated within 10 seconds"],
      a: [0,3],
      ex: "Chapter 12 says the interconnecting wiring is arranged so that a single open or a single ground fault does not cause an alarm signal, and that a wire-to-wire short on a notification appliance circuit results in a trouble signal. So damage to the cable shows up as a trouble, never as a false alarm. A ground is indicated on a Class B circuit too. The time limit for indicating a fault is 200 seconds; 10 seconds is the limit for starting alarm notification after an alarm. On a Class B circuit the appliances past an open, or all of them on a shorted circuit, are out until the repair is made, which is why the trouble cannot wait.",
      ref: "NFPA 72-2022 12.6.14; 12.6.15"
    },
    {
      id: "2.1.2-20",
      type: "mc",
      q: "Your crew is running 3/4 in. EMT for fire alarm circuits across an open ceiling. A helper has strapped the tubing every 12 ft, with the first strap 6 ft from each junction box. What does the NEC require for securing EMT?",
      opts: ["Nothing more: a strap every 12 ft is acceptable for 3/4 in. EMT","A strap every 5 ft and within 12 in. of each box","A strap every 10 ft, with no rule about the distance from a box","Fastening at least every 10 ft, and within 3 ft of each box or other termination"],
      a: 3,
      ex: "EMT must be securely fastened in place at least every 10 ft, and each run must also be fastened within 3 ft of every outlet box, junction box, device box, cabinet, conduit body or other tubing termination. Both the 12 ft interval and the 6 ft distance from the boxes fail. The 3 ft is measured from boxes and terminations, not from couplings. Forgetting the box rule is the usual miss. Loose tubing works out of its fittings, which damages the cable and breaks the bonding path of a metal raceway.",
      ref: "NEC 2020 Article 358 (EMT, securing and supporting)"
    },
    {
      id: "2.1.2-21",
      type: "mc",
      q: "The fire alarm control unit and a NAC power supply cabinet are mounted side by side and joined by an 18 in. length of 1 in. EMT. Several fire alarm cables pass through it. What fill do the NEC Chapter 9 table notes allow for this short nipple?",
      opts: ["40 percent, the same as any raceway with more than two cables","60 percent, because it is a nipple no longer than 24 in.","53 percent, the limit for a single cable","100 percent, because fill limits do not apply between cabinets"],
      a: 1,
      ex: "The notes to the Chapter 9 tables allow a conduit or tubing nipple with a maximum length of 24 in., installed between boxes, cabinets and similar enclosures, to be filled to 60 percent of its total area. For 1 in. EMT (0.864 sq in.) that is 0.864 × 0.60 = 0.518 sq in., against 0.346 sq in. at 40 percent. Using 40 percent is the usual answer. It is safe, but it can make you add a second nipple for nothing. The allowance ends at 24 in.: a 30 in. sleeve between the same cabinets goes back to the normal limits.",
      ref: "NEC 2020 Chapter 9 (conduit fill tables and their notes); 760.3(J)"
    },
    {
      id: "2.1.2-22",
      type: "mc",
      q: "A fire alarm conduit runs from a heated corridor through the wall of a walk-in freezer to serve a device inside. Condensation is a known problem in raceways like this one. What does the NEC require?",
      opts: ["Fill the raceway with an approved material that stops warm air from moving to the colder section","Nothing, because that rule applies only to power circuits","Slope the conduit toward the freezer and drill a drain hole in it","Use plenum-rated cable where the conduit passes through the freezer wall"],
      a: 0,
      ex: "Article 760 names the Article 300 rules that apply to fire alarm wiring, and this is one of them. Where a raceway or sleeve is exposed to different temperatures and condensation is known to be a problem, as when it passes from a warm space into a cooler or freezer, it must be filled with an approved material that prevents warm air from circulating to the colder section. Warm, moist air that reaches the cold end condenses and freezes, and water in the device box gives ground faults. Thinking the Article 300 rules stop at power wiring is the trap. Plan the seal and note it on the drawings so it is not forgotten at trim.",
      ref: "NEC 2020 760.3(H); 300.7(A)"
    },
    {
      id: "2.1.2-23",
      type: "mc",
      q: "A fire alarm relay module's contacts break a 24 V control circuit that is powered by the air handler's own Class 2 control transformer. The fire alarm system neither powers nor controls that circuit's source. Which NEC article governs the wiring from the relay contacts to the air handler controls?",
      opts: ["Article 760, because it connects to a fire alarm relay","Article 800","Article 725","Article 430"],
      a: 2,
      ex: "Article 760 covers circuits controlled and powered by the fire alarm system. Building control circuits that are associated with the fire alarm system but not controlled and powered by it, such as fan shutdown and elevator capture fed from the other equipment's source, are installed under Article 725 as Class 1, 2 or 3 circuits. So the SLC to the relay module is Article 760 wiring, and the contact side here is Article 725 wiring. Knowing where the line falls tells you which cable types and separations apply.",
      ref: "NEC 2020 760.3(E)"
    },
    {
      id: "2.1.2-24",
      type: "mc",
      q: "To save 60 ft of cable, a helper proposes running a plenum-rated (FPLP) signaling line circuit cable inside a sheet metal supply air duct to reach area smoke detectors on the far side of the floor. Is that permitted?",
      opts: ["Yes, because FPLP cable may be installed anywhere air is moving","No: in a fabricated duct, cable is allowed only where it is directly associated with the air distribution system, and then only as short as practicable","Yes, if the cable is tie-wrapped every 18 in. inside the duct","No, because fire alarm cable may never enter a duct for any reason"],
      a: 1,
      ex: "A duct specifically fabricated for environmental air is a tighter case than a plenum ceiling. Plenum-rated fire alarm cable is permitted inside one only if it is directly associated with the air distribution system, such as wiring to a device in the duct, and in lengths as short as practicable. Using the duct as a shortcut for a general circuit is not allowed. Mixing up the open plenum space above a ceiling with the inside of a duct is the trap.",
      ref: "NEC 2020 760.135(B); 760.3(B)"
    },
    {
      id: "2.1.2-25",
      type: "multi",
      q: "A power-limited circuit has to cross a ceiling space that is used as a return-air plenum. The only fire alarm cables in stock are FPL, FPLR and FPLP. Which TWO installations does the NEC permit in the plenum space?",
      opts: ["FPL cable run exposed on J-hooks, because the crossing is short","FPLP cable run exposed on J-hooks","FPLR cable run exposed, because riser cable is a higher grade than plenum cable","FPL cable pulled in EMT","FPL cable pulled in electrical nonmetallic tubing (ENT)"],
      a: [1,3],
      ex: "Cable run exposed in a plenum must be plenum rated, so FPLP on J-hooks is allowed. The NEC also permits FPL, FPLR or FPLP cable in a plenum space when it is installed in a raceway that meets the plenum wiring rules, and EMT is one of the metal raceways those rules accept. So FPL in EMT is allowed too. FPLR run exposed is the tempting wrong pick: riser cable ranks below plenum cable, not above it. Nonmetallic tubing is not a wiring method permitted in a plenum space, so it does not make FPL acceptable. Before you choose, compare the labor for the raceway with the price of FPLP.",
      ref: "NEC 2020 760.135(C); 760.3(B); 300.22(C)"
    },
    {
      id: "2.1.2-26",
      type: "mc",
      q: "Power-limited fire alarm cable will run exposed on J-hooks above a corridor ceiling, about 1 in. from a run of EMT that carries 277 V lighting circuits. The cable is not attached to the EMT. What separation does the NEC require between the cable and the EMT?",
      opts: ["At least 2 in.","At least 0.25 in.","At least 12 in.","No minimum, because the power conductors are enclosed in a raceway"],
      a: 3,
      ex: "The 2 in. separation applies between power-limited fire alarm conductors and power conductors in the open. It is not required where the power conductors, or the fire alarm conductors, are within a raceway or a cable type such as metal-clad cable. EMT is a raceway, so no minimum distance applies here. The 0.25 in. figure is for power conductors that enter fire alarm equipment. The cable still may not be strapped to the EMT for support.",
      ref: "NEC 2020 760.136(G)"
    },
    {
      id: "2.1.2-27",
      type: "mc",
      q: "A Class N (Ethernet) design links two network switches that together serve 40 networked loudspeakers. To save cable, the designer carries both the primary and the redundant pathway between the switches on one cable, as two separate virtual networks (VLANs). Does this meet Class N?",
      opts: ["No: the primary and redundant pathways may not share traffic over the same physical segment","Yes, because the two VLANs are logically separate pathways","Yes, as long as the shared cable is plenum rated","Yes, because a Class N pathway only has to report a loss of communication"],
      a: 0,
      ex: "Class N needs a redundant pathway wherever more than one device depends on the path, and the primary and redundant pathways are not permitted to share traffic over the same physical segment. Two VLANs on one cable are still one physical segment: cut that cable and both paths are gone, along with 40 loudspeakers. Logical separation is the trap. Only the last leg to a single endpoint device may be a single path. Run the second link as its own cable on its own route.",
      ref: "NFPA 72-2022 12.3.6"
    },
    {
      id: "2.1.2-28",
      type: "mc",
      q: "Two round multiconductor fire alarm cables, each 0.35 in. in outside diameter, will share one EMT sleeve between two floors. NEC Chapter 9 treats each cable as one conductor: 53 percent fill for one, 31 percent for two, 40 percent for more than two. EMT internal areas are 0.304 sq in. (1/2 in.), 0.533 sq in. (3/4 in.), 0.864 sq in. (1 in.) and 1.496 sq in. (1-1/4 in.). Using area = π × d² ÷ 4, what is the smallest EMT that works?",
      opts: ["1/2 in.","3/4 in.","1 in.","1-1/4 in."],
      a: 2,
      ex: "Each cable: 3.1416 × 0.35² ÷ 4 = 0.0962 sq in., so two take 0.1924 sq in. Two conductors are limited to 31 percent. 3/4 in.: 0.533 × 0.31 = 0.165 sq in., too small. 1 in.: 0.864 × 0.31 = 0.268 sq in., which works. The trap is using 40 percent, which gives 0.213 sq in. for 3/4 in. EMT and looks like a pass. The two-cable limit is the lowest of the three and the easiest to forget.",
      ref: "NEC 2020 Chapter 9 (conduit fill tables and their notes); 760.3(J)"
    },
    {
      id: "2.1.2-29",
      type: "num",
      q: "A single round multiconductor fire alarm cable will be pulled in 1/2 in. EMT, which has an internal area of 0.304 sq in. NEC Chapter 9 treats the cable as one conductor and allows 53 percent fill for one conductor. Using area = π × d² ÷ 4, what is the largest cable outside diameter allowed, in inches? Round down to two decimal places.",
      unit: "in.",
      a: 0.45,
      tol: 0.005,
      ex: "Allowed area: 0.304 × 0.53 = 0.1611 sq in. Solve for diameter: d² = 0.1611 × 4 ÷ 3.1416 = 0.2051, and the square root is 0.453 in., so 0.45 in. Using 40 percent, the limit for more than two conductors, gives 0.39 in. and would have you upsizing the conduit for nothing. Check the cable's actual outside diameter on its data sheet, since it varies by maker and conductor count.",
      ref: "NEC 2020 Chapter 9 (conduit fill tables and their notes); 760.3(J)"
    },
    {
      id: "2.1.2-30",
      type: "num",
      q: "A 1 in. EMT has an internal area of 0.864 sq in. and already holds three round fire alarm cables that are each 0.30 in. in outside diameter. You want to add round cables that are 0.22 in. in outside diameter. NEC Chapter 9 treats each multiconductor cable as one conductor and allows 40 percent fill for more than two. Using area = π × d² ÷ 4, how many of the 0.22 in. cables can be added?",
      unit: "cables",
      a: 3,
      tol: 0,
      ex: "Allowed fill: 0.864 × 0.40 = 0.3456 sq in. Existing: 3 × (3.1416 × 0.30² ÷ 4) = 3 × 0.0707 = 0.2121 sq in. Left over: 0.3456 − 0.2121 = 0.1335 sq in. Each new cable: 3.1416 × 0.22² ÷ 4 = 0.0380 sq in. 0.1335 ÷ 0.0380 = 3.5, so 3 cables. A fourth would bring the total to 0.364 sq in., over the limit. The trap is forgetting the cables already in the pipe, which gives 9.",
      ref: "NEC 2020 Chapter 9 (conduit fill tables and their notes); 760.3(J)"
    }
  ],
  "2.1.3": [
    {
      id: "2.1.3-01",
      type: "mc",
      q: "You are setting the mounting height for a fire alarm control unit. Unless the AHJ permits otherwise, what limits apply to its switches, lamps and text display?",
      opts: ["Highest no more than 6 ft above the finished floor, lowest no less than 15 in.","Highest no more than 48 in. above the finished floor, lowest no less than 42 in.","All between 80 in. and 96 in. above the finished floor","Center of the display exactly 60 in. above the finished floor"],
      a: 0,
      ex: "The highest switch, lamp or display may not be more than 6 ft above the finished floor, and the lowest not less than 15 in. Check a tall cabinet or a stacked annunciator against both numbers before you set the back box. The 42 in. to 48 in. range is for manual pull stations, and 80 in. to 96 in. is for wall-mounted strobe lenses.",
      ref: "NFPA 72-2022 10.4.4"
    },
    {
      id: "2.1.3-02",
      type: "multi",
      q: "You are landing the 120 V branch circuit for a new fire alarm control unit. Which THREE are required?",
      opts: ["The circuit breaker is identified in red","The location of the circuit's disconnecting means is permanently identified at the control unit","The circuit is supplied through a GFCI breaker for personnel protection","The disconnecting means is accessible only to authorized (qualified) personnel","The circuit may also feed one receptacle next to the panel for service tools","The breaker handle is taped in the ON position"],
      a: [0,1,3],
      ex: "The fire alarm branch circuit is dedicated: no other loads, so no convenience receptacle. Its disconnect is marked in red, identified as the fire alarm circuit, accessible only to authorized personnel, and its location is recorded at the control unit. The NEC does not allow it to be supplied through GFCI or AFCI protection, since a nuisance trip would take down the system. A listed breaker lock is permitted. Tape is not a lock.",
      ref: "NFPA 72-2022 10.6.5.1 and 10.6.5.2.5; NEC 2020 760.121(B)"
    },
    {
      id: "2.1.3-03",
      type: "num",
      q: "Spot smoke detectors at 30 ft nominal spacing may be placed so that every point on the ceiling is within 0.7 × 30 = 21 ft of a detector. In a 10 ft wide corridor with detectors on the centerline, the farthest point from a detector is a corner of the area it covers. What is the maximum spacing between detectors, in feet, to the nearest tenth? (Use the Pythagorean theorem.)",
      unit: "ft",
      a: 40.8,
      tol: 0.3,
      ex: "Each detector covers a rectangle that fits inside a 21 ft radius circle. Half the width is 5 ft, so half the length is the square root of (21² − 5²) = square root of 416 = 20.4 ft. Full length: 2 × 20.4 = 40.8 ft. That is where the familiar figure of about 41 ft in a 10 ft corridor comes from. The trap is stopping at 30 ft, which is allowed but wastes detectors.",
      ref: "NFPA 72-2022 17.7.4.2.3.1"
    },
    {
      id: "2.1.3-04",
      type: "num",
      q: "A storage room is 20 ft wide and 150 ft long, with a smooth, level 10 ft ceiling. Using 30 ft spacing between spot smoke detectors and no more than 15 ft from a detector to a wall, what is the minimum number of detectors?",
      unit: "detectors",
      a: 5,
      tol: 0,
      ex: "Across the 20 ft width, one row down the middle is 10 ft from each side wall. Along the length, 150 ÷ 30 = 5 detectors, with the end ones 15 ft from the end walls. The trap is dividing area by 900 sq ft: 3,000 ÷ 900 = 3.3, so 4. Coverage is about distance, not area, and four detectors would leave gaps along a long narrow room.",
      ref: "NFPA 72-2022 17.7.4.2.3.1"
    },
    {
      id: "2.1.3-05",
      type: "mc",
      q: "A room has a peaked ceiling. Where does NFPA 72 put the first row of spot-type smoke detectors?",
      opts: ["Along the low side, at the eaves","Halfway up each slope","Within 36 in. of the peak, measured horizontally","On the wall, 12 in. below the lowest part of the ceiling"],
      a: 2,
      ex: "Smoke rises to the high point, so the first detectors go within 36 in. of the peak, measured horizontally. Any additional rows are then spaced using the horizontal projection of the ceiling, not the distance along the slope. Measuring along the slope is the common mistake and stretches the spacing.",
      ref: "NFPA 72-2022 Ch 17 (smoke detectors, sloping ceilings)"
    },
    {
      id: "2.1.3-06",
      type: "mc",
      q: "A trim-out crew is mounting spot-type detectors on a smooth ceiling, and some will end up close to a side wall. Which statement is correct under NFPA 72-2022?",
      opts: ["Smoke and heat detectors must both be at least 4 in. from the side wall","A ceiling-mounted heat detector must be at least 4 in. from the side wall; there is no such 4 in. rule for a smoke detector","A ceiling-mounted smoke detector must be at least 4 in. from the side wall; there is no such rule for a heat detector","Both types must be at least 12 in. from the side wall"],
      a: 1,
      ex: "Spot-type heat detectors go on the ceiling at least 4 in. from the side wall, or on the side wall between 4 in. and 12 in. below the ceiling. The 4 in. dead-air rule for smoke detectors was removed from NFPA 72 years ago. Smoke detectors may be on the ceiling, or on a side wall with the top of the detector within 12 in. of the ceiling. Many installers still apply the old rule to both types.",
      ref: "NFPA 72-2022 Ch 17 (heat detector location; spot smoke detector location)"
    },
    {
      id: "2.1.3-07",
      type: "mc",
      q: "A duct smoke detector on an air handling unit is connected to the building fire alarm control unit. Unless an alarm signal is specifically required or approved for that building, what signal should it initiate?",
      opts: ["Alarm, with general evacuation","Trouble","No signal at the panel; it only shuts down the fan","Supervisory"],
      a: 3,
      ex: "Duct smoke detectors report as supervisory signals by default. They are there to stop the fan from spreading smoke, and they are prone to dust and airflow problems that would cause unwanted evacuations. They are also not a substitute for area detection. Programming them as alarm points out of habit is the common error.",
      ref: "IBC 2021 907.3.1; NFPA 72-2022 21.7 (HVAC systems)"
    },
    {
      id: "2.1.3-08",
      type: "mc",
      q: "One wall-mounted strobe will cover a 30 ft × 50 ft room. It is mounted at the center of a 50 ft wall. From the wall-mounted table (one light per room: 30 × 30 = 34 cd, 40 × 40 = 60 cd, 50 × 50 = 94 cd, 60 × 60 = 135 cd), what is the minimum candela rating?",
      opts: ["34 cd","60 cd","94 cd","135 cd"],
      a: 2,
      ex: "For a room that is not square, size it as the greater of the distance to the farthest wall, or double the distance to the farthest adjacent wall. The opposite wall is 30 ft away. The side walls are 25 ft away, and 2 × 25 = 50 ft. Use the 50 × 50 row: 94 cd. Picking 34 cd from the 30 ft dimension is the trap. Splitting the room into squares with two strobes is the other permitted approach.",
      ref: "NFPA 72-2022 18.5.5.7 and Table 18.5.5.7.1(a)"
    },
    {
      id: "2.1.3-09",
      type: "mc",
      q: "A stamping plant floor has a measured average ambient sound level of 107 dBA while running. What does NFPA 72 require for notification in that area?",
      opts: ["Horns that produce 122 dBA, which is 15 dB over ambient","Visual notification appliances, because the average ambient is over 105 dBA","Private mode horns at 117 dBA, which is 10 dB over ambient","Nothing, because audible signaling cannot work there"],
      a: 1,
      ex: "An average ambient above 105 dBA requires visual notification appliances. You cannot simply get louder: the total sound level from ambient plus the appliances may not exceed 110 dBA at the minimum hearing distance, and 107 + 15 = 122 dBA would blow past that. Doing the 15 dB math without checking the 110 dBA cap is the trap.",
      ref: "NFPA 72-2022 18.4.1 (general audible requirements); IBC 2021 907.5.2.1.2"
    },
    {
      id: "2.1.3-10",
      type: "mc",
      q: "A wall-mounted strobe is being installed in a hotel guest room to wake a sleeping guest. The top of the lens will be 18 in. below the ceiling. What is the minimum intensity?",
      opts: ["15 cd","75 cd","110 cd","177 cd"],
      a: 3,
      ex: "In sleeping areas, the strobe needs 110 cd if the top of the lens is 24 in. or more below the ceiling, and 177 cd if it is closer than 24 in. A lens near the ceiling may sit in the smoke layer, so it has to be brighter. At 18 in., use 177 cd. Also keep the appliance within 16 ft of the pillow. Picking 110 cd without measuring the distance to the ceiling is the trap.",
      ref: "NFPA 72-2022 18.5.5.10"
    },
    {
      id: "2.1.3-11",
      type: "mc",
      q: "A conventional control unit has zones of 2-wire smoke detectors. Several detectors need replacing, and the supply house offers a different manufacturer's 2-wire detector at half the price. What must you confirm before installing it?",
      opts: ["That the detector is listed as compatible with that control unit, and how many are allowed on the circuit","Only that the detector is rated for 24 V dc","Only that the detector fits the existing base","Nothing, because any UL listed 2-wire detector works on any listed panel"],
      a: 0,
      ex: "Devices that take their power from an initiating device circuit or signaling line circuit must be listed for use with that control unit. A 2-wire detector draws standby current and signals alarm on the same pair, so the panel and detector have to be tested together. Check the panel's compatibility document for the model and the maximum quantity per zone. Matching voltage alone is the trap.",
      ref: "NFPA 72-2022 10.3 (equipment); NEC 2020 110.3(B)"
    },
    {
      id: "2.1.3-12",
      type: "multi",
      q: "A NAC booster power supply is being installed in an electrical closet that is not continuously occupied. Which TWO statements are correct?",
      opts: ["A smoke detector is required at the booster's location (a heat detector if conditions rule out smoke detection)","The booster may share a branch circuit with the closet lighting","The booster does not need batteries, because the main panel has them","Where more than two strobes are in the same field of view, they must flash in sync even if some are fed by the booster and some by the panel","The booster's trouble conditions only need to show on its own LEDs"],
      a: [0,3],
      ex: "Where the area is not continuously occupied, detection is required at each control unit, NAC power extender and supervising station transmitter, so a fire there is caught before it disables the equipment. When more than two strobes are in one field of view they must be synchronized, no matter which supply feeds them, so plan the sync wiring between supplies. The booster also needs its own dedicated circuit and secondary power, and its troubles must report to the control unit.",
      ref: "NFPA 72-2022 10.4.5 and 18.5.5.7"
    },
    {
      id: "2.1.3-13",
      type: "mc",
      q: "A NAC booster power supply is listed for 6.0 A of total alarm current, and each of its four outputs is rated 2.5 A. The drawings load the outputs at 2.2 A, 2.0 A, 1.4 A and 1.1 A. What do you report before installing it?",
      opts: ["It is acceptable, because no single output is over 2.5 A","It is overloaded: the outputs add up to 6.7 A, which is more than the 6.0 A the supply can deliver","It is acceptable, because four outputs at 2.5 A give 10 A of capacity","It is overloaded only on battery, so it is acceptable as long as AC power is present"],
      a: 1,
      ex: "Two limits apply at the same time: each output's rating and the supply's total rating. 2.2 + 2.0 + 1.4 + 1.1 = 6.7 A, which is over the 6.0 A total even though every output is under 2.5 A. Adding up the output ratings to get 10 A is the trap, because the outputs share one power supply. Move appliances to another supply or add one, and have the battery and voltage drop calculations revised.",
      ref: "Field practice (power supply loading); NEC 2020 110.3(B)"
    },
    {
      id: "2.1.3-14",
      type: "mc",
      q: "One ceiling-mounted strobe will cover a 30 ft × 30 ft room with a 10 ft ceiling. A light fixture forces it off center: it ends up 10 ft from one wall and centered the other way. From the ceiling-mounted table for a lens height up to 10 ft (20 × 20 = 15 cd, 30 × 30 = 30 cd, 40 × 40 = 60 cd, 44 × 44 = 75 cd), what is the minimum candela rating?",
      opts: ["15 cd","30 cd","60 cd","75 cd"],
      a: 2,
      ex: "The ceiling table assumes the strobe is at the center of the room. When it is not, the room size is twice the distance from the strobe to the farthest wall. The farthest wall is 30 − 10 = 20 ft away, and 2 × 20 = 40 ft, so use the 40 × 40 row: 60 cd. Reading 30 cd from the real room size is the trap. Moving a strobe off center can raise the candela setting and the NAC current.",
      ref: "NFPA 72-2022 18.5.5.7 and Table 18.5.5.7.1(b)"
    },
    {
      id: "2.1.3-15",
      type: "num",
      q: "A corridor is 10 ft wide and 180 ft long. A pair of cross-corridor fire doors divides it 60 ft from one end. Using the corridor method (15 cd strobes, one within 15 ft of each end of a corridor, and no more than 100 ft between strobes), what is the fewest strobes allowed?",
      unit: "strobes",
      a: 4,
      tol: 0,
      ex: "A fire door interrupts the viewing path, so each side is its own corridor. The 60 ft piece needs a strobe within 15 ft of each end, and one strobe cannot be within 15 ft of both, so 2. The 120 ft piece has strobes 15 ft from each end, 90 ft apart, so 2. Total 4. Treating it as one 180 ft corridor gives 3, and leaves one side of the doors without a strobe near its end.",
      ref: "NFPA 72-2022 18.5.5.8.5; NFPA 72-2022 18.5.5.8 (corridor spacing)"
    },
    {
      id: "2.1.3-16",
      type: "mc",
      q: "A gymnasium has a flat ceiling 36 ft above the floor. The drawings show ceiling-mounted strobes fixed directly to that ceiling. The ceiling-mounted room spacing table stops at a lens height of 30 ft. What does NFPA 72 allow here?",
      opts: ["Suspend the strobes so the lens is at or below 30 ft, or use wall-mounted strobes sized from the wall table (a performance-based design is the third route)","Mount them at 36 ft and use the largest candela value in the 30 ft rows","Mount them at 36 ft and double the candela from the 30 ft rows","Leave strobes out of the room because the table does not cover it, and rely on the horns"],
      a: 0,
      ex: "The ceiling table only goes to a lens height of 30 ft. Where the ceiling is higher, the Code gives three choices: hang the ceiling appliances at or below 30 ft, use the performance-based alternative, or use wall-mounted appliances from the wall table. Picking a bigger candela at 36 ft is the trap: no row of the table covers that height, so no candela value is proven to light the floor. Send it back to the designer before you rough in.",
      ref: "NFPA 72-2022 18.5.5.7.6; NFPA 72-2022 Table 18.5.5.7.1(b)"
    },
    {
      id: "2.1.3-17",
      type: "mc",
      q: "The main entrance of a store is a bank of exit doors that forms one grouped opening 46 ft wide. Where do the manual fire alarm boxes go at this entrance?",
      opts: ["One box, within 5 ft of either side of the opening","One box, on the mullion at the center of the opening","One box for every 20 ft of opening width","A box on each side of the grouped opening, each within 5 ft of its side"],
      a: 3,
      ex: "A manual box is normally within 5 ft of each exit doorway. Where doors are grouped into an opening more than 40 ft wide, a box is required on both sides of the opening, each within 5 ft of that side. At 46 ft, one box on one side is the trap: a person leaving by the far doors would have to cross the crowd to reach it. Mount the operable part 42 in. to 48 in. above the floor.",
      ref: "NFPA 72-2022 17.15 (manual fire alarm boxes)"
    },
    {
      id: "2.1.3-18",
      type: "mc",
      q: "Spot-type heat detectors are going on a level 9 ft ceiling. Solid beams project 20 in. below the ceiling and are spaced 10 ft on center. How does NFPA 72 treat this ceiling for heat detector layout?",
      opts: ["As a smooth ceiling, with the detectors on the bottoms of the beams","Each bay formed by the beams is treated as a separate area, so every bay gets its own detection","Spacing across the beams is cut to two-thirds of the listed spacing, and a detector may cover several bays","Spacing across the beams is cut to half of the listed spacing, the same as for solid joists"],
      a: 1,
      ex: "For heat detectors, beams that project 4 in. or less are ignored (smooth ceiling). Over 4 in., the spacing at right angles to the beams drops to two-thirds of the listed spacing. Where beams project more than 18 in. and are more than 8 ft on center, each bay is a separate area and needs its own detector. Here the beams are 20 in. deep at 10 ft, so every bay is protected. Two-thirds spacing is the trap: it fits shallower or closer beams. Half spacing is the solid joist rule.",
      ref: "NFPA 72-2022 Ch 17 (heat detectors, beam construction)"
    },
    {
      id: "2.1.3-19",
      type: "num",
      q: "Heat detectors listed for 50 ft spacing are going on a level, 9 ft high ceiling with solid joists. The room is 50 ft × 100 ft and the joists run parallel to the 100 ft walls. Measured at right angles to solid joists, the spacing may not be more than half the listed spacing. Keeping detectors within half the applicable spacing of each wall, what is the minimum number of detectors?",
      unit: "detectors",
      a: 4,
      tol: 0,
      ex: "Across the joists (the 50 ft width) the spacing is cut to 25 ft, so two rows, 12.5 ft from each side wall. Along the joists (the 100 ft length) the full 50 ft applies, so two detectors per row, 25 ft from the end walls. 2 × 2 = 4. Using 50 ft both ways gives 2, which is the trap. Joists slow the heat moving across them, so the Code closes up the spacing in that direction only.",
      ref: "NFPA 72-2022 Ch 17 (heat detectors, solid joist construction)"
    },
    {
      id: "2.1.3-20",
      type: "mc",
      q: "Another code requires smoke detection in the supply air of a 4,000 cfm air handling unit. Where does NFPA 72 put the duct smoke detector?",
      opts: ["In the supply duct, downstream of both the fan and the filters","At the outside air intake, upstream of the filters","In the return duct only, because supply air is clean","On the mechanical room ceiling, within 5 ft of the unit"],
      a: 0,
      ex: "A supply air detector goes in the supply duct downstream of both the fan and the filters, and it must be listed for the air velocity in the duct. In that position it sees smoke from a filter or fan motor fire as well as smoke drawn in from outside. A detector ahead of the filters would miss a filter fire. A room detector near the unit is area detection, and does not sample the air in the duct.",
      ref: "NFPA 72-2022 17.7.6.4.2.1"
    },
    {
      id: "2.1.3-21",
      type: "mc",
      q: "A duct smoke detector is installed above a hard ceiling, 14 ft above the floor, where its LED cannot be seen. The conventional control unit reports it only as \"Zone 6 Duct Detectors\", along with three others. What is required?",
      opts: ["Nothing more, because the zone reports at the control unit","Relocate the detector into the occupied room below the duct","A remote alarm or supervisory indicator in an accessible location, labeled with the detector's function and the air handler it serves","A red dot on the ceiling below the detector"],
      a: 2,
      ex: "A detector concealed more than 10 ft above the floor, or where its indicator cannot be seen, needs remote indication at an accessible spot, and the indicator is labeled with the device's function and the equipment it serves. The Code lets you skip the remote indicator only when the control unit identifies that specific detector and the drawings show its location and function, as an addressable point does. A shared zone label does not do that.",
      ref: "NFPA 72-2022 Ch 17 (remote indication for concealed detectors)"
    },
    {
      id: "2.1.3-22",
      type: "mc",
      q: "Ceiling-mounted smoke detectors will release a pair of smoke doors that are held open by magnets. On the corridor side, the wall section above the doorway (door head to ceiling) is 36 in. deep. On the lobby side it is 12 in. deep. What does the doorway need?",
      opts: ["One detector, on either side of the doorway","Two detectors, one on each side of the doorway","One detector, on the lobby side, where the wall section is shallower","One detector, on the corridor side, where the wall section is deeper"],
      a: 3,
      ex: "The depth of the wall above the door decides it. At 24 in. or less on both sides, one ceiling detector on either side is enough. Over 24 in. on both sides, one is needed on each side. Over 24 in. on one side only, as here, one ceiling detector goes on that deeper (higher ceiling) side, because the deep header holds smoke back on that side. Either side is the trap: a detector on the shallow side would not see corridor smoke in time. It goes on the doorway centerline, no more than 5 ft from the door.",
      ref: "NFPA 72-2022 17.7.6.6"
    },
    {
      id: "2.1.3-23",
      type: "mc",
      q: "An elevator lobby has four cars in a row. The drawings show one lobby smoke detector for Phase I recall, and it scales 26 ft from the centerline of the farthest elevator door. The ceiling is smooth and 9 ft high. What is the correct response?",
      opts: ["Install as drawn, because 30 ft spacing covers the whole lobby","Add or move detectors so one is within 21 ft of the centerline of every elevator door","Replace it with a heat detector at each elevator door","Move the detector into the hoistway, where the smoke will collect"],
      a: 1,
      ex: "A lobby detector used for recall must be on the ceiling within 21 ft of the centerline of each elevator door in the bank it controls. At 26 ft the far door is not covered. The trap is using the 30 ft nominal spacing for area smoke detection, which is a different rule. Since this adds or moves a device, send it back to the designer and mark the as-built.",
      ref: "NFPA 72-2022 21.3.5"
    },
    {
      id: "2.1.3-24",
      type: "multi",
      q: "An elevator machine room is sprinklered, so elevator power must be shut down before water flows. Heat detectors will actuate the shunt trip. Which TWO statements are correct?",
      opts: ["A heat detector is placed within 24 in. of each sprinkler","One heat detector at the center of the room is enough if the room is inside its listed spacing","The heat detectors have a lower temperature rating and a higher sensitivity than the sprinklers","The heat detectors have the same temperature rating as the sprinklers, so both operate together","The lobby smoke detectors used for recall may also trip the power"],
      a: [0,2],
      ex: "The aim is to remove power before water reaches live elevator equipment. So each sprinkler gets a heat detector within 24 in., and the detector must have both a lower temperature rating and a higher sensitivity than the sprinkler, so it always operates first. Spacing one detector for the room is the trap: it could lag a sprinkler at the far side. Recall and power shutdown are separate functions with separate initiating devices.",
      ref: "NFPA 72-2022 21.4 (elevator power shutdown)"
    },
    {
      id: "2.1.3-25",
      type: "num",
      q: "A conventional (non-addressable) control unit will monitor 8 waterflow switches and 26 valve supervisory switches. One initiating device circuit may carry no more than 5 waterflow devices, or no more than 20 supervisory devices. This panel keeps alarm and supervisory devices on separate circuits. What is the minimum number of initiating device circuits?",
      unit: "circuits",
      a: 4,
      tol: 0,
      ex: "Waterflow: 8 ÷ 5 = 1.6, so 2 circuits. Supervisory: 26 ÷ 20 = 1.3, so 2 circuits. 2 + 2 = 4. The limits keep one fault from taking out too many sprinkler signals, and keep the zone small enough to find the device. Putting all 8 flow switches on one zone is the common mistake. These limits are for conventional circuits. On an addressable loop each device has its own address.",
      ref: "NFPA 72-2022 23.8.5 (waterflow and supervisory devices on one circuit)"
    },
    {
      id: "2.1.3-26",
      type: "multi",
      q: "Spot-type smoke detectors with a standard listing are shown at these locations. Which TWO are outside the limits NFPA 72 sets, unless the detector is specifically listed for the condition?",
      opts: ["An unheated loading dock that drops to 20 °F in winter","A storeroom at 85 °F and 60 percent relative humidity","A ceiling plenum where the air moves at 500 ft/min","An office with a 9 ft ceiling","A corridor kept at 40 °F"],
      a: [0,2],
      ex: "Unless listed for it, a smoke detector is not installed where the temperature is below 32 °F or above 100 °F, the relative humidity is above 93 percent, or the air velocity is over 300 ft/min. The loading dock is too cold and the plenum air is too fast. A 40 °F corridor is cold but inside the limits. Report these to the designer: the fix is a detector listed for the condition or a different type of detection.",
      ref: "NFPA 72-2022 Ch 17 (smoke detector environmental limits)"
    },
    {
      id: "2.1.3-28",
      type: "multi",
      q: "The standby batteries for a large control unit are going in a separate battery cabinet in the next room. Which TWO are required?",
      opts: ["Each battery is permanently marked with its month and year of manufacture","Each battery is marked with the installation date only","The location of the batteries is permanently identified at the control unit","Batteries may never be located outside the control unit cabinet","The battery cabinet is painted red"],
      a: [0,2],
      ex: "Batteries are marked with the month and year they were made, because age is counted from manufacture. If the maker's date code is not in that form, the installer works it out and marks the battery. The installation date alone is the trap: a battery can sit on a shelf for a year first. When batteries are not in or next to the control unit, their location is identified at the control unit so the next technician can find them.",
      ref: "NFPA 72-2022 10.6.10 (storage batteries)"
    },
    {
      id: "2.1.3-29",
      type: "mc",
      q: "One Class B signaling line circuit leaves the control unit and runs device to device through all four floors of a building. There are no isolator modules. What is the problem under NFPA 72-2022?",
      opts: ["There is none, because Class B is a permitted class for an SLC","An SLC may not leave the floor where the control unit is located","A single fault could take out devices on more than one floor, and each floor counts as a zone","Every SLC must be wired Class X"],
      a: 2,
      ex: "A single fault on a pathway connected to addressable devices may not cause the loss of devices in more than one zone, and each floor is a separate zone. One short on this circuit would take down all four floors, and one open would drop every floor past the break. Class B is not banned, which makes the first choice tempting, but the circuit has to be arranged so a fault stays on one floor. Typical fixes are a separate circuit per floor, or a Class A or Class X riser with isolators so each floor is its own section.",
      ref: "NFPA 72-2022 23.6.1"
    },
    {
      id: "2.1.3-30",
      type: "mc",
      q: "A school gymnasium gets spot-type heat detectors on the ceiling, and they need guards because of ball impact. The general contractor offers generic wire cages left over from the light fixtures. What does NFPA 72 require?",
      opts: ["Any sturdy guard is acceptable, as long as the detector can still be seen","Guards are not allowed on detectors, so the detectors must be moved out of reach","No protection is needed, because a heat detector has no moving parts","The detectors must be protected, and the guard must be one that is listed for use with that detector"],
      a: 3,
      ex: "An initiating device that is subject to mechanical damage must be protected. A guard over a smoke, heat or radiant energy detector must be listed for use with that detector, because a cage changes how heat and smoke reach the sensing element. A listed guard has been tested with the detector, and its instructions state any change in spacing or response. A generic cage is the trap: it protects the device but nobody knows what it does to detection. Guards over horns and strobes follow the same idea in Chapter 18.",
      ref: "NFPA 72-2022 Ch 17 (mechanical protection of initiating devices)"
    }
  ],
  "2.1.4": [
    {
      id: "2.1.4-01",
      type: "mc",
      q: "A new system with 400 initiating devices is ready for its initial acceptance test. How many of the initiating devices must be tested?",
      opts: ["10 percent, to a maximum of 50 devices","One device on each circuit","A sample chosen by the AHJ","All 400"],
      a: 3,
      ex: "All new systems are inspected and tested in accordance with Chapter 14, which means every device, appliance and function. The 10 percent with a 50 device maximum is the tempting answer, but that sample applies only to devices not directly affected by a later site-specific software change. Acceptance is the one time everything is proven against the approved drawings.",
      ref: "NFPA 72-2022 14.4.1"
    },
    {
      id: "2.1.4-02",
      type: "mc",
      q: "During a tenant remodel, one smoke detector is permanently removed from an existing addressable loop. What reacceptance test does NFPA 72 call for?",
      opts: ["None, because nothing was added","Operate another device on that circuit","Retest every device in the building","Test 10 percent of the devices on that floor"],
      a: 1,
      ex: "When a device, appliance or control relay is deleted, another device, appliance or control relay on the circuit is operated to prove the circuit still works. When one is added, the added item itself is functionally tested. Skipping the test because something was only removed is the trap: pulling a device is a common way to leave an open or a bad splice.",
      ref: "NFPA 72-2022 14.4.2"
    },
    {
      id: "2.1.4-03",
      type: "num",
      q: "A site-specific software change directly affects 12 initiating devices in a system with 412 initiating devices. The 12 affected devices are tested 100 percent. How many of the devices that were <b>not</b> directly affected must also be tested?",
      unit: "devices",
      a: 40,
      tol: 0,
      ex: "Unaffected devices: 412 − 12 = 400. The rule is 10 percent of those, to a maximum of 50: 0.10 × 400 = 40. So 12 + 40 = 52 devices are tested in all. The extra sample is there to catch unintended side effects of the program change. A revised record of completion is also required.",
      ref: "NFPA 72-2022 14.4.2.4"
    },
    {
      id: "2.1.4-04",
      type: "num",
      q: "A site-specific software change directly affects 12 initiating devices in a campus system with 912 initiating devices. What is the minimum total number of initiating devices that must be tested for reacceptance?",
      unit: "devices",
      a: 62,
      tol: 0,
      ex: "The 12 affected devices are tested 100 percent. Unaffected: 912 − 12 = 900, and 10 percent is 90, but the sample is capped at 50 devices. 12 + 50 = 62. Forgetting the 50 device cap gives 102, and forgetting the affected devices gives 50.",
      ref: "NFPA 72-2022 14.4.2.4"
    },
    {
      id: "2.1.4-05",
      type: "mc",
      q: "Acceptance testing will involve elevator recall, smoke control fans and a sprinkler system, with several contractors on site. Which document sets out in writing what will be tested and how, before testing starts?",
      opts: ["The test plan","The record of completion","The battery calculation","The owner's manual"],
      a: 0,
      ex: "A written test plan clearly establishes the scope of testing, including which interfaced systems and emergency control functions will be operated and to what extent. The record of completion comes after: it documents what was installed and tested. Agreeing on the test plan first avoids arguments on test day about who operates what.",
      ref: "NFPA 72-2022 14.2.10"
    },
    {
      id: "2.1.4-06",
      type: "mc",
      q: "Two years after acceptance, a build-out adds a NAC power supply and 30 devices to the system. What happens to the record of completion?",
      opts: ["Nothing, because it documents only the original installation","It is replaced by the inspection and testing form for that year","It is revised to show the changes, with the revision date","A note is written inside the control unit door"],
      a: 2,
      ex: "Modifications made after the original installation are recorded on a revised version of the original completion documents, including the revision date. The record of inspection and testing is a different form, used for periodic testing. Leaving the original record untouched is the common failure, and the next technician then cannot trust the paperwork.",
      ref: "NFPA 72-2022 7.5.6.6"
    },
    {
      id: "2.1.4-07",
      type: "multi",
      q: "Which THREE items are part of the completion documentation turned over at the end of a new software-based fire alarm installation?",
      opts: ["Record (as-built) drawings","The installer's labor and material cost records","The record of completion","A copy of the site-specific software","The manufacturer's price list","Certification cards for every installer on the job"],
      a: [0,2,3],
      ex: "Completion documentation includes the record of completion, record drawings, the owner's manual and manufacturer's instructions, and a copy of the site-specific software for software-based systems. The software copy is the one most often missed, and without it the owner is stuck if the panel fails or the service company changes. Cost records and price lists are the contractor's business, not system records.",
      ref: "NFPA 72-2022 7.5 (completion documentation), 7.5.5, 7.5.6, 7.5.7"
    },
    {
      id: "2.1.4-08",
      type: "mc",
      q: "After the acceptance test you have the as-built drawings, the record of completion and the manuals to leave on site for a new system. Where do they go?",
      opts: ["Folded inside the control unit cabinet","In a documentation cabinet at the control unit or other approved location","In the service company's office only","With the general contractor's closeout binder only"],
      a: 1,
      ex: "Every new system gets a documentation cabinet at the system control unit or another approved location, and the system records are kept there. Paper stuffed inside the control unit is the habit to break: records are not to be stored in the control unit, where they crowd the wiring and get damaged. If the cabinet is not at the panel, its location is identified at the panel.",
      ref: "NFPA 72-2022 7.7.2"
    },
    {
      id: "2.1.4-09",
      type: "mc",
      q: "During acceptance, every initiating device and notification appliance tests correctly. The elevator contractor did not show up, so elevator recall was not operated. The general contractor asks you to sign off anyway. What is the right answer?",
      opts: ["Sign off, since everything on the fire alarm side passed","Sign off after checking with a meter that the recall relays transfer","Do not call acceptance complete; reschedule and test recall by operating the initiating devices that trigger it","Sign off, since recall is the elevator contractor's responsibility"],
      a: 2,
      ex: "Emergency control functions such as elevator recall, fan shutdown and door release are tested by operating or simulating the alarm signals that trigger them, and the sequence of operations has to be proven end to end at acceptance. Watching a relay transfer shows only that the fire alarm output works, not that the elevator responds. Record it as an open item and finish it with the elevator contractor present.",
      ref: "NFPA 72-2022 14.4.1 and Table 14.4.3.2(24)"
    },
    {
      id: "2.1.4-10",
      type: "mc",
      q: "You are verifying signals to the supervising station at acceptance. From the start of an alarm at the protected premises until it is displayed at the supervising station, what is the maximum time allowed?",
      opts: ["90 seconds","10 seconds","200 seconds","60 minutes"],
      a: 0,
      ex: "The alarm signal must be displayed at the supervising station within 90 seconds. The other numbers are real but belong elsewhere: 10 seconds is for actuating notification at the premises after an initiating device operates, 200 seconds is for indicating a trouble, and 60 minutes is the supervision interval for a single communications path. Call the station, confirm receipt of alarm, supervisory and trouble signals, and record it.",
      ref: "NFPA 72-2022 Ch 26 (communications methods, transmission time)"
    },
    {
      id: "2.1.4-11",
      type: "mc",
      q: "How are strobes (visual notification appliances) tested at acceptance?",
      opts: ["Measure each one's output with a light meter","Confirm that at least one strobe flashes on each circuit","Measure the flash rate of each one with a stopwatch","Verify the locations and candela settings match the approved drawings, and confirm each one flashes"],
      a: 3,
      ex: "The test is a comparison with the approved layout: appliance locations, no floor plan changes that affect coverage, and the candela marking or setting on each appliance, plus confirming that each one flashes. No light meter is used. A wrong candela setting on a selectable strobe is the most common finding, and it also changes the NAC current draw.",
      ref: "NFPA 72-2022 Table 14.4.3.2(22)"
    },
    {
      id: "2.1.4-12",
      type: "multi",
      q: "Which TWO notifications does NFPA 72 require around system testing?",
      opts: ["Before testing, notify the building occupants and everyone who receives alarm, supervisory or trouble signals","Notify the supervising station only if the AHJ will witness the test","When testing is finished, notify the same parties that testing has concluded","Notify the panel manufacturer before any test","No notice is needed if the notification appliances are disabled first"],
      a: [0,2],
      ex: "Before any testing, everyone who would receive a signal is notified so nobody responds to a false alarm: occupants, the supervising station, and the fire department where it receives signals. When testing ends, they are told again, so real signals are treated as real. Forgetting the second call is the dangerous one, because a station left on test will ignore a real fire.",
      ref: "NFPA 72-2022 Ch 14 (notification before and after testing)"
    },
    {
      id: "2.1.4-13",
      type: "mc",
      q: "At acceptance you test the secondary power supply of an in-building fire emergency voice/alarm communications system. You disconnect primary power and confirm the trouble signal. For how long must the system then be operated in alarm on the batteries?",
      opts: ["At least 5 minutes","24 hours, the full standby period","At least 15 minutes","At least 2 hours"],
      a: 2,
      ex: "The secondary power test is: disconnect all primary power, verify the loss-of-power trouble, measure or verify the standby and alarm current, confirm the battery's rated capacity exceeds the demand with the safety margin, then operate the system in alarm. A general alarm (horn and strobe) system runs for at least 5 minutes. An emergency voice system runs for at least 15 minutes, because voice messages go on through a staged evacuation. Using 5 minutes on a voice system is the trap. The 24 hours is the standby period in the calculation, and is not the length of this test.",
      ref: "NFPA 72-2022 Table 14.4.3.2(8)"
    },
    {
      id: "2.1.4-14",
      type: "num",
      q: "The approved battery calculation used 0.50 A standby and 2.4 A alarm, and 18 Ah batteries were installed. At acceptance you measure 0.62 A in standby. Alarm current is 2.4 A as calculated. With 24 hours of standby, 5 minutes of alarm and the NFPA 72-2022 factor of 1.25, what battery capacity is required now, in Ah?",
      unit: "Ah",
      a: 18.85,
      tol: 0.1,
      ex: "Standby: 0.62 A × 24 h = 14.88 Ah. Alarm: 2.4 A × (5 ÷ 60) h = 0.20 Ah. Sum 15.08 Ah × 1.25 = 18.85 Ah. The installed 18 Ah set passed on paper (15.25 Ah) but fails with the measured load. This is why the acceptance test compares the system's real current with the calculation. Find out what is drawing the extra 0.12 A, then correct the load or install the next battery size up and check the charger can handle it.",
      ref: "NFPA 72-2022 10.6.7.2.14; NFPA 72-2022 Table 14.4.3.2(8)"
    },
    {
      id: "2.1.4-15",
      type: "num",
      q: "To prove circuit integrity at acceptance, one connection is opened at not less than 10 percent of the devices on every circuit, and the trouble indication is confirmed each time. A signaling line circuit has 64 devices. At how many of them, at least, must a connection be opened?",
      unit: "devices",
      a: 7,
      tol: 0,
      ex: "10 percent of 64 is 6.4. \"Not less than\" 10 percent means you round up, so 7. Six devices would be 9.4 percent, which is short. This is done on every initiating device circuit, NAC and SLC, and it is separate from the functional test of all the devices. Spread the opens along the circuit, including the far end, and confirm the circuit behaves the way its class says it should.",
      ref: "NFPA 72-2022 Table 14.4.3.2(15)"
    },
    {
      id: "2.1.4-16",
      type: "mc",
      q: "An air-sampling (aspirating) smoke detector protects a data hall through three sampling pipe runs. At acceptance, where is the test smoke introduced to prove the alarm response?",
      opts: ["At the end (farthest) sampling port of each pipe run, with airflow verified through all the other ports","At the detector's own test point at the unit, once","At the first sampling port nearest the detector, on any one pipe run","Nowhere: a normal airflow reading on the display is the test"],
      a: 0,
      ex: "For an air-sampling detector, the alarm response is verified through the end sampling port on each pipe run, by the manufacturer's method, and airflow is verified through all the other ports. Smoke from the farthest port has the longest trip, so it proves the whole pipe is intact and clear, and it gives the worst-case transport time. Smoke at the unit is the trap: it proves the detector and none of the pipework. Record the transport time for each run as the baseline.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "2.1.4-17",
      type: "mc",
      q: "A freezer warehouse is protected by fixed-temperature, nonrestorable line-type heat detection (heat-sensing cable). How is it tested at acceptance?",
      opts: ["Heat the last foot of each run with a heat gun","Heat a short sample length while it is connected to the circuit","It gets a visual inspection only, with no testing","No heat test: test it mechanically and electrically, and measure and record the loop resistance"],
      a: 3,
      ex: "Heat destroys a nonrestorable detector, so it is never heat tested in place. Its function is tested mechanically and electrically, and the loop resistance is measured and recorded. That acceptance reading is the baseline: later tests compare against it and any change gets investigated. Heating \"just the end\" is the trap, because that section then has to be cut out and spliced.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "2.1.4-18",
      type: "mc",
      q: "A duct smoke detector with sampling tubes goes into alarm when you spray listed aerosol into its housing with the cover open. What else must the acceptance test of this detector show?",
      opts: ["Nothing more, because the alarm response is proven","That the sampling tubes really move duct air through the detector, using the manufacturer's method","That the detector also alarms with the fan switched off","That its sensitivity is set to the highest setting"],
      a: 1,
      ex: "Besides the normal smoke entry test, a duct detector with sampling tubes is tested to make sure it samples the airstream, by a method the manufacturer accepts. That is usually a differential pressure reading across the inlet and exhaust tubes with the fan running. A detector with a tube installed backwards, or with the end plug missing, alarms with aerosol at the housing and never sees duct smoke. Also run the fan shutdown it controls.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "2.1.4-19",
      type: "mc",
      q: "At acceptance you close an outside stem and yoke sprinkler control valve to test its supervisory switch. The supervisory signal comes in on the second turn of the handwheel. You keep closing, and about halfway through the valve's travel the signal restores to normal by itself. What is the result?",
      opts: ["It passes, because the signal came in within the first two revolutions","It fails: the switch must not reset anywhere in the valve's travel except the normal position, so it is adjusted or replaced and retested","It passes, as long as the signal comes back again when the valve is fully closed","It fails: the signal should not come in until the valve is at least one-fifth closed"],
      a: 1,
      ex: "The test has two parts. The signal must arrive within the first two revolutions of the handwheel or one-fifth of the travel, and it did. Then the valve is run through its full travel to prove the switch does not reset part way. This one resets at half travel, so a half-closed valve would look normal at the panel. That fails. Stopping the test at the first signal is the trap. Have the switch adjusted or replaced, then repeat the whole test.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17); NFPA 72-2022 17.17 (supervisory signal-initiating devices)"
    },
    {
      id: "2.1.4-20",
      type: "mc",
      q: "You open the inspector's test connection on a wet-pipe sprinkler system. The fire alarm control unit shows the waterflow alarm 105 seconds after the flow starts. What is the result?",
      opts: ["It fails: the alarm must come in within 90 seconds of flow, so the retard is adjusted and the test repeated with water","It passes, because up to 2 minutes is allowed","It passes, because anything under 200 seconds is allowed","It fails: waterflow must report within 10 seconds, so the retard has to be removed"],
      a: 0,
      ex: "A waterflow device must initiate an alarm within 90 seconds of a flow equal to or greater than the smallest sprinkler orifice on the system, which is what the inspector's test connection gives. 105 seconds fails. The retard exists to ride through pressure surges, so removing it invites false alarms. The 200 seconds belongs to trouble signals and the 10 seconds to actuating notification appliances. Time it with a watch and write the time down.",
      ref: "NFPA 72-2022 17.13 (waterflow alarm-initiating devices); NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "2.1.4-21",
      type: "mc",
      q: "The design assumed an average ambient of 50 dBA in an open office, so the drawings call for 65 dBA. At acceptance the occupied office measures 58 dBA average ambient, with no louder sound lasting 60 seconds. The horns measure 70 dBA at 5 ft above the floor. Does this area pass for public mode?",
      opts: ["Yes, because 70 dBA is above the 65 dBA design value","Yes, because 70 dBA is more than 10 dB above the ambient","No: it needs 15 dB above the actual average ambient, which is 73 dBA","No: public mode needs 75 dBA everywhere"],
      a: 2,
      ex: "Public mode needs 15 dB above the average ambient, or 5 dB above the maximum lasting at least 60 seconds, whichever is greater. 58 + 15 = 73 dBA, and 70 dBA is 3 dB short. Passing it against the design figure is the trap: acceptance measures the real building with a sound level meter. The 10 dB figure is private mode, and 75 dBA is the sleeping area minimum. Report it so the designer can add or change appliances.",
      ref: "NFPA 72-2022 18.4.4.1; NFPA 72-2022 Table 14.4.3.2(22)"
    },
    {
      id: "2.1.4-22",
      type: "num",
      q: "A system uses positive alarm sequence. During the acceptance test a smoke detector alarms, staff acknowledge at the control unit 10 seconds later, and nobody resets the system. No other device operates. At the latest, how many seconds after the detector alarmed must the evacuation signals actuate automatically?",
      unit: "s",
      a: 190,
      tol: 0,
      ex: "The signal must be acknowledged within 15 seconds, and it was, at 10 seconds. That starts an investigation phase of up to 180 seconds. With no reset, the notification signals actuate when it ends: 10 + 180 = 190 seconds. 195 is the worst case if staff acknowledge at the last instant, and 180 forgets the time before the acknowledgment. Also prove the other branches: no acknowledgment within 15 seconds, and a second detector during the investigation, both go straight to alarm.",
      ref: "NFPA 72-2022 23.8.1.2.1.1"
    },
    {
      id: "2.1.4-23",
      type: "mc",
      q: "Alarm verification is enabled on the smoke detectors of a new system. Which acceptance test result shows the feature is working correctly?",
      opts: ["A detector held in smoke takes up to 3 minutes to cause a system alarm","A detector held in smoke causes the system alarm within 1 minute, and a manual pull station causes it with no added delay","A manual pull station is delayed by the same time as the smoke detectors","The system alarms only when two different detectors are in alarm"],
      a: 1,
      ex: "Alarm verification may not delay the system functions by more than 1 minute for a smoke detector that stays in smoke above its alarm threshold. Any other initiating device, such as a pull station or waterflow switch, must act with no added delay. Needing two detectors is cross-zoning, a different feature. At acceptance, time one detector on each verified circuit and pull a station to prove it is not held up.",
      ref: "NFPA 72-2022 23.8.5.4.1; NFPA 72-2022 Table 14.4.3.2(26)"
    },
    {
      id: "2.1.4-24",
      type: "mc",
      q: "A Class A notification appliance circuit serves 12 horn-strobes. For the circuit integrity test you open one conductor between appliances 6 and 7, wait, and then put the system into alarm. Which result is a pass?",
      opts: ["A trouble signal at the control unit, with appliances 1 to 6 operating and 7 to 12 silent until the wire is restored","No trouble signal, because the circuit has a return path, and all 12 appliances operate","The control unit goes into alarm as soon as the conductor is opened","A trouble signal at the control unit, and all 12 appliances still operate"],
      a: 3,
      ex: "The integrity test confirms two things: the fault gives a trouble indication, and the circuit then performs the way its class says. A Class A pathway has a redundant path, so it keeps working past a single open and still reports the open as a trouble. Losing appliances 7 to 12 is what a Class B circuit does, and on a Class A circuit it means the return leg is not landed or not working. No trouble at all is also a fail, because the open has to be reported.",
      ref: "NFPA 72-2022 Table 14.4.3.2(15); NFPA 72-2022 12.3 (pathway class designations, Class A)"
    },
    {
      id: "2.1.4-25",
      type: "mc",
      q: "An electrical contractor installed the conduit, wire and devices. A fire alarm company supplied the control unit, programmed it and ran the acceptance test. Who fills in the record of completion?",
      opts: ["Each contractor completes the portions it was responsible for, and it goes to the AHJ and the owner at the end of the job","The AHJ, while witnessing the acceptance test","The building owner, after taking over the system","Only the fire alarm company, because it did the testing"],
      a: 0,
      ex: "The record of completion is completed by the installing contractor and submitted to the AHJ and the owner at the conclusion of the job. Where more than one contractor did the installation, each completes the portions it is responsible for. The trap is leaving it all to the company that did the testing, which cannot vouch for wiring it did not install. Agree at the start of the job who signs which part.",
      ref: "NFPA 72-2022 7.5.6.2"
    },
    {
      id: "2.1.4-26",
      type: "mc",
      q: "The installation is finished and your company is about to ask the AHJ for final approval. The AHJ requires the installing contractor's written statement under NFPA 72. What does that statement say?",
      opts: ["That the owner has accepted the system and taken over its maintenance","That the installer will test and maintain the system for the first year","That the system has been installed in accordance with the approved plans and tested in accordance with the manufacturer's published instructions and the applicable NFPA requirements","That every device and appliance carries a manufacturer's warranty"],
      a: 2,
      ex: "Before requesting final approval, if the AHJ requires it, the installing contractor furnishes a written statement that the system was installed in accordance with the approved plans and tested in accordance with the manufacturer's published instructions and the applicable NFPA requirements. The record of completion is permitted to be part of that statement. Owner acceptance and warranties are contract matters, not what the Code asks the contractor to certify. Also remember that the AHJ must be notified before the initial acceptance test.",
      ref: "NFPA 72-2022 7.5 (completion documentation, contractor's written statement)"
    },
    {
      id: "2.1.4-27",
      type: "mc",
      q: "The communicator sends signals to the supervising station over two paths, IP and cellular. During acceptance you unplug the network cable and leave the cellular path working. Within what time must the failure of the IP path be annunciated at the supervising station?",
      opts: ["90 seconds","200 seconds","60 minutes","6 hours"],
      a: 3,
      ex: "Where multiple communications paths are used, each path is supervised and the failure of any one path is annunciated at the supervising station within not more than 6 hours. The 60 minutes applies where there is only a single path. 90 seconds is the time for an alarm to be displayed at the station, and 200 seconds is for trouble indication at the premises. Call the station, confirm what they received and when, and record it.",
      ref: "NFPA 72-2022 26.6.3.4"
    },
    {
      id: "2.1.4-28",
      type: "multi",
      q: "You are checking the programmed sequence of operations against the input/output matrix. Which TWO of these programmed responses are wrong and must be corrected?",
      opts: ["Sprinkler waterflow switch: alarm signal and occupant notification","Low air pressure switch on a dry-pipe system: trouble signal","Sprinkler control valve supervisory switch: supervisory signal","Open circuit on a notification appliance circuit: supervisory signal","Loss of AC power at the control unit: trouble signal"],
      a: [1,3],
      ex: "Supervisory signals report an off-normal condition of a fire protection system, such as a closed valve or low air pressure on a dry-pipe system. Trouble signals report a fault in the fire alarm system itself, such as an open circuit, a ground fault or loss of power. So low air is supervisory and an open NAC is trouble. Mixing the two is the classic programming error, and it sends the wrong response from the supervising station.",
      ref: "NFPA 72-2022 17.17 (supervisory signal-initiating devices); NFPA 72-2022 10.15 (trouble signals)"
    },
    {
      id: "2.1.4-29",
      type: "mc",
      q: "In a new high-rise, the fire alarm system is interconnected with smoke control, elevator recall and stair pressurization. Each system has passed its own acceptance test. What does IBC 2021 require in addition before the certificate of occupancy?",
      opts: ["Nothing more, because every system has passed","Integrated testing of the interconnected systems in accordance with NFPA 4, repeated at intervals of no more than 10 years","A second fire alarm acceptance test 30 days after the first","A sensitivity test of every smoke detector"],
      a: 1,
      ex: "Where fire protection and life safety systems are interconnected, the IBC wants the whole chain proven, not just each part. For high-rise buildings that means integrated testing to NFPA 4 before the certificate of occupancy, and again at intervals not exceeding 10 years unless the integrated test plan says otherwise. Individual acceptance tests can all pass while the hand-off between systems fails. Plan this test with the other trades early.",
      ref: "IBC 2021 901.6.2"
    },
    {
      id: "2.1.4-30",
      type: "multi",
      q: "NFPA 72 calls for tests on new metallic installation conductors at acceptance. Which THREE are among them?",
      opts: ["Stray voltage between conductors and from conductors to ground, normally no more than 1 V","Isolation of the conductors from ground","A 1,000 V insulation test with all devices connected","Loop resistance of each circuit, with the pair shorted at the far end, checked against the manufacturer's limit","The flash rate of each strobe, measured through the wiring"],
      a: [0,1,3],
      ex: "The conductor tests are stray voltage (1 V ac/dc maximum unless the manufacturer gives another figure), ground faults, conductor-to-conductor shorts, and loop resistance measured with the far end shorted, plus the circuit integrity test. Record the loop resistance, because it also checks the voltage drop calculation. A high-voltage insulation tester with devices connected is the trap: it is not in the table and it can destroy the electronics.",
      ref: "NFPA 72-2022 Table 14.4.3.2(15)"
    }
  ]
};
