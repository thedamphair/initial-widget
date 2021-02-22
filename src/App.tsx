import React from 'react';

const App: React.FC<{email: string}> = (props) => {
  return (<div>
    <h3>{props.email}</h3>
    Un widget tio!
  </div>);
}

export default App;