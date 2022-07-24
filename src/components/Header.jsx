import {useState} from 'react';
import logo_curriculum from '../img/Logo-Curriculum.png';
import lang_esp from '../img/lang_esp.png';
import lang_cat from '../img/lang_cat.png';
import lang_usa from '../img/lang_usa.png';
import lang_jap from '../img/lang_jap.png';
import arrow_down from '../img/arrow_down.png';
import arrow_down_idle from '../img/arrow_down_idle.png';
import '../css/App.css';
import OutsideAlerter from "./OutsideAlerter";

function App() {
  try {var lang = localStorage.getItem('lang')}
  catch{
    lang = navigator.languages[1];
  }
  const [mainLang, setMainLang] = useState(false);
  var [showLang, setShowLang] = useState(false);
  const mainLangHover = event => {setMainLang(current => !current);};
  var mainLangClick = event => {setShowLang(current => !current);};
  const Traducciones = [
    {
      "name": "es",
      "es": "Español",
      "cat": "Espanyol",
      "en": "Spanish",
      "jp": "スペイン語"
    },
    {
      "name": "cat",
      "es": "Catalán",
      "cat": "Català",
      "en": "Catalan",
      "jp": "カタロニア語"
    },
    {
      "name": "en",
      "es": "Inglés",
      "cat": "Anglès",
      "en": "English",
      "jp": "英語"
    },
    {
      "name": "jp",
      "es": "Japonés",
      "cat": "Japonès",
      "en": "Japanese",
      "jp": "日本語"
    },
  ];
  const langBucle = [{"id": 1, "name": "specific_flag_1","src": lang_esp, "text": "es"}, {"id": 2, "name": "specific_flag_2", "src": lang_cat, "text": "cat"}, {"id": 3, "name": "specific_flag_3", "src": lang_usa, "text": "en"}, {"id": 4, "name": "specific_flag_4", "src": lang_jap, "text": "jp"}];
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-container'>
          <img src={logo_curriculum} className="logo-curriculum" alt="LogoCurriculum"/>
          <div id="select_lang" className={mainLang ? 'select-language-hover pointer' : 'select-language'}
            onClick={mainLangClick}
            onMouseEnter={mainLangHover}
            onMouseLeave={mainLangHover}>
            <img id='main_flag_language' className='flag-language' src={changeFlag()} alt="spanish_flag"/>
            <img id='main_arrow_language' className='arrow-down-language' src={mainLang ? arrow_down : arrow_down_idle} alt="arrow"/>
          </div>
          <OutsideAlerter setisActive={mainLangClick = event => {setShowLang(current => !current);}} isActive={showLang}>
          {showLang ? 
          <div 
          id="flags_container"
          className='flags-container'>
            {langBucle.map(language => 
            <div id={language.name}
            key={language.name}
            className="pointer padding-each-language"
            onClick={chooseLanguage}
            onMouseEnter={specificFlagHover}
            onMouseLeave={specificFlagHoverOut}>
              <img id={true ? language.name + "_image" : ''} className='flag-language-inhover' src={language.src} alt="flag"/>
              <span id={true ? language.name + "_text" : ''}>  {langFilter(language.text)}</span>
            </div>)}
          </div> : null
          }
          </OutsideAlerter>
        </div>
      </header>
      <div className='App-body'>
        
      </div>
    </div>
  );

  function langFilter(translation) {
    try{
      const translationWords = Traducciones.filter(word => word.name === translation);
      switch(lang){
        case "es": return translationWords[0].es;
        case "cat": return translationWords[0].cat;
        case "jp": return translationWords[0].jp;
        default: return translationWords[0].en;
      }
    }
    catch{
      return "Translation error"
    }
  }

  function chooseLanguage(e){
    if(e.target.id.startsWith('specific_flag_1')){
      lang = 'es';
      document.getElementById('main_flag_language').attributes.src.value = lang_esp;
    }else if(e.target.id.startsWith('specific_flag_2')){
        lang = 'cat';
        document.getElementById('main_flag_language').attributes.src.value = lang_cat;
    }else if(e.target.id.startsWith('specific_flag_3')){
        lang = 'en';
        document.getElementById('main_flag_language').attributes.src.value = lang_usa;
    }else{lang = 'jp';document.getElementById('main_flag_language').attributes.src.value = lang_jap;}
    changeFlag();
    mainLangClick();
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
  
  function specificFlagHover(e){
    if(e.target.id.startsWith('specific_flag_1')){
        document.getElementById('specific_flag_1').classList.add('specific-flag');
    }else if(e.target.id.startsWith('specific_flag_2')){
        document.getElementById('specific_flag_2').classList.add('specific-flag');
    }else if(e.target.id.startsWith('specific_flag_3')){
        document.getElementById('specific_flag_3').classList.add('specific-flag');
    }else{document.getElementById('specific_flag_4').classList.add('specific-flag');}
  }

  function specificFlagHoverOut(e){
    if(e.target.id.startsWith('specific_flag_1')){
        document.getElementById('specific_flag_1').classList.remove('specific-flag');
    }else if(e.target.id.startsWith('specific_flag_2')){
        document.getElementById('specific_flag_2').classList.remove('specific-flag');
    }else if(e.target.id.startsWith('specific_flag_3')){
        document.getElementById('specific_flag_3').classList.remove('specific-flag');
    }else{ document.getElementById('specific_flag_4').classList.remove('specific-flag'); }
  }
  function changeFlag(){
    switch(lang){
      case "es": return lang_esp;
      case "cat": return lang_cat;
      case "jp": return lang_jap;
      default: return lang_usa
    }
  }
}



export default App;
