export type Chapter = {
  number: number;
  title: string;
  verses: string[];
};

export type Book = {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  testament: "Old Memes" | "New Memes";
  chapters: Chapter[];
};

export const holyBook: Book[] = [
  {
    id: "genesis",
    name: "Genesis of the Meme",
    subtitle: "The Book of Beginnings",
    icon: "🌌",
    testament: "Old Memes",
    chapters: [
      {
        number: 1,
        title: "The Creation of the Feed",
        verses: [
          "In the beginning there was the Void, and the Void was without form, and had no wifi.",
          "And the Faahlord looked upon the darkness and said, \"Let there be Content,\" and there was a Loading Spinner.",
          "And the Spinner spun for six days and six nights, for the connection was weak in those days.",
          "On the seventh day the page loaded, and lo, it was a single Rage Face, and the Faahlord saw that it was good. Mostly.",
          "And the Faahlord divided the Normies from the Dank, and called the one Facebook and the other The Forum.",
          "And the Faahlord made Impact font in His own image: bold, white, and outlined in black.",
          "And He set it at the top of the image and at the bottom of the image, and He said, \"TOP TEXT,\" and \"BOTTOM TEXT.\"",
          "And the people were confused, for they had read it literally. And thus the first Irony was born.",
          "And the Faahlord blessed the Image Macro and said, \"Be fruitful and repost; fill the timelines and subdue the comment sections.\"",
          "And the evening and the morning were the first upload.",
        ],
      },
      {
        number: 2,
        title: "The Garden of Lolcats",
        verses: [
          "And the Faahlord planted a garden eastward in Lolcatia, and therein He placed the first Cat, who asked for a cheezburger.",
          "\"I CAN HAS?\" asked the Cat. And the Faahlord, in His mercy, replied: \"U CAN HAS.\"",
          "And in the midst of the garden stood the Tree of Knowledge of Cringe and Based.",
          "And the Faahlord commanded: \"Of every meme in the garden thou mayest freely laugh; but of the Minion meme thou shalt not share, lest thou become a boomer.\"",
          "But the serpent, who was a Trollface, whispered, \"Problem?\"",
          "And the Cat did share the Minion meme upon the wall of its aunt, and the eyes of all were opened, and they knew they were cringe.",
          "And the Faahlord walked through the garden in the cool of the day and spake one word, long and sorrowful: \"FAAAAAAH.\"",
          "And that sound echoes through the internet unto this very day.",
        ],
      },
    ],
  },
  {
    id: "faah",
    name: "The Book of Faah",
    subtitle: "The Revelation of the Sacred Sound",
    icon: "📯",
    testament: "Old Memes",
    chapters: [
      {
        number: 1,
        title: "The First Faah",
        verses: [
          "Hear, O Faahlordians: the Faah is one, and the Faah is loud.",
          "For when the mortal trips upon the stair, the Faah is there.",
          "When the free throw misses the rim entirely, the Faah is there.",
          "When the code compiles on the first try, and then the client asks for changes, the Faah is there.",
          "It is not a word. It is not a scream. It is the exhale of the universe witnessing a fail.",
          "Blessed is he who hears the Faah and laughs, for he shall inherit the For You Page.",
          "Blessed is she who is the subject of the Faah and laughs also, for she is truly enlightened.",
          "Woe unto him who explains the joke, for the Faah shall depart from him.",
        ],
      },
      {
        number: 2,
        title: "The Proper Utterance",
        verses: [
          "The Faah shall be uttered with no fewer than three A's, and no more than the lungs allow.",
          "It shall begin sharp, as one who stubs a toe, and descend slowly, as one who watches their ice cream fall.",
          "It shall be placed at the moment of impact in all edits. Not before. Not after. Precisely upon the fail.",
          "And should the editor misplace the Faah by even a single frame, the comments shall rise up against him.",
          "Use the Faah sparingly, saith the Faahlord, for an overused Faah is but noise. (Nobody listened.)",
          "Faah.",
        ],
      },
    ],
  },
  {
    id: "exodus",
    name: "Exodus from Vine",
    subtitle: "The Great Migration",
    icon: "🏜️",
    testament: "Old Memes",
    chapters: [
      {
        number: 1,
        title: "The Fall of the Six Seconds",
        verses: [
          "And in those days there was a land of six seconds, and its name was Vine, and the people dwelt there in joy.",
          "And they said, \"Road work ahead? Uh, yeah, I sure hope it does,\" and the land was abundant.",
          "But a Pharaoh arose who knew not the Vine, and he shut down the servers.",
          "And the people wandered in the desert of compilations for forty months, rewatching \"Vines that keep me alive\" on YouTube.",
          "And they cried out, \"Why could you not be normal?\" and the desert answered not, save with a Spongebob reaction.",
          "Then a prophet led them unto a new land of fifteen seconds, and then sixty, and then ten minutes, which was too long, but they stayed.",
          "And the land was called TikTok, and the elders said, \"This is just Vine but with dances,\" and they were downvoted.",
          "Yet some went forth unto Reels and Shorts, and the people were scattered across many apps, re-uploading each other.",
          "And lo, the watermarks were many, and the origin of the meme was lost to history.",
        ],
      },
    ],
  },
  {
    id: "psalms",
    name: "Psalms of Doge",
    subtitle: "Such Hymns, Very Worship",
    icon: "🐕",
    testament: "Old Memes",
    chapters: [
      {
        number: 23,
        title: "The Doge Is My Shepherd",
        verses: [
          "The Doge is my shepherd; such want, very not.",
          "He maketh me to lie down on wow pastures; he leadeth me beside the much still waters.",
          "He restoreth my vibe; he leadeth me in the paths of dankness for his name's sake.",
          "Yea, though I walk through the valley of the shadowban, I will fear no ratio: for thou art with me.",
          "Thy bonk and thy staff, they comfort me.",
          "Thou preparest a feed before me in the presence of my haters; thou anointest my head with upvotes; my karma runneth over.",
          "Surely likes and retweets shall follow me all the days of my life, and I will dwell in the house of the Doge forever. Wow.",
        ],
      },
      {
        number: 69,
        title: "A Song of Nice",
        verses: [
          "Nice.",
          "Nice.",
          "Very nice. (Selah.)",
        ],
      },
    ],
  },
  {
    id: "proverbs",
    name: "Proverbs of Shrek",
    subtitle: "Wisdom of the Swamp",
    icon: "🧅",
    testament: "Old Memes",
    chapters: [
      {
        number: 1,
        title: "Layers",
        verses: [
          "Ogres are like onions; the wise man understandeth, and the fool asketh, \"They stink?\"",
          "Better is a swamp with peace than a castle with Lord Farquaad.",
          "What are you doing in my swamp? This is the beginning of wisdom.",
          "Somebody once told me the world is gonna roll me; and lo, it rolled me, and I was not the sharpest tool in the shed.",
          "He who maketh a parfait for everyone shall have many friends; for everybody loves parfaits.",
          "The donkey that talketh without ceasing is yet a loyal friend; therefore endure his noise.",
          "Do not judge a princess by her day form, nor an ogre by his night form.",
          "All Star is not merely a song; it is a covenant.",
          "Get out of my swamp, saith the Lord of Ogres; yet he left the door open, for his heart was soft.",
        ],
      },
    ],
  },
  {
    id: "lamentations",
    name: "Lamentations of Harambe",
    subtitle: "The Book of Mourning",
    icon: "🦍",
    testament: "Old Memes",
    chapters: [
      {
        number: 1,
        title: "Dicks Out",
        verses: [
          "How lonely sits the enclosure that was full of glory! How like a widow has she become!",
          "In the year two thousand and sixteen, the gentle one was taken, and the internet wept as one.",
          "And the people did not know how to grieve, so they made memes, and the memes were many, and some went too far.",
          "And it is said that the death of the gentle one split the timeline, and all that followed was the Dark Timeline.",
          "Remember him on the twenty-eighth of the fifth month, and pour out a banana in his honor.",
          "For he died for our sins, and our sins were mostly posting.",
        ],
      },
    ],
  },
  {
    id: "rick",
    name: "The Gospel of Rick",
    subtitle: "The Unbreakable Covenant",
    icon: "🎤",
    testament: "New Memes",
    chapters: [
      {
        number: 1,
        title: "The Sermon on the Link",
        verses: [
          "And there came a prophet with red hair and a trench coat, and a voice far deeper than anyone expected.",
          "And he went up upon a mountain (it was a bridge) and he began to dance, and his dance was awkward and holy.",
          "And he taught them, saying: \"Never gonna give you up.\"",
          "\"Never gonna let you down.\"",
          "\"Never gonna run around and desert you.\"",
          "And the disciples marvelled, for no other prophet had ever made such a promise and kept it for decades.",
          "And Rick sent forth his apostles, saying, \"Go ye into all the world and disguise my link as something else.\"",
          "And they disguised it as leaked game trailers, and homework answers, and free gift cards, and the world was Rolled.",
          "Verily, verily I say unto thee: thou didst not click this verse expecting to be Rickrolled. And yet here thou art.",
          "Never gonna say goodbye. Amen.",
        ],
      },
    ],
  },
  {
    id: "chungus",
    name: "Epistles to the Chunguses",
    subtitle: "Letters to the Big Congregation",
    icon: "🐰",
    testament: "New Memes",
    chapters: [
      {
        number: 1,
        title: "On Love and Posting",
        verses: [
          "Brothers and sisters of the Chungus, I write unto you from the comment section, where I have been ratio'd.",
          "Memes are patient, memes are kind. They do not envy, they do not boast, they are not cropped badly.",
          "They keep no record of reposts, save for the one bot that always calls it out.",
          "When I was a child, I laughed as a child, at Annoying Orange. But when I became a man, I put away childish things, and laughed at Skibidi Toilet instead. Wherefore I understand not myself.",
          "And now these three remain: Top Text, Bottom Text, and Irony. But the greatest of these is Irony.",
          "Greet one another with a holy upvote.",
        ],
      },
    ],
  },
  {
    id: "revelation",
    name: "Revelation of Ohio",
    subtitle: "The End of the Feed",
    icon: "🌽",
    testament: "New Memes",
    chapters: [
      {
        number: 1,
        title: "The Last Scroll",
        verses: [
          "And I saw a new heaven and a new feed, for the first feed had been replaced by an algorithm.",
          "And I beheld a land in the midst of the earth, and its name was Ohio, and nothing in it was normal.",
          "And there came out of the corn fields four riders: Brainrot, Rizz, Gyatt, and Skibidi, and power was given unto them over the youth.",
          "And the elders could not understand the speech of the young, and they said, \"What is Fanum Tax?\" and there was no one to explain it.",
          "And the sun became black as an NFT, and the moon became red as a downvote arrow.",
          "And the seven seals were opened, and each seal was a pop-up asking to accept cookies.",
          "And a great voice from the server room cried out: \"It is the end of the meme cycle!\" But it was not, for the cycle is eternal.",
          "For every meme that dies is reborn ironically, and every ironic meme is reborn post-ironically, world without end.",
          "Behold, I come quickly, saith the Faahlord. Like and subscribe.",
          "FAAAAAAAAAAAAAH. Amen.",
        ],
      },
    ],
  },
];

