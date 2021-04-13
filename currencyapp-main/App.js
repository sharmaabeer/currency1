import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Alert,View,
  TouchableOpacity,SafeAreaView,TextInput } from 'react-native';

const currencyPerRupee={
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.0000041
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:"",
      resultValue:"0.0",
    }
  }
  buttonPressed=currency=>{
    if(this.state.inputValue==="")
    {
      Alert.alert("Enter some value");
    }
    else
    {
     let result=parseFloat(this.state.inputValue) * 
     currencyPerRupee[currency];
     this.setState({resultValue:result.toFixed(2)})
    }
  }
  render(){
  return (
    
    
      <SafeAreaView style={styles.container}>
        <View style={styles.screenView}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>
              {this.state.resultValue}
              </Text>
          </View>
          <View style={styles.inputcontainer}>
            <TextInput
            style={styles.input}
            selectionColor="#FFF"
            keyboardType="numeric"
            textAlign="center"
            placeholder="Enter Value"
            value={this.state.inputValue}
            onChangeText={inputValue=>this.setState({inputValue})}
            />
        </View>
        
        <View style={styles.converterbuttoncontainer}>
          <TouchableOpacity
          onPress={()=>this.buttonPressed("DOLLAR")}
          style={styles.converterbutton}
          >
            <Text style={styles.convertbuttontext}>
              Dollar
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>this.buttonPressed("EURO")}
          style={styles.converterbutton}
          >
            <Text style={styles.convertoebuttontext}>
           Euro
              </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          onPress={()=>this.buttonPressed("POUND")}
          style={styles.converterbutton}
          >
            <Text style={styles.convertoebuttontext}>
            Pound
              </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          onPress={()=>this.buttonPressed("RUBEL")}
          style={styles.converterbutton}
          >
            <Text style={styles.convertoebuttontext}>
            Rubel
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>this.buttonPressed("AUSDOLLAR")}
          style={styles.converterbutton}
          >
            <Text style={styles.converterbuttontext}>
           Australian Dollar
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>this.buttonPressed("CANDOLLAR")}
          style={styles.converterbutton}
          >
            <Text style={styles.converterbuttontext}>
            Canadian Dollar
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>this.buttonPressed("YEN")}
          style={styles.converterbutton}
          >
            <Text style={styles.converterbuttontext}>
            Yen
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>this.buttonPressed("DINAR")}
          style={styles.converterbutton}
          >
            <Text style={styles.converterbuttontext}>
            Dinar
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>this.buttonPressed("BITCOIN")}
          style={styles.converterbutton}
          >
            <Text style={styles.converterbuttontext}>
            Bitcoin
              </Text>
          </TouchableOpacity>
        </View>
        </View>

    </SafeAreaView>
  
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535C68'  
  },
 
  screenView:{
    flex:1,
    marginTop:30,
    alignItems:"center",
  },
  resultContainer:{
    height:60,
    width:400,
    marginTop:50,
    justifyContent:"center",
    borderColor:"#FFF",
    backgroundColor:"#0A79DE",
    alignItems:"center",
    borderWidth:2
  },
  resultValue:{
    fontSize:30,
    fontWeight:"bold",
    color:"#FFF"
  },
  inputcontainer:{
    height:70,
    width:400,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#c1c1c1",
    backgroundColor:"#0A79DE"
  },
  input:{
    color:"#FFF",
    fontSize:30,
    justifyContent:"center"
  },
  converterbuttoncontainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2 
  },
  converterbutton:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#0A79DF",
    height:100,
    borderColor:"#c1c1c1",
    borderWidth:2,
    width:"33.3%"
  },
  converterbuttontext:
  {
    color:"#FFF",
    fontSize:20,
    fontWeight:"bold"
  }
});
