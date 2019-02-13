# Oh Dear JS SDK

This SDK lets you perform API calls to [Oh Dear](https://ohdear.app/).

## Documentation

### List of contents
- <a href="#installation">Installation</a>
- <a href="#authentication">Authentication</a>
- <a href="#sites">Sites</a>
    - <a href="#sites-list">Get all sites in your account</a>
    - <a href="#site-by-id">Get site by id</a>
    - <a href="#site-by-url">Get site by url</a>
    - <a href="#create-site">Create new site</a>
    - <a href="#delete-site">Delete a site</a>
    - <a href="#site-object">The `Site` Object</a>
- <a href="#checks">Checks</a>
    - <a href="#enable-check">Enabling a check</a>
    - <a href="#disable-check">Disabling a check</a>
    - <a href="#request-check">Request a check run</a>
- <a href="#uptime">Uptime</a>
    - <a href="#uptime-object">Uptime Object</a>
- <a href="#downtime">Downtime</a>
    - <a href="#downtime-object">Downtime Object</a>
- <a href="#brokenLinks">BrokenLinks</a>
    - <a href="#brokenlink-object">BrokenLink Object</a>
- <a href="#mixedContent">MixedContent</a>
    - <a href="#mixedContent-object">MixedContent Object</a>
- <a href="#certificateHealth">Certificate Health</a>
    - <a href="#certificateHealth-object">CertificateHealth Object</a>
- <a href="#errors">Errors</a>

### Installation <a id="installation" style="color: red">#</a>
Using npm:
```
npm install ohdear-js-sdk
```
and then import `OhDear` from `ohdear-js-sdk`
```js
import OhDear from 'ohdear-js-sdk'
```

<hr />

### Authentication <a id="authentication" style="color: red">#</a>
1. Get your **api token** from your ohdear app, Please, refer to [this link](https://ohdear.app/docs/api/authentication) for more information.
2. create new instance from `OhDear` and pass the **api token** via the constructor.
```js
const ohdear = new OhDear(token)
```

<hr />

### Sites <a id="sites" style="color: red">#</a>
Get, create or delete site

#### Get all sites in your account <a id="sites-list" style="color: red">#</a>
`ohdear.sites(options)`: list all your sites in your account, This will return a promise that resolves with an array of `Site` or rejects with an <a href="#errors" style="color: red">error</a>.

the `Site` <a id="site-object" style="color: red">#</a> object has the following properties
```
id: ...
url: '...',
sortUrl: '...',
checks: [
    {
        id: ...,
        type: '...',
        label: '...',
        enabled: true|false
    }
]
```

The `options` object have the following structure:
``` js
options = {
    page: {
        size: 1,
        number: 200
    },
    sort: null,
    filter: {
        teamID: null
    }
}
```
You're allowd to use `sites` method without providing any parameters. To know more about the provided parameters, please refer to [this link](https://ohdear.app/swagger#/sites/get_sites).

#### Get site by id <a id="site-by-id" style="color: red">#</a>
`ohdear.site(siteID)` : It will return a promise that resolves with `Site` object or rejects with an <a href="#errors" style="color: red">error</a>.

#### Get site by url <a id="site-by-url" style="color: red">#</a>
`ohdear.siteByUrl(url)` : It will return a promise that resolves with `Site` object or rejects with an <a href="#errors" style="color: red">error</a>.

#### Create new site <a id="create-site" style="color: red">#</a>
`ohdear.createSite(url, teamID)`: let's you add a site through SDK, `url` is the new site url while `teamID` is your team id. It will return a promise that resolves with `Site` object or rejects with an <a href="#errors" style="color: red">error</a>.

#### Delete a site <a id="delete-site" style="color: red">#</a>
`ohdear.deleteSite(id)` where `id` is the site ID, It will return a promise that resolves with boolean or rejects with an <a href="#errors" style="color: red">error</a>.

<hr />

### Checks <a id="checks" style="color: red">#</a>
manage the Oh Dear! checks per site

#### Enabeling a check <a id="enable-check" style="color: red">#</a>
`ohdear.enableCheck(id)` where `id` is the check id, It will return a promise that resolves with boolean or rejects with an <a href="#errors" style="color: red">error</a>.

#### Disabling a check <a id="disable-check" style="color: red">#</a>
`ohdear.disableCheck(id)` where `id` is the check id, It will return a promise that resolves with boolean or rejects with an <a href="#errors" style="color: red">error</a>.

#### Request a check run <a id="request-check" style="color: red">#</a>
If you want Oh Dear! to perform a specific check now, call the `requestRun(id)` method

`ohdear.requestRun(id)` where `id` is the check id, It will return a promise that resolves with boolean or rejects with an <a href="#errors" style="color: red">error</a>.

<hr />

### Uptime <a id="uptime" style="color:red">#</a>
`ohdear.uptime(id, startedAt, endedAt, split='day')` lets you get uptime for site, The method expects four parameters
- `id`: site id.
- `startedAt`: a date in the form of `YmdHis` that determines the start of the range you want to get uptime for.
- `endedAt`: a date in the form of `YmdHis` that determines the start of the range you want to get uptime for.
- `split`: a string that determines how fine grained the answer periods should be. Valid values are `hour`, `day` and `month`.

It will return a promise that resolves with an array of `Uptime` objects or rejects with an <a href="#errors">error</a>.

the `Uptime` <a id="uptime-object" style="color:red">#</a> object has the following properties
```js
{
    datetime: '...',
    uptimePercentage: ...
}
```

<hr />

### Downtime <a id="downtime" style="color:red">#</a>
`ohdear.downtime(id: number, startedAt: string, endedAt: string)` lets you get downtime for site, The method expects three parameters
- `id`: site id.
- `startedAt`: a date in the form of `YmdHis` that determines the start of the range you want to get uptime for.
- `endedAt`: a date in the form of `YmdHis` that determines the start of the range you want to get uptime for.

It will return a promise that resolves with an array of `Downtime` objects or rejects with an <a href="#errors">error</a>.

the `Downtime` <a id="downtime-object" style="color:red">#</a> object has the following properties
```js
{
    startedAt: '...',
    endedAt: '...',
}
```

<hr />

### Broken Links <a id="brokenLinks" style="color:red">#</a>
`ohdear.brokenLinks(id)` where `id` is the site id, lets you get list of broken links in the site. It will return a promise that resolves with and array of `BrokenLink` objects or rejects with an <a href="#errors" style="color: red">error</a>.

the `BrokenLink` <a id="brokenlink-object" style="color:red">#</a> object has the following properties
```
{
    statusCode: ...,
    crawledUrl: '...',
    foundOnUrl: '...'
}
```

<hr />

### Mixed Content <a id="mixedContent" style="color:red">#</a>
`ohdear.mixedContent(id)` where `id` is the site id, . It will return a promise that resolves with and array of `MixedContent` objects or rejects with an <a href="#errors" style="color: red">error</a>.

the `MixedContent` <a id="mixedContent-object" style="color:red">#</a> object has the following properties
```
{
    elementName: '...',
    mixedContentUrl: '...',
    foundOnUrl: '...'
}
```

<hr />

### Certificate Health <a id="certificateHealth" style="color:red">#</a>
`ohdear.certificateHealth(id)` where `id` is the site id, . It will return a promise that resolves with and array of `CertificateHealth` objects or rejects with an <a href="#errors" style="color: red">error</a>.

the `CertificateHealth` <a id="certificateHealth-object" style="color:red">#</a> object has the following properties
```
{
    //The details of the certificate that was found for the site.
    certificateDetails: {
        issuer: '...',
        valid_from: '...',
        valid_until: '...',
    } ,

    //An array of checks that were performed on the certificate
    certificateChecks: [
        {
            type: '...',
            label: '...'
            passed: '...'
        },
        ...
    ],

    //An array with all the issuer names in the chain of the certificate.
    certificateChainIssuers: ['...', '...']
}
```

<hr />

### Errors <a id="errors" style="color: red">#</a>
All available methods will return a Promise that will reject with different types of errors when an error occurs, here's the list of available errors. All errors has a `code` property that identifies the error.

Here's a list of error with their properties

#### FailedActionError
thrown when method fails getting the data
```js
{
    code: 400,
    message: '...'
}
```

#### ValidationError
thrown when there's a validation error
```js
{
    code: 422,
    message: '...'
    errors: [] // an array of errors
}
```

#### NotFoundError
thrown when site or check was not found
```js
{
    code: 404,
    message: '...'
}
```

#### UnknownError
thrown when some unknown error happens
```js
{
    code: 0,
    message: '...'
}
```

## Credits
- [Mohammed Manssour](https://mohammedmanssour.me)

## License
The MIT License (MIT).