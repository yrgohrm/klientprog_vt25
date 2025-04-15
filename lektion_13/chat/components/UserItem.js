import AvatarImage from './AvatarImage.js'

export default {
    props: {
        user: Object
    },
    components: {
        avatarImage: AvatarImage
    },
    template: `<div :class="{'user-item': true, 'user-item-offline': !user.online}">
                    <avatar-image :online="user.online" :name="user.name"></avatar-image>
                    <div>{{user.name}}</div>
                </div>`
}