<template>
    <div id="app">
        <nav class="nav">
            <router-link to="/" class="nav-title">Welcome home</router-link>
            <div class="menu">
                <router-link to="/dinner" class="router-link">今晚吃啥呢？</router-link>
                <router-link to="/talk" class="router-link">聊个5毛钱的</router-link>
                <router-link to="/opinion" class="router-link">我来提意见</router-link>
                <router-link to="/about" class="router-link">关于</router-link>
            </div>
        </nav>
        <router-view/>

    </div>
</template>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        .nav{
            position: relative;
            height: 200px;
            .nav-title{
                font-size: 56px;
                text-align: center;
                font-weight: bold;
                cursor: default;
                color: #2c3e50;
                &:hover{
                    font-size: 56px;
                    color: #42b983;
                }
            }
            .menu{
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                font-size: 20px;
                font-weight: 500;
                .router-link{
                    position: absolute;
                    cursor: default;
                    display: block;
                    color: #2c3e50;
                    &:hover{
                        font-size: 26px;
                        color: #42b983;
                    }
                    &:nth-child(1){
                        left: -400px;
                        top: 30px;
                    }
                    &:nth-child(2){
                        left: -200px;
                        top: 130px;
                    }
                    &:nth-child(3){
                        right: -200px;
                        top: 130px;
                    }
                    &:nth-child(4){
                        right: -400px;
                        top: 30px;
                    }
                }

            }

        }

    }
</style>
