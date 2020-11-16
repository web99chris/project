import { FirebaseAgent, DefaultSource } from '17media-browser-spy';

const firebaseAgentConfig =
  process.env.NODE_ENV === 'prod'
    ? {
        // prod
        apiKey: 'AIzaSyDPBroYovkoDzmVjsxKnKuD0Qbh3--fpwg',
        authDomain: 'media17-firebase-event.firebaseapp.com',
        databaseURL: 'https://media17-firebase-event.firebaseio.com',
        projectId: 'media17-firebase-event',
        storageBucket: 'media17-firebase-event.appspot.com',
        messagingSenderId: '813798985844',
        appId: '1:813798985844:web:03904a3283f10d6e71c121',
        measurementId: 'G-7GZBC9C3BG',
      }
    : {
        // stage
        apiKey: 'AIzaSyDPBroYovkoDzmVjsxKnKuD0Qbh3--fpwg',
        authDomain: 'media17-firebase-event.firebaseapp.com',
        databaseURL: 'https://media17-firebase-event.firebaseio.com',
        projectId: 'media17-firebase-event',
        storageBucket: 'media17-firebase-event.appspot.com',
        messagingSenderId: '813798985844',
        appId: '1:813798985844:web:940292f1b75aa1ef71c121',
        measurementId: 'G-7QF2S7SZQP',
      };

let agent = null;
let source = null;
if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
  agent = new FirebaseAgent(firebaseAgentConfig);
  source = new DefaultSource();
  source.addAgent(agent);
}
export const trackingSource = source;
