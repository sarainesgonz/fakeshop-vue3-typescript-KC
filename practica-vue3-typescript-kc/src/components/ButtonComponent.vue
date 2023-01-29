<template>
    <button @click="buttonClicked">
    <slot :type="type">Button</slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'ButtonComponent',
    props : {
        type: {
            type: String as PropType<'cancel' | 'goback' | 'show-details'| 'login' | 'logout' | 'close'  >
        },
    
    },

    setup(props, {emit}) {
  
        const buttonClicked = () => {

            switch (props.type) {
                case 'logout':
                    emit('logout')
                    break
                case 'goback':
                    console.log('goback')
                    break
                case 'cancel':
                    console.log('cancel')
                    break
                default:
                    console.log('Invalid option')
                    break
            }
        }

        return {
            buttonClicked
        }
    },
})
</script>

<style scoped>
button {
    border: 1px solid gainsboro;
    padding: .7rem ;
    /* width: 20%; */
    border-radius: 10px ;
    cursor: pointer;
}
</style>