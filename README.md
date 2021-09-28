# react-arcgis-wmws
## React ArcGIS Online WebMap / WebScene Component

### Purpose
A proof of concept component for displaying and interacting with ArcGIS Online WebMaps and WebScenes, using the more modern ES modules based [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) library for the ArcGIS JS API v 4.x

### Installation
```shell
npm i react-arcgis-wmws
```

**Peer dependencies**
* react >=16.8
* react-dom >=16.8
* @arcgis/core >=4.18

### Use
_Viewer displaying a WebMap_
```jsx
import {Viewer} from 'react-arcgis-wmws';
<Viewer
  dimension="2d"
  itemId="f2e9b762544945f390ca4ac3671cfa72"
  style={{height:60vh}}
/>
```

_Viewer displaying a WebScene_
```jsx
import {Viewer} from 'react-arcgis-wmws';
<Viewer
  dimension="3d"
  itemId="1c7a06421a314ac9b7d0fae22aa367fb"
  style={{height:60vh}}
/>
```

_Table displaying feature data from a URL_
```jsx
import {TableView} from 'react-arcgis-wmws';
<TableView
  url="https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Chicago_Covid_Daily_Cases_Deaths_and_Hospitalizations/FeatureServer/0"
  style={{height:60vh}}
/>
```

_Table displaying feature data from an ItemId_
```jsx
import {TableView} from 'react-arcgis-wmws';
<TableView
  itemId="6aa49be79248400ebd28f1d0c6af3f9f"
  style={{height:60vh}}
/>
```

**API**

`react-arcgis-wmws` exposes two named exports:
1. `Viewer`
2. `TableView`

`Viewer` component exposes the following attributes:
* `dimension` = "2d" | "3d" (required)
* `itemId` = ArcGIS Online item ID string for a public WebMap or WebScene (required - ids for other item types will __not__ work)
* `dockPopup` = boolean - **OPTIONAL** default `true` - Should the popup be docked by default or not
* `showLegend` = boolean - **OPTIONAL** default `false` - Should a legend be shown
* `env` = "prod" (default) | "qa" | "uat" | "dev" - **OPTIONAL** (only useful to developers / applications with access to ArcGIS Online development or QA environments)

`TableView` component exposes the following attributes:
* `itemId` = ArcGIS Online item ID string for a public FeatureLayer or SceneLayer
* `url` = Fully qualified URL string to a public FeatureLayer or SceneLayer
* `layer` = Actual FeatureLayer or SceneLayer object
* `env` = "prod" (default) | "qa" | "uat" | "dev" - **OPTIONAL** (only used in conjunction with `itemId` and only useful to developers / applications with access to ArcGIS Online development or QA environments)

`TableView` **Requires** 1 and **only 1** of the following attributes `itemId`, `url`, or `layer`. Adding more than 1 of these will cause some of them to be ignored and can also result in errors.


_~~import and require are both supported~~_

_**Only** import can be used since this relies on a peer of an ES module **only** package_

```js
import {Viewer} from 'react-arcgis-wmws
```

**NOTE**

Both `Viewer` and `TableView` components __MUST__ be given a real height (something that eventually resolves to a pixel value). You can achieve this by giving it an inline-style or assigning an id and using css to style the component. You **can not** use class(es) on either the `Viewer` or `TableView` component, they will be completely removed and overwritten by the @arcgis/core library.

## Integration in your project
The `Viewer` component wraps the MapView and SceneView classes from the ArcGIS JS API. These classes bring the full power and weight of the ArcGIS JS API in order to display whatever what was configured to show in the map / scene. The `TableView` component wraps the FeatureTable widget. The initial basic styling **is** included in both the `Viewer` and `TableView` components directly. However, dynamically loaded styles, workers, and scripts can not be reasonably included directly in these components. This is why "@arcgis/core" is a peer dependency.

In order for the dynamic loading of the required parts of the ArcGIS JS API to work, you have 2 choices:
1. Load the files from a CDN.
2. Load the files from your own website.

Option #1 is the simplest and just requires that you include a CSS import statement pointing to the CSS file for the version of the ArcGIS JS API you are using and the appropriate color theme. For example, for version 4.19, you could use the following statement:

```css
@import "https://js.arcgis.com/4.19/@arcgis/core/assets/esri/themes/light/main.css";
```

If you choose to host and manage the @arcgis/core assets yourself you will need to do 2 things:
1. Copy the files from `@arcgis/core/assets` into an available location where you serve static files from.
2. Set the `assetsPath` property of `@arcgis/core/config`.

You can follow along or do something similar to the instructions at [@arcgis/core - Manage assets locally](https://www.npmjs.com/package/@arcgis/core#manage-assets-locally) for your own project.

## Development
1. Clone the repo
  ```shell
  git clone git@github.com:mpriour/react-arcgis-wmws.git
  -or-
  git clone https://github.com/mpriour/react-arcgis-wmws.git
  ```
2. cd into `react-arcgis-wmws`
3. run `npm i`
4. make changes to the "library"
5. test using Storybook
  -`npm run storybook`
6. test that it builds
  -`npm run build`
7. make a pull request to the [repo](https://github.com/mpriour/react-arcgis-wmws/pulls)
