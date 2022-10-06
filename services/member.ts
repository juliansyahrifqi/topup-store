import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getMemberOverview = async () => {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
};

export async function getMemberTransactions(valParams: string) {
  let params = '';

  if (valParams === 'all') {
    params = '';
  } else {
    params = `?status=${valParams}`;
  }

  const url = `${ROOT_API}/${API_VERSION}/players/history/${params}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getTransactionDetail(id: string, token: string) {
  const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
}

export async function updateProfile(data: FormData, id: string) {
  const url = `${ROOT_API}/${API_VERSION}/players/profile/${id}`;

  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
}
