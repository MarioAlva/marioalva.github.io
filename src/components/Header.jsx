import logo_curriculum from '../img/Logo-Curriculum.png';
import lang_esp from '../img/lang_esp.png';
import lang_cat from '../img/lang_cat.png';
import lang_usa from '../img/lang_usa.png';
import lang_jap from '../img/lang_jap.png';
import arrow_down from '../img/arrow_down.png';
import arrow_down_idle from '../img/arrow_down_idle.png';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-container'>
          <img src={logo_curriculum} className="logo-curriculum" alt="LogoCurriculum"/>
          <div className='select-language'>
            <img className='flag-language' src={lang_esp} alt="spanish_flag"/>
            <img className='arrow-down-language' src={arrow_down_idle} alt="arrow"/>
          </div>
          <div className='hide'>
            <img src={lang_esp} alt="spanish_flag"/>
            <img src={lang_cat} alt="catalan_flag"/>
            <img src={lang_usa} alt="usa_flag"/>
            <img src={lang_jap} alt="japanese_flag"/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
