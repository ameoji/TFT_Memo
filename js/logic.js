function initialized() {
  $('#pick-items').empty();
  $('#pick-champions').empty();
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

  for(var i = 1; i <= 5; i++){ 
    CHAMPIONS_TABLE[i].forEach(function (row) {
        var src = row['src'];
        if (src == '') {
          src = './tmp/img.png';
        }
        var str = '' +
          '<li class="item-box wh-50 pick-champion-box" id="' + row['name'] + '" cost="' + i + '">' +
          '  <div class="img-box wh-46">' +
          '    <img src="' + src + '" class="wh-46 img-item" />' +
          '  </div>' +
          '</li>';
        $('#pick-champions').append(str);
    });
    $('#pick-champions').append('<br>');
  }

  calculatePartsAmounts();
  updateSortable()
}

/*---------------------------------------
タブの切り替え
---------------------------------------*/
$(document).on('click', '.tab-button' , function() {
  $('.tab-button').each(function (index, element){
    $(element).removeClass(FLAG_IS_ACTIVE);
  });
  $(this).addClass(FLAG_IS_ACTIVE);

  $('.tabs').each(function (index, element){
    $(element).css('display','none');
  });
  $('#' + $(this).attr('target')).css('display','block');
});

/*---------------------------------------
使うアイテムを選択するボックスの挙動
---------------------------------------*/
$(document).on('click', '.pick-box' , function() {
  var ID = $(this).attr('id');
  $('#wrap-items').append(getItemData(ID,false));
  updateSortable();
  calculatePartsAmounts();
});

/*---------------------------------------
使うチャンピオンを選択するボックスの挙動
---------------------------------------*/
$(document).on('click', '.pick-champion-box' , function() {
  var ID = $(this).attr('id');
  // $('#wrap-items').append(getItemData(ID,false));

  var cost_champions = CHAMPIONS_TABLE[$(this).attr('cost')];
  cost_champions.forEach(function (row){
    if(row['name'] == ID){
      addGroupBox(ID,'',row['items']);
    }
  });

  updateSortable();
  calculatePartsAmounts();
});


//------------------------------選択したアイテムに対する挙動 START------------------------------

/*---------------------------------------
チェックボックスの挙動
---------------------------------------*/
$(document).on('mousedown', '.dd-box' , function() {
  $('#wrap-items').sortable();
});


/*---------------------------------------
シャドウチェックボックスの挙動
---------------------------------------*/
$(document).on('click', '.chk-shadow' , function() {
  var target_img =  $(this).parents('.label-chk').find('.img-fire');
  target_img.toggleClass(FLAG_IS_SELECTED);
  
  var target =  $(this).parents('.selected-box');
  target.toggleClass(FLAG_IS_SHADOWN);
  
});


/*---------------------------------------
必須チェックボックスの挙動
---------------------------------------*/
$(document).on('click', '.chk-required' , function() {
  var target_img =  $(this).parents('.label-chk').find('.img-required');
  target_img.toggleClass(FLAG_IS_SELECTED);

  var target =  $(this).parents('.selected-box');
  target.toggleClass(FLAG_IS_REQUIRED);

  calculatePartsAmounts();
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
  clearGroupBox();
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
      $('#wrap-items').append(getItemData(row['name'],row['isShadow']));
      updateSortable();
    });
  }
  calculatePartsAmounts();
  updateSortable()
});


