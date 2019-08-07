# Localization app in React Native

Install dependency for the app using below command:

## Dependencies of this project:

```python
npm install --save react-native-languages
npm install --save i18n-js
```

Link with react-native using below command:

```python
react-native link react-native-languages
```

Create JSON files for the languages you want to translate your app into. For example, in this project, there are 4 JSON files. 
ENGLISH, FRENCH, HINDI and MARATHI.

Import the dependency in the file and the JSON files you have created:

```python
import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';
```

Now, Add state in the current file,

```python
state = {
    currentLanguage: RNLanguages.language
};
```
In the render function, paste these lines:

```python
i18n.locale = this.state.currentLanguage;

i18n.fallbacks = true;

i18n.translations = { 
   en, fr, hi, ma    //JSON file languages
};
```

At Last, in the button onPress event pass this function

```python
onPress={() => this._changeLanguage('en')}   // Parameter will be changed on each button event       
_changeLanguage = (language) => {
     this.setState({ currentLanguage: language });
};
```
![Local English Screen](https://github.com/purvangvasani/react-native-localization/blob/master/screenshots/LocalEnglish.png?raw=true)

![Local Hindi](https://github.com/purvangvasani/react-native-localization/blob/master/screenshots/LocalHindi.png?raw=true)