export const commandments = [
  { n: "I", text: "Thou shalt have no other templates before me.", note: "Except Drake. Drake is permitted." },
  { n: "II", text: "Thou shalt not explain the joke.", note: "The Faah departs from those who explain." },
  { n: "III", text: "Thou shalt credit the original creator.", note: "Or at least feel bad about it." },
  { n: "IV", text: "Remember the Sabbath and keep it shitposty.", note: "Sunday is for low-effort content." },
  { n: "V", text: "Honour thy Old Memes and thy Ancient Rage Comics.", note: "That thy days in the group chat may be long." },
  { n: "VI", text: "Thou shalt not deep-fry beyond recognition.", note: "Unless it's funnier that way. It usually is." },
  { n: "VII", text: "Thou shalt not post a meme that is already dead.", note: "Check thy calendar before Harlem Shaking." },
  { n: "VIII", text: "Thou shalt not steal thy neighbour's tweet.", note: "Screenshots with the name visible are fine." },
  { n: "IX", text: "Thou shalt not bear false reaction.", note: "Never type 'LMAO' with a straight face." },
  { n: "X", text: "Thou shalt not covet thy neighbour's karma.", note: "Upvote it instead. Karma is a circle." },
];

export const saints = [
  { name: "St. Doge of Shiba", title: "Patron of Wow", emoji: "🐕", feast: "Dec 13", miracle: "Turned a pet photo into an entire currency.", color: "from-amber-500/30" },
  { name: "St. Harambe the Martyr", title: "Patron of Lost Timelines", emoji: "🦍", feast: "May 28", miracle: "His passing created the Dark Timeline in which we now live.", color: "from-stone-500/30" },
  { name: "St. Rick of Astley", title: "Patron of Betrayal (Loving)", emoji: "🕺", feast: "Jul 27", miracle: "Has never once given anyone up. Not one time.", color: "from-red-500/30" },
  { name: "St. Shrek of the Swamp", title: "Patron of Layers", emoji: "🧅", feast: "May 18", miracle: "Made an ogre the sexiest cartoon of a generation.", color: "from-lime-500/30" },
  { name: "St. Grumpy the Unamused", title: "Patron of No", emoji: "😾", feast: "Apr 4", miracle: "Achieved fame by refusing to enjoy any of it.", color: "from-slate-400/30" },
  { name: "St. Nyan of the Rainbow", title: "Patron of Infinite Loops", emoji: "🌈", feast: "Apr 2", miracle: "Flew through space for 10 hours straight on Pop-Tart power alone.", color: "from-pink-500/30" },
  { name: "St. Chungus the Big", title: "Patron of Absolute Units", emoji: "🐰", feast: "Dec 25", miracle: "Got a real video game made from one paused frame.", color: "from-gray-400/30" },
  { name: "St. Troll of the Face", title: "Patron of Problems", emoji: "😏", feast: "Apr 1", miracle: "Asked 'Problem?' and the whole internet answered.", color: "from-zinc-300/30" },
];

