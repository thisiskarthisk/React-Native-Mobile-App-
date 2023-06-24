
import * as React from 'react';
import {StyleSheet, View,Linking,Paragraph} from "react-native"
import { Avatar, Button, Card, Divider, Text ,TextInput} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

export default function LOGIN() {
  const styles = StyleSheet.create({
    view: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      
    },
    cardContent: {
      backgroundColor: "coral",
      display: "flex",
      flexDirection: "row"
    },
    card:{
      backgroundColor:"#fff",
      width:"25rem",
      height:"35rem"
    },

    Cover:{
      width:"25rem",
      height:"10rem"
    },
    TextInput:{
      marginTop:"1rem",
      fontStyle:"italic"
    },
    Button:{
        width:'100%',
        marginTop:"1rem",
        backgroundColor:'blue'
    },
    Divider:{
      width:"10rem",
      flexDirection:"row",
      marginRight:'2rem'
     },
      Text:{
        fontVariant:'small-caps',
        textAlign:'center',
        fontSize:'xx-large',
        marginTop:"-30px"
      }
  });
  const [text, setText] = React.useState("");

  return(
    <LinearGradient colors={['#6559ca', '#bc318f', '#e33f5f','#f77638','#fec66d']} style={styles.view} >
      <View>
        <Card style={styles.card}>
        <Card.Cover  style={styles.Cover} source={require('../../../../assets/1112307.jpg')} />
          <View >
           <Text style={styles.Text}>Instagram</Text>
          </View>
          <Card.Content>
            <TextInput
             style={styles.TextInput}
              label="Email"
              mode="outlined"
              value={text}
              onChangeText={text => setText(text)}
              />
            <TextInput
              style={styles.TextInput}
              mode="outlined"
              label="Password"
              secureTextEntry={true}
              onChangeText={(text) => this.setState({input: text})}
            />
          </Card.Content>
          
          <Card.Actions>
          <Button style={styles.Button} icon="login" mode="contained" onPress={() => console.log('Pressed')}>
             Login
          </Button>
          </Card.Actions>
          <View  style={styles.Divider}>
          <Divider  style={{ width:'9rem',flexDirection:'row',marginLeft:'2rem',marginTop:'1rem'}}/>
             <Text style={{ marginLeft:'1rem',marginBottom:'1%'}} >OR</Text>
          <Divider  style={{ width:'9rem',flexDirection:'row',marginLeft:'1rem',marginTop:'1rem' }}/>
          </View>
            <Button 
              icon="facebook"
              style={{ color: '#0071d5',marginTop:'1%'}} 
              onPress={() => Linking.openURL('https://www.facebook.com/')}>
                <Text style={{fontSize:'130%',color:'darkblue'}}> Login in With facebook  </Text>
            </Button>
            <Button 
              onPress={() => Linking.openURL('https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0')}>
                  <Text style={{fontSize:'100%',color:'#03a1ff',marginBottom:'4rem'}}>Forget Password ?</Text>
            </Button>
              <Card style={{backgroundColor:'#ffffff',width:'23rem',marginLeft:'1rem',height:"3rem"}}>
                <Card.Content style={{flexDirection:"row"}}>
                       <Text  style={{fontSize:'120%',marginLeft:"1rem"}}>Dont't have an account ? </Text>
                        <Text onPress={()=>Linking.openURL('https://www.facebook.com/')} style={{fontSize:'120%',color:'darkblue',marginBottom:'50rem'}}>Sign Up</Text>
                </Card.Content>
              </Card>
        </Card>
      </View>
    </LinearGradient>
  )
};
