import LocalizedStrings from 'react-native-localization';
import {AsyncStorage} from 'react-native';

const strings = new LocalizedStrings({
  'ar-EG': {
    how: 'كيف؟',
    boiledEgg: 'بيض',
    softBoiledEgg: 'بيض ليس كامل السوى',
    choice: 'اختر',
  },
  ar: {
    how: 'كيف؟',
    boiledEgg: 'بيض',
    softBoiledEgg: 'بيض ليس كامل السوى',
    choice: 'اختر',
  },
  en: {
    how: 'How do you want your egg today?',
    boiledEgg: 'Boiled egg',
    softBoiledEgg: 'Soft-boiled egg',
    choice: 'How to choose the egg',
  },
});
export let retrieveLanguage = async () => {
  try {
    const value = await AsyncStorage.getItem('@Language');
    console.log(value);
    strings.setLanguage(value === null ? 'ar' : value);
  } catch (error) {
    strings.setLanguage('ar');
  }
};
export default strings;
