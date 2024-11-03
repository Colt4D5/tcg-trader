<script lang="ts">
	import Button from "./ui/button/button.svelte";
  import { buttonVariants } from "$lib/components/ui/button";
</script>


<header class="p-4">
  <div class="bg-white rounded-full shadow-lg">
    <nav class="flex justify-between items-center py-4 px-8">
      <h1 class="text-4xl">TCG TRADER</h1>
      
      <ul class="hidden md:flex gap-8">
        <li><a href="/cards" class="relative text-lg">Cards</a></li>
        <li><a href="/trade" class="relative text-lg">Trade</a></li>
        <li><a href="/market" class="relative text-lg">Buy/sell</a></li>
      </ul>
      
      <ul class="hidden md:flex gap-4">
        <li>
          <a href="/login" class={buttonVariants({ variant: "outline" })}>
            Log In
          </a>
        </li>
        <li>
          <Button href="/register">Sign Up</Button>
        </li>
      </ul>

      <div id="pokeball-icon" class="flex-col rounded-full border-black border-2 overflow-hidden relative md:hidden">
        <div class="bg-accent h-4 w-8 border-b-2 border-black"></div>
        <div class="bg-white h-4 w-8 border-t-2 border-black"></div>
      </div>
    </nav>
  </div>
</header>

<style>
  #pokeball-icon::before, #pokeball-icon::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  #pokeball-icon::before {
    width: 0.75rem;
    height: 0.75rem;
    background-color: #000;
    z-index: 2;
  }
  #pokeball-icon::after {
    width: 0.4rem;
    height: 0.4rem;
    background-color: #fff;
    z-index: 3;
  }
</style>