<script>
    import OppStore from '../store/oppStore.js';
    import { createEventDispatcher } from 'svelte';
    import {Button} from 'sveltestrap';


    const dispatch = createEventDispatcher();

    let newOpp={name:'', description:''}
    let msg={msg:''}


    const submitHandler=()=>{

        let opp={...newOpp,id: Math.random()}
        console.log(opp,'opp!!!!')
        if(opp){
            msg.msg='Great, successfully added!'

        }

        OppStore.update(currentOpps =>{
            return [opp, ...currentOpps]
        })
        dispatch('add')

    }

   
    
</script>
<h4>Add new Opportunity</h4>
<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="opp">Opportunity</label>
        <input type="text" bind:value={newOpp.name} required> 
    </div>
    <div class="form-field">
        <label for="description">description</label>
        <input type="text" bind:value={newOpp.description} required> 
    </div>
    <Button>Create Opp</Button>
    <p>{msg.msg}</p>

</form>