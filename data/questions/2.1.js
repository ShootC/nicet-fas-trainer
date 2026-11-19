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
      ex: "Level 3 is a 2-hour method (CI cable, a fire-rated cable system, or a 2-hour enclosure) in a fully sprinklered building. Level 2 is the same 2-hour methods without the sprinkler condition, which makes it the tempting answer. Level 1 is a fully sprinklered building with the wiring in metal raceway or metal-armored cable. Systems used for relocation or partial evacuation need Level 2 or Level 3.",
      ref: "NFPA 72-2022 12.4.3, 12.4.4, 23.10.2"
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
    }
  ]
};
