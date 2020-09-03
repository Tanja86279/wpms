import {useState, useEffect} from 'react';

const apiUrl = 'http://media.mw.metropolia.fi/wbma/';

const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const response = await fetch(apiUrl + 'media');
      const json = await response.json();
      const media = await Promise.all(json.map(async (item) => {
        const resp2 = await fetch(apiUrl + 'media/' + item.file_id);
        const json2 = await resp2.json();
        return json2;
      }));
      setMediaArray(media);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);

  return mediaArray;
};

export {useLoadMedia};
