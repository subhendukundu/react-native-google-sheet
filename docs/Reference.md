# React Native Google Sheet API Reference

This document lays out the current avaialbe methods for [google sheet](https://developers.google.com/sheets/api/).

## Props Index

- [`spreadsheetId`](Reference.md#spreadsheetId)
- [`credentialsDetails`](Reference.md#credentialsDetails)

## Methods Index

- [`append`](Reference.md#append)
- [`batchClear`](Reference.md#batchClear)
- [`batchClearByDataFilter`](Reference.md#batchClearByDataFilter)
- [`batchGet`](Reference.md#batchGet)
- [`batchGetByDataFilter`](Reference.md#batchGetByDataFilter)
- [`batchUpdate`](Reference.md#batchUpdate)
- [`batchUpdateByDataFilter`](Reference.md#batchUpdateByDataFilter)
- [`clear`](Reference.md#clear)
- [`get`](Reference.md#get)
- [`update`](Reference.md#update)

---

# Reference

## Props

### `spreadsheetId`

The ID of the spreadsheet (from its URL). Not able to find the id? [Try this](https://stackoverflow.com/questions/36061433/how-to-do-i-locate-a-google-spreadsheet-id).

For example-
`https://docs.google.com/spreadsheets/d/1qpyC0XzvTcKT6EISywvqESX3A0MwQoFDE8p-Bll4hps/edit#gid=0`.

The ID of this spreadsheet is `1qpyC0XzvTcKT6EISywvqESX3A0MwQoFDE8p-Bll4hps`.

| Type   | Required |
| ------ | -------- |
| string | Yes      |

---

### `credentialsDetails`

Credentials details object is passed to login the user.

- clientId -- The private id gerenrated using [Authentication](https://github.com/subhendukundu/react-native-google-sheet#unauthenticated-access-read-only-access-on-public-docs).
- redirectUrl -- your service account's email address

The default value is

```javascript
{
    clientId: '',
    redirectUrl: 'https://localhost'
}
```

| Type                                                               | Required |
| ------------------------------------------------------------------ | -------- |
| object: {clientId: string, redirectUrl: string} | Yes       |
---

## Methods

### `append(Object)`

Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table.

Method's can take in an object with following keys

```javascript
{
    valueInputOption: 'RAW',
    insertDataOption:'',
    includeValuesInResponse: ''
    responseValueRenderOption: ''
    range: 'A1',
    responseDateTimeRenderOption: '',
    data = {
        "values": [
    ]}
}
```

For Example:

```javascript
import GoogleSheet, { append } from 'react-native-google-sheet';
const param = {
    valueInputOption: 'RAW',
    range = 'A1',
    data = {
        "values": [
            [
            100020
            ]
        ]
    }
}
append(param);
```

To learn more, read the [Method: spreadsheets.values.append](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append) guide.

### `batchClear(Object)`

Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.

Method's can take in an object with following keys

```javascript
{
    data = {
        "ranges": [
            ""
        ]
    }
}
```

For Example:

```javascript
import GoogleSheet, { batchClear } from 'react-native-google-sheet';
const param = {
    data = {
        "ranges": [
            ""
        ]
    }
}
batchClear(param);
```

To learn more, read the [Method: spreadsheets.values.batchClear](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchClear) guide.

### `batchClearByDataFilter(Object)`

Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more [DataFilters](https://developers.google.com/sheets/api/reference/rest/v4/DataFilter). Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.

Method's can take in an object with following keys

```javascript
{
    data = {
        "dataFilters": [
            {}
        ]
    }
}
```

For Example:

```javascript
import GoogleSheet, { batchClearByDataFilter } from 'react-native-google-sheet';
const param = {
    data = {
        "dataFilters": [
            {}
        ]
    }
}
batchClearByDataFilter(param);
```

To learn more, read the [Method: spreadsheets.values.batchClearByDataFilter](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchClearByDataFilter) guide.

### `batchGet(Object)`

Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.

Method's can take in an object with following keys

```javascript
{
    dateTimeRenderOption: '',
    majorDimension: '',
    ranges: '',
    valueRenderOption: ''
}
```

For Example:

```javascript
import GoogleSheet, { batchGet } from 'react-native-google-sheet';
const param = {
    ranges:'A:Z'
}
batchGet(param);
```

To learn more, read the [Method: spreadsheets.values.batchGet](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchGet) guide.

### `batchGetByDataFilter(Object)`

Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more [DataFilters](https://developers.google.com/sheets/api/reference/rest/v4/DataFilter). Ranges that match any of the data filters in the request will be returned.

Method's can take in an object with following keys

```javascript
{
    data = {
        "dataFilters": [
            {}
        ]
    }
}
```

For Example:

```javascript
import GoogleSheet, { batchGetByDataFilter } from 'react-native-google-sheet';
const param = {
    data: {}
}
batchGetByDataFilter(param);
```

To learn more, read the [Method: spreadsheets.values.batchGetByDataFilter](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchGetByDataFilter) guide.

### `batchUpdate(Object)`

Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a [valueInputOption](https://developers.google.com/sheets/api/reference/rest/v4/ValueInputOption), and one or more [ValueRanges](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values#ValueRange).

Method's can take in an object with following keys

```javascript
{
    data: {}
}
```
Data an object of [ValueRange](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values#ValueRange)

For Example:

```javascript
import GoogleSheet, { batchUpdate } from 'react-native-google-sheet';
const param = {
    data: {
        "data": [
            {
            "values": [
                [
                1000,
                1009
                ]
            ]
            }
        ]
    }
}
batchUpdate(param);
```

To learn more, read the [Method: spreadsheets.values.batchUpdate](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate) guide.

### `batchUpdateByDataFilter(Object)`

Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a [valueInputOption](https://developers.google.com/sheets/api/reference/rest/v4/ValueInputOption), and one or more [ValueRanges](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values#ValueRange).

Method's can take in an object with following keys

```javascript
{
    data: {}
}
```

For Example:

```javascript
import GoogleSheet, { batchUpdateByDataFilter } from 'react-native-google-sheet';
const param = {
    data: {
        "data": [
            {
            "values": [
                [
                1000,
                1009
                ]
            ]
            }
        ]
    }
}
batchUpdateByDataFilter(param);
```

To learn more, read the [Method: spreadsheets.values.batchUpdateByDataFilter](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdateByDataFilter) guide.

### `clear(Object)`

Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.

Method's can take in an object with following keys

```javascript
{
    range: ''
    data: {}
}
```

For Example:

```javascript
import GoogleSheet, { clear } from 'react-native-google-sheet';
const param = {
    range: 'A:C'
    data: {}
}
clear(param);
```

To learn more, read the [Method: spreadsheets.values.clear](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/clear) guide.

### `get(Object)`

Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.

Method's can take in an object with following keys

```javascript
{
    range: '',
    dateTimeRenderOption: '',
    majorDimension: '',
    valueRenderOption: ''
}
```

For Example:

```javascript
import GoogleSheet, { get } from 'react-native-google-sheet';
const param = {
    range: 'A:C'
}
get(param);
```

To learn more, read the [Method: spreadsheets.values.get](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get) guide.

### `update(Object)`

Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.

Method's can take in an object with following keys

```javascript
{
    range: '',
    includeValuesInResponse: '',
    responseDateTimeRenderOption: '',
    responseValueRenderOption: '',
    valueInputOption: '',
    data: {}
}
```

For Example:

```javascript
import GoogleSheet, { update } from 'react-native-google-sheet';
const param = {
    range: 'A1',
    valueInputOption: 'RAW',
    data: {
        values: [
            [
                39900,
                29002
            ]
        ]
    }
}
update(param);
```

To learn more, read the [Method: spreadsheets.values.update](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update) guide.
