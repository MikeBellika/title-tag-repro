<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: computed(() => "login"),
});

await navigateTo("/dashboard");
</script>
<template>
  <h1>hello</h1>
</template>
