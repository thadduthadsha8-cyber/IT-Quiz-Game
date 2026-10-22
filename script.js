

const questions = [
  // NUMBER 1 — Questions 1, 2
  {
    q: "கீழே உள்ளவற்றில் Programming Language எது?",
    o: ["HDMI", "USB", "Python", "Wi-Fi"],
    a: 2,
    e: "Python என்பது programming language."
  },
  {
    q: "Data-வின் கூடுதல் நகலைப் பாதுகாப்பாக வைத்திருப்பது என்ன?",
    o: ["Backup", "Browsing", "Formatting", "Scanning"],
    a: 0,
    e: "Backup என்பது data-வின் கூடுதல் நகலைப் பாதுகாப்பாக வைத்திருக்கும் முறை."
  },

  // NUMBER 2 — Questions 3, 4
  {
    q: "Network-ல் ஒரு சாதனத்தை அடையாளம் காண உதவுவது எது?",
    o: ["File Name", "Wallpaper", "Folder Name", "IP Address"],
    a: 3,
    e: "IP Address என்பது network-ல் ஒரு சாதனத்தின் network interface-ஐ அடையாளம் காண உதவுகிறது."
  },
  {
    q: "Database-ல் ஒரு Record-ஐத் தனித்துவமாக அடையாளம் காண்பது எது?",
    o: ["Foreign Folder", "Primary Key", "File Extension", "Screen Name"],
    a: 1,
    e: "Primary Key ஒவ்வொரு record-ஐயும் தனித்துவமாக அடையாளம் காண்கிறது."
  },

  // NUMBER 3 — Questions 5, 6
  {
    q: "கணினியில் தீங்கு விளைவிக்கும் Software எது?",
    o: ["Browser", "Compiler", "Malware", "Spreadsheet"],
    a: 2,
    e: "Malware என்பது கணினி அல்லது data-வுக்குத் தீங்கு விளைவிக்கக்கூடிய software."
  },
  {
    q: "Binary எண் 1101-ன் Decimal மதிப்பு என்ன?",
    o: ["11", "12", "14", "13"],
    a: 3,
    e: "Binary 1101 = 8 + 4 + 1 = Decimal 13."
  },

  // NUMBER 4 — Questions 7, 8
  {
    q: "ஒரு சிறிய பகுதியிலுள்ள சாதனங்களை இணைக்கும் Network எது?",
    o: ["WAN", "LAN", "MAN", "PAN மட்டும் அல்ல"],
    a: 1,
    e: "LAN என்பது Local Area Network; பள்ளி அல்லது அலுவலகம் போன்ற குறுகிய பகுதியில் சாதனங்களை இணைக்கிறது."
  },
  {
    q: "AI என்பதன் விரிவாக்கம் என்ன?",
    o: ["Automatic Internet", "Advanced Input", "Artificial Intelligence", "Applied Interface"],
    a: 2,
    e: "AI என்பதன் விரிவாக்கம் Artificial Intelligence."
  },

  // NUMBER 5 — Questions 9, 10
  {
    q: "AI தவறான தகவலை நம்பிக்கையுடன் வழங்குவதை என்ன என்போம்?",
    o: ["Overclocking", "Formatting", "Multitasking", "Hallucination"],
    a: 3,
    e: "AI Hallucination என்பது AI தவறான அல்லது ஆதாரமற்ற தகவலை உருவாக்கி வழங்கும் நிலை."
  },
  {
    q: "போலியான AI வீடியோ அல்லது குரலை உருவாக்கும் தொழில்நுட்பம் எது?",
    o: ["Firewall", "Database", "Deepfake", "Compiler"],
    a: 2,
    e: "Deepfake தொழில்நுட்பம் AI மூலம் போலியான அல்லது மாற்றியமைக்கப்பட்ட முகம், வீடியோ அல்லது குரலை உருவாக்கப் பயன்படலாம்."
  },

  // NUMBER 6 — Questions 11, 12
  {
    q: "AI மூலம் பூனையையும் நாயையும் படத்தில் அடையாளம் காண்பது எது?",
    o: ["File Compression", "Disk Formatting", "Word Processing", "Image Recognition"],
    a: 3,
    e: "Image Recognition படத்தில் உள்ள பொருட்கள் அல்லது உயிரினங்களை அடையாளம் காண உதவுகிறது."
  },
  {
    q: "AI மூலம் மொழியை மற்றொரு மொழிக்கு மாற்றுவது எது?",
    o: ["File Compression", "Machine Translation", "Disk Formatting", "Data Backup"],
    a: 1,
    e: "Machine Translation ஒரு மொழியில் உள்ள உரையை மற்றொரு மொழிக்கு மொழிபெயர்க்கிறது."
  },

  // NUMBER 7 — Questions 13, 14
  {
    q: "AI மருத்துவர்களுக்கு எவ்வாறு உதவலாம்?",
    o: ["எல்லா நோய்களையும் குணப்படுத்த", "மருத்துவரை முழுமையாக மாற்ற", "Medical Images-ஐ ஆய்வு செய்ய", "எல்லா மருந்துகளையும் உறுதியாகத் தேர்வு செய்ய"],
    a: 2,
    e: "AI மருத்துவப் படங்களை ஆய்வு செய்து மருத்துவர்களின் மதிப்பீட்டுக்கு உதவலாம்; இது மருத்துவரை முழுமையாக மாற்றாது."
  },
  {
    q: "கணினி அணைக்கப்பட்டாலும் Data-வைச் சேமிப்பது எது?",
    o: ["RAM", "SSD", "Cache", "Register"],
    a: 1,
    e: "SSD என்பது power off ஆனாலும் data-வை வைத்திருக்கும் non-volatile storage."
  },

  // NUMBER 8 — Questions 15, 16
  {
    q: "கீழே உள்ளவற்றில் Operating System எது?",
    o: ["Microsoft Word", "Google Chrome", "Windows", "Photoshop"],
    a: 2,
    e: "Windows என்பது கணினியின் hardware மற்றும் software வளங்களை நிர்வகிக்கும் Operating System."
  },
  {
    q: "Programming Code-ஐ Machine Code-ஆக மாற்ற உதவுவது எது?",
    o: ["Compiler", "Monitor", "Router", "Scanner"],
    a: 0,
    e: "Compiler source code-ஐ machine code அல்லது வேறு target code-ஆக மொழிபெயர்க்க உதவுகிறது."
  },

  // NUMBER 9 — Questions 17, 18
  {
    q: "போலியான இணையதளம் மூலம் Password திருட முயல்வது எது?",
    o: ["Backup", "Formatting", "Debugging", "Phishing"],
    a: 3,
    e: "Phishing என்பது போலியான செய்தி அல்லது இணையதளம் மூலம் password போன்ற தகவல்களைத் திருட முயலும் மோசடி."
  },
  {
    q: "இணையதளத்தின் முகவரியை என்ன என்போம்?",
    o: ["CPU", "URL", "RAM", "USB"],
    a: 1,
    e: "URL என்பது Uniform Resource Locator; இணைய வளத்தின் முகவரியைக் குறிக்கிறது."
  },

  // NUMBER 10 — Questions 19, 20
  {
    q: "கணினியில் Temporary Memory எது?",
    o: ["RAM", "SSD", "DVD", "Pen Drive"],
    a: 0,
    e: "RAM என்பது தற்காலிக volatile memory; power off ஆனதும் அதிலுள்ள data இழக்கப்படும்."
  },
  {
    q: "AI-க்கு நாம் கொடுக்கும் Instruction என்னவென்று அழைக்கப்படுகிறது?",
    o: ["Prompt", "Pixel", "Folder", "Router"],
    a: 0,
    e: "Prompt என்பது AI-க்கு நாம் கொடுக்கும் கேள்வி, கட்டளை அல்லது instruction."
  },

  // NUMBER 11 — Questions 21, 22
  {
    q: "AI-யால் மனித உணர்ச்சிகளை உண்மையாக அனுபவிக்க முடியுமா?",
    o: [
      "எல்லா AI-களாலும் முடியும்",
      "எப்போதும் முடியும்",
      "மனிதர்களைப் போலவே அனுபவிக்கும்",
      "AI உணர்ச்சிகளைப் போல வெளிப்படுத்தலாம்; உண்மையாக அனுபவிக்கிறது என்று உறுதிப்படுத்த முடியாது"
    ],
    a: 3,
    e: "AI உணர்ச்சிகளைப் போல பதிலளிக்கலாம்; ஆனால் மனிதர்களைப் போல உண்மையான உணர்வுகளை அனுபவிக்கிறது என்று உறுதிப்படுத்த முடியாது."
  },
  {
    q: "AI ஒரு புதிய படம் உருவாக்க எதைப் பயன்படுத்தலாம்?",
    o: ["Generative AI", "Predictive AI", "Conversational AI", "Rule-Based AI"],
    a: 0,
    e: "Generative AI புதிய படங்கள், உரைகள் மற்றும் பிற content-ஐ உருவாக்க உதவும்."
  },

  // NUMBER 12 — Questions 23, 24
  {
    q: "எதிர்காலத்தில் AI-ஐப் பொறுப்புடன் பயன்படுத்துவதில் முக்கியமானது எது?",
    o: [
      "வேகம் மட்டும்",
      "அதிகமான Data சேகரிப்பது மட்டும்",
      "AI சொல்வதையெல்லாம் நம்புவது",
      "Privacy, Safety, Fairness மற்றும் மனித மேற்பார்வை"
    ],
    a: 3,
    e: "பொறுப்பான AI பயன்பாட்டில் privacy, safety, fairness மற்றும் human oversight முக்கியம்."
  },
  {
    q: "AI மூலம் ஒரு மொழியில் பேசும் நபரின் பேச்சை Text-ஆக மாற்றுவது எது?",
    o: ["Speech Recognition", "Disk Formatting", "File Compression", "Screen Recording மட்டும்"],
    a: 0,
    e: "Speech Recognition பேச்சை அடையாளம் கண்டு text-ஆக மாற்ற உதவுகிறது."
  },

  // NUMBER 13 — Questions 25, 26
  {
    q: "கணினியில் பல சாதனங்களை ஒரே Network-ல் இணைக்கப் பயன்படுவது எது?",
    o: ["Compiler", "Switch", "Scanner", "Projector"],
    a: 1,
    e: "Network Switch ஒரு LAN-ல் பல சாதனங்களை இணைத்து data-வை சரியான சாதனத்துக்கு அனுப்புகிறது."
  },
  {
    q: "1111 என்ற Binary எண்ணின் Decimal மதிப்பு என்ன?",
    o: ["12", "13", "14", "15"],
    a: 3,
    e: "Binary 1111 = 8 + 4 + 2 + 1 = Decimal 15."
  },

  // NUMBER 14 — Questions 27, 28
  {
    q: "ஒரு Algorithm-ன் Flowchart-ல் Decision-ஐக் குறிக்கும் வடிவம் எது?",
    o: ["Rectangle", "Circle", "Diamond", "Oval"],
    a: 2,
    e: "Flowchart-ல் Diamond வடிவம் decision அல்லது condition-ஐக் குறிக்கிறது."
  },
  {
    q: "இணையத்தில் Email அனுப்பப் பயன்படும் Protocol எது?",
    o: ["FTP", "SMTP", "HTTP", "DNS"],
    a: 1,
    e: "SMTP என்பது email அனுப்பப் பயன்படும் protocol."
  },

  // NUMBER 15 — Questions 29, 30
  {
    q: "ஒரு Network-ல் Data-வைச் சிறிய பகுதிகளாகப் பிரித்து அனுப்புவது என்ன?",
    o: ["Packet Switching", "Disk Formatting", "File Printing", "Data Deletion"],
    a: 0,
    e: "Packet switching-ல் data packets-ஆகப் பிரிக்கப்பட்டு network வழியாக அனுப்பப்படுகிறது."
  },
  {
    q: "HTML-ல் Hyperlink உருவாக்கப் பயன்படும் Tag எது?",
    o: ["<p>", "<img>", "<a>", "<table>"],
    a: 2,
    e: "HTML-ல் <a> tag hyperlink உருவாக்கப் பயன்படுகிறது."
  },

  // NUMBER 16 — Questions 31, 32
  {
    q: "ஒரு கணினியில் Unauthorized Access-ஐத் தடுக்க உதவுவது எது?",
    o: ["Spreadsheet", "Firewall", "Compiler", "Text Editor"],
    a: 1,
    e: "Firewall network traffic-ஐ விதிகளின் அடிப்படையில் கட்டுப்படுத்தி அனுமதியற்ற அணுகலைத் தடுக்க உதவுகிறது."
  },
  {
    q: "கீழே உள்ளவற்றில் ஒரு Database Management System (DBMS) எது?",
    o: ["MySQL", "Photoshop", "PowerPoint", "VLC Player"],
    a: 0,
    e: "MySQL என்பது relational database management system."
  },

  // NUMBER 17 — Questions 33, 34
  {
    q: "கீழே உள்ளவற்றில் Cybersecurity-க்கு உதவும் Authentication முறை எது?",
    o: ["Copy-Paste", "File Compression", "Screen Resolution", "Multi-Factor Authentication (MFA)"],
    a: 3,
    e: "MFA ஒன்றுக்கு மேற்பட்ட verification முறைகளைப் பயன்படுத்தி account பாதுகாப்பை அதிகரிக்கிறது."
  },
  {
    q: "AI மூலம் எதிர்கால வானிலையைக் கணிக்க உதவுவது எது?",
    o: ["Conversational AI", "Image Generation AI", "Facial Recognition AI", "Predictive AI"],
    a: 3,
    e: "Predictive AI தரவிலுள்ள patterns-ஐப் பயன்படுத்தி எதிர்கால நிலைகளை மதிப்பிட உதவுகிறது."
  },

  // NUMBER 18 — Questions 35, 36
  {
    q: "AI மூலம் Spam Messages-ஐ அடையாளம் காண்பது எந்தப் பணி?",
    o: ["Image Generation", "Voice Cloning", "Language Translation", "Text Classification"],
    a: 3,
    e: "Text Classification ஒரு message-ஐ spam அல்லது non-spam போன்ற வகைகளில் பிரிக்க உதவுகிறது."
  },
  {
    q: "AI உருவாக்கும் போலியான வீடியோ அல்லது முக மாற்றத் தொழில்நுட்பம் எது?",
    o: ["Machine Translation", "Deepfake Technology", "Recommendation System", "Predictive Analytics"],
    a: 1,
    e: "Deepfake Technology மூலம் முகம் அல்லது குரலை மாற்றியமைத்த போலியான media உருவாக்கப்படலாம்."
  },

  // NUMBER 19 — Questions 37, 38
  {
    q: "AI-யில் LLM என்பதன் விரிவாக்கம் என்ன?",
    o: ["Local Link Machine", "Logical Learning Method", "Large Language Model", "Light Logic Module"],
    a: 2,
    e: "LLM என்பதன் விரிவாக்கம் Large Language Model."
  },
  {
    q: "AI மூலம் குரலை எழுத்தாக மாற்றும் தொழில்நுட்பம் எது?",
    o: ["Image Recognition", "Text Generation", "Object Detection", "Speech Recognition"],
    a: 3,
    e: "Speech Recognition பேசப்பட்ட சொற்களை அடையாளம் கண்டு text-ஆக மாற்றுகிறது."
  },

  // NUMBER 20 — Questions 39, 40
  {
    q: "ஒரு Database-ல் தேவையற்ற Duplicate Data-வைக் குறைக்க உதவும் செயல்முறை எது?",
    o: ["Normalization", "Animation", "Compilation", "Encryption"],
    a: 0,
    e: "Database Normalization duplicate data-வைக் குறைத்து data-வை ஒழுங்காக அமைக்க உதவுகிறது."
  },
  {
    q: "IPv4 Address எத்தனை Bits கொண்டது?",
    o: ["16 Bits", "64 Bits", "32 Bits", "128 Bits"],
    a: 2,
    e: "IPv4 address 32 bits கொண்டது."
  }
];


