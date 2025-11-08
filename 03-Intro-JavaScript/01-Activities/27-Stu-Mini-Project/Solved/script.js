const playGame = function () {
  // 🎯 Track player statistics
  const stats = {
    wins: 0,
    losses: 0,
    ties: 0,
    choices: {
      rock: 0,
      paper: 0,
      scissors: 0
    }
  };

  // 🧩 Possible choices
  const options = ["R", "P", "S"];
  let keepPlaying = true;

  // 🔁 Continue until player quits
  while (keepPlaying) {
    let userChoice = window.prompt("Enter R for Rock 🪨, P for Paper 📄, or S for Scissors ✂️:");

    if (!userChoice) {
      window.alert("👋 Thanks for playing!");
      break;
    }

    userChoice = userChoice.trim().toUpperCase();

    if (!options.includes(userChoice)) {
      window.alert("⚠️ Invalid choice. Please enter R, P, or S.");
      continue;
    }

    // Record user’s choice
    if (userChoice === "R") stats.choices.rock++;
    if (userChoice === "P") stats.choices.paper++;
    if (userChoice === "S") stats.choices.scissors++;

    // 🧠 Computer randomly selects
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    const choiceMap = { R: "Rock 🪨", P: "Paper 📄", S: "Scissors ✂️" };
    window.alert(`💻 The computer chose ${choiceMap[computerChoice]}`);

    // 🥊 Determine result
    if (userChoice === computerChoice) {
      stats.ties++;
      window.alert("🤝 It's a tie!");
    } else if (
      (userChoice === "R" && computerChoice === "S") ||
      (userChoice === "P" && computerChoice === "R") ||
      (userChoice === "S" && computerChoice === "P")
    ) {
      stats.wins++;
      window.alert("🏆 You win!");
    } else {
      stats.losses++;
      window.alert("💀 You lose!");
    }

    keepPlaying = window.confirm("Play again?");
  }

  // 📊 Final stats summary
  window.alert(`📈 Game Summary:
Wins: ${stats.wins}
Losses: ${stats.losses}
Ties: ${stats.ties}

Your choices:
🪨 Rock: ${stats.choices.rock}
📄 Paper: ${stats.choices.paper}
✂️ Scissors: ${stats.choices.scissors}

Thanks for playing Rock, Paper, Scissors!`);
};

// ▶️ Start the game
playGame();
