import React from 'react';
import {View, Text} from 'react-native';

import styles from './SignIn.styles';
import SignInButtonComponent from '../../components/signInButton/SignInButton.component';

/**
 * Counter container
 * 
 * This container will handle all state management of the counter
 */
class SignInContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    
  }

  handleSignInPress = () => {
  
  }




  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <SignInButtonComponent label="Sign-In" />
        </View>
      </View>
    );
  }
}

export default SignInContainer;
