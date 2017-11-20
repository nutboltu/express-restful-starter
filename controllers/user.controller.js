import responseHelper  from 'utilities/response.helper';
import userModelHandler from 'models/handlers/user.model.handler';

const add = (req, res) => {
  userModelHandler.add(req.body, (err, user) => {
    responseHelper.res(err, user, res);
  });
};

const findAll = (req, res) => {
  const offset = req.params.offset || 0;
  const limit = req.params.limit || 10;
  userModelHandler.findAll(offset, limit, (err, users) => {
    responseHelper.res(err, users, res);
  });
};

const findById = (req, res) => {
  userModelHandler.findById(req.params.id, (err, user) => {
    responseHelper.res(err, user, res);
  });
};

const remove = (req, res) => {
  userModelHandler.remove(req.params.id, (err, removed) => {
    responseHelper.res(err, removed, res);
  });
};

const update = (req, res) => {
  userModelHandler.update(req.params.id, req.body, (err, user) => {
    responseHelper.res(err, user, res);
  });
};

export default {
  add,
  findAll,
  findById,
  remove,
  update,
};
