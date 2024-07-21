import {Router} from 'express';
import {validateUrl} from "../middlewares/validateUrl.js";
import {shortenUrl, redirectUrl} from "../controllers/urlController.js"


export const urlRoutes = (client) => {
    const router = Router()
    router.post('/', validateUrl,(req, res) => shortenUrl(req, res, client))
    router.get('/:shortcode', (req, res) => redirectUrl(req, res, client))
    return router
}
