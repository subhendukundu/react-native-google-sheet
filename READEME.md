# react-native-google-sheet

A `<GoogleSheet />` component for react-native to access Google Sheets API which gives you full control over the content and appearence of your spreadsheet data.

## Installation

```sh
npm i --save react-native-google-sheet
```

or

```sh
yarn add react-native-google-sheet
```

## Usage

```javascript
import GoogleSheet, { batchGet } from 'react-native-google-sheet';

//draws a horizontal dashed line with defaults. Also works with flex
export default function LaunchScreen() {
  const clientId = 'YOUR_CLIENT_ID';
  const GOOGLE_REDIRECT_URI = 'http://localhost';

  function _onPressButton() {
    batchGet().then(item => {
      console.log(item);
    }).catch(e => console.log(e))
  }

  return (
    <View style={[styles.mainContainer]}>
      <GoogleSheet
        credentialsDetails={{
          redirectUrl: GOOGLE_REDIRECT_URI,
          clientId,
        }}
        spreadsheetId="YOUR_SHEET_ID"
      />
      <TouchableOpacity onPress={_onPressButton}>
        <Text>Get Data</Text>
      </TouchableOpacity>
    </View>
  )
}
```

### Contribute

Help to make it better! Please see [CONTRIBUTING.md](https://github.com/subhendukundu/react-native-google-sheet/blob/master/CONTRIBUTING.md) for more details.

License

----
MIT License
