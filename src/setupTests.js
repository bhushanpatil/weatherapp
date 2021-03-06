/**
 * @jest-environment node
 */
//import 'jest-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true });

global.useTestConsole = true;
global.console.debug = () => {};
