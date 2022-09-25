import axios from 'axios';

export const getFeaturedGame = async () => {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = '/api/v1';
  const URL = 'player/landingpage';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
};

export const getDetailVoucher = async () => null;
