import React from "react";
import { View, Text, ScrollView } from "react-native"; 

function Home () {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ScrollView>
                <Text>Tela Home!</Text>
            </ScrollView>
        </View>
    ) 
}

export default Home;