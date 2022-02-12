import get from 'lodash/get';
import { ipToHash, swrFetch } from '../../helpers/api';
import { LOCAL_API_SERVER, STEAM_WORKSHOP_URL } from '../../constants';
import styles from './ServerCard.module.scss';

const ServerCard = ({ address, forceName }) => {
    const hash = ipToHash(address);
    const { data, error } = swrFetch(`${LOCAL_API_SERVER}${hash}`);

    if (error) return <div className="server-card">Failed to load server from CFTools API</div>;

    if (data) {
        const {
            host: { address, game_port },
            map,
            mods,
            name,
            status: { players, queue, slots }
        } = get(data, hash);
        console.log(data[hash]);
        return <>
            <div className={styles['server-card']}>
                <div className="columns is-mobile">
                    <div className="column">
                        <div className={styles['server-card-title']}>
                            <h2>{forceName || name}</h2>
                        </div>
                        <div className={styles['server-card-address']}>
                            {address}:{game_port}
                        </div>
                    </div>
                    <div className="column is-3">
                        <div className={styles['server-card-players']}>
                            <i class="fa-solid fa-user"></i> {players}/{slots} {queue?.active && <sup>(+{queue.size})</sup>}
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles['server-card-mods']}>
                    <h3 className={`${styles['server-card-mods-title']} title is-5`}>Mods</h3>
                    <ul className={styles['server-card-mods-container']}>{mods.map(m => <li key={m.file_id} className={styles['server-card-mods__item']}><a href={`${STEAM_WORKSHOP_URL}${m.file_id}`} className={styles['server-card-mods__link']}>{m.name}</a></li>)}</ul>
                </div>
            </div>
        </>;
    }

    return <div className="server-card">Loading...</div>;
}

export default ServerCard;