# Wanda React Components [<img src="https://svgshare.com/i/Ygj.svg" alt="Wonderflow Logo" width="90" height="90" align="right">](https://design.wonderflow.ai)

```sh
npm i @wonderflow/react-components
```

This repo contains the Wanda's UI components for React.

## Contents

This package provides multiple tools useful to build Wonderflow's digital products.

## Styles and themes

Alongside the core styles, inside the package you can find all the Wanda UI themes which you can import you your application entry point, as global css.

```jsx
import "@wonderflow/react-components/core.css";
import "@wonderflow/react-components/themes/light.css";
```

> Themes are provided in css and json formats

## Components

Once you have the core styles, which are not mandatory but **strongly** recommended, you can start to use the react components:

```jsx
import { Button } from "@wonderflow/react-components";

const MyPage = () => (
  <>
    <Button>Click me</Button>
  </>
);
```
