import { Component } from 'react';
import sr from './ScrollReveal';

export class Revealer extends Component {
	componentDidMount() {
		sr.reveal('.animate-from-bottom', {
			duration: 1000,
			distance: '40px',
			easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
			origin: 'bottom',
			interval: 150
		});

		sr.reveal('.animate-from-left', {
			duration: 1000,
			distance: '40px',
			easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
			origin: 'left',
			interval: 150
		});

		sr.reveal('.animate-from-center', {
			duration: 1000,
			scale: 0.95,
			easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
			interval: 150
		});

		sr.reveal('.animate-ease-in', {
			duration: 1000,
			scale: 0.95,
			easing: 'ease-in',
			interval: 150
		});

		sr.reveal('.animate-ease-out', {
			duration: 1000,
			scale: 0.95,
			easing: 'ease-out',
			interval: 150
		});
	}
	render() {
		return null;
	}
}

export default Revealer;
