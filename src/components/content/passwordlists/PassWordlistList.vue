<template>
    <div>
        <label class="label">Wordlist [passwords]</label>
        <PassWordlistButton type="passwords" wordlist="test.txt"></PassWordlistButton>
        <PassWordlistButton type="passwords" wordlist="test1.txt"></PassWordlistButton>
        <PassWordlistButton type="passwords" wordlist="test2.txt"></PassWordlistButton>
        <PassWordlistButton type="passwords" wordlist="test3.txt"></PassWordlistButton>
        <PassWordlistButton type="passwords" wordlist="test4.txt"></PassWordlistButton>
        <PassWordlistButton type="passwords" wordlist="test5.txt"></PassWordlistButton>
    </div>
</template>

<script>
    import PassWordlistButton from './PassWordlistButton.vue';

    export default {
        name: "PassWordlistList",
        components: {
            PassWordlistButton
        }
    }
</script>

<style lang="scss" scoped>

</style>