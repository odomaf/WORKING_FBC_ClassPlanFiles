// Middleware that protects routes from unauthenticated users
module.exports = function withAuth(req, res, next) {
  if (!req.session.logged_in) {
    return res.redirect("/login");
  }
  next();
};
