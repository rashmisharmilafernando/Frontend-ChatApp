import { StyleSheet, View, Image } from 'react-native';
import { Text, Provider, Appbar } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import React from 'react'


export default function HomePage() {

    return (

        <Provider>
            <View style={{ backgroundColor: "#1a3b52", flex: 1, alignItems: 'left', justifyContent: 'left' }}>



                <Appbar.Header style={{ backgroundColor: '#1a3b52' }}>
                    <Appbar.BackAction onPress={() => { navigation.navigate('LoginPage') }} />
                    <Appbar.Content title="Chat" />
                </Appbar.Header>



                <View style={{ flex: 8, backgroundColor: 'white', borderRadius: (0, 20, 0, 20) }}>
                    <View style={style.container} >

                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulP5xVnBaY5hgDTVw_8FSPYJaLoncICXXclgojgdeI8FmWpA_JExSysDneUBMf-8LsrA&usqp=CAU' }}
                            style={style.Image}
                        />
                        <View style={style.contect} >
                            <View style={style.row} >
                                <Text style={style.name} >Rashmi</Text>
                                <Text style={style.subtitle}>1.00pm</Text>
                            </View>
                            <Text style={style.msg}>Hellow</Text>
                        </View>

                    </View>
                    <View style={style.container} >

                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH6iuISnluiRjZFcK2h14-uxXi1US_rTPWw&usqp=CAU' }}
                            style={style.Image}
                        />
                        <View style={style.contect} >
                            <View style={style.row} >
                                <Text style={style.name} >Vishmi</Text>
                                <Text style={style.subtitle}>12.59pm</Text>
                            </View>
                            <Text style={style.msg}>Hellow</Text>
                        </View>

                    </View>
                    <View style={style.container} >

                        <Image source={{ uri: 'https://www.urbint.com/hubfs/Manny%20website-1.png' }}
                            style={style.Image}
                        />
                        <View style={style.contect} >
                            <View style={style.row} >
                                <Text style={style.name} >Ishan</Text>
                                <Text style={style.subtitle}>11.01am</Text>
                            </View>
                            <Text style={style.msg}>💝</Text>
                        </View>

                    </View>
                    <View style={style.container} >

                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvHpEOo3fTsZQkp5Hfd93YrByM9P4F944GylcXSwZ7xzop2YZo6KH7lFdu1FsdBJ3E8g&usqp=CAU' }}
                            style={style.Image}
                        />
                        <View style={style.contect} >
                            <View style={style.row} >
                                <Text style={style.name} >Binara</Text>
                                <Text style={style.subtitle}>11.15am</Text>
                            </View>
                            <Text style={style.msg}>No..</Text>
                        </View>

                    </View>

                    <View style={style.container} >

                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5O1oBaciobycIQ-xNGa7jCByeCRQ2WAX-CXgFURokThB2Syp_hM_5i1Sco-UGjjk1vw&usqp=CAU' }}
                            style={style.Image}
                        />
                        <View style={style.contect} >
                            <View style={style.row} >
                                <Text style={style.name} >Chavi</Text>
                                <Text style={style.subtitle}>10.00am</Text>
                            </View>
                            <Text style={style.msg}>Hey</Text>
                        </View>

                    </View>
                    <View style={style.container} >

                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRfpo86SB6nHTlhI0FZFHPbdDb-y_QKJuvx6ugVdIEn1chvgrONhKsaG_spVs9sxjv84&usqp=CAU' }}
                            style={style.Image}
                        />
                        <View style={style.contect} >
                            <View style={style.row} >
                                <Text style={style.name} >Chanu</Text>
                                <Text style={style.subtitle}>9.30am</Text>
                            </View>
                            <Text style={style.msg}>❤️❤️</Text>
                        </View>

                    </View>
                    <FAB
                        label="+"
                        style={style.fab}
                        onPress={() => console.log('Pressed')}
                    />
                    <View style={style.container} >

                        <Image source={{ uri: 'https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png' }}
                            style={style.Image}
                        />
                        <View style={style.contect} >
                            <View style={style.row} >
                                <Text style={style.name} >Isuru</Text>
                                <Text style={style.subtitle}>8.00am</Text>
                            </View>
                            <Text style={style.msg}>How are you😉</Text>
                        </View>

                    </View>

                    <View style={style.container} >

                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcuNsgCIWPOs6hgEKQ3w_D6ehKS_IkcM_5u5f7x4qAGCJrOJVgkDFoBpytVa8wJY2l5O4&usqp=CAU' }}
                            style={style.Image}
                        />
                        <View style={style.contect} >
                            <View style={style.row} >
                                <Text style={style.name} >Ashen</Text>
                                <Text style={style.subtitle}>7.45am</Text>
                            </View>
                            <Text style={style.msg}>Good Morning...!</Text>
                        </View>

                    </View>

                </View>
            </View >
        </Provider>
    )
}

const style = StyleSheet.create({
    pageTile: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginLeft: 50
    },
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5
    },
    Image: {
        width: 70,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    },
    contect: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,

    },
    subtitle: {
        color: 'gray',
        marginTop: 15
    },
    name: {
        flex: 1,
        color: 'black',
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 15
    },
    msg: {
        color: 'gray',
        fontWeight: "bold",
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#1a3b52'
    }
})