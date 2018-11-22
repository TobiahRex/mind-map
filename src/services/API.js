import { create } from 'apisauce';

// --------------------------------------------------------
let baseURL;
if (process.env.NODE_ENV === 'production') {
  baseURL = `${process.env.DEPLOY_URL}`;
} else {
  baseURL = process.env.BASE_URL;
}
console.info('baseURL: ', baseURL);

// --------------------------------------------------------
const createAPI = () => {
  const api = create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    }
  });

  // --------------------------------------------------------
  const getOriginCodes = () => api.get('/origin-codes');

  const getDestinationCodes = (origin) => api.get(`/destination-codes?origin=${origin}`);

  const getMajorCodes = (origin, destination) => api.get(`/major-codes?origin=${origin}&destination=${destination}`);

  const getCourses = (origin, destination, major) => api.get(`/get-courses?origin=${origin}&destination=${destination}&major=${major}`);

  // const createThing = thing => api.post('api/things', { name: thing.name });
  //
  // const removeThing = id => api.delete(`api/things/${id}`);
  //
  // const editThing = thing =>
  //   api.put(`api/things/${thing.id}`, { name: thing.name });

  // --------------------------------------------------------
  return {
    getOriginCodes,
    getDestinationCodes,
    getCourses,
    getMajorCodes,
    // removeThing,
    // editThing
  };
};

// --------------------------------------------------------
export default { createAPI };
