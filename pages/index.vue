<template>
	<div class="good">
		<div>{{last_known_scroll_position}}</div>
	</div>
</template>

<script>
import Share from '~/components/Share.vue'

export default {
  components: {
  	Share,
  },
  data () {
  	return{
  		last_known_scroll_position: 0,
  		ticking: false,
  	}
  },
  methods:{
  	onScroll() {
  		this.update()
  		// console.log(event)
  	},
  	update() {
  		this.last_known_scroll_position = window.scrollY
  		console.log(window.scrollY)
  		// console.log(this)
  	},
  },
  mounted() {
  	console.log('mounted')
  	this.update()
  	window.addEventListener('scroll', this.onScroll, {passive: false})
  },
}
</script>

<style lang="scss" scoped>
	.good{
		position: relative;
		width: 100%;
		height: 10000vh;
		// overflow-y: scroll;
		// overflow-x: hidden;
		background-color: rgba(red, .3);
		div{
			position: fixed;
			height: 100vh;
			width: 100%;
			font-size: 6em;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
