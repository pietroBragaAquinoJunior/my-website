<template>
  <div>
    <span v-text="t$('clock.name')"></span>
    <div>
      <a
        href="https://en.wikipedia.org/wiki/Clock_angle_problem"
        target="_blank"
        rel="noopener noreferrer"
        v-text="t$('clock.wikipedia')"
      ></a>
    </div>

    <div class="circle">
      <div class="inner-circle">
        <div class="holder"></div>
        <div :style="hourStyle">
          <div class="hour-bar"></div>
        </div>
        <div :style="minuteStyle">
          <div class="minute-bar"></div>
        </div>
        <div :style="secondStyle">
          <div class="second-bar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./clock.component.ts"></script>

<style lang="css" scoped>
.circle {
  background: rgb(197, 197, 197);
  width: 200px;
  height: 200px;
  border-radius: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-circle {
  background-image: url('/content/images/relogio.png');
  background-size: cover;
  width: 175px;
  height: 175px;
  border-radius: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.holder {
  width: 7px;
  height: 7px;
  background: black;
  position: absolute;
  z-index: 99;
  border-radius: 75%;
}

.hour-bar {
  width: 5px;
  height: 45px;
  margin-bottom: 45px;
  background: black;
  border-radius: 25px;
}

.minute-bar {
  width: 3px;
  height: 60px;
  margin-bottom: 60px;
  background: black;
  border-radius: 25px;
}

.second-bar {
  width: 1px;
  height: 75px;
  margin-bottom: 75px;
  background: black;
  border-radius: 25px;
}
</style>
