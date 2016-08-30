$('#add-link-button').on('click', function() {
  var titleInput = $('#title-input').val();
  var urlInput = $('#url-input').val();
  createSiteLink(titleInput, urlInput);
});

function createSiteLink(title, url) {
  var siteLink = '<li><a href="url">title</a><button class="remove-link">x</button><button class="mark-as-read">Mark as Read</li>'
  addToLinkList(siteLink);
  totalLinks();
}

function addToLinkList(siteLink) {
  $('.linked-list').append(siteLink);
}

totalLinks()

$('#title-input').on('keyup', function() {
  if ($('#title-input').val() !== ''){
    $('#add-link-button').prop('disabled', false);
  } else {
    $('#add-link-button').prop('disabled', true);
  }
})
// && $('#url-input').val() !== ''