const TOTAL_NUMBERS = 20;
const TOTAL_QUESTIONS = 40;
const QUESTION_SECONDS = 20;
const RETURN_SECONDS = 10;

const $ = id => document.getElementById(id);


/* Neon Gaming Sound Effects */

let soundEnabled = true;
let audioContext = null;

function playTone(frequency = 600, duration = 0.1, type = "sine") {
  if (!soundEnabled) return;

  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    audioContext ||= new AudioContextClass();

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(
      frequency,
      audioContext.currentTime
    );

    gain.gain.setValueAtTime(
      0.045,
      audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch (error) {
    console.warn("Sound is unavailable:", error);
  }
}

function playCorrectSound() {
  playTone(660, 0.12);
  setTimeout(() => playTone(880, 0.18), 120);
}

function playWrongSound() {
  playTone(240, 0.2, "triangle");
}

function playClickSound() {
  playTone(520, 0.06);
}


const selectionScreen = $("selectionScreen");
const questionScreen = $("questionScreen");
const answerScreen = $("answerScreen");
const summaryScreen = $("summaryScreen");

let completed = new Set();
let correctAnswers = 0;
let wrongAnswers = 0;
let scores = { A: 0, B: 0 };
let currentIndex = null;
let selectedOption = null;
let currentTeam = "A";
let questionTimeLeft = QUESTION_SECONDS;
let returnTimeLeft = RETURN_SECONDS;
let questionInterval = null;
let returnInterval = null;

function showScreen(screen) {
  [selectionScreen, questionScreen, answerScreen, summaryScreen]
    .forEach(item => item.classList.add("hidden"));

  screen.classList.remove("hidden");
}

function playTone(frequency = 600, duration = 0.08) {
  if (!soundEnabled) return;

  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    audioContext ||= new AudioContextClass();

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.frequency.value = frequency;
    gain.gain.value = 0.035;

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + duration
    );
    oscillator.stop(audioContext.currentTime + duration);
  } catch (error) {
    // The game continues even if sound is unavailable.
  }
}

