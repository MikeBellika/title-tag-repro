<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: computed(() => "login"),
});

// Works, title gets set
navigateTo("/dashboard");
</script>
<template>
  <h1>hello</h1>
</template>
