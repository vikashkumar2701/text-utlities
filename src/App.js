import { useState } from "react";
import "./styles.css";

export default function App() {
  const [formid, setformid] = useState(0);
  const [myreversedtext, setmyreversedtext] = useState();
  const [vowels, setvowels] = useState();
  const [consonants, setconsonants] = useState();
  const [palindrome, setpalindrome] = useState();
  const [sortedasc, setsortedasc] = useState();
  const [sorteddesc, setsorteddesc] = useState();
  function setCounter() {
    var newform = formid + 1;
    setformid(newform);
    console.log(newform);
  }
  function isPalindrome(s) {
    var n = s.length;
    let l = 0;
    let h = n - 1;
    while (l < h) {
      if (s[l] !== s[h]) {
        return "Hey, This is not Palindrome";
      }

      l = l + 1;
      h = h - 1;
    }
    return "Wow! This is Palindrome";
  }

  function sort_asc_aplhabets(s) {
    const newtxt = s.split("");
    var l = newtxt.length;
    for (let i = 0; i < l; i++) {
      let temp1;
      for (let j = 0; j < l; j++) {
        if (newtxt[j] > newtxt[j + 1]) {
          temp1 = newtxt[j];
          newtxt[j] = newtxt[j + 1];
          newtxt[j + 1] = temp1;
        }
      }
    }

    return newtxt;
  }

  function sort_desc_aplhabets(s) {
    const mynewtext = s.split("");
    var ln = mynewtext.length;
    // console.log(mynewtext);
    for (let i = 0; i < ln; i++) {
      for (let j = 0; j < ln; j++) {
        if (mynewtext[j] < mynewtext[j + 1]) {
          let temp = mynewtext[j];
          mynewtext[j] = mynewtext[j + 1];
          mynewtext[j + 1] = temp;
        }
      }
    }
    // console.log(mynewtext);
    return mynewtext;
  }

  function handledataforage() {
    var gettext = event.target.value;
    var text = "";
    var vowelcounter = 0;
    var consonantscounter = 0;

    for (let i = gettext.length - 1; i >= 0; i--) {
      text += gettext[i];
      if (
        gettext[i] === "a" ||
        gettext[i] === "e" ||
        gettext[i] === "i" ||
        gettext[i] === "o" ||
        gettext[i] === "u" ||
        gettext[i] === "A" ||
        gettext[i] === "E" ||
        gettext[i] === "I" ||
        gettext[i] === "O" ||
        gettext[i] === "U"
      ) {
        vowelcounter++;
      }
    }
    setmyreversedtext(text);
    setvowels(vowelcounter);
    consonantscounter = gettext.length - vowelcounter;
    setconsonants(consonantscounter);
    setpalindrome(isPalindrome(event.target.value));
    setsortedasc(sort_asc_aplhabets(gettext));
    setsorteddesc(sort_desc_aplhabets(gettext));
    // console.log(event.target.value);
  }

  return (
    <div className="App">
      <h1>Reversifier and Character Counter</h1>

      <form name="f1">
        <div id="1">
          <input
            name="hello"
            onChange={handledataforage}
            placeholder="Enter any text"
          />
          <button type="button" onClick={setCounter}>
            Okay
          </button>
        </div>
      </form>
      <div className="hello"></div>
      <div className="wrapper">
        <span className="msg">Reversed Text will appear here!</span>
        <div className="outputdwindow">
          <input
            className="outputfield"
            value={myreversedtext}
            placeholder="Reversed Text will appear here"
          />
          <button>Copy</button>
        </div>
      </div>
      <div className="wrapper">
        <span className="msg">Number of Vowels will appear here!</span>
        <div className="outputdwindow">
          <input
            className="outputfield"
            value={vowels}
            placeholder="Number of vowels will appear here!"
          />
          <button>Copy</button>
        </div>
      </div>
      <div className="wrapper">
        <span className="msg">Number of consonants will appear here!</span>
        <div className="outputdwindow">
          <input
            className="outputfield"
            value={consonants}
            placeholder="Number of consonants will appear here!"
          />
          <button>Copy</button>
        </div>
      </div>
      <div className="wrapper">
        <span className="msg">Check if this string is palindrome?</span>
        <div className="outputdwindow">
          <input
            className="outputfield"
            value={palindrome}
            placeholder="Check palindromic status here"
          />
          <button>Copy</button>
        </div>
      </div>
      <div className="wrapper">
        <span className="msg">Sorted (Ascending) Characters</span>
        <div className="outputdwindow">
          <input
            className="outputfield"
            value={sortedasc}
            placeholder="String sorted in ascending order will appear here"
          />
          <button>Copy</button>
        </div>
      </div>
      <div className="wrapper">
        <span className="msg">Sorted (Descending) Characters</span>
        <div className="outputdwindow">
          <input
            className="outputfield"
            value={sorteddesc}
            placeholder="String sorted in descending order will appear here"
          />
          <button>Copy</button>
        </div>
      </div>
    </div>
  );
}
