<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: computed(() => "login"),
});

await useAsyncData(async () => {
  await navigateTo("/dashboard");
  return session;
});
</script>
<template>
  <h1>hello</h1>
</template>
