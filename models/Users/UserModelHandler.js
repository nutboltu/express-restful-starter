import User from './UserModel';
/**
 * Mock Records - We created a mock records for testing login authentications
 */
const records = [
  new User({
    id: '1',
    username: 'farhad.yasir',
    email: 'farhad.yasir@demo.com',
    password: '123456',
    firstName: 'Farhad',
    lastName: 'Yasir',
  }),
  new User({
    id: '2',
    username: 'john.smith',
    email: 'john.smith@demo.com',
    password: '123456',
    firstName: 'John',
    lastName: 'Smith',
  })
]

const add = (newUser, cb) => {
  records.push(new User(newUser));
  cb(null, records[records.length - 1]);
};

const findAll = (offset, limit, cb) => {
  cb(null, records);
};

const findById = (id, cb) => {
  const user = records.find(user => user.getId() === id);
  cb(null, user);
};

const findByUsername = (username, cb) => {
  const user = records.find(user => user.getUsername() === username);
  cb(null, user);
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
  findByUsername,
  remove,
  update,
}
