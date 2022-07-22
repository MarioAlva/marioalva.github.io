import {useState} from 'react';
import logo_curriculum from '../img/Logo-Curriculum.png';
import lang_esp from '../img/lang_esp.png';
import lang_cat from '../img/lang_cat.png';
import lang_usa from '../img/lang_usa.png';
import lang_jap from '../img/lang_jap.png';
import arrow_down from '../img/arrow_down.png';
import arrow_down_idle from '../img/arrow_down_idle.png';
import '../css/App.css';

function App() {
  const [html] = document.getElementsByTagName("html")
  const lang = html.getAttribute("lang");
  const [mainLang, setMainLang] = useState(false);
  const mainLangHover = event => {
    // 👇️ toggle isActive state on click
    setMainLang(current => !current);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-container'>
          <img src={logo_curriculum} className="logo-curriculum" alt="LogoCurriculum"/>
          <div id="select_lang" className={mainLang ? 'select-language-hover' : 'select-language'}
            onMouseEnter={mainLangHover}
            onMouseLeave={mainLangHover}>
            <img className='flag-language' src={changeFlag()} alt="spanish_flag"/>
            <img className='arrow-down-language' src={mainLang ? arrow_down : arrow_down_idle} alt="arrow"/>
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
  function changeFlag(){
    switch(lang){
      case "es": return lang_esp;
      break;
      case "cat": return lang_cat;
      break;
      case "jp": return lang_jap;
      break;
      default: return lang_usa
    }
  }
}



export default App;
