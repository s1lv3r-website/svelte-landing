<script type="ts">
  import '../app.scss';

  const nav: Array<{ location: string; name: string }> = [{ location: '/', name: 'Home' }];
</script>

<div class="flex flex-col justify-center items-center h-full overflow-auto">
  <slot />
  <div class="mt-10 text-neutral-500">
    {#each nav as location, index}
      <a href={location.location} class="hover:text-neutral-100 transition-all">{location.name}</a>
      {#if index + 1 < nav.length}
        |{' '}
      {/if}
    {/each}
  </div>
</div>
