// permet de fusioner tout les reducer de toutes nos actions redux
import {combineReducers} from 'redux';

import counter from './counter';
import harryPotter from './harryPotter';
import plants from './plants';

export default combineReducers({
  counter,
  harryPotter,
  plants,
});
