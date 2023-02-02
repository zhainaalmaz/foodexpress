import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import Header from '../../components/Header';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Button, Icon, SocialIcon} from 'react-native-elements';

export default function SignInScreen({navigation}) {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left" navigation={navigation} />

      <View style={styles.mainTitle}>
        <Text style={title}>Sign In</Text>
      </View>

      <View style={styles.signinText}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>Registered with your account</Text>
      </View>

      <View style={styles.inputs}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInRight'}
            duration={400}>
            <Icon
              name="lock"
              iconStyle={{color: colors.grey3}}
              type="material"
            />
          </Animatable.View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            ref={textInput2}
            onFocus={() => setTextInput2Fossued(false)}
            onBlur={() => setTextInput2Fossued(true)}
          />
          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{color: colors.grey3}}
              type="material"
              style={styles.visibleIcon}
            />
          </Animatable.View>
        </View>
      </View>

      <View style={styles.signinButton}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text
          style={{
            ...styles.text1,
            textDecorationLine: 'underline',
          }}>
          Forgot password?
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10, marginBottom: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Or</Text>
      </View>

      <View style={styles.facebook}>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={styles.facebook}>
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginTop: 15, marginLeft: 20}}>
        <Text
          style={{
            ...styles.text1,
          }}>
          New on ExpressFood?
        </Text>
      </View>

      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainTitle: {
    marginLeft: 20,
    marginTop: 10,
  },

  signinText: {
    alignItems: 'center',
    marginTop: 10,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  inputs: {
    marginTop: 20,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  input: {
    width: '80%',
  },
  visibleIcon: {
    marginRight: 10,
  },
  signinButton: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },

  facebook: {
    marginHorizontal: 10,
    marginVertical: 10,
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
