# react-native-google-sheet

![npm (tag)](https://img.shields.io/npm/v/react-native-google-sheet/latest) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) ![GitHub top language](https://img.shields.io/github/languages/top/subhendukundu/react-native-google-sheet) ![David](https://img.shields.io/david/subhendukundu/react-native-google-sheet) [![publish size](https://badgen.net/packagephobia/publish/react-native-google-sheet)](https://badgen.net/packagephobia/publish/react-native-google-sheet)

A `<GoogleSheet />` component for react-native no native code added light weight library to access Google Sheets API which gives you full control over the content and appearence of your spreadsheet data.

No setup, no linking required, use it like a component.

This module uses [Sheet V4 API](https://developers.google.com/sheets/api/).

## Installation

```sh
npm i --save react-native-google-sheet
```

or

```sh
yarn add react-native-google-sheet
```

## Authentication

IMPORTANT: Google recently deprecated their ClientLogin (username+password)
access, so things are slightly more complicated now. Older versions of this
module supported it, so just be aware that things changed.

### Unauthenticated access (read-only access on public docs)

By default, this module makes unauthenticated requests and can therefore
only access spreadsheets that are "public".

The Google Spreadsheets Data API reference and developers guide is a little
ambiguous about how you access a "published" public Spreadsheet.

If you wish to work with a Google Spreadsheet without authenticating, not only
must the Spreadsheet in question be visible to the web, but it must also have
been explicitly published using "File > Publish to the web" menu option in
the google spreadsheets GUI.

Many seemingly "public" sheets have not also been "published" so this may
cause some confusion.

Note:  `react-native-google-sheet` doesnt support public doc access as it doesnt required a module for it. This module is notrequires. [Docs](https://developers.google.com/sheets/api/samples/reading) is enough to do so.

### OAuth2 Service Account (recommended method)

This is a 2-legged oauth method and designed to be "an account that belongs to your application instead of to an individual end user".
Use this for an app that needs to access a set of documents that you have full access to.
([read more](https://developers.google.com/identity/protocols/OAuth2ServiceAccount))

### Setup Instructions

1. Go to the [Google Developers Console](https://console.developers.google.com/apis/dashboard)
2. Select your project or create a new one (and then select it)
3. Enable the Drive API for your project
  - In the sidebar on the left, expand __APIs & auth__ > __APIs__
  - Search for "sheet"
  - Click on "Google Sheets API"
  - click the blue "Enable API" button
4. Create a service account for your project
  - In the sidebar on the left, expand __APIs & auth__ > __Credentials__
  - Click blue "Add credentials" button
  - Select the "OAuth client ID" option
  - Select the "iOS" key type option
  - Click blue "Create" button
  - Save the Client_id, that's all you need (__it is the only copy!__)

## Props

| name | desc | type | default
| --- | --- | --- | --- |
| `spreadsheetId` | Id of the spread sheet  | string [How to find the id](https://developers.google.com/sheets/api/guides/concepts) | `''`
| `credentialsDetails` | Google client details | object | {redirectUrl: '', clientId:''}

## Usage

```javascript
import GoogleSheet, { batchGet } from 'react-native-google-sheet';

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

For more, read the [API Reference](https://github.com/subhendukundu/react-native-google-sheet/blob/master/docs/Reference.md). If you're interested in contributing, check out the [Contributing Guide](https://github.com/subhendukundu/react-native-google-sheet/blob/master/CONTRIBUTING.md).

## Dependency

Just one dependency
[react-native-webview](https://github.com/react-native-community/react-native-webview)

### Contribute

Help to make it better! Please see [CONTRIBUTING.md](https://github.com/subhendukundu/react-native-google-sheet/blob/master/CONTRIBUTING.md) for more details.

License

----
MIT License
