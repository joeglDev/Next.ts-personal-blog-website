const localhostPort = 5000;

export const postSignIn = async (username: string, password: string) => {
  try {
    const res = await fetch(`http://localhost:${localhostPort}/api/login`, {
      method: "POST",
      credentials: "include",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({ Username: username, Password: password }),
    });

    return res.status;
  } catch (e) {
    console.log("error", e);
    return 500;
  }
};

export const getLogout = async () => {
  try {
    const res = await fetch(`http://localhost:${localhostPort}/api/logout`, {
      method: "GET",
      credentials: "include",
    });

    return res.status;
  } catch (e) {
    console.log("error", e);
    return 500;
  }
};

export const postSignup = async (username: string, password: string) => {
  try {
    const res = await fetch(`http://localhost:${localhostPort}/api/signup`, {
      method: "POST",
      credentials: "include",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({ Username: username, Password: password }),
    });

    return res.status;
  } catch (e) {
    console.log("error", e);
    return 500;
  }
};
