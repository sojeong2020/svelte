<script>
    import OppStore from '../store/oppStore.js';
    import {Button} from 'sveltestrap';
    import { _ } from "svelte-i18n";


    export let opp;

    

    const handleDelete=(id) => {
        OppStore.update(currentOpps=>{
            return currentOpps.filter(opp=>opp.id !== id)
        })
    }
</script>

<div class="opp">
    <h4>{opp.name}</h4>
    <p>{opp.description}</p>

    <Button info on:click={()=>handleDelete(opp.id)}>{$_("detail.delete")}</Button>
</div>