function stopQuestionTimer() {
  clearInterval(questionInterval);
  questionInterval = null;
}

function stopReturnTimer() {
  clearInterval(returnInterval);
  returnInterval = null;
}

function completedForNumber(number) {
  const firstIndex = (number - 1) * 2;
  let count = 0;

  if (completed.has(firstIndex)) count++;
  if (completed.has(firstIndex + 1)) count++;

  return count;
}

function renderNumbers() {
  const grid = $("numberGrid");
  grid.innerHTML = "";

  for (let number = 1; number <= TOTAL_NUMBERS; number++) {
    const count = completedForNumber(number);
    const button = document.createElement("button");

    button.className = "number-card";
    if (count === 1) button.classList.add("partial");
    if (count === 2) button.classList.add("completed");

    button.disabled = count === 2;
    button.setAttribute(
      "aria-label",
      `Number ${number}, ${count} of 2 questions completed`
    );

    const label = count === 2
      ? "✓ Completed"
      : count === 1
        ? "1 question left"
        : "2 questions left";

    button.innerHTML = `
      <span class="number">${String(number).padStart(2, "0")}</span>
      <span class="number-label">${label}</span>
      <span class="mini-progress">
        <i class="${count >= 1 ? "done" : ""}"></i>
        <i class="${count >= 2 ? "done" : ""}"></i>
      </span>
    `;

    button.addEventListener("click", () => openNumber(number));
    grid.appendChild(button);
  }

  updateDashboard();
}



