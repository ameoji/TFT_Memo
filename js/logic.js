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
  target.toggleClass('is-shadow');
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
  
  var data = null;
  ITEM_TABLE.forEach(function (row){
    if(ID == row['name']){
      console.log('found');
      data = row;
    }
  });
  
  var str = '' +
    '<div class="selected-box">' +
    '  <input type="checkbox" class="chk-shadow" />' +
    '  <ul id="items1" class="items">' +
    '    <li class="item-box wh-50 comp">' +
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
  
});

function getPartsURL(name){
  var ret = ''; 
  PARTS_TABLE.forEach(function (row){
    if(name == row['name']){
      ret = row['src'];
    }
  });
  return ret;
}