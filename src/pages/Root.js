import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

/* Components */

/* Pages Components */
import CreateTask from './CreateTask/CreateTask';
import ListTask from './ListTask/ListTask';

const Root = () => {

    // const [task, setTask] = useState(initialState)

    return (
        <Router>
            <h1>todo list v0.2</h1>
            <div className="header-container">
                <ul>
                    <li>
                        <button>
                            <Link to="/">Mis tareas</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to="/create-task">Crear nueva tarea</Link>
                        </button>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/">
                    <ListTask />
                </Route>
                <Route path="/create-task">
                    <CreateTask />
                </Route>
            </Switch>
        </Router>
    )
}

export default Root;