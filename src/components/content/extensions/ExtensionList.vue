<template>
    <div>
        <label class="label">Extensions</label>

        <ExtensionButton ext="php,php.save,php~">Only PHP (php, php.save, php~)</ExtensionButton>

        <ExtensionButton ext="jsp,jsp.save,jsp~">Only JSP (jsp, jsp.save, jsp~)</ExtensionButton>

        <ExtensionButton ext="asp,aspx,aspx.save,aspx~">
            Only ASP (asp, aspx, aspx.save, aspx~)
        </ExtensionButton>

        <ExtensionButton ext="zip,rar,tar,tar.gz,bak,bkp">
            Only Backups (zip, rar, tar, tar.gz)
        </ExtensionButton>

        <ExtensionButton ext="sql,sql.gz,sql.tar">Only SQL (sql, sql.gz, sql.tar)</ExtensionButton>

        <ExtensionButton ext="html,html,js,json">Only HTML and JS related files</ExtensionButton>

        <ExtensionButton ext="pem,csv,conf,cgi,dist,inc,log,old,wadl">
            Only interesting files (pem, csv, ...)
        </ExtensionButton>
    </div>
</template>

<script>
    import ExtensionButton from './ExtensionButton.vue';

    export default {
        name: "ExtensionList",
        components: {
            ExtensionButton
        }
    }
</script>

<style lang="scss" scoped>

</style>