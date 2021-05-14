import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

const OtherScreen = (props) => {
    const signOutAsync = async () => {
      await AsyncStorage.clear();
      props.navigation.navigate('Auth');
    };
  
    return (
      <ScreenContainer>
        <Button title="I'm done, sign me out" onPress={signOutAsync} />
        <StatusBar barStyle="default" />
      </ScreenContainer>
    );
  };
  
  OtherScreen.navigationOptions = {
    title: 'Lots of features here',
  };
  
  OtherScreen.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  
  export default OtherScreen;
