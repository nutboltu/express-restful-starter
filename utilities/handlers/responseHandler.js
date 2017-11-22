const res = (err, data, res) => {
  if (err) {
      // status code - Internal Server Error
    return res.status(err.code).json(err.message);
  }
    return res.status(200).json(data);
};

export default {
  res,
};
