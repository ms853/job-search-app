import { combinedReducers } from redux; 

export default combinedReducers({
    auth: () => { return {} } //auth reducer will return empty object by default.
});