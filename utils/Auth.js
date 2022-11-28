//Redirects the user if not Logged in
const withAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;