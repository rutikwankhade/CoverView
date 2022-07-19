import { createApi } from 'unsplash-js';

const key= process.env.REACT_APP_API_ACCESS_KEY
const unsplash = createApi({
    accessKey: key
});

export default unsplash;