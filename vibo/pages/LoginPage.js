import React from 'react'
import { useState,StyleSheet, View,} from 'react-native';
import { TextInput, Text, TouchableRipple, DefaultTheme, Provider } from 'react-native-paper';

export default function LoginPage({ navigation }) {

    const [text, setText] = useState(' ');
    const [password, setPassword] = useState(' ');
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#1a3b52',
        },
    };

    return (
      
        <Provider theme={theme}>
            <View style={{ backgroundColor: "#1a3b52", flex: 1, alignItems: 'center', justifyContent: 'center', }}>

                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', marginBottom: 100 }}>
                    <Text style={style.pageTile} variant="displayMedium">Login</Text>
                </View>

                <View style={{ flex: 8 }}>
                    <TextInput style={style.textInput}
                        label="Username"
                        value={text}
                        onChangeText={text => setText(text)}
                        mode='outlined'
                        outlineColor="#747b8a"
                        theme={{ colors: { primary: '#009d9c', underlineColor: 'transparent', onSurfaceVariant: 'white' } }}

                    />
                    <View>
                        <TextInput style={style.textInput}
                            label="Password"
                            secureTextEntry={true}
                            onChangeText={text => setPassword(password)}
                            mode='outlined'
                            outlineColor="#747b8a"
                            theme={{ colors: { primary: '#009d9c', underlineColor: 'transparent', onSurfaceVariant: 'white' } }}
                        />
                    </View>

                    <TouchableRipple style={style.loginbtn} onPress={() => { navigation.navigate('AboutPage') }}>
                        <Text style={style.logintxt}>Login</Text>
                    </TouchableRipple>
                   

                </View >

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={style.txt} >Copyright @ AMAD Student 2023</Text>
                </View>
            </View>

        </Provider>
    )
}

const style = StyleSheet.create({
    pageTile: {

        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 50
    },
    textInput: {
        width: 250,
        textcolor: 'white',
        textAlign: 'left',
        marginTop: 25,
    }
    ,
    loginbtn: {
        borderRadius: 2,
        color: 'white',
        textAlign: 'center',
        fontsize: 30,
        fontWeight: 'bold',
        marginTop: 45,
        paddingVertical: 10,
        backgroundColor: '#009d9c',
    },
    logintxt: {
        width: 250,
        marginVertical: 2,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: '500',
    },
    txt: {
        color: 'white'
    }
})