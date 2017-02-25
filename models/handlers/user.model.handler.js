
const add = (newUser, cb) => {
  // your code here
  cb(null, newUser);
};

const findAll = (offset, limit, cb) => {
  // your code here
  const response = {
    offset,
    limit,
  };
  cb(null, response);
};

const findById = (id, cb) => {
  // your code here
  cb(null, id);
};

const remove = (id, cb) => {
  // your code here
  cb(null, id);
};

const update = (id, user, cb) => {
  // your code here
  cb(null, user);
};

export default {
  add,
  findAll,
  findById,
  remove,
  update,
}