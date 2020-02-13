import * as React from 'react';
import { Button } from 'react-native-elements'
import { View, StyleSheet, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="CONDENSATION CONTROL"
            onPress={() => navigation.navigate('Condensation', { name: 'Jane' })}
            buttonStyle={styles.buttonStyle}
          />
          <Button
            title="HEAT LOSS"
            onPress={() => navigation.navigate('Heat', { name: 'Jane' })}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttomTextContainer}>
          <Text style={styles.buttomTextColor}>DISCLAIMER</Text>
          <Text style={styles.buttomTextColor}>The information transmitted, including attachments, is intended only for the person(s) or entity to which it is addressed and may contain confidential and/or privilaged material. Any review, re-transmission, dissemination or other use of, or taking of any action in reliance upon this</Text>
        </View>
        <View style={styles.buttomOptions}>
          <View>
            <Text>Tel:</Text>
            <Text>Fax:</Text>
            <Text>Email:</Text>
          </View>
          <View>

          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navContainer: {
    flex: 7
  },
  buttonContainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center'
  }, 
  bottomContainer: {
    flex: 4,
    padding: 10
  }, 
  buttomTextContainer: {
    backgroundColor: '#565656',
    padding: 10
  },
  buttonStyle: {
    backgroundColor: 'grey',
    height: 70,
    width: 160
  },
  buttomTextColor: {
    color: '#fff'
  }, 
  buttomOptions: {
    flexDirection: 'row',
    padding: 10
  }
})