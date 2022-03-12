<script>
    import OppStore from '../store/oppStore.js';
    import OppDetail from './OppDetail.svelte';

    let opps =[]
</script>

<div class="opp-list">
    {#each $OppStore as opp (opp.id)}
    <div>
        <OppDetail {opp} />
    </div>
    {/each} 
</div>
