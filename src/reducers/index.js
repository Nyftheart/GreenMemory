// permet de fusioner tout les reducer de toutes nos actions redux
import {combineReducers} from 'redux';

import counter from './counter';
import harryPotter from './harryPotter';
import plantlist from './plantlist';

export default combineReducers({
  counter,
  harryPotter,
  plantlist,
});
