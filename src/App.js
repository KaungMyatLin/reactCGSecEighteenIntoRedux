import { Fragment } from 'react';
import {useSelector} from 'react-redux'
import Auth from './components/Auth';
import Header from './components/Header';
import Counter from './components/Counter_RtlKit_nextstepSplited';
import UserProfile from './components/UserProfile'

function App() {
  const isAthenState = useSelector(state => state.authSlceRdr.isAuthed)
  return (
    <Fragment>
      <Header />
      {!isAthenState && <Auth />}
      {isAthenState && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
