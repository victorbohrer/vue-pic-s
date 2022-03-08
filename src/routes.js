import Cadastro from './components/register/Register.vue'
import Home from './components/home/Home.vue'
import Contato from './components/contato/Contato.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/cadastro', component: Cadastro },
    { path: '/contato', component: Contato }
]