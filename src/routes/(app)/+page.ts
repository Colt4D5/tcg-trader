import type { PageLoad } from './$types';
import baseCards1 from '$lib/data/cards/en/base1.json';
import baseCards2 from '$lib/data/cards/en/base2.json';
import type { CardImages } from '$lib';

export const load = (async ({  }) => {
  const images: CardImages[] = [];
  for (let i = 0; i < 4; i++) {
    const rareCards = [...baseCards1, ...baseCards2].filter(card => card.rarity === 'Rare' && card.supertype !== 'Trainer');
    const randomImageIndex = Math.floor(Math.random() * rareCards.length);
    const imageObj: CardImages = {
      small: rareCards[randomImageIndex].images.small,
      large: rareCards[randomImageIndex].images.large
    }
    images.push(imageObj);
  }
  return { images }
}) satisfies PageLoad;
