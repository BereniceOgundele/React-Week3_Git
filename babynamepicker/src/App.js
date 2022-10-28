import logo from "./logo.svg";
import "./App.css";
import babyNames from "./babyNames.js";



function babyNames() {
  const data={babyNamesData}
  return (
    <div className="container">
      {data.babyNamesData.map(ele, index) => {
        return (
          <div className="name" key={index}>
            {ele.name}
          </div>
        )
      }}
      <logo />
      <babyNames />
    </div>
);
}


export default babyNames;










// function App({ names }) {
//   return <pre>{JSON.stringify(names, null, 2)}</pre>;
// }



// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>