/*---------------------------------------
保存ボタン押下時の挙動
---------------------------------------*/
$(document).on('click', '#btn-save', function (d) {
  var target = {data:[]};
  $('#wrap-items').children().each(function (index, element){
    var row = {};
    row['name'] = $(element).attr('item-name');
    row['isShadow'] = $(element).find('.chk-shadow').prop('checked');
    row['isRequired'] = $(element).find('.chk-required').prop('checked');
    target['data'].push(row);
  });

  var arr = [];
  $('#wrap-groups').find('.group-box').each(function (index, element){
    var gbox = {};
    gbox['title'] = $(element).find('.group-text').val();
    gbox['memo'] = $(element).find('.etc').val();
    
    gbox['data'] = [];
    $(element).find('.selected-box').each(function (index, g_element){
      var row = {};
      row['name'] = $(g_element).attr('item-name');
      row['isShadow'] = $(g_element).find('.chk-shadow').prop('checked');
      row['isRequired'] = $(g_element).find('.chk-required').prop('checked');
      gbox['data'].push(row);
    });

    arr.push(gbox);
  });
  target['groups']=arr;

  console.log(target);
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
  $('#wrap-groups').empty();
  $('#template-box').val("");
  var file = d.target.files;
  var reader = new FileReader();
  reader.readAsText(file[0]);
  reader.onload = function (ev) {
    var data = JSON.parse(reader.result);
    data['data'].forEach(function (row){
      console.log(row);
      $('#wrap-items').append(getItemData(row['name'],row['isShadow'],row['isRequired']));
      updateSortable();
    });

    data['groups'].forEach(function (gp){
      addGroupBox(gp['title'],gp['memo'],gp['data']);
    });

    calculatePartsAmounts();
    updateSortable();
  }
});


/*---------------------------------------
グループ追加ボタン押下時
---------------------------------------*/
$(document).on('click', '#btn-add-group', function (d) {
  addGroupBox('','',null);
  updateSortable();
});

function addGroupBox(title,memo,data){
  var s = '';
  if(data != null){
    data.forEach(function (r){
      s+= getItemData(r['name'],r['isShadow'],r['isRequired']);
    });
  }

  var rand = Math.random();
  var str = '' +
      '<div class="group-box">' +
      '  <input type="text" class="group-text" value="' + title + '"/>' +
      '  <div class="sortable-area group-items">' + s + '</div>' +
      '  <div class="btn-group-box">' +
      '    <label for="g_del_' + rand + '" class="label-group-del">' +
      '      <img src="./img/trash.svg" class="img-group-del" />' +
      '      <input type="button" class="btn-group-delete" value="del" id="g_del_' + rand + '"/>' +
      '    </label>' +
      '  </div>' +
      '  <textarea class="etc">' + memo + '</textarea>' +
      '</div>';
  $('#wrap-groups').append(str);
}


/*---------------------------------------
アイテム削除時の挙動
---------------------------------------*/
$(document).on('click', '.btn-group-delete' , function() {
  $(this).parents('.group-box').remove();
  calculatePartsAmounts();
});