function updateDashboard() {
  const done = completed.size;

  // Existing score cards: update only if present.
  if ($("scoreA")) $("scoreA").textContent = scores.A;
  if ($("scoreB")) $("scoreB").textContent = scores.B;
  if ($("completedCount")) {
    $("completedCount").textContent = `${done}/${TOTAL_QUESTIONS}`;
  }
  if ($("remainingCount")) {
    $("remainingCount").textContent = TOTAL_QUESTIONS - done;
  }

  // New quiz statistics.
  if ($("totalQuestions")) {
    $("totalQuestions").textContent = TOTAL_QUESTIONS;
  }
  if ($("correctCount")) {
    $("correctCount").textContent = correctAnswers;
  }
  if ($("wrongCount")) {
    $("wrongCount").textContent = wrongAnswers;
  }
  if ($("remainingQuestions")) {
    $("remainingQuestions").textContent = TOTAL_QUESTIONS - done;
  }

  if ($("statsProgressFill")) {
    $("statsProgressFill").style.width =
      `${(done / TOTAL_QUESTIONS) * 100}%`;
  }

  if ($("statsProgressText")) {
    $("statsProgressText").textContent =
      `${done} of ${TOTAL_QUESTIONS} questions answered`;
  }

  if ($("progressBar")) {
    $("progressBar").style.width =
      `${(done / TOTAL_QUESTIONS) * 100}%`;
  }

  if ($("selectionStatus")) {
    let fullyCompleted = 0;

    for (let number = 1; number <= TOTAL_NUMBERS; number++) {
      if (completedForNumber(number) === 2) {
        fullyCompleted++;
      }
    }

    $("selectionStatus").textContent =
      `${TOTAL_NUMBERS - fullyCompleted} numbers remaining`;
  }
}

