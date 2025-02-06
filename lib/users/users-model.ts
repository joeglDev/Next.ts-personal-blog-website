const localhostPort = 5000;

export const postSignIn = async (username: string, password: string) => {
  try {
    const res = await fetch(`http://localhost:${localhostPort}/api/login`, {
      method: "POST",
      credentials: "include",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({ Username: username, Password: password }),
    });

    console.log(res);

    return res.status;
  } catch (e) {
    console.log("error", e);
    return 500;
  }
};
