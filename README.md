# Intro
A super light weight and fast vue plugin for injecting svg as inline on runtime

# Install

## yarn 
```sh 
 yarn add @libertypie/vue-svg-img
```

## npm 
```sh 
 npm i @libertypie/vue-svg-img
```

# Usage 

## vue 2
```js 
    import vueSvgImg from 'vue-img-svg'

    Vue.use(vueSvgImg)
```

## vue 3
```js 
    import vueSvgImg from 'vue-img-svg'
    createApp(App)
    .use(vueSvgImg)
    ...
    .mount('#app');
```

## Using in template
```html
    <img-svg src="https://libertypie.com/assets/img/logo.svg" class="logo" />
```