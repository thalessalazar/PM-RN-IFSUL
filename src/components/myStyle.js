import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    scrollView: {
      marginTop: 30,
    },

    fonteGrande: {
        fontSize: 48,
        color: '#111',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 23,
      },
    
      container: {
        paddingTop: 23,
      },
    
      input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        paddingHorizontal: 10,
      },
    
      botao: {
        backgroundColor: '#AAA2f4',
        padding: 10,
        margin: 15,
        height: 40,
      },
    
      textoBotao: {
        color: '#FFF',
        alignItems: 'center',
        textAlign: 'center',
      },
    
      switchEstilo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }, 

      dateComponent: {
        width: 350,
        marginLeft: "auto",
        marginRight: "auto"
      },  
});