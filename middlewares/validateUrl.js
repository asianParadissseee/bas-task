import validUrl from 'valid-url';

export const validateUrl = (req, res, next) => {
    const { url } = req.body;

    if (!validUrl.isUri(url)) {
        return res.status(400).json({ error: 'Invalid URL' });
    }

    next();
};
