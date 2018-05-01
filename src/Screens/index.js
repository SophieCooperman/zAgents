import React, { Component } from "react";
import ClientScreen from "./ClientScreen.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
import OpportunityScreen from "./Opportunity/OpportunityScreen";

const HomeScreenRouter = DrawerNavigator(
  {
    Opportunity: { screen: OpportunityScreen },
    ClientScreen: { screen: ClientScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;