function openNumber(number) {
  stopQuestionTimer();
  stopReturnTimer();

  const firstIndex = (number - 1) * 2;
  const availableIndex = [firstIndex, firstIndex + 1]
    .find(index => !completed.has(index));

  if (availableIndex === undefined) return;

  currentIndex = availableIndex;
  selectedOption = null;
  currentTeam = $("activeTeam")?.value || "A";

  const question = questions[currentIndex];

  $("questionBadge").textContent =
    `NUMBER ${String(number).padStart(2, "0")} · QUESTION ${availableIndex - firstIndex + 1}/2`;

  $("questionText").textContent = question.q;
  $("questionHint").textContent =
    `Team ${currentTeam}: discuss your answer before revealing it.`;

  $("selectionMessage").textContent =
    "Choose an answer, then click Next to reveal the correct answer.";

  $("nextBtn").textContent = "Next — Reveal Answer →";

  const optionsGrid = $("optionsGrid");
  optionsGrid.innerHTML = "";

  question.o.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = option;

    button.append(letter, text);

    button.addEventListener("click", () => {
      selectedOption = index;

      optionsGrid.querySelectorAll(".option-btn")
        .forEach(item => item.classList.remove("selected"));

      button.classList.add("selected");
      $("selectionMessage").textContent =
        `Selected: ${String.fromCharCode(65 + index)}. Click Next to reveal the answer.`;

      playTone(500);
    });

    optionsGrid.appendChild(button);
  });

  questionTimeLeft = QUESTION_SECONDS;
  $("questionTimer").textContent = `${questionTimeLeft}s`;
  $("questionTimer").classList.remove("urgent");

  showScreen(questionScreen);
  playClickSound();
  playTone(700);
  startQuestionTimer();
}

