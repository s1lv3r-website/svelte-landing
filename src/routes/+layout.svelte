<script type="ts">
  import '../app.scss';
</script>

<svelte:head>
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" type="image/icon" href="/favicon.ico" />
  <meta name="theme-color" content="#ffffff" />
  <title>S1LV3R</title>
</svelte:head>

<!-- fix css overflow stuff: https://stackoverflow.com/a/33455342 -->
<!-- [&>*]: https://stackoverflow.com/a/72683383 -->
<div class="flex h-full flex-col overflow-auto [&>*]:m-auto">
  <slot />
</div>
