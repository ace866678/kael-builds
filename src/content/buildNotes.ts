export const buildNotesArticle = {
  kicker: "BUILD NOTES / 001",
  title: "From Idea to Prototype",
  subtitle: "A practical checklist for building small web apps without making the first version bigger than it needs to be.",
  readingTime: "5 MIN READ",
  status: "FIELD GUIDE",
  introduction:
    "A promising idea can become overwhelming when every possible feature feels essential. The way through is to make the problem specific, choose one useful outcome, and build a version you can actually test.",
  sections: [
    {
      heading: "01 — Define the problem before the features",
      paragraphs: [
        "Start with the person who will use the tool and the task they are trying to complete. Write the problem in one or two sentences. If it takes a page to explain, narrow the scope before opening your editor.",
        "A useful prompt is: “When [person] needs to [task], this tool helps them [specific outcome].” Treat it as a working hypothesis, not a promise that the solution is already right."
      ],
      bullets: [
        "Who is the first intended user?",
        "What is the one task they need to finish?",
        "How will you recognize that the task worked?"
      ]
    },
    {
      heading: "02 — Choose the smallest useful feature set",
      paragraphs: [
        "List the features you can imagine, then separate the ones required for the core task from the ones that would merely be nice to have. Build the required path first. Save accounts, notifications, complex settings, and extra dashboards for when the core workflow justifies them."
      ],
      bullets: [
        "Must have: without it, the core task cannot be completed.",
        "Could have: useful, but not necessary for the first test.",
        "Later: interesting ideas that would add more scope than evidence."
      ]
    },
    {
      heading: "03 — Sketch the interface and data flow",
      paragraphs: [
        "Before polishing colors or animations, sketch the main screen and the steps a user takes through it. Note what information enters the app, where it is stored, and what changes after each action.",
        "A paper sketch or a few labeled boxes is enough to reveal missing states: empty lists, invalid input, loading, success, and failure. Planning these states early is usually cheaper than patching them in later."
      ]
    },
    {
      heading: "04 — Pick tools that fit the job",
      paragraphs: [
        "Use the simplest stack you can maintain and explain. A small browser-only tool may not need a database. A collaborative app with accounts and shared records probably does. Choose a framework, service, or library because it solves a real requirement—not because the project would look more impressive with it.",
        "Keep secrets out of frontend code, validate untrusted input, and avoid collecting personal data unless the feature genuinely needs it."
      ]
    },
    {
      heading: "05 — Test the main path and the awkward cases",
      paragraphs: [
        "Run through the most important task as if you were a new user. Check keyboard navigation, narrow screens, slow or missing data, and what happens when someone submits an empty or incorrect value. Ask another person to try it if you can; confusion that seems obvious to you may not be obvious to them."
      ],
      bullets: [
        "Can the user complete the core task from start to finish?",
        "Are errors understandable and recoverable?",
        "Does the layout remain usable on a phone?",
        "Do links, buttons, and forms behave as their labels promise?"
      ]
    },
    {
      heading: "06 — Document what is real and what remains",
      paragraphs: [
        "Write down what works, what you tested, what you have not verified, and what you would improve next. Distinguish a design concept from a working prototype, and a prototype from a production-ready service. Honest status labels make a project easier to evaluate and easier to maintain."
      ]
    }
  ],
  closing:
    "A first version is not a smaller version of the final dream. It is a focused way to learn whether the core idea is useful. Make one path work, test it, write down what you learned, and let the next version earn its complexity."
};

export type BuildNotesArticle = typeof buildNotesArticle;
