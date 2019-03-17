<template>
    <div>
        <label class="label">Wordlist [files/dirs]</label>
        <WordlistButton type="files" wordlist="test.txt"></WordlistButton>
        <WordlistButton type="files" wordlist="test1.txt"></WordlistButton>
        <WordlistButton type="files" wordlist="test2.txt"></WordlistButton>
        <WordlistButton type="files" wordlist="test3.txt"></WordlistButton>
        <WordlistButton type="files" wordlist="test4.txt"></WordlistButton>
        <WordlistButton type="files" wordlist="test5.txt"></WordlistButton>
    </div>
</template>

<script>
    import WordlistButton from '../wordlists/WordlistButton.vue';

    export default {
        name: "WordlistList",
        components: {
            WordlistButton
        }
    }
</script>

<style lang="scss" scoped>

</style>