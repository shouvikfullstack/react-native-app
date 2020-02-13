import * as React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Picker } from 'react-native'
import { Button } from 'react-native-elements'

export default function HeatScreen({ navigation }) {
  const [value, onChangeText] = React.useState(null)
  const [mode, setMode] = React.useState('tubing')
  const [ambientTemperature, setAmbientTemperature] = React.useState(null)
  const [lineTemperature, setLineTemperature] = React.useState(null)
  const [kValue, setKValue] = React.useState(null)
  const [conventionCoefficient, setConventionCoefficient] = React.useState(null)
  const [insulationPipeLength, setInsulationPipeLength] = React.useState(null)
  const [pipeSize, setPipeSize] = React.useState(null)
  const [insulationThickness, setInsulationThickness] = React.useState(null)
  const [insulationSurfaceArea, setInsulationSurfaceArea] = React.useState(null)
  const [totalHeatLossSheet, setTotalHeatLossSheet] = React.useState(0)
  const [heatLossSheet, setHeatLossSheet] = React.useState(0)
  const [totalHeatLossTubing, setTotalHeatLossTubing] = React.useState(0)
  const [heatLossTubing, setHeatLossTubing] = React.useState(0)


  const calculateHeatLoss = () => {
    if (mode == 'sheet') {
      const THLS = (insulationSurfaceArea * kvalue * (lineTemperature - ambientTemperature)) / ((insulationThickness / 1000) + (1 / conventionCoefficient * kvalue))
      setTotalHeatLossSheet(THLS)
      const HLS = THLS / insulationSurfaceArea
      setHeatLossSheet(HLS)
    } else {
      //const top = (2 * 3.14159 * insulationPipeLength * (lineTemperature - ambientTemperature))
      //const bottom = (Math.log((((insulationThickness +  insulationThickness + pipeSize)/2/1000)+(1/conventionCoefficient*kvalue))/(pipeSize/2/1000))/kvalue)*0.9725
      const calc = (2*3.14159*insulationPipeLength*(lineTemperature-ambientTemperature))/(Math.log((((insulationThickness+insulationThickness+pipeSize)/2/1000)+(1/conventionCoefficient*kvalue))/(pipeSize/2/1000))/kvalue)*0.9725
      console.log(top, calc)

      const THLT = (2 * 3.14159 * insulationPipeLength * (lineTemperature - ambientTemperature)) / (Math.log((((insulationThickness + insulationThickness + pipeSize) / 2 / 1000) + (1 / conventionCoefficient * kvalue)) / (pipeSize / 2 / 1000)) / kvalue) * 0.9725
      setTotalHeatLossTubing(THLT)
      const HLT = THLT / insulationPipeLength
      setHeatLossTubing(HLT)
    }
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textStyle}>COLD / HEAT CALCULATION</Text>
      <View style={styles.buttonContainer}>
        <Button title="TUBING" buttonStyle={styles.buttonStyle} onPress={() => setMode('tubing')} />
        <Button title="SHEET" buttonStyle={styles.buttonStyle} onPress={() => setMode('sheet')} />
      </View>
      <View style={styles.formSection}>
        <View style={styles.formRow}>
          <Text style={{ flex: 4 }}>Ambient Temperature: </Text>
          <TextInput
            style={styles.textInputField}
            onChangeText={val => setAmbientTemperature(val)}
            value={ambientTemperature}
          />
          <Text style={{ flex: 1 }}>   &deg;C</Text>
        </View>
        <View style={styles.formRow}>
          <Text style={{ flex: 4 }}>Line Temperature: </Text>
          <TextInput
            style={styles.textInputField}
            onChangeText={val => {
              setLineTemperature(val)
              const avgTemperature = Math.round((Number(ambientTemperature) + Number(val)) / 2)
              const diff = -30 - avgTemperature
              kvalue = (Math.abs(diff) * 0.0001) + 0.0310
              setKValue(kvalue.toString())
              console.log(avgTemperature, diff, kvalue)
            }}
            value={lineTemperature}
          />
          <Text style={{ flex: 1 }}>   &deg;C</Text>
        </View>
        <View style={styles.formRow}>
          <Text style={{ flex: 4 }}>K-Value: </Text>
          <TextInput
            style={styles.textInputField}
            value={kValue}
            editable={false}
          />
          <Text style={{ flex: 1, fontSize: 10 }}>W/mK</Text>
        </View>
        <View style={styles.formRow}>
          <Text style={{ flex: 4 }}>Convention Coefficient: </Text>
          <Picker
            selectedValue={conventionCoefficient}
            style={{ height: 50, width: 100 }}
            onValueChange={(value, index) => setConventionCoefficient(value)}>
            <Picker.Item label="5" value="5" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="9" value="9" />
          </Picker>
          <Text style={{ flex: 1, fontSize: 10 }}>W/m2-K</Text>
        </View>
        {mode == 'tubing' &&
          <View style={styles.formRow}>
            <Text style={{ flex: 4 }}>Insulation Pipe Length: </Text>
            <TextInput
              style={styles.textInputField}
              onChangeText={text => setInsulationPipeLength(text)}
              value={insulationPipeLength}
            />
            <Text style={{ flex: 1 }}>    m</Text>
          </View>
        }
        {mode == 'tubing' &&
          <View style={styles.formRow}>
            <Text style={{ flex: 4 }}>Pipe Size: </Text>
            <TextInput
              style={styles.textInputField}
              onChangeText={text => setPipeSize(text)}
              value={pipeSize}
            />
            <Text style={{ flex: 1 }}>  mm</Text>
          </View>
        }
        {mode == 'sheet' &&
          <View style={styles.formRow}>
            <Text style={{ flex: 4 }}>Insulation Surface Area: </Text>
            <TextInput
              style={styles.textInputField}
              onChangeText={text => setInsulationSurfaceArea(text)}
              value={insulationSurfaceArea}
            />
            <Text style={{ flex: 1 }}>  m &sup2;</Text>
          </View>
        }
        <View style={styles.formRow}>
          <Text style={{ flex: 4 }}>Insulation Thickness: </Text>
          <TextInput
            style={styles.textInputField}
            onChangeText={text => setInsulationThickness(text)}
            value={insulationThickness}
          />
          <Text style={{ flex: 1 }}>  mm</Text>
        </View>
      </View>
      <Button title="CALCULATE" buttonStyle={styles.calculateButton} onPress={() => calculateHeatLoss()} />
      {mode == 'sheet' &&
        <View style={styles.textContainer}>
          <Text>RESULT</Text>
          <Text>Heat Loss: {heatLossSheet.toFixed(2)} W/m</Text>
          <Text>Total Heat Loss: {totalHeatLossSheet.toFixed(3)} W</Text>
        </View>}
      {mode == 'tubing' &&
        <View style={styles.textContainer}>
          <Text>RESULT</Text>
          <Text>Heat Loss: {heatLossTubing.toFixed(2)} W/m</Text>
          <Text>Total Heat Loss: {totalHeatLossTubing.toFixed(3)} W</Text>
        </View>}
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
    width: 120,
    flex: 1,
    height: 32
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
    padding: 10
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
    marginRight: 5,
    flex: 3,
    textAlign: 'center'
  },
  plotInput: {
    flex: 2,
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