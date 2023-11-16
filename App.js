import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PolishKing from './polishking';
import KingsList from "./listakrolow";
import KingChild from "./KingsChild";

export default function App(){
  let kings=[
    {id:1, name:"Bolesław Chrobry", reignDate:"992-1025"},
    {id:2, name:"Mieszko II", reignDate:"1025-1031"},
    {id:3, name:"Bolesław śmiały", reignDate:"1058-1079"},
    {id:4, name:"Przemysław II", reignDate:"1295-1296"},
  ]
  
const[childData,setChildData] =useState(null)

function ChildDataHandler(dataFromChild){
  setChildData(dataFromChild)
}

return(
  <View style={styles.container}>
    <KingChild onDataReceiver={ChildDataHandler}/>
    <Text style={{marginT:30}}>Dane otrzymane od</Text>
    <Text>Dane:{childData}</Text>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
