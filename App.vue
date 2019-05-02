<<template id="app">	
<div id="app" class="container">
<ul class="nav nav-tabs" role="tablist">
<li v-for="list in shoppingLists" role="presentation">
<shopping-list-title-component :id="list.id" :title="list.title"></shopping-list-title-component>
</li>
</ul>
<div class="tab-content">
<div class="tab-pane" role="tabpanel" v-bind:id="list.id" v-for="list in shoppingLists">
<shopping-list-component v-bind:title="list.title" v-bind:items="list.items" v-bind:id="list.id"></shopping-list-component>
</div></div>
</div>
</template>

// main vue component: collects everything togeyher

<script>
import shoppingListComponent from './components/shoppingListComponent'
import shoppingListTitleComponent from './components/shoppingListTitleComponent'
import {_} from 'vue-underscore'
import store from './vuex/store'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'


export default{
store,
components: {
	shoppingListComponent,
	shoppingListTitleComponent
},
computed: mapGetters({
	shoppingLists : 'getLists'
	
		// NB shoppingLists1 is a custom name usuable instead of the method name; Useable here only
		
	}),
	methods: mapActions(['populateShoppingLists']),
	
	created: function () {
		this.populateShoppingLists()
	}
	
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
