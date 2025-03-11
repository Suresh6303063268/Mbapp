import React from 'react'
import { useState } from 'react'

import Syllabus from './syllabus'
import PQP from './PQP'
import Answer from './Answerkey'
import Results from './Result'
import Cut from './Cutoff'

const Verticaltab = () => {


    const [active, setActive] = useState();

    const handleclick = (name) => {
      setActive(name);
    }
    return (
      <div>


      <div>
          <nav>
              <ul style={{display:'flex', listStyle:'none', padding:'0',gap:40,marginTop:50,marginLeft:190}}>
                  <li onClick={()=> handleclick('Syllabus')} style={{backgroundColor:'#13B0B0', color:'white', padding:10,fontSize:18, fontWeight:600,letterSpacing:1,borderRadius:5,cursor:'pointer',boxShadow:'0px 0px 5px black'}}>Syllabus</li>
                  <li onClick={()=> handleclick('PQP')} style={{backgroundColor:'#13B0B0', color:'white', padding:10,fontSize:18, fontWeight:600,letterSpacing:1,borderRadius:5,cursor:'pointer',boxShadow:'0px 0px 5px black'}}>PQP</li>
                  <li onClick={()=> handleclick('Answer')} style={{backgroundColor:'#13B0B0', color:'white', padding:10,fontSize:18, fontWeight:600,letterSpacing:1,borderRadius:5,cursor:'pointer',boxShadow:'0px 0px 5px black'}}>Answer Key</li>
                  <li onClick={() => handleclick('Results')} style={{backgroundColor:'#13B0B0', color:'white', padding:10,fontSize:18, fontWeight:600,letterSpacing:1,borderRadius:5,cursor:'pointer',boxShadow:'0px 0px 5px black'}}>Results</li>
                  <li onClick={()=> handleclick('Cutoff')} style={{backgroundColor:'#13B0B0', color:'white', padding:10,fontSize:18, fontWeight:600,letterSpacing:1,borderRadius:5,cursor:'pointer',boxShadow:'0px 0px 5px black'}}>Cutoff</li>
              </ul>
          </nav>
      </div>



{active === 'Syllabus' && (<Syllabus />)}



{active === 'PQP' && (<PQP />)}



{active === 'Answer' && (<Answer />)}




{active === 'Results' && (<Results />)}


{active === 'Cutoff' && (<Cut />)}

      
      </div>
    )
}

export default Verticaltab
