<script lang="ts">
  import { SignIn } from "@auth/sveltekit/components"
</script>

<div>
  <nav>
    <img src="/img/logo.svg" alt="Company Logo" />
    <SignIn provider="postmark" />
  </nav>
</div>
