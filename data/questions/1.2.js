// NICET FAS Level I · 1.2 Maintenance. Questions keyed by task id.
// Never reuse or renumber an id: progress is saved by id. See README for the format.
export default {
  "1.2.1": [
    {
      id: "1.2.1-01",
      type: "mc",
      q: "You are using NFPA 72-2022 to look up how often a device must be tested. Where are the test frequencies?",
      opts: ["Table 14.4.5","Table 14.4.3.2, in the same table as the test methods","Table 14.3.1","Chapter 10, with the power supply rules"],
      a: 1,
      ex: "In the 2022 edition one table, Table 14.4.3.2, gives both the test method and the periodic frequency for each component. Table 14.3.1 is the visual inspection table, so it is the wrong table for a functional test. The trap is Table 14.4.5: that is a number from much older editions, and in 2022 section 14.4.5 covers single- and multiple-station alarms.",
      ref: "NFPA 72-2022 Table 14.4.3.2"
    },
    {
      id: "1.2.1-02",
      type: "mc",
      q: "How often does NFPA 72-2022 call for a visual inspection of system smoke detectors, heat detectors and manual fire alarm boxes in a commercial building?",
      opts: ["Quarterly","Annually","Semiannually","Monthly"],
      a: 2,
      ex: "Table 14.3.1 lists these initiating devices for a semiannual visual inspection: you verify location and condition. Annually is the tempting answer because that is how often they are functionally <i>tested</i>, which is a different table. Quarterly applies to radiant energy (flame) detectors, where a blocked field of view matters more.",
      ref: "NFPA 72-2022 Table 14.3.1(17)"
    },
    {
      id: "1.2.1-03",
      type: "mc",
      q: "A new system was accepted in June 2025. When is the first smoke detector sensitivity check due, and what is the schedule after that?",
      opts: ["Within 5 years of installation, then every 5 years","At every annual test","Within 2 years of installation, then every year","Within 1 year of installation, then every alternate year"],
      a: 3,
      ex: "Sensitivity is checked within 1 year after installation and every alternate year after that, so by June 2026 and then 2028. After the second required check, if the detectors have stayed in their listed range, the interval may be stretched to a maximum of 5 years. The trap is jumping straight to 5 years: that is an extension you earn with good records, not the starting schedule.",
      ref: "NFPA 72-2022 14.4.4.3"
    },
    {
      id: "1.2.1-04",
      type: "multi",
      q: "Which TWO of these are acceptable ways to check smoke detector sensitivity?",
      opts: ["Spraying canned test aerosol until the detector alarms","The manufacturer's calibrated sensitivity test instrument","Removing the detector head and confirming the panel shows a trouble","Listed control equipment arranged to read each detector's sensitivity","Looking into the chamber for dust"],
      a: [1,3],
      ex: "A sensitivity test must show the detector is inside its listed and marked range, so it needs a calibrated method. The manufacturer's calibrated instrument and listed control equipment that reads sensitivity (common on addressable panels) both do that. Ordinary canned aerosol only proves the detector goes into alarm. It gives no measurement, so it is a functional test, not a sensitivity test. Pulling the head tests circuit supervision, and looking for dust measures nothing. Note that a few manufacturers' calibrated test instruments are operated with a magnet, so follow the manufacturer's published instructions for the model in front of you.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17); 14.4.4.3"
    },
    {
      id: "1.2.1-05",
      type: "mc",
      q: "During the sensitivity check, the panel reports one smoke detector outside its listed sensitivity range. What does NFPA 72 require?",
      opts: ["Reprogram the panel so the reading is ignored until the next test","Clean and recalibrate the detector, or replace it","Note it on the report and check it again in 2 years","Swap it with a detector from a less critical room"],
      a: 1,
      ex: "A detector outside its listed range is either cleaned and recalibrated, or replaced. One that has drifted sensitive causes nuisance alarms, and one that has drifted the other way responds late to a real fire. Writing it up and leaving it is the common mistake: the detector is deficient today, not in 2 years.",
      ref: "NFPA 72-2022 14.4.4.3"
    },
    {
      id: "1.2.1-06",
      type: "mc",
      q: "Which method meets the annual functional test for a spot-type system smoke detector?",
      opts: ["With the detector in place, apply smoke or a listed aerosol acceptable to the manufacturer so it enters the sensing chamber, and confirm the alarm","Hold a magnet to the test spot and confirm the alarm","Confirm the detector LED is blinking in standby","Remove the head and confirm the panel shows a trouble"],
      a: 0,
      ex: "The functional test must prove that smoke can get from the room, through the vents, into the sensing chamber and cause an alarm. Smoke or a listed product acceptable to the manufacturer does that with the detector in place. A magnet only tests the electronics, so a detector with blocked vents or a dust cover still on would pass. Pulling the head tests circuit supervision, not detection.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "1.2.1-07",
      type: "mc",
      q: "Which heat detector is tested in place with a listed heat source?",
      opts: ["A fixed-temperature, nonrestorable line-type detector","A fixed-temperature, nonrestorable spot-type detector","Any heat detector, as long as the heat gun is listed","A restorable spot-type fixed-temperature or rate-of-rise detector"],
      a: 3,
      ex: "Restorable spot-type heat detectors get a heat test with a listed and labeled heat source, or as the manufacturer's instructions say. Nonrestorable detectors are never heat tested, because the test destroys the element. A nonrestorable line-type detector is tested mechanically and electrically, and its loop resistance is measured and compared with the acceptance value. On a combination rate-of-rise and fixed-temperature unit, take care not to trip the nonrestorable fixed element.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "1.2.1-08",
      type: "num",
      q: "A warehouse has 400 fixed-temperature, nonrestorable spot-type heat detectors that have reached 15 years from installation. The owner chooses laboratory testing over replacing them all. How many detectors must be removed and sent for testing in the first round?",
      unit: "detectors",
      a: 8,
      tol: 0,
      ex: "After 15 years the choice is to replace all of them or have 2 detectors per 100 laboratory tested. 400 ÷ 100 = 4, and 4 × 2 = 8. The 8 that are removed are replaced with new detectors. If any of them fails, more must be pulled and tested to find out whether the problem is general or local.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "1.2.1-09",
      type: "mc",
      q: "At a semiannual test, the 12 V VRLA batteries are fully charged and connected to the charger. One battery reads 13.05 V across its terminals. What does NFPA 72-2022 call for?",
      opts: ["Replace the battery, because the unit reads less than 13.26 V","Nothing, because any reading above 12.0 V passes","Replace that one unit only if it is also warm","Turn the charger up until that unit reads 13.26 V"],
      a: 0,
      ex: "In the cell/unit voltage test, each 12 V unit is measured while fully charged and on the charger. The battery is replaced when any unit measures less than 13.26 V. The trap is thinking 12 V or more is healthy: 12 V is the nominal rating, and a unit on float charge should sit well above it. Adjusting the charger belongs to the charger test, and it does not fix a weak unit.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "1.2.1-10",
      type: "mc",
      q: "You open the panel and measure 77°F inside the enclosure. With an infrared thermometer at the negative terminals, battery A reads 88°F and battery B reads 97°F. What do you do?",
      opts: ["Replace both, because both are above ambient","Replace neither, because both are under 100°F","Replace battery B, because it is more than 18°F above the enclosure ambient","Replace battery A, because it is the cooler, weaker unit"],
      a: 2,
      ex: "The temperature test compares each unit with the ambient temperature inside the enclosure, measured as soon as the door is opened. A unit more than 18°F (10°C) above ambient is replaced. Battery A is 88 − 77 = 11°F above, which passes. Battery B is 97 − 77 = 20°F above, which fails. There is no fixed 100°F limit: the difference is what counts.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "1.2.1-11",
      type: "mc",
      q: "The system batteries are 3 years old. The owner pays for a load test instead of new batteries, and the result is 78 percent of rated capacity. What is required?",
      opts: ["Retest in another 3 years","Replace the batteries now","Replace them at the next scheduled test","Recharge for 24 hours and accept the batteries"],
      a: 1,
      ex: "Every 3 years VRLA batteries are either replaced or load tested. If the load test shows capacity at or below 80 percent, the battery is replaced. Waiting until the next scheduled test is allowed only for a result that is above 80 percent but below 85 percent. At 78 percent these batteries can no longer be trusted to carry the standby and alarm load.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "1.2.1-12",
      type: "multi",
      q: "Which TWO steps are part of the annual secondary (standby) power test on a general alarm system?",
      opts: ["Disconnect primary (AC) power and confirm the panel shows the required trouble","Run on battery for a full 24 hours, then sound the alarm","Run the system in alarm on battery for at least 5 minutes","Run the system in alarm on battery for at least 15 minutes","Skip the test if the batteries are less than 3 years old"],
      a: [0,2],
      ex: "The annual test removes primary power, confirms the loss-of-power trouble, and runs a general alarm system in alarm for at least 5 minutes. Then primary power is reconnected. The 15 minute figure is for emergency voice systems. The 24 hours is the design standby capacity that the battery calculation proves; it is not repeated every year. The 3 year interval is for the battery replace-or-load-test item, not for this test.",
      ref: "NFPA 72-2022 Table 14.4.3.2(8)"
    },
    {
      id: "1.2.1-13",
      type: "multi",
      q: "You are about to start the annual test in an office building that is monitored by a central station. Which TWO notifications does NFPA 72 Chapter 14 expect?",
      opts: ["Tell the building occupants and everyone who receives the system's signals before testing starts","No notice is needed if the horns and strobes are bypassed","Tell the same people when testing is finished","Give the AHJ 8 hours' written notice before every periodic test","Only the supervising station needs to know, because it dispatches the fire department"],
      a: [0,2],
      ex: "Before testing, the occupants and all persons and facilities that receive alarm, supervisory or trouble signals are told, so nobody responds to a test as if it were real. When testing ends they are told again, so the next signal is treated as real. Bypassing the appliances does not stop signals going off premises. The 8 hours is from the impairment rules in Chapter 10, not a testing notice.",
      ref: "NFPA 72-2022 Ch 14 (notification before and after testing)"
    },
    {
      id: "1.2.1-14",
      type: "mc",
      q: "An annual test is completed in March 2026. The next annual test is done on schedule in March 2027. Until when must the owner keep the March 2026 test record?",
      opts: ["March 2028","March 2027","March 2031","For the life of the system"],
      a: 0,
      ex: "Inspection, testing and maintenance records are kept until the next test and for 1 year after that. The next test is March 2027, and one more year is March 2028. Stopping at the next test is the usual mistake. 'Life of the system' applies to the design and record documents, not to each periodic test report.",
      ref: "NFPA 72-2022 14.6.2.1"
    },
    {
      id: "1.2.1-15",
      type: "num",
      q: "The site-specific software is changed to add a new elevator recall function. All affected functions are tested 100 percent. The system also has 640 initiating devices that the change does not directly affect. How many of those must be tested as well?",
      unit: "devices",
      a: 50,
      tol: 0,
      ex: "Reacceptance after a software change needs 10 percent of the initiating devices not directly affected, up to a maximum of 50 devices. 640 × 0.10 = 64, which is over the cap, so 50 are tested. Forgetting the 50 device cap is the trap. This sample shows the change did not disturb parts of the program nobody meant to touch.",
      ref: "NFPA 72-2022 14.4.2.4"
    }
  ],
  "1.2.2": [
    {
      id: "1.2.2-01",
      type: "mc",
      q: "A sprinkler control valve is left half closed after plumbing work. Its valve supervisory (tamper) switch is wired to the fire alarm system. What kind of signal should the panel show?",
      opts: ["Alarm","Trouble","Supervisory","Pre-alarm"],
      a: 2,
      ex: "A supervisory signal means a fire protection system or feature is off-normal and may not work, here a sprinkler valve that is not fully open. A trouble signal means a fault in the fire alarm system itself: its wiring, power or equipment. Calling the closed valve a 'trouble' is the classic mix-up, and it sends the wrong trade to fix it.",
      ref: "NFPA 72-2022 10.14 (supervisory signals)"
    },
    {
      id: "1.2.2-02",
      type: "multi",
      q: "Which TWO of these conditions should show at the panel as a <b>trouble</b> signal?",
      opts: ["Loss of primary (AC) power to the control unit","A sprinkler control valve that is closed","An open in the wiring of a notification appliance circuit","Water flowing in the sprinkler riser","Low air pressure on a dry-pipe sprinkler system"],
      a: [0,2],
      ex: "Trouble signals report faults in the fire alarm system itself. Loss of AC power and an open conductor are both faults in the system's own power and wiring. A closed valve and low air pressure are off-normal conditions in the sprinkler system, so they are supervisory. Waterflow is an alarm.",
      ref: "NFPA 72-2022 10.15 (trouble signals); 12.6 (monitoring for integrity)"
    },
    {
      id: "1.2.2-03",
      type: "mc",
      q: "A ground fault trouble was silenced at the panel three days ago and never repaired. What should the panel's trouble sounder have done since then?",
      opts: ["Stayed silent until the panel is reset","Re-sounded at least once every 24 hours","Re-sounded once an hour","Changed over to the alarm signal after 24 hours"],
      a: 1,
      ex: "A silenced trouble that has not been cleared must re-sound at intervals of no more than 24 hours. Silencing is there to stop the noise while someone arranges the repair. It is not a way to live with the fault. If a panel stays quiet for days with an active trouble, the re-sound feature itself needs attention.",
      ref: "NFPA 72-2022 10.15.9"
    },
    {
      id: "1.2.2-04",
      type: "mc",
      q: "A conventional zone (2-wire Class B initiating device circuit) goes into alarm on a rainy night. No detector LED is latched and no pull station is operated. You find water in a junction box on that zone. What is the most likely cause?",
      opts: ["An open conductor, which a conventional panel reads as an alarm","A missing end-of-line resistor","A low battery at the panel","Water bridging the two conductors, which the panel reads as an alarm"],
      a: 3,
      ex: "On a conventional IDC, an initiating device signals an alarm by connecting the two conductors together. Water or a pinched cable that bridges the pair looks exactly the same to the panel, so it reports an alarm. An open or a missing end-of-line resistor stops the supervisory current and shows as a trouble, not an alarm. Dry or replace the wiring, then confirm the zone restores and test it.",
      ref: "Fire Alarm Signaling Systems, 4th ed. (initiating device circuits); NFPA 72-2022 12.6"
    },
    {
      id: "1.2.2-05",
      type: "mc",
      q: "Which pathway class keeps operating past a single open <b>and</b> past a single short circuit?",
      opts: ["Class X","Class A","Class B","Class E"],
      a: 0,
      ex: "Class X has a redundant path and continues to operate past a single open or a single short, usually by using isolators. Class A also has a redundant path, but it is only required to operate past a single open. That makes Class A the tempting wrong answer. Class B has no redundant path, and Class E is not monitored for integrity.",
      ref: "NFPA 72-2022 12.3.7"
    },
    {
      id: "1.2.2-06",
      type: "mc",
      q: "A Class B notification appliance circuit has 9 horn-strobes and the panel shows a trouble on that circuit. During an alarm test, appliances 1 through 4 operate and 5 through 9 do not. Where do you look first?",
      opts: ["At the end-of-line resistor after appliance 9","At the panel's NAC fuse","For an open between appliance 4 and appliance 5","For a short across the pair near appliance 1"],
      a: 2,
      ex: "On a Class B circuit, everything past an open loses its connection to the panel. The appliances before the break still get power in alarm, and the ones after it do not. So the open is between the last one that works and the first one that does not, often a loose terminal at either device. A short would keep all 9 from operating, and a blown fuse would also stop all of them.",
      ref: "NFPA 72-2022 12.3 (Class B pathways); Fire Alarm Signaling Systems, 4th ed."
    },
    {
      id: "1.2.2-07",
      type: "num",
      q: "You suspect a high-resistance splice on a circuit. The run is 600 ft one-way of 18 AWG solid copper (7.77 Ω per 1,000 ft). With the pair disconnected from the panel and shorted together at the far end, what loop resistance should a healthy run read? Round to two decimals.",
      unit: "Ω",
      a: 9.32,
      tol: 0.05,
      ex: "The meter current goes out on one conductor and back on the other, so the wire length is 2 × 600 = 1,200 ft. 1,200 ÷ 1,000 × 7.77 = 9.32 Ω. Forgetting the ×2 gives 4.66 Ω, and then a good circuit looks bad. A reading well above 9.32 Ω points to a loose terminal or a corroded splice.",
      ref: "NEC 2020 Chapter 9, Table 8; NFPA 72-2022 Table 14.4.3.2(15)"
    },
    {
      id: "1.2.2-08",
      type: "num",
      q: "A Class B circuit wired with 18 AWG solid copper (7.77 Ω per 1,000 ft) has a dead short somewhere in the run. With the pair disconnected at the panel, your ohmmeter reads 3.11 Ω across it. Ignoring the meter leads and the resistance of the short itself, about how many feet from the panel is the short, measured along the cable? Round to the nearest foot.",
      unit: "ft",
      a: 200,
      tol: 3,
      ex: "First find how much wire the meter is reading through: 3.11 ÷ 7.77 × 1,000 = 400 ft of conductor. That is out and back, so the short is about 400 ÷ 2 = 200 ft from the panel. Answering 400 ft is the trap, and it sends you twice as far down the hall. Treat the result as a place to start looking, because the short itself adds a little resistance.",
      ref: "NEC 2020 Chapter 9, Table 8; Ugly's Electrical References (Ohm's law)"
    },
    {
      id: "1.2.2-09",
      type: "mc",
      q: "The panel shows a ground fault. You disconnect one field circuit at the panel and measure from each conductor to the grounded cabinet. One conductor reads 150 Ω and the other reads open (OL). What does this tell you?",
      opts: ["The circuit is normal, because any reading above 0 Ω passes","The end-of-line resistor is the wrong value","The meter is reading the batteries, so the test means nothing","That circuit has a ground fault: one conductor is touching grounded metal somewhere"],
      a: 3,
      ex: "Field conductors should be isolated from ground, so a healthy conductor reads open to the cabinet. A low reading such as 150 Ω means that conductor is touching conduit, a box or a wet surface. Find and repair the damaged spot. One ground fault often leaves the circuit working, but it must show as a trouble, and a second ground on the other conductor can short the circuit.",
      ref: "NFPA 72-2022 Table 14.4.3.2(15); 12.6"
    },
    {
      id: "1.2.2-10",
      type: "mc",
      q: "A conventional 2-wire smoke detector has failed. The truck has a different manufacturer's 2-wire detector that will physically fit the box. What decides whether you may install it?",
      opts: ["Whether it runs on the same nominal 24 V","Whether it is listed as compatible with that control unit","Whether it is the same type, such as photoelectric","Whether the building owner approves the substitution"],
      a: 1,
      ex: "A 2-wire detector takes its power from the initiating device circuit, so the detector and the panel work as a matched pair. It must be listed for use with that control unit, and the panel's compatibility document names the models and how many are allowed per zone. Matching voltage or sensing type is not enough: an incompatible detector may fail to alarm the panel or may cause troubles.",
      ref: "NFPA 72-2022 10.3 (listed, compatible equipment); NEC 2020 110.3(B)"
    },
    {
      id: "1.2.2-11",
      type: "mc",
      q: "You replace a damaged horn-strobe with a new one of the same model. Before you leave, what does NFPA 72 expect for that appliance?",
      opts: ["A functional test of the new appliance, with the work recorded","Nothing more, because the model is identical","A complete retest of every device in the building","A new smoke detector sensitivity test"],
      a: 0,
      ex: "A replaced or added device, appliance or control relay is functionally tested, so you know it operates and is wired correctly, and the repair is recorded. Same model does not mean same result: polarity, the candela setting and the terminations are all new work. A full building retest is not required for a like-for-like replacement of one appliance.",
      ref: "NFPA 72-2022 14.4.2 (reacceptance testing)"
    },
    {
      id: "1.2.2-12",
      type: "mc",
      q: "A lightning strike damages a control unit on Friday afternoon. Parts will not arrive until Monday, so the system will be out of service all weekend. Under NFPA 72-2022, what must the service provider do besides telling the owner?",
      opts: ["Nothing, as long as the owner signs the work order","Report it to the AHJ only if the outage lasts more than 24 hours","Report it to the AHJ, because the system will be out of service for more than 8 hours","Report it to the AHJ only if the AHJ asks"],
      a: 2,
      ex: "The owner or the owner's representative is always told about an impairment. When a system is out of service for more than 8 hours, the service provider also reports it to the authority having jurisdiction. The AHJ may then require mitigating measures, such as a fire watch, until the system is restored. 24 hours is a different rule: the deadline for written notice of a deficiency left uncorrected after ITM.",
      ref: "NFPA 72-2022 10.21.4"
    },
    {
      id: "1.2.2-13",
      type: "multi",
      q: "Part of a system must be shut down for a week during a renovation. Which TWO statements match the impairment rules in NFPA 72-2022 Chapter 10?",
      opts: ["The owner or the owner's designated representative must be told about the impairment","The technician's own service ticket is the only record anyone needs","A record of the impairment is kept for 1 year after it is corrected","Mitigating measures are never needed while a technician is on site","An impairment record may be thrown away once the system is restored"],
      a: [0,2],
      ex: "The owner or the owner's representative is notified whenever the system or part of it is impaired. A record of the impairment is kept for 1 year from the date it is corrected. Mitigating measures such as a fire watch are put in place where the AHJ requires them, whether or not a technician happens to be in the building.",
      ref: "NFPA 72-2022 10.21.1 and 10.21.2"
    },
    {
      id: "1.2.2-14",
      type: "mc",
      q: "During an annual test you find a duct smoke detector that will not alarm. The replacement must be ordered and you cannot fix it today. What must happen?",
      opts: ["Disable the point so it stops showing, and fix it at next year's test","Tell the building engineer verbally and note it in your own files","Leave it off the report, since it will be fixed soon","The owner or the owner's representative is informed in writing within 24 hours"],
      a: 3,
      ex: "A deficiency that is not corrected by the end of the inspection, test or service visit must be reported in writing to the owner or the owner's designated representative within 24 hours. Writing matters: it puts the decision and the duty to correct it clearly with the owner, and it protects you. A verbal comment to whoever is nearby does not meet the rule.",
      ref: "NFPA 72-2022 14.2.2.3 (deficiencies)"
    },
    {
      id: "1.2.2-15",
      type: "multi",
      q: "You have finished a repair and the panel is clear. Which TWO steps properly return the system to normal?",
      opts: ["Leave the supervising station account on test for another 24 hours in case of nuisance signals","Restore every point, circuit and output that was bypassed or disabled, and confirm the panel shows normal","Leave the repaired zone disabled until the owner has watched it for a week","Tell the supervising station and the building contact that work is finished and the system is back in service","Silence any remaining troubles so the panel is quiet when you leave"],
      a: [1,3],
      ex: "Returning to normal means nothing is left bypassed, disabled or on test, and the people who receive the signals know that the next one is real. An account left on test, or a zone left disabled, is an impairment nobody knows about: a real alarm would go nowhere. A silenced trouble is still a trouble, so it is either cleared or reported in writing.",
      ref: "NFPA 72-2022 Ch 14 (notification at the end of testing); 10.21 (impairments)"
    }
  ]
};
