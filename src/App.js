import logo from './logo.svg';
import './App.css';

const round_lst = ['Top 64', 'Top 32', 'Sweet 16', 'Elite 8', 'Final 4', 'National Championship', 'Final 4', 'Elite 8', 'Sweet 16', 'Top 32', 'Top 64']

const Round = ({round}) => {

  return (
    <ul className='round'>
      <li>{round}</li>
    </ul>
  )
}

const RoundLst = () => {
  var round_lst_items = []
    for(var i = 0; i < round_lst.length; i++) {
      round_lst_items.push(<Round round={round_lst[i]}/>)
    }
  return round_lst_items;
}

const Top64 = () => {
  return (
    <ul className='round seed'>
      <li className='game-left game-top'>
      <span>Florida State University</span>
      </li>
    </ul>
  )
}

function App() {
  var round_cmp_lst = [];
  return (
    <div className="App">
      <header className="App-header">
        <a>Arbitrary March Madness</a>
      </header>

        <div className='tournament tournament-header'>
          <RoundLst/>
          <div className='tournament'>
            
          </div>
        </div>
    </div>
  );
}

export default App;
