<template>
    <input :value="text" class="custom-button" type="button">
</template>

<style>

    input.custom-button {
        font-size: 1.2rem;
        margin: 10px;
        padding: 15px;
        color: var(--color4);
        background-color: transparent;
        border: 1px solid var(--color2);
        cursor: pointer;
        transition: background-color 200ms;
        border-radius: 5px;
    }

    input.custom-button:hover {
        background-color: var(--color2);
    }

</style>

<script>

    export default {

        name: 'CustomButton',

        props: {
            text: {
                type: String
            }
        },
    }

</script>