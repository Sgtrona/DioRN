import React from 'react'; 
import {View,Image,Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/43658661?v=4';
const colorFonteGitHub = '#C99D1D9';
const colorDarkFontGithub = '#4F565E';
const urlGithub = 'https://github.com/Sgtrona';

const App = () =>{
    const handlePressGoToGithub = async ()=>{
        console.log('verificando link');
        const res = await Linking.canOpenURL(urlGithub);
            if(res){
                console.log('Aprovado');
                console.log('abrindo link...');
                await Linking.openURL(urlGithub);
            }
    }
    return (
        <SafeAreaView style ={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
            <View style ={style.content}>
                <Image 
                accessibilityLabel= "Luiz Github" 
                style = {style.avatar} 
                source = {{uri: imageProfileGithub}}/>

                <Text
                accessibilityLabel= "Nome: Luiz Felipe"
                style={[style.defaultText,style.name]}>
                Luiz Felipe
                </Text>


                <Text 
                accessibilityLabel= "Nickname: Luiz Felipe"
                style={[style.defaultText,style.nickname]}>
                Sgtrona
                </Text>

                <Text 
                accessibilityLabel= "Descrição: Estudante de Licenciatura em Computação/ UFRPE"
                style={[style.defaultText,style.description]}>
                Estudante de Licenciatura em Computação/ UFRPE
                </Text>
                <Pressable onPress ={handlePressGoToGithub}>
                <View style ={style.button}>
                    <Text style = {[style.defaultText,style.textButton]}>Open in Github</Text>
                </View>
                </Pressable>
        </View>
    </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //expandir a cor para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFonteGitHub,
    },
    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },


});