import React from 'react';
import { useRoutes } from "hookrouter";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { routes } from "./Routes";
import NotFound from "./components/pages/NotFound";

export default function App() {
  const route = useRoutes(routes);
  return (
    <React.Fragment>
      <CssBaseline />
      {route || <NotFound />}
    </React.Fragment>
  );
}
