import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";

/* Components */

/* Pages Components */
import CreateTask from './CreateTask/CreateTask';
// import ListTask from './ListTask/ListTask';

/* Styles */

import './Root-styles.css'

const Root = () => {

    // const [task, setTask] = useState(initialState)

    return (
        <Router>
            <header className="header">
                <h1 className="header__title">todo list v0.5</h1>
                <div className="header__menu">
                    <ul>
                        {/* <li>
                        <button>
                            <Link to="/">Mis tareas</Link>
                        </button>
                    </li> */}
                        {/* <li>
                        <button>
                            <Link to="/create-task">Crear nueva tarea</Link>
                        </button>
                    </li> */}
                    </ul>
                </div>
            </header>
            <Switch>
                <Route exact path="/">
                    <div className="create-task-container">
                        <CreateTask />
                    </div>
                </Route>
                {/* <Route path="/create-task">
                    <ListTask />
                </Route> */}
            </Switch>
        </Router>
    )
}

export default Root;