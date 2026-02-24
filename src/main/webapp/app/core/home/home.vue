<template>
  <div class="home row">
    <div class="col-md-3">
      <span class="hipster img-fluid rounded"></span>
    </div>
    <div class="col-md-9">
      <h1 class="display-4" v-text="t$('home.title')"></h1>
      <p class="lead" v-text="t$('home.subtitle')"></p>
      <p class="lead" v-text="t$('home.moreInfo')"></p>

      <div>
        <div class="alert alert-success" v-if="authenticated">
          <span v-if="username" v-text="t$('home.logged.message', { username })"></span>
        </div>

        <!-- <div class="alert alert-warning" v-if="!authenticated">
          <span v-text="t$('global.messages.info.authenticated.prefix')"></span>
          <a class="alert-link" @click="showLogin()" v-text="t$('global.messages.info.authenticated.link')"></a><span
            v-html="t$('global.messages.info.authenticated.suffix')"></span>
        </div>
        <div class="alert alert-warning" v-if="!authenticated">
          <span v-text="t$('global.messages.info.register.noaccount')"></span>&nbsp;
          <router-link class="alert-link" to="/register"
            v-text="t$('global.messages.info.register.link')"></router-link>
        </div> -->
      </div>

      <p>
        <span v-text="t$('home.like')"></span>
        <a
          href="https://github.com/pietroBragaAquinoJunior/my-website"
          target="_blank"
          rel="noopener noreferrer"
          v-text="t$('home.github')"
        ></a
        >!
      </p>
    </div>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
