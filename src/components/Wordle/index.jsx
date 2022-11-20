import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import styles from "./index.module.css";
import { FaBackspace } from "react-icons/fa";

// const wordsLib = ["YWAM", "JUCUM", "LOVE", "AMOR", "BRIDE", "GROOM"];
const wordsLib = [
  "ABUSE",
  "ADULT",
  "AGENT",
  "ANGER",
  "APPLE",
  "AWARD",
  "BASIS",
  "BEACH",
  "BIRTH",
  "BLOCK",
  "BLOOD",
  "BOARD",
  "BRAIN",
  "BREAD",
  "BREAK",
  "BROWN",
  "BUYER",
  "CAUSE",
  "CHAIN",
  "CHAIR",
  "CHEST",
  "CHIEF",
  "CHILD",
  "CHINA",
  "CLAIM",
  "CLASS",
  "CLOCK",
  "COACH",
  "COAST",
  "COURT",
  "COVER",
  "CREAM",
  "CRIME",
  "CROSS",
  "CROWD",
  "CROWN",
  "CYCLE",
  "DANCE",
  "DEATH",
  "DEPTH",
  "DOUBT",
  "DRAFT",
  "DRAMA",
  "DREAM",
  "DRESS",
  "DRINK",
  "DRIVE",
  "EARTH",
  "ENEMY",
  "ENTRY",
  "ERROR",
  "EVENT",
  "FAITH",
  "FAULT",
  "FIELD",
  "FIGHT",
  "FINAL",
  "FLOOR",
  "FOCUS",
  "FORCE",
  "FRAME",
  "FRANK",
  "FRONT",
  "FRUIT",
  "GLASS",
  "GRANT",
  "GRASS",
  "GREEN",
  "GROUP",
  "GUIDE",
  "HEART",
  "HENRY",
  "HORSE",
  "HOTEL",
  "HOUSE",
  "IMAGE",
  "INDEX",
  "INPUT",
  "ISSUE",
  "JAPAN",
  "JONES",
  "JUDGE",
  "KNIFE",
  "LAURA",
  "LAYER",
  "LEVEL",
  "LEWIS",
  "LIGHT",
  "LIMIT",
  "LUNCH",
  "MAJOR",
  "MARCH",
  "MATCH",
  "METAL",
  "MODEL",
  "MONEY",
  "MONTH",
  "MOTOR",
  "MOUTH",
  "MUSIC",
  "NIGHT",
  "NOISE",
  "NORTH",
  "NOVEL",
  "NURSE",
  "OFFER",
  "ORDER",
  "OTHER",
  "OWNER",
  "PANEL",
  "PAPER",
  "PARTY",
  "PEACE",
  "PETER",
  "PHASE",
  "PHONE",
  "PIECE",
  "PILOT",
  "PITCH",
  "PLACE",
  "PLANE",
  "PLANT",
  "PLATE",
  "POINT",
  "POUND",
  "POWER",
  "PRESS",
  "PRICE",
  "PRIDE",
  "PRIZE",
  "PROOF",
  "QUEEN",
  "RADIO",
  "RANGE",
  "RATIO",
  "REPLY",
  "RIGHT",
  "RIVER",
  "ROUND",
  "ROUTE",
  "RUGBY",
  "SCALE",
  "SCENE",
  "SCOPE",
  "SCORE",
  "SENSE",
  "SHAPE",
  "SHARE",
  "SHEEP",
  "SHEET",
  "SHIFT",
  "SHIRT",
  "SHOCK",
  "SIGHT",
  "SIMON",
  "SKILL",
  "SLEEP",
  "SMILE",
  "SMITH",
  "SMOKE",
  "SOUND",
  "SOUTH",
  "SPACE",
  "SPEED",
  "SPITE",
  "SPORT",
  "SQUAD",
  "STAFF",
  "STAGE",
  "START",
  "STATE",
  "STEAM",
  "STEEL",
  "STOCK",
  "STONE",
  "STORE",
  "STUDY",
  "STUFF",
  "STYLE",
  "SUGAR",
  "TABLE",
  "TASTE",
  "TERRY",
  "THEME",
  "THING",
  "TITLE",
  "TOTAL",
  "TOUCH",
  "TOWER",
  "TRACK",
  "TRADE",
  "TRAIN",
  "TREND",
  "TRIAL",
  "TRUST",
  "TRUTH",
  "UNCLE",
  "UNION",
  "UNITY",
  "VALUE",
  "VIDEO",
  "VISIT",
  "VOICE",
  "WASTE",
  "WATCH",
  "WATER",
  "WHILE",
  "WHITE",
  "WHOLE",
  "WOMAN",
  "WORLD",
  "YOUTH",
];

