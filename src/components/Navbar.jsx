/**
 * The component that renders the navigation bar for the application. 
 * It uses the react-pro-sidebar library to create
 * a sidebar with menu items that link to different routes in the application.
 * The NavLink component from react-router-dom is used to create links that can 
 * be styled based on the active route.
 * @returns {JSX.Element} The rendered Navbar component.
 */

import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
      <Sidebar style={{ height: '100vh' }} collapsed={false}>
        <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
        >
          <MenuItem component={<NavLink to="/employeedirectory" />}
          active={window.location.pathname === '/employeedirectory'}>Employee Directory </MenuItem>
          <MenuItem component={<NavLink to="/dashboard" />}
          active={window.location.pathname === '/dashboard'}> Dashboard  </MenuItem>
        </Menu>
      </Sidebar>
    
      </>
  );
}