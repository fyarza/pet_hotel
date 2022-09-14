import { endpoints } from "utils/routes";

export const login = (payload) => {
  const formdata = new FormData();
  formdata.append("email", payload.email);
  formdata.append("password", payload.password);

  const body = {
    url: endpoints.LOGIN,
    method: "post",
    data: formdata,
  };
};
