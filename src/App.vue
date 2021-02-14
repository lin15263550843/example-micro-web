<template>
    <div id="micro-app">
        <router-view />
    </div>
</template>

<style lang="scss">
#micro-app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
}

body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Microsoft YaHei, Arial, sans-serif;
}
html {
    width: 100%;
    height: 100%;
    font-size: 10px;
}
* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
// @media only screen and (min-width: 1367px) {
//     html {
//         font-size: 6px;
//     }
// }
// @media only screen and (min-width: 1441px) {
//     html {
//         font-size: 8px;
//     }
// }
// @media only screen and (min-width: 1601px) {
//     html {
//         font-size: 8px;
//     }
// }
// @media only screen and (min-width: 1681px) {
//     html {
//         font-size: 10px;
//     }
// }
// @media only screen and (min-width: 1921px) {
//     html {
//         font-size: 12px;
//     }
// }
// @media only screen and (min-width: 2561px) {
//     html {
//         font-size: 18px;
//     }
// }
// @media only screen and (min-width: 4097px) {
//     html {
//         font-size: 36px;
//     }
// }
</style>
