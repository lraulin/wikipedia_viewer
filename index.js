$(document).ready(function() {

  $("#search").click(function() {

    var searchTerm = $("#searchTerm").val();

    $.ajax({
      type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&callback=?',
      dataType: 'json',
      success: function(data) {

        $('#results').html('')

        for (var i=0; i<10; i++) {
          $('#results').append('<h3><a href=' + data[3][i] + ' target="blank">' + data[1][i] + '</a></h3><p>' + data[2][i] + '</p>');
        }
      },
      error: function(err) {
        alert("Error")
      },
    })

  });

  //Hit enter to search
  $('#searchTerm').bind('keypress', function(e) {
    if (e.keyCode == 13) {
      $('#search').click();
    }
  })
});
