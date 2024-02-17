import React, { useMemo, useState } from "react";

export default function App() {
  const [word, setWord] = useState("");

  const isPalindrome = useMemo(() => {
    return word === word.split("").reverse().join("");
  }, [word]);

  return (
    <div className="App">
      <form>
        <div>
          <label>Hello world ddddd ssss word to check</label>
          <input value={word} onChange={(e) => setWord(e.target.value)} />
        </div>
      </form>
      <div>Is Palindrome:{isPalindrome ? "Yes" : "No"}</div>
    </div>
  );
}