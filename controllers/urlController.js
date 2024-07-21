import {generateCode} from "../utils/generateCode.js";

export const shortenUrl = async (req, res, client) => {
    const { url}= req.body
    const shortcode = generateCode();
    await client.set(shortcode, url, 'EX', 60 * 60 * 24); // URL будет храниться 24 часа
    res.json({
        shortcode,
        redirect: `${req.protocol}://${req.get('host')}/${shortcode}`
    })
}
export const redirectUrl = async (req, res, client) => {
    const { shortcode } = req.params;
    const url = await client.get(shortcode);
 
    if (url) {
        return res.redirect(302, url);
    } else {
        return res.status(404).json({ error: 'Shortcode not found' });
    }
};