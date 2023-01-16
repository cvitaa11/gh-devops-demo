import "./App.css";
import isPalindrome from "@cvitaa11/is-palindrome";

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    var result = isPalindrome(document.getElementById("value").value);
    alert(`Is palindrome: ${result}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          id="value"
          type="text"
          placeholder="Insert string you want to verify"
        />
        <button id="submit-btn" onClick={handleClick}>
          Check
        </button>
      </header>
    </div>
  );
}

export default App;
