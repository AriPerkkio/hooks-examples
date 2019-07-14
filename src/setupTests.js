import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.mockComponent = name => {
    const MockedComponent = ({ children }) => {
        if (!children) {
            return null;
        }

        // Render prop
        if (typeof children === 'function') {
            return children();
        }

        return children;
    };

    MockedComponent.displayName = name;
    return MockedComponent;
};