function startQuestionTimer() {
  stopQuestionTimer();

  questionInterval = setInterval(() => {
    questionTimeLeft--;
    $("questionTimer").textContent = `${questionTimeLeft}s`;

    if (questionTimeLeft <= 5) {
      $("questionTimer").classList.add("urgent");
    }

    if (questionTimeLeft <= 0) {
      stopQuestionTimer();
      $("selectionMessage").textContent =
        "Time is up! Discuss your answer, then click Next to reveal it.";
      playTone(300, 0.15);
    }
  }, 1000);
}

function revealAnswer() {
  if (currentIndex === null || completed.has(currentIndex)) return;

  stopQuestionTimer();

  const question = questions[currentIndex];
  const isCorrect = selectedOption === question.a;
  
const answerPanel = $("answerScreen");

answerPanel.classList.remove(
  "correct-result",
  "wrong-result"
);

answerPanel.classList.add(
  isCorrect ? "correct-result" : "wrong-result"
);

if (isCorrect) {
  playCorrectSound();
} else {
  playWrongSound();
}

    
     if (isCorrect) {
       correctAnswers++;
     } else {
       wrongAnswers++;
    }

  // Every question can be scored only once.
  completed.add(currentIndex);

  if (isCorrect) {
    scores[currentTeam] += 10;
  }

  const options = $("optionsGrid").querySelectorAll(".option-btn");

  options.forEach((button, index) => {
    button.disabled = true;

    if (index === question.a) {
      button.classList.add("correct");
    } else if (index === selectedOption && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  
$("answerIcon").textContent = isCorrect ? "✓" : "!";

$("answerTitle").textContent = isCorrect
  ? "Correct Answer!"
  : "Incorrect Answer!";

$("answerTitle").classList.toggle(
  "correct-answer-title", isCorrect
);
$("answerTitle").classList.toggle(
  "wrong-answer-title", !isCorrect
);

$("answerIcon").classList.toggle(
  "correct-answer-icon", isCorrect
);
$("answerIcon").classList.toggle(
  "wrong-answer-icon", !isCorrect
);

$("correctAnswer").classList.add("correct-answer-box");
$("correctAnswer").classList.remove("wrong-answer-box");



  $("correctAnswer").textContent =
    `${String.fromCharCode(65 + question.a)}. ${question.o[question.a]}`;

  $("answerExplanation").textContent = question.e;

  renderNumbers();
  showScreen(answerScreen);

  returnTimeLeft = RETURN_SECONDS;
  $("countdown").textContent = returnTimeLeft;

  playTone(isCorrect ? 850 : 400, 0.12);
  startReturnTimer();
}

function startReturnTimer() {
  stopReturnTimer();

  returnInterval = setInterval(() => {
    returnTimeLeft--;
    $("countdown").textContent = returnTimeLeft;

    if (returnTimeLeft <= 0) {
      stopReturnTimer();
      returnToNumbers();
    }
  }, 1000);
}

function returnToNumbers() {
  stopQuestionTimer();
  stopReturnTimer();
  currentIndex = null;

  if (completed.size === TOTAL_QUESTIONS) {
    showSummary();
    return;
  }

  renderNumbers();
  showScreen(selectionScreen);
}

function showSummary() {
  stopQuestionTimer();
  stopReturnTimer();

  $("finalA").textContent = scores.A;
  $("finalB").textContent = scores.B;
  $("summaryText").textContent =
    `You completed all ${TOTAL_QUESTIONS} unique IT questions.`;

  $("winnerText").textContent = scores.A === scores.B
    ? "It's a draw! Both teams did great."
    : scores.A > scores.B
      ? "🏆 Team A wins!"
      : "🏆 Team B wins!";

  showScreen(summaryScreen);
  playTone(900, 0.2);
}

function goBack() {
  if (!questionScreen.classList.contains("hidden")) {
    stopQuestionTimer();
    currentIndex = null;
    renderNumbers();
    showScreen(selectionScreen);
    return;
  }

  if (!answerScreen.classList.contains("hidden")) {
    stopReturnTimer();
    returnToNumbers();
  }
}

function resetGame() {
  const confirmed = window.confirm(
    "Reset the game? All question progress and team scores will be cleared."
  );

  if (!confirmed) return;

  stopQuestionTimer();
  stopReturnTimer();

  completed = new Set();
  scores = { A: 0, B: 0 }; 

  correctAnswers = 0;
  wrongAnswers = 0;

  currentIndex = null;
  selectedOption = null;
  
  if ($("activeTeam")) {
    $("activeTeam").value = "A";
 }

  renderNumbers();
  showScreen(selectionScreen);
}

$("nextBtn").addEventListener("click", revealAnswer);
$("backBtn").addEventListener("click", goBack);
$("returnNowBtn").addEventListener("click", returnToNumbers);
$("resetBtn").addEventListener("click", resetGame);
$("playAgainBtn").addEventListener("click", resetGame);

$("fullscreenBtn").addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    alert("Full screen is not available in this browser.");
  }
});

$("soundBtn").addEventListener("click", () => {
  soundEnabled = !soundEnabled;

  $("soundBtn").textContent =
    soundEnabled ? "🔊 Sound On" : "🔇 Sound Off";

  if (soundEnabled) {
    playClickSound();
  }
});

document.addEventListener("keydown", event => {
  if (event.key.toLowerCase() === "f") {
    $("fullscreenBtn").click();
  }

  if (event.key === "Escape") {
    goBack();
  }

  if (
    event.key === "Enter" &&
    !questionScreen.classList.contains("hidden")
  ) {
    revealAnswer();
  }
});

// Start the game.
renderNumbers();
showScreen(selectionScreen);
