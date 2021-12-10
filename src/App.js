import PersonList from "./components/PersonList";
import PersonAdd from "./components/PersonAdd";
import PersonRemove from "./components/PersoneRemove";
function App() {
  return (
    <div>
      <PersonAdd/>
      <PersonList />
      <PersonRemove/>
    </div>
  )
}

export default App;
