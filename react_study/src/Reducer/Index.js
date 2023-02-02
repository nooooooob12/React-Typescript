import {combinetReducers} from 'redux';
import counter from './counter';

const Reducer = combinetReducers({
    counter
})

export default Reducer;