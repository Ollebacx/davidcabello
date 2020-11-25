<template>
<h1>
  Hello.
</h1>
<p class="h2">
    My name is not Evan You.
  </p>

 <p>
    However, I'm pretty sure we have one thing in common: we both started with little knowledge and a ton of desire.
  </p>
  <p>
    I am a web developer who recently started programming using the JavaScript framework
    <a href="https://vuejs.org" target="_blank">Vue.js</a> and now I am learning about <a href="https://angular.io/" target="_blank">Angular</a> (sorry for that, Evan).
  </p>

  <p>
    You can follow me on <a href="https://twitter.com/ollebacx" target="_blank">Twitter</a> and
    <a href="https://medium.com/@ollebacx" target="_blank">Medium</a>,
    where I am starting to write about code and 
    my work is publicly available on
    <a href="https://github.com/Ollebacx" target="_blank">GitHub</a>.
  </p>

  <p>
    Outside of programming 
    and take care of my wonderful dog,
    I enjoy sci-fi, mixed martial arts, pizza and surfing.
  </p>
    <!-- <p>
<a href="https://www.linkedin.com/in/david-cabello-oquendo/" target="_blank">David Cabello</a>.
  </p> -->
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  #app {
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: calc(10px + 0.33vw);
    -webkit-font-smoothing: antialiased;
    padding: 5vh 10vw;
    color: #121314;
    cursor: default;
  }
  h1 {
    font-size: 4.5em;
    font-weight: 500;
    margin-bottom: 0;
  }
  .h2 {
    font-size: 2.2em;
    font-weight: 500;
    line-height: 1.4;
  }
  p {
    font-size: 1.6em;
    font-weight: 300;
    line-height: 1.4;
    max-width: 26em;
  }
  a {
    text-decoration: none;
    color: #121314;
    position: relative;
  }
  a:hover {
    color: #ffffff;
    transition: color 300ms cubic-bezier(0, .8, .13, 1);
  }
  a:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 65%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 200ms cubic-bezier(0, .8, .13, 1),background-color 200ms cubic-bezier(0, .8, .13, 1);
    background-color: rgba(0, 0, 255, 0.3);
  }
  a:hover:after {
    top: 0%;
    background-color: rgba(0, 0, 255, 1);

  }

</style>
