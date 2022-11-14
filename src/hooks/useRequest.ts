
import useFetch from 'use-http';

export const useRequest = () => {
  const { get, post, response, loading, error } = useFetch(process.env.BASE_URL)

  return { get, post, response, loading, error };
};
