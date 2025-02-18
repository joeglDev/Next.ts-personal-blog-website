import { getLogout, postSignIn } from "./users-model";
import { UserErrors } from "./user-errors";

interface UserControllerResponse {
  isError: boolean;
  errorMessage: UserErrors | null;
  status: number;
}

export const fetchSignin = async (
  username: string,
  password: string,
): Promise<UserControllerResponse> => {
  const status = await postSignIn(username, password);

  if (status === 200) {
    return { isError: false, errorMessage: null, status: 200 };
  } else if (status === 401) {
    return {
      isError: true,
      errorMessage: UserErrors.wrongPassword,
      status: 401,
    };
  } else if (status === 404) {
    return { isError: true, errorMessage: UserErrors.unknownUser, status: 404 };
  }

  return {
    isError: true,
    errorMessage: UserErrors.unhandledException,
    status: 500,
  };
};

export const fetchLogout = async () => {
  const status = await getLogout();

  if (status === 200) {
    return { isError: false, errorMessage: null, status: 200 };
  }

  return {
    isError: true,
    errorMessage: UserErrors.unhandledException,
    status: status,
  };
};
