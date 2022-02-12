import Wrapper from '../components/Page/Wrapper';
import ServerCard from '../components/ServerCard/ServerCard';

const Home = () => {
	return <>
		<Wrapper>
			<div className="columns">
				<div className="column is-6">
					<ServerCard address="51.91.215.221:2302" forceName="Hero's Haven Chernarus [HH1]" />
				</div>
				<div className="column is-6">
					<ServerCard address="51.91.215.221:2602" forceName="Hero's Haven Chernarus Lite [HH3]" />
				</div>
			</div>
		</Wrapper>
	</>
}

export default Home;