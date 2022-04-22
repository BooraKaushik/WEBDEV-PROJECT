import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SideBar =()=>{
return(
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarContent className="sidebar-content">
                <NavLink exact to="#" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">User Information</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/addaddress/" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="map">Addresses</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/addpayment/" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="wallet">Payments</CDBSidebarMenuItem>
                </NavLink>
            </CDBSidebarContent>
        </CDBSidebar>
    </div>
);
}
export default SideBar;