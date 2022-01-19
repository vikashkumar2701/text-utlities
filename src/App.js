import { useState } from "react";
import "./styles.css";

export default function App() {
  const [formid, setformid] = useState(0);
  const [myreversedtext, setmyreversedtext] = useState();
  const [vowels, setvowels] = useState();
  const [consonants, setconsonants] = useState();
  const [palindrome, setpalindrome] = useState();
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
      if (s[l] != s[h]) {
        return "Hey, This is not Palindrome";
      }

      l = l + 1;
      h = h - 1;
    }
    return "Wow! This is Palindrome";
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
      <div class="hello"></div>
      <div class="wrapper">
        <span class="msg">Reversed Text will appear here!</span>
        <div class="outputdwindow">
          <input
            class="outputfield"
            value={myreversedtext}
            placeholder="Reversed Text will appear here"
          />
          <button>Copy</button>
        </div>
      </div>
      <div class="wrapper">
        <span class="msg">Number of Vowels will appear here!</span>
        <div class="outputdwindow">
          <input
            class="outputfield"
            value={vowels}
            placeholder="Number of vowels will appear here!"
          />
          <button>Copy</button>
        </div>
      </div>
      <div class="wrapper">
        <span class="msg">Number of consonants will appear here!</span>
        <div class="outputdwindow">
          <input
            class="outputfield"
            value={consonants}
            placeholder="Number of consonants will appear here!"
          />
          <button>Copy</button>
        </div>
      </div>
      <div class="wrapper">
        <span class="msg">Check if this string is palindrome?</span>
        <div class="outputdwindow">
          <input
            class="outputfield"
            value={palindrome}
            placeholder="Check palindromic status here"
          />
          <button>Copy</button>
        </div>
      </div>
    </div>
  );
}
