<template>
  <v-sheet>
    <v-row class="">
      <v-col class="ma-2">
        <h1 class="fs-1-3">News</h1>
        <p>Technological News</p>
      </v-col>
    </v-row>
    <v-row
      v-if="!loading"
      v-for="(item, index) in content"
      :key="index"
      class="ma-0 pa-0"
    >
      <v-col>
        <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
          <nuxt-link
            class="nuxtlink"
            :to="{
              path: 'news/' + item.slug
            }"
          >
            <v-img v-if="item.image != null" height="250" :src="item.image">
            </v-img>
            <v-img v-else contain aspect-ratio="1.7" src="/images/default.jpg">
            </v-img>
          </nuxt-link>
          <v-card-title>
            <nuxt-link
              class="nuxtlink"
              :to="{
                path: 'news/' + item.slug
              }"
              >Title : {{ item.title }}
            </nuxt-link>
          </v-card-title>
          <v-card-text class="">
            <span>Author: {{ item.name }} </span><br />
            <span>Date : {{ item.human_date }}</span
            ><br />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      v-if="loading"
      v-for="index in 10"
      :key="index + `b`"
    >
      <v-col>
        <v-skeleton-loader
          elevation="2"
          outlined
          shaped
          tile
          class="pa-2 ma-2"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0" v-if="!(length == 10)">
      <v-col>
        <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
          <label for="" class="grey--text">Nothing Follows</label>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col>
        <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
          <v-btn
            class="white--text"
            @click="getnextarticle"
            :disabled="length == 10 ? false : true"
            :class="length == 10 ? 'green' : 'grey'"
          >
            Next Article
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script>
          ;(adsbygoogle = window.adsbygoogle || []).push({})
        </script>
        <ins
          class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-3213536425475125"
          data-ad-slot="3715096457"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  props: ['content', 'length', 'loading'],
  data: () => ({}),
  async created() {},
  mounted() {},
  computed: {},
  methods: {
    getnextarticle() {
      this.$emit('next-article')
    }
  }
}
</script>
<style scoped>
.transparent {
  background-color: blue !important;
  opacity: 0.25;
  border-color: transparent !important;
}
.nuxtlink {
  text-decoration: none;
}
</style>
