import React, {useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import logging from "./config/logging";
import routes from "./config/routes";

const Application: React.FunctionComponent<{}> = props => {
    useEffect(() => {
        logging.info('Loading application.')
    }, [])

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Application