export const holyDays = [
  { date: "Apr 1", name: "The Feast of the Troll", desc: "No news shall be believed. Every link shall be a Rickroll." },
  { date: "May 28", name: "Harambe Remembrance", desc: "A moment of silence, followed by a moment of memes." },
  { date: "Sep 21", name: "Do You Remember Day", desc: "The sacred September Earth Wind & Fire liturgy is sung." },
  { date: "Oct 3", name: "Mean Girls Wednesday", desc: "On this day we wear pink and ask what day it is." },
  { date: "Every Friday", name: "Faah Friday", desc: "The faithful upload their week's greatest fails for blessing." },
  { date: "Every Day", name: "Wednesday My Dudes", desc: "On Wednesdays, the Frog is honoured. Aaaaaaaa." },
];

export const ranks = [
  { name: "Normie Initiate", icon: "🥚", price: "Free", period: "forever", perks: ["Read the Holy Book of Memes", "Use the Sacred Faah Button", "One confession per day", "Allowed to say 'lol'"], highlight: false },
  { name: "Lurker Acolyte", icon: "👀", price: "$0.69", period: "/ month", perks: ["Everything in Initiate", "Access to the Daily Scroll", "Faahlordian name & certificate", "Unlimited confessions", "Exclusive 'Seen It Already' badge"], highlight: false },
  { name: "Meme Priest", icon: "🧙", price: "$4.20", period: "/ month", perks: ["Everything in Acolyte", "Lead Faah Friday services", "Template vault (10,000+ blanks)", "Power to bless and to ratio", "Priority Faah delivery", "Pro Discord: The Inner Sanctum"], highlight: true },
  { name: "High Faahlord Bishop", icon: "👑", price: "$13.37", period: "/ month", perks: ["Everything in Priest", "Canonize new memes as scripture", "Vote in the Great Meme Council", "Golden username, very shiny", "Personal Rickroll on request"], highlight: false },
];