/*---------------------------------------
アイテムの構成情報を取得
---------------------------------------*/
function getItemData(name, isShadow = false, isRequired = false){
  var data = null;
  ITEM_TABLE.forEach(function (row){
    if(name == row['name']){
      data = row;
    }
  });

  if(data['parts1'] == S_HERA || data['parts2'] == S_HERA ){
    isShadow = true;
  }

  var strShadow = '';
  var strShadowFlag = '';
  var strShadowSelected = '';
  if(isShadow){
    strShadow = FLAG_IS_SHADOWN;
    strShadowFlag = 'checked="checked"';
    strShadowSelected = FLAG_IS_SELECTED;
  }

  var strRequired = '';
  var strRequiredFlag = '';
  var strRequiredSelected = '';
  if(isRequired){
    strRequired = FLAG_IS_REQUIRED;
    strRequiredFlag = 'checked="checked"';
    strRequiredSelected = FLAG_IS_SELECTED;
  }

  var rand = Math.random();
  var rand2 = Math.random();
  var rand3 = Math.random();
  var str = '' +
    '<div class="selected-box ' + strShadow +' ' + strRequired +'" item-name="' + name +'">' +
    '  <div class="dd-box"></div>' +
    '  <div class="chk-box">' +
    '    <label for="' + rand2 + '" class="label-chk">' +
    '      <input type="checkbox" class="chk-shadow" ' + strShadowFlag +' id="' + rand2 + '"/>' +
    '      <img src="./img/fire.svg" class="wh-22 img-fire ' + strShadowSelected +'" />' +
    '    </label>' +
    '    <label for="' + rand3 + '" class="label-chk">' +
    '      <input type="checkbox" class="chk-required" ' + strRequiredFlag +' id="' + rand3 + '"/>' +
    '      <img src="./img/check.svg" class="wh-22 img-required ' + strRequiredSelected +'" />' +
    '    </label>' +
    '  </div>' +
    '  <ul class="items">' +
    '    <li class="item-box wh-48 comp">' +
    '      <div class="img-box wh-46">' +
    '        <img src="' + data['img_src'] + '" class="wh-44 img-item" />' +
    '      </div>' +
    '    </li>' +
    '    <li class="item-box wh-48 parts" item-name="' + data['parts1'] + '">' +
    '      <div class="img-box wh-46">' +
    '        <img src="' + getPartsURL(data['parts1']) + '" class="wh-44 img-item" />' +
    '      </div>' +
    '    </li>' +
    '    <li class="item-box wh-48 parts" item-name="' + data['parts2'] + '">' +
    '      <div class="img-box wh-46">' +
    '        <img src="' + getPartsURL(data['parts2']) + '" class="wh-44 img-item" />' +
    '      </div>' +
    '    </li>' +
    '  </ul>' +
    '  <div class="btn-box">' +
    '    <label for="del_' + rand + '" class="label-del">' +
    '      <img src="./img/trash.svg" class="img-del" />' +
    '      <input type="button" class="btn-delete" value="del" id="del_' + rand + '"/>' +
    '    </label>' +
    '  </div>' +
    '</div>' ; 
  return str;
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
  //一時アイテム欄
  $('#wrap-items').children().each(function (index, p_element){
    if($(p_element).hasClass(FLAG_IS_REQUIRED)){
      $(p_element).find('.parts').each(function (index,c_element){
        if($(c_element).hasClass(FLAG_IS_SELECTED) == false){
          partsAmount[$(c_element).attr('item-name')] += 1;
        }
      }); 
    }
  });
  //グループボックス欄
  $('#wrap-groups').find('.selected-box').each(function (index, p2_element){
    if($(p2_element).hasClass(FLAG_IS_REQUIRED)){
      $(p2_element).find('.parts').each(function (index,c2_element){
        if($(c2_element).hasClass(FLAG_IS_SELECTED) == false){
          partsAmount[$(c2_element).attr('item-name')] += 1;
        }
      }); 
    }
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

/*---------------------------------------
ソート状態を貼りなおす
---------------------------------------*/
function updateSortable(){
  $('.sortable-area').sortable({
    connectWith: '.sortable-area'
  });
}

/*---------------------------------------
グループボックスを削除する
---------------------------------------*/
function clearGroupBox(){
  $('#wrap-groups').find('.group-box').each(function (index, element){
    //最初の箱だけ残して後は消す
    if(index == 0){
      $(element).find('.group-text').val('');
      $(element).find('.etc').val('');
      $(element).find('.group-items').empty();
    }else{
      $(element).remove();
    }
  });
}

/*---------------------------------------
メモ入力時の挙動
---------------------------------------*/
$(document).on('input', '.etc' , function(evt) {
  if(evt.target.scrollHeight > evt.target.offsetHeight){   
    $(evt.target).height(evt.target.scrollHeight);
  }else{          
    var lineHeight = Number($(evt.target).css("lineHeight").split("px")[0]);
    while (true){
        $(evt.target).height($(evt.target).height() - lineHeight); 
        if(evt.target.scrollHeight > evt.target.offsetHeight){
            $(evt.target).height(evt.target.scrollHeight);
            break;
        }
    }
  }
});
