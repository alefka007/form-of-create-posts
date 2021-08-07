import { CreateComponent } from './components/create.component'
import { FavoriteComponent } from './components/favorite.component'
import { HeaderComponent } from './components/header.components'
import { LoaderComponent } from './components/loader.component'
import { NavigationComponent } from './components/navigation.components'
import { PostsComponent } from './components/posts.component'

const header = new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader')

const create = new CreateComponent('create')
const posts = new PostsComponent('posts', {loader})
const favorite = new FavoriteComponent('favorite', {loader})


navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])