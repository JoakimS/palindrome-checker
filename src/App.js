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
       
          <label>Type your word to check it here</label>
          <input value={word} onChange={(e) => setWord(e.target.value)} />
        </div>
      </form>
      <div>Is Palindrome:{isPalindrome ? "Yes" : "No"}</div>
    </div>
  );
}