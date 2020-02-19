import React, {useState} from 'react';
import {ButtonGroup, Text} from 'react-native-elements';
import {ProfileScreen} from "./Profile";
import Home from "./Home";
import Explore from "./Explore";

// const useStyles = StyleSheet.create({
//   root: {
//     display: 'flex',
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     width: '100%',
//     overflow: 'auto',
//     marginTop: '64px',
//     height: 'calc(100vh - 64px)',
//   },
// });
const PROFILE = 'PROFILE';
const HOME = 'HOME';
const EXPLORE = 'EXPLORE';

export const Main = ({}) => {
  const [selectedIndex, updateIndex] = useState(0);
  const [stateMenu, setStateMenu] = useState(0);
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
      {stateMenu === PROFILE ? <ProfileScreen /> : <></>}
      {stateMenu === HOME ? <Home /> : <></>}
      {stateMenu === EXPLORE ? <Explore /> : <></>}
    </>
  );

  function click(selectedIndex) {
    switch (selectedIndex) {
      case 0:
        setStateMenu(PROFILE);
        break;
      case 1:
        setStateMenu(HOME);
        break;
      case 2:
        setStateMenu(EXPLORE);
        break;
    }
    updateIndex(selectedIndex);
  }
};
