import React from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet,Image, TouchableOpacity } from "react-native"; 



function Home () {
    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.bemVindo}>BEM-VINDO</Text>

            <TouchableOpacity>
                <Image source={require('../../assets/iconedeturmas.png')} style={styles.Icons}/>
                    <Text style={styles.imageText}>TURMAS</Text>
            </TouchableOpacity>
        
            <TouchableOpacity>
                <Image source={require('../../assets/iconedefrequencia.png')} style={styles.Icons}/>
                    <Text style={styles.imageText}>FREQUENCIA</Text>
            </TouchableOpacity>
                
            <TouchableOpacity>
                <Image source={require('../../assets/iconederelatorio.png')} style={styles.Icons}/>
                    <Text style={styles.imageText}>RELATÓRIO</Text>
            </TouchableOpacity>
           
            </ScrollView>
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create ({
    scrollViewContent: {
      alignItems: 'center',
      paddingBottom: 20
    },
    
    bemVindo: {
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    Icons: {
        width: 220,
        height: 205, 
        marginVertical: 60,
    },
    imageText: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 3,
        fontWeight: 'bold'
    }
})

export default Home;