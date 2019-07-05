import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link } from  '../routes';

export default () => {
return(
<Menu style={{marginTop: '10px'}}>
<Menu.Item>Crossborder</Menu.Item>
<Menu.Menu position = "right">
<Link route="/">
<a className ="item">Startups</a>
</Link>
<Link route="/startups/new">
<a className ="item">+</a>
</Link>
</Menu.Menu>
</Menu>
);
};
