import React, { Component } from 'react';
import { SERVERS } from '../../constants/servers';

class Servers extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Hero's Haven DayZ Servers</h1>
                    </div>
                </div>
                <div className="row">
                    { SERVERS.map((s, i) => <div className="col-4" key={i}>
                        <div className="card server">
                            <div className="card-header server__tag">
                                { s.id }
                            </div>
                            <div className="card-body">
                                <h3 className="server__header">{ s.name }</h3>
                                <iframe src={`${s.bm}?foreground=%23212529&linkColor=%23212529&lines=%23333333&background=%23ffffff&chart=players%3A7D&chartColor=%230eafe2&showPlayers=`} frameBorder="0"></iframe>
                            </div>
                        </div>
                    </div> ) }
                </div>
            </div>
        )
    }
}

export default Servers;