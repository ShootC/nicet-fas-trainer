// NICET FAS Level I · 1.1 Installation. Questions keyed by task id.
// Never reuse or renumber an id: progress is saved by id. See README for the format.
export default {
  "1.1.1": [
    {
      id: "1.1.1-01",
      type: "mc",
      q: "You are mounting a manual fire alarm box on a corridor wall. Where must the operable part (the handle or lever) be, measured from the finished floor?",
      opts: ["Not less than 36 in. and not more than 42 in.","Not less than 42 in. and not more than 48 in.","Not less than 48 in. and not more than 54 in.","Not less than 80 in. and not more than 96 in."],
      a: 1,
      ex: "NFPA 72 puts the operable part of a manual box between 42 in. and 48 in. above the finished floor, so a person standing or seated in a wheelchair can reach it. Measure to the handle, not to the top or bottom of the backbox. The 80 to 96 in. figure is the lens height for a wall-mounted strobe, which is the number trainees most often mix in.",
      ref: "NFPA 72-2022 17.15 (manual fire alarm boxes, mounting height)"
    },
    {
      id: "1.1.1-02",
      type: "mc",
      q: "A conventional panel has two-wire smoke detectors that take their power from the initiating device circuit. You are asked to replace a damaged one with a different brand that 'fits the same base size'. What has to be true before you install it?",
      opts: ["The detector must be listed as compatible with that control unit","The detector only needs the same operating voltage printed on its label","Any UL-listed smoke detector may be used on any listed panel","The detector must be the same color and profile as the others"],
      a: 0,
      ex: "A device that draws its power from the IDC or SLC must be listed for use with that control unit. The panel and detector are tested together for standby current, alarm current and how many detectors the circuit can carry. Matching the voltage is the tempting answer, but an unlisted combination can fail to alarm or can hold the zone in trouble. Check the panel's compatibility document.",
      ref: "NFPA 72-2022 Ch 10 (equipment listing and compatibility); manufacturer's compatibility listing"
    },
    {
      id: "1.1.1-03",
      type: "mc",
      q: "You are mounting a combination horn-strobe on a wall in a room with a 12 ft ceiling. Which rule sets its mounting height?",
      opts: ["The audible rule: top of the appliance at least 90 in. above the floor","The manual box rule: 42 to 48 in. above the floor","The visual rule: the entire lens between 80 in. and 96 in. above the floor","No rule applies to combination appliances; mount at any convenient height"],
      a: 2,
      ex: "When an audible and a visual appliance are combined in one unit, the visual rules decide the location. The whole lens must be at least 80 in. and not more than 96 in. above the finished floor. The 90 in. figure applies to audible-only appliances. Following it here could push the lens above 96 in.",
      ref: "NFPA 72-2022 18.5.5.1; Ch 18 (location of combination audible/visual appliances)"
    },
    {
      id: "1.1.1-04",
      type: "mc",
      q: "An audible-only horn (no strobe) is going on a wall in a warehouse office with a 10 ft ceiling. Where does NFPA 72 want it, if the ceiling height allows?",
      opts: ["Entire appliance between 80 in. and 96 in. above the floor","Centered 60 in. above the floor, at ear level","Bottom of the appliance at least 96 in. above the floor","Top of the appliance at least 90 in. above the floor and at least 6 in. below the ceiling"],
      a: 3,
      ex: "A wall-mounted audible appliance has its top at least 90 in. above the finished floor and at least 6 in. below the finished ceiling, where the ceiling height allows. The 80 to 96 in. band is the strobe lens rule. It is a different measurement (the lens, not the top of the appliance), and it applies to visual and combination appliances.",
      ref: "NFPA 72-2022 18.4 (location of audible appliances)"
    },
    {
      id: "1.1.1-05",
      type: "mc",
      q: "The drawings call for a spot-type smoke detector on a sidewall because the ceiling is not accessible. Under NFPA 72-2022, where on the wall does it go?",
      opts: ["At least 4 in. down from the ceiling, and no more than 12 in. down","Anywhere in the top third of the wall","With the top of the detector between the ceiling and 12 in. down from the ceiling","At least 12 in. down from the ceiling, and no more than 24 in. down"],
      a: 2,
      ex: "A sidewall spot-type smoke detector goes with its top anywhere from the ceiling down to 12 in. below it. The old 4 in. 'dead air space' rule was removed for smoke detectors years ago, so the corner is no longer off limits. The 4 in. rule still applies to heat detectors, which is why that choice is the trap.",
      ref: "NFPA 72-2022 Ch 17 (spot-type smoke detector location, 17.7.4)"
    },
    {
      id: "1.1.1-06",
      type: "mc",
      q: "Where may a spot-type heat detector be mounted in a room with a smooth, flat ceiling?",
      opts: ["On the ceiling, tight into the corner where the wall and ceiling meet","On the ceiling at least 4 in. from the sidewall, or on the sidewall between 4 in. and 12 in. down from the ceiling","On the sidewall only, between 12 in. and 24 in. down from the ceiling","Anywhere on the ceiling or the top 12 in. of the wall, corners included"],
      a: 1,
      ex: "Heat detectors still have the corner restriction. On the ceiling they stay at least 4 in. from the sidewall. On the sidewall they go between 4 in. and 12 in. down from the ceiling. The last choice describes the smoke detector rule, which no longer keeps detectors out of the corner. Keep the two rules separate.",
      ref: "NFPA 72-2022 Ch 17 (heat detector location, 17.6.3)"
    },
    {
      id: "1.1.1-07",
      type: "num",
      q: "A spot-type heat detector has a listed spacing of 50 ft. It goes on a smooth ceiling less than 10 ft high. Using the standard spacing method, what is the greatest distance allowed from a wall to the first detector, measured at right angles to the wall?",
      unit: "ft",
      a: 25,
      tol: 0.1,
      ex: "Detectors are spaced no farther apart than the listed spacing, and no farther than half the listed spacing from a wall. 50 ft ÷ 2 = 25 ft. The trap is to use the full 50 ft at the wall. That would leave the strip along the wall twice as far from a detector as the listing allows.",
      ref: "NFPA 72-2022 17.6.3.1.1"
    },
    {
      id: "1.1.1-08",
      type: "num",
      q: "A storage room is 30 ft wide and 120 ft long with a smooth, flat ceiling. Spot-type smoke detectors are laid out in one row down the center at the nominal 30 ft spacing, with half that spacing to each end wall. How many detectors are needed?",
      unit: "detectors",
      a: 4,
      tol: 0,
      ex: "Half spacing to each end wall is 15 ft. Detectors land at 15 ft, 45 ft, 75 ft and 105 ft, which leaves 15 ft to the far wall. 120 ÷ 30 = 4 detectors. The row is 15 ft from each side wall, so the width is covered too. A common mistake is to start the first detector 30 ft from the end wall and come up one short.",
      ref: "NFPA 72-2022 17.7.4.2.3.1"
    },
    {
      id: "1.1.1-09",
      type: "mc",
      q: "On a new building, the fire alarm system is not required to be in service during construction. Drywall sanding and painting are still going on. When should the smoke detector heads be installed?",
      opts: ["As soon as the bases are wired, so the loop can be tested early","Before the ceiling tile goes in, so the tile installer can work around them","Any time, as long as the heads are left unprogrammed","After all the other trades have finished their cleanup"],
      a: 3,
      ex: "Where detection is not needed during construction, NFPA 72-2022 says the detectors do not go in until the other trades have completed cleanup. Construction dust contaminates the sensing chamber and causes nuisance alarms and sensitivity drift later. Install and wire the bases, and hang the heads last.",
      ref: "NFPA 72-2022 17.7.2"
    },
    {
      id: "1.1.1-10",
      type: "mc",
      q: "The smoke detectors on one floor were installed early and were in service for signal initiation during construction. The job is now ready for final commissioning. What must be done with those detectors?",
      opts: ["Clean them and verify they operate within their listed sensitivity, or replace them","Nothing, as long as none of them is in alarm or trouble","Blow them out with compressed air and put them back in service","Leave the dust covers on until the final inspection is finished"],
      a: 0,
      ex: "Detectors used during construction have been exposed to dust. Before final commissioning they must be cleaned and verified to be within their listed sensitivity range, or replaced. A detector that is not in alarm can still be far out of its sensitivity range. Leaving covers on is also wrong: a covered detector cannot sense smoke and cannot be tested.",
      ref: "NFPA 72-2022 17.7.2"
    },
    {
      id: "1.1.1-11",
      type: "mc",
      q: "A conventional Class B initiating device circuit runs detector to detector, with the end-of-line resistor at the last one. To add a detector in a side room, a helper splices a new two-wire branch onto the middle of the circuit (a T-tap) and lands the new detector at the end of the branch. What is the problem?",
      opts: ["The panel will go into alarm as soon as the branch is connected","The extra wire raises the loop resistance too much for the EOL to be seen","The branch is not supervised: an open in it will not show a trouble","There is no problem, as long as the splice is made in a listed box"],
      a: 2,
      ex: "The panel supervises the circuit by passing a small current through every conductor to the end-of-line resistor. Current does not flow down a dead-end branch, so the wire to the new detector can break and the panel will stay normal. The fix is to run the circuit in and out of the new detector so it stays one continuous path to the EOL. Some addressable SLCs allow T-taps on Class B because each device is polled, but only where the manufacturer's instructions say so.",
      ref: "NFPA 72-2022 12.6 (monitoring for integrity)"
    },
    {
      id: "1.1.1-12",
      type: "mc",
      q: "During a rough-in check you find that the installer stripped a section of insulation in the middle of the conductor and looped the unbroken wire under a detector base's terminal screw, then carried on to the next device. Why is this wrong?",
      opts: ["A looped wire has more resistance than a cut wire","If the wire slips off the screw, the circuit stays continuous and the panel does not show a trouble","The loop makes the detector polarity-sensitive","It is acceptable, and it is the preferred way to save time"],
      a: 1,
      ex: "Devices have duplicate terminals or leads so the incoming and outgoing conductors land separately. Then a loose or removed connection opens the circuit and the panel reports a trouble. With an unbroken loop, the wire can come off the terminal and the circuit still looks healthy, but that detector is no longer connected. Cut the conductor and land each end on its own terminal.",
      ref: "NFPA 72-2022 17.4.6"
    },
    {
      id: "1.1.1-13",
      type: "mc",
      q: "One polarized strobe on a 24 VDC notification appliance circuit is landed with its + and − leads reversed. The other appliances are wired correctly. What is the usual result?",
      opts: ["It works normally, because DC strobes are not polarity-sensitive","The NAC fuse opens the first time the circuit goes into alarm","It works, but at about half its rated candela","It does not operate in alarm, and it may cause a NAC trouble in standby"],
      a: 3,
      ex: "The panel supervises a NAC with a small reverse-polarity voltage, and each appliance has a blocking diode so it ignores that voltage. In alarm the panel flips polarity and the appliances run. A reversed appliance does the opposite: it blocks the alarm voltage, so it stays dark, and it can pass supervisory current in standby, which may show as a trouble. Check the polarity markings on every appliance and follow the manufacturer's wiring diagram.",
      ref: "NFPA 72-2022 Ch 18; manufacturer's installation instructions"
    },
    {
      id: "1.1.1-14",
      type: "multi",
      q: "Which THREE of these are NFPA 72 location rules for manual fire alarm boxes?",
      opts: ["The operable part is between 48 in. and 54 in. above the floor","Boxes are conspicuous, unobstructed and accessible","A box is within 5 ft of each exit doorway on each floor","A box is needed only at the main entrance","Travel distance to the nearest box is not more than 200 ft, measured horizontally on the same floor"],
      a: [1,2,4],
      ex: "Manual boxes must be easy to see and reach, sit within 5 ft of each exit doorway on each floor, and be added as needed so nobody travels more than 200 ft on the same floor to reach one. The height choice is wrong because the operable part goes at 42 to 48 in. A coat rack, a display or a door that swings over the box all break the 'unobstructed' rule, so check the finished space and not just the drawing.",
      ref: "NFPA 72-2022 17.15.9.2; 17.15 (manual fire alarm box location and spacing)"
    },
    {
      id: "1.1.1-15",
      type: "multi",
      q: "You are terminating a conventional Class A initiating device circuit. Which TWO statements are correct?",
      opts: ["The circuit leaves the panel, passes through every device, and returns to a second set of terminals at the panel","An end-of-line resistor is left at the last device in the field, the same as Class B","The outgoing and return conductors are routed separately, not in the same cable or raceway, except where the Code allows","T-taps are acceptable, because the return path supervises them","After a single open, the devices past the break stop working"],
      a: [0,2],
      ex: "Class A has a redundant path: the circuit goes out, through each device, and back to the panel, so it keeps working past a single open. That only helps if the outgoing and return runs are kept apart, so one cut or one fire does not take out both. There is no EOL left at the last field device, and a T-tap would create a branch with no return path. Losing the devices past a break describes Class B.",
      ref: "NFPA 72-2022 12.3 (pathway class designations); 12.3.8"
    }
  ],
  "1.1.2": [
    {
      id: "1.1.2-01",
      type: "mc",
      q: "Power-limited fire alarm cable will be run exposed (no raceway) above a suspended ceiling. The space above the ceiling is used as the return-air path for the HVAC system. Which cable marking is required?",
      opts: ["FPL","FPLR","FPLP","NPLF"],
      a: 2,
      ex: "A ceiling space used for environmental air is a plenum, and exposed cable in it must be plenum rated: FPLP. FPLR is for risers (vertical runs from floor to floor) and FPL is general purpose. The last letter tells you: P for plenum, R for riser. Table 760.154 in the NEC shows which cable type may go in which space.",
      ref: "NEC 2020 760.154 and Table 760.154; 760.179(I)"
    },
    {
      id: "1.1.2-02",
      type: "mc",
      q: "A vertical run through three floors calls for FPLR cable, and the truck is out of it. Which of these cables does the NEC allow as a substitute for FPLR?",
      opts: ["FPL","CM","CMG","CMR"],
      a: 3,
      ex: "Substitution only goes up the fire-resistance ladder or across to an equal communications cable. For a riser, the NEC permits CMP, FPLP or CMR in place of FPLR. FPL, CM and CMG are general-purpose cables with a lower rating than riser cable, so they cannot go in the shaft. The substitution table and its figure are in 760.154(A).",
      ref: "NEC 2020 760.154(A)"
    },
    {
      id: "1.1.2-03",
      type: "mc",
      q: "You are replacing an old fire alarm system. Above the corridor ceiling tiles you find the old fire alarm cable. It is no longer connected to anything and has no tags. What does the NEC require?",
      opts: ["Leave it in place, because removing it could disturb other wiring","Remove the accessible portion","Cut it off flush at each wall and leave the rest","Paint it a different color so it is not confused with the new cable"],
      a: 1,
      ex: "Abandoned fire alarm cable is cable that is not terminated at equipment and is not tagged for future use. Its accessible portion must be removed. The only way to leave it is to tag it for future use with a tag that will last in that environment. Old cable left in a ceiling adds fuel load and makes future troubleshooting harder.",
      ref: "NEC 2020 760.25; 760.2 (definition of abandoned fire alarm cable)"
    },
    {
      id: "1.1.2-04",
      type: "mc",
      q: "What does the NEC require for identifying fire alarm circuits?",
      opts: ["They are identified at terminal and junction locations, in a way that helps prevent accidental signals when other systems are worked on","All fire alarm cable jackets and raceways must be red","Every conductor must be tagged every 10 ft along its length","Only the 120 V branch circuit needs to be identified"],
      a: 0,
      ex: "The NEC asks for identification at terminals and junctions so someone servicing another system does not disturb a fire alarm circuit and set off an alarm or a trouble. Red cable and red box covers are a common way to do this, and many specifications call for them, but the NEC does not require red cable. Know the difference between code and job specification.",
      ref: "NEC 2020 760.30"
    },
    {
      id: "1.1.2-05",
      type: "mc",
      q: "In a corridor, so many low-voltage cables (fire alarm included) are lying across the suspended ceiling grid that the tiles cannot be lifted out. Besides the support problem, which NEC rule does this break?",
      opts: ["The rule limiting fire alarm cable runs to 100 ft between boxes","The rule that fire alarm cable must be in conduit above ceilings","The rule that cables must be 2 in. from the ceiling tile","The rule that cables must not block access to equipment by preventing removal of panels, including ceiling tiles"],
      a: 3,
      ex: "Article 760 says a build-up of cables must not prevent the removal of panels, and it names suspended ceiling panels. The space above the ceiling has to stay reachable for service. The cable also has to be supported from the building structure, not left lying on the grid or the tiles.",
      ref: "NEC 2020 760.21; 760.24(A)"
    },
    {
      id: "1.1.2-06",
      type: "multi",
      q: "Power-limited fire alarm cable is being run exposed above a suspended ceiling. Which TWO support methods are acceptable?",
      opts: ["Cable ties to the wires that hold up the ceiling grid","J-hooks or straps fastened to the building structure","Taped or tie-wrapped to the outside of an electrical conduit","Separate support wires added just for the cable, independent of the ceiling-grid wires","Laid across the ceiling tiles and T-bars"],
      a: [1,3],
      ex: "Exposed cable is supported by the building structure with hardware that does not damage it, such as J-hooks, straps or hangers. Extra support wires put in only for the cable are also allowed. The ceiling's own hanger wires are not, because they are sized for the ceiling. A raceway may not be used as a hanger for PLFA cable either, and cable lying on tiles is not supported at all.",
      ref: "NEC 2020 760.24(A); 760.143; 300.11(B) as referenced by 760.130(B)"
    },
    {
      id: "1.1.2-07",
      type: "mc",
      q: "To save a conduit run, an electrician offers to pull the fire alarm panel's 120 VAC supply conductors and the power-limited NAC conductors through the same raceway. Is that allowed?",
      opts: ["No. Power-limited fire alarm conductors may not share a raceway with power conductors unless a barrier separates them","Yes, if the fire alarm cable jacket is rated 300 V","Yes, if all the conductors are insulated for 600 V","Yes, as long as the raceway is metal and bonded"],
      a: 0,
      ex: "PLFA conductors are kept out of raceways, boxes and enclosures that hold electric light, power, Class 1 or non-power-limited conductors, unless a barrier separates them or one of the listed exceptions applies. A fault from the 120 V conductor onto a power-limited circuit would put line voltage on devices that were never built for it. The '600 V insulation' answer borrows from the rule for non-power-limited and Class 1 circuits, which does not apply here.",
      ref: "NEC 2020 760.136(A) and (B)"
    },
    {
      id: "1.1.2-08",
      type: "mc",
      q: "Inside the fire alarm control unit cabinet, the 120 VAC supply conductors enter only to connect to the panel's power terminals. What is the minimum separation the NEC requires between those conductors and the power-limited fire alarm circuit conductors in the cabinet?",
      opts: ["None, because they are all inside one listed enclosure","0.25 in. (6 mm)","2 in. (50 mm)","6 in. (150 mm)"],
      a: 1,
      ex: "Where power conductors come into an enclosure only to connect to the equipment, they must be routed to keep at least 0.25 in. from the power-limited conductors. The 2 in. figure is the separation rule for other locations outside this case. In practice: bring the AC in through its own knockout, keep it short, and dress the field wiring away from it.",
      ref: "NEC 2020 760.136(D); 760.136(G)"
    },
    {
      id: "1.1.2-09",
      type: "mc",
      q: "You core a hole through a 2-hour fire-rated corridor wall and pull a bundle of fire alarm cables through it. What must be done to the opening?",
      opts: ["Nothing, because fire alarm cable is already fire rated","Pack it with fiberglass insulation or spray foam from the truck","Firestop it with an approved method that maintains the wall's fire-resistance rating","Leave it open so more cables can be added later"],
      a: 2,
      ex: "Article 760 sends you to NEC 300.21: openings around wiring through fire-rated walls, floors and ceilings must be firestopped by approved methods so the rating is kept. That means a firestop system suited to that wall type, opening size and cable fill, installed to its instructions. Ordinary insulation or foam is not a firestop system, and plenum or riser cable ratings do nothing for the hole in the wall.",
      ref: "NEC 2020 760.3(A); 300.21"
    },
    {
      id: "1.1.2-10",
      type: "multi",
      q: "Which THREE are NEC requirements for the branch circuit that supplies a power-limited fire alarm control unit?",
      opts: ["The branch circuit supplies no other loads","The circuit must be protected by a GFCI device","The circuit is not supplied through a GFCI or an AFCI device","The disconnecting means has red identification and is marked FIRE ALARM CIRCUIT","The breaker must be located inside the fire alarm control unit cabinet"],
      a: [0,2,3],
      ex: "The panel gets a dedicated branch circuit with nothing else on it. The disconnect is identified in red, marked FIRE ALARM CIRCUIT and accessible only to qualified people, and the breaker's location is marked at the control unit. The circuit must not come through a GFCI or AFCI, because a nuisance trip would drop primary power to a life safety system. The breaker stays in its panelboard, not in the FACU.",
      ref: "NEC 2020 760.121(B)"
    },
    {
      id: "1.1.2-11",
      type: "mc",
      q: "What makes a fire alarm circuit a power-limited fire alarm (PLFA) circuit under the NEC?",
      opts: ["It is wired with FPL, FPLR or FPLP cable","It is supplied by a source listed as power-limited, such as a control unit output marked power-limited","It operates at 24 V or less","It uses 18 AWG or smaller conductors"],
      a: 1,
      ex: "The power source decides the circuit type. A PLFA circuit is fed from a listed power-limited source: a listed PLFA or Class 3 transformer or power supply, or listed equipment marked to identify the power-limited source. The cable type follows from that, not the other way round. A 24 V circuit from a non-power-limited output is still NPLFA and must be wired by the non-power-limited rules.",
      ref: "NEC 2020 760.121(A); 760.124"
    },
    {
      id: "1.1.2-12",
      type: "mc",
      q: "Above a ceiling you find two power-limited fire alarm cables joined with wire connectors and electrical tape, hanging in free air with no box. What does the NEC say about this?",
      opts: ["It is acceptable for power-limited circuits","It is acceptable if the splice is soldered","It is not acceptable: splices and terminations are made in listed fittings, boxes, enclosures, fire alarm devices or utilization equipment","It is acceptable if the splice is within 12 in. of a device"],
      a: 2,
      ex: "Even on power-limited circuits, splices and terminations belong in listed boxes, enclosures, fittings, fire alarm devices or utilization equipment. An open splice can be pulled apart, can ground on the grid, and is very hard to find during troubleshooting. Put it in a box with a cover, and identify the box as fire alarm.",
      ref: "NEC 2020 760.130(B)(1); 760.30"
    },
    {
      id: "1.1.2-13",
      type: "num",
      q: "A two-conductor circuit is pulled with 14 AWG stranded uncoated copper (3.14 Ω per 1,000 ft). The last device is 250 ft from the panel. What is the total resistance of the wire in the circuit, out and back? Answer to two decimal places.",
      unit: "Ω",
      a: 1.57,
      tol: 0.01,
      ex: "Current goes out on one conductor and back on the other, so the wire length is 2 × 250 = 500 ft. R = 500 ÷ 1,000 × 3.14 = 1.57 Ω. Forgetting to double the one-way distance gives 0.785 Ω, which is the most common mistake. Also note that stranded wire has slightly more resistance than solid of the same gauge (3.14 against 3.07).",
      ref: "NEC 2020 Chapter 9, Table 8; Ugly's (conductor properties)"
    },
    {
      id: "1.1.2-14",
      type: "num",
      q: "A NAC is wired with 12 AWG solid uncoated copper (1.93 Ω per 1,000 ft). The appliances are grouped at the end of a 500 ft one-way run. The worst-case panel voltage is 20.4 V and the appliances need at least 16 V. What is the most current the circuit can carry and still pass? Answer in amps to two decimal places.",
      unit: "A",
      a: 2.28,
      tol: 0.01,
      ex: "Allowed drop = 20.4 − 16 = 4.4 V. Wire resistance = 2 × 500 ÷ 1,000 × 1.93 = 1.93 Ω. I = E ÷ R = 4.4 ÷ 1.93 = 2.28 A. If you forget to double the length you get 4.56 A, which is twice the real limit. Using 24 V in place of 20.4 V also gives a figure that is far too high.",
      ref: "NEC 2020 Chapter 9, Table 8; Ugly's (Ohm's law, voltage drop)"
    },
    {
      id: "1.1.2-15",
      type: "num",
      q: "A 24 VDC auxiliary output feeds 8 magnetic door holders. Each holder draws 20 mA. Using P = E × I, what total power does the output supply to the holders? Ignore wire loss. Answer in watts to two decimal places.",
      unit: "W",
      a: 3.84,
      tol: 0.01,
      ex: "Total current = 8 × 20 mA = 160 mA = 0.16 A. P = E × I = 24 × 0.16 = 3.84 W. The trap is leaving the current in milliamps: 24 × 160 = 3,840, which is milliwatts, not watts. Convert to amps before you use any of the Ugly's power formulas.",
      ref: "Ugly's Electrical References 2020 (Ohm's law and power formulas)"
    }
  ],
  "1.1.3": [
    {
      id: "1.1.3-01",
      type: "mc",
      q: "At what height above a lower level does OSHA require fall protection for an unprotected side or edge, on a construction site and in general industry?",
      opts: ["Construction 4 ft; general industry 6 ft","Construction 6 ft; general industry 4 ft","Construction 10 ft; general industry 6 ft","Both 10 ft"],
      a: 1,
      ex: "The construction standard (29 CFR 1926) uses 6 ft for unprotected sides and edges. The general industry standard (29 CFR 1910) uses 4 ft. Trainees often swap the two. New installation work on a building under construction falls under 1926. Service work in an occupied, finished building is normally general industry. The 10 ft figure belongs to scaffolds.",
      ref: "OSHA 29 CFR 1926.501(b)(1) and 29 CFR 1910.28(b)(1)(i); scaffolds 1926.451(g)(1) (study only)"
    },
    {
      id: "1.1.3-02",
      type: "num",
      q: "You set an extension ladder against a wall. The working length of the ladder, from its feet to the top support point, is 20 ft. Using OSHA's set-up ratio, how far from the wall should the base of the ladder be?",
      unit: "ft",
      a: 5,
      tol: 0.1,
      ex: "A non-self-supporting ladder is set so the horizontal distance from the top support to the foot is about one quarter of the working length. 20 ÷ 4 = 5 ft. This is the 4-to-1 rule. Too steep and the ladder can tip backward. Too shallow and the feet can slide out.",
      ref: "OSHA 29 CFR 1926.1053(b)(5)(i) (study only)"
    },
    {
      id: "1.1.3-03",
      type: "num",
      q: "You use an extension ladder to get onto a mezzanine. By OSHA's rule, the side rails must extend at least how many feet above the upper landing surface?",
      unit: "ft",
      a: 3,
      tol: 0,
      ex: "The side rails extend at least 3 ft above the landing, so you have something to hold while you step on and off. If the ladder is too short for that, it must be secured at the top and a grab device provided. Stepping off a ladder that ends at the landing edge is how many falls happen.",
      ref: "OSHA 29 CFR 1926.1053(b)(1) (study only)"
    },
    {
      id: "1.1.3-04",
      type: "mc",
      q: "You have to work from a ladder beside an open electrical panel with exposed energized parts. What kind of ladder does OSHA call for?",
      opts: ["A ladder with nonconductive side rails, such as fiberglass","An aluminum ladder, because it is lighter and easier to control","Any ladder, as long as it has rubber feet","A wooden ladder painted to seal it"],
      a: 0,
      ex: "Where a ladder or the worker could touch exposed energized equipment, the side rails must be nonconductive. Fiberglass is the usual choice. Rubber feet on an aluminum ladder do not help when the rail itself touches a live part while you are holding it. Also keep the ladder clean and dry: a dirty or wet fiberglass ladder can still conduct.",
      ref: "OSHA 29 CFR 1926.1053(b)(12) (study only)"
    },
    {
      id: "1.1.3-05",
      type: "mc",
      q: "You are hanging a ceiling strobe from a 6 ft stepladder and cannot quite reach. A co-worker says to stand on the top cap for a minute. What is the right move?",
      opts: ["Stand on the top cap, but keep one hand on the ceiling grid","Stand on the top step, not the cap","Have the co-worker hold the ladder while you stand on the cap","Come down and get a taller ladder or a lift"],
      a: 3,
      ex: "The top and the top step of a stepladder are not to be used as steps. Up there you have nothing to brace against, and your weight is above the ladder's support. Having someone hold the ladder does not change that. Get equipment that reaches the work.",
      ref: "OSHA 29 CFR 1926.1053(b)(13) (study only)"
    },
    {
      id: "1.1.3-06",
      type: "mc",
      q: "Before the shift you find a crack in the side rail of the only extension ladder on the truck. What should you do?",
      opts: ["Wrap the crack with electrical tape and use it for light work only","Tag it as defective or mark it 'Do Not Use', take it out of service, and report it","Use it, but only below 10 ft","Turn it so the cracked rail faces the wall"],
      a: 1,
      ex: "A ladder with a structural defect is taken out of service right away. It is tagged or marked so nobody else picks it up, and it stays out of use until it is repaired or replaced. A taped rail hides the damage and does nothing for strength. Ladders are inspected before use for exactly this reason.",
      ref: "OSHA 29 CFR 1926.1053(b)(16) (study only)"
    },
    {
      id: "1.1.3-07",
      type: "multi",
      q: "You and another technician must work on the 120 VAC supply to a fire alarm panel. Which TWO are correct lockout/tagout practice?",
      opts: ["Each person working on the circuit applies their own lock and tag","One lock from the foreman covers everyone, and the foreman keeps the key in the truck","After locking out, test the circuit with a meter you know is working, to prove it is de-energized","If a worker forgets to remove a lock, any co-worker may cut it off at the end of the shift","A tag on the breaker handle is enough, and the breaker can stay on"],
      a: [0,2],
      ex: "Lockout protects the person whose lock is on the device, so each worker applies their own lock and tag and keeps their own key. Then you verify: check the meter on a known live source, test the circuit, and check the meter again. A breaker label can be wrong. A lock is removed by the person who applied it. An employer may remove it only by following a strict procedure, never as a favor from a co-worker.",
      ref: "OSHA 29 CFR 1910.147; 29 CFR 1926.417 (study only)"
    },
    {
      id: "1.1.3-08",
      type: "mc",
      q: "You are in the basket of a boom-type aerial lift, mounting devices on a high atrium wall. What does OSHA require for fall protection?",
      opts: ["Nothing, because the basket has guardrails","A harness and lanyard tied off to the nearest building steel","A harness or body belt with a lanyard attached to the boom or basket","Sitting or standing on the mid-rail is allowed if you are tied off"],
      a: 2,
      ex: "In a boom lift you wear personal fall protection with the lanyard attached to the boom or the basket. A boom can bounce or be struck and throw a worker out, and the guardrail alone will not stop that. Never tie off to the building or a nearby pole: if the lift moves, you are pulled out. Keep both feet on the basket floor. The OSHA text still says 'body belt'; a belt is allowed only as a restraint, so most employers require a full harness.",
      ref: "OSHA 29 CFR 1926.453(b)(2) (aerial lifts) (study only)"
    },
    {
      id: "1.1.3-09",
      type: "mc",
      q: "On a building under construction, you plug a 120 V hammer drill into temporary power through an extension cord. What protection does OSHA require for that receptacle?",
      opts: ["Ground-fault circuit interrupter (GFCI) protection, or an assured equipment grounding conductor program run by the employer","A surge protector strip","Nothing extra, if the drill is less than 5 years old","A 30 A breaker, so the drill does not trip it"],
      a: 0,
      ex: "On construction sites, 120 V, 15 A and 20 A receptacles that are not part of the building's permanent wiring need GFCI protection, or the employer must run an assured equipment grounding conductor program. Temporary power, damaged cords and wet floors are a bad mix, and a GFCI trips on the small leakage current that can kill. Also inspect the cord: no missing ground pin and no taped-over cuts.",
      ref: "OSHA 29 CFR 1926.404(b)(1) (Subpart K, electrical) (study only)"
    },
    {
      id: "1.1.3-10",
      type: "mc",
      q: "You have 40 anchor holes to drill in a concrete ceiling for device boxes. Concrete dust contains respirable crystalline silica. Which is the right way to control the dust?",
      opts: ["Drill dry and blow the holes and the floor clean with compressed air","Drill dry and dry-sweep the floor at the end of the day","Wear a paper dust mask and work fast","Use a drill with a dust shroud connected to a HEPA-filtered vacuum, and clean up with the vacuum"],
      a: 3,
      ex: "Breathing silica dust scars the lungs, and the damage is permanent. The standard's first line of defense is to capture the dust at the tool, with a shroud and a HEPA vacuum or with water, and not just to rely on a mask. Dry sweeping and compressed air put the fine dust back into the air you and the other trades breathe.",
      ref: "OSHA 29 CFR 1926 (respirable crystalline silica) (study only)"
    },
    {
      id: "1.1.3-11",
      type: "mc",
      q: "To pull cable between buildings you must go into an underground vault. The cover is marked as a permit-required confined space. What do you do?",
      opts: ["Go in quickly, as long as a co-worker knows where you are","Lift the cover, sniff for gas, and enter if it smells clean","Stay out until an entry permit is in place, the air has been tested, and an attendant is posted outside","Enter with a dust mask and a flashlight"],
      a: 2,
      ex: "A permit-required confined space can hold a hazard you cannot see or smell, such as low oxygen or toxic or flammable gas. Entry needs a written permit, air testing with a calibrated meter, an attendant outside and a rescue plan. Your nose cannot detect an oxygen-deficient atmosphere. Many confined space deaths are would-be rescuers who went in after a co-worker.",
      ref: "OSHA 29 CFR 1926 Subpart AA; 29 CFR 1910.146 (study only)"
    },
    {
      id: "1.1.3-12",
      type: "mc",
      q: "You are handed a firestop sealant you have not used before. Where do you find its health hazards, the PPE you need and the first aid measures?",
      opts: ["In NFPA 72","In the fire alarm panel's installation manual","In the product's Safety Data Sheet (SDS)","In the NEC, Article 760"],
      a: 2,
      ex: "OSHA's hazard communication rule requires the employer to keep a Safety Data Sheet for each hazardous chemical and to make it available to workers. The SDS lists the hazards, the protective equipment, first aid and spill handling. The container label gives a short version. You have a right to see the SDS before you use the product.",
      ref: "OSHA 29 CFR 1910.1200 (study only)"
    },
    {
      id: "1.1.3-13",
      type: "mc",
      q: "A co-worker grabs an energized conductor in a junction box and cannot let go. What do you do first?",
      opts: ["Shut off the power, or separate them from the source with something dry and nonconductive, without touching them yourself","Pull them away by the arm as fast as you can","Start CPR at once","Pour water on them to cool the burn"],
      a: 0,
      ex: "Check the scene before you help. If you touch someone who is still in contact with the source, the current can pass through you too, and then there are two victims. Kill the power or break the contact with a dry nonconductive object. Then call 911, check for responsiveness and breathing, and give CPR and use an AED if needed. Anyone who has had a shock should be seen by a medical professional, even if they feel fine.",
      ref: "American Red Cross First Aid/CPR/AED manual (study only); OSHA 29 CFR 1910.333 (study only)"
    },
    {
      id: "1.1.3-14",
      type: "mc",
      q: "You are giving CPR to an adult who is unresponsive and not breathing. Which cycle and compression rate does the Red Cross teach?",
      opts: ["15 compressions then 2 breaths, at 60 to 80 per minute","5 compressions then 1 breath, at 100 per minute","30 compressions then 5 breaths, at 80 to 100 per minute","30 compressions then 2 breaths, at 100 to 120 per minute"],
      a: 3,
      ex: "Adult CPR is cycles of 30 chest compressions and 2 breaths. Push hard and fast in the center of the chest, at least 2 in. deep, at 100 to 120 compressions per minute, and let the chest come back up each time. Keep going until an AED is ready, help takes over, or the person shows signs of life. Send someone to call 911 and fetch the AED straight away.",
      ref: "American Red Cross First Aid/CPR/AED manual (study only)"
    },
    {
      id: "1.1.3-15",
      type: "multi",
      q: "An AED arrives while CPR is in progress on an adult. Which TWO are correct?",
      opts: ["Wait for the ambulance crew before attaching the pads","Turn it on and follow its voice prompts","Keep doing compressions while the AED analyzes the heart rhythm","Make sure nobody is touching the person while it analyzes and when it delivers a shock","Place both pads side by side on the same side of the chest"],
      a: [1,3],
      ex: "An AED is built for untrained people: turn it on and do what it says. Attach the pads to bare, dry skin as shown on the pad pictures, one on the upper right chest and one on the lower left side. Everyone stands clear during analysis and the shock, because movement can confuse the analysis and a shock can pass to anyone touching the person. Then go straight back to compressions. Do not wait for EMS: each minute without a shock lowers the chance of survival.",
      ref: "American Red Cross First Aid/CPR/AED manual (study only)"
    }
  ]
};
