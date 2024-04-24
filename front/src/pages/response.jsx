import axios from 'axios';

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:5173/chat/api/query', { query });
      setResponse(res.data.response);
      setQuery('');  // Clear query after sending
    } catch (error) {
      console.error('Error fetching data: ', error);
      setResponse('Error fetching response');
    }
  };

export default handleSubmit