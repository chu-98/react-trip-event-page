import axios from "axios";

function App() {
  axios({
    method: "get",
    url: "https://c184e4c2-f4cd-452f-a31f-5a72f2d5076c.mock.pstmn.io/trip",
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
