<template>
  <v-row>
    <v-col
      xs="12"
      sm="12"
      md="12"
      lg="6"
      xl="6"
      cols="12"
      class="pl-1 pt-1"
      v-for="(item, indx) in content"
      :key="indx"
    >
      <v-hover v-slot="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 1 : 2"
          :class="{ 'on-hover': hover }"
          outlined
          shaped
          tile
          class="  tempoup"
        >
          <nuxt-link
            class="nuxtlink"
            target="_blank"
            :to="{
              path: path + '/' + item.slug
            }"
          >
            <v-img
              v-if="item.image != null"
              aspect-ratio="2.3"
              :src="item.image"
            >
            </v-img>

            <v-img v-else aspect-ratio="2.3" src="/images/default.jpg"> </v-img>
          </nuxt-link>
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
          <v-card-title color="blue" class="pa-1 ma-0  adj-title">
            <h2 color="black" class="title1 fs-1 line-clamp-2">
              <nuxt-link
                color="black"
                class="nuxtlink"
                target="_blank"
                :to="{
                  path: path + '/' + item.slug
                }"
              >
                {{ item.title
                }}<v-icon small color="blue">mdi-arrow-top-right-thick</v-icon>
              </nuxt-link>
            </h2>
          </v-card-title>
          <v-card-subtitle class="pa-1 ma-0  adj-title" v-if="item.headline">
            <p class="mb-0  line-clamp-1">{{ item.headline }}</p>
          </v-card-subtitle>
          <v-card-text class="pa-1 ma-0">
            <v-avatar
              v-if="item.profile_picture != null"
              size="40"
              class="d-inline-flex mt-4"
            >
              <img :src="item.profile_picture" alt="Profile Picture" />
            </v-avatar>

            <v-avatar
              v-else
              color="blue"
              size="40"
              class=" white--text d-inline-flex  mt-3"
            >
              {{ item.name.charAt(0).toUpperCase() }}
            </v-avatar>

            <v-card flat class="d-inline-flex d-flex flex-column ">
              <v-card flat><b>Author:</b> {{ item.name }}</v-card>
              <v-card flat><b>Published:</b> {{ item.human_date }}</v-card>
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
                  path: path + '/' + item.slug
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
</template>

<script>
export default {
  props: ['content', 'path']
}
</script>
<style scoped>
.adj-title {
  min-height: 2rem;
  line-height: 1rem;
  margin: 0px;
  padding: 0px;
}
</style>