function Wordle() {
  const [selected, setSelected] = useState("");
  const [isOver, setIsOver] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [wordsUsed, setWordsUsed] = useState([]);
  const [charsInfo, setCharsInfo] = useState({
    notInTheWord: [],
    inTheCorrectPosition: [],
    inTheWordWrongPosition: [],
  });
  const [words] = useState(wordsLib);

  useEffect(() => {
    const selectedWord = words[Math.floor(Math.random() * words.length)];
    setSelected(selectedWord);
  }, []);

  const deleteLastCharCurrentWord = () => {
    setCurrentWord((prev) => prev.slice(0, -1));
  };

  const addCharToCurrentWord = (char) => {
    if (currentWord.length === selected.length) {
      return;
    }
    setCurrentWord((prev) => prev + char);
  };

  const submitCurrentWord = () => {
    if (currentWord.length < selected.length) {
      Swal.fire("Too Short");
      return;
    }

    //chars info
    for (let i = 0; i < currentWord.length; i++) {
      //if correct position
      if (currentWord[i] === selected[i]) {
        setCharsInfo((prev) => {
          return {
            ...prev,
            inTheCorrectPosition: [
              ...prev.inTheCorrectPosition,
              currentWord[i],
            ],
          };
        });

        continue;
      }

      //if in word
      if (selected.includes(currentWord[i])) {
        setCharsInfo((prev) => {
          return {
            ...prev,
            inTheWordWrongPosition: [
              ...prev.inTheWordWrongPosition,
              currentWord[i],
            ],
          };
        });

        continue;
      } else {
        //if not in world
        setCharsInfo((prev) => {
          return {
            ...prev,
            notInTheWord: [...prev.notInTheWord, currentWord[i]],
          };
        });

        continue;
      }
    }

    if (currentWord === selected) {
      setIsOver(true);
    }

    if (wordsUsed.length > 4) {
      setIsOver(true);
    }

    setWordsUsed((prev) => [...prev, currentWord]);
    setCurrentWord("");
  };

  const resetGame = () => {
    const selectedWord = words[Math.floor(Math.random() * words.length)];
    setSelected(selectedWord);
    setIsOver(false);
    setCurrentWord("");
    setWordsUsed([]);
    setCharsInfo({
      notInTheWord: [],
      inTheCorrectPosition: [],
      inTheWordWrongPosition: [],
    });
  };

  const share = () => {
    const data = wordsUsed.map(
      (word) => getSquaresResult(word, selected) + "\n"
    );

    let str = `
      Wordle Madeline & Junior\n 
      ${data.join("")}\n
      \n
      Play on https://madelineandjunior.info/activities
      `;

    navigator.share({ title: "My result", text: str });
  };

  return (
    <div className={styles.container}>
      <h2>Wordle</h2>
      <p style={{ wordBreak: "break-all", marginBottom: 15 }}>
        With words related to Madeline & Junior.
      </p>
      <div className={styles.content}>
        {isOver ? (
          <div>
            <p>
              The word was <b>{selected}</b>
            </p>
            {wordsUsed[wordsUsed.length - 1] === selected && <p>You won! 🏆</p>}
            <Result wordsUsed={wordsUsed} selected={selected} />
            <div style={{ marginTop: 10, marginBottom: 10 }}>
              <button style={{ marginRight: 7 }} onClick={resetGame}>
                Try another word
              </button>
              <button onClick={share}>Share Result</button>
            </div>
          </div>
        ) : (
          <Table
            currentWord={currentWord}
            wordLength={selected?.length}
            wordsUsed={wordsUsed}
            selectedWord={selected}
          />
        )}
      </div>
      <KeyBoard
        charsInfo={charsInfo}
        setWordsUsed={setWordsUsed}
        deleteLastCharCurrentWord={deleteLastCharCurrentWord}
        addCharToCurrentWord={addCharToCurrentWord}
        submitCurrentWord={submitCurrentWord}
      />
    </div>
  );
}

