export const getUserInfo = (req, res) => {
    return res.status(200).json({ success: true, data: { email: req.user.email, role: req.user.role } });
};
