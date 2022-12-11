<script>
  import { Button, Modal } from 'sveltestrap';
  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/sketchy/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</svelte:head>

<Button color="primary" on:click={toggle}>Hello World!</Button>
<Modal body {isOpen} {toggle} header="Hello World!">
  <p>There's a song that we're singing. Come on</p>
  <img
    src="https://i.ytimg.com/vi/NUJIRujygvY/hqdefault.jpg"
    alt="Come on Get Happy"
    class="img-fluid"
  />
</Modal>