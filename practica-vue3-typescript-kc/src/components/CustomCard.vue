<template>
    <div class="card">
        <slot class="card-header" name="header">header</slot>
        <slot class="card-body" name="body">body</slot>
        <slot class="card-footer" name="footer">footer</slot>
    </div>
</template>

<style scoped>
.card {
    max-width: 100%;
    display: inline-block;
    margin: 0 auto;
    padding: 5rem;
    box-shadow: 10px 10px 24px -16px rgba(117,21,117,1);
}

</style>