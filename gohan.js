<html>
	<head>
		<meta charset="UTF-8">
		<title>朝昼夜のご飯ルーレット</title>
		<style>
			body {
				text-align: center;
				padding: 0;
				margin: 0;
			}
			ul {
				list-style: none;
			}
			.slot {
				width: 90%;
				height: 500px;
				overflow: hidden;
				margin: auto;
				border : solid 1px #333 ;
			}
			.slot-frame {
				height: 500px;
				position: relative;
				overflow: hidden;
				border : solid 1px #333 ;
			}
			.reels {
				width: 31%;
				position: absolute;
			}
			.reels:nth-child(1) {
				left: 0;
			}
			.reels:nth-child(2) {
				left: 33%;
			}
			.reels:nth-child(3) {
				right: 0;
			}
			.reel {
				height: 270px;
			}
			.reel img {
				display: block;
				width: 89%;
				margin: auto;
			}
		</style>
	</head>
	<body>
		<h1>朝昼夜のご飯ルーレット</h1>
		<div class="slot">
			<div class="slot-frame">
				<ul class="reels">
					<li class="reel"><img src="https://1.bp.blogspot.com/-8A5ACZzxzIc/VSufmA9-XMI/AAAAAAAAs-w/KHJbK1TW9s4/s180-c/food_konbini_onigiri.png"></li>
					<li class="reel"><img src="https://1.bp.blogspot.com/-T3ZsIsLkDVs/XkZdPFKa4uI/AAAAAAABXVY/trSE9300P6YX388N5-Al8m0gIZFRHuivACNcBGAsYHQ/s180-c/space_food.png"></li>
					<li class="reel"><img src="https://1.bp.blogspot.com/-GLzl415uk8M/XZR9-u17vxI/AAAAAAABVXk/jCtVEWFTfo4cULORjlxpqRIKfgyz0GLqwCNcBGAsYHQ/s180-c/sweets_jelly_cup.png"></li>
					<li class="reel"><img src="https://3.bp.blogspot.com/-0TOOVqs3PYY/XDXcPduNPoI/AAAAAAABRIQ/TPCVD1EthGocp-9TBG_rn7F43coNOtn5ACLcBGAs/s180-c/sweets_purin_normal.png"></li>
					<li class="reel"><img src="https://1.bp.blogspot.com/-8A5ACZzxzIc/VSufmA9-XMI/AAAAAAAAs-w/KHJbK1TW9s4/s180-c/food_konbini_onigiri.png"></li>
					<li class="reel"><img src="https://1.bp.blogspot.com/-T3ZsIsLkDVs/XkZdPFKa4uI/AAAAAAABXVY/trSE9300P6YX388N5-Al8m0gIZFRHuivACNcBGAsYHQ/s180-c/space_food.png"></li>
					<li class="reel"><img src="https://1.bp.blogspot.com/-GLzl415uk8M/XZR9-u17vxI/AAAAAAABVXk/jCtVEWFTfo4cULORjlxpqRIKfgyz0GLqwCNcBGAsYHQ/s180-c/sweets_jelly_cup.png"></li>
					<li class="reel"><img src="https://3.bp.blogspot.com/-0TOOVqs3PYY/XDXcPduNPoI/AAAAAAABRIQ/TPCVD1EthGocp-9TBG_rn7F43coNOtn5ACLcBGAs/s180-c/sweets_purin_normal.png"></li>
				</ul>
				<ul class="reels">
					<li class="reel"><img src="https://1.bp.blogspot.com/-e_EAkZr1_BU/XexrDvRvEwI/AAAAAAABWlA/gh58TlEEl70LEVWeB6ZTxHcogtLUMUfTACNcBGAsYHQ/s180-c/obentou_sandwich.png"></li>
					<li class="reel"><img src="https://2.bp.blogspot.com/-xTmZLhrZr28/Vt_t8mMzsKI/AAAAAAAA4rA/qMVATDo1dmo/s180-c/obentou_noriben.png"></li>
					<li class="reel"><img src="https://4.bp.blogspot.com/-3ndKbo5JNcw/Ws2u06_gISI/AAAAAAABLRk/xz53-cS1koA6iqzrbJ1CntZO0nteFt-qgCLcBGAs/s180-c/food_kebabu_man.png"></li>
					<li class="reel"><img src="https://3.bp.blogspot.com/-EATHViUAKVI/W_UF9KEi82I/AAAAAAABQUE/9NkBAfsB9BgWgQOa4qBb_JQl9nvozV-JgCLcBGAs/s180-c/food_spaghetti_bolognese_meatsauce.png"></li>
					<li class="reel"><img src="https://1.bp.blogspot.com/-e_EAkZr1_BU/XexrDvRvEwI/AAAAAAABWlA/gh58TlEEl70LEVWeB6ZTxHcogtLUMUfTACNcBGAsYHQ/s180-c/obentou_sandwich.png"></li>
					<li class="reel"><img src="https://2.bp.blogspot.com/-xTmZLhrZr28/Vt_t8mMzsKI/AAAAAAAA4rA/qMVATDo1dmo/s180-c/obentou_noriben.png"></li>
					<li class="reel"><img src="https://4.bp.blogspot.com/-3ndKbo5JNcw/Ws2u06_gISI/AAAAAAABLRk/xz53-cS1koA6iqzrbJ1CntZO0nteFt-qgCLcBGAs/s180-c/food_kebabu_man.png"></li>
					<li class="reel"><img src="https://3.bp.blogspot.com/-EATHViUAKVI/W_UF9KEi82I/AAAAAAABQUE/9NkBAfsB9BgWgQOa4qBb_JQl9nvozV-JgCLcBGAs/s180-c/food_spaghetti_bolognese_meatsauce.png"></li>
				</ul>
				<ul class="reels">
					<li class="reel"><img src="https://1.bp.blogspot.com/-UbN0yy2MMrM/XaKa5_0WWUI/AAAAAAABVj8/-YGIDDkzgPUkGRe9odTWisMXeIZBTK9wgCNcBGAsYHQ/s180-c/food_curryrice_white.png"></li>
					<li class="reel"><img src="http://4.bp.blogspot.com/-SmXTKx3nBcA/UrlnHYwXxoI/AAAAAAAAcOA/erB3n3GC80E/s180-c/ramen_syouyu.png"></li>
					<li class="reel"><img src="http://1.bp.blogspot.com/-Hli6afTS54w/UgSMCMQNnNI/AAAAAAAAW6c/FXu-zvewMWY/s180-c/food_hamburg.png"></li>
					<li class="reel"><img src="http://2.bp.blogspot.com/-RB1mDuQvGkI/USyJ0W9QfKI/AAAAAAAAObc/Idip0N8CFUw/s180-c/nigirizushi_moriawase.png"></li>
					<li class="reel"><img src="https://1.bp.blogspot.com/-UbN0yy2MMrM/XaKa5_0WWUI/AAAAAAABVj8/-YGIDDkzgPUkGRe9odTWisMXeIZBTK9wgCNcBGAsYHQ/s180-c/food_curryrice_white.png"></li>
					<li class="reel"><img src="http://4.bp.blogspot.com/-SmXTKx3nBcA/UrlnHYwXxoI/AAAAAAAAcOA/erB3n3GC80E/s180-c/ramen_syouyu.png"></li>
					<li class="reel"><img src="http://1.bp.blogspot.com/-Hli6afTS54w/UgSMCMQNnNI/AAAAAAAAW6c/FXu-zvewMWY/s180-c/food_hamburg.png"></li>
					<li class="reel"><img src="http://2.bp.blogspot.com/-RB1mDuQvGkI/USyJ0W9QfKI/AAAAAAAAObc/Idip0N8CFUw/s180-c/nigirizushi_moriawase.png"></li>
				</ul>
			</div>
		</div>
		<div>
			<button type="button" class="btn-start">start</button>
			<button type="button" class="btn-reset" disabled="true">reset</button>
		</div>
		<div>
			<button type="button" class="btn-stop" data-val="0" disabled="true">stop 0</button>
			<button type="button" class="btn-stop" data-val="1" disabled="true">stop 1</button>
			<button type="button" class="btn-stop" data-val="2" disabled="true">stop 2</button>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script>
			(function (global) {
				"use strict";

				var sec = 100;

				var $reels       = [],
					stopReelFlag = [],
					reelCounts   = [];

				var slotFrameHeight     = 0,
					slotReelsHeight     = 0,
					slotReelItemHeight  = 0,
					slotReelStart       = 0,
					slotReelStartHeight = 0;

				var Slot = {

					init: function init() {
						$reels[0] = $reels[1] = $reels[2] = null;
						stopReelFlag[0] = stopReelFlag[1] = stopReelFlag[2] = false;
						reelCounts[0] = reelCounts[1] = reelCounts[2] = 0;
					},

					start: function () {
						for (var index = 0; index<3; index++) {
							Slot.animation(index);
						}
					},

					stop: function (index) {
						stopReelFlag[index] = true;
						if (stopReelFlag[0] && stopReelFlag[1] && stopReelFlag[2]) {

							$('.btn-reset').attr('disabled', false);
						}
					},

					resetLocationInfo: function () {
						slotFrameHeight    = $('.slot-frame').outerHeight();
						slotReelsHeight    = $('.reels').eq(0).outerHeight();
						slotReelItemHeight = $('.reel').eq(0).outerHeight();
						slotReelStart      = 5 - 2;

						slotReelStartHeight = -slotReelsHeight;
						slotReelStartHeight = slotReelStartHeight + slotFrameHeight + ((slotReelItemHeight * 3 / 2) - (slotFrameHeight / 2));

						$('.reels').css({
							'top':slotReelStartHeight
						});
					},

					animation: function (index) {
						console.log('アニメーション', '開始', index);
						if (reelCounts[index] >= 5) {
							reelCounts[index] = 0;
						}

						console.log('slotReelStartHeight', slotReelStartHeight);
						console.log('reelCounts[index]', reelCounts[index]);
						console.log('slotReelsHeight', slotReelsHeight);
						console.log('top', slotReelStartHeight + (reelCounts[index] * slotReelItemHeight));

						$('.reels').eq(index).animate({
							'top': slotReelStartHeight + (reelCounts[index] * slotReelItemHeight)
						}, {
							duration: sec,
							easing: 'linear',
							complete: function () {
								console.log('アニメーション', '完了', index, reelCounts[index]);
								if (stopReelFlag[index]) {
									console.log('アニメーション', 'ストップ', index, reelCounts[index]);
									return ;
								}

								reelCounts[index]++;

								Slot.animation(index);
							}
						});
					},
				};

				global.Slot = Slot;

			})((this || 0).self || global);

			$(document).ready(function () {

				Slot.init();
				Slot.resetLocationInfo();

				$('.btn-start').click(function () {

					$(this).attr('disabled', true);

					Slot.start();

					$('.btn-stop').attr('disabled', false);
				});

				$('.btn-reset').click(function () {

					$(this).attr('disabled', true);

					$('.btn-start').attr('disabled', false);

					$('.btn-stop').attr('disabled', true);

					Slot.init();
				});

				$('.btn-stop').click(function () {

					$(this).attr('disabled', true);

					Slot.stop($(this).attr('data-val'));
				});

			});
		</script>
	</body>
</html>
