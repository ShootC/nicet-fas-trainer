// NICET FAS Level I · 1.3 Submittal preparation and system layout. Questions keyed by task id.
// Never reuse or renumber an id: progress is saved by id. See README for the format.
export default {
  "1.3.1": [
    {
      id: "1.3.1-01",
      type: "mc",
      q: "During installation, six detectors were moved and one circuit was rerouted to avoid ductwork. Which document must show the system the way it was actually installed?",
      opts: ["The bid specification","The original shop drawings, unchanged","The record (as-built) drawings","The manufacturer's data sheets"],
      a: 2,
      ex: "Record drawings, often called as-builts, show the system as it was really installed, including every change from the approved shop drawings. The next technician relies on them to find devices and trace circuits. Marking up a set as the changes happen is the only reliable way to get them right.",
      ref: "NFPA 72-2022 7.5.5"
    },
    {
      id: "1.3.1-02",
      type: "mc",
      q: "Which document does the installing contractor complete to describe the installed system, including who installed it, what it consists of and how it was tested, using the forms that begin at Figure 7.8.2(a)?",
      opts: ["The record of inspection and testing","The record of completion","The sequence of operations matrix","The riser diagram"],
      a: 1,
      ex: "The record of completion documents the system as installed: the parties involved, the type of system, its equipment, circuits and power supplies, and the acceptance testing. The record of inspection and testing is the periodic ITM form, and it is used every time the system is tested afterwards. Mixing up these two forms is the common mistake.",
      ref: "NFPA 72-2022 7.5.6; Figure 7.8.2(a)"
    },
    {
      id: "1.3.1-03",
      type: "mc",
      q: "Two years after acceptance, your company adds a booster power supply and 12 strobes to an existing system. What happens to the record of completion?",
      opts: ["It is revised to show the changes","Nothing, because it only describes the original installation","It is thrown away and not replaced","It is replaced by the next annual test report"],
      a: 0,
      ex: "The record of completion must keep describing the system that is actually in the building, so it is revised when the system is changed. An out-of-date record misleads the next technician and the AHJ about what is installed. The annual test report is a different record and does not replace it.",
      ref: "NFPA 72-2022 7.5.6.6"
    },
    {
      id: "1.3.1-04",
      type: "multi",
      q: "Which TWO statements about keeping fire alarm records are correct under NFPA 72-2022?",
      opts: ["Periodic test records may be discarded as soon as the next test is done","Design and record documents are kept for the life of the system","Periodic inspection and test records are kept until the next test and for 1 year after that","Every record must be kept for exactly 5 years","The record of completion may be discarded once the AHJ accepts the system"],
      a: [1,2],
      ex: "The documents that describe the system and how it works are kept for the life of the system. Periodic ITM records are kept until the next test plus 1 more year. The trap is stopping at the next test: the extra year lets an inspector compare two test cycles.",
      ref: "NFPA 72-2022 7.7.1.4 and 14.6.2.1"
    },
    {
      id: "1.3.1-05",
      type: "num",
      q: "A floor plan is drawn at a scale of 1/8 in. = 1 ft. On the drawing, a cable run measures 3.5 in. How long is the real run?",
      unit: "ft",
      a: 28,
      tol: 0,
      ex: "At 1/8 in. = 1 ft, every inch on the paper is 8 ft in the building. 3.5 × 8 = 28 ft. Check the scale in the title block of each sheet before you measure, because detail sheets often use a different scale. Remember that a plan measurement covers the horizontal run only, not the drops and rises.",
      ref: "Ugly's Electrical References (measurement and conversion); NFPA 72-2022 7.4 (shop drawings)"
    },
    {
      id: "1.3.1-06",
      type: "mc",
      q: "A plan is drawn at 1/4 in. = 1 ft. You scale 5.5 in. between the control unit and a booster power supply. What is the real distance?",
      opts: ["11 ft","44 ft","1.375 ft","22 ft"],
      a: 3,
      ex: "At 1/4 in. = 1 ft, each inch on the paper is 4 ft. 5.5 × 4 = 22 ft. The 44 ft answer comes from using the 1/8 in. scale on a 1/4 in. drawing, which doubles every length. That mistake is easy to make when one drawing set mixes scales.",
      ref: "Ugly's Electrical References (measurement and conversion); NFPA 72-2022 7.4 (shop drawings)"
    },
    {
      id: "1.3.1-07",
      type: "mc",
      q: "What does a fire alarm riser diagram show that a floor plan does not?",
      opts: ["The exact mounting location of each device in each room","How the control equipment, circuits and devices connect from floor to floor, usually not to scale","The candela rating needed for each room size","The manufacturer's wiring terminals for each module"],
      a: 1,
      ex: "A riser diagram is a one-line picture of the system: panels, power supplies, circuits and the devices on each floor, and how they connect to each other. It is normally not to scale and does not locate devices in rooms. That is the floor plan's job. Use the riser to follow a circuit through the building and the floor plan to find the device.",
      ref: "NFPA 72-2022 7.2.1 (required documentation); 7.4 (shop drawings)"
    },
    {
      id: "1.3.1-08",
      type: "mc",
      q: "On a set of shop drawings you see a device symbol you do not recognize. Where do you look first?",
      opts: ["Ugly's Electrical References","NEC Article 760","The symbol legend on that drawing set","Nowhere: assume it is a smoke detector, the most common device"],
      a: 2,
      ex: "Every drawing set should carry a legend that defines the symbols used on it. Many designers follow the NFPA 170 symbols, but some change or add their own, so the legend on the set in your hands is what governs. Guessing is how a heat detector gets installed where a smoke detector was meant.",
      ref: "NFPA 72-2022 7.4 (shop drawings); NFPA 170 (symbols)"
    },
    {
      id: "1.3.1-09",
      type: "multi",
      q: "A sequence of operations matrix lists inputs down the side and outputs across the top. The row for LOBBY SMOKE DETECTOR is marked under 'Activate horns and strobes', 'Recall elevators' and 'Send alarm to supervising station'. The row for SPRINKLER VALVE TAMPER SWITCH is marked under 'Supervisory signal at control unit' and 'Send supervisory to supervising station'. Which TWO things happen when the valve tamper switch operates?",
      opts: ["The horns and strobes activate","A supervisory signal shows at the control unit","The elevators recall","A supervisory signal goes to the supervising station","A trouble signal goes to the supervising station"],
      a: [1,3],
      ex: "Read across the row for the input that operated, and only the marked columns happen. The tamper row is marked for a supervisory signal at the panel and a supervisory signal off premises, and nothing else. Horns, strobes and elevator recall belong to the smoke detector row. A tamper is supervisory, not trouble, and the matrix says so.",
      ref: "NFPA 72-2022 7.2.1 (sequence of operation)"
    },
    {
      id: "1.3.1-10",
      type: "multi",
      q: "Which THREE of these are part of the minimum documentation NFPA 72 lists for a new fire alarm system?",
      opts: ["A riser diagram","The electrical contractor's payroll records","The sequence of operation, as a matrix or a narrative","Battery calculations","The supervising station operators' training records","A printed copy of NFPA 170"],
      a: [0,2,3],
      ex: "The minimum documentation list includes a written narrative, riser diagrams, floor plans, the sequence of operation, equipment data sheets, the manufacturers' published instructions, battery and voltage drop calculations, and the completion and test records. Payroll and operator training records have nothing to do with describing this system. NFPA 170 is where many symbols come from, but a copy of it is not a system document.",
      ref: "NFPA 72-2022 7.2.1"
    },
    {
      id: "1.3.1-11",
      type: "mc",
      q: "The specification calls for horn-strobes in every restroom. The approved shop drawings show strobes only. You are the trainee mounting appliances. What do you do?",
      opts: ["Install horn-strobes, because the specification always wins","Install strobes only, because the drawings always win","Install whichever is on the truck and note it later","Stop and take the conflict to your supervisor, so it is answered in writing before you install"],
      a: 3,
      ex: "A conflict between contract documents is not the installer's call. Which document governs depends on the contract, and the answer can change the circuit load and the calculations. Raise it with your supervisor, who gets a written answer from the designer, usually through a request for information. Installing on a guess means doing the work twice.",
      ref: "NFPA 72-2022 7.3 and 7.4 (design documents and shop drawings); field practice"
    },
    {
      id: "1.3.1-12",
      type: "mc",
      q: "Why is the manufacturer's installation sheet for a listed device treated as a requirement and not just a suggestion?",
      opts: ["The NEC requires listed equipment to be installed and used in line with the instructions included in its listing or labeling","It only matters while the device is under warranty","It only applies if the specification says so","It is not a requirement: field experience outranks it"],
      a: 0,
      ex: "NEC 110.3(B) says listed or labeled equipment must be installed and used according to the instructions that come with the listing. For fire alarm devices that covers wire size at the terminals, mounting position, compatible equipment and how many devices a circuit may carry. NFPA 72's test methods also point to the manufacturer's published instructions again and again.",
      ref: "NEC 2020 110.3(B)"
    },
    {
      id: "1.3.1-13",
      type: "mc",
      q: "The drawings route a power-limited fire alarm cable through the space above a corridor ceiling, and a note says that space is a return-air plenum. Which cable marking do you look for on the jacket?",
      opts: ["FPL","FPLP","FPLR","NPLF"],
      a: 1,
      ex: "FPLP is the power-limited fire alarm cable listed for plenums and other spaces used for environmental air. FPLR is riser cable, for vertical runs between floors, and FPL is general purpose. Mixing up the P and the R is the usual slip: P is for plenum, R is for riser. NPLF is a non-power-limited cable type.",
      ref: "NEC 2020 Table 760.154; Table 760.179(I)"
    },
    {
      id: "1.3.1-14",
      type: "mc",
      q: "At Level I you may bring NFPA 72, the NEC and one more reference into the test center. It is arranged by topic, with no code section numbers, and it holds quick tables and formulas such as Ohm's law, voltage drop and conduit fill. Which reference is it?",
      opts: ["The International Building Code","OSHA 29 CFR 1926","Ugly's Electrical References","Fire Alarm Signaling Systems, 4th edition"],
      a: 2,
      ex: "Ugly's Electrical References (2020) is the Level I bring-in reference besides NFPA 72 and the NEC. It is the fast place for formulas and electrical tables, but it is not a code: required values still come from NFPA 72 and the NEC. The OSHA parts and Fire Alarm Signaling Systems are study references and are not allowed in the test center. The IBC is a Level II reference.",
      ref: "NICET FAS Level I Selected General References"
    },
    {
      id: "1.3.1-15",
      type: "mc",
      q: "The approved drawings tag a conference room strobe '75 cd'. During the visual inspection for initial acceptance of the new system, you find its selector set to 15 cd. What is the right response?",
      opts: ["Report it as a deficiency and have the setting corrected to match the approved drawings","Leave it: any setting passes as long as the strobe flashes","Raise it to the highest setting to be safe","Change the tag on the drawing to 15 cd so the two agree"],
      a: 0,
      ex: "At initial acceptance, the visual inspection of visual appliances includes checking that the candela marking or setting agrees with the approved drawings. (The table lists this candela check for acceptance only; the semiannual inspection covers location and condition.) The designer chose 75 cd to cover that room, and at 15 cd the strobe covers a much smaller room. Turning it up to maximum is not the fix either: more candela draws more current and can overload the circuit or upset the voltage drop calculation.",
      ref: "NFPA 72-2022 Table 14.3.1(22)"
    }
  ]
};
