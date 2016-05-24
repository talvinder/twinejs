// The toolbar at the bottom of the screen with editing controls.

const Vue = require('vue');
const backboneModel = require('../../vue/mixins/backbone-model');
const zoomMappings = require('../zoom-settings');

module.exports = Vue.extend({
	template: require('./index.html'),
	
	props: ['model', 'collection', 'zoomDesc'],

	data: () => ({
		name: '',
		zoom: 1
	}),

	components: {
		'story-menu': require('./story-menu'),
		'story-search': require('./story-search')
	},
	
	methods: {
		setZoom(description) {
			this.zoom = zoomMappings[description];
		},

		test() {
			window.open(
				'#stories/' + this.story.id + '/test',
				'twinestory_test_' + this.story.id
			);
		},

		play() {
			window.open(
				'#stories/' + this.story.id + '/play',
				'twinestory_play_' + this.story.id
			);
		},

		addPassage() {
			this.$dispatch('passage-create');
		}
	},

	mixins: [backboneModel]
});

