
var footbal_photos = [
  	{src: 'img/football/SAM_5905.JPG'}, 
	{src: 'img/football/SAM_5906.JPG'}, 
	{src: 'img/football/SAM_5907.JPG'}, 
	{src: 'img/football/SAM_5908.JPG'}, 
	{src: 'img/football/SAM_5909.JPG'}, 
	{src: 'img/football/SAM_5911.JPG'}, 
	{src: 'img/football/SAM_5913.JPG'}, 
	{src: 'img/football/SAM_5914.JPG'}, 
	{src: 'img/football/SAM_5916.JPG'}, 
	{src: 'img/football/SAM_5917.JPG'}, 
	{src: 'img/football/SAM_5920.JPG'}, 
	{src: 'img/football/SAM_5921.JPG'}, 
	{src: 'img/football/SAM_5922.JPG'}, 
	{src: 'img/football/SAM_5924.JPG'}, 
	{src: 'img/football/SAM_5925.JPG'}, 
	{src: 'img/football/SAM_5928.JPG'}, 
	{src: 'img/football/SAM_5932.JPG'}, 
	{src: 'img/football/SAM_5937.JPG'}, 
	{src: 'img/football/SAM_5938.JPG'}, 
	{src: 'img/football/SAM_5939.JPG'}, 
	{src: 'img/football/SAM_5941.JPG'}, 
	{src: 'img/football/SAM_5952.JPG'}, 
	{src: 'img/football/SAM_5956.JPG'}, 
	{src: 'img/football/SAM_5959.JPG'}, 
	{src: 'img/football/SAM_5960.JPG'}, 
	{src: 'img/football/SAM_5965.JPG'}, 
	{src: 'img/football/SAM_5967.JPG'}, 
	{src: 'img/football/SAM_5973.JPG'}, 
	{src: 'img/football/SAM_5974.JPG'}, 
	{src: 'img/football/SAM_5978.JPG'}, 
	{src: 'img/football/SAM_5980.JPG'}, 
	{src: 'img/football/SAM_5981.JPG'}, 
	{src: 'img/football/SAM_5984.JPG'}, 
	{src: 'img/football/SAM_5987.JPG'}, 
	{src: 'img/football/SAM_5988.JPG'}, 
	{src: 'img/football/SAM_5991.JPG'}, 
	{src: 'img/football/SAM_5992.JPG'}, 
	{src: 'img/football/SAM_5997.JPG'}, 
	{src: 'img/football/SAM_5998.JPG'}, 
	{src: 'img/football/SAM_5999.JPG'}, 
	{src: 'img/football/SAM_6000.JPG'}, 
	{src: 'img/football/SAM_6001.JPG'}, 
	{src: 'img/football/SAM_6002.JPG'}, 
	{src: 'img/football/SAM_6003.JPG'}, 
	{src: 'img/football/SAM_6013.JPG'}, 
	{src: 'img/football/SAM_6025.JPG'}, 
	{src: 'img/football/SAM_6026.JPG'}, 
	{src: 'img/football/SAM_6027.JPG'}, 
	{src: 'img/football/SAM_6028.JPG'}, 
	{src: 'img/football/SAM_6032.JPG'}, 
	{src: 'img/football/SAM_6034.JPG'}, 
	{src: 'img/football/SAM_6036.JPG'}, 
	{src: 'img/football/SAM_6037.JPG'}, 
	{src: 'img/football/SAM_6038.JPG'}, 
	{src: 'img/football/SAM_6039.JPG'}, 
	{src: 'img/football/SAM_6040.JPG'}, 
	{src: 'img/football/SAM_6042.JPG'}, 
	{src: 'img/football/SAM_6044.JPG'}, 
	{src: 'img/football/SAM_6045.JPG'}, 
	{src: 'img/football/SAM_6046.JPG'}, 
	{src: 'img/football/SAM_6047.JPG'}, 
	{src: 'img/football/SAM_6048.JPG'}, 
	{src: 'img/football/SAM_6050.JPG'}, 
	{src: 'img/football/SAM_6054.JPG'}, 
	{src: 'img/football/SAM_6055.JPG'}
  ]



$('#football-photo-btn img').attr('src', footbal_photos[Math.floor(Math.random()*footbal_photos.length)].src)

$('#football-photo-btn').magnificPopup({
  items: footbal_photos,
  type: 'image',
  gallery: {
    	enabled: true,
    preload: [0,2], 

	  navigateByImgClick: true,
	
	  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
	
	  tPrev: 'Previous (Left arrow key)', 
	  tNext: 'Next (Right arrow key)', 
	  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
  },
})

var chancealot_photos = [
	{src: 'img/chancealot/IMG_1042.JPG'}, 
	{src: 'img/chancealot/IMG_1052.JPG'}, 
	{src: 'img/chancealot/IMG_1063.JPG'}, 
	{src: 'img/chancealot/IMG_1075.JPG'}, 
	{src: 'img/chancealot/IMG_1078.JPG'}, 
	{src: 'img/chancealot/IMG_1079.JPG'}, 
	{src: 'img/chancealot/IMG_1080.JPG'}, 
	{src: 'img/chancealot/IMG_1082.JPG'}, 
	{src: 'img/chancealot/IMG_1085.JPG'}, 
	{src: 'img/chancealot/IMG_1104.JPG'}, 
	{src: 'img/chancealot/IMG_1105.JPG'}, 
	{src: 'img/chancealot/IMG_1109.JPG'}, 
	{src: 'img/chancealot/IMG_1111.JPG'}, 
	{src: 'img/chancealot/IMG_1112.JPG'}, 
	{src: 'img/chancealot/IMG_1115.JPG'}, 
	{src: 'img/chancealot/IMG_1116.JPG'}, 
	{src: 'img/chancealot/IMG_1118.JPG'}, 
	{src: 'img/chancealot/IMG_1121.JPG'}, 
	{src: 'img/chancealot/IMG_1126.JPG'}
  ]
  

$('#chancealot-photo-btn img').attr('src', chancealot_photos[Math.floor(Math.random()*chancealot_photos.length)].src)

$('#chancealot-photo-btn').magnificPopup({
  items: chancealot_photos,
  type: 'image',
  gallery: {
    	enabled: true,
    preload: [0,2], 

	  navigateByImgClick: true,
	
	  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
	
	  tPrev: 'Previous (Left arrow key)', 
	  tNext: 'Next (Right arrow key)', 
	  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
  },
})


















