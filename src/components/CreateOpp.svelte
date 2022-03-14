<script>
    import OppStore from '../store/oppStore.js';
    import { createEventDispatcher } from 'svelte';
    import {Button} from 'sveltestrap';
    import { _ } from "svelte-i18n";



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
<h4>{$_("create.title")}</h4>
<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="opp">{$_("create.opp")}</label>
        <input type="text" bind:value={newOpp.name} required> 
    </div>
    <div class="form-field">
        <label for="description">{$_("create.des")}</label>
        <input type="text" bind:value={newOpp.description} required> 
    </div>
    <Button>{$_("create.button")}</Button>
    <p class="msg">{msg.msg}</p>

</form>

<style>
    .msg {
        color:red;
    }
</style>