import * as React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'

export default function CondensationScreen({ navigation }) {
  const [value, onChangeText] = React.useState(null);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textStyle}>THICKNESS CALCULATION FOR CONDENSATION CONTROL</Text>
      <View style={styles.buttonContainer}>
        <Button title="TUBING" buttonStyle={styles.buttonStyle} />
        <Button title="SHEET" buttonStyle={styles.buttonStyle} />
      </View>
      <View style={styles.formSection}>
        <View style={styles.formRow}>
          <Text style={{ flex: 4 }}>Ambient Temperature: </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputField}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <Text>  &deg;C</Text>
          </View>
        </View>
        <View style={styles.formRow}>
          <Text style={{ flex: 4 }}>Relative Humidity: </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputField}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <Text>   %</Text>
          </View>
        </View>
        <View style={styles.formRow}>
          <Text style={{ flex: 4 }}>Duct Temperature: </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputField}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <Text>  &deg;C</Text>
          </View>
        </View>
        <View style={styles.formRow}>
          <Text style={{ flex: 4 }}>Convention Coefficient: </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputField}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <Text>W/m2-K</Text>
          </View>
        </View>
        <View style={styles.formRow}>
          <Text style={{ flex: 4 }}>Pipe Size: </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputField}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <Text>mm</Text>
          </View>
        </View>
      </View>
      <Button title="CALCULATE" buttonStyle={styles.calculateButton} />
      <View style={styles.textContainer}>
        <Text>RESULT</Text>
        <Text>K-Value: xx</Text>
        <Text>Dew Point: xx &deg;C</Text>
        <Text>Minimum Thickness Required: X M</Text>
        <Text>AGIGA Recommended Thickness: XX MM</Text>
      </View>
      <View>
        <View style={styles.plotRow}>
          <TextInput
            style={styles.plotInput}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <Button title="PLOT" buttonStyle={styles.plogButton} />
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
    </ScrollView>
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
  },
  bottomContainer: {
    flex: 3,
    padding: 10
  },
  buttomTextContainer: {
    backgroundColor: '#565656',
    padding: 10
  },
  buttonStyle: {
    backgroundColor: 'grey',
    width: 150,
    height: 50
  },

  plogButton: {
    backgroundColor: 'grey',
    width: 120
  },
  calculateButton: {
    width: '90%',
    backgroundColor: 'grey',
    alignSelf: 'center'
  },
  buttomTextColor: {
    color: '#fff'
  },
  buttomOptions: {
    flexDirection: 'row',
    padding: 10
  },
  textStyle: {
    padding: 10,
    textAlign: 'center'
  },
  formSection: {
    padding: 20,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  plotRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInputField: {
    height: 30,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 5
  },
  plotInput: {
    height: 30,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 5
  },
  textContainer: {
    padding: 20
  }
})