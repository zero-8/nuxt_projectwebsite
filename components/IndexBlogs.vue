<template>
  <v-container fluid class="tag-border">
    <v-row>
      <v-col class="ml-0 pl-0  mb-0 pb-0">
        <nuxt-link to="/blog">
          <h2 class="ma-0 mt-0 pt-0 orange--text text--darken-5">
            Blogs<v-icon color="orange" large>mdi-menu-right</v-icon>
            <!-- <span v-if="blogs_total"> ({{ blogs_total }} articles)</span> -->
          </h2>
        </nuxt-link>
      </v-col>
    </v-row>

    <IndexWidget :content="blogs_content" path="/blog" />

    <v-row v-if="blogs_load">
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        cols="12"
        class="ml-0 pl-0  mb-0 pb-0"
      >
        <SkeletonCard />
      </v-col>
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        cols="12"
        class="ml-0 pl-0  mb-0 pb-0"
      >
        <SkeletonCard />
      </v-col>
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        cols="12"
        class="ml-0 pl-0  mb-0 pb-0"
      >
        <SkeletonCard />
      </v-col>
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        cols="12"
        class="ml-0 pl-0  mb-0 pb-0"
      >
        <SkeletonCard />
      </v-col>
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        cols="12"
        class="ml-0 pl-0  mb-0 pb-0"
      >
        <SkeletonCard />
      </v-col>
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        cols="12"
        class="ml-0 pl-0  mb-0 pb-0"
      >
        <SkeletonCard />
      </v-col>
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        cols="12"
        class="ml-0 pl-0  mb-0 pb-0"
      >
        <SkeletonCard />
      </v-col>
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        cols="12"
        class="ml-0 pl-0  mb-0 pb-0"
      >
        <SkeletonCard />
      </v-col>
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        cols="12"
        class="ml-0 pl-0  mb-0 pb-0"
      >
        <SkeletonCard />
      </v-col>
      <v-col
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        cols="12"
        class="ml-0 pl-0  mb-0 pb-0"
      >
        <SkeletonCard />
      </v-col>
    </v-row>

    <v-row class="ma-0 pa-0 mb-3">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        class="pa-0 ma-0 pt-2"
      >
        <v-card flat class="pa-2 ma-0">
          <v-btn
            class="white--text"
            @click="getnextarticle"
            :disabled="blogs_total == 10 ? false : true"
            :class="blogs_total == 10 ? 'green' : 'grey'"
          >
            Next Article
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ['blogs_load', 'blogs_content', 'blogs_total'],
  data: () => ({
    transparent: 'rgba(255, 255, 255, 0)',
    selection: 0,
    content: [],
    news: [],
    posts: [],
    nuxt: [],
    selectedItem: 0,
    show: true,
    title: '',
    model: 6,
    rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
    links: [],
    posts_content: 0,
    news_content: 0
  }),
  async mounted() {},
  methods: {
    getnextarticle() {
      this.$emit('next-article')
    }
  }
}
</script>
<style scoped>
.dont-break-out {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
.font-lulu {
  font-family: 'Lulu', sans-serif;
}
.font-halimun {
  font-family: 'Halimun', sans-serif;
}

.font-barlowreg {
  font-family: 'Barlow-Regular', sans-serif;
}

.title1 {
  text-decoration: none;
}
.v-application a {
  color: rgb(66, 77, 238);
  text-decoration: none;
}

.adj-title {
  min-height: 2rem;
  line-height: 1rem;
  margin: 0px;
  padding: 0px;
}

.hr-blue {
  border: 3px solid blue;
}
.hr-red {
  border: 3px solid red;
}
.hr-orange {
  border: 3px solid orange;
}
.hr-black {
  border: 3px solid black;
}
/* .tag-border {
  border-right: 0.4rem solid orange;
  border-top: 0.4rem solid orange;
} */
</style>
