// NICET FAS Level II · 2.4 Management and supervision. Questions keyed by task id.
// Never reuse or renumber an id: progress is saved by id. See README for the format.
export default {
  "2.4.1": [
    {
      id: "2.4.1-01",
      type: "mc",
      q: "The general contractor wants your crew to start installing devices next week. The fire alarm shop drawings have been submitted but not yet approved. What does the IBC require?",
      opts: ["Installation may start once the drawings have been submitted","Installation may start if the owner agrees in writing","Shop drawings are to be submitted and approved before the system is installed","Shop drawings are needed only for voice systems"],
      a: 2,
      ex: "IBC 907.1.2 calls for shop drawings prepared to NFPA 72 and approved before installation. Work installed ahead of approval is at risk, because a plan review comment can mean tearing it out. Tell the GC in writing and adjust the look-ahead schedule. Many AHJs will allow conduit and boxes to proceed, but that is the AHJ's decision.",
      ref: "IBC 2021 907.1.2"
    },
    {
      id: "2.4.1-02",
      type: "mc",
      q: "Drywall sanding and painting will continue for three more weeks. The smoke detectors are not needed for protection during construction. When should they be installed?",
      opts: ["After the other trades have finished their cleanup","Now, left uncovered so they can be tested early","Now, with the heads removed from the bases at night","At any time, because construction dust does not affect listed detectors"],
      a: 0,
      ex: "Where detection is not required during construction, smoke detectors are not installed until the other trades have completed cleanup. Dust in the sensing chamber causes nuisance alarms and shifts sensitivity. If detectors must be in service during construction, they are cleaned and verified within their listed sensitivity, or replaced, before the final acceptance test. Schedule the heads as the last item on your trim-out.",
      ref: "NFPA 72-2022 17.7.2"
    },
    {
      id: "2.4.1-03",
      type: "mc",
      q: "Under AIA A201-2017, who is responsible for construction means, methods, techniques, sequences and procedures, and for safety precautions on the job?",
      opts: ["The Architect","The Contractor","The Owner","The authority having jurisdiction"],
      a: 1,
      ex: "A201 puts means and methods and jobsite safety programs on the Contractor. The Architect visits the site and reviews submittals but does not control how the work is built or how safety is run. As a subcontractor's lead technician, you answer to the general contractor's site rules and to your own employer's safety program.",
      ref: "AIA A201-2017 Article 3 (Contractor) and Article 10 (Protection of Persons and Property)"
    },
    {
      id: "2.4.1-04",
      type: "mc",
      q: "Under AIA A201-2017, a Change Order is a written instrument signed by which parties?",
      opts: ["The Contractor and the Subcontractor","The Architect only","The Owner and the building official","The Owner, the Contractor and the Architect"],
      a: 3,
      ex: "A Change Order records agreement on the change in the work and on any adjustment to the contract sum and time. It is signed by the Owner, the Contractor and the Architect. A Construction Change Directive is signed by the Owner and Architect only and is used when the Contractor has not yet agreed on terms. A subcontractor's change is handled through its subcontract with the Contractor.",
      ref: "AIA A201-2017 Article 7 (Changes in the Work)"
    },
    {
      id: "2.4.1-05",
      type: "mc",
      q: "The approved drawings show a manual fire alarm box on a wall that has been built as a full-height glass partition. What should the lead technician do?",
      opts: ["Send a request for information (RFI) through the general contractor and get a written answer before moving the device","Mount the box on the nearest solid wall and mark the as-builts later","Leave the box out and bring it up at final inspection","Ask the glazing foreman where to put it"],
      a: 0,
      ex: "A conflict between the drawings and field conditions is settled with an RFI through the proper channel. Under A201, a subcontractor communicates through the Contractor. A manual box location is a code item, with rules for distance to the exit and for height, so the designer must answer. A written answer also protects you if the change costs time or money.",
      ref: "AIA A201-2017 Article 4 (Architect; communications); NFPA 72-2022 17.15"
    },
    {
      id: "2.4.1-06",
      type: "mc",
      q: "The system is complete and you are scheduling the acceptance test. Who does NFPA 72 require to be notified before the initial acceptance test?",
      opts: ["The equipment manufacturer","The building's insurance carrier","The authority having jurisdiction","The architect's field representative"],
      a: 2,
      ex: "The AHJ is notified before the initial acceptance test so the test can be witnessed. Good practice is a full pretest first, so that every device, every emergency control function and the off-premises signals have already been proved. Have the record of completion, drawings and calculations on hand. Arrange for the elevator, HVAC and sprinkler contractors to be on site for the functions they own.",
      ref: "NFPA 72-2022 14.4.1; IBC 2021 907.7"
    },
    {
      id: "2.4.1-07",
      type: "mc",
      q: "You are coordinating power for a power-limited fire alarm control unit with the electrical contractor. Which request matches NEC 2020?",
      opts: ["Feed the panel from the nearest receptacle circuit, through a GFCI","A dedicated branch circuit, not GFCI or AFCI protected, with the breaker identified in red and marked FIRE ALARM CIRCUIT","Any 20 A circuit, as long as the breaker is labeled","A dedicated circuit with an AFCI breaker"],
      a: 1,
      ex: "The supply must be a dedicated branch circuit that does not pass through GFCI or AFCI protection. The breaker has red identification, is marked as the fire alarm circuit, and is accessible only to qualified persons. The location of the breaker is marked at the control unit. Give this to the electrician before the panel schedule is finalized, not at trim-out.",
      ref: "NEC 2020 760.121(B)"
    },
    {
      id: "2.4.1-08",
      type: "mc",
      q: "Your fire alarm cables pass through several 2-hour rated corridor walls. The ceilings will be closed in next week. What must be coordinated?",
      opts: ["Nothing. Power-limited cable is exempt from firestopping","Only penetrations larger than 4 in. need attention","Firestopping is the general contractor's concern and does not affect the fire alarm schedule","The penetrations must be firestopped to keep the wall's rating, and this must be done while they can still be reached"],
      a: 3,
      ex: "NEC 760.3(A) applies 300.21 to fire alarm wiring, so openings through fire-rated construction must be firestopped to maintain the rating. Find out who is doing the firestopping, and get it done and inspected while the penetrations can still be reached. An above-ceiling inspection that fails after the tile is in costs everyone time.",
      ref: "NEC 2020 760.3(A) and 300.21"
    },
    {
      id: "2.4.1-09",
      type: "multi",
      q: "Which THREE items belong in a lead technician's daily job report?",
      opts: ["Crew size and hours worked","Each employee's hourly wage","Work completed and where","The company's profit margin on the job","Delays or problems, and who was notified"],
      a: [0,2,4],
      ex: "A daily report records who was on site, what was done and where, and anything that held the work up, with the name of the person told. Inspections, deliveries and safety incidents go in too. It is the record that supports schedule claims and change orders later. Wages and margins are office information and do not belong in a field report.",
      ref: "Field practice; NASCLA Contractor's Guide, 13th ed. (project management and record keeping)"
    },
    {
      id: "2.4.1-10",
      type: "multi",
      q: "OSHA's construction standards require a \"competent person\" for many tasks. Which TWO describe a competent person?",
      opts: ["Able to identify existing and predictable hazards in the work area","Holds NICET Level II or higher","Has authorization to take prompt corrective measures to eliminate hazards","Is employed by the general contractor","Has completed a 10-hour outreach course"],
      a: [0,2],
      ex: "OSHA defines a competent person by two things: the ability to recognize hazards and the authority to correct them promptly. A certificate or a training card does not meet the definition by itself, and the person does not have to work for the GC. A lead technician who is named competent person must be allowed to stop the work.",
      ref: "OSHA 29 CFR 1926.32 (definitions)"
    },
    {
      id: "2.4.1-11",
      type: "num",
      q: "A technician sets an extension ladder against a wall. The working length of the ladder, from its feet to the point where it rests on the wall, is 20 ft. By the OSHA set-up ratio, how far from the wall should the base be?",
      unit: "ft",
      a: 5,
      tol: 0.1,
      ex: "A non-self-supporting ladder is set so the base is out about one quarter of its working length. 20 ÷ 4 = 5 ft. If the ladder is used to reach an upper level, the side rails must also extend at least 3 ft above the landing. A lead technician checks ladder set-up before work starts.",
      ref: "OSHA 29 CFR 1926.1053(b)"
    },
    {
      id: "2.4.1-12",
      type: "num",
      q: "Trim-out is 180 devices at an estimated 0.4 labor-hours each. You have a crew of 3, each working 8 productive hours per day. How many working days should you tell the general contractor the trim-out will take?",
      unit: "days",
      a: 3,
      tol: 0,
      ex: "Total labor = 180 × 0.4 = 72 labor-hours. The crew produces 3 × 8 = 24 labor-hours per day. 72 ÷ 24 = 3 days. The common slip is dividing by 8 and forgetting the crew size, which gives 9 days. Put the figure in your look-ahead schedule and update it in the daily report.",
      ref: "Field practice (labor-hour scheduling); NASCLA Contractor's Guide, 13th ed. (scheduling)"
    }
  ]
};
