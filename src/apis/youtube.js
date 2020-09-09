import axios from 'axios';

const KEY = 'AIzaSyAybXTkzXbi3mPlb1DvwI8YCDlW0uI9sYY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
