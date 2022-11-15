import './App.css';
import cables from './cables.json'
import Entry from "./Entry";

function App() {
  return (
      <div>
        {cables.map( item =>
            <Entry
              cableStart={item.cableStart}
              cableEnd={item.cableEnd}
              cableCount={item.cableCount}
            />
        )}
      </div>
  );
}

export default App;
