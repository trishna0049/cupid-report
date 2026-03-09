// ============================================
// FLAGCHECK — Quiz Data & Scoring
// ============================================

const FLAG_QUESTIONS = [
  {
    q: "You and your partner disagree about something small (like where to eat).",
    options: [
      { text: "I try to convince them of my choice", cat: "A" },
      { text: "I'm fine going with their idea", cat: "G" },
      { text: "We discuss both options for a bit", cat: "G" },
      { text: "I usually say \"you decide\"", cat: "B" }
    ]
  },
  {
    q: "Your partner hasn't replied for a few hours.",
    options: [
      { text: "I assume they're busy", cat: "G" },
      { text: "I send another message later", cat: "B" },
      { text: "I check if they're active somewhere else", cat: "B" },
      { text: "I wait until they reply", cat: "G" }
    ]
  },
  {
    q: "You're out with friends and your partner texts you.",
    options: [
      { text: "I reply quickly and continue what I'm doing", cat: "G" },
      { text: "I reply when I get a moment", cat: "G" },
      { text: "I usually respond later when I'm free", cat: "B" },
      { text: "I sometimes forget to reply", cat: "A" }
    ]
  },
  {
    q: "Your partner posts a photo and gets lots of attention online.",
    options: [
      { text: "I like the post and move on", cat: "G" },
      { text: "I hype them up in the comments", cat: "G" },
      { text: "I notice who's interacting with it", cat: "A" },
      { text: "I tease them about their \"fans\"", cat: "B" }
    ]
  },
  {
    q: "Your partner says they want a weekend with their friends.",
    options: [
      { text: "Sounds fun, enjoy!", cat: "G" },
      { text: "I ask what they're planning", cat: "B" },
      { text: "I joke that they're abandoning me", cat: "A" },
      { text: "I suggest we meet after they're back", cat: "G" }
    ]
  },
  {
    q: "You accidentally forget to reply to a message from your partner.",
    options: [
      { text: "I apologize when I see it", cat: "G" },
      { text: "I continue the conversation normally", cat: "B" },
      { text: "I mention I got busy", cat: "B" },
      { text: "I reply later when I remember", cat: "B" }
    ]
  },
  {
    q: "Your partner seems quieter than usual.",
    options: [
      { text: "I ask if everything is okay", cat: "G" },
      { text: "I give them some space first", cat: "G" },
      { text: "I wait to see if they bring it up", cat: "B" },
      { text: "I try to lighten the mood", cat: "B" }
    ]
  },
  {
    q: "Someone flirts with your partner while you're both out.",
    options: [
      { text: "I don't think much about it", cat: "G" },
      { text: "I find it a bit funny", cat: "B" },
      { text: "I notice but stay quiet", cat: "A" },
      { text: "I tease my partner about it later", cat: "B" }
    ]
  },
  {
    q: "You're annoyed about something small your partner did.",
    options: [
      { text: "I mention it casually", cat: "G" },
      { text: "I let it go after a while", cat: "B" },
      { text: "I bring it up later in conversation", cat: "G" },
      { text: "I make a small joke about it", cat: "B" }
    ]
  },
  {
    q: "Your partner forgets something you told them earlier.",
    options: [
      { text: "I remind them", cat: "G" },
      { text: "I laugh about it", cat: "G" },
      { text: "I repeat it again", cat: "B" },
      { text: "I say \"I told you already\"", cat: "A" }
    ]
  },
  {
    q: "Your partner is very busy with work/studies for a few days.",
    options: [
      { text: "I give them space", cat: "G" },
      { text: "I send supportive messages", cat: "G" },
      { text: "I check in occasionally", cat: "B" },
      { text: "I wait for them to reach out", cat: "B" }
    ]
  },
  {
    q: "You see your partner online but they haven't replied yet.",
    options: [
      { text: "I assume they'll reply later", cat: "G" },
      { text: "I don't really think about it", cat: "G" },
      { text: "I notice but ignore it", cat: "B" },
      { text: "I send another message later", cat: "A" }
    ]
  },
  {
    q: "Your partner achieves something big.",
    options: [
      { text: "I celebrate it with them", cat: "G" },
      { text: "I congratulate them", cat: "G" },
      { text: "I share it with others proudly", cat: "G" },
      { text: "I tease them about becoming famous", cat: "B" }
    ]
  },
  {
    q: "When you need space…",
    options: [
      { text: "I tell my partner directly", cat: "G" },
      { text: "I say I'm a bit busy", cat: "B" },
      { text: "I spend time alone quietly", cat: "A" },
      { text: "I take some time to myself", cat: "B" }
    ]
  },
  {
    q: "When your partner is upset about something.",
    options: [
      { text: "I listen to them", cat: "G" },
      { text: "I ask what happened", cat: "G" },
      { text: "I try to cheer them up", cat: "B" },
      { text: "I sit with them quietly", cat: "G" }
    ]
  }
];

function scoreAnswers(answers) {
  let G = 0, B = 0, A = 0;
  answers.forEach(({ qIdx, optIdx }) => {
    const cat = FLAG_QUESTIONS[qIdx].options[optIdx].cat;
    if (cat === "G") G++;
    else if (cat === "B") B++;
    else A++;
  });
  return { G, B, A, total: answers.length };
}

function getResult(scores) {
  const { G, B, A } = scores;

  if (G >= 10) {
    return {
      emoji: "💚",
      title: "Green Flag",
      color: "#2d9e5f",
      bg: "#e5f5ec",
      desc: "You bring healthy communication, trust, and emotional maturity to your relationships. You create space for your partner to be themselves and handle disagreements with care and clarity. Keep being you — your partner is lucky!"
    };
  } else if (G >= 7 && A <= 2) {
    return {
      emoji: "🌿",
      title: "Slightly Green Flag",
      color: "#2d9e5f",
      bg: "#e5f5ec",
      desc: "You're generally healthy and grounded in your relationships with only a few very human insecurities. You communicate well and trust your partner. A little self-awareness goes a long way, and you clearly have it."
    };
  } else if (B >= 7 || (G >= 4 && B >= 4)) {
    return {
      emoji: "⚖️",
      title: "Somewhere in the Middle",
      color: "#f5a623",
      bg: "#fff8ec",
      desc: "You're a mix of healthy and human — sometimes secure, sometimes a little unsure. Your intentions are good, but there may be moments where anxiety or indirect communication gets in the way. You're aware enough to grow."
    };
  } else if (A >= 4 && A <= 6) {
    return {
      emoji: "🚩",
      title: "Slightly Red Flag",
      color: "#e8453c",
      bg: "#fde8e7",
      desc: "There are some patterns worth noticing — a bit of overthinking, some indirect communication, or occasional jealousy. These are common, and awareness is the first step to healthy relationships. You're not a lost cause — just be intentional."
    };
  } else {
    return {
      emoji: "🚩",
      title: "Red Flag",
      color: "#e8453c",
      bg: "#fde8e7",
      desc: "Some of your relationship patterns — avoidance, jealousy, or passive communication — may be causing friction without you fully realizing it. This doesn't define you. Self-awareness is the beginning of growth, and recognizing these patterns is a big step forward."
    };
  }
}
