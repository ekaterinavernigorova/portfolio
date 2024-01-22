<script>
$(".modal-close").addClass('close');
$(".uc-modal-window-1").appendTo('#modal-window').addClass('height');
$(".uc-modal-window-2").appendTo('#modal-window').addClass('height');
$(".uc-modal-window-3").appendTo('#modal-window').addClass('height');
$(".uc-modal-window-4").appendTo('#modal-window').addClass('height');
//////////////////////////////Добавляем содержимое в первую модалку////////////////////////////////////////////////////////////////
$(document).on('click', '.read-more-1', function(e) {
setTimeout(function() {
$(".uc-modal-window-1").addClass('can-show').removeClass('height');
$("#modal-window").addClass('active-modal');
$(".modal-close").addClass('modal-close-show');
}, 500);
$(".modal-overlay").addClass('active-overlay');
$(".t-body").addClass('hide-overflow');
$(".bg-img").addClass('bg-img-anim');
});
// Удаляем содержимое первой модалки
$(document).on('click', '.close, .modal-overlay', function(e) {
$("#modal-window").removeClass('active-modal');
$(".modal-close").removeClass('modal-close-show');
setTimeout(function() {
$("#modal-window .uc-modal-window-1").removeClass('can-show');
$(".uc-modal-window-1").addClass('height');
}, 1200);
$(".modal-overlay").removeClass('active-overlay');
$(".t-body").removeClass('hide-overflow');
});
//////////////////////////////Добавляем содержимое в 2 модалку////////////////////////////////////////////////////////////////
$(document).on('click', '.read-more-2', function(e) {
setTimeout(function() {
$(".uc-modal-window-2").addClass('can-show').removeClass('height');
$("#modal-window").addClass('active-modal');
$(".modal-close").addClass('modal-close-show');
}, 500);
$(".modal-overlay").addClass('active-overlay');
$(".t-body").addClass('hide-overflow');
$(".bg-img").addClass('bg-img-anim');
});
// Удаляем содержимое первой модалки
$(document).on('click', '.close, .modal-overlay', function(e) {
$("#modal-window").removeClass('active-modal');
$(".modal-close").removeClass('modal-close-show');
setTimeout(function() {
$("#modal-window .uc-modal-window-2").removeClass('can-show');
$(".uc-modal-window-2").addClass('height');
}, 1200);
$(".modal-overlay").removeClass('active-overlay');
$(".t-body").removeClass('hide-overflow');
});
//////////////////////////////Добавляем содержимое в 3 модалку////////////////////////////////////////////////////////////////
$(document).on('click', '.read-more-3', function(e) {
setTimeout(function() {
$(".uc-modal-window-3").addClass('can-show').removeClass('height');
$("#modal-window").addClass('active-modal');
$(".modal-close").addClass('modal-close-show');
}, 500);
$(".modal-overlay").addClass('active-overlay');
$(".t-body").addClass('hide-overflow');
$(".bg-img").addClass('bg-img-anim');
});
// Удаляем содержимое первой модалки
$(document).on('click', '.close, .modal-overlay', function(e) {
$("#modal-window").removeClass('active-modal');
$(".modal-close").removeClass('modal-close-show');
setTimeout(function() {
$("#modal-window .uc-modal-window-3").removeClass('can-show');
$(".uc-modal-window-3").addClass('height');
}, 1200);
$(".modal-overlay").removeClass('active-overlay');
$(".t-body").removeClass('hide-overflow');
});
//////////////////////////////Добавляем содержимое в 4 модалку////////////////////////////////////////////////////////////////
$(document).on('click', '.read-more-4', function(e) {
setTimeout(function() {
$(".uc-modal-window-4").addClass('can-show').removeClass('height');
$("#modal-window").addClass('active-modal');
$(".modal-close").addClass('modal-close-show');
}, 500);
$(".modal-overlay").addClass('active-overlay');
$(".t-body").addClass('hide-overflow');
$(".bg-img").addClass('bg-img-anim');
});
// Удаляем содержимое первой модалки
$(document).on('click', '.close, .modal-overlay', function(e) {
$("#modal-window").removeClass('active-modal');
$(".modal-close").removeClass('modal-close-show');
setTimeout(function() {
$("#modal-window .uc-modal-window-4").removeClass('can-show');
$(".uc-modal-window-4").addClass('height');
}, 1200);
$(".modal-overlay").removeClass('active-overlay');
$(".t-body").removeClass('hide-overflow');
});
</script>
