import React, { useState , useEffect } from 'react';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';
import './App.css';




export default function App() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState('');
  


    const handleChange = (e) => {
      setErr("")
      setData(e.target.value);
    };

    const handleClearFel = ()=> {
      setErr('')
      setData(null)
    }

  

  return (
    <div className=''>
       
       <div className='controller'>
            {/* <button onClick={handleFormateData} className='btn btn-format-json'>Format JSON</button> */}
            <button onClick={handleClearFel} className='btn btn-clear-data'>Clear Data</button>
            {err && <p className="err-sms">{err} </p>}
       </div>
  
    <div className="container">
     
     <div>
     <textarea value={data ? data : ""} placeholder='Past Or Type Your JSON Data ' className={err ? 'input-json-err' : 'input-json'} onChange={handleChange}></textarea>;
     </div>
      <div className='output-json'>
        
        { data ? (
          <JSONPretty
            themeClassName='pretty'
            id="json-pretty"
            mainStyle="padding:1em"
            valueStyle="font-size:1em"
            onJSONPrettyError={(e) => {
              
              if (e) {
                setErr('Something went wrong SyntaxError Error ! Just allaw JSON Data');
              } else {
                setErr('');
              }
            }}
            theme={JSONPrettyMon}
            data={data}
          ></JSONPretty>
        ) : (
          <i className='data-is-empty'>Data is empty </i>
        )}
      </div>
    </div>
    </div>
  );
}

