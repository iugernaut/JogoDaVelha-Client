// css
import './assets/css/style.css';
import './assets/css/gameStyle.css';
import './assets/css/reset.css';

// Modules
import { initEvents, initConnection } from './modules';

const connection = initConnection();

initEvents(connection);
