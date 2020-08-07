import config from '../config';

const URL_MOVIES = `${config.URL_BACKEND}/videos`;

function create(data) {
  return fetch(`${URL_MOVIES}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }
      throw new Error('Erro ao requisitar dados');
    });
}

export default {
  create,
};
