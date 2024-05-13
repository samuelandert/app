<script lang="ts">
  import { page } from "$app/stores"
  import Time from "svelte-time"

  export let users = $page.data.users
</script>

{#if $page.data.session}
  <h1>Welcome user</h1>
  <p>
    Session expiry:
    <Time timestamp={$page.data.session.expires} relative />
  </p>
  <p>
    {#if users && users.length > 0}
      <h3>Users List</h3>
      <ul>
        {#each users as user}
          <li>{user.id} - {user.email}</li>
        {/each}
      </ul>
    {:else}
      <h3>No users found</h3>
    {/if}
  </p>
{:else}
  <h1>Access Denied</h1>
{/if}
