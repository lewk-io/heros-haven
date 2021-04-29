import React, { Component } from 'react';
import { RULES } from '../../constants/monetization';
import { formatDiscoHook } from '../../helpers/index';

class Rules extends Component {
    constructor(props) {
        super(props);
        this.monetization = React.createRef();
        this.serverRules = React.createRef();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm col-sm-8">
                        <div className="server-rules" ref={this.serverRules}>
                            <h2>Server rules:<a id="server-rules"></a></h2>
                            <div dangerouslySetInnerHTML={{ __html: formatDiscoHook(RULES.content) }} />
                            { RULES.embeds.map((e, i) => <div key={i}>
                                    <h3>{ e.title }</h3>
                                    <div dangerouslySetInnerHTML={{ __html: formatDiscoHook(e.description) }} />
                            </div>) }
                        </div>
                    </div>
                    <div className="col-sm col-sm-4">
                        <div className="toast monetization" ref={this.monetization}>
                            <div className="toast-header">
                                <h2 className="monetization__header">Monetization:<a id="monetization"></a></h2>
                            </div>
                            <div className="toast-body monetization__body">
                                <p>You are able to donate to us <a href="https://discord.gg/PhMeX4zt47" target="_blank">in Discord</a> or via <a href="https://www.patreon.com/hhdayz" target="_blank">Patreon</a>.</p>
                                By donating, you are accepting the following:
                                <ul>
                                    <li>the payment method used is either; yours or the owner has given you permission to use it.</li>
                                    <li>all donations are final. Failure to follow our rules (<a href="#server-rules">below</a>) is breaking our terms of service and may result in a perminant or temporary ban.</li>
                                </ul>
                                <p><strong>Monetization is currently limited to priority queue only.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rules;