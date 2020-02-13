import * as React from 'react';
import { Button } from 'react-native'

export default function ProfileScreen({navigation}) {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Home', {name: 'Jane'})}
    />
  );
}