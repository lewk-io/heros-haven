import React, { Component } from 'react';
import { RULES } from '../../constants/monetization';
import { formatDiscoHook } from '../../helpers/index';

class Rules extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Monetization:<a id="monetization"></a></h2>
                        <p>You are able to donate to us <a href="https://discord.gg/PhMeX4zt47" target="_blank">in Discord</a> or via <a href="https://www.patreon.com/hhdayz" target="_blank">Patreon</a>.</p>
                        <p>By donating, you are accepting the following:
                            <ul>
                                <li>the payment method used is either; yours or you have been given permission to use it by the owner.</li>
                                <li>all donations are final. Failure to follow our rules (<a href="#server-rules">below</a>) is breaking our terms of service and may result in a perminant or temporary ban.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>Server rules:<a id="server-rules"></a></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" dangerouslySetInnerHTML={{ __html: formatDiscoHook(RULES.content) }} />
                </div>
                { RULES.embeds.map((e, i) => <div className="row" key={i}>
                    <div className="col-12">
                        <h3>{ e.title }</h3>
                    </div>
                    <div className="col-12" dangerouslySetInnerHTML={{ __html: formatDiscoHook(e.description) }} />
                </div>) }
            </div>
        )
    }
}

export default Rules;