import { Component } from 'react';
import Wrapper from '../components/Page/Wrapper';
import ServerCard from '../components/ServerCard/ServerCard';

const Home = () => {
	return <>
		<Wrapper>
			<div className="columns">
				<div className="column is-6">
					<ServerCard address="51.91.215.221:2302" />
				</div>
				<div className="column is-6">
					<ServerCard address="51.91.215.221:2602" />
				</div>
			</div>
		</Wrapper>
	</>
}

export default Home;