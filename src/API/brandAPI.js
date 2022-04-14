import instance from "./instance";

export const getAll = () => {
  const url = `/brand`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/brand/${id}`;
  return instance.get(url);
};

export const add = (users) => {
  const url = `/brand`;
  return instance.post(url, users);
};

export const remove = (id) => {
  const url = `/brand/${id}`;
  return instance.delete(url);
};

export const update = (users) => {
  const url = `/brand/${users.id}`;
  return instance.put(url, users);
};