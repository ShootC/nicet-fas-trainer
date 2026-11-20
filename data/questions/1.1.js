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
    },
    {
      id: "1.1.1-16",
      type: "mc",
      q: "You are hanging spot-type heat detectors in an attic. In summer the air at the attic ceiling reaches about 140 °F. Which is the lowest temperature classification that may be used there?",
      opts: ["Low (rated 100 to 134 °F)","Intermediate (rated 175 to 249 °F)","Ordinary (rated 135 to 174 °F)","Extra high (rated 325 to 399 °F)"],
      a: 1,
      ex: "The heat detector classification table lists a maximum ceiling temperature for each class, and the detector's rating must be at least 20 °F above the highest temperature expected at the ceiling. Ordinary detectors are for ceilings up to 115 °F, and intermediate detectors are for ceilings up to 155 °F. A 140 °F attic is too hot for ordinary, so intermediate is the lowest class that fits. The trap is ordinary: a 135 °F detector in a 140 °F attic will alarm on a hot day with no fire. Extra high would not false alarm, but it would respond far too late.",
      ref: "NFPA 72-2022 Table 17.6.2.1"
    },
    {
      id: "1.1.1-17",
      type: "num",
      q: "A spot-type heat detector has a listed spacing of 50 ft and sits on a smooth ceiling less than 10 ft high. The spacing rule also says every point on the ceiling must be within 0.7 times the listed spacing of a detector. What is the greatest distance allowed from the detector to the farthest corner it protects?",
      unit: "ft",
      a: 35,
      tol: 0.1,
      ex: "0.7 × 50 ft = 35 ft. A detector really covers a circle, and the corner of its square is the farthest point from it, so the corner is the check. Do not confuse this with the wall rule, which is half the listed spacing (25 ft here) measured at right angles to the wall. Both rules have to be met.",
      ref: "NFPA 72-2022 17.6.3.1.1"
    },
    {
      id: "1.1.1-18",
      type: "mc",
      q: "The reflected ceiling plan changed after the fire alarm drawings were issued. The spot-type smoke detector you are about to mount now lands 1 ft from a ceiling supply-air diffuser. What should you do?",
      opts: ["Mount it as drawn, because the drawing is approved","Mount it as drawn and lower its sensitivity setting","Swap it for a heat detector without telling anyone","Stop and get it moved out of the direct airflow. The annex recommends at least 3 ft from a supply diffuser"],
      a: 3,
      ex: "Air blowing from a diffuser pushes smoke away from the detector, and dust in that air builds up in the chamber. The mandatory rule in NFPA 72 has no distance in it: detectors are not placed where airflow keeps them from working. The 3 ft figure comes from the annex, which is recommended guidance and not an enforceable requirement, so treat 3 ft as good practice unless the drawings or the AHJ say otherwise. Raise it with your lead or the designer so the drawing is corrected. Changing the device type on your own is a design change, which is not the installer's call.",
      ref: "NFPA 72-2022 17.7.5 and its annex (HVAC airflow effects on detector placement, the 3 ft distance is annex guidance)"
    },
    {
      id: "1.1.1-19",
      type: "mc",
      q: "A level ceiling is 12 ft (144 in.) high and has beams that hang down 10 in. You are installing spot-type smoke detectors. How does NFPA 72 treat this ceiling?",
      opts: ["The beams are less than 10 percent of the ceiling height, so smooth-ceiling spacing is allowed, with detectors on the ceiling or on the bottom of the beams","Every beam pocket needs its own detector on the ceiling","Detector spacing is cut in half in both directions","Each beam is treated as a wall, so each bay is a separate room"],
      a: 0,
      ex: "10 in. ÷ 144 in. is about 7 percent. Where the beam depth is less than 10 percent of the ceiling height, smoke spills under the beams easily and smooth-ceiling spacing may be used. The detectors may go on the ceiling or on the bottom of the beams. The extra rules, such as a detector in each pocket, only begin when the beams are 10 percent of the ceiling height or deeper. Do the division before you count detectors.",
      ref: "NFPA 72-2022 17.7.4.2.4.2"
    },
    {
      id: "1.1.1-20",
      type: "num",
      q: "Spot-type smoke detectors are going down the centerline of a corridor 10 ft wide, on a smooth ceiling. In place of the 30 ft square grid, you may use the rule that every point on the ceiling is within 0.7 × 30 ft = 21 ft of a detector. The farthest point from a detector is the corner where the wall meets the midpoint between two detectors, 5 ft off the centerline. Using a right triangle, what is the greatest distance allowed between detectors? Answer to one decimal place.",
      unit: "ft",
      a: 40.8,
      tol: 0.3,
      ex: "Each detector reaches 21 ft on the diagonal. Half the corridor width is 5 ft, so the reach along the corridor is √(21² − 5²) = √416 = 20.4 ft. Two detectors meet in the middle, so the spacing is 2 × 20.4 = 40.8 ft, which the annex rounds to 41 ft. The first detector can be no more than 20.4 ft from the end wall. The trap is to stop at 30 ft and use more detectors than needed, or to use 42 ft and leave the corners uncovered.",
      ref: "NFPA 72-2022 17.7.4.2.3.1"
    },
    {
      id: "1.1.1-21",
      type: "mc",
      q: "A cross-corridor fire door is held open by magnets and released by ceiling-mounted smoke detectors that serve only that door. The wall section above the door opening (the header) is 30 in. deep on both sides. How many detectors does the door need?",
      opts: ["One, on either side of the door","One, on the side with the higher ceiling","Two, one on each side of the door","None, because the corridor smoke detectors already release it"],
      a: 2,
      ex: "A deep header traps smoke on the side where the fire is, so a detector on the other side may not see it until it is too late. Where the wall above the door is more than 24 in. deep on both sides, a detector is needed on each side. One detector on either side is the rule for a header of 24 in. or less, which is the tempting wrong answer. Measure the header before you rough in.",
      ref: "NFPA 72-2022 17.7.6.6 (smoke detectors for door release)"
    },
    {
      id: "1.1.1-22",
      type: "multi",
      q: "You are installing a duct smoke detector with sampling tubes on a return-air duct. Which THREE are NFPA 72 installation rules for it?",
      opts: ["It is installed so it gets a representative sample of the airstream","It may take the place of the area smoke detectors in the rooms the duct serves","Its location is permanently and clearly identified and recorded","Any listed spot-type smoke detector may be used, whatever the air velocity in the duct","The installation lets you verify that air flows from the duct to the detector"],
      a: [0,2,4],
      ex: "A duct detector only works if duct air really passes through it, so it must sample a representative part of the airstream and you must be able to prove the airflow through the sampling tubes. Its location is marked and recorded because it is usually hidden above a ceiling. A duct detector is there to control the spread of smoke through the air system. It is not a substitute for area detection, and it must be listed for the air velocity, temperature and humidity in that duct.",
      ref: "NFPA 72-2022 17.7.6.5"
    },
    {
      id: "1.1.1-23",
      type: "mc",
      q: "A wall-mounted strobe is called for in a basement storage room where the finished ceiling is only 78 in. above the floor. The lens cannot be put at the normal height. Where does it go?",
      opts: ["Within 6 in. of the ceiling","Exactly 80 in. above the floor, even if the ceiling has to be notched","Centered on the wall, about 39 in. above the floor","At manual fire alarm box height, 42 to 48 in."],
      a: 0,
      ex: "The normal rule puts the whole lens between 80 in. and 96 in. above the floor. Where a low ceiling makes 80 in. impossible, the appliance goes within 6 in. of the ceiling. The room size that the strobe is allowed to cover is also reduced, so tell the designer when you find a low ceiling that the drawings missed. A strobe mounted at mid-wall is easily blocked by shelving and stock.",
      ref: "NFPA 72-2022 18.5.5 (wall-mounted visual appliances, low ceilings)"
    },
    {
      id: "1.1.1-24",
      type: "mc",
      q: "A wall-mounted strobe goes in a hotel guest room (a sleeping area) with an 8 ft ceiling. With the lens in the required 80 to 96 in. band, the top of the lens ends up 10 in. below the ceiling. What minimum intensity does the strobe need?",
      opts: ["15 cd","75 cd","110 cd","177 cd"],
      a: 3,
      ex: "In sleeping areas the intensity depends on how far the lens is below the ceiling. If the top of the lens is 24 in. or more below the ceiling, 110 cd is enough. If it is closer than 24 in., it must be 177 cd, because a lens near the ceiling can end up inside the smoke layer. With an 8 ft ceiling a wall strobe at legal height is always within 24 in. of the ceiling, so 110 cd is the trap. 15 cd is the corridor figure.",
      ref: "NFPA 72-2022 18.5.5.10"
    },
    {
      id: "1.1.1-25",
      type: "num",
      q: "A spot-type heat detector has a listed spacing of 50 ft. It is going on a smooth ceiling 15 ft high. The ceiling-height reduction table gives a multiplier of 0.77 for that height. What is the greatest spacing allowed between detectors?",
      unit: "ft",
      a: 38.5,
      tol: 0.1,
      ex: "50 ft × 0.77 = 38.5 ft. Heat from a fire spreads out and cools as it rises, so heat detectors on ceilings higher than 10 ft, up to 30 ft, must be spaced closer than their listing. The trap is to use the listed 50 ft because the ceiling is smooth. This table is for heat detectors. Do not apply it to spot-type smoke detectors.",
      ref: "NFPA 72-2022 17.6.3.5.1; NFPA 72-2022 Table 17.6.3.5.1"
    },
    {
      id: "1.1.1-26",
      type: "mc",
      q: "The owner wants a manual station next to the kitchen exit that makes the fire alarm panel shut down a non-fire process. It is not a fire alarm box. What does NFPA 72 require so nobody mistakes it for one?",
      opts: ["It is mounted above 60 in. so it is out of normal reach","It is a color other than red and it is labeled for what it does","It is red, the same as the fire alarm boxes, so it is easy to find","It is hidden behind an unmarked cover"],
      a: 1,
      ex: "Manual devices that start signals other than fire alarm are allowed, but they must be told apart from manual fire alarm boxes by a color other than red and by labeling. In an emergency people pull the red box to report a fire. A red non-fire station would get pulled by mistake, or a real fire box would be ignored. Check the color and label of the device against the drawings before you mount it.",
      ref: "NFPA 72-2022 17.15.2"
    },
    {
      id: "1.1.1-27",
      type: "mc",
      q: "At a horn-strobe in the middle of a Class B NAC, a helper joins the incoming and outgoing + conductors in one wire connector with a short pigtail to the appliance's + terminal, and does the same for the − side. The circuit tests normal. Why must this be redone?",
      opts: ["If a pigtail breaks or comes off the terminal, the circuit is still continuous to the end-of-line device, so the panel shows no trouble while that appliance is dead","Wire connectors are not allowed anywhere on a fire alarm circuit","The pigtails add enough resistance to fail the voltage drop calculation","The appliance will flash out of synchronization with the others"],
      a: 0,
      ex: "Notification appliances have duplicate terminals or leads so that the incoming wire and the outgoing wire land separately. Then the circuit current passes through the appliance's terminals, and a loose connection opens the circuit and shows a trouble. With a pigtail, the circuit bypasses the appliance. The panel watches the wire but not the connection to the appliance. Land in and out on separate terminals, as the installation sheet shows.",
      ref: "NFPA 72-2022 18.3.6"
    },
    {
      id: "1.1.1-28",
      type: "mc",
      q: "The riser diagram marks a signaling line circuit with a pathway class that keeps working past a single open <b>and</b> past a single wire-to-wire short, and reports the fault. Which class is it?",
      opts: ["Class A","Class B","Class X","Class E"],
      a: 2,
      ex: "Class X has a redundant path and keeps operating past a single open or a single short circuit. In the field that means the loop returns to the panel and isolator modules or isolator bases are installed where the manufacturer and the drawings show. Class A is the trap: it also returns to the panel and survives a single open, but it is not required to survive a short. Class B has no redundant path, and Class E is not monitored at all.",
      ref: "NFPA 72-2022 12.3.7"
    },
    {
      id: "1.1.1-29",
      type: "mc",
      q: "To check your terminations, you lift one conductor off a detector base on an initiating device circuit. Within what time must the control unit indicate the trouble?",
      opts: ["10 seconds","200 seconds","90 seconds","24 hours"],
      a: 1,
      ex: "Fire alarm circuits are monitored for integrity. A single open or a single ground fault must be indicated within 200 seconds. So after you lift a wire, wait up to that long before you decide the circuit is not supervised. The 90 second figure is the trap: it is the limit for a waterflow switch to report flow. 10 seconds is the limit for an alarm to show at the panel after a device operates.",
      ref: "NFPA 72-2022 12.6 (monitoring for integrity)"
    },
    {
      id: "1.1.1-30",
      type: "multi",
      q: "The drawings call for total (complete) coverage with automatic detectors. Besides the rooms and corridors, which TWO of these spaces are part of total coverage unless a listed exception applies?",
      opts: ["The open parking lot outside the building","The accessible space above a suspended ceiling","The inside of every HVAC supply duct","The inside of closets","The roof surface outdoors"],
      a: [1,3],
      ex: "Total coverage means every room, hall, storage area, basement, attic and loft, the spaces above suspended ceilings, and the inside of closets, elevator shafts, enclosed stairways and chutes. Trainees often skip the closets and the space above the ceiling because they are not on the device count in their head. Duct detectors are a separate requirement for the air system, not part of area coverage. Outdoor areas are not included.",
      ref: "NFPA 72-2022 17.5.3.1"
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
    },
    {
      id: "1.1.2-16",
      type: "mc",
      q: "In the attic of an old building, your power-limited fire alarm cable has to pass open, individual power conductors that are not in a raceway and are not part of a cable assembly. There is no barrier. What minimum separation does the NEC require?",
      opts: ["0.25 in. (6 mm)","1 in. (25 mm)","2 in. (50 mm)","12 in. (300 mm)"],
      a: 2,
      ex: "Outside of enclosures, PLFA conductors stay at least 2 in. from light, power, Class 1 and non-power-limited conductors. The rule does not apply where one group or the other is in a raceway or in a cable such as metal-clad or nonmetallic-sheathed cable, or where a fixed nonconductor separates them. The 0.25 in. figure is the trap. It is for power conductors that enter an enclosure only to connect to the equipment.",
      ref: "NEC 2020 760.136(G)"
    },
    {
      id: "1.1.2-17",
      type: "multi",
      q: "Article 760 sends you to other parts of the NEC for some wiring. Which TWO statements are correct for the 2020 NEC?",
      opts: ["All of Article 300 applies to fire alarm circuits, the same as for power wiring","Optical fiber cable used for fire alarm circuits is installed under Article 770","Firestopping rules do not apply to power-limited fire alarm cable","A building control circuit, such as fan shutdown wiring that is tied to the fire alarm system but is not powered and controlled by it, is wired under Article 725","Optical fiber cable used for fire alarm circuits is installed under Article 725"],
      a: [1,3],
      ex: "Article 760 covers the circuits that the fire alarm system powers and controls. It points to Article 770 for optical fiber, and to Article 725 for building control circuits that are associated with the fire alarm system but not powered and controlled by it. Only the Article 300 sections that Article 760 names apply to fire alarm wiring, not the whole article. Firestopping is one of the sections it names, so it does apply.",
      ref: "NEC 2020 760.3(E); NEC 2020 760.3(F)"
    },
    {
      id: "1.1.2-18",
      type: "mc",
      q: "You pull fire alarm cable through holes bored in wood studs. At two studs the edge of the hole is only 3/4 in. from the face of the stud. What does the NEC require there?",
      opts: ["A steel plate at least 1/16 in. thick over the stud face at the cable, because the hole is closer than 1-1/4 in. to the edge","Nothing, because power-limited cable is exempt from physical protection rules","Two layers of electrical tape around the cable where it passes through the stud","A plastic bushing in the bored hole"],
      a: 0,
      ex: "Article 760 requires fire alarm cable to be protected as NEC 300.4 describes. Where a bored hole is less than 1-1/4 in. from the nearest edge of the wood member, a steel plate at least 1/16 in. thick must cover the cable so a drywall screw or nail cannot reach it. A screw through a fire alarm cable causes a ground fault or a short that can take days to find after the wall is closed.",
      ref: "NEC 2020 760.24(A); NEC 2020 300.4"
    },
    {
      id: "1.1.2-19",
      type: "num",
      q: "Several 14/2 fire alarm cables will share a 3/4 in. EMT. The EMT has a total internal area of 0.533 in². Each cable has a cross-sectional area of 0.049 in². For more than two cables the fill limit is 40 percent of the raceway area. What is the greatest number of these cables allowed in the conduit?",
      unit: "cables",
      a: 4,
      tol: 0,
      ex: "Usable area = 0.533 × 0.40 = 0.213 in². 0.213 ÷ 0.049 = 4.35, and you always round down, so 4 cables. For fill, a multiconductor cable is counted as one conductor using its actual outside dimensions (for an oval cable, use the wider dimension as the diameter). The trap is to divide the full 0.533 in² by the cable area, which gives 10 cables. That many would jam in the pull and damage the jackets.",
      ref: "NEC 2020 760.3(J); NEC 2020 300.17; NEC 2020 Chapter 9 (raceway fill tables and notes)"
    },
    {
      id: "1.1.2-20",
      type: "mc",
      q: "Fire alarm cable runs exposed above a ceiling, then drops down a wall inside a short length of EMT that protects it from damage, down to a pull station box. What does the NEC require at the open top end of the EMT?",
      opts: ["A junction box, because cable may never enter open conduit","A pull string left in place for future cables","A ground wire spliced to the cable's drain wire","A bushing or fitting that protects the cable from abrasion"],
      a: 3,
      ex: "Where cable enters or leaves a raceway that is used for support or protection, a bushing or fitting is required on the end so the cut edge of the tubing does not wear through the jacket. A box is not required at that end. The cable moves a little every time someone works in the ceiling, and a sharp EMT edge will find the conductor in time. That shows up later as an intermittent ground fault.",
      ref: "NEC 2020 760.3(K); NEC 2020 300.15(C)"
    },
    {
      id: "1.1.2-21",
      type: "mc",
      q: "A signaling line circuit must go from the main building to a detached garage through underground PVC conduit. The helper plans to pull the same FPLP cable used indoors, because 'it is the best rated cable on the truck'. What is the problem?",
      opts: ["FPLP may only be used in plenums","The inside of an underground raceway is a wet location, so the cable must be identified for wet locations","Power-limited cable may never be installed in PVC conduit","There is no problem, as long as both ends of the conduit are sealed"],
      a: 1,
      ex: "Underground conduit fills with water from condensation and seepage, so the NEC treats its interior as a wet location. Cable installed there must be identified for wet locations. The FPLP marking is about flame spread and smoke, for use in plenums. It says nothing about moisture, and an ordinary indoor jacket soaks up water and gives ground faults and data trouble. Order cable that carries both the fire alarm listing the job needs and a wet-location rating.",
      ref: "NEC 2020 760.3(D)"
    },
    {
      id: "1.1.2-22",
      type: "num",
      q: "A NAC is wired with 14 AWG solid copper (3.07 Ω per 1,000 ft). The first appliance is 100 ft from the panel and the second is 100 ft farther. Each draws 0.2 A. The worst-case panel voltage is 20.4 V. Working segment by segment (point-to-point), what is the voltage at the second appliance? Answer to two decimal places.",
      unit: "V",
      a: 20.03,
      tol: 0.02,
      ex: "Each 100 ft segment has 2 × 100 ÷ 1,000 × 3.07 = 0.614 Ω of wire. The first segment carries both appliances: 0.4 A × 0.614 Ω = 0.246 V. The second segment carries only the last one: 0.2 A × 0.614 Ω = 0.123 V. 20.4 − 0.246 − 0.123 = 20.03 V. The trap is to push the full 0.4 A through all 200 ft, which gives 19.91 V. That lump-sum method is safe but it overstates the drop.",
      ref: "NEC 2020 Chapter 9, Table 8; Ugly's Electrical References 2020 (Ohm's law, voltage drop)"
    },
    {
      id: "1.1.2-23",
      type: "mc",
      q: "A four-conductor FPL cable has red, black, white and green conductors. The device needs all four for signal and power. May the green conductor be used as an ungrounded signal conductor?",
      opts: ["Yes. The NEC has an exception that permits green insulation for signal conductors in FPL, FPLR and FPLP cable and their substitutes","No. Green may only ever be an equipment grounding conductor","Only if it is re-marked with red tape at every termination","Only on circuits below 12 V"],
      a: 0,
      ex: "In power wiring, green is reserved for the equipment grounding conductor. Article 760 brings that identification rule in, but with an exception: in the power-limited fire alarm cable types and their permitted substitutes, a green conductor may be an ungrounded signal conductor. Without the exception a normal four-conductor fire alarm cable could not be used. This is a good open-book item, because most electricians will tell you the answer is no.",
      ref: "NEC 2020 760.3(O) (Exception)"
    },
    {
      id: "1.1.2-24",
      type: "mc",
      q: "The wiring label inside a power supply cabinet marks every output 'power-limited' except one 24 V output, which is marked 'non-power-limited'. That output must feed a device down the hall. A helper wants to pull it as FPL in the same cable bundle and the same conduit as the power-limited circuits. What do you tell them?",
      opts: ["That is fine, because all the circuits are 24 V","That is fine, as long as the cable is FPLP","That is fine, if the circuit is fused at 2 A in the field","No. That circuit is non-power-limited, so it is wired by the non-power-limited rules and kept out of the cables and raceways that hold power-limited circuits"],
      a: 3,
      ex: "The marking on the equipment tells you which circuits are power-limited. The voltage does not. A non-power-limited output can deliver enough current to overheat small cable, so it gets non-power-limited wiring methods. Power-limited conductors may not share a cable, raceway or enclosure with non-power-limited conductors unless a barrier or one of the listed exceptions applies. Read the wiring label before you pull.",
      ref: "NEC 2020 760.124; NEC 2020 760.136(A)"
    },
    {
      id: "1.1.2-25",
      type: "num",
      q: "A panel's manual limits the wire resistance of a signaling line circuit to 40 Ω total, out and back. The circuit is 18 AWG solid copper (7.77 Ω per 1,000 ft), run as one two-conductor path with no branches. What is the longest distance from the panel to the last device? Answer to the nearest foot.",
      unit: "ft",
      a: 2574,
      tol: 2,
      ex: "Two conductors means 2 × 7.77 = 15.54 Ω for every 1,000 ft of cable run. 40 ÷ 15.54 × 1,000 = 2,574 ft. If you forget that the limit counts both conductors, you get 5,148 ft and a loop with twice the allowed resistance. Devices at the far end then drop off line or answer late. If the run is longer, go up a wire size or follow the manual's wiring chart.",
      ref: "NEC 2020 Chapter 9, Table 8; manufacturer's installation instructions"
    },
    {
      id: "1.1.2-26",
      type: "multi",
      q: "A note on the riser diagram calls for pathway survivability Level 2 for the notification circuits to the upper floors. Which TWO installation methods meet Level 2 in NFPA 72-2022?",
      opts: ["Standard FPLP cable run exposed above the ceiling","2-hour fire-rated circuit integrity (CI) or fire-resistive cable","Standard cable in metal raceway in a fully sprinklered building","Standard cable inside a 2-hour fire-rated enclosure or protected area","Any cable with a red jacket"],
      a: [1,3],
      ex: "Level 2 is 2-hour protection: 2-hour CI or fire-resistive cable, a 2-hour fire-rated cable system, or a 2-hour rated enclosure or protected area. Metal raceway in a fully sprinklered building is Level 1, which is the tempting wrong choice. Level 0 needs no protection, and the 2022 edition has Levels 0 through 4. CI cable only keeps its rating if it is installed exactly as its listing says, including its supports and raceway.",
      ref: "NFPA 72-2022 12.4.3; NFPA 72-2022 12.4 (pathway survivability)"
    },
    {
      id: "1.1.2-27",
      type: "mc",
      q: "Listed power-limited fire alarm cable (FPL, FPLR, FPLP) must have a voltage rating of at least how much?",
      opts: ["150 V","300 V","600 V","1,000 V"],
      a: 1,
      ex: "The listing rules in Part IV of Article 760 call for PLFA cable rated not less than 300 V. The 600 V choice is the trap: that is the insulation level for conductors on non-power-limited circuits and for ordinary building wire. The difference matters when someone suggests that 300 V fire alarm cable can share a raceway with power conductors. It cannot.",
      ref: "NEC 2020 760.179(C)"
    },
    {
      id: "1.1.2-28",
      type: "mc",
      q: "Which wiring rules apply to the 120 VAC conductors that run from the breaker to the supply terminals of a power-limited fire alarm control unit?",
      opts: ["The power-limited rules, so FPL cable may be used for the 120 V feed","No rules, because the control unit is listed","The same NEC Chapter 1 through 4 rules as any other power circuit","Article 725, as a Class 2 circuit"],
      a: 2,
      ex: "Only the load side of the power-limited source is power-limited. The conductors on the supply side are a normal branch circuit, installed with a Chapter 3 wiring method such as EMT or MC cable and sized and protected like any power circuit. FPL cable is not a wiring method for 120 V power. This is also why the AC enters the cabinet through its own knockout, away from the field wiring.",
      ref: "NEC 2020 760.127"
    },
    {
      id: "1.1.2-29",
      type: "num",
      q: "Use the circular-mil voltage drop formula from Ugly's: VD = 2 × K × I × L ÷ CM. A NAC draws 1.5 A, the one-way length is 300 ft, the wire is 14 AWG copper (4,110 circular mils) and K = 12.9 for copper. What is the voltage drop? Answer to two decimal places.",
      unit: "V",
      a: 2.82,
      tol: 0.02,
      ex: "VD = 2 × 12.9 × 1.5 × 300 ÷ 4,110 = 11,610 ÷ 4,110 = 2.82 V. The 2 is there because current goes out and comes back, and L is the one-way length. Leaving out the 2 gives 1.41 V, half the real drop. The answer is a little higher than the Table 8 method for solid wire (2.76 V), because K = 12.9 works out to about 3.14 Ω per 1,000 ft for 14 AWG, which is the stranded-wire figure. Use the method the question or your company asks for.",
      ref: "NEC 2020 Chapter 9, Table 8; Ugly's Electrical References 2020 (voltage drop formulas)"
    },
    {
      id: "1.1.2-30",
      type: "mc",
      q: "The control unit's installation manual calls for shielded cable on the signaling line circuit. It says to keep the shield continuous through every device, insulate it from the boxes, and connect it to earth at the panel only. You find a helper landing the drain wire on the grounded backbox at each device. What should you do?",
      opts: ["Leave it, because more ground connections give better shielding","Leave it, but also remove the connection at the panel","Cut the drain wire off at every device and leave the shield open between devices","Have it redone to the manual: listed equipment is installed by the instructions in its listing"],
      a: 3,
      ex: "The NEC requires listed equipment to be installed and used according to the instructions that are part of its listing, so the manual decides how the shield is treated. A shield grounded at many points becomes a path for stray current between boxes at different potentials, and that puts noise on the data loop and can show as ground faults. Cutting the shield between devices leaves most of the run unshielded. Splice the drain through, tape or sleeve it, and land it only where the manual says.",
      ref: "NEC 2020 110.3(B); manufacturer's installation instructions"
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
    },
    {
      id: "1.1.3-16",
      type: "mc",
      q: "You need to get a drill and a box of cable up an extension ladder to a mezzanine. Which way of climbing meets OSHA's ladder rules?",
      opts: ["Carry the drill in one hand and the cable box in the other, and lean into the rungs","Climb facing away from the ladder so you can see where the load is going","Face the ladder, keep at least one hand on it, and bring the load up in a tool belt or on a hand line","Tuck the cable box under one arm and slide the other hand up the rail"],
      a: 2,
      ex: "OSHA requires you to face the ladder going up and down, to use at least one hand to grasp it, and not to carry anything that could make you lose your balance. A bulky box takes away your grip and blocks your view of the rungs. Put small tools in a belt and pull heavy or bulky items up on a hand line after you are off the ladder. The tempting mistake is 'just one trip' with both hands full.",
      ref: "OSHA 29 CFR 1926.1053(b)(20), (b)(21) and (b)(22) (study only)"
    },
    {
      id: "1.1.3-17",
      type: "mc",
      q: "The only place to set your stepladder to reach an exit-door magnetic lock is right in front of the door, in a busy corridor. What does OSHA require?",
      opts: ["Secure the ladder so it cannot be knocked out of place, or barricade the area to keep people and the door away from it","Nothing extra, as long as you work quickly","Have a co-worker shout a warning each time someone comes near","Hang a 'Men Working' tag on the ladder and carry on"],
      a: 0,
      ex: "A ladder in a doorway, passageway or driveway can be struck by a door or by traffic. OSHA requires it to be secured against being displaced, or a barricade to keep traffic away. In practice that means blocking or locking the door, coning off the corridor, or posting a person at the door. A tag or a shout does not stop a door from swinging into the ladder.",
      ref: "OSHA 29 CFR 1926.1053(b)(8) (study only)"
    },
    {
      id: "1.1.3-18",
      type: "mc",
      q: "A technician weighs 235 lb. He wears a 20 lb tool belt and will carry a 30 lb power supply up a stepladder. Which is the lightest ladder duty rating that covers this load?",
      opts: ["Type III, 200 lb","Type II, 225 lb","Type I, 250 lb","Type IA, 300 lb"],
      a: 3,
      ex: "The load on a ladder is the worker plus everything the worker wears and carries: 235 + 20 + 30 = 285 lb. That is more than a Type I ladder's 250 lb, so the lightest rating that covers it is Type IA at 300 lb. The trap is matching the rating to body weight alone, which would pick Type I. OSHA does not allow a ladder to be loaded beyond the load it was built for.",
      ref: "OSHA 29 CFR 1926.1053(b)(3); OSHA Fact Sheet FS-3662, Safe Use of Stepladders (ladder duty ratings) (study only)"
    },
    {
      id: "1.1.3-19",
      type: "mc",
      q: "On a construction site you are working from a rolling scaffold with the platform 8 ft above the floor. The scaffold has no guardrails. Does OSHA's scaffold rule require fall protection at this height?",
      opts: ["Yes, because every construction fall hazard is covered at 6 ft","No. The scaffold rule requires fall protection when the platform is more than 10 ft above a lower level","Yes, because scaffolds need it at 4 ft","No. Scaffolds never need fall protection if the wheels are locked"],
      a: 1,
      ex: "Scaffolds have their own trigger height: fall protection is required on a scaffold more than 10 ft above a lower level. The 6 ft figure is the general construction rule for unprotected sides and edges, and 4 ft is the general industry figure, so both are easy to mix in here. This is OSHA's minimum. Your employer or the general contractor may require guardrails at any height, and their rule is the one you follow on site.",
      ref: "OSHA 29 CFR 1926.451(g)(1) (study only)"
    },
    {
      id: "1.1.3-20",
      type: "multi",
      q: "You will wear a personal fall arrest system (full body harness, lanyard and anchor) on a construction site. Which TWO statements match OSHA's rules?",
      opts: ["The anchorage must be able to support at least 5,000 lb for each worker attached to it","An anchor rated for 1,000 lb is enough, because no worker weighs that much","A free fall of up to 12 ft is acceptable if the lanyard has a shock absorber","The system must be rigged so you cannot free fall more than 6 ft or strike a lower level","Conduit, sprinkler pipe or a ceiling grid wire is an acceptable anchor if it feels solid"],
      a: [0,3],
      ex: "A falling body loads the anchor with far more than body weight, which is why OSHA calls for 5,000 lb per attached worker (or an engineered system designed by a qualified person). The system must also be rigged to limit free fall to 6 ft and keep you from hitting anything below. Conduit, sprinkler pipe and grid wire are not anchors: they were never built to stop a fall. Ask the competent person on site where the approved anchor points are.",
      ref: "OSHA 29 CFR 1926.502(d)(15) and (d)(16)(iii) (study only)"
    },
    {
      id: "1.1.3-21",
      type: "mc",
      q: "A guardrail protects the open edge of a mezzanine where you are installing devices on a construction site. What height does OSHA give for the top rail above the walking surface?",
      opts: ["24 in., plus or minus 3 in.","30 in., plus or minus 3 in.","36 in., plus or minus 3 in.","42 in., plus or minus 3 in."],
      a: 3,
      ex: "The top edge of a construction guardrail is 42 in. above the walking or working level, plus or minus 3 in., so anything from 39 in. to 45 in. passes. A rail much lower than that sits below a standing worker's center of gravity and can tip a person over it. If you find a rail that is low, loose or missing, stay back from the edge and report it. Do not work around it.",
      ref: "OSHA 29 CFR 1926.502(b)(1) (study only)"
    },
    {
      id: "1.1.3-22",
      type: "mc",
      q: "Your crew core-drills a 10 in. hole through a floor slab for a riser conduit, and the conduit will not arrive until next week. How does OSHA expect the hole to be covered?",
      opts: ["Lay a loose scrap of cardboard or ceiling tile over it","Use a cover that can support at least twice the load that could be put on it, secure it so it cannot move, and mark it 'HOLE' or 'COVER' or color code it","Put a traffic cone next to it","Leave it open, because a 10 in. hole is too small for a person to fall through"],
      a: 1,
      ex: "A floor hole is a trip hazard, a leg-through hazard, and a path for tools to fall on people below. OSHA requires a cover that holds at least twice the weight of the workers, equipment and materials that may be on it, that is secured against being moved, and that is color coded or marked 'HOLE' or 'COVER'. A loose scrap gets kicked aside, and a cone does not stop a foot. Remember the same opening must be firestopped once the conduit is in.",
      ref: "OSHA 29 CFR 1926.502(i) (study only)"
    },
    {
      id: "1.1.3-23",
      type: "mc",
      q: "You are replacing the power supply board in a fire alarm control unit. The 120 VAC breaker is off, and your lock and tag are on it. What else must be done before you put your hands on the board?",
      opts: ["Nothing. The lock on the breaker makes the cabinet safe","Press the panel's silence button so it stops beeping","Disconnect the standby batteries, then check with a meter that the board is de-energized","Put a jumper across the battery terminals to drain them quickly"],
      a: 2,
      ex: "A fire alarm panel has two power sources. Locking out the AC leaves the batteries feeding the board, and a battery set can deliver enough current to burn you, weld a tool or damage the new board. Lockout rules require stored energy to be disconnected or made safe, and the isolation to be verified before work starts. Shorting the batteries with a jumper is dangerous: it can cause burns, fire or a ruptured battery.",
      ref: "OSHA 29 CFR 1910.147(d)(5) and (d)(6); 29 CFR 1910.333(b)(2) (study only)"
    },
    {
      id: "1.1.3-24",
      type: "mc",
      q: "You are mounting an outdoor horn-strobe from an extension ladder near an unguarded, energized overhead power line of 50 kV or less. You are not a qualified line worker. How far must you, your ladder and anything you are holding stay from the line?",
      opts: ["At least 10 ft","At least 3 ft","At least 5 ft","No set distance, as long as the ladder is fiberglass"],
      a: 0,
      ex: "For an unqualified person, OSHA sets a 10 ft minimum from unguarded energized overhead lines of 50 kV or less, and more above that voltage. The distance covers you and the longest conductive thing you could touch the line with, such as a ladder or a length of conduit. A fiberglass ladder helps, but it does not shrink the distance: you, your tools and wet or dirty rails can still conduct. If the work cannot be done from 10 ft away, stop and tell your supervisor.",
      ref: "OSHA 29 CFR 1910.333(c)(3)(i)(A) (study only)"
    },
    {
      id: "1.1.3-25",
      type: "mc",
      q: "The extension cord for your hammer drill has a cut in the jacket near the plug, and you can see the insulated conductors inside. What is the right move?",
      opts: ["Wrap the cut tightly with electrical tape and keep using it","Use it only on dry floors","Plug it into a GFCI receptacle and carry on","Take it out of service and get a good cord"],
      a: 3,
      ex: "OSHA's construction rule is short: worn or frayed electric cords and cables are not to be used. Tape hides the damage but does not restore the jacket, and the next pull across a stud can cut through to copper. A GFCI is required protection on temporary power, but it is a backup, not permission to use damaged equipment. Tag the cord so nobody else picks it up.",
      ref: "OSHA 29 CFR 1926.416(e)(1) (study only)"
    },
    {
      id: "1.1.3-26",
      type: "mc",
      q: "Testing horns all day is loud work. In general industry, at what 8-hour time-weighted average noise level must an employer start a hearing conservation program?",
      opts: ["70 dBA","85 dBA","90 dBA","115 dBA"],
      a: 1,
      ex: "85 dBA averaged over 8 hours is OSHA's action level: at or above it, the employer must run a hearing conservation program with monitoring, hearing tests, hearing protection and training. The tempting wrong answer is 90 dBA, which is the permissible exposure limit for 8 hours, a different and higher line. Fire alarm horns are far above both at close range, so wear hearing protection whenever you sound appliances.",
      ref: "OSHA 29 CFR 1910.95(c)(1) and Table G-16 (study only)"
    },
    {
      id: "1.1.3-27",
      type: "mc",
      q: "Hard hats carry an electrical class marking from the ANSI standard that OSHA refers to. Which class is proof-tested at the highest voltage, 20,000 V?",
      opts: ["Class C","Class G","Class E","Any vented hard hat"],
      a: 2,
      ex: "Class E (electrical) helmets are proof-tested at 20,000 V. Class G (general) helmets are proof-tested at 2,200 V. Class C (conductive) helmets give no electrical protection at all, and the easy memory slip is to read the C as 'certified'. Many vented hats are Class C. The test voltage is a test value, not a promise that the hat makes live work safe.",
      ref: "OSHA 29 CFR 1926.100 and 29 CFR 1910.135 (head protection; ANSI Z89.1 classes) (study only)"
    },
    {
      id: "1.1.3-28",
      type: "mc",
      q: "You are pulling cable above the ceiling of a school built in 1972. The pipe insulation in your path is old, white and crumbling. Nobody has told you what it is. What do you do?",
      opts: ["Stop, leave it undisturbed, and report it. Treat it as asbestos until the owner's survey or a test shows otherwise","Brush the loose material off so the cable lies flat","Put on a paper dust mask and pull the cable through quickly","Wet it with a spray bottle and cut away what is in the way"],
      a: 0,
      ex: "OSHA treats thermal system insulation and sprayed or troweled surfacing material in buildings built no later than 1980 as presumed asbestos-containing material, unless it has been shown not to be. Disturbing it releases fibers that you and the building's occupants then breathe. A paper dust mask does not stop asbestos fibers, and removing it is work for trained and equipped crews only. Stop, back out, and tell your supervisor so the owner's asbestos survey can be checked.",
      ref: "OSHA 29 CFR 1926.1101 (asbestos) (study only)"
    },
    {
      id: "1.1.3-29",
      type: "mc",
      q: "A co-worker brushes a forearm against a hot heat gun nozzle. The skin is red and blistering, and the burn is smaller than a playing card. What first aid does the Red Cross teach?",
      opts: ["Pack ice directly on the burn","Spread butter or grease on it to seal out the air","Cool the burn right away under cool, clean running water, then cover it loosely with a clean dressing","Pop the blisters and wrap the arm tightly"],
      a: 2,
      ex: "Cooling a heat burn right away with cool running water stops the burning and eases pain. How long? Red Cross publications do not all give the same figure: its scientific advisory on burn cooling says a minimum of 10 minutes and ideally 20, and its public burns page gives a shorter range. Aim for at least 10 minutes. Ice can damage the skin further, grease holds the heat in, and broken blisters invite infection. Call 9-1-1 for large or deep burns, for burns to the face, hands or genitals, and for any electrical burn, because an electrical burn can hide deep injury.",
      ref: "American Red Cross First Aid/CPR/AED manual; Red Cross Scientific Advisory Council, Burn Cooling advisory (study only)"
    },
    {
      id: "1.1.3-30",
      type: "multi",
      q: "A co-worker cuts a forearm badly on the edge of a sheet-metal back box. Blood is flowing steadily and will not stop. Which TWO actions does the Red Cross teach first?",
      opts: ["Lift the dressing every minute to see whether the bleeding has stopped","Call 9-1-1, or have someone else call","Press firmly and directly on the wound with a clean dressing or cloth, and keep the pressure on","Rinse the wound under a tap for several minutes before doing anything else","Give the person a drink of water and have them walk to the truck"],
      a: [1,2],
      ex: "Blood that flows steadily or spurts is life-threatening bleeding. Get help coming and get firm, direct pressure on the wound at once, and hold it until the bleeding stops or trained help takes over. Lifting the dressing to look breaks the clot that is forming: if blood soaks through, press harder and add more material on top. A tourniquet is for a bleeding arm or leg when one is on hand and you are trained to use it.",
      ref: "American Red Cross First Aid/CPR/AED manual (study only)"
    }
  ]
};
