import axios from "axios";

function App() {
  axios({
    method: "get",
    url: "https://69cee40f-f372-4734-a2ff-a043da89d0b2.mock.pstmn.io/location",

    responseType: "json",
  }).then(function (response) {
    console.log(response.data);
  });

  axios({
    method: "get",
    url: "https://69cee40f-f372-4734-a2ff-a043da89d0b2.mock.pstmn.io/activity",

    responseType: "json",
  }).then(function (response) {
    console.log(response.data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
