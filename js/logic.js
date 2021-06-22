function initialized() {
  $('#pick-items').empty();
  $('#need-parts').empty();
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

  PARTS_TABLE.forEach(function (row) {
    var src = row['src'];
    if(src == ''){
      src = './tmp/img.png';
    }
    var str = '' +
      '<li id="' + row['name'] + '">' +
      '  <div class="img-box wh-46 parts-img">' +
      '    <img src="' + src + '" class="wh-46 img-item" />' +
      '  </div>' +
      '  <div class="parts-cross">×</div>' +
      '  <div class="parts-amounts" item-name="' + row['name'] + '">0</div>' +
      '</li>';
    $('#need-parts').append(str);
  });
  calculatePartsAmounts();
}


/*---------------------------------------
使うアイテムを選択するボックスの挙動
---------------------------------------*/
$(document).on('click', '.pick-box' , function() {
  var ID = $(this).attr('id');
  getItemData(ID,false); 
  calculatePartsAmounts();
});


//------------------------------選択したアイテムに対する挙動 START------------------------------

/*---------------------------------------
チェックボックスの挙動
---------------------------------------*/
$(document).on('click', '.chk-shadow' , function() {
  var target =  $(this).parents('.selected-box').find('.comp');
  target.toggleClass(FLAG_IS_SHADOWN);
});


/*---------------------------------------
アイテム選択時の挙動(親)
---------------------------------------*/
$(document).on('click', '.selected-box .comp' , function() {
  $(this).toggleClass(FLAG_IS_SELECTED);

  //親の状態を粉に反映させる
  var isSelected = $(this).hasClass(FLAG_IS_SELECTED)
  $(this).parents('ul').children('.parts').each(function (index, element){
    if(isSelected){
      $(element).addClass(FLAG_IS_SELECTED);
    }else{
      $(element).removeClass(FLAG_IS_SELECTED);
    }
  });
  calculatePartsAmounts();
});


/*---------------------------------------
アイテム選択時の挙動(子供)
---------------------------------------*/
$(document).on('click', '.selected-box .parts' , function() {
  $(this).toggleClass(FLAG_IS_SELECTED);

  //子２つの状態を親に反映させる
  var selectedCount = 0;
  $(this).parents('ul').children('.parts').each(function (index, element){
    if($(element).hasClass(FLAG_IS_SELECTED)){
      selectedCount++;
    }
  });
  if(selectedCount == 2){
    $(this).parents('ul').children('.comp').addClass(FLAG_IS_SELECTED);
  }else{
    $(this).parents('ul').children('.comp').removeClass(FLAG_IS_SELECTED);
  }
  calculatePartsAmounts();
});  


/*---------------------------------------
アイテム削除時の挙動
---------------------------------------*/
$(document).on('click', '.btn-delete' , function() {
  $(this).parents('.selected-box').remove();
  calculatePartsAmounts();
});

//------------------------------選択したアイテムに対する挙動 END------------------------------


/*---------------------------------------
all clear ボタン押下時の挙動
---------------------------------------*/
$(document).on('click', '#btn-clear' , function(d) {
  $('#wrap-items').empty();
  $('#template-box').val("");
  calculatePartsAmounts();
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
  calculatePartsAmounts();
});


/*---------------------------------------
保存ボタン押下時の挙動
---------------------------------------*/
$(document).on('click', '#btn-save', function (d) {
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
    calculatePartsAmounts();
  }
});


/*---------------------------------------
アイテムの構成情報を取得
---------------------------------------*/
function getItemData(name, isShadow = false){
  var data = null;
  ITEM_TABLE.forEach(function (row){
    if(name == row['name']){
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
    '  <ul class="items">' +
    '    <li class="item-box wh-50 comp ' + strShadow +'">' +
    '      <div class="img-box wh-46">' +
    '        <img src="' + data['img_src'] + '" class="wh-46 img-item" />' +
    '      </div>' +
    '    </li>' +
    '    <li class="item-box wh-50 parts" item-name="' + data['parts1'] + '">' +
    '      <div class="img-box wh-46">' +
    '        <img src="' + getPartsURL(data['parts1']) + '" class="wh-46 img-item" />' +
    '      </div>' +
    '    </li>' +
    '    <li class="item-box wh-50 parts" item-name="' + data['parts2'] + '">' +
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


/*---------------------------------------
必要なパーツ数を計算する
---------------------------------------*/
function calculatePartsAmounts(){
  
  var partsAmount = {};
  PARTS_TABLE.forEach(function (row){
    partsAmount[row['name']] = 0;
  });
  
  //選択中のアイテムから必要パーツ数を計算
  $('#wrap-items').children().each(function (index, p_element){
    $(p_element).find('.parts').each(function (index,c_element){
      if($(c_element).hasClass(FLAG_IS_SELECTED) == false){
        partsAmount[$(c_element).attr('item-name')] += 1;
      }
    }); 
  });

  console.log(partsAmount);
  //パーツ数をパーツリストに付与
  $('#need-parts').find('.parts-amounts').each(function (index, element){
    $(element).text(partsAmount[$(element).attr('item-name')]);

    //必要数に応じて表示を変更
    if(partsAmount[$(element).attr('item-name')] == 0){
      $(element).css('color','black');
      $(element).parent().css('display','none');
    }else if(partsAmount[$(element).attr('item-name')] == 1){
      $(element).css('color','black');
      $(element).parent().css('display','inline-block');
    }else if(partsAmount[$(element).attr('item-name')] <= 2){
      $(element).css('color','blue');
      $(element).parent().css('display','inline-block');
    }else if(partsAmount[$(element).attr('item-name')] > 2){
      $(element).css('color','red');
      $(element).parent().css('display','inline-block');
    }
  });
}