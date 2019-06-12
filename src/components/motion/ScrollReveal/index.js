import { Component } from 'react';
import sr from './ScrollReveal';

export class Revealer extends Component {
  componentDidMount() {
    sr.reveal(
      '.hero-title, .hero-paragraph, .newsletter-header, .newsletter-form',
      {
        duration: 1000,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        interval: 150,
      }
    );
    sr.reveal('.content-list', {
      duration: 100,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.00)',
      origin: 'bottom',
      interval: 10,
    });

    sr.reveal(
      '.bubble-3, .bubble-4, .hero-browser-inner, .bubble-1, .bubble-2',
      {
        duration: 1000,
        scale: 0.95,
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        interval: 150,
      }
    );

    sr.reveal('.feature ', {
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 100,
      origin: 'bottom',
      viewFactor: 0.5,
    });

    // const config = {
    //     origin: 'right',
    //     duration: 1000,
    //     delay: 150,
    //     distance: '500px',
    //     scale: 1,
    //     easing: 'ease',
    //   }

    //   sr.reveal(this.refs.box1, config)
  }
  render() {
    return null;
  }
}

export default Revealer;
