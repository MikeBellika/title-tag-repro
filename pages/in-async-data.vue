<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: computed(() => "login"),
});

await useAsyncData(async () => {
  // In my real app we do this on the login page to check authentication.
  // If the user is authenticated, we redirect them to /dashboard
  await navigateTo("/dashboard");
  return session;
});
</script>
<template>
  <h1>hello</h1>
</template>
