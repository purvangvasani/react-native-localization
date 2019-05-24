import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';

import en from './locales/en.json';
import hi from './locales/hi.json';
import ma from './locales/ma.json';
import fr from './locales/fr.json';

export default class App extends Component {
    state = {
        currentLanguage: RNLanguages.language
    };

    _changeLanguage = (language) => {
        this.setState({ currentLanguage: language });
    };

    render() {
        i18n.locale = this.state.currentLanguage;
        i18n.fallbacks = true;
        i18n.translations = { en, fr, hi, ma };

        return (
            <View style={styles.container}>
                <Text>{i18n.t('first')}</Text>
                <Text>{i18n.t('second', { language: i18n.currentLocale() })}</Text>
                <Button title="English" onPress={() => this._changeLanguage('en')} />
                <Button title="French" onPress={() => this._changeLanguage('fr')} />
                <Button title="Hindi" onPress={() => this._changeLanguage('hi')} />
                <Button title="Marathi" onPress={() => this._changeLanguage('ma')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});