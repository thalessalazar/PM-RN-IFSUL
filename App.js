import * as React from 'react';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import DatePicker from "react-native-datepicker";
import Style from './src/components/myStyle';

export default class App extends React.Component {

  state = {
    name: 0.0,
    phone: 0.0,
    birthday: "",
    address: "",
    addressType: "",
  }

  updateName = (name) => {
    this.setState({ name: name });
  }

  updatePhone = (number) => {
    this.setState({ phone: number });
  }

  updateAddress = (address) => {
    this.setState({ address: address });
  }

  updateBirthday = (date) => {
    this.setState({birthday: date})
  }

  alertResult = () => {
    let msg = `
      Nome: ${this.state.name} \n 
      Numero: ${this.state.phone} \n
      Endereço: ${this.state.address} - Tipo: ${this.state.addressType} \n
      Nascimento: ${this.state.birthday}
      `
    alert(msg)
  }

  render() {
    return (
      <ScrollView style={Style.scrollView} >

        <TextInput style={Style.input} underlineColorAndroid="transparent" placeholder="Nome"
          placeholderTextColor="black" autoCapitalize="none" onChangeText={this.updateName} keyboardType="default" />

        <TextInput style={Style.input} underlineColorAndroid="transparent" placeholder="Numero"
          placeholderTextColor="black" autoCapitalize="none" onChangeText={this.updatePhone} keyboardType="phone-pad" />

        <TextInput style={Style.input} underlineColorAndroid="transparent" placeholder="Endereço"
          placeholderTextColor="black" autoCapitalize="none" onChangeText={this.updateAddress} keyboardType="default" />

        <RadioButton.Group style={{}} onValueChange={addressType => this.setState({ addressType })}
          value={this.state.addressType}>

          <RadioButton.Item label="Casa" value="home" />
          <RadioButton.Item label="Apartamento" value="apart" />
          <RadioButton.Item label="Comercial" value="comercial" />

        </RadioButton.Group>

        <DatePicker 
          format="DD/MM/YYYY"
          style={Style.dateComponent}
          date={this.state.brithday}
          onDateChange={this.updateBirthday}
        />

        <Text>
          {this.state.birthday && <Text> Data de Nascimento: {this.state.birthday} </Text>}
        </Text>

        <TouchableOpacity style={Style.botao} onPress={() => this.alertResult()} >
          <Text style={Style.textoBotao}>Enviar</Text>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}