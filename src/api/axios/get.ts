import axiosApiInstance from ".";

type Get = {
  baseURL?: string;
  endpoint: string;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  isAuth?: boolean;
};

/**
 * @function Get
 * @example
 * import Get from 'internals/api/get'
 *
 * await Get({
 *  title: 'Example API',
 *  endpoint: '/internal/v1/profile',
 * });
 */
const Get = async ({ baseURL, endpoint, params, headers = {} }: Get) => {
  const { status, data } =
    (await axiosApiInstance.get(endpoint, {
      headers: headers || {},
      params,
      baseURL,
    })) || {};

  return {
    code: status,
    message: data?.message || "",
    ...data,
  };
};

export default Get;