const Table = ({ wordLength, wordsUsed, selectedWord, currentWord }) => {
  const newrows = [];

  for (let i = 0; i < 6; i++) {
    const isCurrentWord = i === wordsUsed.length;

    newrows.push(
      <Row
        isCurrentWord={isCurrentWord}
        wordLength={wordLength}
        word={isCurrentWord ? currentWord : wordsUsed[i] ?? null}
        key={i}
        selectedWord={selectedWord}
      />
    );
  }

  return newrows;
};

const Row = ({ wordLength, word, selectedWord, isCurrentWord }) => {
  const squares = [];

  const getBackground = (word, position, selectedWord) => {
    if (!word) {
      return null;
    }

    if (word[position]?.toUpperCase() === selectedWord[position]) {
      return "#79b851";
    }

    if (selectedWord.includes(word[position]?.toUpperCase())) {
      return "#f3c237";
    }

    return "#a4aec4";
  };

  for (let i = 0; i < wordLength; i++) {
    squares.push(
      <div
        className={styles.square}
        key={i}
        style={{
          background: !isCurrentWord && getBackground(word, i, selectedWord),
          color: !isCurrentWord && "white",
        }}
      >
        <p>{word && word[i]}</p>
      </div>
    );
  }

  return <div className={styles.row}>{squares}</div>;
};

const KeyBoard = ({
  deleteLastCharCurrentWord,
  addCharToCurrentWord,
  submitCurrentWord,
  charsInfo,
}) => {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const getBackground = (key) => {
    if (charsInfo.inTheCorrectPosition.includes(key)) return "#79b851";
    if (charsInfo.inTheWordWrongPosition.includes(key)) return "#f3c237";
    if (charsInfo.notInTheWord.includes(key)) return "#a4aec4";
  };

  return (
    <div className={styles.keyBoard}>
      <div className={styles.keyBoardRow}>
        {row1.map((key, index) => {
          return (
            <div
              style={{ background: getBackground(key) }}
              key={index}
              className={styles.key}
              onClick={() => addCharToCurrentWord(key)}
            >
              {key}
            </div>
          );
        })}
      </div>
      <div className={styles.keyBoardRow}>
        {row2.map((key, index) => {
          return (
            <div
              style={{ background: getBackground(key) }}
              key={index}
              className={styles.key}
              onClick={() => addCharToCurrentWord(key)}
            >
              {key}
            </div>
          );
        })}
      </div>
      <div className={styles.keyBoardRow}>
        <div className={styles.key} onClick={deleteLastCharCurrentWord}>
          <FaBackspace />
        </div>
        {row3.map((key, index) => {
          return (
            <div
              style={{ background: getBackground(key) }}
              key={index}
              className={styles.key}
              onClick={() => addCharToCurrentWord(key)}
            >
              {key}
            </div>
          );
        })}
        <div className={styles.key} onClick={submitCurrentWord}>
          {"ENTER"}
        </div>
      </div>
    </div>
  );
};

const getSquaresResult = (word, selected) => {
  let str = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] === selected[i]) {
      str = str + "🟩";
      continue;
    }
    if (selected.includes(word[i])) {
      str = str + "🟨";
      continue;
    }
    if (!selected.includes(word[i])) {
      str = str + "⬜";
      continue;
    }
  }

  return str;
};

const Result = ({ wordsUsed, selected }) => {
  return (
    <div>
      {wordsUsed.map((word, index) => (
        <p key={index}>{getSquaresResult(word, selected)}</p>
      ))}
    </div>
  );
};

export default Wordle;
