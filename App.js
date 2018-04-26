// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// // import DrawerExample from "./src/component/CustomDrawer"
// // import SideBar from "./src/SideBar/SideBar"
// import Drawer from 'react-native-drawer'
// import ControlPanel from "./src/ControlPanel"
// import Main from "./src/Main"


// export default class App extends React.Component {
//   closeControlPanel = () => {
//     this._drawer.close()
//   };
//   openControlPanel = () => {
//     this._drawer.open()
//   };

//   render() {
//     // const menu = <Menu navigator={navigator}/>;

//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//         {/* <SideBar/> */}

//       {/* <DrawerExample/> */}

//          <Drawer
//           type="static"
//           content={<ControlPanel />}
//           openDrawerOffset={100}
//           styles={drawerStyles}
//           tweenHandler={Drawer.tweenPresets.parallax}
//           >
//             <Main />
//         </Drawer>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const drawerStyles = {
//   drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
//   main: {paddingLeft: 3},
// }




// // import React, { Component } from "react";
// // import Expo from "expo";
// // import HomeScreen from "./src/HomeScreen/index.js";
// // export default class AwesomeApp extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       isReady: false
// //     };
// //   }
// //   async componentWillMount() {
// //     // await Expo.Font.loadAsync({
// //     //   Roboto: require("native-base/Fonts/Roboto.ttf"),
// //     //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
// //     //   Ionicons: require("native-base/Fonts/Ionicons.ttf")
// //     // });
// //     this.setState({ isReady: true });
// //   }
// //   render() {
// //     if (!this.state.isReady) {
// //       return <Expo.AppLoading />;
// //     }
// //     return <HomeScreen />;
// //   }
// // }




// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Text
// } from 'react-native';

// import {Drawer} from 'native-base';

// import AppHeader from './src/AppHeader';
// // import AppBody from './appBody';
// // import AppFooter from './appFooter';

// import Sidebar from './src/SideBar/SideBar';

// export default class App extends Component {
//   closeDrawer = () => {
//     this.drawer._root.close()
//   };
//   openDrawer = () => {
//     this.drawer._root.open()
//   };
//   render() {
//     return (
      
//       <Drawer
//         ref={(ref) => { this.drawer = ref; }}
//         content={<Sidebar/>}
//         onClose={() => this.closeDrawer()} >

//         <AppHeader
//             openDrawer={this.openDrawer.bind(this)}
//         />
//         {/* <AppBody/> */}
//         </Drawer>
//     );
//   }
// }

// module.exports = App;






import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";
import Expo from "expo";

import HomeScreen from "./src/HomeScreen/index.js";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {  
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <HomeScreen />;
  }
}