import { json } from '@sveltejs/kit';
import cards from '$lib/data/cards/en/base1.json'

export function GET() {
	const filteredCards = cards.filter(card => card.name === 'Alakazam');

	return json({cards: filteredCards});
}
