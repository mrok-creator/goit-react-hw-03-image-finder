import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '27144751-892a725032099e3eb90bcbf85',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 10,
  },
});
//pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// https://pixabay.com/api/?key=27144751-892a725032099e3eb90bcbf85&image_type=photo&orientation=horizontal&per_page=12&q=cat&page=1

export const query = async (q, page) => {
  const { data } = await instance.get('/?', {
    params: {
      q,
      page,
    },
  });
  return data;
};
