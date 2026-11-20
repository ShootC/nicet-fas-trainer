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
    },
    {
      id: "1.2.1-16",
      type: "mc",
      q: "A small local fire alarm system is <b>not</b> monitored for alarm, supervisory and trouble signals. How often does NFPA 72-2022 call for a visual inspection of its control unit fuses, lamps and LEDs, primary power supply and trouble signals?",
      opts: ["Annually","Semiannually","Weekly","Monthly"],
      a: 2,
      ex: "When nobody off site is watching the panel, a person has to look at it, so the visual inspection table sets a weekly check of the control equipment on an unmonitored system. Annually is the trap: that is the interval for the fuses, lamps and primary power on a <i>monitored</i> system, where a fault is reported automatically. Either way the check is the same: confirm the panel shows a normal condition.",
      ref: "NFPA 72-2022 Table 14.3.1(2)"
    },
    {
      id: "1.2.1-17",
      type: "multi",
      q: "You are doing the visual inspection of a set of VRLA (sealed lead-acid) batteries. Which TWO conditions call for replacing the battery unit on the spot?",
      opts: ["The case is bulged or distorted","The month and year of manufacture show the unit is 18 months old","Electrolyte has leaked from the unit","There is dust on top of the unit","The unit has a lower amp-hour rating printed on it than the unit beside it"],
      a: [0,2],
      ex: "The visual inspection looks for corrosion at the terminals, a distorted or cracked case and leaking electrolyte, and a unit showing any of these is replaced. A swollen case means the unit has overheated or overcharged, and it can fail without warning. Age alone at 18 months is not a reason, but you do verify that the month and year of manufacture are marked on every unit. Mismatched ratings are a design problem to report, not a visual replacement item.",
      ref: "NFPA 72-2022 Table 14.3.1(9)"
    },
    {
      id: "1.2.1-18",
      type: "mc",
      q: "At a semiannual test the batteries are fully charged and on the charger. You measure 28.4 V across the 24 V battery set. The manufacturer's float range is 27.0 V to 27.6 V. Each 12 V unit reads 14.2 V. What does the charger test call for?",
      opts: ["Adjust the charger to bring it within the limits, or replace the charger","Replace both batteries, because the voltage is abnormal","Nothing, because a higher charge voltage keeps the batteries fuller","Replace the batteries only if one unit is under 13.26 V, and leave the charger alone"],
      a: 0,
      ex: "The charger test compares the voltage across the battery with the battery or equipment manufacturer's recommended range. 28.4 V is above 27.6 V, so the charger is adjusted to within limits or replaced. The trap is blaming the batteries: both units pass the 13.26 V unit test, and the fault is the charger. Left alone, overcharging cooks the batteries and shortens their life.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "1.2.1-19",
      type: "mc",
      q: "You install a new set of VRLA batteries in a fire alarm control unit. What does the battery test table expect you to do for the ohmic test at that time?",
      opts: ["Nothing, because an ohmic test only applies after the batteries are 3 years old","Discharge the batteries completely to prove their capacity","Measure the resistance of the battery leads and the fuse","Establish a baseline ohmic value for each unit, or use the manufacturer's baseline, and record it on each unit"],
      a: 3,
      ex: "An ohmic test (internal resistance, impedance or conductance) only means something when it is compared with a starting value. So when the battery is installed, a baseline is established for each unit, or the baseline from the battery or test equipment manufacturer is used, and it is recorded on the unit. Later readings are compared with that baseline to spot a unit that is wearing out. The table also allows a load test in place of the ohmic test.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "1.2.1-20",
      type: "mc",
      q: "Most initiating devices are functionally tested once a year. Which of these is tested <b>semiannually</b> under NFPA 72-2022?",
      opts: ["A manual fire alarm box","A spot-type system smoke detector","A restorable spot-type heat detector","A vane-type (mechanical) sprinkler waterflow switch"],
      a: 3,
      ex: "Waterflow devices are tested semiannually. Manual fire alarm boxes, system smoke detectors and restorable heat detectors are on an annual functional test. The usual mix-up is with the visual inspection table, where all of these devices are looked at semiannually. Inspection frequency and test frequency are two different lookups.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "1.2.1-21",
      type: "mc",
      q: "You are testing the supervisory (tamper) switch on an outside stem and yoke sprinkler control valve. When must the signal be received as the valve is closed?",
      opts: ["Only when the valve is fully closed","Within the first two revolutions of the handwheel, or within one-fifth of the valve's travel","Within the first half of the valve's travel","At any point, as long as the signal clears when the valve is reopened"],
      a: 1,
      ex: "The switch must signal early: within the first two revolutions of the handwheel or one-fifth of the travel distance, unless the manufacturer's instructions say otherwise. A valve that is only partly closed already cuts the water supply, so a switch that waits for full closure is no protection. Keep closing the valve after the signal and confirm the switch does not reset anywhere in the full travel. This test is semiannual.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "1.2.1-22",
      type: "mc",
      q: "How is a vane-type waterflow switch on a wet-pipe sprinkler system tested under NFPA 72-2022?",
      opts: ["Flow water through the inspector's test connection, at a flow equal to one sprinkler of the smallest orifice size on the system","Open the main drain fully and confirm the alarm","Remove the switch cover and push the paddle lever by hand","Jumper the switch terminals at the device and confirm the alarm at the panel"],
      a: 0,
      ex: "The test must show that the flow from a single sprinkler will operate the switch, so water is flowed through the inspector's test connection (or another listed and approved waterflow test method). The main drain moves far more water than one sprinkler, so a switch that is set too stiff would still pass. A jumper or a finger on the lever only tests the wiring and the panel, not the device's ability to sense flow. Dry-pipe, pre-action and deluge systems use the alarm test bypass connection instead.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "1.2.1-23",
      type: "mc",
      q: "An initiating device circuit has 10 restorable, fixed-temperature spot-type heat detectors. Which schedule meets the heat detector testing rule in NFPA 72-2022?",
      opts: ["Send 2 detectors per 100 to a laboratory every 15 years","Test at least 2 detectors on the circuit each year, different ones each year, so that every detector is tested within 5 years","Test 10 percent of the detectors each year, with no other limit","Test one detector on the circuit each year and rotate through them"],
      a: 1,
      ex: "For restorable spot-type heat detectors, two or more detectors on each initiating circuit are tested every year, different ones each time, and every detector must have been tested within 5 years. The owner keeps records showing which ones were done. Here that is 2 a year for 5 years. The laboratory rule (2 per 100 after 15 years) belongs to <i>nonrestorable</i> spot-type detectors, which cannot be heat tested.",
      ref: "NFPA 72-2022 14.4.4.5; Table 14.4.3.2(17)"
    },
    {
      id: "1.2.1-24",
      type: "num",
      q: "A dry-pipe sprinkler system has a required (normal) air pressure of 40 psi. When you bleed air to test the low-air pressure supervisory switch, the signal must be received before the pressure has dropped below what value? Use the limit in the NFPA 72 test table, and assume the manufacturer gives no other figure.",
      unit: "psi",
      a: 30,
      tol: 0,
      ex: "A high- or low-air pressure switch must signal by the time the pressure has changed a maximum of 10 psi from the required level. 40 − 10 = 30 psi. If the signal does not arrive until 25 psi, the switch is out of adjustment even though it 'works'. This is an annual test, and the signal is supervisory, not trouble.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "1.2.1-25",
      type: "num",
      q: "The annual secondary power test includes checking that the battery's rated capacity still exceeds the system's demand, with the safety margin. Manufacturer's data gives 0.150 A in standby and 2.0 A in alarm. The system needs 24 hours of standby and then 5 minutes of alarm. Using the NFPA 72-2022 correction factor, what is the minimum battery capacity? Round to two decimals.",
      unit: "Ah",
      a: 4.71,
      tol: 0.05,
      ex: "Standby: 0.150 A × 24 h = 3.60 Ah. Alarm: 2.0 A × (5 ÷ 60) h = 0.167 Ah. Total 3.767 Ah, and × 1.25 = 4.71 Ah. A 7 Ah battery set passes this check. Using the old 20 percent margin gives 4.52 Ah, which is the 2019 edition's answer, not the 2022 answer. Forgetting to turn 5 minutes into hours is the other common slip.",
      ref: "NFPA 72-2022 Table 14.4.3.2(8); 10.6.7.2.14"
    },
    {
      id: "1.2.1-26",
      type: "multi",
      q: "Which TWO checks does NFPA 72-2022 call for at the <b>periodic</b> (annual) test of notification appliances?",
      opts: ["Confirm that every visual appliance (strobe) flashes","Measure the sound level in every room with a sound level meter","Confirm that the audible appliances operate","Measure each strobe's light output with a light meter","Compare every strobe's candela setting with the approved drawings"],
      a: [0,2],
      ex: "The periodic test is an operation check: each strobe flashes and the audible appliances sound. Sound level meter readings belong to initial and reacceptance testing, and so does comparing candela settings with the approved drawings. Nobody measures strobe output in the field. If the building has been remodeled since acceptance, that is a reason to raise coverage with the owner, but it is not part of the routine annual test.",
      ref: "NFPA 72-2022 Table 14.4.3.2(22)"
    },
    {
      id: "1.2.1-27",
      type: "multi",
      q: "To test detectors without recalling the elevators or dropping the fire doors, the elevator recall and door release interface relays are disabled for the day. Which TWO statements match NFPA 72-2022?",
      opts: ["The emergency control function interface devices must still have their activation verified as part of the annual test","Emergency control functions are tested at acceptance only","Once disabled, an interface may stay disabled until the next annual test","Before you leave, verify that every disabled or disconnected interface device has been properly restored, including magnetic door holders","Restoring the interfaces is always the elevator contractor's job, not the fire alarm technician's"],
      a: [0,3],
      ex: "Emergency control function interface devices are verified at initial, reacceptance and periodic (annual) testing. Disabling them while you test detectors is normal practice, but the table then requires you to verify that each one is properly restored, door release devices included. A recall relay left bypassed is a hidden impairment: the detectors still alarm, but the elevators and doors do nothing.",
      ref: "NFPA 72-2022 Table 14.4.3.2(24)"
    },
    {
      id: "1.2.1-28",
      type: "mc",
      q: "The control unit's <b>primary (main) power supply</b> is tested annually. How is that test done?",
      opts: ["Disconnect the AC power and run the system in alarm for 5 minutes","Measure the AC voltage at the panel terminals and record it","Disconnect all secondary (standby) power and operate the system under maximum load, then reconnect the batteries","Turn the breaker off and on, and confirm the panel restarts"],
      a: 2,
      ex: "To prove the main power supply can carry the system by itself, the batteries are disconnected and the system is run at maximum load, with all the alarm appliances that must operate together. Then the batteries are reconnected. Pulling the AC is the mirror-image test for the <i>secondary</i> supply, and that is the tempting wrong answer. If the supply only holds up the load with the batteries helping, it has failed.",
      ref: "NFPA 72-2022 Table 14.4.3.2(2)"
    },
    {
      id: "1.2.1-29",
      type: "mc",
      q: "A heat detector is mounted above energized switchgear and cannot be reached safely while the plant is running. What does NFPA 72-2022 permit?",
      opts: ["Skipping its test permanently if the owner signs a waiver","Testing it during a scheduled shutdown if the AHJ approves, with the interval not more than 18 months","Testing it once every 5 years with the other heat detectors","Marking it 'tested' because the rest of the circuit passed"],
      a: 1,
      ex: "Devices that are inaccessible for safety reasons, such as energized equipment, continuous processes, radiation or excessive height, may be tested during scheduled shutdowns when the AHJ approves. The stretched interval may not exceed 18 months. The owner cannot waive the test, and a device is never recorded as tested when it was not.",
      ref: "NFPA 72-2022 14.4.4.1"
    },
    {
      id: "1.2.1-30",
      type: "mc",
      q: "An apartment building has single-station smoke alarms with a date of manufacture of March 2018. They were installed in January 2019 and every one still passes its test. With no longer period given in the manufacturer's instructions, what is the latest they may stay in service?",
      opts: ["March 2028","January 2029","Until one fails its test","March 2033"],
      a: 0,
      ex: "Smoke alarms are replaced when they fail a test, and in any case they may not stay in service longer than 10 years from the date of <b>manufacture</b>, unless the manufacturer's published instructions provide otherwise. March 2018 + 10 years = March 2028. Counting from the installation date is the trap, and here it would add 10 months. Read the date code on the back of the alarm, not the job file.",
      ref: "NFPA 72-2022 14.4.5.6"
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
    },
    {
      id: "1.2.2-16",
      type: "mc",
      q: "An addressable panel reports 'missing device' (no response) for one smoke detector on a Class B signaling line circuit. The devices wired <b>after</b> it on the same circuit are still communicating normally. Where is the problem most likely to be?",
      opts: ["An open in the circuit wiring between the panel and that detector","A short across the circuit near the panel","At that detector: the head is removed or failed, or its address is wrong","A ground fault on the circuit"],
      a: 2,
      ex: "On a Class B circuit, an open in the wire cuts off everything past the break. Here the devices downstream still answer, so the wire is intact through that location. That points to the one device: a head removed from its base, a failed unit or an address set wrong. A short would take down the whole circuit (or everything between isolators), and a ground fault reports as a ground fault, not as one missing device.",
      ref: "Field practice (missing device on an addressable circuit); NFPA 72-2022 Ch 12 (Class B pathways)"
    },
    {
      id: "1.2.2-17",
      type: "num",
      q: "A conventional zone uses a 3.9 kΩ end-of-line resistor. The panel shows a trouble on the zone. You find that someone added a 2.2 kΩ resistor across the pair at a new detector in the middle of the run, and left the original 3.9 kΩ resistor at the end. With the circuit disconnected from the panel, what resistance do you read across the pair? Ignore the wire resistance and round to the nearest ohm.",
      unit: "Ω",
      a: 1407,
      tol: 5,
      ex: "The two resistors are in parallel across the same pair, so use product over sum: (3,900 × 2,200) ÷ (3,900 + 2,200) = 8,580,000 ÷ 6,100 = 1,407 Ω. A parallel group always reads lower than its smallest resistor. The panel expects about 3.9 kΩ, so it reports the zone as off-normal. Adding the two values (6,100 Ω) is the series answer, and it is the usual mistake. A zone gets exactly one end-of-line device, at the end of the circuit.",
      ref: "Ugly's Electrical References 2020 (parallel resistance); Field practice (end-of-line resistors)"
    },
    {
      id: "1.2.2-18",
      type: "num",
      q: "Strobes at the end of a notification appliance circuit are flashing weakly. In alarm you measure 24.0 V at the panel's circuit terminals, 19.2 V at the last appliance, and 1.5 A of circuit current. Treat all the appliances as one load at the end of the run. What is the total resistance of the wiring loop, out and back?",
      unit: "Ω",
      a: 3.2,
      tol: 0.05,
      ex: "The wiring is dropping 24.0 − 19.2 = 4.8 V. By Ohm's law, R = E ÷ I = 4.8 ÷ 1.5 = 3.2 Ω. Now compare that with what the wire should be. If this run is 250 ft one-way of 14 AWG solid, the loop should be about 500 ft × 3.07 Ω per 1,000 ft (NEC Chapter 9, Table 8) = 1.5 Ω. Twice the expected resistance points to a loose terminal or a bad splice, not to wire that is too small.",
      ref: "Ugly's Electrical References 2020 (Ohm's law)"
    },
    {
      id: "1.2.2-19",
      type: "mc",
      q: "A control unit shows a ground fault. Six field circuits are connected to it and nothing tells you which one is at fault. What is the most efficient first step?",
      opts: ["Disconnect the field circuits at the panel one at a time, giving the panel time to respond, until the ground fault clears","Replace the control unit's main board","Remove every end-of-line resistor in the building","Replace the batteries, because a weak battery causes most ground faults"],
      a: 0,
      ex: "Lifting one circuit at a time splits the problem. When the ground fault indication clears, the circuit you just removed is the one touching ground. Then use the same idea on that circuit: open it at the halfway point and see which half still reads to ground. Give the panel time after each step, because a ground fault can take a while to clear from the display. Swapping parts before isolating the fault is guessing with the customer's money.",
      ref: "Field practice (isolating a ground fault)"
    },
    {
      id: "1.2.2-20",
      type: "mc",
      q: "Before taking resistance readings on a circuit you have disconnected from the panel, you check it for voltage and find 3.8 V AC between one conductor and ground. What does this mean under the conductor tests in NFPA 72-2022?",
      opts: ["It is normal, because anything under 5 V is ignored","It is above the 1 V maximum for stray voltage, so find and remove the source before you go on","It proves the circuit has a dead short","It means the end-of-line resistor is missing"],
      a: 1,
      ex: "Installation conductors should carry no stray (unwanted) voltage, either conductor-to-conductor or conductor-to-ground. The limit is 1 volt AC or DC unless the equipment manufacturer gives a different threshold. Stray voltage usually comes from fire alarm cable run alongside power wiring, or from contact with another system's wiring. It also makes your ohmmeter readings worthless, so check for voltage first and resistance second.",
      ref: "NFPA 72-2022 Table 14.4.3.2(15)"
    },
    {
      id: "1.2.2-21",
      type: "mc",
      q: "To check that a circuit is supervised, you lift one conductor off a device terminal. What is the longest the system may take to indicate the trouble?",
      opts: ["10 seconds","90 seconds","24 hours","200 seconds"],
      a: 3,
      ex: "A single open or a single ground fault on a monitored pathway must be indicated automatically within 200 seconds. So wait a full 3 minutes and 20 seconds before you decide a circuit is not supervised. 10 seconds is the limit for alarm notification to start, and 90 seconds comes from waterflow and supervisory timing. 24 hours is the re-sound interval for a silenced trouble, which is a different rule.",
      ref: "NFPA 72-2022 12.6"
    },
    {
      id: "1.2.2-22",
      type: "mc",
      q: "A Class A signaling line circuit shows an open-circuit trouble at the panel, but a walk test proves every device on the circuit still reports. What is going on?",
      opts: ["There is a real break in the loop, and the panel is reaching the devices from both ends","The trouble is false, because all the devices work","The circuit has a short, and the isolators have cleared it","The end-of-line resistor has failed"],
      a: 0,
      ex: "A Class A pathway has a redundant path, so it keeps operating past a single open and reports the open as a trouble. The devices work because they are now fed from both ends of the loop. Calling it a false trouble is the trap: the circuit has used up its spare path, and a second break would cut off every device between the two breaks. Find and repair the open now. A Class A circuit has no end-of-line resistor.",
      ref: "NFPA 72-2022 12.3 (Class A pathways)"
    },
    {
      id: "1.2.2-23",
      type: "mc",
      q: "You replace one horn-strobe on a conventional Class B notification appliance circuit. The circuit was normal before. Now the panel shows a trouble on that circuit in standby, and in an alarm test the new appliance is the only one that does not operate. What do you check first?",
      opts: ["The panel's battery charger","The end-of-line resistor value","The candela setting on the new appliance","The polarity of the wires on the new appliance"],
      a: 3,
      ex: "A conventional NAC is supervised with a small current at one polarity, and the panel reverses polarity to drive the appliances in alarm. Each appliance blocks the supervisory current, so the panel sees only the end-of-line resistor. An appliance wired backwards passes supervisory current in standby, so the panel no longer sees the correct end-of-line value, and in alarm that appliance stays dark. The fault appeared with your work, so start where you just had the wires off.",
      ref: "Field practice (reversed polarity on a notification appliance)"
    },
    {
      id: "1.2.2-24",
      type: "mc",
      q: "On a conventional Class B zone you remove a smoke detector from its base to test supervision, and the panel never shows a trouble. The other detectors on the zone do cause a trouble when removed. What is the most likely reason?",
      opts: ["The panel's trouble sounder has been silenced","That detector is on a T-tap (a parallel branch), so the circuit to the end-of-line resistor is not broken when it is removed","The end-of-line resistor is the wrong value","The detector is listed as self-supervising, so no trouble is expected"],
      a: 1,
      ex: "Supervision works because the monitoring current must pass in and out through every device on its way to the end-of-line resistor. A device hung on a branch off the main run is outside that path. Remove it, or cut the branch, and the panel still sees the resistor and stays normal. So nobody would know if that detector were disconnected. T-taps are not acceptable on a conventional Class B initiating device circuit: rewire it in and out.",
      ref: "NFPA 72-2022 12.6 (monitoring for integrity)"
    },
    {
      id: "1.2.2-25",
      type: "multi",
      q: "Which TWO of these conditions should show at the panel as a <b>supervisory</b> signal?",
      opts: ["The room temperature switch in the dry-pipe valve room operates at 40°F","A battery lead has come off its terminal","The water level switch on a fire protection water tank reports low level","A manual fire alarm box is operated","A ground fault on a signaling line circuit"],
      a: [0,2],
      ex: "Supervisory signals report an off-normal condition in another fire protection system that could stop it from working, such as a cold valve room that could freeze or a tank that is low on water. A loose battery lead and a ground fault are faults in the fire alarm system itself, so they are troubles. The pull station is an alarm. Sorting the signal correctly tells you who to call: the sprinkler contractor for the two supervisory conditions, and you for the troubles.",
      ref: "NFPA 72-2022 10.14 (supervisory signals); Table 14.4.3.2(17)"
    },
    {
      id: "1.2.2-26",
      type: "mc",
      q: "A panel is showing a ground fault trouble and a valve supervisory signal when a waterflow alarm comes in. How does NFPA 72 rank these three signals?",
      opts: ["The first signal received keeps priority until it is cleared","Trouble first, because a faulted system cannot be trusted","Fire alarm first, then supervisory, then trouble","Supervisory first, because it involves the sprinkler system"],
      a: 2,
      ex: "Fire alarm signals take priority over supervisory and trouble signals, and supervisory ranks ahead of trouble. An existing trouble must never hide or delay an alarm. For you on a service call, it means this: if an alarm comes in while you are chasing a trouble, treat it as real until it is proven otherwise.",
      ref: "NFPA 72-2022 Ch 10 (signal priority)"
    },
    {
      id: "1.2.2-27",
      type: "mc",
      q: "The owner has you remove an unneeded horn from a notification appliance circuit and splice the circuit through. What test does NFPA 72-2022 call for afterwards?",
      opts: ["None, because nothing was added","A full reacceptance test of the entire system","A new battery calculation only","A functional test of another appliance on that same circuit"],
      a: 3,
      ex: "When a device, appliance or control relay is deleted, another one on that circuit is operated to show the circuit still works. Removing a device means opening and re-making the circuit, and that is where a reversed pair or a loose splice gets left behind. Testing nothing is the tempting shortcut. A full system retest is more than the rule asks for.",
      ref: "NFPA 72-2022 14.4.2.2"
    },
    {
      id: "1.2.2-28",
      type: "mc",
      q: "A system was out of service over a weekend, and the outage was reported to the AHJ. On Monday the repair is finished and tested. Who must be notified that the impairment period has ended?",
      opts: ["The system owner or the owner's designated representative, and the AHJ","Only the supervising station","Only the owner, because the AHJ is told only when an outage starts","Nobody, because the panel showing normal is the notice"],
      a: 0,
      ex: "When an impairment ends, the owner or the owner's representative and the authority having jurisdiction are both notified. The AHJ may have a fire watch or other mitigating measures in place, and those keep running until someone says the system is back. Telling the supervising station to take the account off test is still needed, but it does not replace this notice.",
      ref: "NFPA 72-2022 10.21.6"
    },
    {
      id: "1.2.2-29",
      type: "mc",
      q: "A panel shows a battery trouble. The charger output is within the manufacturer's range at 27.3 V across the 24 V set. With the set fully charged and on the charger, unit A reads 14.5 V and unit B reads 12.8 V. What is the correct repair?",
      opts: ["Replace unit B only, because unit A is healthy","Replace the battery set, check that the new units are marked with their month and year of manufacture, and confirm the trouble clears","Turn the charger up until unit B reads 13.26 V","Swap the positions of the two units and retest"],
      a: 1,
      ex: "The unit voltage test says to replace the battery when any unit measures below 13.26 V, and unit B is at 12.8 V. The two units in series make up one battery, and they should be replaced together: a new unit paired with an old one charges unevenly, which is exactly what these readings show. The charger is in range, so turning it up would only overcharge unit A further.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "1.2.2-30",
      type: "multi",
      q: "A conventional Class B initiating device circuit with a 4.7 kΩ end-of-line resistor is disconnected from the panel. No detector is in alarm. Which TWO ohmmeter readings would you expect if the circuit is healthy?",
      opts: ["About 0 Ω across the pair","About 4.7 kΩ across the pair, plus a few ohms of wire","Open (OL) across the pair","Open (OL) from each conductor to the grounded cabinet","About 4.7 kΩ from each conductor to ground"],
      a: [1,3],
      ex: "Across the pair, the meter sees the end-of-line resistor through the wire, so about 4.7 kΩ. To ground, the conductors should be isolated, so the meter reads open. About 0 Ω across the pair is a short, and open across the pair is a break or a missing resistor. Any measurable resistance from a conductor to ground is a ground fault. Knowing the healthy readings first is what lets you read the faulty ones.",
      ref: "Field practice (ohmmeter readings on a healthy circuit); NFPA 72-2022 Ch 14 (conductor tests)"
    }
  ]
};
