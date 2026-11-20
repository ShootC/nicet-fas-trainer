// NICET FAS Level II · 2.2 Maintenance. Questions keyed by task id.
// Never reuse or renumber an id: progress is saved by id. See README for the format.
export default {
  "2.2.1": [
    {
      id: "2.2.1-01",
      type: "mc",
      q: "You are planning an annual test under NFPA 72-2022 and need the required test frequency for each component. Where is it?",
      opts: ["Table 14.4.5, the testing frequencies table","Table 14.4.3.2, which lists the test method and the frequency together","Table 14.3.1, in the periodic frequency column","Table 10.6.7.2, with the secondary power requirements"],
      a: 1,
      ex: "In the 2022 edition, Table 14.4.3.2 gives both the test method and how often to do it. Table 14.3.1 is for <b>visual inspection</b> only. The trap is Table 14.4.5: that number comes from the 2010 edition and does not exist in 2022, where 14.4.5 covers single- and multiple-station alarms.",
      ref: "NFPA 72-2022 Table 14.4.3.2; Table 14.3.1"
    },
    {
      id: "2.2.1-02",
      type: "mc",
      q: "A monitored commercial system has smoke detectors, heat detectors and manual fire alarm boxes. How often does Table 14.3.1 call for a <b>visual inspection</b> of these initiating devices?",
      opts: ["Monthly","Quarterly","Semiannually","Annually"],
      a: 2,
      ex: "Visual inspection of these initiating devices is semiannual. Their functional <b>test</b> is annual, and that is the number trainees mix it up with. Inspection and testing are two separate tables with two separate schedules.",
      ref: "NFPA 72-2022 Table 14.3.1(17)"
    },
    {
      id: "2.2.1-03",
      type: "mc",
      q: "A new system with spot-type smoke detectors was accepted in May 2023. Sensitivity was checked in May 2024 and again in May 2026. Both times every detector was inside its listed and marked range. What is the latest the next sensitivity test can be scheduled?",
      opts: ["May 2027","May 2028","May 2029","May 2031"],
      a: 3,
      ex: "Sensitivity is checked within 1 year of installation and then every alternate year. After the second required test, if the detectors have stayed in range, the interval may be stretched to a maximum of 5 years, so 2026 + 5 = 2031. The owner must then keep records of nuisance alarms, and a zone that starts giving unwanted alarms gets retested. May 2028 is the alternate-year answer, which is what you use when the extension has not been earned.",
      ref: "NFPA 72-2022 14.4.4.3"
    },
    {
      id: "2.2.1-04",
      type: "multi",
      q: "Which TWO are acceptable ways to show that a smoke detector is within its listed sensitivity range?",
      opts: ["The manufacturer's calibrated sensitivity test instrument","Canned aerosol smoke that puts the detector into alarm","Listed control equipment arranged to read or monitor detector sensitivity","Holding a magnet on the detector's test point","Timing how many seconds the detector takes to alarm with aerosol"],
      a: [0,2],
      ex: "A sensitivity test must give a measured, calibrated result. The manufacturer's calibrated instrument does that, and so does a listed control unit that reports sensitivity or signals when a detector drifts out of range. Aerosol and magnet tests only prove the detector will alarm. They are functional tests, and an unmeasured aerosol does not count for sensitivity.",
      ref: "NFPA 72-2022 14.4.4.3"
    },
    {
      id: "2.2.1-05",
      type: "mc",
      q: "A 24 V panel has two 12 V VRLA batteries in series. With the batteries fully charged and still connected to the charger, you measure 13.4 V across one unit and 13.1 V across the other. What does Table 14.4.3.2 call for?",
      opts: ["Replace the battery, because one unit is below 13.26 V","Nothing, because both units are above 12 V","Raise the charger output until both units read 13.4 V","Leave them until the 3-year load test"],
      a: 0,
      ex: "The cell/unit voltage test is done on charge, and any 12 V unit under 13.26 V means the battery is replaced. Field practice is to change both units as a matched set. The tempting mistake is to compare the reading with the 12 V nameplate. A unit on float charge should sit well above 12 V.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "2.2.1-06",
      type: "num",
      q: "You open a control unit and measure 76 °F inside the enclosure. Under the VRLA temperature test, what is the highest reading at a battery's negative terminal that does <b>not</b> require replacing that unit?",
      unit: "°F",
      a: 94,
      tol: 0.5,
      ex: "A unit is replaced when it is more than 18 °F (10 °C) hotter than the ambient inside the enclosure. 76 + 18 = 94 °F, so 94 °F is the limit and anything above it fails. Take the ambient reading as soon as you open the door, before the cabinet cools down. A hot battery is a sign of internal failure or overcharging.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "2.2.1-07",
      type: "num",
      q: "At the 3-year interval you load test a 26 Ah VRLA battery in place of replacing it. At or below what measured capacity must the battery be replaced now? Answer in Ah.",
      unit: "Ah",
      a: 20.8,
      tol: 0.05,
      ex: "Replace the battery when its capacity is 80 percent of rating or less: 26 × 0.80 = 20.8 Ah. If it tests above 80 percent but below 85 percent (22.1 Ah here), it may stay in service but is replaced at the next scheduled test interval. Do not confuse this 80 percent test limit with the 1.25 aging factor used when the battery is sized.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "2.2.1-08",
      type: "num",
      q: "An initiating device circuit has 14 restorable spot-type heat detectors. You test the same number each year and never repeat a detector until all are done. What is the fewest you can test per year and still test every detector within 5 years?",
      unit: "detectors",
      a: 3,
      tol: 0,
      ex: "The rule is at least two detectors on each circuit every year, different ones each year, and every detector tested within 5 years. 14 ÷ 5 = 2.8, so you need 3 per year. Testing only the minimum of two would cover just 10 detectors in 5 years. The owner keeps a record of which detectors were tested.",
      ref: "NFPA 72-2022 14.4.4.5"
    },
    {
      id: "2.2.1-09",
      type: "multi",
      q: "Testing personnel must have knowledge and experience acceptable to the AHJ, or be qualified by a recognized means. Which THREE are means of qualification that NFPA 72 recognizes?",
      opts: ["Factory training and certification for the specific type and brand of system","Certification by a nationally recognized certification organization acceptable to the AHJ","Five years of general electrical experience with no fire alarm training","Registration, licensing or certification by a state or local authority","Written permission from the building owner"],
      a: [0,1,3],
      ex: "The Code lists factory training and certification on the brand, a nationally recognized certification the AHJ accepts (NICET is the common example), and state or local licensing. Employment with an organization listed by a testing laboratory for servicing fire alarm systems is a fourth. General electrical experience or the owner's permission does not make a person qualified to test.",
      ref: "NFPA 72-2022 10.5.3.2 and 10.5.3.4"
    },
    {
      id: "2.2.1-10",
      type: "mc",
      q: "A fire alarm system reports to the supervising station over a <b>single</b> performance-based communications path (a cellular communicator). The path is disconnected to test its supervision. Within what time must the failure be annunciated at the supervising station?",
      opts: ["90 seconds","5 minutes","60 minutes","6 hours"],
      a: 2,
      ex: "A single path must be supervised so that its failure shows at the supervising station within 60 minutes. Six hours is the figure where multiple paths are used. Five minutes is the older rule, and Table 14.4.3.2 keeps it only for communication equipment installed before the 2013 edition was adopted. Restore the path and confirm the restoral signal before you leave.",
      ref: "NFPA 72-2022 Table 14.4.3.2 (supervising station, performance-based technologies); Ch 26 (communications methods)"
    },
    {
      id: "2.2.1-11",
      type: "mc",
      q: "During the annual secondary power test of an in-building fire emergency voice/alarm communications system, you disconnect primary power and confirm the trouble signal. For how long must the system then be operated in alarm on batteries?",
      opts: ["At least 5 minutes","At least 15 minutes","At least 30 minutes","A full 24 hours"],
      a: 1,
      ex: "Voice systems are operated for a minimum of 15 minutes. General alarm systems without voice are operated for a minimum of 5 minutes, and that is the tempting wrong choice. You also verify that the battery's rated capacity covers the standby and alarm load with its margin, and you reconnect primary power at the end.",
      ref: "NFPA 72-2022 Table 14.4.3.2 (secondary power supply)"
    },
    {
      id: "2.2.1-12",
      type: "mc",
      q: "At the end of an annual test, two duct smoke detectors and one horn-strobe have failed and you do not have parts on the truck. What does NFPA 72 require?",
      opts: ["Note the failures on your copy of the report and fix them at next year's test","Disable the three points in programming so the panel shows normal","Tell the monitoring company and leave the rest to them","Inform the owner or the owner's representative in writing within 24 hours"],
      a: 3,
      ex: "Defects found during testing are to be corrected. Anything not corrected by the end of the visit must be reported to the owner or the owner's designated representative in writing within 24 hours. Disabling points to clear the panel hides the problem and leaves part of the building unprotected. After the repair, the replaced devices are functionally tested and the records are updated.",
      ref: "NFPA 72-2022 14.2.2.2"
    },
    {
      id: "2.2.1-13",
      type: "mc",
      q: "A system reports to the supervising station through an IP and cellular communicator, not a DACT. For the annual test of the transmission equipment you operate a manual fire alarm box. Within what time must the correct signal be received at the supervising station?",
      opts: ["10 seconds","90 seconds","200 seconds","60 minutes"],
      a: 1,
      ex: "For transmission equipment other than a DACT, the test method is to actuate an initiating device and verify the correct signal is received at the supervising station within 90 seconds. Sixty minutes is the tempting wrong choice: that is how fast the loss of a single communications path must show, not how fast an alarm must arrive. Ten seconds is for local notification and 200 seconds is for trouble indication. Call the station and confirm the point description as well as the time.",
      ref: "NFPA 72-2022 Table 14.4.3.2(4)"
    },
    {
      id: "2.2.1-14",
      type: "multi",
      q: "An older system still uses a digital alarm communicator transmitter (DACT) with a phone line as its primary means and a cellular unit as its second means. Which TWO steps are part of the annual DACT test?",
      opts: ["Start a signal while the primary phone line is in use for a call, and confirm the DACT cuts off the call and reaches the receiver","Confirm that the DACT sends an automatic test signal to the supervising station every 60 minutes","Disconnect the primary line and confirm the DACT trouble shows at the premises control unit within 4 minutes of the fault being detected","Test with only one transmission means connected, because the second means is optional","Megger the phone line with the DACT still connected"],
      a: [0,2],
      ex: "The DACT test proves line seizure: a signal started during a phone call must interrupt the call and get through. Then each transmission means is disconnected in turn, and the trouble must show at the premises control unit within 4 minutes of the fault being detected. The 60-minute figure belongs to the supervision of a single performance-based path. It is not a DACT test step. A DACT must be connected to two separate means of transmission, so testing with one is not enough. Restore both means and confirm the restoral signals at the supervising station.",
      ref: "NFPA 72-2022 Table 14.4.3.2(4)"
    },
    {
      id: "2.2.1-15",
      type: "mc",
      q: "During an annual test you trace the fire alarm communicator's IP path. It runs through the building's own network switch and cable modem in an IT closet. Both are plugged into a wall receptacle with no standby power. What does the testing table expect you to do?",
      opts: ["Nothing. IT equipment is outside the scope of a fire alarm test","Test only the communicator's own battery, since that is the listed equipment","Ask the IT department to confirm the modem is a current model","Verify that the shared communications equipment has secondary power, test that power source as the table directs, and report it as a deficiency if there is none"],
      a: 3,
      ex: "Shared on-premises equipment such as modems and switches is part of the alarm transmission path. The table's note says the tester is to verify full secondary power for this equipment, and where it is provided it is tested under the same secondary power items as the rest of the system. A communicator with a good battery is useless in a power failure if the modem it talks through goes dark. The trap is to stop at the listed fire alarm equipment.",
      ref: "NFPA 72-2022 Table 14.4.3.2(4); 26.6.3.12"
    },
    {
      id: "2.2.1-16",
      type: "mc",
      q: "A building earned the 5-year sensitivity test interval for its smoke detectors, and the next test is 3 years away. The owner's records show the third floor had 1 nuisance alarm last year and 4 this year. What is required?",
      opts: ["Perform sensitivity (calibration) tests on the detectors in that zone or area now","Nothing until the 5-year date, because the interval was already earned","Go back to alternate-year sensitivity testing for the whole building","Replace every smoke detector on the third floor without testing"],
      a: 0,
      ex: "The extended interval comes with a condition: records of nuisance alarms and their trends are kept, and any zone or area that shows an increase over the previous year gets calibration tests. Only the area with the rising trend is tested, so the whole building does not lose its interval. Waiting for the 5-year date is the common mistake. Look for the cause too, such as dust from construction or a change in how the space is used.",
      ref: "NFPA 72-2022 14.4.4.3"
    },
    {
      id: "2.2.1-17",
      type: "mc",
      q: "A zone of smoke detectors is programmed for alarm verification. At the annual test you hold the detector in smoke and time it. The system goes into alarm 85 seconds after the detector first sensed smoke. What do you record?",
      opts: ["Pass. Verification may delay the alarm up to 90 seconds","Pass. Verification may delay the alarm up to 180 seconds","A deficiency. A detector held in smoke may not have its alarm delayed by more than 1 minute","Nothing. Alarm verification timing is checked only at acceptance"],
      a: 2,
      ex: "The special procedures in the testing table call for an annual check of the time delay and alarm response on circuits that use alarm verification. A detector that stays above its alarm threshold may not delay system functions by more than 1 minute, so 85 seconds fails. Ninety seconds is the supervising station's time limit to verify a signal, and 180 seconds is the investigation time in positive alarm sequence. Those are different features.",
      ref: "NFPA 72-2022 Table 14.4.3.2(26); 23.8.5.4.1"
    },
    {
      id: "2.2.1-18",
      type: "num",
      q: "At the 3-year interval you load test a VRLA battery at the manufacturer's published 3-hour discharge current. A battery at full rated capacity would last 3 hours before reaching the end voltage. This one reaches the end voltage after 2 hours 24 minutes. Ignoring temperature correction, what is its capacity as a percent of rating?",
      unit: "%",
      a: 80,
      tol: 0.5,
      ex: "Capacity is the actual run time divided by the rated run time: 2 h 24 min = 144 minutes, and 144 ÷ 180 = 0.80, or 80 percent. The rule is to replace the battery when capacity is 80 percent or less, so this battery is replaced now. The trap is to read 80 percent as a pass. A result above 80 percent but below 85 percent lets the battery stay in service only until the next scheduled test interval, when it is replaced. The load test uses a discharge rate of 3 hours or more, the test duration is recorded, and the real calculation includes an adjustment for ambient temperature.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "2.2.1-19",
      type: "num",
      q: "When a 12 V VRLA battery unit was installed, its baseline internal resistance was recorded on the unit as 12.5 milliohms. Your ohmic tester reads internal resistance, which rises as a battery ages. At what reading does the semiannual ohmic test first call for replacing the battery?",
      unit: "mΩ",
      a: 17.5,
      tol: 0.05,
      ex: "The battery is replaced when the ohmic value of any unit deviates from its baseline by 40 percent or more for resistance or impedance: 12.5 × 1.40 = 17.5 mΩ. For a tester that reads conductance, the limit is 30 percent, and conductance falls as the battery ages. Using 30 percent here (16.25 mΩ) is the common mix-up. This is why the baseline is written on each unit at installation. The table says to replace the battery, not only the unit that failed. A load test may be used in place of the ohmic test.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "2.2.1-20",
      type: "num",
      q: "A control unit has an adjustable charger and a 24 V battery made of two 12 V VRLA units, each with six cells. The alarm equipment manufacturer gives no float voltage, so you use the value in the testing table's note: 2.265 V per cell at 77 °F. What voltage should you read across the whole battery?",
      unit: "V",
      a: 27.18,
      tol: 0.01,
      ex: "Two 12 V units have 12 cells in all: 12 × 2.265 = 27.18 V. The note allows ±0.015 V per cell, so 27.0 V to 27.36 V is in range. The charger test is done with the battery fully charged and connected to the charger. If the reading is outside the limits, the charger is adjusted or replaced. Where the manufacturer does give a float voltage, that value is used. The trap is to count 6 cells and get 13.59 V, which is one unit only.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "2.2.1-21",
      type: "mc",
      q: "You are about to start the semiannual battery tests on an older control unit. What does the testing table tell the person doing the test to verify <b>before</b> any battery testing starts?",
      opts: ["That all system software stored in volatile memory is protected from loss","That the supervising station has put the account on test for 24 hours","That the batteries have been off the charger for at least one hour","That the building's emergency generator is running"],
      a: 0,
      ex: "Battery testing can interrupt power to the control unit. If the program or its history is held in volatile memory, a power dip could erase it, so the table puts this check ahead of all the battery tests. In practice, confirm a current copy of the site-specific software exists and keep primary power connected while you work on the batteries. The voltage tests are done on charge, so taking the batteries off the charger first is wrong.",
      ref: "NFPA 72-2022 Table 14.4.3.2(9)"
    },
    {
      id: "2.2.1-22",
      type: "mc",
      q: "An owner wants to reduce manual testing on components that the table schedules more often than once a year. Under which condition does NFPA 72 permit the manual testing frequency to be extended to annually?",
      opts: ["The service company has tested the system for at least 5 years with no failures","The building is fully sprinklered","A remotely monitored control unit that is specifically listed for the application performs automatic testing at least weekly","The owner's staff look at the control unit every day and keep a log"],
      a: 2,
      ex: "The Code allows the manual frequency to go to annually only when automatic testing is done at least weekly by a remotely monitored fire alarm control unit that is specifically listed for that use. A clean history, sprinklers or a daily look at the panel do not earn the extension. The annual manual test under the testing table still applies.",
      ref: "NFPA 72-2022 14.4.4.2"
    },
    {
      id: "2.2.1-23",
      type: "mc",
      q: "Heat detectors above a continuous process line were last tested on 10 March 2025. They cannot be reached safely while the line runs, and the AHJ has approved testing them during scheduled shutdowns. The plant's next shutdowns are in June 2026 and November 2026. Which shutdown must be used?",
      opts: ["November 2026. Any scheduled shutdown qualifies once the AHJ approves","June 2026. The extended interval may not exceed 18 months","Neither. They must be tested by March 2026 with the line running","Either one, if the owner agrees in writing"],
      a: 1,
      ex: "Devices that are inaccessible for safety reasons may be tested during scheduled shutdowns when the AHJ approves, but the extended interval may not exceed 18 months. Eighteen months from March 2025 is September 2026. June 2026 is 15 months and is within the limit. November 2026 is 20 months and is too late. Put the planned date in the test plan so it is not missed.",
      ref: "NFPA 72-2022 14.4.4.1"
    },
    {
      id: "2.2.1-24",
      type: "mc",
      q: "A monitor module on the fire alarm system watches the fire pump controller for phase reversal. The pump standard calls for that controller alarm to be tested annually. How often must the fire alarm interface for it be tested?",
      opts: ["Quarterly, because it reports as a supervisory signal","Semiannually, the same as a valve supervisory switch","Monthly, whenever the pump is run","At the frequency the standard for the supervised equipment requires, which is annually here"],
      a: 3,
      ex: "For interface equipment, the test frequency is the same as the frequency required by the standard that covers the equipment being supervised. The table's note uses this exact example: a monitor module on an interface device is not a supervisory device, so it does not pick up the supervisory device schedule. The test is done by operating or simulating the supervised equipment and verifying the signal at the control unit.",
      ref: "NFPA 72-2022 Table 14.4.3.2(20); 14.4.4 (testing frequency)"
    },
    {
      id: "2.2.1-25",
      type: "mc",
      q: "A duct smoke detector with sampling tubes goes into alarm when you put test smoke into its housing. What else does the annual test require for this detector?",
      opts: ["Verify, by a method acceptable to the manufacturer, that the sampling tubes will properly sample the airstream in the duct","Nothing. An alarm at the housing completes the test","Hold a magnet on the housing to confirm the relay","Measure the duct air speed with the fan shut down"],
      a: 0,
      ex: "A duct detector with sampling tubes is tested like any smoke detector, and in addition it must be shown that it will sample the airstream. The usual method is the manufacturer's differential pressure check across the inlet and exhaust tubes with the fan running. Smoke at the housing only proves the sensing head. A turned or plugged tube, or a missing end cap, leaves a detector that tests fine and sees no duct air.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "2.2.1-26",
      type: "mc",
      q: "A multi-criteria detector combines a photoelectric smoke sensor and a heat sensor. The manufacturer's published instructions give no way to test the heat sensor on its own. What does the testing table call for?",
      opts: ["Replace it with two separate single-sensor detectors","Heat it with a heat gun until the unit alarms","Test the primary sensor, following the manufacturer's published instructions","Leave it untested and note that it cannot be tested"],
      a: 2,
      ex: "Multi-sensor and multi-criteria detectors are tested by the manufacturer's instructions. Each sensor is tested independently where that can be done. Where the sensors cannot be tested one at a time, the primary sensor is tested. The table's note gives this case: the heat sensor in a thermally enhanced smoke detector may not be testable alone. Improvised heat can damage the unit and proves nothing about its alarm decision.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "2.2.1-27",
      type: "mc",
      q: "An air sampling smoke detector protects a data room through two pipe runs. The detector has no automatic, listed airflow supervision feature. How is it tested each year?",
      opts: ["Introduce smoke at the detector's inlet and check the alarm","Introduce smoke at any one sampling port in the room","Check the airflow reading on the display. No smoke is needed","Introduce smoke at the end sampling port of each pipe run and verify airflow through all the other ports"],
      a: 3,
      ex: "Smoke at the end port has to travel the full length of the pipe, so it proves the whole run and gives the longest transport time. Airflow is then verified at every other port, because a blocked port upstream would not stop smoke from the end port reaching the detector. Smoke at the detector inlet proves the detector and none of the piping. Each pipe run is tested.",
      ref: "NFPA 72-2022 Table 14.4.3.2(17)"
    },
    {
      id: "2.2.1-28",
      type: "num",
      q: "As part of the annual secondary power test on an emergency voice/alarm communications system, you check the battery against the load. Manufacturer's data gives 0.62 A in standby and 3.4 A in alarm. The system needs 24 hours of standby followed by 15 minutes of alarm. Using the NFPA 72-2022 correction factor, what is the smallest rated capacity that meets the demand? Answer in Ah to two decimal places.",
      unit: "Ah",
      a: 19.66,
      tol: 0.05,
      ex: "Standby: 0.62 A × 24 h = 14.88 Ah. Alarm: 3.4 A × 0.25 h = 0.85 Ah. Total 15.73 Ah × 1.25 = 19.66 Ah. An installed 18 Ah battery fails this check, even if its voltage tests are good. Two traps: using 5 minutes of alarm, which is for systems without voice, gives 18.95 Ah, and using the older 1.20 margin gives 18.88 Ah. Loads grow as devices are added, which is why the test repeats this check every year.",
      ref: "NFPA 72-2022 Table 14.4.3.2(8); 10.6.7.2.14"
    },
    {
      id: "2.2.1-29",
      type: "mc",
      q: "A new technician asks whether the annual test must include opening a connection at 10 percent of the devices on every circuit. What is the correct answer for <b>periodic</b> testing of metallic conductors?",
      opts: ["Yes. The 10 percent sample is repeated every year","No. The 10 percent sample belongs to initial and reacceptance testing. Each year, every initiating device circuit, notification appliance circuit and signaling line circuit is tested for correct indication at the control unit","No. Circuit integrity is tested only at acceptance and never again","Yes, and stray voltage and loop resistance are also measured again every year"],
      a: 1,
      ex: "At acceptance and reacceptance, a fault is introduced at not less than 10 percent of the devices and appliances on every circuit. For periodic testing, the table calls for each circuit to be tested for correct indication at the control unit, which means proving that an open gives a trouble on every IDC, NAC and SLC. Stray voltage, ground fault, short circuit and loop resistance tests have no periodic frequency. They are acceptance tests.",
      ref: "NFPA 72-2022 Table 14.4.3.2(15)"
    },
    {
      id: "2.2.1-30",
      type: "multi",
      q: "Your annual test includes a releasing control unit for a clean agent system in a server room. Which TWO statements match NFPA 72-2022?",
      opts: ["The person doing the test must be qualified and experienced in the arrangement and operation of that suppression system and its releasing functions","One full agent discharge is required each year to prove the cylinders","The release solenoid circuit is tested by verifying that the solenoid operates, with no agent discharged","Abort switches are not tested, because they are not initiating devices","Releasing circuits are outside Chapter 14 and are left to the sprinkler contractor"],
      a: [0,2],
      ex: "Testing personnel for releasing systems must know the specific system and the hazard of an accidental discharge. The special hazard items in the testing table cover the solenoid circuit, abort switches and cross-zone circuits, all on an annual schedule. The solenoid is proved to operate, and the table's note says no agent is expected to be discharged. Secure the release against discharge as the manufacturer directs, and write the method into the test plan.",
      ref: "NFPA 72-2022 14.2.6.1; Table 14.4.3.2(18)"
    }
  ],
  "2.2.2": [
    {
      id: "2.2.2-01",
      type: "mc",
      q: "A control unit fails on Friday afternoon and the replacement board will not arrive until Monday. After how long out of service must the service provider report the system to the authority having jurisdiction?",
      opts: ["More than 4 hours","More than 8 hours","More than 24 hours","More than 48 hours"],
      a: 1,
      ex: "The service provider reports any system that is out of service for more than 8 hours to the AHJ. The owner or the owner's representative is notified of any impairment, whatever its length, and again when it ends. Twenty-four hours is the time limit for the written notice of uncorrected test deficiencies, which is a different rule.",
      ref: "NFPA 72-2022 10.21.4; 10.21.1"
    },
    {
      id: "2.2.2-02",
      type: "mc",
      q: "The fire alarm system in a hotel will be down over a weekend. The manager asks you whether a fire watch is needed. What is the correct answer?",
      opts: ["No. A fire watch is only for sprinkler impairments","Yes, but only if the system is down for more than 72 hours","Mitigating measures acceptable to the AHJ must be in place for the impairment period, so the AHJ decides what is acceptable","That decision belongs to the service technician alone"],
      a: 2,
      ex: "NFPA 72 requires mitigating measures that are acceptable to the AHJ for as long as the impairment lasts. A fire watch is the most common measure, but the AHJ decides what is acceptable for that building. Your job is to notify the owner, see that the AHJ is told, and write down what was decided. Do not set the terms yourself.",
      ref: "NFPA 72-2022 10.21.5"
    },
    {
      id: "2.2.2-03",
      type: "mc",
      q: "A panel shows a ground fault trouble. The owner and the supervising station have been notified. What is the most efficient next step?",
      opts: ["Lift the field circuits from the panel one at a time until the ground fault clears, then work that circuit","Replace the main board, since ground detection circuits fail often","Megger every circuit with the devices still connected","Remove the ground-fault detection jumper so the trouble clears"],
      a: 0,
      ex: "Isolate first. Lifting one circuit at a time shows which circuit carries the ground. Then you split that circuit in half, and in half again, until you reach the damaged spot. Disabling ground detection hides the fault and removes a required monitoring function. Using an insulation tester with devices connected can destroy the devices.",
      ref: "NFPA 72-2022 Ch 12 (monitoring for integrity); Table 14.4.3.2(15)"
    },
    {
      id: "2.2.2-04",
      type: "mc",
      q: "You want to use an insulation resistance tester (megger) at 500 V to find damaged insulation on an addressable SLC. What must be done first?",
      opts: ["Nothing. The SLC devices are rated for the test voltage","Set the tester to the ohms range and leave the panel connected","Power the panel down but leave all field devices connected","Disconnect the conductors from the control unit and remove or isolate every electronic device on the circuit"],
      a: 3,
      ex: "An insulation tester puts hundreds of volts on the conductors. Addressable devices, isolators and panel circuits are built for about 24 V and will be damaged. Only bare conductors are tested this way, so the panel and all devices come off the circuit first. Follow the manufacturer's published instructions, as the Code requires for conductor tests.",
      ref: "NFPA 72-2022 Table 14.4.3.2(15); manufacturer's published instructions"
    },
    {
      id: "2.2.2-05",
      type: "mc",
      q: "On a conventional NAC with the panel in normal standby, you put the red lead on the terminal marked NAC+ and the black lead on NAC−. The meter shows a steady <b>negative</b> voltage. The panel shows no trouble. What does this tell you?",
      opts: ["The circuit is wired backward and must be reversed","This is normal. The panel supervises the NAC with reversed polarity and flips it in alarm","The end-of-line resistor is missing","There is a ground fault on the positive conductor"],
      a: 1,
      ex: "A conventional NAC is supervised in standby with reversed polarity. The appliances are polarized and ignore it, and a small supervisory current flows through the end-of-line resistor. In alarm the panel reverses polarity and the appliances operate. Reversing the wires because of a standby reading would create a real fault.",
      ref: "Field practice; NFPA 72-2022 Ch 12 (monitoring for integrity)"
    },
    {
      id: "2.2.2-06",
      type: "num",
      q: "A Class B initiating device circuit uses a 4.7 kΩ end-of-line resistor. Someone T-tapped a new device onto the circuit and put a second 4.7 kΩ resistor at the end of the tap. With the pair disconnected from the panel and all devices normal, what does your ohmmeter read across the pair? Ignore wire resistance.",
      unit: "Ω",
      a: 2350,
      tol: 5,
      ex: "Two equal resistors in parallel give half the value: 4,700 ÷ 2 = 2,350 Ω. A reading of half the EOL value is the sign of a second resistor on a T-tap. Remove the tap and wire the device in and out. Past a T-tap, an open on either leg may not be seen by the panel.",
      ref: "Ugly's Electrical References (parallel resistance); NFPA 72-2022 Ch 12 (monitoring for integrity)"
    },
    {
      id: "2.2.2-07",
      type: "num",
      q: "A NAC wired with 14 AWG solid copper (3.07 Ω per 1,000 ft) shows a short. You disconnect the pair at the panel, zero your meter leads, and measure 2.15 Ω across the pair. About how many feet from the panel is the short, measured along the cable run?",
      unit: "ft",
      a: 350,
      tol: 2,
      ex: "The meter current goes out on one conductor and back on the other, so it sees twice the distance. Total wire = 2.15 ÷ 3.07 × 1,000 = 700 ft. Distance to the short = 700 ÷ 2 = 350 ft. Forgetting to divide by two sends you looking 700 ft down the run.",
      ref: "NEC 2020 Chapter 9 Table 8; Ugly's Electrical References (Ohm's law)"
    },
    {
      id: "2.2.2-08",
      type: "num",
      q: "To correct a sequence-of-operation deficiency, the site-specific software is changed. The system has 860 initiating devices, and 60 of them are directly affected by the change. Besides testing everything affected by the change, how many of the devices <b>not</b> directly affected must be tested?",
      unit: "devices",
      a: 50,
      tol: 0,
      ex: "Everything affected by the change is tested 100 percent. In addition, 10 percent of the initiating devices not directly affected are tested, up to a maximum of 50. Here 860 − 60 = 800, and 10 percent of that is 80, so the cap of 50 applies. A revised record of completion is then prepared.",
      ref: "NFPA 72-2022 14.4.2.4"
    },
    {
      id: "2.2.2-09",
      type: "multi",
      q: "One conductor of a Class B notification appliance circuit is touching a grounded junction box. Which TWO statements describe how the system should behave?",
      opts: ["The control unit indicates a trouble signal for the ground fault","The appliances sound as soon as the ground occurs","The circuit is still able to operate in alarm with this single ground","The panel reports a supervisory signal, not a trouble","Nothing is indicated until a second conductor also grounds"],
      a: [0,2],
      ex: "A single ground is a trouble condition and the circuit should still work. That is why it must be fixed promptly: a second ground on the other conductor acts like a short and can take the circuit out. Supervisory signals are for monitored conditions such as a closed sprinkler valve. They are not used for wiring faults.",
      ref: "NFPA 72-2022 Ch 12 (pathway class designations and monitoring for integrity)"
    },
    {
      id: "2.2.2-10",
      type: "mc",
      q: "A short on the addressable SLC at the third floor knocks out every device on floors 2 through 5. Each floor is a separate zone. What is the deficiency?",
      opts: ["None. A short is allowed to disable the whole SLC","The SLC needs a larger conductor","Fault isolation is missing or misplaced. A single fault must not take out the addressable devices in more than one zone","The panel must be changed to a conventional panel"],
      a: 2,
      ex: "A single fault on a pathway serving addressable devices may not cause the loss of devices in more than one zone. Isolator modules, or separate circuits for each zone, limit the damage. Fix the short, then correct the isolation so the next short affects one floor only.",
      ref: "NFPA 72-2022 23.6.1"
    },
    {
      id: "2.2.2-11",
      type: "mc",
      q: "A sensitivity test shows three spot-type smoke detectors reading outside their listed and marked sensitivity range. What is the correct action?",
      opts: ["Leave them in service if they still alarm with canned smoke","Change the alarm verification time so they are less likely to alarm","Note it and recheck at the next 5-year interval","Clean and recalibrate them, or replace them"],
      a: 3,
      ex: "A detector outside its marked range is either too sensitive, which gives nuisance alarms, or not sensitive enough, which gives a late alarm. The Code calls for cleaning and recalibrating, or replacing. Passing a canned smoke test only shows the detector can alarm. After the work, each detector is functionally tested and the result recorded.",
      ref: "NFPA 72-2022 14.4.4.3"
    },
    {
      id: "2.2.2-12",
      type: "multi",
      q: "You replace one failed addressable smoke detector with an identical model at the same address. No programming is changed. Which TWO must be done before the job is complete?",
      opts: ["Functionally test the replacement detector","Retest 10 percent of all other devices, up to 50","Record the repair and the test in the system's inspection, testing and maintenance records","Repeat the full acceptance test of the system","Nothing more, once the panel shows normal"],
      a: [0,2],
      ex: "A device that is added or replaced is functionally tested, and the work goes into the records. The 10 percent, 50-device rule belongs to site-specific software changes, which did not happen here. A normal panel only shows that the detector is communicating. It does not show that smoke can enter the chamber and cause an alarm.",
      ref: "NFPA 72-2022 14.4.2; 14.6.2.4"
    },
    {
      id: "2.2.2-13",
      type: "mc",
      q: "A building owner cancels the monitoring contract for a system that is required to be monitored. Under the impairment rules in NFPA 72-2022, who must report this to the authority having jurisdiction?",
      opts: ["The building owner","The service technician, at the next annual test","The supervising station","Nobody. It is a private contract matter"],
      a: 2,
      ex: "The supervising station reports to the AHJ any system for which required monitoring has been terminated. This is a separate duty from the service provider's report of a system out of service for more than 8 hours. If you find a required system with its communicator disconnected, treat it as an impairment: tell the owner and document it.",
      ref: "NFPA 72-2022 10.21.3"
    },
    {
      id: "2.2.2-14",
      type: "mc",
      q: "A control unit's main circuit board fails. You replace it with the same model and reload the saved site-specific program with no changes. What retest does the reacceptance rule for control unit hardware call for?",
      opts: ["None, once the panel shows normal","Test the control unit's functions and its lamps and LEDs, using the control unit items in the testing table","Repeat the full acceptance test on every device in the building","Test 10 percent of the initiating devices, up to 50"],
      a: 1,
      ex: "When control unit hardware is modified or repaired, the control unit is tested under the testing table's control unit items for functions and for lamps and LEDs. That means proving alarm, supervisory and trouble inputs, the outputs, circuit supervision and power supervision. The 10 percent rule, with its 50-device cap, applies when the site-specific software is changed, and here it was not. A normal display alone proves very little about a new board.",
      ref: "NFPA 72-2022 14.4.2.3"
    },
    {
      id: "2.2.2-15",
      type: "mc",
      q: "A conventional panel has shown a ground fault for a week. It was traced to the positive conductor of zone 2 and left for a later visit. Now zone 2 goes into alarm during heavy rain, with no detector latched. What is the most likely cause?",
      opts: ["A second ground on the other conductor of the zone. Two grounds act as a short across the pair, and a conventional zone reads a short as an alarm","The end-of-line resistor has failed open","The ground-fault detection circuit has failed","The batteries are weak"],
      a: 0,
      ex: "One ground gives a trouble and the circuit keeps working. A second ground on the opposite conductor connects the two conductors together through the building steel, and on a conventional initiating device circuit that looks like a device in alarm. This is the reason a single ground must be repaired promptly. An open end-of-line resistor would give a trouble. It would not give an alarm.",
      ref: "Field practice (second ground fault); NFPA 72-2022 Ch 12 (monitoring for integrity)"
    },
    {
      id: "2.2.2-16",
      type: "num",
      q: "A ground fault is somewhere in the field wiring of a Class B circuit that has 64 wire spans between devices. You use the half-split method: open the circuit at the midpoint of the suspect section, find which half holds the ground, and repeat. What is the largest number of splits needed to narrow the fault down to one span?",
      unit: "splits",
      a: 6,
      tol: 0,
      ex: "Each split cuts the suspect section in half: 64, 32, 16, 8, 4, 2, 1. That is 6 splits. Checking span by span from one end could take up to 63 checks. Reconnect each opened point as you go and note where you opened the circuit, so that every device you disturbed can be tested at the end.",
      ref: "Field practice (half-split fault finding)"
    },
    {
      id: "2.2.2-17",
      type: "num",
      q: "An annual test finds weak strobes at the end of a 24 V notification appliance circuit. The circuit is 14 AWG solid copper (3.07 Ω per 1,000 ft), 420 ft one-way. It was designed for 10 strobes at 0.158 A each, and a tenant fit-out added 3 more of the same strobe. Use 20.4 V at the panel terminals, a 16 V appliance minimum, and treat all the appliances as one load at the end of the run. What is the fewest strobes that must be moved to another circuit?",
      unit: "strobes",
      a: 3,
      tol: 0,
      ex: "Wire resistance = 2 × 420 ft × 3.07 ÷ 1,000 = 2.58 Ω. The allowed drop is 20.4 − 16 = 4.4 V, so the most current the run can carry is 4.4 ÷ 2.58 = 1.71 A. That is 1.71 ÷ 0.158 = 10.8, so 10 strobes. With 13 on the circuit, 3 must move. Check: 10 strobes draw 1.58 A and drop 4.07 V, leaving 16.33 V. Eleven would leave 15.92 V, which fails. Forgetting the × 2 for both conductors makes all 13 look acceptable.",
      ref: "NEC 2020 Chapter 9 Table 8; Ugly's Electrical References 2020 (voltage drop)"
    },
    {
      id: "2.2.2-18",
      type: "num",
      q: "A damaged section of an addressable SLC must be rerouted. The whole circuit is 18 AWG solid copper (7.77 Ω per 1,000 ft). Before the damage, the loop resistance measured with the far end shorted was 31.5 Ω, and the manufacturer's limit is 40 Ω. The new route is 600 ft longer than the section it replaces, and you plan to use the same 18 AWG cable. What loop resistance should you expect after the reroute?",
      unit: "Ω",
      a: 40.82,
      tol: 0.05,
      ex: "The extra cable adds two conductors of 600 ft each: 2 × 600 × 7.77 ÷ 1,000 = 9.32 Ω. 31.5 + 9.32 = 40.82 Ω, which is over the 40 Ω limit, so this plan fails before any cable is pulled. If the extra 600 ft were 16 AWG solid (4.89 Ω per 1,000 ft), it would add only 5.87 Ω, for 37.37 Ω. The trap is to count one conductor and get 36.16 Ω, which looks like a pass. Loop resistance must stay within the manufacturer's published limit, so measure it again after the repair and record it.",
      ref: "NFPA 72-2022 Table 14.4.3.2(15); NEC 2020 Chapter 9 Table 8"
    },
    {
      id: "2.2.2-19",
      type: "mc",
      q: "A panel shows a ground fault, and you have traced it to a 24 V auxiliary power circuit that feeds door holders. With the circuit powered, your meter reads 24.1 V from the positive conductor to the grounded cabinet and 0.2 V from the negative conductor to the cabinet. What does this tell you?",
      opts: ["The positive conductor is grounded, because it shows the voltage","Both conductors are grounded","The circuit is healthy and the panel's detection circuit is at fault","The negative conductor is grounded, because it sits at almost the same potential as ground"],
      a: 3,
      ex: "A conductor that is touching ground has nearly zero volts between it and ground. The other conductor then shows the full circuit voltage to ground. On a healthy circuit neither conductor is tied to ground, and the two readings usually sit somewhere in between. The trap is to pick the conductor with the high reading. Confirm with the power off and an ohmmeter, with the circuit lifted from the panel, before you start opening boxes.",
      ref: "Field practice (voltage-to-ground readings); NFPA 72-2022 Ch 12 (monitoring for integrity)"
    },
    {
      id: "2.2.2-20",
      type: "mc",
      q: "You replace a failed addressable smoke detector at address 045 with a new one of the same model. The panel now reports address 045 as missing, and a new trouble appears at address 054, which was normal before. What is the most likely cause?",
      opts: ["The new detector was set to 054 by mistake, so 045 is missing and two devices are answering at 054","The SLC has a ground fault near the new detector","The detector at 054 failed at the same moment","The panel's program has been corrupted and must be reloaded"],
      a: 0,
      ex: "A transposed address explains both troubles at once. Nothing answers at 045, and two devices answer at 054, which the panel reports as a duplicate address or an invalid reply. Set the address correctly, confirm both troubles clear, then functionally test the new detector and check that the panel shows the right location text. Reloading the program is a large step to take before a 10-second look at the address setting.",
      ref: "Field practice (addressable device troubles)"
    },
    {
      id: "2.2.2-21",
      type: "mc",
      q: "A smoke detector in a dusty workshop keeps causing nuisance alarms. With the designer's and AHJ's approval, it is replaced by an addressable heat detector, and the point's device type is changed in the panel program. What testing is required?",
      opts: ["A functional test of the new heat detector only, the same as a like-for-like replacement","No testing, once the type mismatch trouble clears","Everything affected by the change is tested 100 percent, 10 percent of the initiating devices not directly affected are tested up to a maximum of 50, and the record of completion is revised","A full acceptance test of every device and appliance in the building"],
      a: 2,
      ex: "Changing the device type in the program is a change to the site-specific software. That brings in the software rule: 100 percent of what the change affects, plus 10 percent of the initiating devices not directly affected, with a cap of 50, and a revised record of completion. A like-for-like swap with no programming change needs only a functional test of the device, and treating this job the same way is the trap.",
      ref: "NFPA 72-2022 14.4.2.4"
    },
    {
      id: "2.2.2-22",
      type: "mc",
      q: "A Class B notification appliance circuit with 12 horn-strobes shows an open-circuit trouble in standby. In an alarm test, all 12 appliances operate. Where is the fault most likely to be?",
      opts: ["Between the panel and the first appliance","At appliance 6, which is wired with reversed polarity","A ground fault on the positive conductor","Past the last appliance: the end-of-line resistor is missing, broken or the wrong value, or the wire to it is open"],
      a: 3,
      ex: "Every appliance operates, so the conductors are continuous from the panel through appliance 12. The supervisory current still cannot complete its path, which leaves the end of the line. Check the resistor's value against the panel manufacturer's instructions and check its connections. An open ahead of the first appliance would silence all twelve. A reversed appliance would fail to operate and would not cause an open trouble.",
      ref: "Field practice (NAC open-circuit trouble); NFPA 72-2022 Ch 12 (monitoring for integrity)"
    },
    {
      id: "2.2.2-23",
      type: "mc",
      q: "A low-power radio (wireless) smoke detector has reported a low battery trouble. Staff silence it, and the trouble signal sounds again a few hours later. The manager says the panel must be faulty, because other silenced troubles come back only once a day. What is correct?",
      opts: ["The panel is faulty. Every silenced trouble re-sounds at 24 hours","The panel is working as required. A wireless device's battery depletion trouble re-sounds every 4 hours or less until it is restored, so replace the battery","The detector has lost its radio link and must be enrolled again","The re-sound time can be set to 7 days in programming to stop the complaints"],
      a: 1,
      ex: "A silenced trouble normally re-sounds every 24 hours. The trouble for a depleted or failed primary battery in a wireless device is treated more strictly: it re-sounds automatically every 4 hours or less until the condition is restored. The fix is to replace the battery with the type the manufacturer specifies and then test the detector. Stretching the re-sound time would hide a device that is about to stop working.",
      ref: "NFPA 72-2022 10.15.9.2"
    },
    {
      id: "2.2.2-24",
      type: "mc",
      q: "To correct a damaged circuit, you pull a new power-limited fire alarm cable above an accessible suspended ceiling. The old cable is disconnected at both ends and left in place, with no tag. What does the NEC require for the old cable?",
      opts: ["The accessible portion must be removed, unless the cable is identified for future use with a durable tag","Nothing, as long as both ends are taped off","It must stay in place as a spare for the new circuit","It must be painted red so that it is not mistaken for a live circuit"],
      a: 0,
      ex: "Abandoned fire alarm cable is cable that is not terminated at equipment and not identified for future use with a tag. Its accessible portion must be removed, because dead cable adds fuel load in the ceiling and confuses the next technician. If the owner wants it kept, it is tagged for future use with a tag that will last in that environment. Taping the ends does not meet the rule.",
      ref: "NEC 2020 760.25"
    },
    {
      id: "2.2.2-25",
      type: "num",
      q: "Strobes are dim on a notification appliance circuit and you suspect a bad splice. With the circuit in alarm and drawing 1.2 A, you measure 1.8 V across the splice itself, from one side of the connection to the other. What is the resistance of the splice?",
      unit: "Ω",
      a: 1.5,
      tol: 0.01,
      ex: "R = V ÷ I = 1.8 ÷ 1.2 = 1.5 Ω. A good splice measures close to zero volts under load. This one adds as much resistance as about 244 ft of 14 AWG two-conductor circuit (1.5 ÷ 0.00614 Ω per ft), and it turns 1.8 V × 1.2 A = 2.16 W into heat. An ohmmeter check with the power off often misses a loose connection. Measuring voltage across each connection while the circuit is carrying alarm current finds it.",
      ref: "Field practice (voltage drop across a splice); Ugly's Electrical References 2020 (Ohm's law)"
    },
    {
      id: "2.2.2-26",
      type: "mc",
      q: "A failed corridor strobe is replaced with another manufacturer's strobe of the same candela rating. It flashes, but out of step with the other four strobes in view. What is the correct fix?",
      opts: ["Leave it. Synchronization is only a comfort feature","Add a second end-of-line resistor at the new strobe","Install an appliance that is compatible with the circuit's synchronization protocol and listed for use with the control unit or power supply","Lower the candela setting on the other four strobes"],
      a: 2,
      ex: "Each manufacturer uses its own synchronization signal, so a strobe from another manufacturer on the same circuit will usually free-run. Strobes in the same field of view are required to flash in step, which protects people with photosensitive epilepsy. Matching the candela is not enough. The replacement must be compatible with the circuit and the synchronization method in use. After the swap, watch the whole corridor in alarm to confirm.",
      ref: "Field practice (strobe compatibility and synchronization); NFPA 72-2022 Ch 18 (visual appliances)"
    },
    {
      id: "2.2.2-27",
      type: "mc",
      q: "You arrive for a service call and find that a zone covering the loading dock has been disabled at the panel. Nobody on site knows why, and there is no record of it. What should you do?",
      opts: ["Re-enable the zone and say nothing, since it is fixed","Leave it as found, because it is not on your work order","Delete the zone from the program so the disable message clears","Tell the owner's representative that part of the system is impaired, find the cause, then restore and test the zone, or document it as a continuing impairment"],
      a: 3,
      ex: "A disabled zone is an impairment of part of the system, and the owner or the owner's representative must be notified of it. Find out why it was disabled before you re-enable it. A zone is often bypassed to hide a nuisance alarm or a fault that still needs repair. If it cannot be restored the same day, it stays a documented impairment, and the 8-hour report to the AHJ and any mitigating measures the AHJ requires come into play.",
      ref: "NFPA 72-2022 10.21.1"
    },
    {
      id: "2.2.2-28",
      type: "multi",
      q: "You found a ground fault at a pinched conductor in a junction box and repaired it. Which TWO steps confirm the repair before you leave?",
      opts: ["Reconnect every circuit you lifted and confirm the ground fault trouble clears and stays clear","Megger the repaired circuit at 500 V with the devices back in place","Turn off the panel's ground-fault detection for a day to see whether anything else shows up","Functionally test the devices and appliances that you disconnected or disturbed during the search","Test 10 percent of all the devices on the system, up to 50"],
      a: [0,3],
      ex: "The repair is proved with every circuit back on the panel, because a second ground on another circuit can hide behind the first. Everything you opened or disconnected during the search is then tested, since a lifted wire that was put back loosely becomes the next trouble call. A megger with devices connected can destroy them. The 10 percent rule is for site-specific software changes. Record the fault location and the tests in the service report.",
      ref: "Field practice (verifying a ground-fault repair); NFPA 72-2022 Ch 14 (reacceptance testing)"
    },
    {
      id: "2.2.2-29",
      type: "multi",
      q: "A control unit keeps reporting AC power loss. You find it is fed from a 20 A breaker that also supplies corridor receptacles, and the breaker is a GFCI type that trips when the cleaning crew plugs in a floor machine. Which TWO corrections are required?",
      opts: ["Supply the control unit from a dedicated branch circuit with no other loads","Fit larger batteries so that the AC loss no longer matters","Supply the circuit through a breaker that is not GFCI or AFCI protected","Program a longer delay on the AC loss trouble","Label the receptacles so the cleaning crew does not use them"],
      a: [0,2],
      ex: "The branch circuit for fire alarm equipment must be dedicated, and it may not be supplied through ground-fault or arc-fault circuit interrupters. The breaker is also identified in red, marked as the fire alarm circuit, and its location is noted at the control unit. Larger batteries, a longer delay or a label only cover up a power supply that does not meet the Code. This work is done by a qualified electrician, and it is reported to the owner as a deficiency.",
      ref: "NEC 2020 760.121(B); NFPA 72-2022 10.6.5.1"
    },
    {
      id: "2.2.2-30",
      type: "mc",
      q: "A Class A signaling line circuit has an isolator module after every 20 devices. The panel shows a short-circuit trouble, and devices 41 through 60 are missing. Every other device still reports. Where do you look for the short?",
      opts: ["At the panel's SLC terminals","In the wiring and devices between the isolator ahead of device 41 and the isolator after device 60","Anywhere on the loop, since a short affects the whole circuit","Only at device 41, the first one missing"],
      a: 1,
      ex: "The isolators on each side of a short open and cut that section out of the loop. The panel then reaches the rest of the devices from both ends of the Class A circuit. The missing group tells you which section holds the short, so the search is limited to 20 devices and the wire between them. Lift the section and split it in half to find the exact spot. When it is repaired, confirm the isolators restore and all 20 devices report, then test what you disturbed.",
      ref: "Field practice (isolator modules and short circuits); NFPA 72-2022 Ch 12 (pathway class designations)"
    }
  ],
  "2.2.3": [
    {
      id: "2.2.3-01",
      type: "num",
      q: "An annual test is completed in March 2024 and the next annual test is done in March 2025. What is the earliest year the March 2024 test records may be discarded?",
      unit: "",
      a: 2026,
      tol: 0,
      ex: "Inspection, testing and maintenance records are kept until the next test and for 1 year after that. The next test was March 2025, so the 2024 records stay on file until March 2026. The system owner is responsible for keeping them. Many owners keep them longer, and that is allowed.",
      ref: "NFPA 72-2022 14.6.2.1"
    },
    {
      id: "2.2.3-02",
      type: "mc",
      q: "A system impairment is corrected on March 3. How long must the record of that impairment be kept, and by whom?",
      opts: ["1 year from the date it was corrected, by the system owner or the owner's representative","90 days, by the service company","Until the next annual test, by the supervising station","For the life of the system, by the AHJ"],
      a: 0,
      ex: "The owner or the owner's designated representative keeps a record of each impairment for 1 year from the date it is corrected. A good service report gives the owner what is needed: what was impaired, when, who was notified, and when it was restored. Life of the system is the retention period for design documents.",
      ref: "NFPA 72-2022 10.21.2"
    },
    {
      id: "2.2.3-03",
      type: "mc",
      q: "How long must the documents that show the system's design and function, such as shop drawings, calculations and the sequence of operation, be kept?",
      opts: ["1 year after acceptance","Until the next test plus 1 year","10 years","For the life of the system"],
      a: 3,
      ex: "Design and function documents are kept for the life of the system, because every later change or repair is checked against them. Next test plus 1 year is the rule for periodic inspection and testing records. Mixing up the two retention periods is the common error.",
      ref: "NFPA 72-2022 7.7.1.4"
    },
    {
      id: "2.2.3-04",
      type: "mc",
      q: "You finish programming a software-based fire alarm system. What does NFPA 72 require for the site-specific software?",
      opts: ["Only the installing company keeps a copy, because it is proprietary","A copy is given to the owner or the owner's representative, and a copy is stored on site in memory that cannot be erased or rewritten","A printed listing of the program kept at the supervising station","No copy is needed if the panel has battery backup"],
      a: 1,
      ex: "The owner gets a copy of the site-specific software, and a copy stays on site on non-volatile, non-erasable, non-rewritable media. If the panel fails, the next technician can restore the exact program in place of rebuilding it from memory. Site-specific software is the job's programming, not the manufacturer's operating firmware.",
      ref: "NFPA 72-2022 7.5.7"
    },
    {
      id: "2.2.3-05",
      type: "mc",
      q: "On a service call you find the record drawings and last year's test report rolled up inside the fire alarm control unit cabinet, resting on the batteries. What should be done?",
      opts: ["Leave them there, since that is the required location","Send them to the AHJ for storage","Move them to the documentation cabinet. Record documents are not to be stored in the control unit","Throw away the drawings once the test report is filed"],
      a: 2,
      ex: "Record documentation belongs in the documentation cabinet and is not stored in the control unit. Paper inside a control cabinet gets in the way of service and sits beside batteries and live terminals. If there is no documentation cabinet, tell the owner and note it on your report.",
      ref: "NFPA 72-2022 7.7.2.3"
    },
    {
      id: "2.2.3-06",
      type: "multi",
      q: "Which THREE items are part of the completion documentation turned over to the owner at the end of an installation?",
      opts: ["Owner's manual and the manufacturer's published instructions for the equipment","The installer's labor time sheets","Record (as-built) drawings","A completed record of completion","The contractor's original bid take-off"],
      a: [0,2,3],
      ex: "The owner receives the owner's manual and manufacturer's instructions, the record drawings and the completed record of completion. On a software-based system a copy of the site-specific software is included as well. Time sheets and bid documents are the contractor's business records. They are not system documentation.",
      ref: "NFPA 72-2022 7.5 (completion documentation)"
    },
    {
      id: "2.2.3-07",
      type: "mc",
      q: "Two years after acceptance, a tenant build-out adds 12 devices to the system. How is the record of completion handled?",
      opts: ["The changes go on a revised version, which is kept as a supplement to the original, unaltered documents","The original is corrected in pen and initialed","The original is thrown away and replaced by a new one","Nothing is needed for fewer than 50 devices"],
      a: 0,
      ex: "Changes made after the first installation are recorded on a revised version of the completion documents. The original is kept unaltered and the revision is added to it as a supplement, so the history of the system can be followed. The 50-device figure is a retesting limit after software changes and has nothing to do with paperwork.",
      ref: "NFPA 72-2022 7.5.6.6"
    },
    {
      id: "2.2.3-08",
      type: "mc",
      q: "You are doing an annual test on an existing system. Which form documents this work?",
      opts: ["The record of completion, Figure 7.8.2(a)","The shop drawing title block","The supervising station's signal log","The record of inspection and testing, from the inspection and testing forms that follow the completion forms in Chapter 7"],
      a: 3,
      ex: "Periodic work is documented on a record of inspection and testing. In the 2022 edition the completion forms are Figures 7.8.2(a) through (f), and the inspection and testing forms are (g) through (l). The record of completion documents the installation and acceptance. It is revised only when the system itself is changed.",
      ref: "NFPA 72-2022 7.6.6; 7.8.2; 14.6.2.4"
    },
    {
      id: "2.2.3-09",
      type: "mc",
      q: "For how long must a supervising station keep its records of the signals it receives from a protected premises?",
      opts: ["30 days","At least 1 year","At least 3 years","For the life of the system"],
      a: 1,
      ex: "Signal records at the supervising station are kept for at least 1 year. They are useful to you during troubleshooting: the station's history shows when troubles, supervisory signals and alarms came in. The 2025 edition moved this paragraph down one number, so check which edition you are reading.",
      ref: "NFPA 72-2022 7.7.1.3"
    },
    {
      id: "2.2.3-10",
      type: "multi",
      q: "Which TWO statements about fire alarm system records are correct?",
      opts: ["They must be available for examination by the AHJ","Only the service company may hold them","They may be kept on paper or electronically","They are needed only for systems monitored by a supervising station","They may be discarded once the AHJ signs the acceptance"],
      a: [0,2],
      ex: "Records are kept so they can be examined by the AHJ, and paper or electronic media are both accepted. The owner is responsible for them, even when a service company prepares them. Records are required for every system, monitored or not, and the acceptance documents are kept. They are not thrown out after sign-off.",
      ref: "NFPA 72-2022 7.7.1.2; Ch 14 (records)"
    },
    {
      id: "2.2.3-11",
      type: "mc",
      q: "Before an annual test, the owner asks you not to operate the elevator recall and the smoke control fans this visit. Their mechanical contractor will be scheduled later. Where should this limit on the scope of testing be recorded?",
      opts: ["Nowhere. A verbal agreement is enough","On the panel door in marker","In the written test plan, and noted in the test record","In the as-built drawings"],
      a: 2,
      ex: "A written test plan sets out the scope of the testing, so everyone knows what was and was not tested. The untested functions are still due and must be scheduled. Without the plan and a note on the report, the next reader will assume the full system was tested.",
      ref: "NFPA 72-2022 14.2.10"
    },
    {
      id: "2.2.3-12",
      type: "mc",
      q: "A new system's documentation cabinet is mounted in the electrical room because there is no space beside the control unit in the lobby. What else is needed?",
      opts: ["Nothing. Any location is acceptable","The cabinet's location must be identified at the control unit","A second complete set of documents inside the control unit","A smoke detector inside the cabinet"],
      a: 1,
      ex: "The documentation cabinet goes at the control unit or at another approved location. When it is somewhere else, its location is identified at the control unit so a technician or inspector can find the documents. Storing a duplicate set in the control unit is not the answer, because record documents are kept out of the control unit.",
      ref: "NFPA 72-2022 7.7.2 (documentation cabinet)"
    },
    {
      id: "2.2.3-13",
      type: "mc",
      q: "A new in-building mass notification system is being turned over. The owner's security staff ask which closeout document tells them how to acknowledge and reset the system, how to read its displays, what routine testing and maintenance it needs, and who to call for service. Which document does NFPA 72 require to contain all of this for a new emergency communications system?",
      opts: ["The record of completion","The owner's manual","The riser diagram","The record of inspection and testing"],
      a: 1,
      ex: "For a new emergency communications system, NFPA 72 requires an owner's manual. Its required contents include a narrative description of the system, the written sequence of operation, operator instructions for basic operations such as acknowledge and reset, a description of routine maintenance and testing with the intervals, a service directory and product data sheets. The record of completion is the tempting choice, but it describes what was installed and how it was tested. It does not teach the owner's staff how to run the system.",
      ref: "NFPA 72-2022 7.5.4"
    },
    {
      id: "2.2.3-14",
      type: "mc",
      q: "An electrical contractor installed the raceway, wire and field devices. Your company supplied the control unit, did the programming and ran the tests. How is the record of completion filled out?",
      opts: ["Only the electrical contractor fills it out, because it holds the permit","Only your company fills it out, because it programmed the system","Each contractor completes the portions for the work it was responsible for","The general contractor signs for both"],
      a: 2,
      ex: "When more than one contractor is responsible for the installation, each one completes the portions of the documentation that cover its own work. You should not sign for wiring you did not install, and the electrician should not sign for your programming. Agree early on who fills in which parts so closeout is not held up.",
      ref: "NFPA 72-2022 7.5.6.2"
    },
    {
      id: "2.2.3-15",
      type: "mc",
      q: "You are adding 20 devices to a 15-year-old system that has about 600 devices. The owner, the old service company and the AHJ cannot find the original record of completion or any later version. What does NFPA 72 expect from your company?",
      opts: ["A new system record of completion that documents the system configuration as discovered during the current project's scope of work","A full survey and retest of all 600 existing devices, so that a complete system-wide record can be written","A revision sheet for the 20 new devices only, marked as a supplement to the missing original","Nothing. The permit card takes the place of the record of completion"],
      a: 0,
      ex: "Where the original or latest overall record of completion cannot be obtained, a new system record of completion is provided. It documents the system as discovered during the current project's scope of work. The annex gives the intent: complete the overall-system sections with what you learn while doing your work. It is not meant to force an in-depth evaluation of the whole existing system just to write the record. A revision sheet alone does not work either, because a revision supplements an original, and here there is none.",
      ref: "NFPA 72-2022 7.5.6.6.3"
    },
    {
      id: "2.2.3-16",
      type: "mc",
      q: "The general contractor needs the fire alarm record of completion to close out the building permit. Under the IBC, what does that record verify?",
      opts: ["That the owner has signed a monitoring contract","That the installer holds a NICET certification","That the batteries were replaced within the last year","That the system was installed and tested in accordance with the approved plans and specifications"],
      a: 3,
      ex: "The IBC calls for a record of completion, prepared to NFPA 72, verifying that the system was installed and tested in accordance with the approved plans and specifications. That is why the record must match the approved shop drawings and the as-built condition. If the two differ, fix the documents before you hand it in.",
      ref: "IBC 2021 907.7.2; NFPA 72-2022 7.5.6"
    },
    {
      id: "2.2.3-17",
      type: "mc",
      q: "Your company wants to file the record of completion electronically and stop leaving paper. What does NFPA 72 require of an electronically filed record of completion?",
      opts: ["It must be stored in the control unit's memory","It must be accessible with standard software and it must be backed up","It must be kept in the manufacturer's programming format","Electronic filing is not permitted for a record of completion"],
      a: 1,
      ex: "An electronically filed record of completion must be accessible with standard software and must be backed up. A file that can be opened only with one vendor's inspection app fails the first test. A single copy on one technician's laptop fails the second.",
      ref: "NFPA 72-2022 7.5.6.7.2"
    },
    {
      id: "2.2.3-18",
      type: "mc",
      q: "During an annual test you find six addressable modules and a NAC power supply that are not on the record drawings or the record of completion. Another vendor added them last year. What should you do?",
      opts: ["Test them and say nothing, since they work","Leave them out of the test, because they are not on the drawings","Test them, report the missing documentation to the owner as a deficiency, and recommend that the record drawings and the record of completion be revised","Remove them from the program until the paperwork is found"],
      a: 2,
      ex: "Revisions and alterations must be recorded and the records kept with the original design documents, and changes after the first installation go on a revised record of completion. Undocumented equipment is still part of the system, so it is tested. The gap in the records is written up for the owner, who is responsible for the documents.",
      ref: "NFPA 72-2022 7.7.1.6; 7.5.6.6"
    },
    {
      id: "2.2.3-19",
      type: "mc",
      q: "A building changes service companies. The new technician cannot get into the control unit's programming, because nobody on site has the access code. Which closeout item should have prevented this?",
      opts: ["The copy of the site-specific software, which is to include instructions on how to obtain the means of system and software access","The riser diagram","The battery calculations","The record of inspection and testing"],
      a: 0,
      ex: "In the Chapter 7 list of minimum documentation, the copy of the site-specific software for a software-based system includes specific instructions on how to obtain the means of system and software access, that is, the password. The system belongs to the owner. Handing over a program copy the owner cannot use leaves the job unfinished.",
      ref: "NFPA 72-2022 7.2.1"
    },
    {
      id: "2.2.3-20",
      type: "multi",
      q: "Which TWO are acceptable ways to document a periodic inspection and test under NFPA 72-2022?",
      opts: ["The record of inspection and testing forms in Chapter 7","The record of completion form, re-dated each year","A verbal report to the owner, followed by an invoice","Your company's own report, if it includes all the applicable information shown on the Chapter 7 inspection and testing forms","The control unit's event history printout, with nothing else"],
      a: [0,3],
      ex: "Periodic work is documented on the Chapter 7 record of inspection and testing forms, or on an alternative record that includes all the applicable information shown on those forms. Most companies use their own electronic report, which is fine if nothing is left out. The record of completion documents the installation, and an event printout does not show what was tested or how.",
      ref: "NFPA 72-2022 7.6.6; 14.6.2.4"
    },
    {
      id: "2.2.3-21",
      type: "mc",
      q: "The company that installed a system has gone out of business. Under NFPA 72, who is responsible for maintaining the permanent records (as-built drawings, manuals, sequence of operation and the software copy), and for how long?",
      opts: ["The AHJ, for 10 years","The supervising station, for 1 year","The current service company, until its contract ends","The system owner, for the life of the system"],
      a: 3,
      ex: "After acceptance, the permanent records go to the owner, and the system owner is responsible for maintaining them for the life of the system so any AHJ can examine them. A service company may hold copies, but that does not move the responsibility. One year is the supervising station's signal-record period.",
      ref: "NFPA 72-2022 14.6.1.3"
    },
    {
      id: "2.2.3-22",
      type: "mc",
      q: "An owner's only test records are thermal-paper strips from the panel printer, taped into a binder. The oldest strips have already faded and cannot be read. What is wrong with this record keeping?",
      opts: ["Nothing. Any record meets the Code","Records must be on a medium that will survive the retention period","Test records must always be electronic","Test records must be printed in red ink"],
      a: 1,
      ex: "Inspection, testing and maintenance records must be on a medium that will survive the retention period. Paper and electronic media are both permitted, so the fix is a durable copy, such as a scan or a proper report. A record that cannot be read when the AHJ asks for it is the same as no record.",
      ref: "NFPA 72-2022 14.6.2.3"
    },
    {
      id: "2.2.3-23",
      type: "num",
      q: "Annual tests were completed on October 15 of 2021, 2022, 2023 and 2024. Today is November 20, 2024. Following the NFPA 72 minimum retention rule, how many of these four annual test reports must still be on file?",
      unit: "reports",
      a: 2,
      tol: 0,
      ex: "Each record is kept until the next test and for 1 year after that. The 2021 report could go on October 15, 2023. The 2022 report could go on October 15, 2024, which has passed. The 2023 report must stay until October 15, 2025, and the 2024 report until a year after the 2025 test, so 2 reports must be on file. Keeping only the newest report is the common mistake.",
      ref: "NFPA 72-2022 14.6.2.1"
    },
    {
      id: "2.2.3-24",
      type: "num",
      q: "Smoke detector sensitivity was checked in June 2022, within 1 year of installation. The next sensitivity test, on the alternate-year schedule, is done in June 2024. Applying the retention rule to the sensitivity test itself, what is the earliest year the June 2022 sensitivity record may be discarded?",
      unit: "",
      a: 2025,
      tol: 0,
      ex: "Records are kept until the next test and for 1 year after it. Sensitivity is checked within 1 year of installation and then every alternate year, so the next sensitivity test is June 2024. 2024 + 1 = 2025. Answering 2023 treats it like an annual test and forgets that the next test of this kind is two years out.",
      ref: "NFPA 72-2022 14.6.2.1; 14.4.4.3"
    },
    {
      id: "2.2.3-25",
      type: "mc",
      q: "A warehouse has 200 restorable fixed-temperature, spot-type heat detectors. Your company tests a different group of them each year, so that every detector is tested within 5 years. How long does NFPA 72 require these test records to be kept?",
      opts: ["For the 5 years of testing and for 1 year after that","Until the next annual test and for 1 year after that","For the life of the system","For 1 year from the date of each test"],
      a: 0,
      ex: "The general rule keeps a record until the next test and for 1 year after. Restorable fixed-temperature, spot-type heat detectors that are tested over several years have their own rule: the records are kept for the 5 years of testing and for 1 year after that. The records must show which detectors were tested each year. Without the earlier years you cannot prove that every detector was tested within the 5 years. Applying the general rule here discards that proof too early.",
      ref: "NFPA 72-2022 14.6.2 (records retention)"
    },
    {
      id: "2.2.3-26",
      type: "mc",
      q: "During installation, six strobes were added to one notification appliance circuit, and its home run was rerouted, which added 150 ft of cable. The system has passed its acceptance test. Which closeout documents must be updated so the records match the installed system?",
      opts: ["The record drawings only. The calculations are design documents and stay as approved","The record of completion only, because it lists the appliance count","The record drawings, the voltage drop calculation for that circuit, the battery calculation and the record of completion","None. The approved shop drawings remain the record, because they carry the AHJ's stamp"],
      a: 2,
      ex: "Record drawings show the system as installed, so the added strobes and the new cable route go on them. More appliances and more wire change the circuit's current and its voltage drop, and the added alarm current changes the battery calculation. Both calculations are on NFPA 72's minimum documentation list, and the next technician will rely on them. The record of completion is filled in from the installed system, so it changes too. Updating only the drawings is the common shortcut, and it leaves calculations that no longer describe the circuit.",
      ref: "Field practice (as-built calculations); NFPA 72-2022 7.5.5 (record drawings); 7.2.1 (minimum documentation)"
    },
    {
      id: "2.2.3-27",
      type: "mc",
      q: "A campus building has a fire alarm system and a mass notification (emergency communications) system. The owner asks whether two separate sets of as-built drawings and records must be kept. What does NFPA 72 say?",
      opts: ["Yes. They must be kept in separate cabinets","Yes. They must be prepared by different contractors","The emergency communications records must be kept off site","No. The as-built plans and related documents for both may be kept together, and both systems may appear on the same drawings"],
      a: 3,
      ex: "The as-built plans and other related documentation for the emergency communications system and the fire alarm system are permitted to be maintained together, including on the same drawings. The retention periods do not change. Keeping one coordinated set usually makes the interfaces between the two systems easier to follow.",
      ref: "NFPA 72-2022 7.7.1.5"
    },
    {
      id: "2.2.3-28",
      type: "multi",
      q: "Which TWO statements about the documentation cabinet for a new system are correct?",
      opts: ["It is prominently labeled SYSTEM RECORD DOCUMENTS","It must be mounted inside the control unit enclosure","It is installed with every new system, at the control unit or at another approved location at the protected premises","It is required only for systems with more than 100 devices","It is needed only where there is no supervising station"],
      a: [0,2],
      ex: "A documentation cabinet is installed with every new system, at the system control unit or at another approved location at the protected premises, and it is prominently labeled SYSTEM RECORD DOCUMENTS. Record documents are never stored inside the control unit. If the cabinet is not at the control unit, its location is identified there. System size and off-premises monitoring do not change the requirement.",
      ref: "NFPA 72-2022 7.7.2 (documentation cabinet)"
    },
    {
      id: "2.2.3-29",
      type: "mc",
      q: "The AHJ requires a verification of compliant installation for a new system. Besides confirming that components and functions are installed and operate per the approved plans and sequence of operation, what does the verification confirm about the paperwork?",
      opts: ["That the contractor's invoices have been paid","That the documents have been mailed to the manufacturer","That all required system documentation is complete and is archived on site","That the owner has signed a 5-year test contract"],
      a: 2,
      ex: "The verification ensures the system is installed and works as approved, that all required documentation is complete and archived on site, and that written confirmation has been given that any required corrective actions are done. So the documents are checked as part of the job, the same as the devices. Have the cabinet stocked before the verifier arrives.",
      ref: "NFPA 72-2022 7.5.8.3"
    },
    {
      id: "2.2.3-30",
      type: "multi",
      q: "Which TWO events call for a revised record of completion?",
      opts: ["The annual test is completed and nothing on the system is changed","A tenant build-out adds a NAC power supply and 14 notification appliances","A smoke detector is cleaned and passes its sensitivity test","The site-specific software is changed to correct the sequence of operation","A trouble signal is silenced during a service call"],
      a: [1,3],
      ex: "Modifications made after the first installation are recorded on a revised record of completion, and a change to site-specific software also requires one. The revision carries a revision date and supplements the original, which stays unaltered. Testing, cleaning and silencing a signal are recorded on the inspection and testing record or the service report. They do not change the system.",
      ref: "NFPA 72-2022 7.5.6.6; 14.4.2.4"
    }
  ]
};
