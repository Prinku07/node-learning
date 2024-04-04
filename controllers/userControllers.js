const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync('./starter/dev-data/data/tours-simple.json')
);

exports.getUsers = (req, res) => {
  console.log(users);
  res.status(200).json({
    status: 'success',
    data: {
      users: users,
    },
  });
};

exports.getUser = (req, res) => {
  const id = req.params.id * 1;
  const user = users.find((el) => el.id === id);
  if (!user) {
    return res.status(404).json({
      status: 'fail',
      massege: 'Invalid Id',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
};

exports.patchUser = (req, res) => {
  if (req.params.id * 1 > users.length) {
    return res.status(404).json({
      status: 'fail',
      massege: 'Invalid Id',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      user: '<updated user Here.....>',
    },
  });
};

exports.deleteUser = (req, res) => {
  if (req.params.id * 1 > users.length) {
    return res.status(404).json({
      status: 'fail',
      massege: 'Invalid Id',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);

  users.push(newUser);
  fs.writeFile(
    './starter/dev-data/data/users-simple.json',
    JSON.stringify(users),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          users: newUser,
        },
      });
    }
  );
};
