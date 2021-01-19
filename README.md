# vue-svg-img
A super light weight and fast vue plugin for injecting svg as inline on runtime

# Install

## yarn 
```sh 
 yarn add vue-img-svg
```

## npm 
```sh 
 npm i vue-img-svg
```

# Usage 

## vue 2
```js 
    import vueSvgImg from 'vue-img-svg'

    Vue.use(vueSvgImg)
```;

## vue 3
```js 
    import vueSvgImg from 'vue-img-svg'
    createApp(App)
    .use(vueSvgImg)
    ...
    .mount('#app');
```;

## Using in template
```html
    <img-svg src="https://libertypie.com/assets/img/logo.svg" class="logo" />
```