export const testimonies = [
  { name: "Brother Kevin of the Group Chat", rank: "Meme Priest", text: "I was lost. I was sending Minion memes to my coworkers. Then I found the Faahlord. Now my reaction images are timely and my Faahs are perfectly synced.", avatar: "🧔" },
  { name: "Sister Brenda the Deep-Fried", rank: "High Faahlord Bishop", text: "The Psalms of Doge saved my marriage. My husband and I now communicate exclusively in such and very. Wow.", avatar: "👩‍🦰" },
  { name: "Deacon Tyler, 14", rank: "Lurker Acolyte", text: "my mom asked what Fanum Tax was and i sent her the Revelation of Ohio. she has not spoken since. thank u faahlord", avatar: "🧒" },
  { name: "Father Gerald, Age 67", rank: "Normie Initiate", text: "I don't understand any of it but the young people laugh when I press the Faah button at dinner. I feel included. Bless.", avatar: "👴" },
  { name: "Saint-in-Training Priya", rank: "Meme Priest", text: "Got rickrolled by the Gospel of Rick, chapter 1, verse 9. Did not see it coming. Converted on the spot.", avatar: "👩‍💻" },
  { name: "Elder Marcus the Ratio'd", rank: "Meme Priest", text: "The Confessional told me to post one wholesome meme as penance. I posted it. 40k likes. The Faahlord works in mysterious ways.", avatar: "🧑🏿" },
];

