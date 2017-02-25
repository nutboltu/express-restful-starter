import { compare, hash }  from 'bcrypt';

const saltRounds = 8;  // rounds=8 : ~40 hashes/sec

const compareIt = (password, hashedPassword, callback) => {
  compare(password, hashedPassword, callback);
};

const hashIt = (text, callback) => {
  hash(text, saltRounds, callback);
};

export default {
  compareIt,
  hashIt
};
