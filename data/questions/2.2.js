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
    }
  ]
};
