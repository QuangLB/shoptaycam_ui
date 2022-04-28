import instance from "./instance";

export const getAll = () => {
  const url = `/users`;
  return instance.get(url);
};

export const get = (username) => {
  const url = `/users/${username}`;
  return instance.get(url);
};

export const add = (users) => {
  const url = `/users`;
  return instance.post(url, users);
};

export const remove = (username) => {
  const url = `/users/${username}`;
  return instance.delete(url);
};

export const update = (users) => {
  const url = `/users/${users.username}`;
  return instance.put(url, users);
};