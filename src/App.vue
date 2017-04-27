<template>
  <div>
    <div class="LubanLD-container">
    <!--顶部导航-->
    <header>
       <div class="LubanLD-user   col-xs-3">
           <div class="LubanLD-head">
               <a href="javascript:;" class="LubanLD-pic">
                   <img src="imgs/projectmng/pic.png" alt="" style="width: 50px;height: 50px;">
               </a>
           </div>
           <div class="LubanLD-username">
               <span class="name">张三</span>
               <span class="job">施工员</span>
           </div>
        </div>
        <div class="main-navbar  col-xs-7 ">
           <div class="btn-control">
                <a href="javascript:;" class="topNav btn-projectmng active">
                   <i class="logo-projectmng"></i>
                   <p class="txt-projectmng">工程管理</p>
                </a>
                <a href="javascript:;" class="topNav btn-changemng">
                   <i class="logo-changemng"></i>
                   <p class="txt-changemng">变更管理</p>
                </a>
                <a href="javascript:;" class="topNav btn-qualityAssess">
                   <i class="logo-qualityAssess"></i>
                   <p class="txt-qualityAssess">质检评定</p>
                </a>
                <a href="javascript:;" class="topNav btn-meter">
                   <i class="logo-meter"></i>
                   <p class="txt-meter">计量支付</p>
                </a>
                <a href="javascript:;" class="topNav btn-analysis">
                   <i class="logo-analysis"></i>
                   <p class="txt-analysis">统计分析</p>
                </a>
            </div>
        </div>
        <div class="window-state  col-xs-2 ">
           <input class="min_window">
           <input class="max_window">
           <input class="close_window">
        </div>
    </header>

    <!--主体内容-->
    <article class="main-container clearfix" style="height: calc(100% - 73px)">
        <!--左侧树节点导航-->
        <aside class="menu-nav">
            <div class="contract-manage">
                <!--下拉框-->
                <div class="contract-wrap">
                    <div class="dropdown contract-select">
                        <button class="menu" id="menu1" data-toggle="dropdown">
                            施工合同
                            <span class="arrow"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="menu1">
                            <li><a href="#">施工合同</a></li>
                            <li><a href="#">监理合同</a></li>
                            <li><a href="#">监理实验室合同</a></li>
                        </ul>
                    </div>
                </div>
                <!--搜索框-->
                <div class="contract-search">
                    <input type="text" class="input-search" placeholder="快速搜索合同">
                    <a class="clear">
                        <i class="btn-close"></i>
                    </a>
                    <a class="btn-wrap">
                        <i class="btn-search"></i>
                    </a>
                </div>
                <ul class="ztree" style="overflow-x:scroll;overflow-y:hidden;height: calc(100% - 84px)">
                    <li class="project-name">
                        <i class="icon-project"></i>
                        <span>九寨沟到绵羊项目</span>
                    </li>
                    <li class="contract-name active">1</li>
                    <li class="contract-name">2</li>
                    <li class="contract-name">3</li>
                    <li class="contract-name">4</li>
                    <li class="contract-name">4</li>
                    <li class="contract-name">4</li>
                    <li class="contract-name">4</li>
                </ul>
            </div>
            <div class="btn-wrapper">
                <span class="btn-slide"></span>
                <span class="btn-arrow"></span>
            </div>

        </aside>

        <!--右侧数据内容展示-->
        <section class="content-wrapper" style="width: calc(100% - 217px)">
            <!--固定导航-->
            <div class="top-navbar">
                <a href="javascript:;" class="active tab">
                    <span>合同管理</span>
                </a>
                <a href="javascript:;" class="tab">
                    <span>工程划分</span>
                </a>
                <a href="javascript:;" class="tab">
                    <span>清单管理</span>
                </a>
            </div>
            <div class="contract-content" style="height: calc(100% - 40px);">
                <div class="content">
                    <div class="contract-name">合同1</div>
                    <div class="contract-operate">
                        <button class="contract-construction active">新建施工合同</button>
                        <button class="contract-inspection">新建监理合同</button>
                        <button class="contract-laboratory">新建实验室合同</button>
                        <button class="edit-contract">编辑合同</button>
                        <button class="delete-contract">删除合同</button>
                    </div>
                </div>
            </div>
        </section>
    </article>
</div>
  </div>
</template>

<script>
export default {
    mounted() {
        // this.dongH();
    }
}
</script>
<script>
$(function(){
    // debugger
    function dongH(argument) {
    //    控制左侧导航栏左右移动
    var $sliderMoving = false;
    const LEFT_DIV_WIDTH_MIN = 150;
    const LEFT_DIV_WIDTH_MAX = 200;
    $a = $(window).height() - 70;

    $(".menu-nav").height($a);
    let isClicked = true;
    $(".btn-wrapper").click(function () {
        if (isClicked) {
            $(".menu-nav").stop().animate({width: LEFT_DIV_WIDTH_MIN + 'px'}, 500);
            $(".content-wrapper").stop().animate({width: $(window).width() - LEFT_DIV_WIDTH_MIN - 4 + 'px'}, 500);
            $('.btn-wrapper>.btn-arrow').css({background: 'url(imgs/projectmng/icon-button.png) -132px -31px no-repeat'});
            isClicked = !isClicked;
        } else {
            $(".menu-nav").stop().animate({width: LEFT_DIV_WIDTH_MAX + 'px'}, 500);
            $(".content-wrapper").stop().animate({width: $(window).width() - LEFT_DIV_WIDTH_MAX - 4 + 'px'}, 500);
            $('.btn-wrapper>.btn-arrow').css({background: 'url(imgs/projectmng/icon-button.png) -114px -31px no-repeat'});
            isClicked = !isClicked;
        }
    });

    //    顶部导航栏active样式控制
    $('.topNav').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //    工程管理下的导航active样式控制
    $('.tab').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //    合同段active样式控制
    $('.contract-name').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //    合同操作按钮active样式控制
    $('.contract-operate > button').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //    下拉菜单arrow切换
    $('.menu').on('click', function () {
        if ($('.dropdown').hasClass('open')) {
            $('.arrow').css({transform: 'rotate(0deg)'});
        } else {
            $('.arrow').css({transform: 'rotate(180deg)'});

        }
    });
}
dongH();
})

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
