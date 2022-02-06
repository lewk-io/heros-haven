import get from 'lodash/get';
import { ipToHash, swrFetch } from '../../helpers/api';
import { LOCAL_API_SERVER, STEAM_WORKSHOP_URL } from '../../constants';
import styles from './ServerCard.module.scss';

const ServerCard = ({ address }) => {
    const hash = ipToHash(address);
    const { data, error } = swrFetch(`${LOCAL_API_SERVER}${hash}`);

    if (error) return <div className="server-card">Failed to load server from CFTools API</div>;

    if (data) {
        const {
            host: { address, game_port },
            map,
            mods,
            name
        } = get(data, hash);
        console.log(data[hash]);
        return <>
            <div className={styles.serverCard}>
                <div className="server-card-title">
                    {name}
                </div>
                <div className="server-card-address">
                    {address}:{game_port}
                </div>
                <div className="server-card-title">
                    {map}
                </div>
                <div className={styles.serverCardMods}>
                    <ul>{mods.map(m => <li key={m.file_id}><a href={`${STEAM_WORKSHOP_URL}${m.file_id}`}>{m.name}</a></li>)}</ul>
                </div>
                <div className="server-card-title">
                    
                </div>
                <div className="server-card-title">
                    
                </div>
                <div className="server-card-title">
                    
                </div>
                <div className="server-card-title">
                    
                </div>
                <div className="server-card-title">
                    
                </div>
            </div>
        </>;
    }

    return <div className="server-card">Loading...</div>;
}

export default ServerCard;