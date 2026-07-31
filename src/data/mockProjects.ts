import { PublishingProject } from '../types/storyforge';

export const INITIAL_PROJECTS: PublishingProject[] = [
  {
    id: 'sf-proj-001',
    name: 'The Chrono-Guardians of Aethelgard',
    goal: 'Build an epic 10-chapter middle-grade fantasy series introducing quantum physics concepts through time-traveling apprentices.',
    targetAge: 'Middle Grade (8-12y)',
    genre: 'Fantasy',
    theme: 'Courage, Scientific Curiosity, and Moral Responsibility',
    mode: 'professional',
    currentStep: 7,
    status: 'Drafting',
    createdAt: '2025-02-15T10:00:00Z',
    updatedAt: '2025-02-28T14:30:00Z',

    manuscript: {
      title: 'The Chrono-Guardians of Aethelgard',
      subtitle: 'Book 1: The Broken Sundial of Clockwork Keep',
      targetAge: 'Middle Grade (8-12y)',
      genre: 'Fantasy',
      theme: 'Scientific Curiosity & Time Travel Ethics',
      educationalGoals: [
        'Understanding Cause & Effect in History',
        'Basic Concepts of Relativity & Time Dilations',
        'Critical Problem Solving in High-Stakes Situations'
      ],
      wordCountTotal: 24500,
      readingLevelGrade: 'Grade 5.2 (Lexile 780L)',
      synopsis: 'When 12-year-old horologist apprentice Leo accidentally triggers an ancient brass chronometer, he uncovers a hidden dimension beneath Clockwork Keep where time flows backward. Alongside Kael, a swift-talking rogue from the 18th century, Leo must repair the Sundial of Aethelgard before the Shadow Paradox erases history.',
      chapters: [
        {
          id: 'ch-1',
          chapterNumber: 1,
          title: 'The Brass Gear in the Basement',
          synopsis: 'Leo discovers the glowing chronometer behind a false bookshelf in his grandfather workshop.',
          content: `The ticking in Grandfather Silas's workshop wasn't normal. It didn't follow the steady, comforting rhythm of the pendulum clocks lining the pine walls. Instead, it skipped—a double-thump like a startled heart.

Leo set down his brass tweezers, wiping oil-stained fingers on his leather apron. He stepped deeper into the vault beneath Clockwork Keep. Dust motes danced in the amber light filtering through the high iron-grated window. 

"Silas told you to leave the subterranean locks alone, didn't he?" a voice purred from the rafters.

Leo looked up. A silver-furred mechanical owl perched on a beam, glass eyes ticking as they zoomed in on Leo's face.

"Barnaby, if I don't fix the temporal regulator before sundown, the village clock will strike thirteen," Leo replied, crouching near the brass floorboard that had started humming three days ago.

He pried open the oak floor. Beneath lay not stone foundations, but an intricate lattice of gear-work stretching into darkness. At the center rested a sundial made of dark celestial metal, its shadow pointing not toward the sun, but toward Leo himself.`,
          wordCount: 2150,
          illustrationBrief: {
            sceneDescription: 'Young boy in leather apron leaning over open floorboards glowing with golden gearwork in a dusty clockmaker vault.',
            visualFocus: 'Glowing brass gears, intricate sundial shadow, workshop dust motes, brass mechanical owl on rafters.',
            midjourneyPrompt: 'Cinematic 8k fantasy illustration, young 12yo boy with dark hair and brass goggles around neck kneeling over glowing clockwork floor in a dusty Victorian workshop, silver mechanical owl overhead, warm amber volumetric lighting --ar 16:9 --v 6.1',
            dallePrompt: 'Detailed storybook illustration of a young clockmaker boy discovering glowing brass gears hidden beneath workshop floorboards, warm lighting, fantasy style.'
          },
          readabilityScore: 84,
          status: 'Approved'
        },
        {
          id: 'ch-2',
          chapterNumber: 2,
          title: 'The Backward River',
          synopsis: 'Leo steps through the Temporal Rift into a version of Clockwork Keep where water flows uphill.',
          content: `The air turned crisp and tasted faintly of ozone and crushed peppermint. Leo blinked as the darkness dissolved into an impossible sky shaded violet and gold. 

Beside him, the River Aethel flowed not down from the mist-shrouded peaks of Mount Aethelgard, but upward toward the summit, carrying silver fish swimming backward against gravity.

"Fascinating, isn't it?" said a boy sitting atop a copper fence post, tossing an apple from hand to hand. He wore a velvet coat with tarnished brass buttons and a tricorn hat tilted precariously. "First time slipping through a Chrono-Rift?"

Leo pulled out his pocket sundial. The shadow was spinning counterclockwise. "Who are you? And why is gravity obeying the wrong laws?"

The stranger hopped down with a flair. "I am Kaelen Vance, late of the Royal Navy—1782 edition. And gravity isn't wrong, mate. Time is simply retracing its footsteps."`,
          wordCount: 2380,
          illustrationBrief: {
            sceneDescription: 'A glowing violet sky over a river flowing uphill toward a floating mountain citadel with two boys talking.',
            visualFocus: 'Upward-flowing river with silvery mist, violet-gold sky, copper fences, clockwork Citadel in background.',
            midjourneyPrompt: 'Epic fantasy landscape, a crystal river flowing backward up a mountain, floating clockwork towers in distance, violet and golden twilight sky, storybook art style --ar 16:9 --v 6.1',
            dallePrompt: 'Fantasy illustration of a magical river flowing uphill towards a floating castle in a twilight sky.'
          },
          readabilityScore: 82,
          status: 'Polished'
        }
      ]
    },

    worldBible: {
      universeName: 'The Aethelgard Chronoverse',
      settingOverview: 'A continent built atop ancient colossal clockwork engines buried underground during the First Cataclysm.',
      lore: 'Three hundred years ago, the Great Chronometer was built by Master Aethelgard to stabilize temporal streams. When the Sundial cracked, time fractured into pockets called Rifts.',
      magicOrTechSystem: 'Chrono-Mechanics: Resonance gears forged from Aetherite ore that manipulate local temporal velocity.',
      timeline: [
        { yearOrEra: 'Era 0', event: 'The First Cataclysm fractures linear time into local chronometer bubbles.' },
        { yearOrEra: 'Era 142', event: 'Clockwork Keep established over the Central Temporal Nexus.' },
        { yearOrEra: 'Era 300 (Present)', event: 'The Sundial shadow reverses direction, triggering the Shadow Paradox.' }
      ],
      locations: [
        { name: 'Clockwork Keep', description: 'A massive fortress housing hundreds of giant brass pendulums.', significance: 'Nexus of continental time flow.' },
        { name: 'The Backward River', description: 'A waterway flowing upward into Mount Aethelgard.', significance: 'Main conduit for temporal anomaly travel.' },
        { name: 'The Void Forge', description: 'An underground labyrinth where rogue temporal blacksmiths forge illegal chronometers.', significance: 'Antagonist hideout.' }
      ],
      factionsOrPolitics: 'The Order of the Sundial (Defenders) vs. The Entropy Syndicate (Rogue Time-Alchemists).',
      religionsOrBeliefs: 'Reverence for the Grand Pendulum and the Eternal Tick.',
      architectureAndCulture: 'Steampunk Victorian mixed with ancient brass monuments and floating astrolabes.',
      languagesAndIdioms: ['Tik-tok (slang for quick action)', 'Before the stroke (warning of danger)', 'Gear-bound (promise)'],
      rulesOfUniverse: [
        'Mass cannot exist in two identical time points simultaneously without causing temporal friction.',
        'Aetherite chronometers require manual calibration at sunrise.',
        'Reversing time by more than 12 hours causes localized memory haze.'
      ]
    },

    characters: [
      {
        id: 'char-1',
        name: 'Leo Pendelton',
        role: 'protagonist',
        biography: 'A 12-year-old apprentice horologist at Clockwork Keep with an innate instinct for spatial gear-ratios and spatial anomalies.',
        personalityTraits: ['Analytical', 'Cautious', 'Deeply Loyal', 'Curious under pressure'],
        dialogueStyle: {
          tone: 'Observant and precise, uses mechanical metaphors.',
          catchphrases: ['Check the Escapement!', 'Every gear has its place.'],
          vocabularyComplexity: 'Moderate'
        },
        goals: 'Repair the Sundial of Aethelgard and rescue his grandfather from the Temporal Void.',
        weaknesses: 'Overthinks in battle, hesitant to take impulsive risks.',
        visualDNA: {
          ethnicityOrSpecies: 'Human (Aethelgardian)',
          hairColorStyle: 'Messy dark brown hair with copper streaks',
          eyeColor: 'Hazel green with flecks of gold',
          distinctiveFeatures: 'Brass magnifying loupe resting over his forehead',
          attire: 'Leather artisan apron over a dark blue linen shirt, utility toolbelt with brass tweezers and wrenches',
          overallVibe: 'Intelligent, earnest young inventor'
        },
        characterArc: {
          startingState: 'Reluctant apprentice who fears leaving the safety of his workshop.',
          catalyst: 'Grandfather Silas vanishes through the subterranean Sundial.',
          climaxShift: 'Leo trusts his intuition over rigid calculations to recalibrate the Sundial in mid-air.',
          endingState: 'Confident Master Chrono-Guardian leading the protection of the realm.'
        },
        relationships: [
          { targetCharacterId: 'char-2', targetCharacterName: 'Kaelen Vance', relationshipType: 'ally', notes: 'Unlikely partnership balancing Leo logic with Kael recklessness.' },
          { targetCharacterId: 'char-3', targetCharacterName: 'Baroness Chronos', relationshipType: 'nemesis', notes: 'Rogue time-alchemist seeking to shatter the Sundial.' }
        ],
        expressions: ['Focused squint through magnifying loupe', 'Gasp of revelation', 'Determined jaw-clench'],
        futureDevelopment: 'Will unlock the ability to sense temporal vibrations without a brass chronometer.'
      },
      {
        id: 'char-2',
        name: 'Kaelen "Kael" Vance',
        role: 'deuteragonist',
        biography: 'A 14-year-old midshipman from 1782 who accidentally fell into a Chrono-Rift during a storm at sea.',
        personalityTraits: ['Bold', 'Charismatic', 'Impulsive', 'Surprisingly observant'],
        dialogueStyle: {
          tone: 'Nautical 18th-century slang with energetic flair.',
          catchphrases: ['By Neptune’s compass!', 'Full sail into the storm!'],
          vocabularyComplexity: 'Moderate'
        },
        goals: 'Find a way back to his ship while ensuring Leo survives the Entropy Syndicate.',
        weaknesses: 'Disregards safety instructions, jumps into fights without a plan.',
        visualDNA: {
          ethnicityOrSpecies: 'Human (Anglo-Maritime)',
          hairColorStyle: 'Wavy wind-blown blonde hair tied in a short queue',
          eyeColor: 'Sea blue',
          distinctiveFeatures: 'Faint saber scar across left cheek',
          attire: 'Tarnished navy blue coat with brass buttons, high leather boots, sea compass pendant',
          overallVibe: 'Dashing young rogue adventurer'
        },
        characterArc: {
          startingState: 'Lone adventurer looking only for an escape back to his own era.',
          catalyst: 'Leo saves Kael from the Shadow Paradox.',
          climaxShift: 'Kael sacrifices his chance to return home to defend Clockwork Keep.',
          endingState: 'Proud member of the Chrono-Guard, protecting all eras.'
        },
        relationships: [
          { targetCharacterId: 'char-1', targetCharacterName: 'Leo Pendelton', relationshipType: 'ally', notes: 'Brotherly bond forged in combat.' }
        ],
        expressions: ['Crooked grin', 'Daring wink', 'Stiff military posture when challenged'],
        futureDevelopment: 'Will master navigating the Backward River with celestial navigation tools.'
      }
    ],

    illustrationGuide: {
      styleGuideName: 'Steampunk Storybook Realism',
      artStyleDescription: 'Rich volumetric amber and teal lighting, intricate brass and mechanical detail, painterly textures with expressive character faces inspired by classic 19th century children’s book illustrations.',
      colorPalette: ['#1e293b', '#d97706', '#0284c7', '#78350f', '#f59e0b', '#0f172a'],
      characterSheets: [
        {
          characterId: 'char-1',
          characterName: 'Leo Pendelton',
          visualDNA: 'Messy dark hair, brass loupe on forehead, hazel green eyes, leather clockmaker apron, brass toolbelt',
          modelPrompt: 'Character sheet of Leo Pendelton, 12 year old boy clockmaker, multiple angles, front view, side profile, expression sheet, steampunk workshop, warm amber lighting --ar 16:9 --v 6.1'
        }
      ],
      scenePrompts: [
        {
          sceneId: 'sc-1',
          chapterNumber: 1,
          description: 'Leo discovering the subterranean glowing sundial in the vault',
          midjourneyPrompt: 'Cinematic wide shot of a dusty Victorian clockmaker vault, 12yo boy opening floorboards to reveal glowing golden clockwork gears, volumetric amber god-rays, hyperdetailed --ar 16:9'
        }
      ],
      coverBrief: {
        title: 'The Chrono-Guardians of Aethelgard',
        subtitle: 'The Broken Sundial of Clockwork Keep',
        coverArtPrompt: 'Book cover illustration, two adventurous boys standing atop a giant brass gear overlooking a floating clockwork citadel at sunset, golden hour lighting, bold fantasy title typography space --ar 2:3 --v 6.1',
        typographyStyle: 'Embossed Serif with brass filigree corners and subtle gear ornaments'
      },
      storyboardGuides: [
        { panelNumber: 1, cameraAngle: 'Low angle shot looking up at Leo', actionDescription: 'Leo holds his brass tweezers in shock as the gearwork begins to hum.' },
        { panelNumber: 2, cameraAngle: 'Wide establishing shot of the Backward River', actionDescription: 'Water flows uphill toward the floating citadel under a violet sky.' }
      ]
    },

    scorecard: {
      overallScore: 92,
      readabilityIndex: 84,
      fleschKincaidScore: 5.2,
      lexileEstimate: '780L',
      emotionalImpactScore: 90,
      educationalScaffoldingScore: 95,
      characterConsistencyScore: 94,
      pacingScore: 88,
      franchisePotential: 96,
      grammarAlerts: [],
      continuityAlerts: ['Ensure Kael’s sea compass is noted as non-magnetic inside Chrono-Rifts in Chapter 4.'],
      marketReadiness: 'Masterpiece Standard'
    },

    publishingMetadata: {
      kdpTitle: 'The Chrono-Guardians of Aethelgard: The Broken Sundial of Clockwork Keep',
      kdpSubtitle: 'An Epic Time-Travel Adventure for Kids Ages 8-12',
      authorName: 'E. P. Aethelgard',
      penName: 'Prof. Silas Quill',
      seriesName: 'The Chrono-Guardians',
      seriesVolume: 1,
      bisacCategories: [
        'JUVENILE FICTION / Action & Adventure / General',
        'JUVENILE FICTION / Fantasy & Magic',
        'JUVENILE FICTION / Science & Technology'
      ],
      amazonKeywords: [
        'time travel book for kids 8-12',
        'steampunk fantasy middle grade',
        'stem science fiction chapter book',
        'clockwork adventure book boys girls',
        'action adventure magic gears',
        'books like Percy Jackson and Harry Potter',
        'interactive learning adventure series'
      ],
      bookDescriptionHtml: `<b>When time itself breaks, only the bravest clockmakers can set it right!</b><br/><br/>Twelve-year-old Leo Pendelton thought he was just an ordinary apprentice in Clockwork Keep. But when an ancient subterranean sundial begins spinning backward, Leo uncovers a secret dimension where rivers flow uphill and time travels in reverse.<br/><br/>Joined by Kael Vance, a dashing 18th-century midshipman trapped in the present, Leo must solve the riddle of the Broken Sundial before the Shadow Paradox erases history forever.<br/><br/><b>Packed with STEM concepts, thrilling temporal puzzles, and unforgettable heroes! Perfect for fans of Percy Jackson and The Invention of Hugo Cabret.</b>`,
      isbn: '978-1-987654-32-1',
      printFormat: {
        trimSize: '5x8',
        paperType: 'Cream',
        bleed: false,
        coverFinish: 'Matte'
      },
      priceUSD: 12.99,
      estimatedRoyaltyPerSaleUSD: 6.85
    },

    marketingPack: {
      amazonBlurb: 'An epic STEM fantasy adventure where time travel meets clockwork magic!',
      tagline: 'When the sundial strikes thirteen, history begins to unspool...',
      socialPosts: [
        { platform: 'Instagram', caption: 'Step into Clockwork Keep! 🕰️✨ Discover the brand new middle-grade fantasy series where time flows backward and science meets magic. #MiddleGradeReads #STEMBooks #FantasyBooks', hashtags: ['#MiddleGradeBooks', '#STEMBooks', '#TimeTravel', '#ClockworkFantasy'] },
        { platform: 'TikTok / Reels', caption: 'What if water started flowing UPHILL? 🌊⏰ Leo Pendelton just opened the subterranean vault of Clockwork Keep...', hashtags: ['#BookTok', '#MiddleGrade', '#StoryForge', '#BookTrailer'] }
      ],
      emailCampaigns: [
        { stage: 'Pre-Launch Announcement', subject: '🕰️ Something impossible is happening at Clockwork Keep...', body: 'Dear Reader, The clocks in Aethelgard have stopped ticking forward. Get ready for an adventure beyond time...' }
      ],
      pressRelease: 'EMPIRE OS PUBLISHING ANNOUNCES REVOLUTIONARY MIDDLE-GRADE SERIES "THE CHRONO-GUARDIANS OF AETHELGARD"',
      blogArticles: [
        { title: 'How to Teach Kids Relativity Through Steampunk Fantasy', outline: '1. Introduce temporal dilation through clockwork mechanisms. 2. Engaging kids with interactive puzzles. 3. Questions for classroom reading circles.' }
      ],
      launchTimeline: [
        { day: 'Day -14', task: 'Send ARC review copies to top middle-grade book bloggers & teachers.' },
        { day: 'Day 0', task: 'Official KDP Amazon launch, trigger social media campaign.' }
      ]
    },

    videoPack: {
      narrationVoice: 'Prof. Silas Quill (Warm British Storyteller Voice)',
      sampleScriptText: 'The ticking in Grandfather Silas workshop was not normal. It skipped—a double-thump like a startled heart...',
      storyboardPrompts: [
        { timecode: '0:00 - 0:05', visualPrompt: 'Close up on brass gears turning slowly in twilight glow', audioText: 'In a world driven by clockwork, time was supposed to move forward...' },
        { timecode: '0:05 - 0:12', visualPrompt: 'Leo holding glowing chronometer in subterranean vault', audioText: 'Until the Sundial of Aethelgard cracked.' }
      ],
      tiktokReelsScripts: [
        { hook: 'POV: You find a secret door under your grandfather floorboards...', script: 'Show brass gear animation -> Cut to glowing river -> Reveal book cover!', visualNotes: 'Fast paced cuts with magical chime sound effect.' }
      ],
      trailerScript: 'A cinematic 60-second book trailer featuring orchestral clockwork music, voiceover narration, and epic Midjourney artwork passes.'
    },

    merchPack: {
      tShirtPrompts: [
        { title: 'Clockwork Keep Apprentice Tee', designPrompt: 'Minimalist brass gear graphic with the quote "Every Gear Has Its Place", distressed vintage print.' }
      ],
      mugPrompts: [
        { title: 'Backward River Mug', designPrompt: 'Color changing mug that reveals the floating clockwork citadel when hot liquid is poured.' }
      ],
      activityPages: [
        { title: 'The Sundial Gear Maze', type: 'maze', promptOrText: 'Help Leo navigate through the gearwork labyrinth to reach the Aetherite Sundial!' },
        { title: 'Aethelgard Coloring Sheet', type: 'coloring', promptOrText: 'Detailed line-art of Barnaby the mechanical owl perched on a giant brass pendulum.' }
      ],
      printableTeacherGuide: 'Comprehensive 12-page STEM & Language Arts Discussion Guide aligned with Common Core Grade 4-6 standards.'
    },

    analytics: {
      projectedSalesMonth1: 1450,
      projectedRoyaltiesMonth1USD: 9932.50,
      readThroughRatePercent: 88,
      targetAudienceMatchPercent: 96,
      mockReviews: [
        { reviewerName: 'TeacherSara_Reads', rating: 5, reviewText: 'My 5th graders were captivated from chapter 1! The STEM integration is seamless and the characters are so endearing.', verifiedPurchase: true },
        { reviewerName: 'FantasyFanatic99', rating: 5, reviewText: 'The worldbuilding of Aethelgard is brilliant. Reminds me of Hugo Cabret mixed with Golden Compass!', verifiedPurchase: true }
      ]
    },

    councilDebate: [
      {
        id: 'cd-1',
        specialistId: 'prof-quill',
        specialistName: 'Professor Quill',
        specialistRole: 'Dean of Literature',
        avatar: '🧙‍♂️',
        color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        timestamp: '10:14 AM',
        type: 'analysis',
        content: 'The narrative arc in Chapter 1 sets up high stakes effectively. The ticking skipping motif anchors the reader immediately into the mechanical temporal anomaly.',
        ratingScore: 94
      },
      {
        id: 'cd-2',
        specialistId: 'lady-ink',
        specialistName: 'Lady Ink',
        specialistRole: 'Dialogue Specialist',
        avatar: '✒️',
        color: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
        timestamp: '10:16 AM',
        type: 'critique',
        content: 'Kaelen’s 18th-century nautical phrasing in Chapter 2 contrasts sharply with Leo’s structured mechanical terms. This dialogue duality reinforces their character origins without exposition dumps.',
        ratingScore: 92
      },
      {
        id: 'cd-3',
        specialistId: 'prof-curiosity',
        specialistName: 'Professor Curiosity',
        specialistRole: 'Dean of Children’s Wonder',
        avatar: '✨',
        color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
        timestamp: '10:18 AM',
        type: 'approval',
        content: 'The Backward River visual is pure magic. It satisfies the core curiosity requirement for Middle Grade readers while stealthily introducing physics principles!',
        ratingScore: 96
      }
    ]
  }
];
