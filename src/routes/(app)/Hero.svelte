<script lang="ts">
  import Button from '$components/ui/button/button.svelte';
  import Swiper from 'swiper/bundle';
  import 'swiper/css/bundle';
  import type { CardImages } from '$lib';
  const { images }: { images: CardImages[] } = $props();

  $effect(() => {
    const swiper = new Swiper(".mySwiper", {
      effect: "cube",
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
  })
</script>

<div id="hero" class="flex items-center py-20">

  <div class="max-w-[800px] text-center md:text-left">
    <h1 class="text-4xl md:text-6xl text-balance">Buy and Sell Digital Pokemon Cards</h1>
    <p class="my-4">Build your collection, trade with trainers worldwide - your digital deck is limitless</p>
    <Button href="/register" class="text-2xl py-8 px-4">Start Collecting</Button>
  </div>

  <div class="hidden md:block">
    <div class="swiper mySwiper hidden md:block my-16 max-w-[300px] mx-auto">
      <div class="swiper-wrapper">

        {#each images as image}
          <div class="swiper-slide w-full aspect-[600/825]">
            <img src={image.large} alt="Random Pokemon Card" class="w-full rounded-lg bg-contain bg-no-repeat" />
          </div>
        {/each}

      </div>
    </div>
  </div>

</div>

<style>
  #hero::before {
    --alpha: 0.3;
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    aspect-ratio: 1 / 1;
    transform: translate3d(-50%, -50%, 0);
    background: radial-gradient(#c846fc49, #3f5efb33, transparent 70%);
    z-index: -1;
    @media (width > 640px) {
      width: 60%;
    }
  }
</style>