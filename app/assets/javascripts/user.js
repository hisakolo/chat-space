$(function() {

  var search_list = $("#user-search-result");

  function appendUser(user) {
  var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>`
  // $("#user-search-result").append(html)
  search_list.append(html);
}

var user_list = $(".js-add-user");
function addUser(name,user_id) {
  var html = `<div class='chat-group-user'>
  <input name='group[user_ids][]' type='hidden' value='${user_id}'>
  <p class='chat-group-user__name'>${name}</p>
  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
</div>`

  user_list.append(html);
}

  function appendErrMsgToHTML(msg){
    var html = 
                `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${msg}</p>
                </div>`;
                search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    console.log(input)

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(user) {
      $("#user-search-result").empty();
        if (user.length !== 0) {
          console.log("上のじょうけん");
          user.forEach(function(user){
          appendUser(user);
          });
        }
        else {
          appendErrMsgToHTML("一致するユーザーはいません");
          console.log("下の条件");
        }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });

  $("#user-search-result").on("click", ".user-search-add",function() {
    console.log(this)
    var name = $(this).data("user-name");
    var user_id = $(this).data("user-id");
    addUser(name,user_id);
    $(this).parent().remove();
  });

  $(".chat-group-users").on('click', '.user-search-remove', function() {
    console.log(this)
    var user_id = $(this).data('user-id');
    // addUser(name,user_id);
    $(this).parent().remove();
    // $(`#chat-group-user-${user_id}`).remove();
  });
});
