<script lang="ts">
	import Hero from "./Hero.svelte";
  import type { CardImages } from '$lib';
  const { data } = $props();
  const { images }: { images: CardImages[] } = data;
</script>


<div class="container">
  <Hero {images} />
  
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
</div>

