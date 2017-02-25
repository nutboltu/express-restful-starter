const res = (err, data, res) => {
  if (err) {
      // status code - Internal Server Error
    res.status(err.code).json(err.message);
  } else {
      // status code 200 - OK
    res.status(200).json(data);
  }
};

export default {
  res,
};