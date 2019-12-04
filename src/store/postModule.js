import axios from '../plugins/axios'

const postModule = {
  state: { posts: [] },
  getters: { getPosts: state => state.posts },
  mutations: { setPosts: (state, posts) => { state.posts = posts } },
  actions: {
    fetchPosts: async ({ commit }) => {
      const postsResponse = await axios.get('api/posts')
      if (postsResponse.data) {
        commit('setPosts', postsResponse.data)
      }
    }
  }
}

export default postModule
