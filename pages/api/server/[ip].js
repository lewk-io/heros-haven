import { CFTOOLS_SERVER } from '../../../constants';
import { fetchApi, isIpAddress, ipToHash } from '../../../helpers/api';

export default function handler(req, res) {
    if (!req.query.ip) res.status(200).json({ error: 'No IP provided'});
    const ip = isIpAddress(req.query.ip) ? ipToHash(req.query.ip) : req.query.ip;
    fetchApi(`${CFTOOLS_SERVER}${ip}`)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(200).json(err));
}