import { useSelector } from 'react-redux';
import {
    Route as ReactDOMRoute,
    Redirect,
} from 'react-router-dom';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
    const session = useSelector(state => state.session);

    return (
        <ReactDOMRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === !!session[0]?.name ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: isPrivate ? '/' : 'tasklist',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}

export default Route;