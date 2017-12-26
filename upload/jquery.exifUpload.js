
;(function ($) {
  
  $.fn.exifUpload = function (options) {
    var that=this;
    options = $.extend({
        wrap:null,              //包裹图片的容器，必须是ul
        uploadNumber:3,         //可上传的张数
        maxSize:5,              //图片最大的体积
        minSize:100000,         //最小压缩边界
        uploaded:function($curFile){}   //上传完成回调，参数(当前上传input按钮jq对象)
    }, options);

    options.maxSize = options.maxSize * 1000000;
    
    var pulgin={
        uploadLayer:function(opt){
          opt = $.extend({
            content:'',
            time:2  
          }, opt);
          if($('.uploadLayer').get(0)){
            $('.uploadLayer').remove();
          };
          var uploadLayer='<div class="uploadLayer">\
                              <div class="LayerBox">\
                                <div><span>'+opt.content+'</span></div>\
                              </div>\
                          </div>';
          this.setLayerCss();
          $('body').append(uploadLayer);
          var timer=null
          timer=setTimeout(function(){
            $('.uploadLayer').remove();
          },opt.time*1000)    
        },
        setLayerCss:function (){
          if($('#layerCss').get(0)) return;
          var style = '<style id="layerCss">\
                  .uploadLayer .LayerBox{\
                    display:table;\
                    position:fixed;\
                    left:0;\
                    top:0;\
                    width:100%;\
                    height:100%;\
                    z-index:10;\
                  }\
                  .uploadLayer .LayerBox div{\
                    display:table-cell;\
                    text-align:center;\
                    vertical-align:middle;\
                  }\
                  .uploadLayer span{\
                      display:inline-block;\
                      padding:10px 20px;\
                      line-height:22px;\
                      text-align:center;\
                      background:rgba(0,0,0,.7);\
                      color:#fff;\
                      font-size:14px;\
                      box-sizing:content-box;\
                      border-radius:6px;\
                      animation:upload-anim-scale .2s both;\
                  }\
                  @-webkit-keyframes upload-anim-scale {\
                      0% {\
                          opacity: 0;\
                          -webkit-transform: scale(.5);\
                          transform: scale(.5)\
                      }\
                      100% {\
                          opacity: 1;\
                          -webkit-transform: scale(1);\
                          transform: scale(1)\
                      }\
                  }\
                  @keyframes upload-anim-scale {\
                      0% {\
                          opacity: 0;\
                          -webkit-transform: scale(.5);\
                          transform: scale(.5)\
                      }\
                      100% {\
                          opacity: 1;\
                          -webkit-transform: scale(1);\
                          transform: scale(1)\
                      }\
                  }</style>';
          $('head').append(style);
        },
        slide:function(){
          var uploadImgs=$(options.wrap),
              slideImg=$('.slideBox img'),
              next=$('.nextBtn'),
              prev=$('.prevBtn'),
              index=0,
              size=0,
              _this=this;
          uploadImgs.on('click','li',function(){
            var src=$(this).find('img').attr('src');
            size=uploadImgs.find('li').size();
            index=$(this).index();
            _this.showHideBtn(index,size);
            slideImg.attr('src',src).parents('.slideBox').css('visibility','visible');
          })

          // 图片切换、关闭预览
          $('.slideBox i').click(function(event) {
            if($(this).hasClass('tabImg')){
              if($(this).hasClass('prevBtn')){
                if(index != 0) index--;
              }else{
                if(index < size-1) index++;
              }
              _this.showHideBtn(index,size);
              var src=uploadImgs.find('li').eq(index).find('img').attr('src');
              slideImg.attr('src',src)
            }else{
              // 关闭按钮
              slideImg.parents('.slideBox').css('visibility','hidden');
            }
          });
            
        },
        showHideBtn:function(index,size){
          var next=$('.nextBtn'),
              prev=$('.prevBtn');
          $('.nextBtn,.prevBtn').show();
          index == size-1 
            ? next.hide() 
            : index == 0 
              ? prev.hide() 
              :  '';
          if(size == 1){
            $('.nextBtn,.prevBtn').hide()
          }
        },
        handle:function(){
          var uploadImgs=$(options.wrap);
          uploadImgs.on('click','li .removeImg',function(event){
            event.stopPropagation();
            var li=$(this).parents('li');
            if(confirm("要删除该图片吗？")){
              li.remove();
                $('.uploadBtn').show();
                uploadImgs.find('li').size() == 0 
                && uploadImgs.find('span').show() 
                && $(that).val('').trigger('change');
            }
          })
        },
        init:function(){
          this.slide();
          this.handle();
        }
    };
    pulgin.init();

    return this.each(function () {
      var $this=$(this);
      $(this).get(0).onchange=function(event){
        var files=this.files,
            _len=files.length,
            rFilter = /^(image\/jpeg|image\/png)$/i,
            Orientation=null,
            oReader=new FileReader();

        if(!oReader) return;

        if(!EXIF) return;

        if($(options.wrap).find('li').size() > options.uploadNumber-1){
            pulgin.uploadLayer({
                content:'最多只能上传'+options.uploadNumber+'张图片',
                time:2
            });
            return;
        }
              
        for(var i=0; i<_len; i++){
          if(!rFilter.test(files[i].type)){
              return;
          };
          var file=files[i],
              fileType=file.type,
              size = file.size;

          if(size > options.maxSize){
              pulgin.uploadLayer({
                  content:'上传的图片过大,请重新选择图片',
                  time:2
              });
              return;
          }
          pulgin.uploadLayer({content:'图片上传中..',time:20})
          

          EXIF.getData(file,function(){
              Orientation = EXIF.getTag(this,'Orientation');
          })

          
          

          oReader.readAsDataURL(file);
          oReader.onload=function(e){
              var result = e.target.result;
              var img = new Image();
              img.src = result;
              
              img.onload=function(){
                var cvs=document.createElement('canvas');
                var ctx = cvs.getContext('2d');
                 var scale = 1;          //预留压缩比
                cvs.width = this.width * scale;
                cvs.height = this.height * scale;//计算等比缩小后图片宽高

                if(Orientation && Orientation != 1){
                  switch(Orientation){
                    case 6:     // 旋转90度
                      cvs.width = this.height * scale;
                      cvs.height = this.width * scale;
                      ctx.rotate(Math.PI / 2);
                      // (0,-imgHeight) 从旋转原理图那里获得的起始点
                      ctx.drawImage(
                          this, 
                          0,
                          -this.height * scale,  
                          this.width * scale, 
                          this.height * scale  
                      );
                      break;
                    case 3:     // 旋转180度
                      ctx.rotate(Math.PI);
                      ctx.drawImage(
                          this, 
                          this.width * scale, 
                          -this.height * scale,  
                          this.width * scale, 
                          this.height * scale
                      );
                      break;
                    case 8:     // 旋转-90度
                      cvs.width = this.height * scale;
                      cvs.height = this.width * scale;
                      ctx.rotate(3 * Math.PI / 2);
                      ctx.drawImage(
                          this, 
                          -this.width * scale, 0,  
                          this.width * scale, 
                          this.height * scale
                      );
                      break;
                  }
                }else{
                  ctx.drawImage(this, 0, 0,  cvs.width, cvs.height);
                }
                /* ctx.drawImage(this, 0, 0, cvs.width, cvs.height);*/
                if(size<options.minSize){    
                   //小于压缩临界的，压缩0.5                              
                  var newImageData = cvs.toDataURL(fileType, 0.5); 
                }else {
                   //大于压缩临界的，根据原图的大小动态设置压缩比
                  var sca=1/(Math.sqrt([size/options.minSize])); //
                  var newImageData = cvs.toDataURL(fileType, sca);
                }
                var indexImg=$(options.wrap).find('li').size(),
                    id=$(options.wrap).parents('form').find('[name=orderItemIds]').val(),
                    img='<li>\
                          <div>\
                            <div>\
                            <img  src="'+newImageData+'" />\
                            </div>\
                            <a href="javascript:;" class="removeImg">x</a>\
                          </div>\
                          <input \
                          type="hidden" \
                          name="img'+indexImg+'_'+id+'_base64" \
                          value="'+newImageData+'" />\
                        </li>';  //创建预览对象
                $(options.wrap).append(img);   //图片预览容器
                pulgin.uploadLayer({content:'上传完毕！',time:1})
                options.uploaded($this);
              }
          }
        }
      }
    });
  }

})(jQuery);