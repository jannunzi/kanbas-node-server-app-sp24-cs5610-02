import model from "./model.js";

export const findAllUsers = () => model.find();
export const findUserById = (id) => model.findById(id);
export const createUser = (user) => model.create(user);
export const updateUser = (id, user) =>
  model.updateOne({ _id: id }, { $set: user });

export const deleteUser = (id) => model.deleteOne({ _id: id });
export const findUserByEmail = (email) =>
  model.findOne({
    email: email,
  });

export const findUserByCredentials = (username, password) =>
  model.findOne({
    username: username,
    password: password,
  });
