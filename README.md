# react-arcgis-wmws
## React ArcGIS Online WebMap / WebScene Component

### Purpose
A proof of concept component for displaying and interacting with ArcGIS Online WebMaps and WebScenes, using the more modern ES modules based [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) library for the ArcGIS JS API v 4.x

### Installation
```shell
npm i react-arcgis-wms
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
/>
```

_Viewer displaying a WebScene_
```jsx
import {Viewer} from 'react-arcgis-wmws';
<Viewer
  dimension="3d"
  itemId="1c7a06421a314ac9b7d0fae22aa367fb"
/>
```

**API**

`react-arcgis-wmws` exposes a single named export of `Viewer`.

`Viewer` component exposes the following attributes:
* `dimension` = "2d" | "3d" (required)
* `itemId` = {ArcGIS Online item ID for a public WebMap or WebScene} (required - ids for other item types will __not__ work)
* `env` = "prod" (default) | "qa" | "uat" | "dev" - **OPTIONAL** (only useful to developers / applications with access to ArcGIS Online development or QA environments)

_import and require are both supported_
```js
import {Viewer} from 'react-arcgis-wmws
```
-or-
```js
const {Viewer} = require('react-arcgis-wmws')
```

**NOTE**

`Viewer` component __MUST__ be given a real height (something that eventually resolves to a pixel value). You can achieve this by giving it an inline-style or assigning an id and using css to style the component. You **can not** use class(es) on the `Viewer` component, they will be completely removed and overwritten by the @arcgis/core library.

## Integration in your project
The `Viewer` component wraps the MapView and SceneView classes from the ArcGIS JS API. These classes bring the full power and weight of the ArcGIS JS API in order to display whatever what was configured to show in the map / scene. The initial basic styling **is** included in the `Viewer` component directly. However, dynamically loaded styles, workers, and scripts can not be reasonably included directly in the `Viewer` component. This is why "@arcgis/core" is a peer dependency.

In order for the dynamic loading of the required parts of the ArcGIS JS API to work, you need to do 2 things:
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
