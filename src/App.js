import React from 'react';

// Components Import
import Header from './components/Header';
import CompanionApp from './containers/CompanionApp';

import { Container, Col, Row} from 'react-bootstrap';

// function App() {
//   return (
//     <Container> 
//       <Row>
//         <Header/>
//         <CompanionApp />
//       </Row>
//     </Container>
//   );
// }

// export default App;


function App() {
  return (
    <div className="App"> 
       <Header/>
       <CompanionApp/>    
    </div>
    // <React.Fragment>
     
    // </React.Fragment>
  );
}

export default App;
