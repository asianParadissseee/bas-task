import validUrl from 'valid-url';

export const validateUrl = (req, res, next) => {
    const { url } = req.body;

    if (!url || !validUrl.isUri(url)) {
        return res.status(400).json({ error: 'Invalid url' });
    }

    next();
};
