import React, { Component } from "react";
import ClientScreen from "../Screens/Client/ClientScreen";
import SideBar from "../components/SideBar";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import OpportunityScreen from "./Opportunity/OpportunityScreen";
import HistoryScreen from "./History";
import MyChancesScreen from "./MyChances";
import InfoScreen from "./Info";
import LoginScreen from "./LoginScreen"

const StackOpportunityNavigator = StackNavigator(
  {
    Opportunity: { screen: OpportunityScreen },
    ClientScreen: { screen: ClientScreen }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const DrawerNavigationOptions = DrawerNavigator(
  {
    Opportunity: { screen: StackOpportunityNavigator },
    // Opportunity: { screen: OpportunityScreen },
    // ClientScreen: { screen: ClientScreen },
    History: { screen: HistoryScreen },
    MyChances: { screen: MyChancesScreen },
    Info: { screen: InfoScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);


const LoginNavigator = StackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    Main: { screen: DrawerNavigationOptions }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);
export default LoginNavigator;
