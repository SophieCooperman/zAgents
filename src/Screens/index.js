import React, { Component } from "react";
import ClientScreen from "./ClientScreen.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import OpportunityScreen from "./Opportunity/OpportunityScreen";
import HistoryScreen from "./History";
import MyChancesScreen from "./MyChances";
import InfoScreen from "./Info";


// const StackOpportunityNavigator = StackNavigator(

// );



const HomeScreenRouter = DrawerNavigator(
  {
    Opportunity: { screen: OpportunityScreen },
    ClientScreen: { screen: ClientScreen },
    History: { screen: HistoryScreen },
    MyChances: { screen: MyChancesScreen },
    Info: { screen: InfoScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;