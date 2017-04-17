import types from './types';

import { getRandomItem } from '../utils';
import { darkColors, lightColors } from '../constants/colors';
import quotes from '../constants/quotes';

export const toggleColors = () => ({
	type: types.TOGGLE_COLORS,
	payload: {
		darkColor: getRandomItem(darkColors),
		lightColor: getRandomItem(lightColors),
	}
});

export const toggleQuote = () => ({
	type: types.TOGGLE_QUOTE,
	payload: {
		quote: getRandomItem(quotes)
	}
});

export const toggleInvert = () => ({
	type: types.TOGGLE_INVERT
});
