<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.error?.message}</title>
</svelte:head>

<h1>{$page.status} - {$page.error?.message}</h1>
<a href="/">Return to home</a>
