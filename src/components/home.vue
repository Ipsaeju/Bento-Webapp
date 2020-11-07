<template>
    <div class="title">
        <h1>Welcome</h1>
        <div class="box1">
            <h2>Box 1</h2>
            <div class="boxtext">
                lorem ipsum
            </div>
        </div>
        <div class="box2">
            <h2>Box 2</h2>
            <div class="boxtext">
                lorem ipsum
            </div>
        </div>
        
    </div>
    
    
</template>

<script>
export default {
    name: 'HomePage',
    
}
</script>

<style>
    .box1{
        box-sizing: content-box;
        font-family: "Noto Sans";
        font-size: 30px;
    }
    .box2{
        box-sizing: content-box;
        font-family: "Noto Sans";
        font-size: 30px;
    }
    .boxtext{
        font-family: "Noto Sans";
        font-size: 14px;
        text-align: justify;
    }
</style>