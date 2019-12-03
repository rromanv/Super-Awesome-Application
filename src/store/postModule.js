import axios from '../plugins/axios'

const types = {
  SET_POSTS: 'setPosts',
  FETCH_POSTS: 'fetchPosts'
}

const postModule = {
  state: { posts: [] },
  getters: { getPosts: state => state.posts.reverse() },
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts
    }
  },
  actions: {
    fetchPosts: async ({ commit }) => {
      const postsRequest = await axios.get('api/posts')
      if (postsRequest.data) {
        commit(types.SET_POSTS, postsRequest.data)
      }
    },
    addPost: async ({ dispatch }, post) => {
      await axios.post('api/posts', post)
      await dispatch(types.FETCH_POSTS)
    }
  }
}

export default postModule
