import { CDBSidebar, CDBSidebarContent, CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        width: "100%",
      }}
    >
      <CDBSidebar
        textColor="black"
        backgroundColor="lightgray"
        breakpoint={1200}
      >
        <CDBSidebarContent className="sidebar-content">
          <NavLink
            exact
            to="/profile"
            activeClassName="activeClicked"
            style={{ textDecoration: "none" }}
          >
            <CDBSidebarMenuItem icon="user" style={{ color: "black" }}>
              User Information
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact
            to="/profile/addaddress"
            activeClassName="activeClicked"
            style={{ textDecoration: "none" }}
          >
            <CDBSidebarMenuItem icon="map" style={{ color: "black" }}>
              Addresses
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact
            to="/profile/addpayment"
            activeClassName="activeClicked"
            style={{ textDecoration: "none" }}
          >
            <CDBSidebarMenuItem icon="wallet" style={{ color: "black" }}>
              Payments
            </CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};
export default SideBar;
