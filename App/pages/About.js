
import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    Image,
    View,
    Platform,
    BackAndroid,
} from 'react-native';


import Colors from '../common/Colors';

export default class About extends Component {
    render() {
        return(
            <View style={styles.background}>
                <View style={styles.phone}>
                    <Text style={styles.phoneText}>这是一个学习demo</Text>
                    <Text style={styles.phoneNumber}>就是这样</Text>
                </View>
                <Text style={styles.endText}>@YanYujiangnan</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: Colors.mainBackground,
    },
    phone:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    phoneText:{
        marginTop: 5,
        color: '#999',
        fontSize: 14,
    },
    phoneNumber:{
        color: '#e55500',
        fontSize: 16,
        marginTop: 10,
    },
    endText: {
        fontSize: 12,
        color: '#999',
        alignSelf: 'center',
        marginBottom: 40,
    }

});
