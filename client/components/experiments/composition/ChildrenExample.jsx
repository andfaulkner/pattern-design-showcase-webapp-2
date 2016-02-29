export default class ChildrenExample extends React.Component {
	render() {
		return (
			<TrickBox>
				<SnakeInABox />
			</TrickBox>
		);
	}
};

class TrickBox extends React.Component {
	render() {
		return (
			<div>
				<Deck value='yepyep' />
				{/*To render children, use {this.props.children} */}
				{this.props.children}
			</div>
		);
	}
	componentDidMount() {
		console.log('this props children');
		console.log(this.props.children);
		console.log(React.Children.count(this.props.children));
	}
};

class SnakeInABox extends React.Component {
	render() {
		return (
			<div>Yo</div>
		);
	}
};

class Deck extends React.Component {
	render() {
		const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
		const faceValues = ['3', 'Q', '6'];
		const cards = buildDeck(suits, faceValues);
		let deck = _.map(cards, (card, index) => (
			<Card suit={card.suit} faceValue={card.faceValue} key={index} />
		));
		return (
			<div>
				{deck}
			</div>
		);
	}
};

class Card extends React.Component {
	render() {
		return (
			<div style={{border: '1px solid green', width: '100px', textAlign: 'center'}}>
				{this.props.suit} :: {this.props.faceValue}
			</div>
		);
	}
};


function buildDeck(suits, faceValues) {
	// compute a full deck from suits & face values
	return _.reduce(suits, (cards, suit) => 
		(cards.concat(_.reduce(faceValues, (cardCollection, faceValue) =>
			(cardCollection.concat([{ 'suit': suit, 'faceValue': faceValue }])), 
		[]))), 
	[]);
	return deck;
}