<script>
import 'vue-material/dist/vue-material.css'

</script>

<template>
  <div>
    <md-toolbar>
      <h1 class="md-title">コーダードージョー小平　ニンジャ申し込みシステム</h1>
    </md-toolbar>

    <div class="phone-viewport">
      <md-layout md-gutter md-align="center">
        <md-layout md-flex-xsmall="100" md-flex-small="45" md-flex-medium="45" md-flex-large="45">
          <md-list>
            <md-list-item>
              <md-icon class="md-primary">child_care</md-icon>

              <div class="md-list-text-container">
                <span>通常練習会#65</span>
                <span>2017年12月15日</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>star_border</md-icon>
              </md-button>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-icon class="md-primary">free_breakfast</md-icon>

              <div class="md-list-text-container">
                <span>週末スペシャル#5</span>
                <span>2017年12月15日</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>star_border</md-icon>
              </md-button>

              <md-divider class="md-inset"></md-divider>

            </md-list-item>

          </md-list>
        </md-layout>
      </md-layout>
    </div>
    
  </div>
</template>

<style lang="scss">
.main-content {
  padding: 16px;
}
</style>