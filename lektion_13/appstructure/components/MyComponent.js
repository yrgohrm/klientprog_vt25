import TestService from '../services/TestService.js'
import SubComponent from './SubComponent.js'

export default {
    data() {
        return {
            string: ""
        }
    },
    created() {
        TestService.getString().then(string => this.string = string)
    },
    components: {
        subComponent: SubComponent
    },
    template: `<div>
                    {{string}}
                    <sub-component/>
                    <sub-component/>
                    <sub-component/>
               </div>`
}