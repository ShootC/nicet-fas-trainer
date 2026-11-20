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
    },
    {
      id: "2.4.1-13",
      type: "mc",
      q: "You arrive on site and find that the ceiling contractor hung and taped the gypsum ceiling in a corridor yesterday. Your cable and boxes above it have not had their rough-in (above-ceiling) inspection. What should the lead technician do?",
      opts: ["Have your crew cut access holes, get the inspection, and patch the ceiling afterward","Take photos through the one access panel and offer them to the inspector at final","Notify the general contractor in writing right away that the area was covered before the required inspection, ask for it to be opened, and log it in the daily report","Say nothing unless the inspector asks to look above the ceiling"],
      a: 2,
      ex: "Work that needs an inspection has to stay exposed until it passes, and the inspector can order it opened. Under A201, work covered contrary to the contract requirements must be uncovered, when the Architect asks in writing, at the Contractor's expense, so it matters who covered it and when. Your same-day written notice is that record. Do not cut another trade's finished work yourself. That needs consent and makes the damage yours.",
      ref: "Field practice (work covered before inspection); AIA A201-2017 Article 12 (Uncovering and Correction of Work, 12.1)"
    },
    {
      id: "2.4.1-14",
      type: "mc",
      q: "Which sequence correctly fits the fire alarm work around the other trades on a new building?",
      opts: ["Boxes and conduit, then cable after the ceiling tile is in, then devices before paint, then acceptance test","Boxes and conduit before the walls are closed; cable and the above-ceiling inspection before ceiling tile; device trim after paint; smoke detectors after final cleanup; then programming, pretest and the acceptance test","Device trim and smoke detectors before drywall sanding; cable after paint; pretest after the acceptance test","Acceptance test first, then device trim, then the above-ceiling inspection"],
      a: 1,
      ex: "Rough-in goes in while walls and ceilings are open and is inspected before it is covered. Trim follows paint so devices are not painted or removed by the painters. Smoke detectors wait until the other trades have finished cleanup, unless detection is needed during construction. The pretest always comes before the AHJ's acceptance test.",
      ref: "Field practice (trade sequencing)"
    },
    {
      id: "2.4.1-15",
      type: "mc",
      q: "The Architect issues a written order for a \"minor change in the Work\": move eight installed strobes 6 ft each to clear new signage. You estimate two extra days of labor. Under AIA A201-2017, what protects your company's right to be paid for it?",
      opts: ["Do the work now and send the bill with the next pay application","Ignore the order, because the Architect cannot order changes","Do the work and note the extra hours on the as-builts","Before doing the work, give notice through the general contractor that the change affects cost or time, and do not proceed until that is settled"],
      a: 3,
      ex: "The Architect may order minor changes that do not change the contract sum or time. If the Contractor believes the change will affect cost or time, it must notify the Architect and not proceed. Doing the work first, without that notice, waives the adjustment. As a subcontractor your notice goes to the general contractor, in writing, the same day.",
      ref: "AIA A201-2017 Article 7 (Changes in the Work, 7.4 minor changes)"
    },
    {
      id: "2.4.1-16",
      type: "mc",
      q: "The general contractor's superintendent tells you on a walk-through to add ten more detectors in a storage area that is not on the approved drawings. \"We'll sort out the money later.\" What is the best response?",
      opts: ["Pass the request to your project manager and get written authorization, such as a signed change order or work authorization, before doing the extra work","Install them today to keep the schedule and bill time and material afterward","Refuse and pull your crew off the job","Install them at no charge to keep the relationship good"],
      a: 0,
      ex: "Extra work is done on written authorization that states the scope, and the price or how the price will be set. A verbal promise is hard to collect on. Added devices also change the shop drawings, the battery and voltage drop calculations and possibly the permit. Record the request, who made it and when, in your daily report.",
      ref: "Field practice (change orders and written authorization); AIA A201-2017 Article 7 (Changes in the Work)"
    },
    {
      id: "2.4.1-17",
      type: "mc",
      q: "The general contractor hands you a Construction Change Directive, signed by the Owner and the Architect, to add a remote annunciator at a second entrance. The price has not been agreed. Under AIA A201-2017, what does the Contractor's side do?",
      opts: ["Hold the work until every party has signed a price","Proceed promptly with the change, and keep its labor and material separate so the adjustment can be worked out","Treat the directive as void, because the Contractor did not sign it","Wait for the AHJ to approve the price"],
      a: 1,
      ex: "A Construction Change Directive orders a change before there is agreement on cost or time. On receiving one, the Contractor proceeds promptly and says whether it agrees with the proposed pricing method. The lead technician's part is to track the hours and material for that change separately on the daily reports. Waiting for a signed price is how a Change Order works.",
      ref: "AIA A201-2017 Article 7 (Changes in the Work, 7.3 Construction Change Directives)"
    },
    {
      id: "2.4.1-18",
      type: "num",
      q: "The general contractor asks you to price a change order for 10 added smoke detectors. Your material cost is $450 and the labor is 12 hours at $85 per hour. The subcontract allows a 15 percent markup on the total of material and labor for overhead and profit. What is the change order price, in dollars?",
      unit: "$",
      a: 1690.5,
      tol: 0.5,
      ex: "Add the costs first: labor is 12 × $85 = $1,020, and material is $450, so the cost is $1,470. Then apply the markup to that total: $1,470 × 1.15 = $1,690.50. The common mistakes are marking up only the material ($450 × 1.15 + $1,020 = $1,537.50) or adding the 15 percent to the labor alone. Read the subcontract: it says what the markup applies to, and the general contractor will check your math against it.",
      ref: "Field practice (change order pricing)"
    },
    {
      id: "2.4.1-19",
      type: "mc",
      q: "While drilling for a device box in a 1960s building, your technician breaks into pipe insulation that looks like asbestos. Nothing in the contract documents addresses it. You stop work in that area and report it through the general contractor. Under AIA A201-2017, what happens next?",
      opts: ["The Owner has a licensed laboratory check the material. If it is hazardous, the Owner has it made harmless, and work in that area resumes by written agreement of the Owner and Contractor","The Contractor removes the material at its own cost and keeps to the schedule","The Architect tests the material and decides whether your crew may continue with dust masks","Work in that area resumes after 14 days if nobody has responded"],
      a: 0,
      ex: "When the Contractor meets a hazardous material, such as asbestos or PCB, that the contract documents do not address, A201 has it stop work in the affected area and notify the Owner and Architect. The Owner then obtains a licensed laboratory to verify the material and, if it is present, has it rendered harmless. Work in that area resumes on written agreement of the Owner and Contractor, and the contract time and sum are adjusted for the shutdown. Your crew does not test, bag or remove it. The 14 days belongs to the concealed-conditions notice, not to this.",
      ref: "AIA A201-2017 Article 10 (Protection of Persons and Property, 10.3 hazardous materials)"
    },
    {
      id: "2.4.1-20",
      type: "mc",
      q: "On a construction site your crew has two tasks today. Task 1: pull cable along the open edge of a mezzanine deck that is 9 ft above the floor below, where the guardrails are not up yet. Task 2: mount devices from a supported scaffold with its platform 9 ft above the floor. Under the OSHA construction standards, which task requires fall protection because of its height?",
      opts: ["Neither, because both are below 10 ft","Both, because every fall hazard in construction uses the 6 ft trigger","Task 2 only","Task 1 only. An unprotected edge 6 ft or more above a lower level needs guardrails, a safety net or personal fall arrest. The scaffold rule starts above 10 ft"],
      a: 3,
      ex: "In construction, an unprotected side or edge 6 ft or more above a lower level requires guardrail systems, safety net systems or personal fall arrest systems. Scaffolds have their own rule: each employee on a scaffold more than 10 ft above a lower level is protected from falling. So the 9 ft mezzanine edge needs protection, and the 9 ft scaffold platform does not by height alone. Carrying the scaffold's 10 ft over to floor edges is the common mistake. If the site rules are stricter than OSHA, follow the site rules.",
      ref: "OSHA 29 CFR 1926.501(b)(1); OSHA 29 CFR 1926.451(g)(1)"
    },
    {
      id: "2.4.1-21",
      type: "mc",
      q: "A helper falls from a ladder on your job and is admitted to the hospital overnight. The incident is work-related. Under OSHA's reporting rule, how long does the employer have to report the in-patient hospitalization to OSHA?",
      opts: ["Within 8 hours","Within 7 days","Within 24 hours","Only if the helper is off work for more than 30 days"],
      a: 2,
      ex: "An in-patient hospitalization, an amputation or the loss of an eye must be reported to OSHA within 24 hours of the employer learning of it. A work-related death must be reported within 8 hours, which is the tempting wrong choice. The 7 days is a different clock: the time to enter a recordable injury on the OSHA 300 log. As the lead, your job is to get first aid going, call it in, and tell your employer right away so they can meet the deadline.",
      ref: "OSHA 29 CFR 1904.39(a)(1) and (a)(2) (study only)"
    },
    {
      id: "2.4.1-22",
      type: "mc",
      q: "The temporary power on a site has no GFCI protection, so your employer covers its crews with an assured equipment grounding conductor program, and you are named to run it. What does the OSHA construction standard require of that program?",
      opts: ["A written description kept at the jobsite, a designated competent person, a visual check of cords and plug-connected equipment before each day's use, and recorded grounding tests at intervals of no more than 3 months","One continuity test of each cord when it is bought, with no records needed","Nothing, if every tool on the job is double insulated","A yearly test of each receptacle by the general contractor's electrician"],
      a: 0,
      ex: "For 120 V, 15 and 20 A temporary receptacles, OSHA lets the employer choose GFCI protection or an assured equipment grounding conductor program. The program needs a written description at the jobsite, one or more competent persons to run it, a visual inspection before each day's use, and recorded tests of grounding conductor continuity and correct terminal connection. The tests are done before first use, after repairs, after suspected damage and at intervals of no more than 3 months (6 months for fixed cords and receptacles not exposed to damage). Double-insulated tools do not remove the need, because the cord sets and receptacles that feed them are still covered.",
      ref: "OSHA 29 CFR 1926.404(b)(1)(iii)"
    },
    {
      id: "2.4.1-23",
      type: "mc",
      q: "Your company is one of several subcontractors on a site. The general contractor's safety manager walks the whole job every Friday. Your project manager says that covers your crew's ladders, lifts and power tools. What does OSHA's construction standard expect?",
      opts: ["The Friday walk is enough, because the general contractor controls the site","Inspections are needed only after an accident or a near miss","Each technician looks over his own tools, and nothing more is needed","Your employer's own program must provide for frequent and regular inspections of the job site, materials and equipment by competent persons it designates"],
      a: 3,
      ex: "Each employer must start and maintain its own accident prevention program. That program must provide for frequent and regular inspections of the job sites, materials and equipment by competent persons the employer designates. The general contractor's weekly walk does not replace it. Equipment that does not comply may not be used: it is tagged or locked as unsafe, or physically removed. So the lead technician who does these inspections needs the authority to pull a ladder or a lift from service.",
      ref: "OSHA 29 CFR 1926.20(b)"
    },
    {
      id: "2.4.1-24",
      type: "num",
      q: "The ceiling grid on a floor starts in 6 working days. The above-ceiling inspection will take the last of those days, and your work must be complete before it. The work is 14,400 ft of cable at 1.0 labor-hour per 100 ft, plus 24 labor-hours for supports and firestopping. Each technician gives 7 productive hours per day. What is the smallest crew, in whole technicians, that finishes in time?",
      unit: "technicians",
      a: 5,
      tol: 0,
      ex: "Cable: 14,400 ÷ 100 × 1.0 = 144 labor-hours. Add 24 for 168 labor-hours. You have 6 − 1 = 5 days, so each technician supplies 5 × 7 = 35 labor-hours. 168 ÷ 35 = 4.8, so round up to 5 technicians. Using all 6 days gives exactly 4 and leaves no day for the inspection, which is the trap.",
      ref: "Field practice (labor-hour scheduling); NASCLA Contractor's Guide, 13th ed. (scheduling)"
    },
    {
      id: "2.4.1-25",
      type: "num",
      q: "The schedule of values has a line for device trim worth $48,000. You report 150 of 240 devices trimmed. The contract holds 10 percent retainage, and $10,800 has already been paid on this line. How much is due on this line in the current pay application?",
      unit: "$",
      a: 16200,
      tol: 0,
      ex: "Percent complete = 150 ÷ 240 = 62.5 percent. Earned = 0.625 × $48,000 = $30,000. Less 10 percent retainage = $27,000. Less the $10,800 already paid = $16,200 due. The office bills from the percent complete you report, so count installed devices. Do not estimate. Billing $19,200 ($30,000 less the earlier payment) forgets the retainage.",
      ref: "Field practice (progress billing from a schedule of values); AIA A201-2017 Article 9 (Payments and Completion)"
    },
    {
      id: "2.4.1-26",
      type: "multi",
      q: "Which TWO statements about shop drawings and other submittals under AIA A201-2017 are correct?",
      opts: ["Shop drawings are not Contract Documents, even after they are approved","Work that needs a submittal may begin as soon as the submittal has been sent","The Architect's approval does not excuse a deviation from the contract documents unless the deviation was specifically pointed out at the time of submittal and then approved","A subcontractor sends its submittals straight to the Architect","The Architect's approval makes the Architect responsible for errors in the shop drawings"],
      a: [0,2],
      ex: "Submittals show how the Contractor proposes to meet the contract documents. They do not become Contract Documents. No work covered by a required submittal starts until the submittal is approved. Approval does not excuse a deviation unless it was specifically called out and approved, and it never excuses errors in the drawings. Subcontractor submittals go through the Contractor, who reviews them first.",
      ref: "AIA A201-2017 Article 3 (Contractor, 3.12 shop drawings, product data and samples)"
    },
    {
      id: "2.4.1-27",
      type: "multi",
      q: "Which THREE statements about Substantial Completion under AIA A201-2017 are correct?",
      opts: ["It is the stage when the Owner can occupy or use the Work for its intended use","Every punch list item must be finished before it can be reached","The Contractor prepares the list of items still to be completed or corrected","Warranties and the one-year correction period normally start on that date","Final payment is due on the same day"],
      a: [0,2,3],
      ex: "Substantial Completion is when the Work is complete enough for the Owner to occupy or use it as intended. The Contractor prepares the list of items to finish or correct, and the Architect inspects. Warranties normally start on that date, and the Contractor corrects nonconforming work found within one year after it. A building cannot be occupied without a working, accepted fire alarm system, so your acceptance test often sets this date.",
      ref: "AIA A201-2017 Article 9 (Payments and Completion, 9.8 Substantial Completion) and Article 12 (12.2 Correction of Work)"
    },
    {
      id: "2.4.1-28",
      type: "multi",
      q: "Your crew will install beam detector reflectors from a scaffold with its platform 12 ft above the floor. Which TWO OSHA construction requirements apply?",
      opts: ["Each person on the platform needs fall protection, because it is more than 10 ft above the lower level","No fall protection is needed on a scaffold until 15 ft","A competent person inspects the scaffold for visible defects before each work shift, and after anything that could affect its structural integrity","One inspection a week by the general contractor is enough"],
      a: [0,2],
      ex: "On a scaffold, fall protection is required for each employee more than 10 ft above a lower level. A competent person inspects the scaffold and its components before each work shift and after any occurrence that could affect its integrity. Even when the general contractor owns the scaffold, your crew does not climb it until that shift's inspection has been done.",
      ref: "OSHA 29 CFR 1926.451(g)(1); OSHA 29 CFR 1926.451(f)(3)"
    },
    {
      id: "2.4.1-29",
      type: "mc",
      q: "The electrical contractor installs the back boxes on this job. A week before your trim-out you find that every manual fire alarm box back box is set with its center 60 in. above the floor. What should the lead technician do?",
      opts: ["Trim them as found, since the boxes are not your work","Report the problem in writing to the general contractor before mounting any device on those boxes","Mount the manual boxes upside down to lower the handle","Leave those devices off and raise it at the acceptance test"],
      a: 1,
      ex: "The operable part of a manual fire alarm box must be between 42 in. and 48 in. above the floor, so these boxes cannot be used as set. A201 makes the Contractor responsible for checking that work already in place is in proper condition to receive later work. Where the earlier work was done by the Owner's separate contractor, going ahead without notice counts as accepting it as fit to receive yours. Early written notice lets the electrician fix the boxes before paint. Trimming them as found makes the wrong height your problem at the acceptance test.",
      ref: "Field practice (reporting defects in preceding work); AIA A201-2017 Article 6 (Construction by Owner or by Separate Contractors, 6.2.2) and Article 3 (3.3.3); NFPA 72-2022 17.15 (manual fire alarm boxes)"
    },
    {
      id: "2.4.1-30",
      type: "mc",
      q: "The control unit delivery slips by 10 working days. Setting the panel, programming and the pretest are on the critical path with no float. Separately, third-floor device trim is 3 days late but has 8 days of float. Which report to the general contractor is accurate?",
      opts: ["Both delays add together, so completion moves 13 days","Neither delay matters until the acceptance test date","The panel delay pushes completion by about 10 working days unless time is recovered. The trim delay is inside its float and does not move completion","Only the trim delay matters, because it involves more devices"],
      a: 2,
      ex: "The critical path is the longest chain of dependent activities, so a day lost there is a day lost at completion. Float is how long an activity can slip without delaying the finish. The trim delay uses 3 of its 8 days and moves nothing. Report the panel delay now, in writing, with a recovery plan such as programming off site or adding a second pretest crew.",
      ref: "Field practice (critical path and float); NASCLA Contractor's Guide, 13th ed. (scheduling)"
    }
  ]
};
