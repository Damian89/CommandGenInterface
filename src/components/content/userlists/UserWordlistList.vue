<template>
    <div>
        <label class="label">Wordlist [usernames]</label>
        <UserWordlistButton type="usernames" wordlist="test.txt"></UserWordlistButton>
        <UserWordlistButton type="usernames" wordlist="test1.txt"></UserWordlistButton>
        <UserWordlistButton type="usernames" wordlist="test2.txt"></UserWordlistButton>
        <UserWordlistButton type="usernames" wordlist="test3.txt"></UserWordlistButton>
        <UserWordlistButton type="usernames" wordlist="test4.txt"></UserWordlistButton>
        <UserWordlistButton type="usernames" wordlist="test5.txt"></UserWordlistButton>
    </div>
</template>

<script>
    import UserWordlistButton from '../userlists/UserWordlistButton.vue';

    export default {
        name: "UserWordlistList",
        components: {
            UserWordlistButton
        }
    }
</script>

<style lang="scss" scoped>

</style>