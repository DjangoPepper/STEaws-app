import './App.css'
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <h1>Hello sécurisé</h1>
    
  )
}

export default withAuthenticator(App);
// export default App

