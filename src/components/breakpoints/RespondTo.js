import { css } from 'styled-components';
import { BreakPoints } from './BreakPoints';

export const RespondTo = Object.keys(BreakPoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${BreakPoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});
