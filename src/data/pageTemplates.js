const makeTemplate = (title, subtitle, intro, prompts) => ({
  title,
  subtitle,
  intro,
  prompts,
});

export const pageTemplates = {
  "/whats-new": makeTemplate(
    "What's New",
    "Fresh little things from GuardHaus ✨",
    "Use this page to share new lessons, upcoming ideas, recent updates, and anything you are excited for the GuardHaus community to see.",
    ["New lesson or resource", "Coming up next", "A note from Blanca"]
  ),
  "/beginner-pathway": makeTemplate(
    "Beginner Pathway",
    "One step at a time, bestie ♡",
    "This is the home base for your beginner journey. Add a quick welcome, explain how the pathway works, and guide visitors toward their first lesson.",
    ["How to use this pathway", "Choose your first lesson", "Celebrate your progress"]
  ),
  "/beginner-pathway/start-here": makeTemplate(
    "Start Here",
    "Your first spin starts now 🌟",
    "Use this page as a gentle first stop for brand-new guard members—what to expect, what to bring, and how to take that first brave step.",
    ["Your first practice", "Beginner checklist", "A confidence reminder"]
  ),
  "/beginner-pathway/dance-basics": makeTemplate(
    "Dance Basics",
    "Move with confidence and curiosity ♡",
    "Build a beginning dance library here with posture tips, body positions, across-the-floor exercises, and easy combinations.",
    ["Skill of the week", "Warm-up or exercise", "Practice combo"]
  ),
  "/beginner-pathway/flag-basics": makeTemplate(
    "Flag Basics",
    "Let’s make your first spins sparkle ✿",
    "Use this page for flag vocabulary, hand positions, foundational spins, and beginner-friendly drills.",
    ["Equipment overview", "Technique breakdown", "Practice challenge"]
  ),
  "/beginner-pathway/sabre-basics": makeTemplate(
    "Sabre Basics",
    "Sharp skills, soft landing ♡",
    "Create a friendly introduction to sabre here: parts of the equipment, safety basics, foundational skills, and early tosses.",
    ["Safety first", "Skill walkthrough", "Try this next"]
  ),
  "/beginner-pathway/rifle-basics": makeTemplate(
    "Rifle Basics",
    "A little brave, a lot of practice ✦",
    "Use this page to introduce rifle technique, handling, foundational spins, and simple progressions at a beginner-friendly pace.",
    ["Know your equipment", "Technique focus", "Confidence builder"]
  ),
  "/blancas-corner": makeTemplate(
    "Blanca's Corner",
    "A cozy place to train, grow, and play ♡",
    "This is your personal movement corner. Add guidance, mini-lessons, and encouragement for the parts of training that make you feel most alive.",
    ["Featured focus", "Training tip", "A little encouragement"]
  ),
  "/blancas-corner/flexibility-101": makeTemplate(
    "Flexibility 101",
    "Slow stretches, sweet progress ✿",
    "Use this page for safe flexibility basics, approachable routines, and a reminder that consistency matters more than forcing a stretch.",
    ["Warm-up first", "Stretch sequence", "Listen to your body"]
  ),
  "/blancas-corner/handbalancing-101": makeTemplate(
    "Handbalancing 101",
    "Find your upside-down happy place ♡",
    "Build a handbalancing home base with wrist preparation, shapes, drills, and playful progressions.",
    ["Foundation drill", "Shape of the day", "Practice safely"]
  ),
  "/blancas-corner/acro-101": makeTemplate(
    "Acro 101",
    "Strong, stretchy, and a little fearless ✦",
    "Use this page for introductory acro skills, safe setup ideas, helpful progressions, and practice notes.",
    ["Before you try", "Skill progression", "Helpful conditioning"]
  ),
  "/blancas-corner/strength-conditioning": makeTemplate(
    "Strength & Conditioning",
    "Build the strength behind the sparkle ♡",
    "Add short training plans, guard-friendly exercises, and recovery reminders to this section.",
    ["Quick workout", "Movement focus", "Recovery reminder"]
  ),
  "/guard-forum": makeTemplate(
    "Guard Forum",
    "A place for every question and big win ♡",
    "This page can welcome community conversations. Introduce the forum, set a kind tone, and point members toward the right discussion space.",
    ["Community guidelines", "Start a conversation", "This week's spotlight"]
  ),
  "/guard-forum/general": makeTemplate(
    "General",
    "Talk guard with your people ✿",
    "Use this space for everyday conversations, introductions, small wins, and everything in between.",
    ["Conversation prompt", "Community note", "Share a win"]
  ),
  "/guard-forum/technique-help": makeTemplate(
    "Technique Help",
    "Questions are how we grow ♡",
    "Create a supportive home for technique questions, troubleshooting, practice videos, and helpful tips from the community.",
    ["Ask for help", "Helpful details to share", "Quick technique tip"]
  ),
  "/guard-forum/show-design": makeTemplate(
    "Show Design",
    "Where big ideas take the floor ✦",
    "Use this section for show concepts, choreographic inspiration, music thoughts, and design conversations.",
    ["Inspiration board", "Design question", "Creative prompt"]
  ),
  "/guard-forum/share-your-work": makeTemplate(
    "Share Your Work",
    "Your creativity belongs here ♡",
    "Give members a place to share their routines, choreography, artwork, props, and proud moments.",
    ["Feature submission", "Feedback prompt", "Creator spotlight"]
  ),
  "/gallery": makeTemplate(
    "Gallery",
    "A little archive of guard magic ✿",
    "Use this page as the gallery welcome, with featured moments and a guide to the different kinds of memories visitors can explore.",
    ["Featured memory", "Browse the gallery", "Submit a moment"]
  ),
  "/gallery/photos": makeTemplate(
    "Photos",
    "Moments worth keeping ♡",
    "Build a photo gallery here with rehearsal snapshots, performance memories, behind-the-scenes moments, and captions.",
    ["Featured photo", "Photo collection", "Photo credit"]
  ),
  "/gallery/videos": makeTemplate(
    "Videos",
    "Press play on a little magic ✦",
    "Use this page for performances, tutorials, practice clips, and favorite guard memories in motion.",
    ["Featured video", "Video collection", "Watch next"]
  ),
  "/gallery/toss-highlights": makeTemplate(
    "Toss Highlights",
    "Big air, brave catches, iconic moments ♡",
    "Create a highlight reel of tosses, catches, progress videos, and the stories behind them.",
    ["Highlight of the month", "Skill story", "Submit your toss"]
  ),
  "/gallery/community-spotlight": makeTemplate(
    "Community Spotlight",
    "Cheering for our guard besties ✿",
    "Use this page to celebrate community members, their growth, their work, and the little things that make them shine.",
    ["Meet the spotlight", "Their guard story", "Nominate someone"]
  ),
  "/contact": makeTemplate(
    "Contact",
    "Let’s connect, bestie ♡",
    "This is a friendly landing page for visitors who want to get in touch, collaborate, request a tutorial, or find a helpful answer.",
    ["Ways to connect", "What to include", "Response note"]
  ),
  "/contact/contact-me": makeTemplate(
    "Contact Me",
    "Send a little hello ✿",
    "Use this page for your preferred contact method, availability, and a kind note about what messages are best for this space.",
    ["How to reach me", "Best things to include", "Reply expectations"]
  ),
  "/contact/tutorial-requests": makeTemplate(
    "Tutorial Requests",
    "What should we learn next? ♡",
    "Use this page to collect lesson requests and help visitors share the skill, level, and details that would make a tutorial useful.",
    ["Request a skill", "Helpful details", "Most requested"]
  ),
  "/contact/collaborate": makeTemplate(
    "Collaborate",
    "Let’s make something lovely together ✦",
    "Use this space to describe the kinds of collaborations you welcome and the information people should share when reaching out.",
    ["Collaboration ideas", "Tell me about your project", "What happens next"]
  ),
  "/contact/faqs": makeTemplate(
    "FAQs",
    "A few helpful little answers ♡",
    "Use this page to collect the questions visitors ask most often and answer them in your own warm voice.",
    ["Question one", "Question two", "Still wondering?"]
  ),
};
