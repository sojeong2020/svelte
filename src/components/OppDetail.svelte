<script>
    import OppStore from '../store/oppStore.js';
    import {Button} from 'sveltestrap';

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

    <Button on:click={()=>handleDelete(opp.id)}>Delete</Button>
</div>