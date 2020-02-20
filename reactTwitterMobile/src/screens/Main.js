import React, {useState} from 'react';
import {ButtonGroup, Text} from 'react-native-elements';
import ProfileScreen from "./Profile";
import Home from "./Home";
import Explore from "./Explore";
import {connect} from "react-redux";
import {EXPLORE_STATE, HOME_STATE, PROFILE_STATE} from "../store/stateMenu/enum";

const Main = ({navigation, menu}) => {
  const [selectedIndex, updateIndex] = useState(0);
  const [stateMenu, setStateMenu] = useState(menu ? menu : PROFILE_STATE);
  const component1 = () => <Text>Profile</Text>;
  const component2 = () => <Text>Home</Text>;
  const component3 = () => <Text>Explore</Text>;
  const buttons = [
    {element: component1},
    {element: component2},
    {element: component3},
  ];

  return (
    <>
      <ButtonGroup
        onPress={click}
        selectedIndex={selectedIndex}
        buttons={buttons}
      />
      {stateMenu === PROFILE_STATE ? <ProfileScreen navigation={navigation}/> : <></>}
      {stateMenu === HOME_STATE ? <Home  navigation={navigation}/> : <></>}
      {stateMenu === EXPLORE_STATE ? <Explore navigation={navigation}/> : <></>}
    </>
  );

  function click(selectedIndex) {
    switch (selectedIndex) {
      case 0:
        setStateMenu(PROFILE_STATE);
        break;
      case 1:
        setStateMenu(HOME_STATE);
        break;
      case 2:
        setStateMenu(EXPLORE_STATE);
        break;
    }
    updateIndex(selectedIndex);
  }
};
const mapStateToProps = state => ({
    menu: state.menu
});
export default connect(
    mapStateToProps
)(Main);
