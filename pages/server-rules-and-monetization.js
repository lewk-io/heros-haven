import Head from 'next/head';
import Link from 'next/link';
import Wrapper from '../components/Page/Wrapper';
import { rules } from '../constants/rules';

const ServerRules = () => {
	const linesToSkip = 1;

	return <>
		<Wrapper>
			<Head>
				<title>Server Rules &amp; Monetization | Hero&apos;s Haven DayZ</title>
			</Head>
			<div className="columns">
				<div className="column">
					<h1 className="title is-2">Server Rules</h1>
					{rules.map((rule, i) => {
						if (i < linesToSkip) return;
						return <>
							<h2 className="title is-5">{rule.CategoryName}</h2>
							{rule.Rules.map((ruleItem, i) => <p key={i} dangerouslySetInnerHTML={{ __html: ruleItem.RuleText }}></p>)}
						</>
					})}
				</div>
				<div className="column is-4">
					<h1 className="title is-2">Monetization</h1>
                    <p>You are able to donate to us on <Link href="https://donate.hhdayz.uk">our website</Link> or via <Link href="https://www.patreon.com/hhdayz">Patreon</Link>.</p>
                    <p><i>Prices varry if you donate through Discord or Patreon. We would recommend you use our website because it will automatically set up your priority queue.</i></p>
                    <p>By donating, you are accepting the following:</p>
                    <ul className="list">
                        <li>the payment method used is either; yours or the owner has given you permission to use it.</li>
                        <li>all donations are final. Failure to follow our rules is breaking our terms of service and may result in a temporary or perminant ban.</li>
                    </ul>
				</div>
			</div>
		</Wrapper>
	</>
}

export default ServerRules;