<template>
  <v-sheet class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col cols="12" class="pa-0 ma-0 ">
        <h1
          class="ma-0 mt-0 pt-0 blue--text text--darken-5 text--darken-5 font-roboto fs-1-5"
        >
          Blog
        </h1>
        <p>Relevent Personal Blogs about programming and events</p>
      </v-col>
    </v-row>
    <v-row v-for="(item, index) in content" :key="index" class="ma-0 pa-0">
      <v-col cols="12" class="pa-0 ma-0 pt-3 pb-3">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            elevation="2"
            outlined
            shaped
            tile
            class=" ma-1 mr-2"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
          >
            <!-- <nuxt-link
              class="nuxtlink"
              :to="{
                path: '/blog/' + item.slug
              }"
            >
              <v-img
                v-if="item.image != null"
                gradient="to top right, rgba(0,0,201,.1), rgba(0,0,72,.2)"
                :src="item.image"
                max-height="300"
                aspect-ratio="1.4"
              >
              </v-img>
              <v-img
                gradient="to top right, rgba(0,0,201,.1), rgba(0,0,72,.2)"
                v-else
                aspect-ratio="1.9"
                max-height="300"
                src="/images/default.jpg"
              >
              </v-img>
            </nuxt-link> -->
            <v-card-subtitle class="pa-0 ma-0 ml-1">
              <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip
                  :to="`${path}/tags/${itm}`"
                  v-for="(itm, index) in item.tags"
                  :key="index"
                  color="blue"
                  class="white--text"
                  >{{ itm }}
                </v-chip>
              </v-chip-group>
            </v-card-subtitle>
            <v-card-title class="pa-0 ma-0 ml-1  adj-title">
              <h2 color="dark" class="title1 fs-1 line-clamp-2">
                <nuxt-link
                  class="nuxtlink"
                  target="_blank"
                  :to="{
                    path: '/blog/' + item.slug
                  }"
                >
                  {{ item.title
                  }}<v-icon small color="blue"
                    >mdi-arrow-top-right-thick</v-icon
                  >
                </nuxt-link>
              </h2>
            </v-card-title>
            <v-card-subtitle class="pa-1 ma-0  adj-title" v-if="item.headline">
              <p class="mb-0  line-clamp-1">{{ item.headline }}</p>
            </v-card-subtitle>
            <v-card-text class="">
              <!-- <v-card flat class="d-inline-flex d-flex flex-column mr-2"> -->
              <v-avatar
                size="37"
                v-if="item.profile_picture != null"
                class="d-inline-flex mt-4"
              >
                <img :src="item.profile_picture" alt="" />
              </v-avatar>

              <v-avatar
                v-else
                color="blue"
                size="37"
                class=" white--text d-inline-flex  mt-4"
              >
                {{ item.name.charAt(0).toUpperCase() }}
              </v-avatar>
              <!-- </v-card> -->
              <v-card flat class="d-inline-flex d-flex flex-column mr-5">
                <v-card flat><b>Author :</b> {{ item.name }}</v-card>
                <v-card flat><b>Published :</b> {{ item.created }}</v-card>
              </v-card>
              <v-card flat class="d-inline-flex d-flex  flex-column mr-5 ">
                <!-- <v-card flat
                  ><v-icon>mdi-eye</v-icon> {{ item.pageview }}</v-card
                > -->
                <v-card flat
                  ><span>
                    <b>Last Validated on :</b> {{ item.updated }}
                  </span></v-card
                >
              </v-card>
              <v-card flat class="d-inline-flex d-flex  flex-column mr-5 ">
                <v-card flat
                  ><v-icon>mdi-eye</v-icon> {{ item.pageview }}</v-card
                >
                <!-- <v-card flat
                  ><span>
                    <b>Last Validated on :</b> {{ item.updated }}
                  </span>
                  </v-card
                > -->
              </v-card>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined rounded text>
                <nuxt-link
                  color="blue"
                  class="nostyle blue--text"
                  style="text-decoration:none"
                  target="_blank"
                  :to="{
                    path: '/blog' + '/' + item.slug
                  }"
                >
                  visit page
                  <v-icon small color="blue">mdi-arrow-top-right-thick</v-icon>
                </nuxt-link>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row v-if="loading" v-for="index in 10" :key="index + `b`">
      <v-col cols="12" class="pa-0 ma-0 pt-2 pr-2">
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
      <v-col cols="12" class="pa-0 ma-0 pt-2 pr-2">
        <v-card elevation="2" outlined shaped tile class="pa-2 ma-0">
          <label for="" class="grey--text">Nothing Follows</label>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0 mb-3">
      <v-col cols="12" class="pa-0 ma-0 pt-2 pr-2">
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
  </v-sheet>
</template>

<script>
export default {
  props: ['content', 'length', 'loading'],
  data: () => ({
    selection: '',
    path: '/blog'
  }),
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
