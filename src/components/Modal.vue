<script>

    import CustomButton from './CustomButton.vue'

    export default {

        name: 'Modal',

        components: {
            CustomButton
        },

        props: {
            type: {
                type: String
            }
        }
    }

</script>

<template>

    <div :data-modal="`${type}-wrapper`">
        <div :data-modal="`${type}-content`">
            <i class="material-icons" data-button="close-modal">close</i>
        </div>
    </div>

</template>

<style scoped>

    div[data-modal*="wrapper"] {
        min-width: 100vw;
        min-height: 100vh;
        background-color: #0d0d0db4;
        position: fixed !important;
        left: 0;
        top: 0;
        z-index: 1;
    }

    div[data-modal*="content"] {
        min-width: 75vw;
        min-height: 75vh;
        background-color: var(--color3);
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    i[data-button="close-modal"] {
        font-size: 2rem;
        color: var(--color0);
        background-color: var(--color2);
        border-radius: 50%;
        margin: 10px;
        float: right;
        cursor: pointer;
        transition: opacity 200ms;
    }

    i[data-button="close-modal"]:hover { opacity: .75; }

</style>