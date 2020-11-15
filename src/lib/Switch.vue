<template>
    <button><span></span></button>
</template>

<style lang="scss" scoped>
$h:22px;
$h2:18px;
button{
    height: $h;
    width: $h*2;
    border:none;
    background: gray;
    border-radius: $h/2;
    position: relative;
}
span{
    position: absolute;
    top:2px;
    left:2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: left 250ms;
}
button:hover > span {
    left:calc(100% - #{$h2} - 2px)
}
button:hover {
    background: blue;
}
    
</style>