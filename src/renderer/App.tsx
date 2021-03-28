import React, { useEffect } from 'react'

export interface Props {
  [key: string]: any 
}


const App = (props: Props) => {
  useEffect(() => {
    console.log(navigator.onLine);
  })
  return (
    <p>not lol :(</p>
  );
}

export default App;