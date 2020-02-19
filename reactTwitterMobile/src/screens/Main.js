import React, {useState} from 'react';
// import {EXPLORE, HOME, PROFILE} from '../store/stateMenu/enum';
import {ButtonGroup, Text} from 'react-native-elements';

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

export const Main = ({}) => {
  const [selectedIndex, updateIndex] = useState(0);
  const component1 = () => <Text>Profile</Text>;
  const component2 = () => <Text>Home</Text>;
  const component3 = () => <Text>Explore</Text>;
  const buttons = [
    {element: component1},
    {element: component2},
    {element: component3},
  ];
  return (
    <ButtonGroup
      onPress={click}
      selectedIndex={selectedIndex}
      buttons={buttons}
    />
  );

  function click(selectedIndex) {
    // switch (selectedIndex) {
    //   case 0:
    //     setStateMenu(PROFILE);
    //     break;
    //   case 1:
    //     setStateMenu(HOME);
    //     break;
    //   case 2:
    //     setStateMenu(EXPLORE);
    //     break;
    // }
    updateIndex(selectedIndex);
  }
};
