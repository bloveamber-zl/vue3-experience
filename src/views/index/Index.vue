<template>
    <div id="index">
        <div class="bg-img">
            <img src="../../assets/img/niuniu/niu1.png">
            <img src="../../assets/img/niuniu/niu2.png">
            <img src="../../assets/img/niuniu/niu3.png">
            <img src="../../assets/img/niuniu/niu4.png">
            <img src="../../assets/img/niuniu/niu5.png">
            <img src="../../assets/img/niuniu/niu7.png">
            <img src="../../assets/img/niuniu/niu6.png">
            <!--            <img src="./assets/img/niuniu/niu8.png">-->
            <!--            <img src="./assets/img/niuniu/niu9.png">-->
            <!--            <img src="./assets/img/niuniu/niu10.png">-->
        </div>
    </div>
</template>

<script>
	export default {
		name: "Index"
	}
</script>

<style scoped lang="scss">
    #index{
        .bg-img{
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: -1;
            img{
                position: absolute;
                border-radius: 12px;
                &:nth-child(1){
                    width:340px;
                    left: 50%;
                    top: 140px;
                    transform: translateX(-50%);
                }
                &:nth-child(2){
                    width:160px;
                    left: 190px;
                    top: 140px;
                    transform: translateX(-50%) rotate(30deg);
                }
                &:nth-child(3){
                    width:150px;
                    right: 300px;
                    top: 320px;
                    transform: rotate(30deg);
                }
                &:nth-child(4){
                    width:120px;
                    right: 30px;
                    top: 10px;
                    transform:rotate(-30deg);
                }
                &:nth-child(5){
                    width:320px;
                    left: 20px;
                    top: 580px;
                }
                &:nth-child(6){
                    width:320px;
                    right: 50px;
                    top: 680px;
                }
                &:nth-child(7){
                    width:180px;
                    left: 690px;
                    top: 680px;
                    border-radius: 10%;
                    transform:rotate(-30deg);
                }
            }
        }
    }

</style>
