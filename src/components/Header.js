import classes from './Header.module.css';
import {useSelector, useDispatch} from 'react-redux'
// import {authActions} from '../store/index_createSlice_configureStore'
import {authActions} from '../store/authen-slice'

const Header = () => {
  const dispatch = useDispatch();
  const isAthenState = useSelector(state => state.authSlceRdr.isAuthed)
  const logoutH =()=>{
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAthenState && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutH}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};
export default Header;
