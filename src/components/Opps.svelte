<script>
    import OppStore from '../store/oppStore.js';
    import OppDetail from './OppDetail.svelte';
    import { _ } from "svelte-i18n";


    let opps =[]
</script>

<div class="opp-list">
    <h4>{$_("opps.title")}</h4>
    {#each $OppStore as opp (opp.id)}
    <div>
        <OppDetail {opp} />
    </div>
    {/each} 
</div>
<style>
    h4{
        margin-top: 10px;
        margin-bottom: 15px;
    }
</style>