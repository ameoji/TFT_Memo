function initialized() {
  $('#pick-items').empty();
  $('#wrap-items').empty();
  ITEM_TABLE.forEach(function (row) {
    var src = row['img_src'];
    if(src == ''){
      src = './tmp/img.png';
    }
    var str = '' +
      '<li class="item-box wh-50 pick-box" id="' + row['name'] + '">' +
      '  <div class="img-box wh-46">' +
      '    <img src="' + src + '" class="wh-46 img-item" />' +
      '  </div>' +
      '</li>';
    $('#pick-items').append(str);
  });
}


/*---------------------------------------
チェックボックスの挙動
---------------------------------------*/
$(document).on('click', '.chk-shadow' , function() {
  console.log('chk-shadow clicked');
  var target =  $(this).parents('.selected-box').find('.comp');
  target.toggleClass(FLAG_IS_SHADOWN);
});


/*---------------------------------------
アイテム選択時の挙動
---------------------------------------*/
$(document).on('click', '.selected-box .item-box' , function() {
  console.log('item-box clicked');
  $(this).toggleClass('is-selected');
});


/*---------------------------------------
アイテム削除時の挙動
---------------------------------------*/
$(document).on('click', '.btn-delete' , function() {
  console.log('btn-delete clicked');
  $(this).parents('.selected-box').remove();
});


/*---------------------------------------
使うアイテムを選択するボックスの挙動
---------------------------------------*/
$(document).on('click', '.pick-box' , function() {
  console.log('pick-box clicked');
  var ID = $(this).attr('id');
  getItemData(ID,false); 
});


/*---------------------------------------
削除ボタン押下時の挙動
---------------------------------------*/
$(document).on('click', '#btn-clear' , function(d) {
  $('#wrap-items').empty();
  $('#template-box').val("");
});


/*---------------------------------------
保存ボタン押下時の挙動
---------------------------------------*/
$(document).on('click', '#btn-save', function (d) {
  console.log('btn-save');
  var target = {data:[]};
  $('#wrap-items').children().each(function (index, element){
    console.log(index);
    var row = {};
    row['name'] = $(element).attr('item-name');
    row['isShadow'] = $(element).find('.chk-shadow').prop('checked');
    target['data'].push(row);
  });

  const a = document.createElement('a');
  a.href = 'data:text/plain,' + encodeURIComponent(JSON.stringify(target));
  a.download = 'template.json';

  a.style.display = 'none';
  document.body.appendChild(a); // ※ DOM が構築されてからでないとエラーになる
  a.click();
  document.body.removeChild(a);
});


/*---------------------------------------
読込ボタン押下時の挙動
---------------------------------------*/
$(document).on('change', '#btn-load', function (d) {
  $('#wrap-items').empty();
  var file = d.target.files;
  var reader = new FileReader();
  reader.readAsText(file[0]);
  reader.onload = function (ev) {
    var data = JSON.parse(reader.result);
    data['data'].forEach(function (row){
      console.log(row);
      getItemData(row['name'],row['isShadow']);
    })
  }
});


/*---------------------------------------
テンプレート選択時の挙動
---------------------------------------*/
$(document).on('change', '#template-box' , function(d) {
  $('#wrap-items').empty();
  var target = getTemplate(d.target.value);
  if(target != ''){
    target.forEach(function (row){
      getItemData(row['name'],row['isShadow']); 
    });
  }
});


/*---------------------------------------
アイテムの構成情報を取得
---------------------------------------*/
function getItemData(name, isShadow = false){
  var data = null;
  ITEM_TABLE.forEach(function (row){
    if(name == row['name']){
      console.log('found');
      data = row;
    }
  });

  var strShadow = '';
  var strShadowFlag = '';
  if(isShadow){
    strShadow = FLAG_IS_SHADOWN;
    strShadowFlag = 'checked="checked"';
  }

  var str = '' +
    '<div class="selected-box" item-name="' + name +'">' +
    '  <input type="checkbox" class="chk-shadow" ' + strShadowFlag +'/>' +
    '  <ul id="items1" class="items">' +
    '    <li class="item-box wh-50 comp ' + strShadow +'">' +
    '      <div class="img-box wh-46">' +
    '        <img src="' + data['img_src'] + '" class="wh-46 img-item" />' +
    '      </div>' +
    '    </li>' +
    '    <li class="item-box wh-50">' +
    '      <div class="img-box wh-46">' +
    '        <img src="' + getPartsURL(data['parts1']) + '" class="wh-46 img-item" />' +
    '      </div>' +
    '    </li>' +
    '    <li class="item-box wh-50">' +
    '      <div class="img-box wh-46">' +
    '        <img src="' + getPartsURL(data['parts2']) + '" class="wh-46 img-item" />' +
    '      </div>' +
    '    </li>' +
    '  </ul>' +
    '  <div class="btn-box">' +
    '    <input type="button" class="btn-delete" value="del" />' +
    '  </div>' +
    '</div>' ; 
  $('#wrap-items').append(str);
}

function getPartsURL(name){
  var ret = ''; 
  PARTS_TABLE.forEach(function (row){
    if(name == row['name']){
      ret = row['src'];
    }
  });
  return ret;
}