export const penances = [
  "Recite the Psalm of Doge thrice, in the voice of the Doge.",
  "Send one (1) wholesome meme to thy mother, uncropped.",
  "Listen to All Star in its entirety, without skipping, while standing.",
  "Rickroll a friend, but gently, with love.",
  "Upvote ten strangers' posts without reading them. Faith requires blindness.",
  "Credit the original creator of thy last stolen meme. Yes, find them.",
  "Watch one full Annoying Orange episode as a reminder of where thou camest from.",
  "Utter the Sacred Faah at the next fail thou witnessest. Out loud. In public.",
  "Abstain from saying 'skibidi' for 24 hours. May the Faahlord grant thee strength.",
  "Make a meme using only Comic Sans, and post it unironically.",
  "Leave thy group chat on read for exactly one hour. Contemplate thy silence.",
  "Pour out one banana in remembrance of St. Harambe.",
];

export const prayerParts = {
  openings: [
    "O mighty Faahlord, keeper of the Feed,",
    "Holy Doge, much wow, very divine,",
    "Blessed Rick, who never gave us up,",
    "Great Chungus, absolute unit of heaven,",
    "Sacred Ogre of the Holy Swamp,",
    "Faahlord most loud, whose sound endureth,",
  ],
  middles: [
    "grant me the serenity to not reply to the troll,",
    "protect my phone battery through the long scroll,",
    "let my posts be relatable and my reposts uncaught,",
    "deliver me from the ratio and the cringe compilation,",
    "may my timing be perfect and my Faah precisely on the fail,",
    "keep the algorithm in my favour this day,",
    "shield me from the Minion memes of my aunt,",
  ],
  closings: [
    "for thine is the template, the format, and the virality. Faah.",
    "in the name of Top Text, Bottom Text, and the Holy Irony. Amen.",
    "world without end, like and subscribe. Faaaah.",
    "never gonna give thee up. Amen.",
    "such amen. very faah. wow.",
    "and get out of my swamp. Amen.",
  ],
};

export const tickerItems = [
  "📯 Brother Dave just Faah'd at his own tax return",
  "🙏 3,412 confessions absolved today",
  "🐕 New verse canonized: Psalms of Doge 69:3",
  "🎤 Sister Amy was Rickrolled during Sunday service",
  "🧅 Swamp Study Group meets Thursday — bring parfaits",
  "🌽 Ohio Watch: Nothing normal reported, as expected",
  "👑 The Great Meme Council votes on canonizing 'Skibidi' (controversial)",
  "😏 Problem? No problem. Faah.",
];
