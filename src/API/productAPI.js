import instance from "./instance";

export const getAll = () => {
  const url = `/product`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/product/${id}`;
  return instance.get(url);
};

export const add = (users) => {
  const url = `/product`;
  return instance.post(url, users);
};

export const remove = (id) => {
  const url = `/product/${id}`;
  return instance.delete(url);
};

export const update = (users) => {
  const url = `/product/${users.id}`;
  return instance.put(url, users);
};