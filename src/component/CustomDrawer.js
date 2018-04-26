import React, { Component } from 'react';
import { Drawer, View } from 'native-base';
import SideBar from "../SideBar/SideBar"

export default class DrawerExample extends Component {
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
        <View>
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >
            // Main View
            </Drawer>
      </View>
    );
  }
}