import './App.css';
import { MiddleSectionData } from './components/MiddleSectionDetails/MiddleSectionData';
import { RightSideData } from './components/RightSideData/RightSideData';
import Sidebarmanu from './components/SideBarManu/Sidebarmanu';

function App() {
  return (
    <div className="App">
      <div className='innerSection'>
      <div>
        <Sidebarmanu/>
      </div>
      <div>
        <MiddleSectionData/>
      </div>
      <div>
        <RightSideData/>
      </div>
    </div>
    </div>
  );
}

export default App;
