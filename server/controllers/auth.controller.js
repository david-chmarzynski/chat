// IMPORT USER QUERIES
const { findUserByUsername, setAuth, setOnline, setSocketId } = require('../queries/user.queries');

exports.signin = (socket) => {
  socket.on('signin', async ({signinUsername, signinPassword}, callback) => {
    try {
      const user = await findUserByUsername(signinUsername);
      if(user) {
        const match = await user.comparePasswords(signinPassword, user.password);
        if(match) {
          let res = {
            status: 200,
            message: "Connexion granted",
            username: user.username
          };
          await setOnline(user._id);
          await setAuth(user._id);
          await setSocketId(signinUsername, socket.conn.id);
          callback(res);
        } else {
          let res = {
            status: 403,
            message: "Wrong password or username"
          };
          callback(res);
        }
      } else {
        let res = {
          status: 403,
          message: "User not found. Please, signup before"
        };
        callback(res);
      }
    } catch (error) {
      throw error;
    }
  });
}